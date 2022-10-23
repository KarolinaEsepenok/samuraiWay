import React from 'react';
import s from './ProfileInfo.module.css'
import {AppStateType} from "../../../redux/reduxStore";
import Preloader from "../../common/Preloader/Preloader";
import {ProfilePageType, ProfileType} from "../../../state";


function ProfileInfo(props: {profilePage: ProfilePageType}) {
    if(!props.profilePage){
        return <Preloader isFetching={true}/>
    }
    return (
        <div >
            <div >
                <img  className={s.mainImg} src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}/>
            </div>

            <div className={s.descriptionBlock}>
                <img src={props.profilePage.profile?.profile.photos.large}/>
                ava +discr
            </div>
        </div>
    )
}

export default ProfileInfo;