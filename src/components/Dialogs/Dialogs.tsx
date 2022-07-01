import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessageType} from "../../State";
import message from "./Message/Message";



export type DialogsPropsType = {
    dialogsData:DialogsType[]
    messagesData: MessageType[]
}
export type MessagePropsType = {


}


function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogsData
        .map((d) => <DialogItem name={d.name} id={d.id}/>)

 //  let messagesElements = props.messagesData
   //    .map((m) => <Message messagesData={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                   </div>
             <div className={s.messages}>
            </div>

            </div>

    )

}

export default Dialogs;