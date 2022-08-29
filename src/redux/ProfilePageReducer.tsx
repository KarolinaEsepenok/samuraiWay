import React from 'react';
import {PostsType, StateType} from "../state";


type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType



const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState={
    posts: [
        {id: 1, message: 'Hi, how are you', likeCounts: '12'},
        {id: 2, message: 'It is my first post', likeCounts: '12'},
        {id: 1, message: 'Hi, how are you', likeCounts: '12'},
        {id: 2, message: 'It is my first post', likeCounts: '12'},

    ],
    newPostText: '',
}

export function ProfilePageReducer (action:ActionsTypes, state = initialState)  {
    switch (action.type){
        case ADD_POST: const newPost: PostsType = {
            id: new Date().getTime(),
            message: state.newPostText,
            likeCounts: '0'
        };
        let stateCopy = {...state}
            stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state};

            stateCopy.newPostText = action.newText;
            return stateCopy;
    }

}};
export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    } as const
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}
