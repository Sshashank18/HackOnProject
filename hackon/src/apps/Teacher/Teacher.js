import React from 'react';

import Blackboard from './../../containers/Blackboard/Blackboard';
import TextEditor from '../../containers/TextEditor/TextEditor';
import Chatbox from '../../containers/Chatbox/Chatbox';

import classes from './Teacher.css';

const Teacher = props => {
    return (
        <div className={classes.TeacherContainer}>
            <div className={classes.TextEditor}>
                <TextEditor socket={props.socket}/>
            </div>
            <div className={classes.RContainer}>
                <div className={classes.Blackboard}>
                    <Blackboard socket={props.socket}/>
                </div>
                <div className={classes.Chatbox}>
                    <Chatbox socket={props.socket}/>
                </div>
            </div>
        </div>
    )
}

export default Teacher;