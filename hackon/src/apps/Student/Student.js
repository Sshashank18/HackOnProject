import React from 'react';

import Blackboard from '../../containers/StudentBlackboard/StudentBlacjboard';
import TextEditor from '../../containers/StudentTextEditor/StudentTextEditor';

import classes from './Student.css';

const Student = props => {
    return (
        <div className={classes.StudentContainer}>
            <TextEditor socket={props.socket}/>
            <Blackboard socket={props.socket}/>
        </div>
    )
}

export default Student;