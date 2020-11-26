import {burger} from './burger.js';
import {switchStatus} from './switcher.js';
const switcherBtn = document.querySelector('.switch-button');
const navigation = document.querySelector('.navigation-list');


switcherBtn.addEventListener('click', () => {
  switchStatus();
});

burger();

