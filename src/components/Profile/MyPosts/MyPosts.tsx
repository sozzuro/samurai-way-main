import styles from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

export type postType = {
    id: number,
    message: string,
    likesCount: number
}

function MyPosts() {

    const posts: Array<postType> = [
        {id: 1, message: 'It\'s my first message!', likesCount: 3},
        {id: 2, message: 'Hello! How are you?', likesCount: 32}
    ]

    const postElements = posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

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