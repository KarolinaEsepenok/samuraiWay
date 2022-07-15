import {rerenderEntireTree} from "./render";

export type StatePropsType = {
    posts: PostsType[],
    dialogsData: DialogsType[],
    messagesData: MessageType[],

}
export type AppStateProps = {
    appState: StatePropsType
}

export type MessageType = {
    id: number,
    message: string,
}
export type DialogsType = {
    id: number,
    name: string
}
export type PostsType = {
    id: number,
    message: string,
    likeCounts: string
}
export type ProfilePageType = {
    posts: PostsType[],
    newPostText: string,
}
export type DialogsPageType = {
    dialogsData: DialogsType[]
    messageData: MessageType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likeCounts: '12'},
            {id: 2, message: 'It is my first post', likeCounts: '12'},
            {id: 1, message: 'Hi, how are you', likeCounts: '12'},
            {id: 2, message: 'It is my first post', likeCounts: '12'}

        ],
        newPostText: '',
    },
    dialogsPage: {
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
            {id: 6, message: 'Yo'},
        ]
    }
}
//window.state = state
export const addPost = (postMessage: string) => {
    const newPost: PostsType = {
        id: new Date().getTime(),
        message:postMessage,

        likeCounts: '0'
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newPostText:string) => {
    state.profilePage.newPostText= newPostText;
    rerenderEntireTree(state);
}
