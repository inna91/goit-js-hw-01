'use strict';

const china = 'Китай';
const chile = 'Чили';
const australia = 'Австралия';
const india = 'Индия';
const jamaica = 'Ямайка';

let message;
let price;

const userInput = prompt(
  'Укажите, пожалуйста, страну, в которую нужно доставить товар.',
);

if (userInput === null) {
  alert('Отменено пользователем!');
} else if (userInput === '') {
  alert('Вы ничего не указали');
} else {
  const normalizedInput =
    userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();

  switch (normalizedInput) {
    case china:
      price = 100;
      message = `Доставка в ${china} будет стоить ${price} кредитов`;
      console.log(message);
      break;

    case chile:
      price = 250;
      message = `Доставка в ${chile} будет стоить ${price} кредитов`;
      console.log(message);
      break;

    case australia:
      price = 170;
      message = `Доставка в ${australia} будет стоить ${price} кредитов`;
      console.log(message);
      break;

    case india:
      price = 80;
      message = `Доставка в ${india} будет стоить ${price} кредитов`;
      console.log(message);
      break;

    case jamaica:
      price = 120;
      message = `Доставка в ${jamaica} будет стоить ${price} кредитов`;
      console.log(message);
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
}