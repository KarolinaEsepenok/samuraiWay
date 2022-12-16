import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../state";
import s from "./Profile.module.css"

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status:string)=>void
}

function Profile(props: PropsType) {

    return (
        <div className={s.ProfileContainer}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;