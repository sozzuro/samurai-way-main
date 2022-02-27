import styles from "./Post.module.css";
import React from "react";

type PostPropsType = {
    message: string
}

function Post(props: PostPropsType) {
    return (
        <div className={styles.item}>
            <img src="https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg" alt="ava"/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;