import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs() {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name='Dimych' id={1}/>
                <DialogItem name='Andrey' id={2}/>
                <DialogItem name='Sveta' id={3}/>
                <DialogItem name='Sasha' id={4}/>
                <DialogItem name='Viktor' id={5}/>
                <DialogItem name='Valera' id={6}/>
            </div>
            <div className={styles.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message="I'm fine!"/>
            </div>
        </div>
    )
}

export default Dialogs;