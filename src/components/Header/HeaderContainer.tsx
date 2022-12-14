import React from 'react';
import Header from "./Header";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getAuthUserData, logout} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
       this.props.getAuthUserData();
    }
    render() {
        return <Header   isAuth={this.props.isAuth} logout={this.props.logout}
                       login={this.props.login}
                        />
    }
}
//isAuth={this.props.isAuth} login={this.props.login}
type PathParamsType = {
    userId: string
}
type OnPropsType = MapStateToPropsType & MapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & OnPropsType

type MapStateToPropsType = {
    isAuth:boolean,
    login:string | null
}
type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logout: () => void
}
const mapStateToProps = (state:AppStateType)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
})

// export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);


let WithDataContainerComponent = withRouter(HeaderContainer)
export default connect(mapStateToProps, {getAuthUserData,logout})(WithDataContainerComponent);