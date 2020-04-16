import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import socketIOClient from 'socket.io-client';

import Login from './apps/Auth/Login';

import TeacherApp from './apps/Teacher/Teacher';
import StudentApp from './apps/Student/Student';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = socketIOClient("http://192.168.0.101:7500");
  }
  
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/teacher" exact render={props => <TeacherApp {...props} socket={this.socket} />} />
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
