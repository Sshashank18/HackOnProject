let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

    context.fillStyle = "#000000";
context.fillRect(0, 0, width, height);

let mouseWrapper = document.getElementById("mouseWrapper");

let mouseDown = false;
let lastX = 0;
let lastY = 0;

let currentTool = "pen";


let eraserRadius = 50;
let pencilColor = "#FFFFFF";

canvas.addEventListener("mousemove", event => {
    let x = event.clientX,
        y = event.clientY;

    if (currentTool === "eraser") {
        let offset = eraserRadius * 0.4;
        mouseWrapper.style.width = eraserRadius + "px";
        mouseWrapper.style.height = eraserRadius + "px";
        mouseWrapper.style.left = x - offset + "px";
        mouseWrapper.style.top = y - offset + "px";
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
                break;
                
            case "eraser":
                context.beginPath();
                context.fillStyle = "#000000";
                context.arc(x, y, eraserRadius * 0.5, 0, Math.PI * 2, false);
                context.fill();
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
});3