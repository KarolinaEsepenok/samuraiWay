import React from 'react';
import s from "../../Profile/ProfileInfo/ProfileInfo.module.css";
import {ProfileType} from "../../../../src/state";


type PropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
export const ProfileData = (props: PropsType) => {
    return (
        <div className={s.profileInformation}>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>Edit</button>
            </div>}
            <div>Full name: {props.profile.fullName}</div>
            <div>About me: {props.profile.aboutMe}</div>
            <div>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
            {props.profile.lookingForAJob &&
                <div>My professional skills: {props.profile.lookingForAJobDescription}</div>
            }

            <div>Contacts:
                <div> Website: {props.profile.website}</div>
                <div> Github: {props.profile.github}</div>
                <div> Instagram: {props.profile.instagram}</div>
                <div> VK: {props.profile.vk}</div>
                <div> Facebook: {props.profile.facebook}</div>
                <div> Twitter: {props.profile.twitter}</div>
                <div> Youtube: {props.profile.youtube}</div>

            </div>
        </div>
    );
}
