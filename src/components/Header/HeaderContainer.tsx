import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
       this.props.getAuthUserData()
        ;
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
    login:string | null
}
type MapDispatchToPropsType = {
    setAuthUserData: (id:number |null, email: string |null, login:string | null ) => void
}
const mapStateToProps = (state:AppStateType)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})
export default connect(mapStateToProps, {getAuthUserData})(withRouter(HeaderContainer));


//export default connect(mapStateToProps,mapDispatchToProps)(Header)

//let WithDataContainerComponent = withRouter(HeaderContainer)
//export default connect(mapStateToProps, {setUserProfile})(WithDataContainerComponent);