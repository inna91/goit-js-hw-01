'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let message;

let userInput = prompt('Какое количество дроидов Вы хотите купить?');
console.log(userInput);

if (userInput === null) {
  message = 'Отменено пользователем!';
} else if (userInput > 0) {
  userInput = Number(userInput);

  const totalPrice = pricePerDroid * userInput;
  const balance = credits - totalPrice;

  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  } else {
    message = `Вы купили ${userInput} дроидов, на счету осталось ${balance} кредитов.`
  }
} else {
  message = 'Некорректный ввод';
}

console.log(message);