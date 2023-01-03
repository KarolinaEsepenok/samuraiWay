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

    const portionSize = 10

    return (
        <div className={s.usersContainer}>
            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       portionSize={portionSize}
                       currentPage={currentPage} onPageChanged={onPageChanged}/>

            <UsersSearchForm onFilterChanged={onFilterChanged}/>


            {users.map(u => <div key={u.id}>
                <span>
                    <div>
                      <NavLink to={'/profile/' + u.id}> <img src={u.photos.small != null ? u.photos.small : userPhoto}
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

}