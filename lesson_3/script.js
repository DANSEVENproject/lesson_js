'use strict'

const money = +prompt('Ваш месячный доход?');
let addExpenses = (prompt('Перечислите возможные расходы за рассчитываемый период через запятую.')).split(', ');
let deposit = prompt('Есть ли у вас депозит в банке?');
deposit == 'Yes' ? deposit = true : deposit = false;

let expenses1 = prompt('Введите обязательную статью расходов?');
const amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
const amount2 = +prompt('Во сколько это обойдется?');

let budgetMonth = (money / 30) - amount1 - amount2;
for (let i = 0; i < addExpenses.length; i++) {
    budgetMonth -= addExpenses[i];
}

console.log(budgetMonth);

const mission = 30000;
const period = mission / budgetMonth;
console.log(Math.ceil(period));

const budgetDay = budgetMonth / 30;
console.log(Math.ceil(budgetDay));

if (budgetDay >= 1200) alert('У вас высокий уровень дохода!');
if (budgetDay <= 1200 && budgetDay >= 600) alert('У вас средний уровень дохода');
if (budgetDay > 0 && budgetDay < 600) alert('К сожалению у вас уровень дохода ниже среднего');
if (budgetDay <= 0) alert('Что то пошло не так');