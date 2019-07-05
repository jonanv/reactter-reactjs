import React, { Component } from 'react';
import 'normalize-css';

import styles from './app.css';
import Header from '../Header';
import Main from '../Main';

class App extends Component {

    constructor(){
        super();
        this.state = {
            user: {
                photoURL: 'https://pbs.twimg.com/profile_images/1065088918519988224/EhhCjP4b_400x400.jpg',
                email: 'jonan-vargas23@hotmail.com',
                onOpenText: false
            }
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;