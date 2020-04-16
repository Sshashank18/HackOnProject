import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import socketIOClient from 'socket.io-client';

import TeacherApp from './apps/Teacher/Teacher';
import StudentApp from './apps/Student/Student';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = socketIOClient("http://127.0.0.1:7500");
  }
  
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact render={props => <TeacherApp {...props} socket={this.socket} />} />
        <Route path="/student" exact render={props => <StudentApp {...props} socket={this.socket} />} />
      </Switch>
    );


    return (
      <React.Fragment>
        {routes}
      </React.Fragment>
    );
  }
}

export default App;
