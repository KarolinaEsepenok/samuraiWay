import React, {ChangeEvent} from 'react';

import {ActionsTypes, addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfilePageReducer";

import MyPosts from "../MyPosts";
import {PostsType} from "../../../../state";


export type PostPropType = {
    // posts: PostsType[]
    // addPost: (message: string) => void
    // // newPostText: string
    // dispatch: (action: ActionsTypes) => void
    // store:any
    // updateNewPostTextActionCreator(value:string): void;
}

function MyPostsContainer(props: PostPropType) {
    let state = props.store.getState()

    const addPost = () => {
      //  props.addPost()
        props.store.dispatch(addPostActionCreator())
        // props.addPost(props.newPostText);
        // props.newPostText = ''
    }

    let onPostChange = (value: string) => {
      //  props.updateNewPostTextActionCreator(text)
         let action = updateNewPostTextActionCreator(value)
        props.store.dispatch(action)
        //props.updateNewPostText(e.currentTarget.value);
        //   props.updateNewPostText(newPostElement.current.value)
        //console.log(props.newPostText)
    }
    return (
        <MyPosts  addPost={addPost} updateNewPostTextActionCreator={onPostChange} posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}/>


    )
}
export default MyPostsContainer;