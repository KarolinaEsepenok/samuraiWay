import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import dialogs from "./components/Dialogs/Dialogs";
import {DialogsType, MessageType, PostsType, StateType, addPost, updateNewPostText} from "./state";


export type AppPropsType = {
    posts: PostsType[],
    dialogsData: DialogsType[],
    messagesData: MessageType[],

}
export type AppStatePropsType={
    state: StateType
    addPost:(message:string)=>void


}

function App(props: AppStatePropsType) {
  // let message= props.state.profilePage.posts[0].message

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                {/*}  <Profile/>*/}
                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  addPost={props.addPost}
                                                                  newPostText={props.state.profilePage.newPostText}
                                                                  />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


//export default Header;

