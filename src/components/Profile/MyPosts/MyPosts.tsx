import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {message} from "antd";
import Profile from "../Profile";
import {PostsType, MessageType} from "../../../state";



export type PostPropType = {
    posts: PostsType[]

}

function MyPosts(props: PostPropType) {
    let postsElement = props.posts.map((p) => <Post message={p.message} likeCounts={p.likeCounts}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
      alert(newPostElement.current?.value)
    }
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement} ></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>


    )
}

export default MyPosts;