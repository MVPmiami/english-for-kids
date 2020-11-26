let isTrain = true;

function switchStatus() {
  const switcherBtn = document.querySelector('.switch-button');
  const navigation = document.querySelector('.navigation-list');

  if(isTrain){
    switcherBtn.addEventListener('click', () => {
      navigation.classList.add('navigation-list-play');
      isTrain = false;
  });
  }else{
    switcherBtn.addEventListener('click', () => {
      navigation.classList.remove('navigation-list-play');
      isTrain = true;
  });
  }
}
export {switchStatus};