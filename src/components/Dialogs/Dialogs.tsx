import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export type dialogsType = {
    id: number,
    name: string
}

export type messagesType = {
    id: number,
    message: string,
}

function Dialogs() {

    const dialogs: Array<dialogsType> = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ];

    const messages: Array<messagesType> = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I\'m fine!'},
    ];

    const dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageElements = messages.map(m => <Message message={m.message} id={m.id}/>);


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