import React from 'react';

import Blackboard from './../../containers/Blackboard/Blackboard';
import TextEditor from '../../containers/TextEditor/TextEditor';

import classes from './Teacher.css';

const Teacher = props => {
    return (
        <div className={classes.TeacherContainer}>
            <TextEditor socket={props.socket}/>
            <Blackboard socket={props.socket}/>
        </div>
    )
}

export default Teacher;