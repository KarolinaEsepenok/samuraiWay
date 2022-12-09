import React from 'react';
import {DialogsType, MessageType, PostsType, StateType, store} from "../state";

export type DialogsPageReducer = {
    state: StateType
    action: ActionType
}
type SendMessageType = ReturnType<typeof sendMessageCreator>

export type ActionType = SendMessageType

export type DialogsPageType = {
    dialogsData: DialogsType[]
    messageData: MessageType[]

}
//export type DialogsReducerType= DialogsPageReducer

const SEND_MESSAGE = 'SEND_MESSAGE';
let initialState: DialogsPageType = {
    dialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'},
        {id: 5, name: 'Misha'}
    ],
    messageData: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},],

}

export function DialogsPageReducer(state = initialState,action: ActionType): DialogsPageType {

    // messages: [...state.messageData]

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,

                messageData: [...state.messageData, {id: 6, message: body}]
            }
        default: return state
    }
};
export const sendMessageCreator = (newMessageBody:string) => {
    return {
        type: SEND_MESSAGE,newMessageBody
    } as const
}

