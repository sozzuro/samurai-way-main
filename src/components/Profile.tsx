import React from "react";
import styles from './Profile.module.css'

function Profile() {
    return (
        <div className={styles.content}>
            <div>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" alt="image"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={styles.posts}>
                    <div className={styles.item}>
                        post 1
                    </div>
                    <div className={styles.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;