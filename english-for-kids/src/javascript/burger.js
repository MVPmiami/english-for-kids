function burger() {
  const burgerBtn = document.querySelector('.burger');
  const navigation = document.querySelector('.navigation-list');
  let isActive = true;
  console.log(navigation);
  burgerBtn.addEventListener('click', () => {
    if(isActive){
      navigation.classList.remove('navigation-list-to-left');
      navigation.classList.add('navigation-list-to-right');
      navigation.addEventListener('animationend', () =>{
        navigation.style.left = '0px';
        isActive = false;
      });
    }else {
      navigation.classList.remove('navigation-list-to-right');
      navigation.classList.add('navigation-list-to-left');
      navigation.addEventListener('animationend', () =>{
        navigation.style.left = '-400px';
        isActive = true;
      });
    }
  });
}

export {burger};
