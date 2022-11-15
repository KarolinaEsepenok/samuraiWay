import {connect} from "react-redux";

import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followAC,
    onPageChangedAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleFollowingProgressAC, toggleIsFetchingAC,
    unfollowAC
} from "../../redux/UsersReducer";

import axios from "axios";
import Users from "./Users";
import React from "react";
import preloader from './../asses/img/preloader.gif'
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../api/api-js";


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount);
        });
    }
    onPageChanged = (pageNumber: number,pageSize:number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader isFetching={this.props.isFetching}/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   toggleIsFetching={this.props.toggleIsFetching}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.props.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
                   setTotalUsersCount={this.props.setTotalUsersCount}
                   setUsers={this.props.setUsers}
                   setCurrentPage={this.props.setCurrentPage} toggleFollowingProgress={this.props.toggleFollowingProgress}

            />
        </>
    }}


export let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        setUsers: (users: { id: number, photos: { small: string, large: string }, followed: boolean, name: string, status: string, location: { city: string, country: string } }[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        onPageChanged: (pageNumber: number) => {
            dispatch(onPageChangedAC(pageNumber))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
        toggleFollowingProgress:(isFetching:boolean)=>{
            dispatch(toggleFollowingProgressAC(isFetching))
        }
    }
}
type MapStatePropsType = {
    users: { id: number, photos: { small: string, large: string }, followed: boolean, name: string, status: string, location: { city: string, country: string } }[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: { id: number, photos: { small: string, large: string }, followed: boolean, name: string, status: string, location: { city: string, country: string } }[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress:(isFetching:boolean)=>void

    /*
    Array<string>
    string[]
    */
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
