import {connect} from "react-redux";

import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followAC, getUsers,
    onPageChangedAC,
    setCurrentPageAC,
    toggleFollowingProgressAC,
    unfollowAC, UsersType
} from "../../redux/UsersReducer";

import Users from "./Users";
import React from "react";

import Preloader from "../common/Preloader/Preloader";



class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber,this.props.pageSize)

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader isFetching={this.props.isFetching}/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
                   setCurrentPage={this.props.setCurrentPage}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}followingInProgress={this.props.followingInProgress}

            />
        </>
    }}
export default UsersContainer


export let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress

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

        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },

        onPageChanged: (pageNumber: number) => {
            dispatch(onPageChangedAC(pageNumber))
        },

        toggleFollowingProgress:(isFetching:boolean,userId:number)=>{
            dispatch(toggleFollowingProgressAC(isFetching, userId))
        }
    }
}
type MapStatePropsType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
    followingInProgress:any
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
   // setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
 //   setTotalUsersCount: (totalUsersCount: number) => void
  //  onPageChanged: (pageNumber: number) => void
   // toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress:(isFetching:boolean, userId:number)=>void

    /*
    Array<string>
    string[]
    */
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
export const UserContainer = connect(mapStateToProps, {mapDispatchToProps,getUsers:getUsers})(UsersContainer);
