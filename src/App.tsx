import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import dialogs from "./components/Dialogs/Dialogs";
import {DialogsType, MessageType, PostsType, StateType, RootStateType} from "./state";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Store} from "redux";
import {AppStateType} from "./redux/reduxStore";


{/*export type AppPropsType = {
    posts: PostsType[],
    dialogsData: DialogsType[],
    messagesData: MessageType[],
}*/
}
// export type AppStatePropsType = {
//     dispatch: any;
//     //addPost:(message:string)=>void
//     store: Store<AppStateType>
// }

function App() {
    // let message= props.state.profilePage.posts[0].message
    // const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Navbar/>
                {/*}  <Profile/>*/}
                <div className={s.appWrapperContent}>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer/>}/>
                    <Route path='/profile' render={() => <Profile
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

