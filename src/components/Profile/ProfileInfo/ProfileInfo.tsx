import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../state";
import ProfileStatus from "./ProfileStatus";
import user from "../../asses/img/user.svg";
import changeAva from "../../asses/img/changeAva.png"
import ProfileData from "../../Profile/ProfileInfo/ProfileData";
import {ProfileDataForm} from "../..//Profile/ProfileInfo/ProfileDataForm";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: () => void
}

function ProfileInfo(props: PropsType) {
    const [editMode, setEditMode]= useState(false)
    if (!props.profile) {
        return <Preloader isFetching={true}/>
    }
    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        if (e.target.files.length) {
            // @ts-ignore
            props.savePhoto(e.target.files[0])
        }
    }
    const photoSrc = props.profile?.photos.small
    return (
        <div>
            <div className={s.descriptionBlock}>
                {photoSrc ? <img className={s.profileImgCommon} src={photoSrc}/> :
                    <img className={s.profileImgCommon} src={user}/>}
                {props.isOwner &&
                    <label className={s.labelChangeAva} title={'Change photo'}><img src={changeAva}/>
                        <input type={'file'} onChange={mainPhotoSelected} className={s.changeAvatar}/>
                    </label>
                }
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {editMode ?
                    <ProfileDataForm isOwner={props.isOwner} goToEditMode={()=>{setEditMode(true)}} profile={props.profile}/>
                    : <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>}

            </div>
        </div>
    )
}

export default ProfileInfo;