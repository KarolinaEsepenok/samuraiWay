import React from 'react';
import {PostsType, StateType} from "../state";


type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>
export type ActionsTypes = FollowActionType | UnfollowActionType


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
let initialState = {
    users: [
        {id: 1,followed:false, fullName: 'Dmitry',status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2,followed:false, fullName: 'Sveta',status: 'I am a boss', location: {city: 'Borisov', country: 'Belarus'}},
        {id: 3,followed:true, fullName: 'Ann',status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
        {id: 4,followed:false, fullName: 'Vlad',status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}},

    ]

}

export function UsersReducer(state = initialState,action: ActionsTypes) {
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
            }bnbb
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


        default: return state

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
