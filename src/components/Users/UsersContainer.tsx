import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/UsersReducer";

export let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users

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

        }
    }
}
type MapStatePropsType = {
    users: { id: number, photos: {small: string, large: string}, followed: boolean, name: string, status: string, location: { city: string, country: string } }[]
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: { id: number, photos: {small: string, large: string}, followed: boolean, name: string, status: string, location: { city: string, country: string } }[]) => void
    /*
    Array<string>
    string[]
    */
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
