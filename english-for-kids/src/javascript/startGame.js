import {cards} from './cards.js';
import {generatorMainPage} from './generatorMainPage.js';
import {isNewPage} from './app.js';
import {currentCard}from './app.js';


let currentCardsArr;
let soundsCardsArr = [];

function startGame(cards, currentItemStr, currentItems) {
  let currentCards = [];
  currentCards = currentItems;
  for(let i = currentCards.length; i > 0 ; i--){
    if(currentCards[i - 1] === 'card-status-color' 
    || currentCards[i - 1] === 'card-play-img' 
    || currentCards[i - 1] === 'card-no-translate'){
      currentCards.pop();
    }else{
      continue;
    }
  }

  let tableOfscore = document.querySelector('.table-of-score');
  tableOfscore.classList.remove('hidden-item');

  for(let i = 0; i < 8; i++){
    if(cards[0][i] === currentCards[currentCards.length - 1]){
      currentCardsArr = cards[i + 1];
    }
  }
  //console.log(soundsCardsArr);
  for(let i = 0; i < 8 ; i++){
    soundsCardsArr.push(currentCardsArr[i].audioSrc)
  }
  let playitem = new Audio();
  playitem.src = soundsCardsArr[soundsCardsArr.length - 1];
  playitem.autoplay = true;
  //soundsCardsArr.pop();
  //console.log(soundsCardsArr);
  let card8 = document.querySelector('.card8');
  let card7 = document.querySelector('.card7');
  let card6 = document.querySelector('.card6');
  let card5 = document.querySelector('.card5');
  let card4 = document.querySelector('.card4');
  let card3 = document.querySelector('.card3');
  let card2 = document.querySelector('.card2');
  let card1 = document.querySelector('.card1');
  let mainContainer = document.querySelector('.main-container');
  let countMistakes = 0;
  mainContainer.addEventListener('click', checkMistakes8) 
  function checkMistakes8(e) {
    let currentItem = e.target.parentNode.parentNode;
    if(currentItem.classList[1] !== 'card8'){
      uncorrect(tableOfscore)
    }
  }

  function checkMistakes7(e) {
    let currentItem = e.target.parentNode.parentNode;
    if(currentItem.classList[1] !== 'card7'){
      uncorrect(tableOfscore)
    }
  }

  function checkMistakes6(e) {
    let currentItem = e.target.parentNode.parentNode;
    if(currentItem.classList[1] !== 'card6'){
      uncorrect(tableOfscore)
    }
  }

  function checkMistakes5(e) {
    let currentItem = e.target.parentNode.parentNode;
    if(currentItem.classList[1] !== 'card5'){
      uncorrect(tableOfscore);
    }
  }

  function checkMistakes4(e) {
    let currentItem = e.target.parentNode.parentNode;
    if(currentItem.classList[1] !== 'card4'){
      uncorrect(tableOfscore);
    }
  }

  function checkMistakes3(e) {
    let currentItem = e.target.parentNode.parentNode;
    if(currentItem.classList[1] !== 'card3'){
      uncorrect(tableOfscore);
    }
  }

  function checkMistakes2(e) {
    let currentItem = e.target.parentNode.parentNode;
    if(currentItem.classList[1] !== 'card2'){
      uncorrect(tableOfscore);
    }
  }

  function checkMistakes1(e) {
    let currentItem = e.target.parentNode.parentNode;
    if(currentItem.classList[1] !== 'card1'){
      uncorrect(tableOfscore);
    }
  }

  card8.addEventListener('click', check8);
  function check8(e) {
    let checkCard = e.target.parentNode.parentNode;
    if(checkCard.classList[1] === 'card8'){
      correct(tableOfscore);
      checkCard.classList.add('corect-item');
      setTimeout(() => {
        let playitem = new Audio();
        playitem.src = soundsCardsArr[soundsCardsArr.length - 3];
        playitem.autoplay = true;
        console.log(soundsCardsArr);
      },1000)
    }
    card6.addEventListener('click', check6);
    card8.removeEventListener('click', check8);
    mainContainer.removeEventListener('click', checkMistakes8);
    setTimeout(()=>{
      mainContainer.addEventListener('click', checkMistakes6);
    },500); 
  }
  function check6(e) {
    console.log(countMistakes)
    let checkCard = e.target.parentNode.parentNode;
    if(checkCard.classList[1] === 'card6'){
      correct(tableOfscore);
      checkCard.classList.add('corect-item');
      setTimeout(() => {
        let playitem = new Audio();
        playitem.src = soundsCardsArr[soundsCardsArr.length - 5];
        playitem.autoplay = true;
        console.log(soundsCardsArr);
      },1000)
    }
    card4.addEventListener('click', check4);
    card6.removeEventListener('click', check6);
    mainContainer.removeEventListener('click', checkMistakes6);
    setTimeout(()=>{
      mainContainer.addEventListener('click', checkMistakes4);
    },500); 
  }
  function check4(e) {
    let checkCard = e.target.parentNode.parentNode;
    if(checkCard.classList[1] === 'card4'){
      correct(tableOfscore);
      checkCard.classList.add('corect-item');
      setTimeout(() => {
        let playitem = new Audio();
        playitem.src = soundsCardsArr[soundsCardsArr.length - 7];
        playitem.autoplay = true;
        console.log(soundsCardsArr);
      },1000)
    }
    card2.addEventListener('click', check2);
    card4.removeEventListener('click', check4);
    mainContainer.removeEventListener('click', checkMistakes4);
    setTimeout(()=>{
      mainContainer.addEventListener('click', checkMistakes2);
    },500);
  }
  function check2(e) {
    let checkCard = e.target.parentNode.parentNode;
    if(checkCard.classList[1] === 'card2'){
      correct(tableOfscore);
      checkCard.classList.add('corect-item');
      setTimeout(() => {
        let playitem = new Audio();
        playitem.src = soundsCardsArr[soundsCardsArr.length - 4];
        playitem.autoplay = true;
        console.log(soundsCardsArr);
      },1000)
    }
    card5.addEventListener('click', check5);
    card2.removeEventListener('click', check2);
    mainContainer.removeEventListener('click', checkMistakes2);
    setTimeout(()=>{
      mainContainer.addEventListener('click', checkMistakes5);
    },500);
  }
  function check5(e) {
    let checkCard = e.target.parentNode.parentNode;
    if(checkCard.classList[1] === 'card5'){
      correct(tableOfscore);
      checkCard.classList.add('corect-item');
      setTimeout(() => {
        let playitem = new Audio();
        playitem.src = soundsCardsArr[soundsCardsArr.length - 6];
        playitem.autoplay = true;
        console.log(soundsCardsArr);
      },1000)
    }
    card3.addEventListener('click', check3);
    card5.removeEventListener('click', check5);
    mainContainer.removeEventListener('click', checkMistakes5);
    setTimeout(()=>{
      mainContainer.addEventListener('click', checkMistakes3);
    },500);
  }
  function check3(e) {
    let checkCard = e.target.parentNode.parentNode;
    if(checkCard.classList[1] === 'card3'){
      correct(tableOfscore);
      checkCard.classList.add('corect-item');
      setTimeout(() => {
        let playitem = new Audio();
        playitem.src = soundsCardsArr[soundsCardsArr.length - 8];
        playitem.autoplay = true;
        console.log(soundsCardsArr);
      },1000)
    }
    card1.addEventListener('click', check1);
    card3.removeEventListener('click', check3);
    mainContainer.removeEventListener('click', checkMistakes3);
    setTimeout(()=>{
      mainContainer.addEventListener('click', checkMistakes1);
    },500);
  }
  function check1(e) {
    let checkCard = e.target.parentNode.parentNode;
    if(checkCard.classList[1] === 'card1'){
      correct(tableOfscore);
      checkCard.classList.add('corect-item');
      setTimeout(() => {
        let playitem = new Audio();
        playitem.src = soundsCardsArr[soundsCardsArr.length - 2];
        playitem.autoplay = true;
        console.log(soundsCardsArr);
      },1000)
    }
    card7.addEventListener('click', check7);
    card1.removeEventListener('click', check1);
    mainContainer.removeEventListener('click', checkMistakes1);
    setTimeout(()=>{
      mainContainer.addEventListener('click', checkMistakes7);
    },500);
  }
  function check7(e) {
    let checkCard = e.target.parentNode.parentNode;
    if(checkCard.classList[1] === 'card7'){
      correct(tableOfscore);
      checkCard.classList.add('corect-item');
    }
    card7.removeEventListener('click', check7);
    mainContainer.removeEventListener('click', checkMistakes7);
    for(let i = 0; i < tableOfscore.children.length; i ++){
      if(tableOfscore.children[i].classList[0] === 'score-point-uncorrect'){
        loseVindow();
        setTimeout(() =>{
          generatorMainPage(currentCard, cards, isNewPage);
        }, 3000);
        return;
      }
    }
    victoryWindow();
    setTimeout(() =>{
      generatorMainPage(currentCard, cards, isNewPage);
    }, 3000);
  }
}


function victoryWindow() {
  let mainContainer = document.querySelector('.main-container');
  while(mainContainer.firstChild){
    mainContainer.removeChild(mainContainer.firstChild);
  }
  let tableOfscore = document.querySelector('.table-of-score');
  tableOfscore.classList.add('hidden-item');
  let playBtn = document.querySelector('.play-button');
  playBtn.classList.add('hidden-item');
  
  let victoryImage = document.createElement('div');
  victoryImage.classList.add('victory-image');
  mainContainer.appendChild(victoryImage);
  let item = new Audio;
  item.src = `../audio/victory.mp3`;
  item.autoplay = true;
}

function loseVindow() {
  let mainContainer = document.querySelector('.main-container');
  while(mainContainer.firstChild){
    mainContainer.removeChild(mainContainer.firstChild);
  }
  let tableOfscore = document.querySelector('.table-of-score');
  tableOfscore.classList.add('hidden-item');
  let playBtn = document.querySelector('.play-button');
  playBtn.classList.add('hidden-item');
  
  let loseImage = document.createElement('div');
  loseImage.classList.add('lose-image');
  mainContainer.appendChild(loseImage);
  let item = new Audio;
  item.src = `../audio/failure.mp3`;
  item.autoplay = true;
}

function correct(tableOfscore){
  let scorePoint = document.createElement('div');
  scorePoint.classList.add('score-point');
  let item = new Audio;
  item.src = `../audio/correct.mp3`;
  item.autoplay = true;
  tableOfscore.appendChild(scorePoint);
}
function uncorrect(tableOfscore){
  let scorePoint = document.createElement('div');
  scorePoint.classList.add('score-point-uncorrect');
  let item = new Audio;
  item.src = `../audio/uncorrect.mp3`;
  item.autoplay = true;
  tableOfscore.appendChild(scorePoint);
  countMistakes++;
  console.log(countMistakes);
}

export {startGame};