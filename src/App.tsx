import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import Profile from "./components/Profile/Profile";
import Post from "./components/Profile/MyPosts/Post/Post";
import Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";


function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                {/*}  <Profile/>*/}
                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


//export default Header;

