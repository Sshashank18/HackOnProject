import React, { Component } from 'react';

class StudentBlackboad extends Component {
    constructor(props) {
        this.socket = this.props.socket;

        
    }

    componentDidMount() {
        // Setup socket to listen to oen or eraser events
        let canvas = document.getElementById("canvas"),
            context = canvas.getContext("2d"),
            width = canvas.width = window.innerWidth,
            height = canvas.height = window.innerHeight;

        context.fillStyle = "#000000";
        context.fillRect(0, 0, width, height);

        let currentTool = "pen";


        let eraserRadius = 50;
        let pencilColor = "#FFFFFF";


    }

    render() {
        return (
            <canvas id="studentBlackboard">
                
            </canvas>
        );
    }
}

export default StudentBlackboad;