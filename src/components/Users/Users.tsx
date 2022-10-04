import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'


const Users = (props: UsersPropsType) => {
    if(props.users.length === 0 ){
    props.setUsers(  [
            {
                id: 1,
                photoUrl:'https://www.biletik.aero/upload/medialibrary/807/807f262b60da392f1e09aa6d33f20a9b.png',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl:'https://www.biletik.aero/upload/medialibrary/807/807f262b60da392f1e09aa6d33f20a9b.png',
                followed: false,
                fullName: 'Sveta',
                status: 'I am a boss',
                location: {city: 'Borisov', country: 'Belarus'}
            },
            {id: 3,
                photoUrl:'https://www.biletik.aero/upload/medialibrary/807/807f262b60da392f1e09aa6d33f20a9b.png',
                followed: true, fullName: 'Ann', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
            {id: 4,
                photoUrl:'https://www.biletik.aero/upload/medialibrary/807/807f262b60da392f1e09aa6d33f20a9b.png',
                followed: false, fullName: 'Vlad', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}}

        ]
    )}
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
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
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>

            </div>)}
        </div>
    );
};

export default Users;