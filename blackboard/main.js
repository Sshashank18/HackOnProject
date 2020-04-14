let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

let mouseWrapper = document.getElementById("mouseWrapper");

let mouseDown = false;
let lastX = 0;
let lastY = 0;

let currentTool = "pen";

canvas.addEventListener("mousemove", event => {
    let x = event.clientX,
        y = event.clientY;

    if (currentTool === "eraser") {
       mouseWrapper.style.left = x - 10 + "px";
       mouseWrapper.style.top = y - 10 + "px";
    }    
    if (mouseDown) {
        context.save();
        switch (currentTool) {
            case "pen":
                context.beginPath();
                context.moveTo(lastX, lastY);
                context.lineTo(x, y);
                context.stroke();
                break;
                
            case "eraser":
                context.beginPath();
                context.fillStyle = "#FFFFFF";
                context.arc(x, y, 50, 0, Math.PI * 2, false);
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