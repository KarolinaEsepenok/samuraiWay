import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {addPost, state, StateType, subscribe} from "./state";
import {BrowserRouter} from "react-router-dom";
import {StateType, store} from "./state";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App dispatch={store.dispatch.bind(store)} store={store}

                //addPost={store.addPost.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}>
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
store.subscriber(rerenderEntireTree);


//export const rerenderEntireTree = () => {

//}

//ReactDOM.render(
//  <App state={state} addPost={addPost}/>,
//document.getElementById('root')
//);
//rerenderEntireTree(store._state);