/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n$(function(){\r\nconst navItems = document.querySelectorAll('[data-scroll]');\r\nconst body = document.body;\r\nconst nav = document.getElementById('nav');\r\nconst burger = document.getElementById('burger');\r\nconst fig = document.getElementsByClassName('fig');\r\n\r\n\r\n// скролл до нужного места\r\n// navItems.forEach(item => {\r\n//     item.addEventListener('click', event => {\r\n//         // let $this = event.currentTarget;\r\n//         // let targetId = $this.getAttribute('data-scroll');\r\n//         // body.classList.remove('show-sidebar');\r\n//         // let topOffset = nav.offsetHeight;\r\n//         // let scrollTarget = document.getElementById(targetId);\r\n//         // let targetPosition = scrollTarget.getBoundingClientRect().top;\r\n//         // window.scrollBy({\r\n//         //     top: targetPosition-topOffset ,\r\n//         //     behavior: 'smooth'\r\n//         // });      \r\n//     });\r\n// });\r\n$(\"[data-scroll]\").on(\"click\", function(event) {\r\n    event.preventDefault(); \r\n    body.classList.remove('show-sidebar');\r\n    let topOffset = nav.offsetHeight;\r\n    let elementId = $(this).data('scroll');\r\n    let elementOffset = $(elementId).offset().top;\r\n    $(\"html, body\").animate({\r\n        scrollTop: elementOffset - topOffset\r\n    }, 500);\r\n    setTimeout(function(){\r\n        $('.fig').toggleClass('rotate')\r\n    }, 100)\r\n});\r\n\r\n$('.mask').on(\"click\", function(event) {\r\nbody.classList.remove('show-sidebar');\r\n});\r\n//нажатие на бургер\r\nburger.addEventListener('click', event =>{\r\n    body.classList.toggle('show-sidebar');\r\n});\r\n\r\n\r\n})\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function(){\n    let slider=$(\"#portfolio-slider\");\n        slider.slick({\n\t\t  infinite: true,\n\t\t  slidesToShow: 1,\n\t\t  slidesToScroll: 1,\n\t\t  arrows: true,\n\t\t  dots: false,\n\t\t  adaptiveHeight: true,\n          prevArrow: $(\"#btn-left\"),\n          nextArrow: $(\"#btn-right\"),\n\t\t});\n        \n    })\n\n//# sourceURL=webpack:///./src/assets/js/slider.js?");

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/slider.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/Danil/Desktop/visiting-site/Eka-Page/src/assets/js/app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! /Users/Danil/Desktop/visiting-site/Eka-Page/src/assets/js/slider.js */\"./src/assets/js/slider.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/slider.js?");

/***/ })

/******/ });