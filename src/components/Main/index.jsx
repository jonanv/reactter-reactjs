import React, { Component } from 'react';
import MessageList from '../MessageList';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            messages: [{
                text: 'Mensaje del Tweet',
                picture: 'https://pbs.twimg.com/profile_images/1065088918519988224/EhhCjP4b_400x400.jpg',
                displayName: 'Giovanni',
                username: '@jonanv',
                date: Date.now() - (3 * 60 * 1000) //Minutos * segundos * segundos en milisegundos
            },
            {
                text: 'Este es un nuevo mensaje',
                picture: 'https://pbs.twimg.com/profile_images/1065088918519988224/EhhCjP4b_400x400.jpg',
                displayName: 'Giovanni',
                username: '@jonanv',
                date: Date.now() - (30 * 60 * 1000)
            }]
        }
    }

    render() {
        return (
            <MessageList messages={this.state.messages} />
        );
    }
}

export default Main;