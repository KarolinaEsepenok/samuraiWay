import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../state";
import s from "./Profile.module.css";
import {Paginator} from "../common/Paginator/Paginator";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status:string)=>void
    isOwner:boolean
    savePhoto:()=>void
}
function Profile(props: PropsType) {

    return (
        <div className={s.ProfileContainer}>

            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;