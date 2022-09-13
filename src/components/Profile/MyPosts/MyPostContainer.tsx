import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfilePageReducer";
import {AppStateType} from "../../../redux/reduxStore";
import { ProfilePageType} from "../../../state";
import {Dispatch} from "redux";


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch:Dispatch
            //(arg0: { type: "ADD-POST" | "UPDATE-NEW-POST-TEXT"; newText?: string; }) => void
) => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}
export type MapStatePropsType = {
    profilePage:ProfilePageType
}
export type MapDispatchPropsType = {
    updateNewPostText: (text:string)=>void
    addPost: ()=>void
}
export type MyPostPropsType = MapStatePropsType & MapDispatchPropsType
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts)