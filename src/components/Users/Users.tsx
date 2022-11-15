import React from 'react';
import {UsersPropsType} from "./UserContainer";
import s from "./Users.module.css";
import users from "../asses/img/users.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
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
                        {u.followed ? <button onClick={() => {
                            props.toggleFollowingProgress(true)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials:true,
                                    headers:{
                                        "API-KEY":'abd96315-58cc-42a7-a904-226e13c834ce'

                                    }
                                }).then(response => {
                                   if(response.data.resultCode == 0 ){
                                       props.unfollow(u.id)
                                   }
                                    props.toggleFollowingProgress(false)
                                });
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.toggleFollowingProgress(true)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {
                                    withCredentials:true,
                                    headers:{
                                        "API-KEY":'abd96315-58cc-42a7-a904-226e13c834ce'
                                    }
                                }).then(response => {
                                    if(response.data.resultCode == 0 ){
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingProgress(false)
                                });
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