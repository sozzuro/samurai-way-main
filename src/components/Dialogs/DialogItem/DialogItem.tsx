import React from "react";
import {NavLink} from "react-router-dom";
import styles from './DialogItem.module.css'
import {dialogsType} from "../../../redux/state";


function DialogItem(props: dialogsType) {
    let path = '/dialogs/' + props.id;

    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <NavLink to={path} activeClassName={styles.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;