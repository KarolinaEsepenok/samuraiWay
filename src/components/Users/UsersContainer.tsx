import {connect} from "react-redux";

import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followAC,
    onPageChangedAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC
} from "../../redux/UsersReducer";

import axios from "axios";
import Users from "./Users";
import React from "react";
import preloader from './../asses/img/preloader.gif'
import Preloader from "../common/Preloader/Preloader";

const UsersAPIComponent = (props: UsersPropsType) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`).then(responce => {
                props.toggleIsFetching(false)
                props.setUsers(responce.data.items)
                props.setTotalUsersCount(responce.data.totalCount)
            });
        }
    }
    const onPageChanged=(pageNumber:number)=>{
        props.setCurrentPage(pageNumber);
        props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`).then(responce => {
            props.toggleIsFetching(false)
            props.setUsers(responce.data.items)
        });
    }
    return <div>{props.isFetching ? <Preloader isFetching={props.isFetching}/> : null}
        <Users totalUsersCount={props.totalUsersCount} toggleIsFetching={props.toggleIsFetching}
                  pageSize={props.pageSize}
                  currentPage={props.currentPage}
                  onPageChanged={onPageChanged}
                  users={props.users}
                  setUsers={props.setUsers}
                  setTotalUsersCount={props.setTotalUsersCount}
                  follow={props.follow}
                  unfollow={props.unfollow}
                  setCurrentPage={props.setCurrentPage}
                 isFetching={props.isFetching}
    /></div>

};

export default UsersAPIComponent;

export let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching

    }
}
export let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: { id: number, photos: {small: string, large: string}, followed: boolean, name: string, status: string, location: { city: string, country: string } }[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalUsersCount:number)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        onPageChanged:(pageNumber:number)=>{
            dispatch(onPageChangedAC(pageNumber))
        },
        toggleIsFetching:(isFetching:boolean)=>{
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}
type MapStatePropsType = {

    users: { id: number, photos: {small: string, large: string}, followed: boolean, name: string, status: string, location: { city: string, country: string } }[],
    pageSize: number,
    totalUsersCount: number,
    currentPage:number,
    isFetching:boolean


}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: { id: number, photos: {small: string, large: string}, followed: boolean, name: string, status: string, location: { city: string, country: string } }[]) => void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalUsersCount:number)=>void
    onPageChanged:(pageNumber:number)=>void
    toggleIsFetching:(isFetching:boolean)=>void
    /*
    Array<string>
    string[]
    */
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
