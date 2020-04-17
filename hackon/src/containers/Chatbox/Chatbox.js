import React, { Component } from 'react';
import classes from './Chatbox.css';

class Chatbox extends Component{
    constructor(props) {
        super(props);
        this.socket = this.props.socket;
        this.messageBoxRef = React.createRef();

        this.state = {
            messages : [{message : "hi"},{message : "hey"}],
            message : ""
        }

        this.socket.on('recieveMessage', data => {
            let newMessages = null;
            if (this.state.messages) {
                newMessages = [...this.state.messages, data];
            } else {
                newMessages = [data];
            }
            this.setState({
                messages: newMessages
            });

        });
    }
    addMessageHandler = message => {
        const currentMessages = this.state.messages;
        currentMessages.push(message);
        console.log(currentMessages);
        this.setState({
            messages: currentMessages
        },this.scrollToBottom());
    }
    scrollToBottom = () => {
        const element = this.messageBoxRef.current;
        element.scrollTop = element.scrollHeight;
    }
    messageHandler = event => {
        this.setState({
            message: event.target.value
        });
    }
    sendMessage = () => {
        if (this.state.message) {
            this.socket.emit('sendMessage', {
                message: this.state.message
            });
            const newMessage = {
                message: this.state.message,
            }

            this.addMessageHandler(newMessage);

            this.setState({
                message: ""
            });
        }
    }
    render () {
        return (
            <React.Fragment>
                <div className={classes.Header}>ChatBox</div>
                <div className={classes.messageBox} ref={this.messageBoxRef}>
                    {this.state.messages.map(message => (
                        <div className={classes.message}>
                            <span key={message.message}>{message.message}</span>   
                        </div>

                    ))}
                </div>
                <div className={classes.SendContainer}>
                    <input 
                        placeholder="Type A Message..." 
                        value={this.state.message} 
                        className={classes.SendInput} 
                        onChange={this.messageHandler} 
                    />
                    <div className={classes.SendIconCont}>
                        <span 
                            className={classes.SendIcon} 
                            onClick={this.sendMessage}
                        > =></span>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default Chatbox;