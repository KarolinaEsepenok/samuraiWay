import React, {FormEventHandler} from 'react';
import {ProfileType} from "../../../../src/state";
import s from "../../Profile/ProfileInfo/ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import profile from "../../Profile/Profile";

type PropsType = {
    profile: ProfileType,
}
const ProfileDataForm = (props:InjectedFormProps<PropsType>) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.profileInformation}>
            <div>
                <button type={'submit'} >Save</button>
            </div>
            <div>Full name: {createField('Full name', 'fullName', [], Input, {})}</div>
            <div>About me: {createField('About me', 'aboutMe', [], Textarea, {})}</div>
            <div>Looking for a job:
                {createField('', 'lookingForAJob', [], Input,{type:'checkbox'})}
            </div>
                    {createField('My professional skills', 'lookingForAJobDescription', [], Textarea, {})}

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

// @ts-ignore
const ProfileDataFormReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;