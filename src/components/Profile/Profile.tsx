import React from "react";
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, profilePageType} from "../../redux/state";


type profilePropsType = {
    state: profilePageType
    dispatch: (action: ActionsType) => void
}

function Profile(props: profilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} dispatch={props.dispatch}
                     newPostText={props.state.newPostText}/>
        </div>
    )
}

export default Profile;