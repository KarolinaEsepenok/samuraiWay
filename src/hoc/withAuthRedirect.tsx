import React, {Component, ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";

type MapStatePropsType ={
    isAuth:boolean
}

let mapStateToPropsRedirect = (state:AppStateType):MapStatePropsType=>({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component:ComponentType<T>)  {
    const RedirectComponent = (props:MapStatePropsType) => {

        let {isAuth, ...resProps} = props
        if (isAuth) return <Redirect to={'/login'}/>
        return <Component {...resProps as T}/>
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent


}

