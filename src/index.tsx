import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {addPost, state, StateType, subscribe} from "./state";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/reduxStore";
import {Provider} from "react-redux";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App store={store} dispatch={store.dispatch.bind(store)}
                //addPost={store.addPost.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}>
            /></Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
//rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree()
})

//rerenderEntireTree();
//store.subscribe(rerenderEntireTree);


//export const rerenderEntireTree = () => {

//}

//ReactDOM.render(
//  <App state={state} addPost={addPost}/>,
//document.getElementById('root')
//);
//rerenderEntireTree(store._state);