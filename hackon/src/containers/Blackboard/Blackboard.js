import React, { Component } from 'react';

import classes from './Blackboard.css';

class Blackboard extends Component {

    constructor(props) {
        super(props);
        this.socket = this.props.socket;
    }

    componentDidMount() {
        let canvas = document.getElementById("canvas"),
            context = canvas.getContext("2d"),
            width = canvas.width = window.innerWidth / 1.75,
            height = canvas.height = window.innerHeight;

        context.fillStyle = "#000000";
        context.fillRect(0, 0, width, height / 1.75);

        let mouseWrapper = document.getElementById("mouseWrapper");

        let mouseDown = false;
        let lastX = 0;
        let lastY = 0;

        let currentTool = "pen";


        let eraserRadius = 50;
        let pencilColor = "#FFFFFF";

        let offsetX = 750;
        let offsetY = 90;

        canvas.addEventListener("mousemove", event => {
            let x = event.clientX - offsetX,
                y = event.clientY;

            if (currentTool === "eraser") {
                let offset = eraserRadius;
                mouseWrapper.style.width = eraserRadius + "px";
                mouseWrapper.style.height = eraserRadius + "px";
                mouseWrapper.style.left = x + offsetX - 0.5 * offset + "px";
                mouseWrapper.style.top = y + offsetY - 2 * offset + "px";
            } else {
                mouseWrapper.style.left = "-100px";
                mouseWrapper.style.top = "-100px";
            }   


            if (mouseDown) {
                context.save();
                switch (currentTool) {
                    case "pen":
                        context.beginPath();
                        context.strokeStyle = pencilColor;
                        context.moveTo(lastX, lastY);
                        context.lineTo(x, y);
                        context.stroke();

                        // Socket call to draw line
                        this.socket.emit('sharePen', {
                            lastX,
                            lastY,
                            x,
                            y,
                            pencilColor
                        });
                        break;
                        
                    case "eraser":
                        context.beginPath();
                        context.fillStyle = "#000000";
                        context.arc(x, y, eraserRadius * 0.5, 0, Math.PI * 2, false);
                        context.fill();

                        // Socket Call to draw eraser
                        this.socket.emit('shareEraser', {
                            x,
                            y,
                            eraserRadius
                        });
                        break;
                    default:
                        break;

                }

                context.restore();

            }

            lastX = x;
            lastY = y;


        });

        canvas.addEventListener("mousedown", () => {
            mouseDown = true;
        });

        canvas.addEventListener("mouseup", () => {
            mouseDown = false;
        });

        let button = document.getElementById("eraserButton");

        button.addEventListener("click", () => {
            currentTool = currentTool === "pen" ? "eraser" : "pen";
        });
    }

    render() {
        return (
            <React.Fragment>
                <canvas id="canvas">

                </canvas>

                <div id="mouseWrapper" className={classes.mouseWrapper}>

                </div>

                <button id="eraserButton" className={classes.eraserButton}>
                    Eraser
                </button>
            </React.Fragment>
        );
    }

}

export default Blackboard;