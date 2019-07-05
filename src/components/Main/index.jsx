import React, { Component } from 'react';
import MessageList from '../MessageList';
import ProfileBar from '../ProfileBar';
import InputText from '../InputText';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            openText: false,
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
        this.handleOpenText = this.handleOpenText.bind(this);
        this.renderOpenText = this.renderOpenText.bind(this);
    }

    handleOpenText(event) {
        event.preventDefault(); //Previene o evita que se produzca el comportamiento por defecto del navegador
        this.setState({ openText: true });
    }

    renderOpenText() {
        if (this.state.openText){
            return (
                <InputText />
            );
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
                {this.renderOpenText}
                <MessageList messages={this.state.messages} />
            </div>
        );
    }
}

export default Main;