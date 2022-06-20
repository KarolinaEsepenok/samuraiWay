import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type MessageType = {
    id: number,
    message: string,
    likeCounts: string
}
export type DialogsType = {
    id:number,
    name: string
}
export type PostsType = {
    id: number,
    message: string,
    likeCounts: string
}


let posts=[
    {id: 1, message: 'Hi, how are you', likeCounts: '12'},
    {id: 2, message: 'It is my first post', likeCounts: '12'},
    {id: 1, message: 'Hi, how are you', likeCounts: '12'},
    {id: 2, message: 'It is my first post', likeCounts: '12'}

]
let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Valera'},
    {id: 5, name: 'Misha'}
]
let messagesData=[
    {id: 1, message: 'hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'},
]


ReactDOM.render(
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>,
  document.getElementById('root')
);