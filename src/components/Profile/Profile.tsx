import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import {AppStateType} from "../../redux/reduxStore";
import {ProfilePageType} from "../../state";



function Profile(props:ProfilePageType) {

    return (
        <div>
            <ProfileInfo profilePage={props.} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;