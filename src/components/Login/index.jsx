import React, { Component } from 'react';
import styles from './login.css'

class Login extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className={styles.root}>
                <p className={styles.text}>
                    Necesitamos que incies sesion con tu cuenta de GitHub 
                    para que puedas leer y escribir mensajes
                </p>
                <button 
                    onClick={this.props.onAuth}
                    className={styles.button}
                >
                    <span className="fab fa-github"></span> Login con GitHub
                </button>
            </div>
        );
    }

}

export default Login;