import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {ProfilePageReducer} from "./ProfilePageReducer";
import {ActionType, DialogsPageReducer} from "./DialogsPageReducer";
import {SidebarReducer} from "./SitebarReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";

export type RootState = typeof reduser
export type ReduxStateType = ReturnType<RootState>
export type StoreType= Store<ReduxStateType, ActionType>

export let reduser = combineReducers({
    profilePage:ProfilePageReducer,
    messagePage:DialogsPageReducer,
    users:SidebarReducer,
    usersPage: UsersReducer,
    auth:AuthReducer,
    form: formReducer,
    app:appReducer
});
export type AppStateType= ReturnType<typeof reduser>

export let store= createStore(reduser, applyMiddleware(thunkMiddleware));


// @ts-ignore
window.store = store