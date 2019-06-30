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
                username: 'jonanv',
                date: Date.now()
            }],
        }
    }

    render() {
        return (
            <MessageList messages={this.state.messages} />
        );
    }
}

export default Main;