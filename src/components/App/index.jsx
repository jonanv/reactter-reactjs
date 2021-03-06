import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
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
            user: null
        }
        this.handleOnAuth = this.handleOnAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ user });
            }
            else {
                this.setState({ user: null });
            }
        })
    }

    handleOnAuth() {
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => console.log(`${result.user.email} ha iniciado sesión`))
            .catch(error => console.error(`Error: ${error.code}: ${error.message}`))
    }

    handleLogout() {
        firebase.auth().signOut()
            .then(() => console.log('Te has desconectado correctamente'))
            .catch(() => console.error('Un error ocurrió'))
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <div>
                        <Header nombreApp="Reactter" />
                        <Route exact path='/' render={() => {
                            if (this.state.user) {
                                return (
                                    <Main
                                        user={this.state.user}
                                        onLogout={this.handleLogout}
                                    />
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
                                // TODO: No funciona este enlace, se debe correguir
                            );
                        }} />
                    </div>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;


            /*user: {
                photoURL: 'https://pbs.twimg.com/profile_images/1065088918519988224/EhhCjP4b_400x400.jpg',
                email: 'jonan-vargas23@hotmail.com',
                displayName: 'Giovanni',
                location: 'Manizales'
            }*/