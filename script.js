'use strict'  // новый стандарт ES6
//a = 5;        // при этом стандарте переменная a не прочитается  
//console.log(a); // a is not defined  // в старом стандарте вывелось бы 5

// let arr = [
//     "Саня",
//     "Макаревич",
//     30
// ];

// let res = +prompt("Введи значение от 1 до 5", "4");

// console.log(typeof(res));

let incr = 10,
    decr = 10;

// Префиксная форма возвращает новое значение
// а постфиксная форма возвращает старое значение

console.log(incr++);
console.log(decr--);

// Остаток от деления
console.log(5%2);

// Равенство по значению
console.log("2" == 2);  // true  // сравнение по значению

// Строгое равенство
console.log("2" === 2);  // false // сравнение еще и по типу данных


// || &&
let isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);  // !false = true

