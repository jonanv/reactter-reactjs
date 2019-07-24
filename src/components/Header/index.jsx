import React from 'react';
import styles from './header.css';

function Header({ nombreApp }) {
    return (
        <header className={styles.root}>
            <h1 className={styles.logo}>{nombreApp}</h1>
        </header>
    );
}

export default Header;