import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {message} from "antd";
import Profile from "../Profile";


type MessageType = {
    message: string,
    likeCounts: string
}
function MyPosts(props:MessageType) {


    let postsElement= posts.map((p)=><Post message={p.message} likeCounts={p.likeCounts}/>)
    return (
        <div className={s.postsBlock}>
           <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>


    )
}

export default MyPosts;