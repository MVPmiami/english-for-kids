function generatorMainPage (currentCard, card, isNewPage) {
  console.log(currentCard)
  isNewPage = false;
  const mainContainer = document.querySelector('.main-container');
  const mainPageLink = document.querySelector('.main-page-link');
  mainPageLink.classList.add('underline');
  mainContainer.innerHTML = '';
  const navigationList = document.querySelectorAll('li');

  for(let i = 0 ; i < navigationList.length; i++){
    if(navigationList[i] === currentCard){
      continue;
    }else{
      navigationList[i].classList.remove('underline');
    }
  }
  
  for(let i = 0; i < 8; i++){
    let item = document.createElement('div');
    let itemStatus = document.createElement('div');
    let itemImage = document.createElement('img');
    let textOfCard = document.createElement('p');
    let buttonForNote = document.createElement('div');
    let pathOfImage = card[0][9][i];
    let pathOFText = card[0][8][i];

    item.classList.add(card[0][i]);
    itemStatus.classList.add(card[0][i]);
    itemImage.classList.add(card[0][i]);
    item.classList.add('card');
    itemImage.setAttribute('src', pathOfImage);
    itemStatus.classList.add('card-status-color');
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

export {generatorMainPage};