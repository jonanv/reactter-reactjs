import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize-css';

import styles from './app.css';
import Header from '../Header';
import Main from '../Main';
import Profile from '../Profile';
import Login from '../Login';

class App extends Component {

    constructor() {
        super();
        this.state = {
            /*
            user: {
                photoURL: 'https://pbs.twimg.com/profile_images/1065088918519988224/EhhCjP4b_400x400.jpg',
                email: 'jonan-vargas23@hotmail.com',
                displayName: 'Giovanni',
                location: 'Manizales'
            }
            */
        }
        this.handleOnAuth = this.handleOnAuth.bind(this);
    }

    handleOnAuth() {
        console.log("Auth");
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
                                return (
                                    <Login onAuth={this.handleOnAuth} />
                                );
                            }
                        }} />
                        <Route path='/profile' render={() => {
                            return (
                                <Profile
                                    picture={this.state.user.photoURL}
                                    displayName={this.state.user.displayName}
                                    username={this.state.user.email.split('@')[0]}
                                    emailAddress={this.state.user.email}
                                    location={this.state.user.location}
                                />
                            );
                        }} />
                        <Route path='/user/:username' render={({ params }) => {
                            return (
                                <Profile
                                    displayName={params.username}
                                    username={params.username}
                                />
                            );
                        }} />
                    </div>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;