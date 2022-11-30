import {connect} from "react-redux";

import {AppStateType} from "../../redux/reduxStore";
import {compose, Dispatch} from "redux";
import {
    followSuccess,
    getUsers,
    onPageChangedAC,
    setCurrentPageAC, toggleFollowingProgress, unfollowSuccess,
    UsersType
} from "../../redux/UsersReducer";

import Users from "./Users";
import React from "react";

import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {getUserProfile} from "../../redux/ProfilePageReducer";


class UserContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader isFetching={this.props.isFetching}/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} setCurrentPage={this.props.setCurrentPage}
                   isFetching={this.props.isFetching}
                   getUsers={this.props.getUsers} onPageChanged={this.props.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

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
        followingInProgress: state.usersPage.followingInProgress

    }
}
export let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followSuccess(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowSuccess(userId))
        },

        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },

        onPageChanged: (pageNumber: number) => {
            dispatch(onPageChangedAC(pageNumber))
        },

        toggleFollowingProgress: (isFetching: boolean, userId: number) => {
            dispatch(toggleFollowingProgress(isFetching, userId))
        },
        getUsers: (currentPage: number, pageSize: number) => {
            dispatch(getUsers(currentPage, pageSize))
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
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setCurrentPage: (pageNumber: number) => void
    onPageChanged: (pageNumber: number) => void
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