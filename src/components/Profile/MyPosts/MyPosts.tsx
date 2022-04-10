import styles from "./MyPosts.module.css";
import React, {ChangeEvent, RefObject} from "react";
import Post from "./Post/Post";
import {ActionsType, postType} from "../../../redux/state";

type myPostsPropsType = {
    posts: Array<postType>
    dispatch: (action: ActionsType) => void
    newPostText: string
}

function MyPosts(props: myPostsPropsType) {

    const postElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onClickAddPostHandler = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText})
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={(e) => onChangeTextAreaHandler(e)} ref={newPostElement}
                              value={props.newPostText}/>
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