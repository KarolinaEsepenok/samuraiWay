import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {message} from "antd";
import Profile from "../Profile";
import {PostsType, MessageType} from "../../../State";



export type PostPropType = {
    posts: PostsType[]
    messagesData: MessageType[]
}

function MyPosts(props: PostPropType) {


    let postsElement = props.posts.map((p) => <Post message={p.message} likeCounts={p.likeCounts}/>)
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