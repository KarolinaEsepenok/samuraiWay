import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {ProfileType} from "../../state";
import {getStatus, getUserProfile, updateStatus} from "../../redux/ProfilePageReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux";


class ProfileContainer extends React.Component<CommonPropsType> {
    refreshProfile(){
        let userId:string | number = this.props.match.params.userId;
        if (!userId) {
            userId = Number(this.props.userId)
            if(!userId){
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(+userId)
        this.props.getStatus(+userId)
    }
    componentDidMount() {

        this.refreshProfile()

    }
    componentDidUpdate(prevProps:any,prevState:any, snapshot:any) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
        }

    }

    render() {
      //  if(!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <div >
                {this.props.profile &&
                    <Profile
                    profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>}
            </div>
        );
    }
};
let mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    status:state.profilePage.status,
    isAuth: state.auth.isAuth


})
type PathParamsType = {
    userId: string
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

type MapStateToPropsType = {
    profile: null | ProfileType
    userId:number | null
    status:string
    isAuth:boolean

}
type MapDispatchToPropsType = {
    getUserProfile: (userId:number) => void
    getStatus:(userId:number)=>void
   updateStatus:(status:string)=>void
}


//let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default  compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
        withRouter,withAuthRedirect
)(ProfileContainer)