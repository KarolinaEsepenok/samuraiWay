

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
//export type StateType = {
  //  profilePage: ProfilePageType
  //  dialogsPage: DialogsPageType
//}
export type StoreType={
    _state:StateType
    updateNewPostText:(newText:string)=>void
    addPost:(postMessage: string)=>void
    _callSubscriber:()=>void
    subscriber:(observer:()=>void)=>void
    getState:()=>void


}
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
//let rerenderEntireTree = (state: StateType) => {
//}
{/*export const state: StateType = {
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
export const subscribe=(observer:(state:StateType)=>void)=>{
    rerenderEntireTree = observer

}*/}


export let store:RootStateType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likeCounts: '12'},
                {id: 2, message: 'It is my first post', likeCounts: '12'},
                {id: 1, message: 'Hi, how are you', likeCounts: '12'},
                {id: 2, message: 'It is my first post', likeCounts: '12'},

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
                {id: 6, message: 'Yo'},],
            newMessageBody: ''
        },

    },
    updateNewPostText  (newText:string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },

    _callSubscriber(){
        console.log('State')
    },
    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost:PostsType = {
                id: new Date().getTime(),
                message: postMessage,
                likeCounts: '0'
            };
            this._state.profilePage.posts.push(newPost);
            store._state.profilePage.newPostText = '';
            store._state._callSubscriber(store._state)
            //rerenderEntireTree(store._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            store._state.profilePage.newPostText = action.newText;
            store._state._callSubscriber(store._state)
            //rerenderEntireTree(store._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            store._state.dialogsPage.newMessageBody = action.body;
            store._state._callSubscriber(store._state)
        }
        else if (action.type === SEND_MESSAGE){
            let body = store._state.dialogsPage.newMessageBody ;
            store._state.dialogsPage.newMessageBody = '';
            store._state.dialogsPage.messageData.push({id: 6, message: body})
            store._state._callSubscriber(store._state)
        }
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
   }*/



export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}
export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}








