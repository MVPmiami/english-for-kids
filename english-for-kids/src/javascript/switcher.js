let isTrain = true;

function switchStatus() {
  const switcherBtn = document.querySelector('.switch-button');
  const navigation = document.querySelector('.navigation-list');
  const cardStatusColor = document.querySelectorAll('.card-status-color');

  if(isTrain){
    switcherBtn.addEventListener('click', () => {
      navigation.classList.add('navigation-list-play');
      for(let i = 0; i < cardStatusColor.length; i++) {
        cardStatusColor[i].classList.add('card-status-color-play');
      }
      isTrain = false;
  });
  }else{
    switcherBtn.addEventListener('click', () => {
      navigation.classList.remove('navigation-list-play');
      for(let i = 0; i < cardStatusColor.length; i++) {
        cardStatusColor[i].classList.remove('card-status-color-play');
      }
      isTrain = true;
  });
  }
}
export {switchStatus};