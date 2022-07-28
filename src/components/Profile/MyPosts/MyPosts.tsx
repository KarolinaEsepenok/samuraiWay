import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {message} from "antd";
import Profile from "../Profile";
import {PostsType, MessageType, addPostActionCreator, updateNewPostTextActionCreator} from "../../../state";
import {text} from "stream/consumers";



export type PostPropType = {
    posts: PostsType[]
    addPost: (message: string) => void
    newPostText: string

    updateNewPostText(value: string): void;
}

function MyPosts(props: PostPropType) {
    let postsElement = props.posts.map((p) => <Post message={p.message} likeCounts={p.likeCounts}/>)
    // let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        props.dispatch(addPostActionCreator())
       // props.addPost(props.newPostText);
       // props.newPostText = ''
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = newPostElement.currentTarget.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
        //props.updateNewPostText(e.currentTarget.value);
        //   props.updateNewPostText(newPostElement.current.value)
        //console.log(props.newPostText)
    }
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                           //  value={props.newPostText}
                    ></textarea></div>
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