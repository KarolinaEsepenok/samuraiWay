import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostContainer";

import {Field, InjectedFormProps, reduxForm} from "redux-form";

type AddPostType={
    newPostText:string
}

function MyPosts(props: MyPostPropsType) {
    let postsElement = props.profilePage.posts.map((p) => <Post message={p.message} likeCounts={p.likeCounts}/>)
    // let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onAddPost = (values:AddPostType) => {
        props.addPost(values.newPostText)
    }

        return (
            <div className={s.postsBlock}>

                <h2>My posts</h2>
               <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>


        )
}

export default MyPosts;
export const AddNewPostForm:React.FC<InjectedFormProps<AddPostType>> = (props:any)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                    <Field name={'newPostText'} component={'textarea'}
                    ></Field></div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export const AddNewPostFormRedux = reduxForm<AddPostType>({form:'ProfileAddNewPostForm'})(AddNewPostForm)