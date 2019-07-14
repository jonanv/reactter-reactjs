import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize-css';

import styles from './app.css';
import Header from '../Header';
import Main from '../Main';

class App extends Component {

    constructor() {
        super();
        this.state = {
            user: {
                photoURL: 'https://pbs.twimg.com/profile_images/1065088918519988224/EhhCjP4b_400x400.jpg',
                email: 'jonan-vargas23@hotmail.com',
                displayName: 'Giovanni',
                onOpenText: false
            }
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <div>
                        <Header />
                        <Route exact path='/' render={() => {
                            if (this.state.user) {
                                return (
                                    <Main user={this.state.user} />
                                );
                            }
                            else {
                                // Render <Login />
                                // TODO: Falta realizar el Login
                            }
                        }} />
                        <Route path='/profile' render={() => {
                            // Render <Profile />
                            // TODO: Falta realizar el Profile
                        }} />
                        <Route path='/user/:username' render={({ params }) => {
                            // Render <Profile />
                            // TODO: Falta realizar el Profile pasando params.username
                        }} />
                    </div>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;