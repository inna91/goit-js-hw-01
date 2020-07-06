'use strict';

let input;
let total = 0;

do {
  let input = prompt('Введите число');

  if (input === null) {
    console.log('Отменено пользователем!');
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    console.log('Было введено не число, попробуйте еще раз');
    continue;
  }

  total += input;
} while (true);

alert(`Общая сумма чисел равна ${total}`);