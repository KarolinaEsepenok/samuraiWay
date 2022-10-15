import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/UsersReducer";

export let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage

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
        }
    }
}
type MapStatePropsType = {

    users: { id: number, photos: {small: string, large: string}, followed: boolean, name: string, status: string, location: { city: string, country: string } }[],
    pageSize: number,
    totalUsersCount: number,
    currentPage:number,


}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: { id: number, photos: {small: string, large: string}, followed: boolean, name: string, status: string, location: { city: string, country: string } }[]) => void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalUsersCount:number)=>void
   // onPageChanged:(p:number)=>void
    /*
    Array<string>
    string[]
    */
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
