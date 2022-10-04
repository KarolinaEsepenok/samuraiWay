import React from 'react';
import {PostsType, StateType} from "../state";


type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC >
export type ActionsTypes = FollowActionType | UnfollowActionType | SetUsersActionType


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState :  SetUsersActionType= {
   users:[]
};



export function UsersReducer(state = initialState,action: ActionsTypes): SetUsersActionType {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    })
                }
        case SET_USERS:
            return { ...state,
                users: [...state.users, ...action.users]
            }



        default: return state;

    }
};
export const followAC = (userId:number) => {
    return {
        type: FOLLOW, userId
    } as const
}
export const unfollowAC = (userId:number) => {
    return {
        type: UNFOLLOW,userId

    } as const
}
export const setUsersAC = (users:[{id: number,photoUrl:string,followed:boolean, fullName: string,status: string, location: {city:string, country: string}}]) => {
    return {
        type: SET_USERS,users

    } as const
}

