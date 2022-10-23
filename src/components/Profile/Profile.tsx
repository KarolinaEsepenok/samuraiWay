import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";

import {ProfilePageType} from "../../state";



function Profile(props: {profilePage: ProfilePageType}) {

    return (
        <div>
            <ProfileInfo profilePage={props.profilePage} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;