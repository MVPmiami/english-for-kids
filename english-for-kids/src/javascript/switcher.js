import {currentItemStr} from './app.js';
import cards from './cards.js';
import {generatorCard} from './generatorCard.js';
import {isNewPage} from './app.js';;

let isTrain = true;

function switchStatus() {
  const switcherBtn = document.querySelector('.switch-button');
  console.log(isTrain)
  if(isTrain){
    switcherBtn.addEventListener('click', () => {
      transformCards(isTrain);
      isTrain = false;
  });
  }else{
    switcherBtn.addEventListener('click', () => {
      transformCards(isTrain);
      isTrain = true;
  });
  }
}

function transformCards(isTrain) {
  let mainContainer = document.querySelector('.main-container');
  let cardNoTranslate = document.querySelectorAll('.card-no-translate');
  const navigation = document.querySelector('.navigation-list');
  const cardStatusColor = document.querySelectorAll('.card-status-color');


  if(isTrain){
    let currentItem = document.querySelector('.card').classList[2];

    navigation.classList.add('navigation-list-play');
    generatePlayCards(currentItem, cards);

  }else {
    navigation.classList.remove('navigation-list-play');

    let currentItem = document.querySelector('.card').classList[2];

    for(let i = 0 ; i < 8; i++ ){
      if(cards[0][i] === currentItem){
      generatorCard(currentItem, cards[i + 1], isNewPage);
      }else{
        continue;
      }
    } 
  }
}

function generatePlayCards(currentCard, card) {
  const mainContainer = document.querySelector('.main-container');
  while(mainContainer.firstChild){
    mainContainer.removeChild(mainContainer.firstChild);
  }
  let cards;
  for(let i = 0; i < card[0].length; i++){
    if(card[0][i] === currentCard){
      cards = card[i + 1 ];
    }
  }

  console.log(currentCard)
  console.log(cards)

  for(let i = 0; i < 8; i++){
    let itemNoTranslate = document.createElement('div');
    let item = document.createElement('div');
    let itemStatus = document.createElement('div');
    let itemImage = document.createElement('img');
    let pathOfImage = cards[i].image;

    item.classList.add('card');
    item.classList.add(`card${i+1}`);
    item.classList.add(`${currentCard}`);
    itemNoTranslate.classList.add('card-no-translate')
    itemStatus.classList.add('card-status-color');
    itemStatus.classList.add('card-status-color-play');
    itemImage.setAttribute('src', pathOfImage);
    itemImage.classList.add('card-play-img');

    mainContainer.appendChild(item);
    item.appendChild(itemNoTranslate);
    itemNoTranslate.appendChild(itemStatus);
    itemNoTranslate.appendChild(itemImage);
  }
}

export {switchStatus};