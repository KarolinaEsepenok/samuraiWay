import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {ProfileCommonType, ProfileType} from "../../state";
import {ProfilePageType, setUserProfile} from "../../redux/ProfilePageReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../api/api-js";


class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = ''
        }
       usersAPI.getProfile(userId)
           .then(response => {
               this.props.setUserProfile(response.data)})
    }

    render() {
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
    profilePage: state.profilePage
})
type PathParamsType = {
    userId: string
}
type OnPropsType = MapStateToPropsType & MapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & any

type MapStateToPropsType = {
    profilePage: ProfilePageType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: null | ProfileType) => void
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);