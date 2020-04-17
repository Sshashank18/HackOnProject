import React from 'react';

import Blackboard from '../../containers/StudentBlackboard/StudentBlacjboard';
import TextEditor from '../../containers/StudentTextEditor/StudentTextEditor';
import Chatbox from '../../containers/Chatbox/Chatbox';

import classes from './Student.css';

const Student = props => {
    return (
        <div className={classes.StudentContainer}>
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

export default Student;