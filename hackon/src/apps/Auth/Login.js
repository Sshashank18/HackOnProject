import React, { Component } from 'react';

import classes from './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type: "Teacher"
        }
        
    }

    clickHandler = event => {
        event.preventDefault();
        if (this.state.type === "Teacher") {
            window.location = "/teacher";
        } else {
            window.location = "/student";
        }
    }

    selectHandler = event => {
        // console.log(event.target.value);

        this.setState({
            type: event.target.value
        })
    }

    render() {
        return (
            <div className={classes.container} id="container">
                <form className={classes.credentials} id="credentials">
                    <h4 className={classes.heads}>Email:</h4>
                    <input type="email" name="Email" className={classes.Email} id="Email" placeholder="Email Address" required />
                    <br /><br />
                    <h4 className={classes.heads}>Password:</h4>
                    <input type="password" name="Password" placeholder="Password" className={classes.Password} id="Password" required />
                    <br /><br /><br />
                    <select className={classes.position} id="position" required onChange={this.selectHandler}>
                        <option value="Teacher">Teacher</option>
                        <option value="Student">Student</option>
                    </select>
                    <br /><br /><br />
                    <button className={classes.signupButton} id="signupButton" >Sign Up</button>
                    <button className={classes.loginButton} id="loginButton" type="submit" onClick={this.clickHandler}>Log in</button>
                </form>
            </div>
        );
    }
}

export default Login;