import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {ProfileCommonType, ProfileType} from "../../state";
import {getUserProfile, ProfilePageType} from "../../redux/ProfilePageReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";



class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
      this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <div>
                <Profile
                    {...this.props}
                    profilePage={this.props.profilePage}/>
            </div>
        );
    }
};
let mapStateToProps = (state: AppStateType) => ({
    profilePage: state.profilePage.profile,
    isAuth:state.auth.isAuth
})
type PathParamsType = {
    userId: string
}
type OnPropsType = MapStateToPropsType & MapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & any

type MapStateToPropsType = {
    profilePage: ProfilePageType
    isAuth:boolean
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: null | ProfileType) => void
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);