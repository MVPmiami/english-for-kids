import {currentItemStr} from './app.js';
import cards from './cards.js';
import {generatorCard} from './generatorCard.js';
import {isNewPage} from './app.js';


let isTrain = true;

function switchStatus() {
  const switcherBtn = document.querySelector('.switch-button');

  if(isTrain){
    switcherBtn.addEventListener('click', () => {
      transformCards(isTrain);
      generatePlayBtn();
      isTrain = false;
  });
  }else{
    switcherBtn.addEventListener('click', () => {
      transformCards(isTrain);
      removePlayBtn();
      removeTableOfScore();
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

 // console.log(currentCard)
 // console.log(cards)

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

function generatePlayBtn() {
  let playBtn = document.querySelector('.play-button');
  playBtn.classList.remove('hidden-item');
}

function removePlayBtn() {
  let playBtn = document.querySelector('.play-button');
  playBtn.classList.add('hidden-item');
  let repeatBtn = document.querySelector('.repeat-button');
  repeatBtn.classList.add('hidden-item')
}

function removeTableOfScore(){
  let tableOfScore = document.querySelector('.table-of-score');
  while(tableOfScore.firstChild){
    tableOfScore.removeChild(tableOfScore.firstChild);
  }
  tableOfScore.classList.add('hidden-item');
}

function generatorMainPagePlayMode (cards) {
console.log(cards)
  const mainContainer = document.querySelector('.main-container');
  mainContainer.innerHTML = '';
  
  for(let i = 0; i < 8; i++){
    let item = document.createElement('div');
    let itemStatus = document.createElement('div');
    let itemImage = document.createElement('img');
    let textOfCard = document.createElement('p');
    let buttonForNote = document.createElement('div');
    let pathOfImage = cards[0][9][i];
    let pathOFText = cards[0][8][i];

    item.classList.add(cards[0][i]);
    itemStatus.classList.add(cards[0][i]);
    itemImage.classList.add(cards[0][i]);
    item.classList.add('card');
    itemImage.setAttribute('src', pathOfImage);
    itemStatus.classList.add('card-status-color');
    itemStatus.classList.add('card-status-color-play');
    textOfCard.innerText = pathOFText;
    buttonForNote.classList.add('translate-btn');
    buttonForNote.classList.add('hidden-item')

    mainContainer.appendChild(item);
    item.appendChild(itemStatus);
    item.appendChild(itemImage);
    item.appendChild(textOfCard);
    item.appendChild(buttonForNote);
  }
}

export {switchStatus};