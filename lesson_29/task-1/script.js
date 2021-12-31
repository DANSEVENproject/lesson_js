'use strict';

const canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

const RadArc = (degrees) => Math.PI / 180 * degrees;

const paintArc = (color, cordinate, widthFont = 8) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthFont;
    ctx.arc(cordinate[0], cordinate[1], cordinate[2], cordinate[3], cordinate[4], cordinate[5]);
    ctx.stroke();
};

paintArc('yellow', [160, 150, 50, 0, RadArc(360)]);
paintArc('blue', [100, 100, 50, 0, RadArc(360)]);
paintArc('black', [220, 100, 50, 0, RadArc(360)]);
paintArc('yellow', [160, 150, 50, 360, RadArc(200)]);
paintArc('red', [340, 100, 50, 0, RadArc(360)]);
paintArc('green', [280, 150, 50, 0, RadArc(360)]);
paintArc('black', [220, 100, 50, 10, RadArc(50)]);
paintArc('yellow', [160, 150, 50, RadArc(270), RadArc(360)]);
paintArc('yellow', [160, 150, 50, RadArc(0), RadArc(20)]);
paintArc('red', [340, 100, 50, 0, RadArc(150)]);