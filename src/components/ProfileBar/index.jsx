import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './profile-bar.css';

const propTypes = {
    picture: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onOpenText: PropTypes.func.isRequired
}

function ProfileBar({ picture, username, onOpenText, onLogout }) {
    return (
        <div className={styles.root}>
            <Link to="/profile">
                <figure>
                    <img src={picture} alt="" className={styles.avatar} />
                </figure>
            </Link>
            <span className={styles.username}>Hola @{username}!</span>
            <button onClick={onOpenText} className={styles.button}>
                <span className="fa fa-lg fa fa-edit"></span> Tweet!
            </button>
            <button onClick={onLogout} className={styles.button}>
                <span className="fa fa-sign-out-alt"></span> Salir
            </button>
        </div>
    );
}

ProfileBar.propTypes = propTypes;

export default ProfileBar;