import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {ProfileCommonType, ProfileType} from "../../state";
import {getUserProfile, ProfilePageType} from "../../redux/ProfilePageReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux";



class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId:string | number = this.props.match.params.userId;

        if (!userId) {

            userId = Number(this.props.userId)
        }
      this.props.getUserProfile(+userId)
    }

    render() {
      //  if(!this.props.isAuth) return <Redirect to={"/login"}/>
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
    userId: state.auth.userId

})
type PathParamsType = {
    userId: string
}
type OnPropsType = MapStateToPropsType & MapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & OnPropsType

type MapStateToPropsType = {
    profilePage: ProfilePageType
    userId:number | null

}
type MapDispatchToPropsType = {
    getUserProfile: (userId:number) => void
}


//let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default  compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
        withRouter,withAuthRedirect
)(ProfileContainer)