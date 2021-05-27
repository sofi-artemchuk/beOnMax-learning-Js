"use strict";
let money = +prompt("Ваш бюджет на месяц?", "12000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2021-05-27");
let firstSpending = prompt("Введите обязательную статью расходов в этом месяце");
let firstCosts = +prompt("Во сколько обойдется?");
let secondSpending = prompt("Введите обязательную статью расходов в этом месяце");
let secondCosts = +prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}
appData.expenses.firstSpending = firstCosts;
appData.expenses.secondSpending = secondCosts;

alert("Daily budget: " + appData.budget / 30);