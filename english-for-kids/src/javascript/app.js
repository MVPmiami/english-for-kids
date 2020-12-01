import {burger} from './burger.js';
import {switchStatus} from './switcher.js';
import cards from './cards.js';
import {generatorCard} from './generatorCard.js';
import {generatorMainPage} from './generatorMainPage.js';
import {translateCard} from './translateButton.js';
const switcherBtn = document.querySelector('.switch-button');
let currentCard;
let isNewPage = false;
const mainContainer = document.querySelector('.main-container');
const navigation = document.querySelector('.navigation-list');
const mainPageLink = document.querySelector('.main-page-link');


//Burger

burger();

//Switcher

switcherBtn.addEventListener('click', () => {
  switchStatus();
});

// Selecting the current card
let currentItemStr;
function currentCards(e){
  currentItemStr = e.target.classList[0];
  currentItemStr = '.' + currentItemStr;
  currentCard = document.querySelector(currentItemStr);
  currentItemStr = currentCard.classList[0];
  return currentItemStr;
}

mainContainer.addEventListener('click', (e) => {
  currentCards(e);
  for(let i = 0; i < cards[0].length; i++){
    if(isNewPage){
      return;
    }else if(currentItemStr === cards[0][i]){
      generatorCard(currentItemStr, cards[i + 1], isNewPage);
    }else{
      continue;
    }
  }
});

navigation.addEventListener('click', (e) => {
  currentCards(e);
  //console.log(currentItemStr);
  if(e.target.textContent === 'Main Page'){
    generatorMainPage(currentCard,cards, isNewPage);
  }else{
    for(let i = 0; i < cards[0].length; i++){
      if(!isNewPage){
        if(currentItemStr === cards[0][i]){
        generatorCard(currentItemStr, cards[i + 1], isNewPage);
        }
      }else{
        continue;
      }
    }
  }
});

// Selecting the main page
/*mainPageLink.addEventListener('click', () => {
  if(isNewPage){
    generatorMainPage(currentItemStr,cards, isNewPage);
  }else{
    return;
  }
});*/

// Removing the ability to move the mouse
history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
});

// Translate Button

export {currentItemStr};
export {isNewPage};


