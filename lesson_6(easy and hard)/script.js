'use strict';


let count = 10;

function checkNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const correctNumber = function() {

    let numb = prompt('Введите число.');
    if (numb === null) {
        alert('Игра окончена.');
        return numb;
    } else if (!checkNumber(numb)) {
        numb = null;
        correctNumber();
    } else if (numb > 100 || numb <= 0) {
        falseNumber();
    }

    return numb;
}
const falseNumber = function() {
    alert('Error: Введено число в неправильном диапазоне. Повторите попытку..');
    correctNumber();
}

const countAttempts = function() {
    (function counter() {
        count--;
        let complete;
        count > 0 ? (
            answerInput()
        ) : (
            complete = confirm('Попытки закончились, хотите сыграть еще?'),
            complete ? (
                count = 10,
                answerInput()
            ) : (
                alert('Ясно, понятно, до свидания!')
            )
        )
    })();
}

const comprasionRandom = function(answer, randomNumber) {
    console.log(randomNumber);
    if (answer > randomNumber) {
        alert('Загаданное число меньше.' + ' Осталось попыток ' + (count - 1) + '.');
        countAttempts();
    }
    if (answer < randomNumber) {
        alert('Загаданное число больше.' + '  Осталось попыток ' + (count - 1) + '.');
        countAttempts();
    }
    if (answer == randomNumber) {
        let complete = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
        complete ? (
            count = 10,
            answerInput()
        ) : (
            alert('Ясно, понятно, до свидания!')
        )
    }
}

const randomInteger = function(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
const random = randomInteger(1, 100);

const answerInput = function() {

    let answerUser = prompt('Угадай число от 1 до 100:');

    if (answerUser === null) return alert('Игра окончена.');
    if (!checkNumber(answerUser)) {
        answerUser = correctNumber();
    } else if (answerUser > 100 || answerUser <= 0) falseNumber(answerUser);
    if (answerUser) comprasionRandom(answerUser, random);
}

answerInput();