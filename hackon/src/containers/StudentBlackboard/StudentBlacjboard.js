import React, { Component } from 'react';

class StudentBlackboad extends Component {
    constructor(props) {
        super(props);
        this.socket = this.props.socket;


    }

    componentDidMount() {
        // Setup socket to listen to oen or eraser events
        let canvas = document.getElementById("studentBlackboard"),
            context = canvas.getContext("2d"),
            width = canvas.width = window.innerWidth,
            height = canvas.height = window.innerHeight;

        context.fillStyle = "#000000";
        context.fillRect(0, 0, width, height);

        context.save();
        this.socket.on('getPen', data => {
            context.beginPath();
            context.strokeStyle = data.pencilColor;
            context.moveTo(data.lastX, data.lastY);
            context.lineTo(data.x, data.y);
            context.stroke();
        });

        this.socket.on('getEraser', data => {
            context.beginPath();
            context.fillStyle = "#000000";
            context.arc(data.x, data.y, data.eraserRadius * 0.5, 0, Math.PI * 2, false);
            context.fill();
        });

        context.restore();

    }

    render() {
        return (
            <canvas id="studentBlackboard">
                
            </canvas>
        );
    }
}

export default StudentBlackboad;