import React from 'react';

import styles from './header.css';

function Header(props) {
    return(
        <header className={styles.root}>
            <h1 className={styles.logo}>{props.nombreApp}</h1>
        </header>
    );
}

export default Header;