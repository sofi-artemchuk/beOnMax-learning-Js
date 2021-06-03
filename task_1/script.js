'use strict';

let money = +prompt("Ваш бюджет на місяць?", "12000");
let time = prompt("Введіть дату в форматі YYYY-MM-DD", "2021-05-27");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};



for (let i=0; i< 2; i++) {
    let Spending = prompt("Введіть обов'язкову статтю розходів в цьому місяці");
    let Costs = prompt("В скільки обійдеться?");

    if( typeof(Spending) ==='string' && typeof(Spending) != null && typeof(Costs) != null && Spending != '' && Costs != '' && Spending.length < 50) {
        console.log ("done");
        appData.expenses[Spending]= Costs;
    } else {
        alert ("Поганий результат. Спробуйте ще раз");
        i--;
    }
}

appData.moneyPerDay = appData.budget / 30;

alert("Денний бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log ("мінімальний рівень достатку");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log ("середній рівень достатку");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay > 2000) {
    console.log ("високий рівень достатку");
} else {
    console.log ("відбулась помилка");
}