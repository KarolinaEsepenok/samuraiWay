import React from 'react';
import {PostsType, StateType, store} from "../state";

export type DialogsPageReducer={
    state:StateType
    action:ActionType
}
type SendMessageType = ReturnType<typeof sendMessageCreator>
type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyCreator>
export type ActionType=  SendMessageType | UpdateNewMessageBodyType


//export type DialogsReducerType= DialogsPageReducer
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
let initialState={
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
    newMessageBody: '',
}

export function  DialogsPageReducer(action:ActionType,state=initialState) {
    let stateCopy ={
        ...state,
       // messages: [...state.messageData]
    }
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.body;
        return stateCopy;
        case SEND_MESSAGE: let body = state.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messageData.push({id: 6, message: body})
            return stateCopy;
    }
};
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    } as const
}
export const updateNewMessageBodyCreator = (body:string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

