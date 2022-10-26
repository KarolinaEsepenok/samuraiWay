import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {PostsType, ProfileType, RootStateType} from "../../state";
import {ActionsTypes, ProfilePageType, setUserProfile} from "../../redux/ProfilePageReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType>{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }
    render(){
    return (
        <div>
            <Profile
                {...this.props}
                     profilePage={this.props.profilePage}  />
        </div>
    );}
};
let mapStateToProps=(state:AppStateType)=>({
    profilePage: state.profilePage
})

type MapStateToPropsType = {
    profilePage: ProfilePageType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: null | ProfileType) => void
}
let WithUrlDataContainerComponent= withRouter(ProfileContainer)
export default connect(mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent)(ProfileContainer);