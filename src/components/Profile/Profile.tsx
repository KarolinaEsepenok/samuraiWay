import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";

type MessageType = {
    message: string,
    likeCounts: string
}
function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}/>
            </div>

            <div>
                ava +discr
            </div>
            <MyPosts  message={'Hi, how are you'} likeCounts={'23'}/>


        </div>
    )
}

export default Profile;