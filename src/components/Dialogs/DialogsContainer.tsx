import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {DialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsPageReducer";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";



export let mapStateToProps=(state:AppStateType)=>{
    return{
        dialogsPage: state.messagePage,
        isAuth:state.auth.isAuth
    }
}
export let mapDispatchToProps=(dispatch: Dispatch)=>{
    return{
        updateNewMessageBody:(body:string)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageCreator())
        }
    }
}
type MapStatePropsType = {
    dialogsPage: DialogsPageType,
    isAuth:boolean
}
type MapDispatchPropsType = {
    updateNewMessageBody: (body:string)=>void
    sendMessage: ()=>void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)