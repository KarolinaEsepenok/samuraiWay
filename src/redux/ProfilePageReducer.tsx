import React from 'react';
import {DialogsType, MessageType, PostsType, ProfileType, StateType} from "../state";


type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
type SetUserProfile = ReturnType<typeof setUserProfile >
export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | SetUserProfile


export type ProfilePageType = {
    posts:PostsType[]
    newPostText:string
    profile: null | ProfileType
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';




let initialState:ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you', likeCounts: '12'},
        {id: 2, message: 'It is my first post', likeCounts: '12'},
        {id: 1, message: 'Hi, how are you', likeCounts: '12'},
        {id: 2, message: 'It is my first post', likeCounts: '12'},

    ],
    newPostText: '',
    profile:null
}

export function ProfilePageReducer(state = initialState,action: ActionsTypes):ProfilePageType {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCounts: '0'
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText: action.newText
            };}
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        default: return state

    }
};
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}
export const setUserProfile = (profile: null | ProfileType) => {
    return {
        type: SET_USER_PROFILE,
       profile
    } as const
}
