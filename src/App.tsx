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
import {DialogsType, MessageType, PostsType} from "./index";


export type AppPropsType = {
    posts: PostsType[],
    dialogsData: DialogsType[],
    messagesData: MessageType[]

}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                {/*}  <Profile/>*/}
                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsData} />}/>
                    <Route path='/profile' render={() => <Profile messagesData={props.messagesData} posts={props.posts}/>}/>
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

