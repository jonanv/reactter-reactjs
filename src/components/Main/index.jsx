import React, { Component } from 'react';
import uuid from 'uuid';
import MessageList from '../MessageList';
import ProfileBar from '../ProfileBar';
import InputText from '../InputText';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            openText: false,
            messages: [{
                id: uuid.v4(),
                text: 'Mensaje del Tweet',
                picture: 'https://pbs.twimg.com/profile_images/1065088918519988224/EhhCjP4b_400x400.jpg',
                displayName: 'Giovanni',
                username: '@jonanv',
                date: Date.now() - (3 * 60 * 1000) //Minutos * segundos * segundos en milisegundos
            },
            {
                id: uuid.v4(),
                text: 'Este es un nuevo mensaje',
                picture: 'https://pbs.twimg.com/profile_images/1065088918519988224/EhhCjP4b_400x400.jpg',
                displayName: 'Giovanni',
                username: '@jonanv',
                date: Date.now() - (30 * 60 * 1000)
            }]
        }
        this.handleOpenText = this.handleOpenText.bind(this);
        this.handleSendText = this.handleSendText.bind(this);
        this.handleCloseText = this.handleCloseText.bind(this);
    }

    handleSendText(event) {
        event.preventDefault();
        let newMessage = {
            id: uuid.v4(),
            text: event.target.text.value,
            picture: this.props.user.photoURL,
            displayName: this.props.user.displayName,
            username: this.props.user.email.split('@')[0],
            date: Date.now()
        }

        this.setState({
            messages: this.state.messages.concat(newMessage),
            openText: false,
        });
    }

    handleCloseText(event) {
        event.preventDefault();
        this.setState({ openText: false });
    }

    handleOpenText(event) {
        event.preventDefault(); //Previene o evita que se produzca el comportamiento por defecto del navegador
        this.setState({ openText: true });
    }

    renderOpenText() {
        if (this.state.openText) {
            return (
                <InputText
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}
                />
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
                {this.renderOpenText()}
                <MessageList messages={this.state.messages} />
            </div>
        );
    }
}

export default Main;