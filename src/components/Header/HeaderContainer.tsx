import React from 'react';
import Header from "./Header";

import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {RouteComponentProps} from "react-router-dom";

import {mapDispatchToProps} from "../Users/UserContainer";


class HeaderContainer extends React.Component<CommonPropsType,{}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}).then(response => {
            if(response.data.resultCode === 0){
                let {id, email,login} = response.data.data
                this.props.setAuthUserData(id,email,login)
            }
        });
    }

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>

    }
}
type PathParamsType = {
    userId?: string
}
type OnPropsType = MapStateToPropsType & MapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & OnPropsType

type MapStateToPropsType = {
    isAuth:boolean,
    login:string

}
type MapDispatchToPropsType = {
    setAuthUserData: (id:number |null, email: string |null, login:string | null ) => void
}
const mapStateToProps = (state:AppStateType)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)
