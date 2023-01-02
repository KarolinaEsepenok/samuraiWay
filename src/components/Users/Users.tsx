import React, {useState} from 'react';
import {UsersPropsType} from "./UserContainer";
import s from "./Users.module.css";
import users from "../asses/img/users.png";
import {NavLink} from "react-router-dom";
import {UsersSearchForm} from "./UsersSearchForm";
import {Paginator} from "../common/Paginator/Paginator";



export const Users = (props: UsersPropsType,totalUsersCount:number,pageSize:number,portionSize=10,currentPage:any, onPageChanged:any) => {

     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber]= useState(1);
    let leftPortionPageNumber = (portionNumber - 1)* portionSize +1;
    let rightPortionPageNumber = portionNumber * portionSize


    return (
        <div className={s.usersContainer}>
<Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} portionSize={portionSize} currentPage={currentPage} onPageChanget={onPageChanged}/>
                <UsersSearchForm onFilterChanged={props.onFilterChanged} />

          {portionNumber > 1 &&
                    <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>Prev</button>}
                {pages
                    .filter(p=>p>= leftPortionPageNumber &&  p<= rightPortionPageNumber)

                    .map(p => {
                        return <span className={currentPage === p ? s.selectedPage : ""}
                                     onClick={(e) => {
                                         onPageChanged(p)
                                     }}>{p}</span>
                    })}
                {portionCount>portionNumber &&
                    <button onClick={()=>{setPortionNumber(portionNumber+1)}}>Next</button>}

            <div className={s.pagination}>
                {pages.map(p => {
                    return <span  className={props.currentPage === p ? s.selectedPage : ""}
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

)

}