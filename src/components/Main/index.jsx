import React, { Component } from 'react';
import MessageList from '../MessageList';
import ProfileBar from '../ProfileBar';

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
        const { user } = this.props;
        
        return (
            <div>
                <ProfileBar 
                    picture={user.photoURL}
                    username={user.email.split('@')[0]}
                    onOpenText={this.handleOpenText}
                />
                <MessageList messages={this.state.messages} />
            </div>
        );
    }
}

export default Main;