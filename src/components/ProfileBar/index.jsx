import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './profile-bar.css';

class ProfileBar extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Link to="/profile">
                    <figure>
                        <img src={this.props.picture} alt="" className={styles.avatar} />
                    </figure>
                </Link>
                <span className={styles.username}>Hola @{this.props.username}!</span>
                <button onClick={this.props.onOpenText} className={styles.button}>
                    <span className="fa fa-lg fa fa-edit"></span> Tweet!
                </button>
            </div>
        );
    }
}

export default ProfileBar;