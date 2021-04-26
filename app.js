let canvas = document.getElementById("canvas");
console.log(canvas);
let ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

// OVNI

ctx.beginPath();
ctx.fillStyle = "white";
ctx.moveTo(170, 240);
ctx.quadraticCurveTo(250, 20, 330, 240);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "lightgray";
ctx.moveTo(100, 240);
ctx.quadraticCurveTo(250, 140, 400, 240);
ctx.fill();

ctx.moveTo(100, 240);
ctx.quadraticCurveTo(250, 340, 400, 240);
ctx.fill();
