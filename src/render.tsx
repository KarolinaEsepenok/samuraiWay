import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state, StateType} from "./state";
import {BrowserRouter} from "react-router-dom";
import {updateNewPostText} from "./state";


export const rerenderEntireTree = (state:StateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}
                 />
        </BrowserRouter>,
        document.getElementById('root')
    );

}

rerenderEntireTree(state);

