import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    DialogsPageType,
    DialogsType,
    MessageType,
    RootStateType,

} from "../../state";
import {sendMessageCreator,
    updateNewMessageBodyCreator} from './../../redux/DialogsPageReducer'
import message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


// export type DialogsPropsType = {
//     store: RootStateType
//     state: DialogsPageType
//     //newMessageBody:string
// }


function Dialogs(props:DialogsPropsType) {
     let state = props.dialogsPage;

    let dialogsElements =props.dialogsPage.dialogsData
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messagesElements = props.dialogsPage.messageData
        .map((m) => <Message key={m.id} message={m.message}/>)
    let newMessagesBody = props.dialogsPage.newMessageBody

    let onSendMessageClick = ()=>{
        props.sendMessage()
        //props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange=(e: ChangeEvent<HTMLTextAreaElement>)=>{
        let body =e.currentTarget.value
        props.updateNewMessageBody(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessagesBody}
                                   onChange={onNewMessageChange}
                                   placeholder={'enter your message'} ></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

        </div>

    )

}

export default Dialogs;