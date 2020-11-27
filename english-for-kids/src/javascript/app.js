import {burger} from './burger.js';
import {switchStatus} from './switcher.js';
import cards from './cards.js';
const switcherBtn = document.querySelector('.switch-button');
const navigation = document.querySelector('.navigation-list');


switcherBtn.addEventListener('click', () => {
  switchStatus();
});

burger();

console.log(cards)

