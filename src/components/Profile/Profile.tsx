import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {message} from "antd";
import {PostsType, MessageType, ProfilePageType} from "../../state";
import myPosts from "./MyPosts/MyPosts";

//export type MessageType = {
 //  message: string,
 // likeCounts: string
//}
export  type ProfileProps = {
    profilePage: ProfilePageType
    addPost:(message:string)=>void
    newPostText:string
}

function Profile(props: ProfileProps) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                   //  newPostText={props.profilePage.newPostText}
                     newPostText={props.newPostText}
                     addPost={props.addPost}/>


        </div>
    )
}

export default Profile;