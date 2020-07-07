'use strict';

const china = 'китай';
const chile = 'чили';
const australia = 'австралия';
const india = 'индия';
const jamaica = 'ямайка';
const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

const userInput = prompt(
  'Укажите, пожалуйста, страну, в которую нужно доставить товар.',
);

if (userInput === null) {
  alert('Отменено пользователем!');
} else {

  switch (userInput.toLowerCase()) {
    case 'китай':
      console.log(`Доставка в ${china} будет стоить ${priceChina} кредитов`);
      break;

    case 'чили':
      console.log(`Доставка в ${chile} будет стоить ${priceChile} кредитов`);
      break;

    case 'австралия':
      console.log(`Доставка в ${australia} будет стоить ${priceAustralia} кредитов`);
      break;

    case 'индия':
      console.log(`Доставка в ${india} будет стоить ${priceIndia} кредитов`);
      break;

    case 'ямайка':
      console.log(`Доставка в ${jamaica} будет стоить ${priceJamaica} кредитов`);
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
}