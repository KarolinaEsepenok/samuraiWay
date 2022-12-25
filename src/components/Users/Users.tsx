import React from 'react';
import {UsersPropsType} from "./UserContainer";
import s from "./Users.module.css";
import users from "../asses/img/users.png";
import {NavLink} from "react-router-dom";
import {UsersSearchForm} from "./UsersSearchForm";


export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div className={s.usersContainer}>
            <UsersSearchForm onFilterChanged={props.onFilterChanged} />
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ""}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {/*}  <button onClick={props.getUsers}>Get Users</button>*/}
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                      <NavLink to={'/profile/' + u.id}> <img src={u.photos.small != null ? u.photos.small : users}
                                                             className={s.userPhoto}/></NavLink>
                </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some((id) => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some((id) => id === u.id)} onClick={() => {
                                props.follow(u.id)
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

    );
};


export default Users;