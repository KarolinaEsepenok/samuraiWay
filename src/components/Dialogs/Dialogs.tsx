import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



type MessageType = {
    message: string,
    likeCounts: string

}

function Dialogs(props: MessageType) {

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