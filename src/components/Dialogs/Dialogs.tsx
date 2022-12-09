import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {DialogsPropsType} from "./DialogsContainer";

import {Field, InjectedFormProps, reduxForm} from "redux-form";


// export type DialogsPropsType = {
//     store: RootStateType
//     state: DialogsPageType
//     //newMessageBody:string
// }
type AddMessageType = {
   newMessageBody: string

}

function Dialogs(props: DialogsPropsType) {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messageData
        .map((m) => <Message key={m.id} message={m.message}/>)
   // let newMessagesBody = action.newMessageBody
    // if(!props.isAuth) return <Redirect to={"/login"}/>
    const  addNewMessage =(values:AddMessageType)=>{
       props.sendMessage(values.newMessageBody)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>

    )

}

export default Dialogs;
export const AddMessageForm: React.FC<InjectedFormProps<AddMessageType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div><Field component={'textarea'} name={'newMessageBody'}
                            placeholder={'Enter your message'}></Field></div>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>
    )
}
export  const AddMessageFormRedux = reduxForm<AddMessageType>({form: 'dialogAddMessageForm'})(AddMessageForm)