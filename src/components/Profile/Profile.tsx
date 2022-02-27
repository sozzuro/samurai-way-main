import React from "react";
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={styles.content}>
            <div>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" alt="image"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;