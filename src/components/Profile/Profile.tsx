import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Store} from "redux";
import {AppStateType} from "../../redux/reduxStore";

//export type MessageType = {
 //  message: string,
 // likeCounts: string
//}
export  type ProfileProps = {
    // profilePage: ProfilePageType
    // addPost:(message:string)=>void
    // newPostText:string
    // dispatch: (action: ActionsTypes) => void
    store: Store<AppStateType>
    //updateNewPostTextActionCreator: any

}

function Profile(props: ProfileProps) {

    return (
        <div>
            <ProfileInfo/>
            {/* <MyPostsContainer />
            // updateNewPostTextActionCreator={props.updateNewPostTextActionCreator}
            //     posts={props.profilePage.posts}
            //         dispatch={props.dispatch}
            //
            // //  newPostText={props.profilePage.newPostText}
            //        // newPostText={props.newPostText}
            //          addPost={props.addPost}
            // // addPost={props.addPost}
            //    store={props.store}*/}



        </div>
    )
}

export default Profile;