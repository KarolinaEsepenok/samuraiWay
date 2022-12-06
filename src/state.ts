import {ActionsTypes, ProfilePageReducer} from "./redux/ProfilePageReducer";
import {DialogsPageReducer} from "./redux/DialogsPageReducer";
import {SidebarReducer} from "./redux/SitebarReducer";
import profile from "./components/Profile/Profile";

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
    profile: null | ProfileType
    status: string
   // updateStatus:(status:string)=>void
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
    updateNewPostText: (newText: string) => void
    //addPost: (postMessage: string) => void
    _callSubscriber: () => void
    subscriber: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}
export type ProfileType={
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts:object,
    github: string,
    vk: string,
    facebook: string,
    instagram:string,
    twitter: string,
    website:string,
    youtube: string,
    mainLink: string,
    photos:{
    small: string | null,
    large: string | null }
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
            newPostText: '',
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
        },
       // sidebar: {}


    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },

    _callSubscriber() {
        console.log('State')
    },
    getState() {
        return this._state;
    },
    subscriber(observer: () => void) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
      //   this._state.profilePage = ProfilePageReducer(store, action)
      //   this._state.dialogsPage = DialogsPageReducer(this._state.dialogsPage, action)
      // //  this._state.sidebar = SidebarReducer(this._state.sidebar, action)
      //   this._callSubscriber(this._state)


    }
}


//    _callSubscriber(),
//  rerenderEntireTree (state:StateType) {},

/* addPost (postMessage: string)  {
   const newPost: PostsType = {
       id: new Date().getTime(),
       message:postMessage,
       likeCounts: '0'
   }
   store._state.profilePage.posts.push(newPost);
   store._state.profilePage.newPostText='';
   rerenderEntireTree(store._state);
},
   updateNewPostText (newPostText:string)  {
       store._state.profilePage.newPostText= newPostText;
       rerenderEntireTree(store._state);
   }


export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    } as const
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    } as const
}
export const updateNewMessageBodyCreator = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    } as const
}
type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
type SendMessageType = ReturnType<typeof sendMessageCreator>
type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyCreator>

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | SendMessageType | UpdateNewMessageBodyType

*/




