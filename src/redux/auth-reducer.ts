import React from 'react';
import {PostsType, StateType} from "../state";


type SetUserDataActionType = ReturnType<typeof setUserDataAC>

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
export const setUserDataAC = (userId: number | null, email: string | null, login: string | null) => {
    return {
        type: 'SET_USER_DATA', data:{userId, email, login}
    } as const
}

