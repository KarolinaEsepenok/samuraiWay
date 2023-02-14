import React, {FC, useState} from 'react';
import {UsersPropsType} from "./UserContainer";
import s from "./Users.module.css";
import userPhoto from "../asses/img/users.png";
import {NavLink} from "react-router-dom";
import {UsersSearchForm} from "./UsersSearchForm";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


// export const Users = (props: UsersPropsType,user:any, totalUsersCount: number, pageSize: number, portionSize = 10, currentPage: any, onPageChanged: any) => {
export const Users: FC<UsersPropsType> = ({
                                              totalUsersCount,
                                              pageSize,
                                              currentPage,
                                              onPageChanged,
                                              onFilterChanged,
                                              users,
                                              follow,
                                              unfollow,
                                              followingInProgress

                                          }) => {

    const portionSize = 5

    return (
        <div className={s.usersContainer}>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
<div className={s.userMain}>

            {users.map(u => <div className={s.userCont}  key={u.id}>
                <span>
                    <div >
                      <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto}
                                                             className={s.userPhoto}/></NavLink>
                </div>
                    <div>
                        {u.followed ?
                            <button disabled={followingInProgress.some((id) => id === u.id)} onClick={() => {
                                unfollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={followingInProgress.some((id) => id === u.id)} onClick={() => {
                                follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div className={s.userName}>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span className={s.userDescr}>
                        <div>{'u.loc.country'}</div>
                        <div>{'u.loc.city'}</div>
                    </span>
                </span>

            </div>)}</div>
            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       portionSize={portionSize}
                       currentPage={currentPage} onPageChanged={onPageChanged}/>


        </div>

    )

}