import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsPageReducer";
import {AppStateType} from "../../redux/reduxStore";



export let mapStateToProps=(state:AppStateType)=>{
    return{
        dialogsPage: state.dialogsPage
    }
}
export let mapDispatchToProps=(dispatch: (sendMessageCreator1: { readonly type: string })=>{})=>{
    return{
        updateNewMessageBody:(body:string)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage:()=>{

            dispatch(sendMessageCreator())
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)