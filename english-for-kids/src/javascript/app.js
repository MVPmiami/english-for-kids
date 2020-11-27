import {burger} from './burger.js';
import {switchStatus} from './switcher.js';
import cards from './cards.js';
import {generatorCard} from './generatorCard.js'
const switcherBtn = document.querySelector('.switch-button');
let currentCard;
const mainContainer = document.querySelector('.main-container');

//Burger 

burger();

//Switcher

switcherBtn.addEventListener('click', () => {
  switchStatus();
});

// Current Card

mainContainer.addEventListener('click', (e) => {
  let currentItemStr = e.target.classList[0];
  currentItemStr = '.' + currentItemStr;
  currentCard = document.querySelector(currentItemStr);
  currentItemStr = currentCard.classList[0];
  for(let i = 0; i < cards[0].length; i++){
    if(currentItemStr === cards[0][i]){
      generatorCard(currentItemStr, cards[i + 1]);
    }else{
      continue;
    }
  }
});



