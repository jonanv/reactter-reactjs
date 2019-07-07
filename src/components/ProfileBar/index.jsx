import React, { Component } from 'react';
import styles from './profile-bar.css';

class ProfileBar extends Component {
    render() {
        return (
            <div className={styles.root}>
                <figure>
                    <img src={this.props.picture} alt="" className={styles.avatar} />
                </figure>
                <span className={styles.username}>Hola @{this.props.username}!</span>
                <button onClick={this.props.onOpenText} className={styles.button}>
                    <span className="fa fa-lg fa fa-edit"></span> Tweet!
                </button>
            </div>
        );
    }
}

export default ProfileBar;