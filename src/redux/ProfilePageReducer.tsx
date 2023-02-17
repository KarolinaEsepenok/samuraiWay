import React from 'react';
import { PostsType, ProfilePageType, ProfileType, StateType} from "../state";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../components/api/api-js";
import profile from "../components/Profile/Profile";
import {AppStateType} from "../redux/reduxStore";

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type SetUserProfile = ReturnType<typeof setUserProfile>
type SetStatus = ReturnType<typeof setStatus>
type UpdateStatus = ReturnType<typeof setUpdateStatus>
type DeletePost = ReturnType<typeof deletePost>
type SavePhoto = ReturnType<typeof savePhotoSuccess>
//type SaveProfile = ReturnType<typeof saveProfileSuccess>

export type ActionsTypes = AddPostActionType | SetUserProfile | SetStatus | UpdateStatus | DeletePost | SavePhoto

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
//const SAVE_PROFILE_SUCCESS ='SAVE_PROFILE_SUCCESS'


let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you', likeCounts: '12'},
        {id: 2, message: 'It is my first post', likeCounts: '12'},
        {id: 1, message: 'Hi, how are you', likeCounts: '12'},
        {id: 2, message: 'It is my first post', likeCounts: '12'},
    ],
    profile: null,
    status: " "
}

export function ProfilePageReducer(state = initialState, action: ActionsTypes): ProfilePageType {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likeCounts: '0'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case UPDATE_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {
            //@ts-ignore
            return {...state, profile:{...state.profile, photos:action.photos}}
        }
        {/*  case SAVE_PROFILE_SUCCESS: {
            return {...state, profile:action.profile}
        }*/}
        default:
            return state
    }
};
export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST, newPostText
    } as const
}
export const setUserProfile = (profile: null | ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
export const deletePost = (postId: number) => {
    return {
        type: DELETE_POST,
        postId
    } as const
}
export const setUpdateStatus = (status: string) => {
    return {
        type: UPDATE_STATUS,
        status
    } as const
}
export const savePhotoSuccess = (photos:any) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    } as const
}
{/*export const saveProfileSuccess = (profile:ProfileType) => {
    return {
        type: SAVE_PROFILE_SUCCESS,
        profile
    } as const
}*/}
export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUpdateStatus(status))
    }
}
export const savePhoto = (file: any) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: Dispatch,getState:()=>AppStateType) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        // @ts-ignore
        dispatch(getUserProfile(userId))
    }
    else {
        const errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"

        //find contact with error
        const errorArray = response.data.messages[0].toLowerCase().split("->")
        let contactWithError = errorArray[1].slice(0, -1)
        if (contactWithError === "mainlink") {
            contactWithError = "mainLink"
        }
        const obj: any = {}
        obj[contactWithError] = errorMessage

        //dispatch(stopSubmit("edit_profile", {"contacts": obj}))
    }
}