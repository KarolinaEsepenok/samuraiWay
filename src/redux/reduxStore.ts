import {combineReducers, createStore, Store} from "redux";
import {ProfilePageReducer} from "./ProfilePageReducer";
import {ActionType, DialogsPageReducer} from "./DialogsPageReducer";
import {SidebarReducer} from "./SitebarReducer";
export type RootState = typeof redusers
export type ReduxStateType = ReturnType<RootState>
export type StoreType= Store<ReduxStateType, ActionType>

export let redusers = combineReducers({
    profilePage:ProfilePageReducer,
    messagePage:DialogsPageReducer,
    users:SidebarReducer
});
export type AppStateType= ReturnType<typeof redusers>

export let store:StoreType= createStore(redusers);