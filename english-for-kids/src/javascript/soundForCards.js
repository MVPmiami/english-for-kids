function playSoundOfCards (currentItem, card){
  let currentCard = document.querySelector(`.${currentItem}`);
  //console.log(currentCard);
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

  if(true){
    soundOfCurrentCard = new Audio();
    soundOfCurrentCard.src = pathOfSound;
    soundOfCurrentCard.autoplay = true;
  }else{
    return;
  }
}

export {playSoundOfCards};