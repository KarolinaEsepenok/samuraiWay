import s from "./../Dialogs.module.css";
import React from "react";
import {DialogsType} from "../../../index";


export type MessagePropsType = {
    // messagesData: MessageType[]

}


function Message(props: MessagePropsType) {
    return (
         <div className={s.message}>
             {/*{props.messagesData}*/}
        </div>
    )
}
export default Message;
