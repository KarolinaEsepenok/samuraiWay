import React from 'react';
import {ProfileType} from "../../../../src/state";
import s from "../../Profile/ProfileInfo/ProfileInfo.module.css";
import {createField, Input} from "../../common/FormsControls/FormsControls";

type PropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
export const ProfileDataForm = (props:PropsType) => {
    return (
        <form className={s.profileInformation}>
            <div>
                <button onClick={props.goToEditMode}>Save</button>
            </div>
            <div>Full name: {createField('Fullname', 'fullName', [], Input, props)}</div>
            <div>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
            {props.profile.lookingForAJob &&
                <div>My professional skills: {props.profile.lookingForAJobDescription}</div>
            }
            {/*
            <div>Contacts:
                <div> Website: {props.profile.website}</div>
                {props.profile.website && <div> Website: {props.profile.website}</div>}
                {props.profile.github && <div> Github: {props.profile.github}</div>}
                {props.profile.instagram && <div> Instagram: {props.profile.instagram}</div>}
                {props.profile.vk && <div> VK: {props.profile.vk}</div>}
                {props.profile.facebook && <div> Facebook: {props.profile.facebook}</div>}
                {props.profile.twitter && <div> Twitter: {props.profile.twitter}</div>}
                {props.profile.youtube && <div> Youtube: {props.profile.youtube}</div>}

            </div>*/}
        </form>
    );
};
