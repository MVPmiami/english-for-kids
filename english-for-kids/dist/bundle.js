/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/app.js":
/*!*******************************!*\
  !*** ./src/javascript/app.js ***!
  \*******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.js */ \"./src/javascript/burger.js\");\n/* harmony import */ var _switcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switcher.js */ \"./src/javascript/switcher.js\");\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards.js */ \"./src/javascript/cards.js\");\n/* harmony import */ var _generatorCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generatorCard.js */ \"./src/javascript/generatorCard.js\");\n/* harmony import */ var _generatorMainPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generatorMainPage.js */ \"./src/javascript/generatorMainPage.js\");\n/* harmony import */ var _translateButton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translateButton.js */ \"./src/javascript/translateButton.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst switcherBtn = document.querySelector('.switch-button');\r\nlet currentCard;\r\nlet isNewPage = false;\r\nconst mainContainer = document.querySelector('.main-container');\r\nconst navigation = document.querySelector('.navigation-list');\r\nconst mainPageLink = document.querySelector('.main-page-link');\r\n\r\n\r\n//Burger \r\n\r\n(0,_burger_js__WEBPACK_IMPORTED_MODULE_0__.burger)();\r\n\r\n//Switcher\r\n\r\nswitcherBtn.addEventListener('click', () => {\r\n  (0,_switcher_js__WEBPACK_IMPORTED_MODULE_1__.switchStatus)();\r\n});\r\n\r\n// Selecting the current card\r\nlet currentItemStr;\r\nfunction currentCards(e){\r\n  currentItemStr = e.target.classList[0];\r\n  currentItemStr = '.' + currentItemStr;\r\n  currentCard = document.querySelector(currentItemStr);\r\n  currentItemStr = currentCard.classList[0];\r\n  return currentItemStr;\r\n}\r\n\r\nmainContainer.addEventListener('click', (e) => {\r\n  currentCards(e);\r\n  for(let i = 0; i < _cards_js__WEBPACK_IMPORTED_MODULE_2__.default[0].length; i++){\r\n    if(isNewPage){\r\n      return;\r\n    }else if(currentItemStr === _cards_js__WEBPACK_IMPORTED_MODULE_2__.default[0][i]){\r\n      (0,_generatorCard_js__WEBPACK_IMPORTED_MODULE_3__.generatorCard)(currentItemStr, _cards_js__WEBPACK_IMPORTED_MODULE_2__.default[i + 1], isNewPage);\r\n    }else{\r\n      continue;\r\n    }\r\n  }\r\n});\r\n\r\nnavigation.addEventListener('click', (e) => {\r\n  currentCards(e);\r\n  //console.log(currentItemStr);\r\n  if(e.target.textContent === 'Main Page'){\r\n    (0,_generatorMainPage_js__WEBPACK_IMPORTED_MODULE_4__.generatorMainPage)(currentCard,_cards_js__WEBPACK_IMPORTED_MODULE_2__.default, isNewPage);\r\n  }else{\r\n    for(let i = 0; i < _cards_js__WEBPACK_IMPORTED_MODULE_2__.default[0].length; i++){\r\n      if(!isNewPage){\r\n        if(currentItemStr === _cards_js__WEBPACK_IMPORTED_MODULE_2__.default[0][i]){\r\n        (0,_generatorCard_js__WEBPACK_IMPORTED_MODULE_3__.generatorCard)(currentItemStr, _cards_js__WEBPACK_IMPORTED_MODULE_2__.default[i + 1], isNewPage);\r\n        }\r\n      }else{\r\n        continue;\r\n      }\r\n    }\r\n  }\r\n});\r\n\r\n// Selecting the main page\r\n/*mainPageLink.addEventListener('click', () => {\r\n  if(isNewPage){\r\n    generatorMainPage(currentItemStr,cards, isNewPage);\r\n  }else{\r\n    return;\r\n  }\r\n});*/\r\n\r\n// Removing the ability to move the mouse\r\nhistory.pushState(null, null, document.URL);\r\nwindow.addEventListener('popstate', function () {\r\n    history.pushState(null, null, document.URL);\r\n});\r\n\r\n// Translate Button\r\n\r\n\n\n//# sourceURL=webpack://english-for-kids/./src/javascript/app.js?");

/***/ }),

/***/ "./src/javascript/burger.js":
/*!**********************************!*\
  !*** ./src/javascript/burger.js ***!
  \**********************************/
/*! namespace exports */
/*! export burger [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burger\": () => /* binding */ burger\n/* harmony export */ });\nfunction burger() {\r\n  const burgerBtn = document.querySelector('.burger');\r\n  const navigation = document.querySelector('.navigation-list');\r\n  let isActive = true;\r\n  burgerBtn.addEventListener('click', () => {\r\n    if(isActive){\r\n      navigation.classList.remove('navigation-list-to-left');\r\n      navigation.classList.add('navigation-list-to-right');\r\n      navigation.addEventListener('animationend', () =>{\r\n        navigation.style.left = '0px';\r\n        isActive = false;\r\n      });\r\n    }else {\r\n      navigation.classList.remove('navigation-list-to-right');\r\n      navigation.classList.add('navigation-list-to-left');\r\n      navigation.addEventListener('animationend', () =>{\r\n        navigation.style.left = '-400px';\r\n        isActive = true;\r\n      });\r\n    }\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://english-for-kids/./src/javascript/burger.js?");

/***/ }),

/***/ "./src/javascript/cards.js":
/*!*********************************!*\
  !*** ./src/javascript/cards.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst cards = [ \r\n  ['action-set-a', 'action-set-b', 'action-set-c', 'adjective', 'animal-set-a', 'animal-set-b', 'clothes', 'emotions',\r\n  ['Action (set A)', 'Action (set B)', 'Action (set C)', 'Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotion'],\r\n  ['../img/dance.jpg', '../img/swim.jpg', '../img/drop.jpeg', '../img/friendly.jpeg', '../img/cat.jpg', '../img/bird.jpg', '../img/blouse.jpg', '../img/smile.jpg']],\r\n  [\r\n    {\r\n      word: 'cry',\r\n      translation: 'плакать',\r\n      image: '../img/cry.jpg',\r\n      audioSrc: '../audio/cry.mp3'\r\n    },\r\n    {\r\n      word: 'dance',\r\n      translation: 'танцевать',\r\n      image: '../img/dance.jpg',\r\n      audioSrc: '../audio/dance.mp3'\r\n    },\r\n    {\r\n      word: 'dive',\r\n      translation: 'нырять',\r\n      image: '../img/dive.jpg',\r\n      audioSrc: '../audio/dive.mp3'\r\n    },\r\n    {\r\n      word: 'draw',\r\n      translation: 'рисовать',\r\n      image: '../img/draw.jpg',\r\n      audioSrc: '../audio/draw.mp3'\r\n    },\r\n    {\r\n      word: 'fish',\r\n      translation: 'ловить рыбу',\r\n      image: '../img/fish.jpg',\r\n      audioSrc: '../audio/fish.mp3'\r\n    },\r\n    {\r\n      word: 'fly',\r\n      translation: 'летать',\r\n      image: '../img/fly.jpg',\r\n      audioSrc: '../audio/fly.mp3'\r\n    },\r\n    {\r\n      word: 'hug',\r\n      translation: 'обнимать',\r\n      image: '../img/hug.jpg',\r\n      audioSrc: '../audio/hug.mp3'\r\n    },\r\n    {\r\n      word: 'jump',\r\n      translation: 'прыгать',\r\n      image: '../img/jump.jpg',\r\n      audioSrc: '../audio/jump.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'open',\r\n      translation: 'открывать',\r\n      image: '../img/open.jpg',\r\n      audioSrc: '../audio/open.mp3'\r\n    },\r\n    {\r\n      word: 'play',\r\n      translation: 'играть',\r\n      image: '../img/play.jpg',\r\n      audioSrc: '../audio/play.mp3'\r\n    },\r\n    {\r\n      word: 'point',\r\n      translation: 'указывать',\r\n      image: '../img/point.jpg',\r\n      audioSrc: '../audio/point.mp3'\r\n    },\r\n    {\r\n      word: 'ride',\r\n      translation: 'ездить',\r\n      image: '../img/ride.jpg',\r\n      audioSrc: '../audio/ride.mp3'\r\n    },\r\n    {\r\n      word: 'run',\r\n      translation: 'бегать',\r\n      image: '../img/run.jpg',\r\n      audioSrc: '../audio/run.mp3'\r\n    },\r\n    {\r\n      word: 'sing',\r\n      translation: 'петь',\r\n      image: '../img/sing.jpg',\r\n      audioSrc: '../audio/sing.mp3'\r\n    },\r\n    {\r\n      word: 'skip',\r\n      translation: 'пропускать, прыгать',\r\n      image: '../img/skip.jpg',\r\n      audioSrc: '../audio/skip.mp3'\r\n    },\r\n    {\r\n      word: 'swim',\r\n      translation: 'плавать',\r\n      image: '../img/swim.jpg',\r\n      audioSrc: '../audio/swim.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'argue',\r\n      translation: 'спорить',\r\n      image: '../img/argue.jpg',\r\n      audioSrc: '../audio/argue.mp3'\r\n    },\r\n    {\r\n      word: 'build',\r\n      translation: 'строить',\r\n      image: '../img/build.jpeg',\r\n      audioSrc: '../audio/build.mp3'\r\n    },\r\n    {\r\n      word: 'carry',\r\n      translation: 'нести',\r\n      image: '../img/carry.jpeg',\r\n      audioSrc: '../audio/carry.mp3'\r\n    },\r\n    {\r\n      word: 'catch',\r\n      translation: 'ловить',\r\n      image: '../img/catch.jpeg',\r\n      audioSrc: '../audio/catch.mp3'\r\n    },\r\n    {\r\n      word: 'drive',\r\n      translation: 'водить машину',\r\n      image: '../img/drive.jpeg',\r\n      audioSrc: '../audio/drive.mp3'\r\n    },\r\n    {\r\n      word: 'drop',\r\n      translation: 'падать',\r\n      image: '../img/drop.jpeg',\r\n      audioSrc: '../audio/drop.mp3'\r\n    },\r\n    {\r\n      word: 'pull',\r\n      translation: 'тянуть',\r\n      image: '../img/pull.jpeg',\r\n      audioSrc: '../audio/pull.mp3'\r\n    },\r\n    {\r\n      word: 'push',\r\n      translation: 'толкать',\r\n      image: '../img/push.jpeg',\r\n      audioSrc: '../audio/push.mp3'\r\n    },\r\n  ],\r\n  [\r\n    {\r\n      word: 'big',\r\n      translation: 'большой',\r\n      image: '../img/big.jpeg',\r\n      audioSrc: '../audio/big.mp3'\r\n    },\r\n    {\r\n      word: 'small',\r\n      translation: 'маленький',\r\n      image: '../img/small.jpeg',\r\n      audioSrc: '../audio/small.mp3'\r\n    },\r\n    {\r\n      word: 'fast',\r\n      translation: 'быстрый',\r\n      image: '../img/fast.jpeg',\r\n      audioSrc: '../audio/fast.mp3'\r\n    },\r\n    {\r\n      word: 'slow',\r\n      translation: 'медленный',\r\n      image: '../img/slow.jpeg',\r\n      audioSrc: '../audio/slow.mp3'\r\n    },\r\n    {\r\n      word: 'friendly',\r\n      translation: 'дружелюбный',\r\n      image: '../img/friendly.jpeg',\r\n      audioSrc: '../audio/friendly.mp3'\r\n    },\r\n    {\r\n      word: 'unfriendly',\r\n      translation: 'недружелюбный',\r\n      image: '../img/unfriendly.jpeg',\r\n      audioSrc: '../audio/unfriendly.mp3'\r\n    },\r\n    {\r\n      word: 'young',\r\n      translation: 'молодой',\r\n      image: '../img/young.jpeg',\r\n      audioSrc: '../audio/young.mp3'\r\n    },\r\n    {\r\n      word: 'old',\r\n      translation: 'старый',\r\n      image: '../img/old.jpeg',\r\n      audioSrc: '../audio/old.mp3'\r\n    },\r\n  ],\r\n  [\r\n    {\r\n      word: 'cat',\r\n      translation: 'кот',\r\n      image: '../img/cat.jpg',\r\n      audioSrc: '../audio/cat.mp3'\r\n    },\r\n    {\r\n      word: 'chick',\r\n      translation: 'цыплёнок',\r\n      image: '../img/chick.jpg',\r\n      audioSrc: '../audio/chick.mp3'\r\n    },\r\n    {\r\n      word: 'chicken',\r\n      translation: 'курица',\r\n      image: '../img/chicken.jpg',\r\n      audioSrc: '../audio/chicken.mp3'\r\n    },\r\n    {\r\n      word: 'dog',\r\n      translation: 'собака',\r\n      image: '../img/dog.jpg',\r\n      audioSrc: '../audio/dog.mp3'\r\n    },\r\n    {\r\n      word: 'horse',\r\n      translation: 'лошадь',\r\n      image: '../img/horse.jpg',\r\n      audioSrc: '../audio/horse.mp3'\r\n    },\r\n    {\r\n      word: 'pig',\r\n      translation: 'свинья',\r\n      image: '../img/pig.jpg',\r\n      audioSrc: '../audio/pig.mp3'\r\n    },\r\n    {\r\n      word: 'rabbit',\r\n      translation: 'кролик',\r\n      image: '../img/rabbit.jpg',\r\n      audioSrc: '../audio/rabbit.mp3'\r\n    },\r\n    {\r\n      word: 'sheep',\r\n      translation: 'овца',\r\n      image: '../img/sheep.jpg',\r\n      audioSrc: '../audio/sheep.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'bird',\r\n      translation: 'птица',\r\n      image: '../img/bird.jpg',\r\n      audioSrc: '../audio/bird.mp3'\r\n    },\r\n    {\r\n      word: 'fish',\r\n      translation: 'рыба',\r\n      image: '../img/fish1.jpg',\r\n      audioSrc: '../audio/fish.mp3'\r\n    },\r\n    {\r\n      word: 'frog',\r\n      translation: 'жаба',\r\n      image: '../img/frog.jpg',\r\n      audioSrc: '../audio/frog.mp3'\r\n    },\r\n    {\r\n      word: 'giraffe',\r\n      translation: 'жирафа',\r\n      image: '../img/giraffe.jpg',\r\n      audioSrc: '../audio/giraffe.mp3'\r\n    },\r\n    {\r\n      word: 'lion',\r\n      translation: 'лев',\r\n      image: '../img/lion.jpg',\r\n      audioSrc: '../audio/lion.mp3'\r\n    },\r\n    {\r\n      word: 'mouse',\r\n      translation: 'мышь',\r\n      image: '../img/mouse.jpg',\r\n      audioSrc: '../audio/mouse.mp3'\r\n    },\r\n    {\r\n      word: 'turtle',\r\n      translation: 'черепаха',\r\n      image: '../img/turtle.jpg',\r\n      audioSrc: '../audio/turtle.mp3'\r\n    },\r\n    {\r\n      word: 'dolphin',\r\n      translation: 'дельфин',\r\n      image: '../img/dolphin.jpg',\r\n      audioSrc: '../audio/dolphin.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'skirt',\r\n      translation: 'юбка',\r\n      image: '../img/skirt.jpg',\r\n      audioSrc: '../audio/skirt.mp3'\r\n    },\r\n    {\r\n      word: 'pants',\r\n      translation: 'брюки',\r\n      image: '../img/pants.jpg',\r\n      audioSrc: '../audio/pants.mp3'\r\n    },\r\n    {\r\n      word: 'blouse',\r\n      translation: 'блузка',\r\n      image: '../img/blouse.jpg',\r\n      audioSrc: '../audio/blouse.mp3'\r\n    },\r\n    {\r\n      word: 'dress',\r\n      translation: 'платье',\r\n      image: '../img/dress.jpg',\r\n      audioSrc: '../audio/dress.mp3'\r\n    },\r\n    {\r\n      word: 'boot',\r\n      translation: 'ботинок',\r\n      image: '../img/boot.jpg',\r\n      audioSrc: '../audio/boot.mp3'\r\n    },\r\n    {\r\n      word: 'shirt',\r\n      translation: 'рубашка',\r\n      image: '../img/shirt.jpg',\r\n      audioSrc: '../audio/shirt.mp3'\r\n    },\r\n    {\r\n      word: 'coat',\r\n      translation: 'пальто',\r\n      image: '../img/coat.jpg',\r\n      audioSrc: '../audio/coat.mp3'\r\n    },\r\n    {\r\n      word: 'shoe',\r\n      translation: 'туфли',\r\n      image: '../img/shoe.jpg',\r\n      audioSrc: '../audio/shoe.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'sad',\r\n      translation: 'грустный',\r\n      image: '../img/sad.jpg',\r\n      audioSrc: '../audio/sad.mp3'\r\n    },\r\n    {\r\n      word: 'angry',\r\n      translation: 'сердитый',\r\n      image: '../img/angry.jpg',\r\n      audioSrc: '../audio/angry.mp3'\r\n    },\r\n    {\r\n      word: 'happy',\r\n      translation: 'счастливый',\r\n      image: '../img/happy.jpg',\r\n      audioSrc: '../audio/happy.mp3'\r\n    },\r\n    {\r\n      word: 'tired',\r\n      translation: 'уставший',\r\n      image: '../img/tired.jpg',\r\n      audioSrc: '../audio/tired.mp3'\r\n    },\r\n    {\r\n      word: 'surprised',\r\n      translation: 'удивлённый',\r\n      image: '../img/surprised.jpg',\r\n      audioSrc: '../audio/surprised.mp3'\r\n    },\r\n    {\r\n      word: 'scared',\r\n      translation: 'испуганный',\r\n      image: '../img/scared.jpg',\r\n      audioSrc: '../audio/scared.mp3'\r\n    },\r\n    {\r\n      word: 'smile',\r\n      translation: 'улыбка',\r\n      image: '../img/smile.jpg',\r\n      audioSrc: '../audio/smile.mp3'\r\n    },\r\n    {\r\n      word: 'laugh',\r\n      translation: 'смех',\r\n      image: '../img/laugh.jpg',\r\n      audioSrc: '../audio/laugh.mp3'\r\n    }\r\n  ]\r\n]\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);\n\n//# sourceURL=webpack://english-for-kids/./src/javascript/cards.js?");

/***/ }),

/***/ "./src/javascript/generatorCard.js":
/*!*****************************************!*\
  !*** ./src/javascript/generatorCard.js ***!
  \*****************************************/
/*! namespace exports */
/*! export generatorCard [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generatorCard\": () => /* binding */ generatorCard\n/* harmony export */ });\n/* harmony import */ var _translateButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translateButton.js */ \"./src/javascript/translateButton.js\");\n/* harmony import */ var _soundForCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./soundForCards.js */ \"./src/javascript/soundForCards.js\");\n\r\n\r\n\r\nfunction generatorCard (currentCard, card, isNewPage) {\r\n  isNewPage = true;\r\n  const mainContainer = document.querySelector('.main-container');\r\n  mainContainer.innerHTML = '';\r\n  const mainPageLink = document.querySelector('.main-page-link');\r\n  mainPageLink.classList.remove('underline');\r\n  const navigationList = document.querySelectorAll('li');\r\n\r\n  for(let i = 0 ; i < navigationList.length; i++){\r\n    if(navigationList[i] === currentCard){\r\n      continue;\r\n    }else{\r\n      navigationList[i].classList.remove('underline');\r\n    }\r\n  }\r\n  let currentCardStr = currentCard;\r\n  currentCardStr = '.' + currentCardStr;\r\n  const cardWithUnderline = document.querySelector(currentCardStr);\r\n  cardWithUnderline.classList.add('underline');\r\n  \r\n  for(let i = 0; i < 8; i++){\r\n    let itemNoTranslate = document.createElement('div');\r\n    let item = document.createElement('div');\r\n    let itemStatus = document.createElement('div');\r\n    let itemImage = document.createElement('img');\r\n    let textOfCard = document.createElement('p');\r\n    let buttonForNote = document.createElement('div');\r\n    let pathOfImage = card[i].image;\r\n    let pathOFText = card[i].word;\r\n\r\n    let itemTranslate = document.createElement('div');\r\n    let itemTranslateStatus = document.createElement('div');\r\n    let itemTranslateImage = document.createElement('img');\r\n    let textOfCardTranslate = document.createElement('p');\r\n    let pathOfImageTranslate = card[i].image;\r\n    let pathOFTextTranslate = card[i].translation;\r\n\r\n    itemTranslate.classList.add('card-translate');\r\n    itemTranslateStatus.classList.add('card-status-color');\r\n    itemTranslateImage.setAttribute('src', pathOfImageTranslate);\r\n    textOfCardTranslate.innerText = pathOFTextTranslate;\r\n\r\n    item.classList.add('card');\r\n    item.classList.add(`card${i+1}`);\r\n    itemNoTranslate.classList.add('card-no-translate')\r\n    itemStatus.classList.add('card-status-color');\r\n    itemImage.setAttribute('src', pathOfImage);\r\n    textOfCard.innerText = pathOFText;\r\n    buttonForNote.classList.add('translate-btn');\r\n    \r\n    item.appendChild(itemTranslate);\r\n    itemTranslate.appendChild(itemTranslateStatus);\r\n    itemTranslate.appendChild(itemTranslateImage);\r\n    itemTranslate.appendChild(textOfCardTranslate);\r\n\r\n    mainContainer.appendChild(item);\r\n    item.appendChild(itemNoTranslate);\r\n    itemNoTranslate.appendChild(itemStatus);\r\n    itemNoTranslate.appendChild(itemImage);\r\n    itemNoTranslate.appendChild(textOfCard);\r\n    itemNoTranslate.appendChild(buttonForNote);\r\n  }\r\n  const buttonsForNote = document.querySelectorAll('.translate-btn');\r\n  const cardfordeleateStyle = document.querySelectorAll('.card');\r\n  //console.log(buttonsForNote)\r\n  mainContainer.addEventListener('click', (e) => {\r\n    let currentItem = e.target.parentNode.parentNode.classList[1];\r\n    //console.log(e.target.children[3].classList[0])\r\n    if(e.target.classList[0] === 'translate-btn'){\r\n      (0,_translateButton_js__WEBPACK_IMPORTED_MODULE_0__.translateCard)(cardfordeleateStyle,currentItem);\r\n    }else if(e.target.parentNode.classList[0] === 'card-no-translate'){\r\n      (0,_soundForCards_js__WEBPACK_IMPORTED_MODULE_1__.playSoundOfCards)(currentItem, card);\r\n    }else if(e.target.children[3].classList[0] === 'translate-btn'){\r\n      currentItem = e.target.parentNode.classList[1];\r\n      (0,_soundForCards_js__WEBPACK_IMPORTED_MODULE_1__.playSoundOfCards)(currentItem, card);\r\n    }else{\r\n      return;\r\n    }\r\n});\r\n}\r\n\n\n//# sourceURL=webpack://english-for-kids/./src/javascript/generatorCard.js?");

/***/ }),

/***/ "./src/javascript/generatorMainPage.js":
/*!*********************************************!*\
  !*** ./src/javascript/generatorMainPage.js ***!
  \*********************************************/
/*! namespace exports */
/*! export generatorMainPage [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generatorMainPage\": () => /* binding */ generatorMainPage\n/* harmony export */ });\nfunction generatorMainPage (currentCard, card, isNewPage) {\r\n  console.log(currentCard)\r\n  isNewPage = false;\r\n  const mainContainer = document.querySelector('.main-container');\r\n  const mainPageLink = document.querySelector('.main-page-link');\r\n  mainPageLink.classList.add('underline');\r\n  mainContainer.innerHTML = '';\r\n  const navigationList = document.querySelectorAll('li');\r\n\r\n  for(let i = 0 ; i < navigationList.length; i++){\r\n    if(navigationList[i] === currentCard){\r\n      continue;\r\n    }else{\r\n      navigationList[i].classList.remove('underline');\r\n    }\r\n  }\r\n  \r\n  for(let i = 0; i < 8; i++){\r\n    let item = document.createElement('div');\r\n    let itemStatus = document.createElement('div');\r\n    let itemImage = document.createElement('img');\r\n    let textOfCard = document.createElement('p');\r\n    let buttonForNote = document.createElement('div');\r\n    let pathOfImage = card[0][9][i];\r\n    let pathOFText = card[0][8][i];\r\n\r\n    item.classList.add(card[0][i]);\r\n    itemStatus.classList.add(card[0][i]);\r\n    itemImage.classList.add(card[0][i]);\r\n    item.classList.add('card');\r\n    itemImage.setAttribute('src', pathOfImage);\r\n    itemStatus.classList.add('card-status-color');\r\n    textOfCard.innerText = pathOFText;\r\n    buttonForNote.classList.add('translate-btn');\r\n    buttonForNote.classList.add('hidden-item')\r\n\r\n    mainContainer.appendChild(item);\r\n    item.appendChild(itemStatus);\r\n    item.appendChild(itemImage);\r\n    item.appendChild(textOfCard);\r\n    item.appendChild(buttonForNote);\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://english-for-kids/./src/javascript/generatorMainPage.js?");

/***/ }),

/***/ "./src/javascript/soundForCards.js":
/*!*****************************************!*\
  !*** ./src/javascript/soundForCards.js ***!
  \*****************************************/
/*! namespace exports */
/*! export playSoundOfCards [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playSoundOfCards\": () => /* binding */ playSoundOfCards\n/* harmony export */ });\nfunction playSoundOfCards (currentItem, card){\r\n  let currentCard = document.querySelector(`.${currentItem}`);\r\n  //console.log(currentCard);\r\n  currentCard = currentCard.children[1].textContent;\r\n  let pathOfSound;\r\n  let soundOfCurrentCard;\r\n\r\n  for(let i = 0; i < card.length; i++){\r\n    if(card[i].word === currentCard){\r\n      pathOfSound = card[i].audioSrc;\r\n    }else{\r\n      continue;\r\n    }\r\n  }\r\n\r\n  if(true){\r\n    soundOfCurrentCard = new Audio();\r\n    soundOfCurrentCard.src = pathOfSound;\r\n    soundOfCurrentCard.autoplay = true;\r\n  }else{}\r\n}\r\n\r\n\n\n//# sourceURL=webpack://english-for-kids/./src/javascript/soundForCards.js?");

/***/ }),

/***/ "./src/javascript/switcher.js":
/*!************************************!*\
  !*** ./src/javascript/switcher.js ***!
  \************************************/
/*! namespace exports */
/*! export switchStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"switchStatus\": () => /* binding */ switchStatus\n/* harmony export */ });\nlet isTrain = true;\r\n\r\nfunction switchStatus() {\r\n  const switcherBtn = document.querySelector('.switch-button');\r\n  const navigation = document.querySelector('.navigation-list');\r\n  const cardStatusColor = document.querySelectorAll('.card-status-color');\r\n\r\n  if(isTrain){\r\n    switcherBtn.addEventListener('click', () => {\r\n      navigation.classList.add('navigation-list-play');\r\n      for(let i = 0; i < cardStatusColor.length; i++) {\r\n        cardStatusColor[i].classList.add('card-status-color-play');\r\n      }\r\n      isTrain = false;\r\n  });\r\n  }else{\r\n    switcherBtn.addEventListener('click', () => {\r\n      navigation.classList.remove('navigation-list-play');\r\n      for(let i = 0; i < cardStatusColor.length; i++) {\r\n        cardStatusColor[i].classList.remove('card-status-color-play');\r\n      }\r\n      isTrain = true;\r\n  });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://english-for-kids/./src/javascript/switcher.js?");

/***/ }),

/***/ "./src/javascript/translateButton.js":
/*!*******************************************!*\
  !*** ./src/javascript/translateButton.js ***!
  \*******************************************/
/*! namespace exports */
/*! export translateCard [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"translateCard\": () => /* binding */ translateCard\n/* harmony export */ });\nfunction translateCard(cardsfordeleateStyle,currentItem) {\r\n  let frontCard = document.querySelector(`.${currentItem}`).firstElementChild;\r\n  let backCard = document.querySelector(`.${currentItem}`).lastElementChild;\r\n  let cardfordeleateStyle = document.querySelector(`.${currentItem}`);\r\n  let currentCard = document.querySelector(`.${currentItem}`);\r\n\r\n  cardfordeleateStyle.style.background = 'none';\r\n  cardfordeleateStyle.style.shadow = 'none';\r\n  backCard.classList.add('reverse-card-to-translate');\r\n  frontCard.classList.add('reverse-card-to-no-translate');\r\n\r\n  currentCard.addEventListener('mouseleave', () => {\r\n    backCard.classList.remove('reverse-card-to-translate');\r\n    frontCard.classList.remove('reverse-card-to-no-translate');\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://english-for-kids/./src/javascript/translateButton.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/javascript/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;