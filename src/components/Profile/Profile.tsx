import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {message} from "antd";


function Profile() {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts message={'Hi'} likeCounts={'23'}/>


        </div>
    )
}

export default Profile;