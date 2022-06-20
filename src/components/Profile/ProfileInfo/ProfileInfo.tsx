import React from 'react';
import s from './ProfileInfo.module.css'


function ProfileInfo() {
    return (
        <div >
            <div >
                <img  className={s.mainImg} src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}/>
            </div>

            <div className={s.descriptionBlock}>
                ava +discr
            </div>
        </div>
    )
}

export default ProfileInfo;