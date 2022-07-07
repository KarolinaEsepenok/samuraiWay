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
   state: ProfilePageType
}

function Profile(props: ProfileProps) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>


        </div>
    )
}

export default Profile;