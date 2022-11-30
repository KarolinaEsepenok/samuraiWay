import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";

type MapStatePropsType ={
    isAuth:boolean
}

let mapStateToPropsRedirect = (state:AppStateType):MapStatePropsType=>({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component:any) => {
    const RedirectComponent = (props:MapStatePropsType) => {
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...props}/>
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent


}

