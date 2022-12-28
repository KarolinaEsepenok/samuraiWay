import React from 'react';
import {DialogsType, MessageType, PostsType, ProfilePageType, ProfileType, StateType} from "../state";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../components/api/api-js";


type AddPostActionType = ReturnType<typeof addPostActionCreator>
type SetUserProfile = ReturnType<typeof setUserProfile >
type SetStatus = ReturnType<typeof setStatus >
type UpdateStatus = ReturnType<typeof setUpdateStatus >
type DeletePost = ReturnType<typeof deletePost>

export type ActionsTypes = AddPostActionType |  SetUserProfile |SetStatus |UpdateStatus |DeletePost

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const DELETE_POST= 'DELETE_POST'


let initialState:ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you', likeCounts: '12'},
        {id: 2, message: 'It is my first post', likeCounts: '12'},
        {id: 1, message: 'Hi, how are you', likeCounts: '12'},
        {id: 2, message: 'It is my first post', likeCounts: '12'},
    ],
    profile:null,
    status: " "
}

export function ProfilePageReducer(state = initialState,action: ActionsTypes):ProfilePageType {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likeCounts: '0'
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        case SET_STATUS:{
            return {...state,status: action.status}
        }
        case UPDATE_STATUS:{
            return {...state,status: action.status}
        }
        case DELETE_POST:{
            return {...state, posts: state.posts.filter(p=>p.id!=action.postId)}
        }
        default: return state
    }
};
export const addPostActionCreator = (newPostText:string) => {
    return {
        type: ADD_POST,newPostText
    } as const
}
export const setUserProfile = (profile: null | ProfileType) => {
    return {
        type: SET_USER_PROFILE,
       profile
    } as const
}
export const setStatus = (status:string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
export const deletePost = (postId:number) => {
    return {
        type: DELETE_POST,
       postId
    } as const
}
export const setUpdateStatus = (status:string) => {
    return {
        type: UPDATE_STATUS,
        status
    } as const
}
export const getUserProfile = (userId:number) =>(dispatch:Dispatch)=>{
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))})
}
export const getStatus= (userId:number) =>(dispatch:Dispatch)=>{
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))})
}
export const updateStatus= (status:string) =>(dispatch:Dispatch)=>{
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setUpdateStatus(status))
            }
            })
}

