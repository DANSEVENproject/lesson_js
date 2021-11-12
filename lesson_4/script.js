'use strict'

const money = +prompt('Ваш месячный доход?');
const income = 'фриланс';
let addExpenses = (prompt('Перечислите возможные расходы за рассчитываемый период через запятую.')).split(', ');
let deposit = prompt('Есть ли у вас депозит в банке?');
deposit == 'Yes' ? (
    deposit = true
) : (
    deposit == 'No' ? deposit == false : console.log('Не корректный ввод..')
)

let expenses1 = prompt('Введите обязательную статью расходов');
const amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов');
const amount2 = +prompt('Во сколько это обойдется?');

let accumulatedMonth;
const getAccumulatedMonth = function(accumulatedMonth) {
    accumulatedMonth = money - amount1 - amount2;
    for (let i = 0; i < addExpenses.length; i++) {
        accumulatedMonth -= addExpenses[i];
    }
    return accumulatedMonth;
}
accumulatedMonth = getAccumulatedMonth(accumulatedMonth);


const showTypeOf = function(variable) {
    console.log(typeof variable, variable);
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

const getExpensesMonth = function(sumOne, sumTwo) {
    return sumOne + sumTwo;
}
console.log('Сумма всех обязательных расходов за месяц: ' + getExpensesMonth(amount1, amount2));

console.log(addExpenses);

const mission = 30000;
const getTargetMonth = function(accumulatedMonth) {
    return mission / accumulatedMonth;
}
console.log('Период набора нужной суммы равен:' + ' ' + Math.ceil(getTargetMonth(accumulatedMonth)) + ' ' + 'месяцев');

const budgetDay = accumulatedMonth / 30;
console.log('Заработок в день:' + ' ' + Math.ceil(budgetDay));

const getStatusIncome = function(budgetDay) {
    if (budgetDay >= 1200) return 'У вас высокий уровень дохода!';
    if (budgetDay <= 1200 && budgetDay >= 600) return 'У вас средний уровень дохода';
    if (budgetDay > 0 && budgetDay < 600) return 'К сожалению у вас уровень дохода ниже среднего';
    if (budgetDay <= 0) return 'Что то пошло не так';
}
console.log(getStatusIncome(budgetDay));