'use strict'

const appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    budgetMonth: 0,
    expensesMonth: 0,
    mission: 30000,
    budgetDay: 0,
    period: 3,
    budget: 0,
    asking: function() {
        const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую.');
        appData.addExpenses = (addExpenses.toLowerCase()).split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++) {
            let expense = prompt('Введите обязательную статью расходов');
            appData.expenses[expense] = appData.checkSum();
        }
    },
    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        return appData.budgetMonth;
    },
    getTargetMonth: function() {
        appData.TargetMonth = Math.ceil(appData.mission / appData.budgetMonth);
        if (appData.TargetMonth < 0) return 'Цель не будет достигнута';
        else return 'Цель будет достигнута через:' + ' ' + appData.TargetMonth + ' ' + 'месяцев';
    },
    getStatusIncome: function() {
        if (appData.budgetDay >= 1200) return 'У вас высокий уровень дохода!';
        if (appData.budgetDay <= 1200 && appData.budgetDay >= 600) return 'У вас средний уровень дохода';
        if (appData.budgetDay > 0 && appData.budgetDay < 600) return 'К сожалению у вас уровень дохода ниже среднего';
        if (appData.budgetDay <= 0) return 'Что то пошло не так';
    },
    getExpensesMonth: function() {
        let sum = 0;
        for (let key in appData.expenses) {
            sum += appData.expenses[key];
        }
        return sum;
    },
    checkSum: function() {
        let count = +prompt('Во сколько это обойдется?');
        while (!appData.isNumber(count)) {
            count = prompt('Во сколько это обойдется?');
        }
        return count;
    },
    isNumber: function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },
}

function start() {
    appData.budget = +prompt('Ваш месячный доход?');

    while (!appData.isNumber(appData.budget)) {
        appData.budget = prompt('Ваш месячный доход?');
    }
}
start();

appData.asking();

appData.expensesMonth = appData.getExpensesMonth();

appData.budgetMonth = appData.getBudget();

console.log('Сумма всех обязательных расходов за месяц: ' + appData.expensesMonth);

console.log(appData.getTargetMonth());

appData.budgetDay = Math.ceil(appData.budgetMonth / 30);

console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
    if (typeof appData[key] === 'object') {
        console.log(key + ' содержит:');
        console.log('');
        for (let i in appData[key]) {
            console.log(i + ': ' + appData[key][i]);
        }
    } else console.log(key + ': ' + appData[key]);
}