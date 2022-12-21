import React from 'react';
import s from './ProfileInfo.module.css'
import {AppStateType} from "../../../redux/reduxStore";
import Preloader from "../../common/Preloader/Preloader";
import {ProfilePageType, ProfileType} from "../../../state";
import ProfileStatus from "./ProfileStatus";
import user from "../../asses/img/user.svg"

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status:string)=>void
}

function ProfileInfo(props:PropsType) {
    if(!props.profile){
        return <Preloader isFetching={true}/>
    }

    const photoSrc = props.profile?.photos.small

    return (
        <div >
            <div >

            </div>

            <div className={s.descriptionBlock}>
                {photoSrc ? <img src={photoSrc}/> : <img  className={s.profileImgCommon} src={user}/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;