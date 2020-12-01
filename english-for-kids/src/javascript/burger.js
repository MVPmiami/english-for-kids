function burger() {
  const burgerBtn = document.querySelector('.burger');
  const navigation = document.querySelector('.navigation-list');

  let isActive = true;
  burgerBtn.addEventListener('click', () => {
    let body = document.querySelector('body');
    let overLay = document.createElement('div');

    overLay.addEventListener('click', () => {
      body.removeChild(body.lastChild);
      navigation.classList.remove('navigation-list-to-right');
      navigation.classList.add('navigation-list-to-left');
      navigation.addEventListener('animationend', () =>{
        navigation.style.left = '-400px';
        isActive = true;
      });
    });
    if(isActive){
      overLay.classList.add('overlay');
      body.appendChild(overLay);

      navigation.classList.remove('navigation-list-to-left');
      navigation.classList.add('navigation-list-to-right');
      navigation.addEventListener('animationend', () =>{
        navigation.style.left = '0px';
        isActive = false;
      });
    }else {
      body.removeChild(body.lastChild);
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
