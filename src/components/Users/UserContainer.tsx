import {connect} from "react-redux";

import {AppStateType} from "../../redux/reduxStore";
import {compose, Dispatch} from "redux";
import {
    followSuccess,
    requestUsers,
    onPageChangedAC,
    setCurrentPageAC, toggleFollowingProgress, unfollowSuccess,
    UsersType, follow, unfollow
} from "../../redux/UsersReducer";

import {Users} from "./Users";
import React from "react";

import Preloader from "../common/Preloader/Preloader";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";

import {FilterType} from "./UsersSearchForm";
import {ThunkDispatch} from "redux-thunk";


class UserContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props
        this.props.getUsers(pageNumber, pageSize, filter)
    }
    onFilterChanged = (filter: FilterType) => {
        const {pageSize} = this.props
        this.props.getUsers(1, pageSize, filter)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader isFetching={this.props.isFetching}/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   onFilterChanged={this.onFilterChanged} filter={this.props.filter}
                   setCurrentPage={this.props.setCurrentPage}
                   isFetching={this.props.isFetching}
                   getUsers={this.props.getUsers}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

export let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        filter: state.usersPage.filter

    }
}
export let mapDispatchToProps = (dispatch: ThunkDispatch<AppStateType, unknown, any>) => {
    return {
        follow: (userId: number) => {
            dispatch(follow(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollow(userId))
        },

        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },

        // onPageChanged: (pageNumber: number) => {
        //     dispatch(onPageChangedAC(pageNumber))
        // },

        toggleFollowingProgress: (isFetching: boolean, userId: number) => {
            dispatch(toggleFollowingProgress(isFetching, userId))
        },
        getUsers: (currentPage: number, pageSize: number, filter: FilterType) => {
            dispatch(requestUsers(currentPage, pageSize, filter))
        }
    }
}
type MapStatePropsType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
    followingInProgress: Array<number>
    filter: FilterType
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
    setCurrentPage: (pageNumber: number) => void
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void

    //   setTotalUsersCount: (totalUsersCount: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
// setUsers: (users: UsersType[]) => void
    /*
    Array<string>
    string[]
    */
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

//let withRedirect = withAuthRedirect(UsersContainer)
//export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(withRedirect);


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(UserContainer)