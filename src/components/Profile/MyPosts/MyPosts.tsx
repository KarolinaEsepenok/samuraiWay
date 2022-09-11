import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes} from "../../../redux/ProfilePageReducer";
import {PostsType} from "../../../state";
import message from "../../Dialogs/Message/Message";


export type PostPropType = {
    posts: PostsType[]
    addPost: (message: string) => void
    newPostText: string
    //dispatch: (action: ActionsTypes) => void
    updateNewPostTextActionCreator(value: string): void;
}

function MyPosts(props: PostPropType) {
    let postsElement = props.posts.map((p) => <Post message={p.message} likeCounts={p.likeCounts}/>)
     let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onAddPost = () => {
       props.addPost(props.newPostText)
      //  props.dispatch(addPostActionCreator())
       // props.addPost(props.newPostText);
       // props.newPostText = ''
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostTextActionCreator(text)
       // let action = updateNewPostTextActionCreator(text)
        //props.dispatch(action)
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
                             value={props.newPostText}
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