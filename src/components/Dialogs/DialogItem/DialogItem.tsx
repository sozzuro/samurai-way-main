import React from "react";
import {NavLink} from "react-router-dom";
import styles from './DialogItem.module.css'

type DialogItemPropsType = {
    name: string,
    id: number
}

function DialogItem(props: DialogItemPropsType) {
    let path = '/dialogs/' + props.id;

    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;