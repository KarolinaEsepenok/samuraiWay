import s from "./../Dialogs.module.css";
import React from "react";
import {DialogsType, MessageType} from "../../../state";


export type MessagePropsType = {
     message: string

}


function Message(props: MessagePropsType) {
    return (
         <div className={s.message}>
             {props.message}
        </div>
    )
}
export default Message;
