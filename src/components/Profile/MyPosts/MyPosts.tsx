import styles from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import {postType} from "../../../index";
import {profilePropsType} from "../Profile";


function MyPosts(props: profilePropsType) {


    const postElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

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
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;