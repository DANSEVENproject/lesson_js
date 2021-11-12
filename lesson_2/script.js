const money = 3000;
const income = "фриланс";
let addExpenses = "Интернет, Такси, Коммуналка";
let deposit = false;
const mission = 4000000;
const period = 10;

console.log(typeof money, typeof income, typeof deposit);

console.log(addExpenses.length);

console.log("Период равен" + " " + period + " " + "месяцев");
console.log("Цель заработать" + " " + mission + " " + "рублей/долларов/гривен/юани");

console.log((addExpenses.toLowerCase()).split(", "));

const budgetDay = money / 30;
console.log(budgetDay);