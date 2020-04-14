let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

let mouseDown = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousemove", event => {
    let x = event.clientX,
        y = event.clientY;

    if (mouseDown) {

        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(x, y);
        context.stroke();
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
