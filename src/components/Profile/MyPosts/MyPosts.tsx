import styles from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                <Post message="It's my first message!" likesCount={3} />
                <Post message="Hello! How are you?" likesCount={32} />

            </div>
        </div>
    )
}

export default MyPosts;