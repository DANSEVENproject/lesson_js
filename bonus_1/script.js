'use strict';

const buttonColor = document.querySelector('.main-block__button');
const textColor = document.querySelector('.main-block__text');

const getRandomColor = function() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

buttonColor.addEventListener('click', function() {
    document.body.style.background = getRandomColor();
    textColor.textContent = getRandomColor();
});