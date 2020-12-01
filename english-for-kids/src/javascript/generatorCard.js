import {translateCard} from './translateButton.js';
import {playSoundOfCards} from './soundForCards.js';

function generatorCard (currentCard, card, isNewPage) {
  isNewPage = true;
  const mainContainer = document.querySelector('.main-container');
  while(mainContainer.firstChild){
    mainContainer.removeChild(mainContainer.firstChild);
  }
  const mainPageLink = document.querySelector('.main-page-link');
  mainPageLink.classList.remove('underline');
  const navigationList = document.querySelectorAll('li');

  for(let i = 0 ; i < navigationList.length; i++){
    if(navigationList[i] === currentCard){
      continue;
    }else{
      navigationList[i].classList.remove('underline');
    }
  }
  let currentCardStr = currentCard;
  currentCardStr = '.' + currentCardStr;
  const cardWithUnderline = document.querySelector(currentCardStr);
  cardWithUnderline.classList.add('underline');
  
  for(let i = 0; i < 8; i++){
    let itemNoTranslate = document.createElement('div');
    let item = document.createElement('div');
    let itemStatus = document.createElement('div');
    let itemImage = document.createElement('img');
    let textOfCard = document.createElement('p');
    let buttonForNote = document.createElement('div');
    let pathOfImage = card[i].image;
    let pathOFText = card[i].word;

    let itemTranslate = document.createElement('div');
    let itemTranslateStatus = document.createElement('div');
    let itemTranslateImage = document.createElement('img');
    let textOfCardTranslate = document.createElement('p');
    let pathOfImageTranslate = card[i].image;
    let pathOFTextTranslate = card[i].translation;

    itemTranslate.classList.add('card-translate');
    itemTranslateStatus.classList.add('card-status-color');
    itemTranslateImage.setAttribute('src', pathOfImageTranslate);
    textOfCardTranslate.innerText = pathOFTextTranslate;

    item.classList.add('card');
    item.classList.add(`card${i+1}`);
    item.classList.add(`${currentCardStr.substring(1,currentCardStr.length)}`);
    itemNoTranslate.classList.add('card-no-translate')
    itemStatus.classList.add('card-status-color');
    itemImage.setAttribute('src', pathOfImage);
    textOfCard.innerText = pathOFText;
    buttonForNote.classList.add('translate-btn');
    
    item.appendChild(itemTranslate);
    itemTranslate.appendChild(itemTranslateStatus);
    itemTranslate.appendChild(itemTranslateImage);
    itemTranslate.appendChild(textOfCardTranslate);

    mainContainer.appendChild(item);
    item.appendChild(itemNoTranslate);
    itemNoTranslate.appendChild(itemStatus);
    itemNoTranslate.appendChild(itemImage);
    itemNoTranslate.appendChild(textOfCard);
    itemNoTranslate.appendChild(buttonForNote);
  }
  const buttonsForNote = document.querySelectorAll('.translate-btn');
  const cardfordeleateStyle = document.querySelectorAll('.card');
  //console.log(buttonsForNote)
  mainContainer.addEventListener('click', (e) => {
    let currentItem = e.target.parentNode.parentNode.classList[1];
    //console.log(e.target.children[3].classList[0])
    if(e.target.classList[0] === 'translate-btn'){
      translateCard(cardfordeleateStyle,currentItem);
    }else if(e.target.parentNode.classList[0] === 'card-no-translate'){
      playSoundOfCards(currentItem, card);
    }else if(e.target.children[3].classList[0] === 'translate-btn'){
      currentItem = e.target.parentNode.classList[1];
      playSoundOfCards(currentItem, card);
    }else{
      return;
    }
});
}
export {generatorCard};