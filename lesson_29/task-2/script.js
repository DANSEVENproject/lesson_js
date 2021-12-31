'use strict';

const canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    colorLine = document.getElementById('color'),
    sizeLine = document.getElementById('size'),
    spanSize = document.getElementById('span-size');



sizeLine.value = 1;
colorLine.addEventListener('input', () => {
    ctx.strokeStyle = colorLine.value;
});
sizeLine.addEventListener('input', () => {
    spanSize.textContent = sizeLine.value;
    ctx.lineWidth = sizeLine.value;
});

canvas.addEventListener('mousemove', (event) => {
    const x = event.offsetX,
        y = event.offsetY,
        mx = event.movementX,
        my = event.movementY;

    if (event.buttons > 0) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - mx, y - my);
        ctx.stroke();
        ctx.closePath();
    }
});