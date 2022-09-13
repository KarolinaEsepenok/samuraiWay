import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostContainer";

function MyPosts(props: MyPostPropsType) {
    let postsElement = props.profilePage.posts.map((p) => <Post message={p.message} likeCounts={p.likeCounts}/>)
    // let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onAddPost = () => {
        props.addPost()
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }
        return (
            <div className={s.postsBlock}>
                <Post message={'hfhfhfhfhfh'} likeCounts={'34'}/>
                <h2>My posts</h2>
                <div>
                    <div>
                    <textarea onChange={onPostChange}
                              value={props.profilePage.newPostText}
                    ></textarea></div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>


        )
}

export default MyPosts;