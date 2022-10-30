import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


function Header(props:{isAuth:boolean, login:string}) {
    return (
        <header className={s.header}>
            <img src='https://cryptologos.cc/logos/stellar-xlm-logo.png'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                :<NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    )
}
export default Header;