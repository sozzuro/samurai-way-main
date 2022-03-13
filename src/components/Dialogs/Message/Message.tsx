import React from "react";
import styles from './Message.module.css'
import {messagesType} from "../../../index";

function Message(props: messagesType) {
    return <div className={styles.message}>{props.message}</div>
}

export default Message;