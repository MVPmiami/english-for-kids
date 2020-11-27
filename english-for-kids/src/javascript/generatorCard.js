function generatorCard (currentCard, card) {
  const mainContainer = document.querySelector('.main-container');
  mainContainer.innerHTML = '';
  for(let i = 0; i < 8; i++){
    let item = document.createElement('div');
    let itemStatus = document.createElement('div');
    let itemImage = document.createElement('img');
    let textOfCard = document.createElement('p');
    let buttonForNote = document.createElement('div');
    let pathOfImage = card[i].image;
    let pathOFText = card[i].word;

    item.classList.add('card');
    itemStatus.classList.add('card-status-color');
    itemImage.setAttribute('src', pathOfImage);
    textOfCard.innerText = pathOFText;
    buttonForNote.classList.add('btn-note');
  
    mainContainer.appendChild(item);
    item.appendChild(itemStatus);
    item.appendChild(itemImage);
    item.appendChild(textOfCard);
    item.appendChild(buttonForNote);
    console.log(pathOFText)
  }
}

export {generatorCard};