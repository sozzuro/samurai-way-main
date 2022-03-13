import React from "react";
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/640px-ZDF_logo%21_Logo_2021.svg.png"
                alt="logo"/>
        </header>
    )
}

export default Header;