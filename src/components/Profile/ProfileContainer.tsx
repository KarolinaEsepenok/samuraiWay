import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {PostsType} from "../../state";

class ProfileContainer extends React.Component<any, any>{
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {

            this.props.setUserProfile(response.data)

        })
    }

    render(){
    return (
        <div>
            <Profile {...this.props} profilePage={this.props.profile}/>
        </div>
    );}
};
let mapStateToProps=(state:AppStateType)=>({
    profilePage: state.profilePage.profile

})

export default connect(mapStateToProps,{}) (ProfileContainer);