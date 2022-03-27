import React from "react";
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postType, profilePageType} from "../../redux/state";


type profilePropsType = {
    state: profilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function Profile(props: profilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText}
                     newPostText={props.state.newPostText}/>
        </div>
    )
}

export default Profile;