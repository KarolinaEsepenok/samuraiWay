import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {message} from "antd";
import {PostsType, MessageType} from "../../State";
import myPosts from "./MyPosts/MyPosts";

//export type MessageType = {
 //  message: string,
 // likeCounts: string
//}
export  type ProfileProps = {
    posts: PostsType[]
    messagesData: MessageType[]

}

function Profile(props: ProfileProps) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts messagesData={props.messagesData} posts={props.posts}/>


        </div>
    )
}

export default Profile;