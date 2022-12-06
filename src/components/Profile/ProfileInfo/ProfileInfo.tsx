import React from 'react';
import s from './ProfileInfo.module.css'
import {AppStateType} from "../../../redux/reduxStore";
import Preloader from "../../common/Preloader/Preloader";
import {ProfilePageType, ProfileType} from "../../../state";
import ProfileStatus from "./ProfileStatus";

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
                <img  className={s.mainImg} src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}/>
            </div>

            <div className={s.descriptionBlock}>
                {photoSrc ? <img src={photoSrc}/> : <img  className={s.profileImgCommon} src={'https://w7.pngwing.com/pngs/409/621/png-transparent-computer-icons-avatar-male-user-profile-others-logo-monochrome-silhouette.png'}/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;