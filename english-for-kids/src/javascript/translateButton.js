function translateCard(cardsfordeleateStyle,currentItem) {
  let frontCard = document.querySelector(`.${currentItem}`).firstElementChild;
  let backCard = document.querySelector(`.${currentItem}`).lastElementChild;
  let cardfordeleateStyle = document.querySelector(`.${currentItem}`);
  let currentCard = document.querySelector(`.${currentItem}`);

  cardfordeleateStyle.style.background = 'none';
  cardfordeleateStyle.style.shadow = 'none';
  backCard.classList.add('reverse-card-to-translate');
  frontCard.classList.add('reverse-card-to-no-translate');

  currentCard.addEventListener('mouseleave', () => {
    backCard.classList.remove('reverse-card-to-translate');
    frontCard.classList.remove('reverse-card-to-no-translate');
  });
}

export {translateCard};