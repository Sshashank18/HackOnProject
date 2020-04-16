import React, { Component } from 'react';
import classes from './App.css';

import Blackboard from './containers/Blackboard/Blackboard'

import socketIOClient from 'socket.io-client';

class App extends Component {
  constructor(props) {
    this.socket = socketIOClient("http://127.0.0.1:7500");
  }
  
  
  render() {
    return (
      <div className={classes.App}>
        <Blackboard socket={this.socket} />
      </div>
    );
  }
}

export default App;
