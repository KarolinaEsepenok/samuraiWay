import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {addPost, state, StateType, subscribe} from "./state";
import {BrowserRouter} from "react-router-dom";
import {StateType, store} from "./state";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}

                 //addPost={store.addPost.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}>
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);


//export const rerenderEntireTree = () => {

//}

//ReactDOM.render(
//  <App state={state} addPost={addPost}/>,
//document.getElementById('root')
//);
rerenderEntireTree(store._state);