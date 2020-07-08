'use strict';

let input;
let total = 0;

do {
  input = prompt('Введите число');

  if (input !== null) {
    if (Number.isNaN(+input)) {
      console.log('Было введено не число, попробуйте еще раз');
      continue;
    }

    total += +input;
  }
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
