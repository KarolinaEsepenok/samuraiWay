import {ActionsTypes, ProfilePageReducer} from "./redux/ProfilePageReducer";
import {DialogsPageReducer} from "./redux/DialogsPageReducer";
import {SidebarReducer} from "./redux/SitebarReducer";
import profile from "./components/Profile/Profile";

export type StatePropsType = {
    posts: PostsType[],
    dialogsData: DialogsType[],
    messagesData: MessageType[],
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
    profile: ProfileType | null,
    status: string
}
export type DialogsPageType = {
    dialogsData: DialogsType[]
    messageData: MessageType[]
    newMessageBody: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type RootStateType = {
    _state: StateType
}
export type ProfileType={
    userId?: number | null | undefined,
    lookingForAJob?: boolean | undefined,
    lookingForAJobDescription?: string | undefined,
    fullName: string |undefined,
    contacts:object,
    github: string,
    vk: string,
    facebook: string,
    instagram:string,
    twitter: string,
    website:string,
    youtube: string,
    mainLink?: string | undefined,
    photos:PhotosType
    aboutMe:string
}
export type PhotosType={
    small: string | null,
    large: string | null
}

export let store: RootStateType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likeCounts: '12'},
                {id: 2, message: 'It is my first post', likeCounts: '12'},
                {id: 1, message: 'Hi, how are you', likeCounts: '12'},
                {id: 2, message: 'It is my first post', likeCounts: '12'},
            ],

            profile: null,
            status: " ",
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
                {id: 6, message: 'Yo'},],
            newMessageBody: '',
        }

    }}
