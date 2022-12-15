import React from 'react';
import {PostsType, StateType} from "../state";
import {Dispatch} from "redux";
import {authAPI} from "../components/api/api-js";
import {stopSubmit} from "redux-form";
import {AppStateType, RootState} from "./reduxStore";
import {ThunkAction} from "redux-thunk";
import {getAuthUserData} from "./auth-reducer";


type InitializedSuccessType = ReturnType<typeof initializedSuccess>
export type ActionsTypes = InitializedSuccessType
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState: InitialState = {
    initialized:false

};
type InitialState = {
    initialized:boolean
}
export function appReducer(state = initialState, action: ActionsTypes): InitialState {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized:true,
            }
        default:
            return state;
    }
};
export const initializedSuccess = () => {
    return {
        type: 'INITIALIZED_SUCCESS'
    } as const
}

//export type ThunkGetUsersType= ThunkAction<void, AppStateType, unknown, ActionsTypes>

export const initializeApp =():any=>{
   return  (dispatch:Dispatch<any>)=>{
       let promise = dispatch(getAuthUserData())
       Promise.all([promise])
           .then(()=>{
           dispatch(initializedSuccess())
       })

    }}


