import styles from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post message="It's my first message!" likesCount={3} />
                <Post message="Hello! How are you?" likesCount={32} />

            </div>
        </div>
    )
}

export default MyPosts;