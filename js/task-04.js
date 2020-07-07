'use strict';

const credits = 23580;
const pricePerDroid = 3000;

const userInput = prompt('Какое количество дроидов Вы хотите купить?');

if (userInput === null) {
  console.log('Отменено пользователем!');
} else {
  const totalPrice = pricePerDroid * userInput;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(`Вы купили ${userInput} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
  }
}