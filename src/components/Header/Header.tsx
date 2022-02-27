import React from "react";
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img src="https://images.ru.prom.st/653840423_w600_h600_zachem-kompanii-nuzhen.jpg" alt="logo"/>
        </header>
    )
}

export default Header;