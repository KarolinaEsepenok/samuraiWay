import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {message} from "antd";
import {PostsType, MessageType, ProfilePageType} from "../../state";
import {ActionsTypes} from "../../redux/ProfilePageReducer";
import myPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/Post/MyPostContainer";

//export type MessageType = {
 //  message: string,
 // likeCounts: string
//}
export  type ProfileProps = {
    profilePage: ProfilePageType
    addPost:(message:string)=>void
    newPostText:string
    dispatch: (action: ActionsTypes) => void
    store: ActionsTypes
    updateNewPostTextActionCreator: any

}

function Profile(props: ProfileProps) {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer {...props.newPostText}
            updateNewPostTextActionCreator={props.updateNewPostTextActionCreator}
                posts={props.profilePage.posts}
                    dispatch={props.dispatch}

            //  newPostText={props.profilePage.newPostText}
                   // newPostText={props.newPostText}
                     addPost={props.addPost}
            // addPost={props.addPost}
               store={props.store}
            />


        </div>
    )
}

export default Profile;