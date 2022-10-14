import React from 'react';

import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import users from '../asses/img/users.png'

const Users = (props: UsersPropsType) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`).then(responce => {
                props.setUsers(responce.data.items)
                props.setTotalUsersCount(responce.data.totalCount)
            });
        }
    }

    {/*}   [
                    {
                        id: 1,
                        photoUrl:'https://www.biletik.aero/upload/medialibrary/807/807f262b60da392f1e09aa6d33f20a9b.png',
                        followed: false,
                        fullName: 'Dmitry',
                        status: 'I am a boss',
                        location: {city: 'Minsk', country: 'Belarus'}},
                    {
                        id: 2,
                        photoUrl:'https://www.biletik.aero/upload/medialibrary/807/807f262b60da392f1e09aa6d33f20a9b.png',
                        followed: false,
                        fullName: 'Sveta',
                        status: 'I am a boss',
                        location: {city: 'Borisov', country: 'Belarus'}},
                    {id: 3,
                        photoUrl:'https://www.biletik.aero/upload/medialibrary/807/807f262b60da392f1e09aa6d33f20a9b.png',
                        followed: true, fullName: 'Ann', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
                    {id: 4,
                        photoUrl:'https://www.biletik.aero/upload/medialibrary/807/807f262b60da392f1e09aa6d33f20a9b.png',
                        followed: false, fullName: 'Vlad', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}}

                ]*/
    }

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const onPageChanged=(pageNumber:number)=>{
        props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`).then(responce => {
            props.setUsers(responce.data.items)
        });
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                  return  <span className={props.currentPage === p && s.selectedPage}
                  onClick={(e)=>{props.onPageChanged(p)}}></span>
                })}

            </div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : users} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.unfollow((u.id))
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow((u.id))
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>

            </div>)}
        </div>
    )
};

export default Users;