import React from 'react';
import {PostsType, StateType} from "../state";
import {Dispatch} from "redux";
import {usersAPI} from "../components/api/api-js";


type FollowActionType = ReturnType<typeof followSuccess>
type UnfollowActionType = ReturnType<typeof unfollowSuccess>
type SetUsersActionType = ReturnType<typeof setUsers >
type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type onPageChangedActionType = ReturnType<typeof onPageChangedAC>
type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
type ToggleFollowingProgressActionType= ReturnType<typeof toggleFollowingProgressAC>
export type ActionsTypes = FollowActionType | UnfollowActionType
    | SetUsersActionType | SetCurrentPageActionType
    | SetTotalUsersCountActionType | onPageChangedActionType
| ToggleIsFetchingActionType | ToggleFollowingProgressActionType


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const ON_PAGE_CHANGED = 'ON_PAGE_CHANGED';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState:InitialState = {
   users:[],
    pageSize:5,
    totalUsersCount: 54,
    currentPage:1,
    isFetching: false,
    followingInProgress: true
};

type InitialState = {
    users:  UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage:number,
    isFetching: boolean,
    followingInProgress: any

}
export type UsersType={
    id: number, photos: {small: string, large: string}, followed: boolean, name: string, status: string, location: { city: string, country: string }
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

            }

        }
        case ON_PAGE_CHANGED: {
            return {...state, pageSize:action.pageNumber}
        }
        case TOGGLE_IS_FETCHING:{
            return  {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return  {...state,
                followingInProgress: action.isFetching ?[...state.followingInProgress, action.userId]
                    :state.followingInProgress.filter((id: number) => id != action.userId)}
        }
        default: return state;

    }
};
export const followSuccess = (userId:number) => {
    return {
        type: FOLLOW, userId
    } as const
}
export const unfollowSuccess = (userId:number) => {
    return {
        type: UNFOLLOW,userId

    } as const
}
export const setUsers = (users:UsersType[]) => {
    return {
        type: SET_USERS,users

    } as const
}
export const setCurrentPageAC = (currentPage:number) => {
    return {
        type: SET_CURRENT_PAGE,currentPage

    } as const
}
export const setTotalUsersCount = (totalUsersCount:number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,count:totalUsersCount

    } as const
}
export const onPageChangedAC = (pageNumber:number) => {
    return {
        type: ON_PAGE_CHANGED,pageNumber

    } as const
}
export const toggleIsFetching = (isFetching:boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,isFetching

    } as const
}
export const toggleFollowingProgressAC= (isFetching:boolean, userId:number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,isFetching, userId

    } as const
}

export const getUsers=(currentPage:number, pageSize:number)=>{
    return (dispatch:Dispatch) => {

    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount));
    });

}}

export const getUsers=(currentPage:number, pageSize:number)=>{
    return (dispatch:Dispatch) => {

        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount));
        });

    }}


{/*this.props.setCurrentPage(pageNumber);
this.props.toggleIsFetching(true)
usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
    this.props.toggleIsFetching(false)
    this.props.setUsers(data.items)
});*/}