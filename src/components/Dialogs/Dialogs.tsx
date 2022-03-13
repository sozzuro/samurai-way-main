import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsType, messagesType} from "../../index";

type dialogsPropsType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>,
}

function Dialogs(props: dialogsPropsType) {


    const dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;