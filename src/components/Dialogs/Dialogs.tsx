import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItem = {
    name: string
    id: string
}
type Message = {
    message: string
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

function Message(props: Message) {
    return (
        <div className={s.dialog}>{props.message}
        </div>
    )
}


function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dima'} id={'1'}/>
                <DialogItem name={'Andrey'} id={'2'}/>
                <DialogItem name={'Sveta'} id={'3'}/>
                <DialogItem name={'Sasha'} id={'4'}/>
                <DialogItem name={'Valera'} id={'5'}/>
                <DialogItem name={'Misha'} id={'6'}/>

            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>

            </div>


        </div>
    )

}

export default Dialogs;