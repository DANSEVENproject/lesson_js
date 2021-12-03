class Calculator {

    inputFirst = document.querySelector('#a');
    inputSecond = document.querySelector('#b');
    inputResult = document.querySelector('#res');
    buttonSum = document.querySelector('#count');
    buttonMult = document.querySelector('#multer');

    sum() {
        return +this.inputFirst.value + +this.inputSecond.value;
    }

    mult() {
        return +this.inputFirst.value * +this.inputSecond.value;
    }

    show() {
        this.buttonSum.addEventListener('click', () => { this.inputResult.value = this.sum() });
        this.buttonMult.addEventListener('click', () => { this.inputResult.value = this.mult() });
    }
}
const calculator = new Calculator();
calculator.show();