import {combineReducers, createStore, Store} from "redux";
import {ProfilePageReducer} from "./ProfilePageReducer";
import {ActionType, DialogsPageReducer} from "./DialogsPageReducer";
import {SidebarReducer} from "./SitebarReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./auth-reducer";
export type RootState = typeof redusers
export type ReduxStateType = ReturnType<RootState>
export type StoreType= Store<ReduxStateType, ActionType>

export let redusers = combineReducers({
    profilePage:ProfilePageReducer,
    messagePage:DialogsPageReducer,
    users:SidebarReducer,
    usersPage: UsersReducer,
    auth:AuthReducer
});
export type AppStateType= ReturnType<typeof redusers>

export let store:StoreType= createStore(redusers);
