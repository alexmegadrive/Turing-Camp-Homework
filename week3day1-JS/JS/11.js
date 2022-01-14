'use strict'
// const  A = 201;
// if (A % 2) {
//     alert(“A нечётное”);
// } else {
//     alert(“A чётное”);
// }

// const  A = 201;

let log = 'testlogin';
let pass = 'testpass';


let log_typed = prompt('Введите логин');
let pass_typed = prompt('Введите пароль');

if ((log === log_typed) && (pass === pass_typed)) {
alert ('Авторизация успешна!');}
else {alert ('Логин/пароль неверные') }