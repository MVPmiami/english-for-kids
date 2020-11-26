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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.js */ \"./src/javascript/burger.js\");\n/* harmony import */ var _switcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switcher.js */ \"./src/javascript/switcher.js\");\n\r\n\r\nconst switcherBtn = document.querySelector('.switch-button');\r\nconst navigation = document.querySelector('.navigation-list');\r\n\r\n\r\nswitcherBtn.addEventListener('click', () => {\r\n  (0,_switcher_js__WEBPACK_IMPORTED_MODULE_1__.switchStatus)();\r\n});\r\n\r\n(0,_burger_js__WEBPACK_IMPORTED_MODULE_0__.burger)();\r\n\r\n\n\n//# sourceURL=webpack://english-for-kids/./src/javascript/app.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burger\": () => /* binding */ burger\n/* harmony export */ });\nfunction burger() {\r\n  const burgerBtn = document.querySelector('.burger');\r\n  const navigation = document.querySelector('.navigation-list');\r\n  let isActive = true;\r\n  console.log(navigation);\r\n  burgerBtn.addEventListener('click', () => {\r\n    if(isActive){\r\n      navigation.classList.remove('navigation-list-to-left');\r\n      navigation.classList.add('navigation-list-to-right');\r\n      navigation.addEventListener('animationend', () =>{\r\n        navigation.style.left = '0px';\r\n        isActive = false;\r\n      });\r\n    }else {\r\n      navigation.classList.remove('navigation-list-to-right');\r\n      navigation.classList.add('navigation-list-to-left');\r\n      navigation.addEventListener('animationend', () =>{\r\n        navigation.style.left = '-400px';\r\n        isActive = true;\r\n      });\r\n    }\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://english-for-kids/./src/javascript/burger.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"switchStatus\": () => /* binding */ switchStatus\n/* harmony export */ });\nlet isTrain = true;\r\n\r\nfunction switchStatus() {\r\n  const switcherBtn = document.querySelector('.switch-button');\r\n  const navigation = document.querySelector('.navigation-list');\r\n\r\n  if(isTrain){\r\n    switcherBtn.addEventListener('click', () => {\r\n      navigation.classList.add('navigation-list-play');\r\n      isTrain = false;\r\n  });\r\n  }else{\r\n    switcherBtn.addEventListener('click', () => {\r\n      navigation.classList.remove('navigation-list-play');\r\n      isTrain = true;\r\n  });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://english-for-kids/./src/javascript/switcher.js?");

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