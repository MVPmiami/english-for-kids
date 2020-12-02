function playSoundOfCards (currentItem, card){
  let currentCard = document.querySelector(`.${currentItem}`);

  currentCard = currentCard.children[1].textContent;
  let pathOfSound;
  let soundOfCurrentCard;

  for(let i = 0; i < card.length; i++){
    if(card[i].word === currentCard){
      pathOfSound = card[i].audioSrc;
    }else{
      continue;
    }
  }
    soundOfCurrentCard = new Audio();
    soundOfCurrentCard.src = pathOfSound;
    soundOfCurrentCard.autoplay = true;
    console.log(soundOfCurrentCard);
}

export {playSoundOfCards};