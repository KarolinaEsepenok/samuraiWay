import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../state";
import ProfileStatus from "./ProfileStatus";
import user from "../../asses/img/user.svg";
import changeAva from "../../asses/img/changeAva.png"

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto:()=>void
}

function ProfileInfo(props: PropsType) {
    if (!props.profile) {
        return <Preloader isFetching={true}/>
    }
    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        if(e.target.files.length){
            // @ts-ignore
            props.savePhoto(e.target.files[0])
        }


    }

    const photoSrc = props.profile?.photos.small

    return (
        <div>
            <div>

            </div>

            <div className={s.descriptionBlock}>
                {photoSrc ? <img src={photoSrc}/> : <img className={s.profileImgCommon} src={user}/>}
                {props.isOwner &&
                    <label className={s.labelChangeAva}><img src={changeAva}/>
                        <input type={'file'} onChange={mainPhotoSelected} className={s.changeAvatar}/>
                    </label>
                   }
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;