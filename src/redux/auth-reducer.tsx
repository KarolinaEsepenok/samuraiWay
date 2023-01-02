import React from 'react';
import {PostsType, StateType} from "../state";
import {Dispatch} from "redux";
import {authAPI} from "../components/api/api-js";
import {stopSubmit} from "redux-form";
import {AppStateType, RootState} from "./reduxStore";
import {ThunkAction} from "redux-thunk";
import {debuglog} from "util";


type SetUserDataActionType = ReturnType<typeof setAuthUserData>
export type ActionsTypes = SetUserDataActionType
const AUTH_SET_USER_DATA = 'auth/SET_USER_DATA';

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
        case AUTH_SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
};
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null,isAuth:boolean) => {
    return {
        type: 'auth/SET_USER_DATA', payload:{userId, email, login,isAuth}
    } as const
}

export type ThunkGetUsersType= ThunkAction<void, AppStateType, unknown, ActionsTypes>
export const getAuthUserData=():ThunkGetUsersType=> async (dispatch:Dispatch)=>{
    let response = await authAPI.me()
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login, true))
                }
    }
export const login=(email:string,password:string, rememberMe:boolean)=>async (dispatch:Dispatch<any>)=>{
       let response=await  authAPI.login(email,password, rememberMe)
                if(response.data.resultCode === 0){
                    dispatch(getAuthUserData())
                    //let {id, email,login} = response.data.data
                    //dispatch(setAuthUserData(id, email, login, true))
                }else{
                  let message = response.data.message.length > 0 ? response.data.message[0]: "Some Error"
                    dispatch(stopSubmit("login",{_error:message}))
                }
    }
export const logout=()=>async (dispatch:Dispatch)=>{
      let response = await  authAPI.logout()
                if(response.data.resultCode === 0){
                    dispatch(setAuthUserData(null,null,null, false))
    }}

