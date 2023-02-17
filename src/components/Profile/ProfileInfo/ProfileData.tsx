import React from 'react';
import s from "../../Profile/ProfileInfo/ProfileInfo.module.css";
import {ProfileType} from "../../../../src/state";


type PropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileData = (props: PropsType) => {
    return (

        <div className={s.profileInformation}>
            {props.isOwner && <div>
                {/* <button onClick={props.goToEditMode}>Edit</button>*/}
            </div>}
            <div>Full name: {props.profile.fullName}</div>
            <div>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
            {props.profile.lookingForAJob &&
                <div>My professional skills: {props.profile.lookingForAJobDescription}</div>
            }

            <div>Contacts:
                <div> Website: {props.profile.website}</div>
                {props.profile.website && <div> Website: {props.profile.website}</div>}
                {props.profile.github && <div> Github: {props.profile.github}</div>}
                {props.profile.instagram && <div> Instagram: {props.profile.instagram}</div>}
                {props.profile.vk && <div> VK: {props.profile.vk}</div>}
                {props.profile.facebook && <div> Facebook: {props.profile.facebook}</div>}
                {props.profile.twitter && <div> Twitter: {props.profile.twitter}</div>}
                {props.profile.youtube && <div> Youtube: {props.profile.youtube}</div>}

            </div>
        </div>
    );
};

export default ProfileData;