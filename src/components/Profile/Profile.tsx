import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";


function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}/>
            </div>
            <div>
                <img src={'https://photoscissors.com/images/samples/3-before.jpg'}/></div>
            <div>
                ava +discr
            </div>
            <MyPosts/>
            <MyPosts/>
            <Post/>
            <Post/>

        </div>
    )
}

export default Profile;