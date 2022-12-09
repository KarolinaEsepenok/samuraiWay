import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {DialogsPageType, sendMessageCreator} from "../../redux/DialogsPageReducer";
import {AppStateType} from "../../redux/reduxStore";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";
import {getUserProfile} from "../../redux/ProfilePageReducer";
import {withRouter} from "react-router-dom";



export let mapStateToProps=(state:AppStateType)=>{
    return{
        dialogsPage: state.messagePage,

    }
}
export let mapDispatchToProps=(dispatch: Dispatch)=>{
    return{
        sendMessage:(newMessageBody:string)=>{
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}
type MapStatePropsType = {
    dialogsPage: DialogsPageType,

}
type MapDispatchPropsType = {
   // updateNewMessageBody: (body:string)=>void
    sendMessage: (newMessageBody:string)=>void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
//let AuthRedirectComponent = withAuthRedirect(Dialogs)
//export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default  compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)