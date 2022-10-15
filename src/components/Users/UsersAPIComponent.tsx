import React from 'react';

import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import users from '../asses/img/users.png'
import Users from "./Users";

const UsersAPIComponent = (props: UsersPropsType) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`).then(responce => {
                props.setUsers(responce.data.items)
                props.setTotalUsersCount(responce.data.totalCount)
            });
        }
    }
    const onPageChanged=(pageNumber:number)=>{
        props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`).then(responce => {
            props.setUsers(responce.data.items)
        });
    }
    return <Users totalUsersCount={props.totalUsersCount}
                  pageSize={props.pageSize}
                  currentPage={props.currentPage}
                  onPageChanged={onPageChanged}
                  users={props.users}
                  setUsers={props.setUsers}
                  setTotalUsersCount={props.setTotalUsersCount}
                  follow={props.follow}
                  unfollow={props.unfollow}
                  setCurrentPage={props.setCurrentPage}
    />

};

export default UsersAPIComponent;