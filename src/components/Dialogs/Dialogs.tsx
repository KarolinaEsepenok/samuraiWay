import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType} from "../../index";



export type DialogsPropsType = {
    dialogsData:DialogsType[]
}
export type MessagePropsType = {
    messagesData: MessageType[]

}


function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogsData
        .map((d) => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.messagesData
        .map((m) => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>


        </div>
    )

}

export default Dialogs;