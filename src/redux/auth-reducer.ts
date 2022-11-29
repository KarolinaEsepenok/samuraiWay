import React from 'react';
import {PostsType, StateType} from "../state";
import {Dispatch} from "redux";
import {authAPI} from "../components/api/api-js";


type SetUserDataActionType = ReturnType<typeof setAuthUserData>

export type ActionsTypes = SetUserDataActionType


const SET_USER_DATA = 'SET_USER_DATA';


let initialState: InitialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false

};
type InitialState = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth:boolean

}

export function AuthReducer(state = initialState, action: ActionsTypes): InitialState {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }

        default:
            return state;
    }
};

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => {
    return {
        type: 'SET_USER_DATA', data:{userId, email, login}
    } as const
}
export const getAuthUserData=(dispatch:Dispatch)=>{
    authAPI.me()
        .then(response => {
        if(response.data.resultCode === 0){
            let {id, email,login} = response.data.data
            dispatch(setAuthUserData(id,email,login))
        }
    })

}

