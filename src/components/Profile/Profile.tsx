import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../state";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status:string)=>void
}

function Profile(props: PropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;