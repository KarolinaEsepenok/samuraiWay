import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../redux/ProfilePageReducer";
import {AppStateType} from "../../../redux/reduxStore";
import {PostsType, ProfilePageType} from "../../../state";
import {Dispatch} from "redux";


let mapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage
      //  posts: state.profilePage.posts,
        //newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch:Dispatch
            //(arg0: { type: "ADD-POST" | "UPDATE-NEW-POST-TEXT"; newText?: string; }) => void
) => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}
export type MapStatePropsType = {
    //posts: PostsType[],
    //newPostText: string,
    profilePage:ProfilePageType
}
export type MapDispatchPropsType = {
   // updateNewPostText: (text:string)=>void
    addPost: (newPostText:string)=>void
}
export type MyPostPropsType = MapStatePropsType & MapDispatchPropsType
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts)