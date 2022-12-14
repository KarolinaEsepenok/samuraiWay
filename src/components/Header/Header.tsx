import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


function Header(props:{isAuth:boolean, login:string | null,logout:()=>void}) {
    return (
        <header className={s.header}>
            <img src='https://cryptologos.cc/logos/stellar-xlm-logo.png'/>
            <div className={s.loginBlock}>
                {props.isAuth ?<div>{props.login} - <button onClick={()=>props.logout}>Log out</button></div>
                :<NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    )
}
export default Header;