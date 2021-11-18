'use strict';

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
    percentDeposit: 0,
    moneyDeposit: 0,
    asking: function() {

        if (confirm('Есть ли у вас дополнительный источник заработка?')) {
            let itemInCome = prompt('Какой у вас дополнительный источник зароботка?');
            itemInCome = appData.checkString(itemInCome);
            let cashInCome = prompt('Сколько денег вы получаете в месяц из заработка?');
            cashInCome = appData.checkNumber(cashInCome);
            appData.income[itemInCome] = cashInCome;
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую.');
        appData.addExpenses = (addExpenses.toLowerCase()).split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++) {
            let expense = prompt('Введите обязательную статью расходов');
            expense = appData.checkString(expense);
            appData.expenses[expense] = +prompt('Во сколько это обойдется?');
            appData.expenses[expense] = appData.checkNumber(appData.expenses[expense]);
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
            sum += +appData.expenses[key];
        }
        return sum;
    },
    checkNumber: function(number) {
        while (!appData.isNumber(number)) {
            number = prompt('Повторите попытку...');
        }
        return number;
    },
    checkString: function(string) {
        while (!appData.isString(string)) {
            string = prompt('Повторите попытку...');
        }
        return string;
    },
    isNumber: function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },
    isString: function(n) {
        return isNaN(parseFloat(n)) && !isFinite(n);
    },
    getInfoDeposit: function() {
        if (appData.deposit) {
            appData.percentDeposit = prompt('Какой годовой процент?');
            appData.percentDeposit = appData.checkNumber(percentDeposit);
            appData.moneyDeposit = prompt('Какая сумма заложена?');
            appData.moneyDeposit = appData.checkNumber(moneyDeposit);
        }
    },
    calsSaveMoney: function() {
        return appData.budgetMonth * appData.period;
    },
    ucFirst: function(str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }
}

function start() {
    appData.budget = prompt('Ваш месячный доход?');
    appData.budget = appData.checkNumber(appData.budget);
}
start();

appData.asking();

appData.expensesMonth = appData.getExpensesMonth();

appData.budgetMonth = appData.getBudget();

console.log('Сумма всех обязательных расходов за месяц: ' + appData.expensesMonth);

console.log(appData.getTargetMonth());

appData.budgetDay = Math.ceil(appData.budgetMonth / 30);

console.log(appData.getStatusIncome());

for (let i = 0; i < appData.addExpenses.length; i++) {
    appData.addExpenses[i] = appData.ucFirst(appData.addExpenses[i]);
}
console.log(appData.addExpenses.join(', '));

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
    if (typeof appData[key] === 'object') {
        console.log(key + ' содержит:');
        for (let i in appData[key]) {
            console.log(i + ': ' + appData[key][i]);
        }
        console.log('');
    } else console.log(key + ': ' + appData[key]);
}