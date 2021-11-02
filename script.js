'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let income = [];

let appData = {
    budjet: money,
    vremya: time,
    savings: false
};

let rashod = prompt("Введите обязательную статью расходов в этом месяце", "");
let skolko = +prompt("Во сколько обойдется?", ""); 

appData.expenses = {
    rashod:skolko
};

appData.optionalExpenses = {

};

appData.income;

let budgetOdinDen = appData.expenses.rashod/30;

alert(budgetOdinDen);

console.log(appData.expenses);