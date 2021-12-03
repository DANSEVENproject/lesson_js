'use strict';

function getResult(x, y) {

    let stringNum = 1,
        result = 0;

    for (let i = 0; i < y; i++) {
        stringNum *= x;
    }

    stringNum = String(stringNum);
    for (let i = 0; i < stringNum.length; i++) {
        result += +stringNum[i];
    }
    return result;
}

console.log(getResult(4, 8))