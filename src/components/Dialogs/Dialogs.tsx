import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogPageType, dialogsType, messagesType} from "../../redux/state";

type dialogsPropsType = {
    state: dialogPageType
}

function Dialogs(props: dialogsPropsType) {


    const dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>);


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