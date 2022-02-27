import React from "react";
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div>
            <ProfileInfo />
            <MyPosts/>
        </div>
    )
}

export default Profile;