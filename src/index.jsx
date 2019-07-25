import React from 'react';
import { render } from 'react-dom';
import firebase from 'firebase';
import App from './components/App';

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBrs32fXQ9IsWckaQ9ay3Ij4y8mHZTW2D0",
    authDomain: "reactter-ff2f0.firebaseapp.com",
    databaseURL: "https://reactter-ff2f0.firebaseio.com",
    projectId: "reactter-ff2f0",
    storageBucket: "",
    messagingSenderId: "234182126081",
    appId: "1:234182126081:web:da0b067b678e782b"
});

render(
    <App />, 
    document.getElementById('root')
);