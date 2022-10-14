import React from 'react';
import {PostsType, StateType} from "../state";


type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC >
type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
export type ActionsTypes = FollowActionType | UnfollowActionType | SetUsersActionType | SetCurrentPageActionType | SetTotalUsersCountActionType


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


let initialState:InitialState = {
   users:[],
    pageSize:5,
    totalUsersCount: 0,
    currentPage:1
};

type InitialState = {
    users:  { id: number, photos: {small: string, large: string}, followed: boolean, name: string, status: string, location: { city: string, country: string } }[],
    pageSize: number,
    totalUsersCount: number,
    currentPage:number

}


export function UsersReducer(state = initialState,action: ActionsTypes): InitialState {
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
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return { ...state,currentPage:action.currentPage

            }
        case SET_TOTAL_USERS_COUNT:{
            return { ...state,totalUsersCount:action.count

            }}





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
export const setUsersAC = (users:{id: number,photos: {small: string, large: string},followed:boolean, name: string,status: string, location: {city:string, country: string}}[]) => {
    return {
        type: SET_USERS,users

    } as const
}
export const setCurrentPageAC = (currentPage:number) => {
    return {
        type: SET_CURRENT_PAGE,currentPage

    } as const
}
export const setTotalUsersCountAC = (totalUsersCount:number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,count:totalUsersCount

    } as const
}

