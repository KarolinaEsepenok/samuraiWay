import React from 'react';
import s from './App.module.css';

import Navbar from "./components/Navbar/Navbar";

import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";



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

    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <HeaderContainer />
                <Navbar/>
                {/*}  <Profile/>*/}
                <div className={s.appWrapperContent}>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UserContainer />}/>
                    <Route path='/login' render={() => <Login />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


//export default Header;

