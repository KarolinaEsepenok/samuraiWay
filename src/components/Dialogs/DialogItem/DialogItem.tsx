import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


type DialogItem = {
    name: string
    id: number
}

function DialogItem(props: DialogItem) {
    let path = '/dialogs/1' + props.id;
    return (
        <div>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;
