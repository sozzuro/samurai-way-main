import styles from "./MyPosts.module.css";
import React, {RefObject} from "react";
import Post from "./Post/Post";
import {addPost, postType} from "../../../redux/state";

type myPostsPropsType = {
    posts: Array<postType>
    addPost: (postText: string) => void
}

function MyPosts(props: myPostsPropsType) {

    const postElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const onClickAddPostHandler = () => {
        props.addPost(newPostElement.current ? newPostElement.current.value : '')
        newPostElement.current && (newPostElement.current.value = '')
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={onClickAddPostHandler}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;