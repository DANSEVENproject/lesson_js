'use strict'

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let money,
    income = 'фриланс',
    addExpenses = (prompt('Перечислите возможные расходы за рассчитываемый период через запятую.')).split(', '),
    deposit = confirm('Есть ли у вас депозит в банке?');

let start = function() {
    money = prompt('Ваш месячный доход?');

    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));
}
start();

let expenses = [],
    sum = 0,
    count;
const getExpensesMonth = function() {
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов');
        sum += checkSum();
    }
    console.log(expenses);
    return sum;
}
let checkSum = function() {
    count = prompt('Во сколько это обойдется?');
    while (!isNumber(count)) {
        count = prompt('Во сколько это обойдется?');
    }
    return +count;
}

const amount = getExpensesMonth();

let accumulatedMonth;
const getAccumulatedMonth = function(accumulatedMonth) {
    accumulatedMonth = money - amount;
    return accumulatedMonth;
}
accumulatedMonth = getAccumulatedMonth(accumulatedMonth);

const showTypeOf = function(variable) {
    console.log(typeof variable, variable);
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Сумма всех обязательных расходов за месяц: ' + amount);

console.log(addExpenses);

const mission = 30000;
const getTargetMonth = function(accumulatedMonth) {
    let TargetMonth = mission / accumulatedMonth;
    if (TargetMonth < 0) return 'Цель не будет достигнута';
    else return 'Цель будет достигнута через:' + ' ' + Math.ceil(TargetMonth) + ' ' + 'месяцев';
}
console.log(getTargetMonth(accumulatedMonth));

const budgetDay = accumulatedMonth / 30;
console.log('Заработок в день:' + ' ' + Math.ceil(budgetDay));

const getStatusIncome = function(budgetDay) {
    if (budgetDay >= 1200) return 'У вас высокий уровень дохода!';
    if (budgetDay <= 1200 && budgetDay >= 600) return 'У вас средний уровень дохода';
    if (budgetDay > 0 && budgetDay < 600) return 'К сожалению у вас уровень дохода ниже среднего';
    if (budgetDay <= 0) return 'Что то пошло не так';
}
console.log(getStatusIncome(budgetDay));