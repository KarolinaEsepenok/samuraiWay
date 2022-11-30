import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";

let mapStateToPropsRedirect = (state:AppStateType)=>({
    isAuth: state.auth.isAuth
})

export const WithAuthRedirect = () => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to = {'/login'}/>
            return <Component {this.props}/>
        }
    }
 let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}