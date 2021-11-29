'use strict';

const inputValueDiv = document.querySelector('.form__input-div'),
    inputWidth = document.querySelector('.form__input-width'),
    inputHeight = document.querySelector('.form__input-height'),
    inputBackground = document.querySelector('.form__input-background'),
    inputFontSize = document.querySelector('.form__input-fontsize'),
    inputLarge = document.querySelectorAll('input'),
    getStart = document.querySelector('.buttonReset');

const DomElement = function() {
    this.selector = '';
    this.height = 0;
    this.width = 0;
    this.bg = '';
    this.fontSize = 0;
}
DomElement.prototype.create = function(element) {
    this.height = prompt('Укажите высоту.');
    this.width = prompt('Укажите ширину.');
    this.bg = prompt('Укажите цвета фона');
    this.fontSize = prompt('Укажите размер шрифта');
    element.textContent = prompt('Напишите текст, внутри блока.');
    element.style.cssText = `
        font-size: ${this.fontSize}px;
        height: ${this.height}px;
        background: ${this.bg};
        width: ${this.width}px;`;
    getStart.insertAdjacentElement('afterend', element);
}
DomElement.prototype.createDomElement = function() {
    this.selector = prompt('Введите название класса/параграфа.');
    if (this.selector[0] === '.') {
        const block = document.createElement('div');
        block.classList.add(this.selector.substring(1));
        dom.create(block);
    }

    if (this.selector[0] === '#') {
        const paragraph = document.createElement('p');
        paragraph.classList.add(this.selector.substring(1));
        dom.create(paragraph);
    }
}
DomElement.prototype.eventListener = function() {
    getStart.addEventListener('click', function() {
        dom.createDomElement();
    });
}
const dom = new DomElement();
dom.eventListener();