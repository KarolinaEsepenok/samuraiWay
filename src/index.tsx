import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {addPost, state, StateType, subscribe} from "./state";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/reduxStore";
import {Provider} from "react-redux";


// export const rerenderEntireTree = () => {
    // @ts-ignore


// @ts-ignore
ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                // @ts-ignore
            <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
// }
//rerenderEntireTree(store.getState());
// store.subscribe(()=>{
//     let state = store.getState();
//     rerenderEntireTree()
// })

//rerenderEntireTree();
//store.subscribe(rerenderEntireTree);


//export const rerenderEntireTree = () => {

//}

//ReactDOM.render(
//  <App state={state} addPost={addPost}/>,
//document.getElementById('root')
//);
//rerenderEntireTree(store._state);