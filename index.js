/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://digital-agency/./src/style/index.scss?");

/***/ }),

/***/ "./src/script/functions.js":
/*!*********************************!*\
  !*** ./src/script/functions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burgerClick\": () => (/* binding */ burgerClick),\n/* harmony export */   \"burgerMenu\": () => (/* binding */ burgerMenu),\n/* harmony export */   \"navBody\": () => (/* binding */ navBody),\n/* harmony export */   \"navLinks\": () => (/* binding */ navLinks)\n/* harmony export */ });\nlet burgerMenu = document.querySelector('.burger_icon');\r\nlet navBody = document.querySelector('.nav__body');\r\nlet navLinks = document.querySelectorAll('.header__nav_link');\r\n\r\nfunction burgerClick(){\r\n    \r\nif(burgerMenu){\r\n       \r\n   burgerMenu.addEventListener('click',function(e){\r\n           document.body.classList.toggle('lock');\r\n           burgerMenu.classList.toggle('active');\r\n           navBody.classList.toggle('active');\r\n       \r\n   \r\n           \r\n       })\r\n   }\r\n   navLinks.forEach(item =>{\r\n           item.addEventListener('click',function(e){\r\n               console.log(e.target.classList)\r\n               if(e.target.classList.contains('header__nav_link')){\r\n                   document.body.classList.remove('lock');\r\n                   burgerMenu.classList.remove('active');\r\n                   navBody.classList.remove('active');\r\n                   \r\n               }\r\n           })\r\n       })\r\n}\r\n\n\n//# sourceURL=webpack://digital-agency/./src/script/functions.js?");

/***/ }),

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.esm.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_react_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/react.png */ \"./src/assets/react.png\");\n/* harmony import */ var _assets_html_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/html.png */ \"./src/assets/html.png\");\n/* harmony import */ var _assets_css_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/css.png */ \"./src/assets/css.png\");\n/* harmony import */ var _assets_sass_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/sass.png */ \"./src/assets/sass.png\");\n/* harmony import */ var _assets_bootstrap_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/bootstrap.png */ \"./src/assets/bootstrap.png\");\n/* harmony import */ var _assets_js_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/js.png */ \"./src/assets/js.png\");\n/* harmony import */ var _assets_webpack_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/webpack.png */ \"./src/assets/webpack.png\");\n/* harmony import */ var _assets_vite_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/vite.png */ \"./src/assets/vite.png\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./functions.js */ \"./src/script/functions.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//import 'slick-carousel';\r\n\r\n\r\n_functions_js__WEBPACK_IMPORTED_MODULE_11__.burgerClick();\r\n\r\nlet technologiesBtn = document.querySelectorAll('.my_technologies__btn ');\r\nlet hash = ''\r\ntechnologiesBtn.forEach(item => item.addEventListener('click', function(){\r\n    let whichIcon = item.classList[item.classList.length-1]\r\n    switch(whichIcon){\r\n        case 'react' :\r\n            document.querySelector('.projects').insertAdjacentHTML('beforeend', `<img src='${_assets_react_png__WEBPACK_IMPORTED_MODULE_3__}' alt=\"${whichIcon}_icon\" class=\"flying_icon\">`)\r\n            break;\r\n        case 'html' :\r\n            document.querySelector('.projects').insertAdjacentHTML('beforeend', `<img src='${_assets_html_png__WEBPACK_IMPORTED_MODULE_4__}' alt=\"${whichIcon}_icon\" class=\"flying_icon\">`)\r\n            break;\r\n        case 'css' :\r\n            Math.random() <= 0.5 \r\n            ? document.querySelector('.projects').insertAdjacentHTML('beforeend', `<img src='${_assets_css_png__WEBPACK_IMPORTED_MODULE_5__}' alt=\"${whichIcon}_icon\" class=\"flying_icon\">`) \r\n            : document.querySelector('.projects').insertAdjacentHTML('beforeend', `<img src='${_assets_sass_png__WEBPACK_IMPORTED_MODULE_6__}' alt=\"${whichIcon}_icon\" class=\"flying_icon\">`)\r\n            break;\r\n        case 'bootstrap5' : \r\n            document.querySelector('.projects').insertAdjacentHTML('beforeend', `<img src='${_assets_bootstrap_png__WEBPACK_IMPORTED_MODULE_7__}' alt=\"${whichIcon}_icon\" class=\"flying_icon\">`)\r\n            break\r\n        case 'js' :\r\n            document.querySelector('.projects').insertAdjacentHTML('beforeend', `<img src='${_assets_js_png__WEBPACK_IMPORTED_MODULE_8__}' alt=\"${whichIcon}_icon\" class=\"flying_icon\">`)\r\n            break\r\n        case 'webpack' :\r\n            document.querySelector('.projects').insertAdjacentHTML('beforeend', `<img src='${_assets_webpack_png__WEBPACK_IMPORTED_MODULE_9__}' alt=\"${whichIcon}_icon\" class=\"flying_icon\">`)\r\n            break\r\n        case 'vite' :\r\n            document.querySelector('.projects').insertAdjacentHTML('beforeend', `<img src='${_assets_vite_png__WEBPACK_IMPORTED_MODULE_10__}' alt=\"${whichIcon}_icon\" class=\"flying_icon\">`)\r\n            break\r\n    }\r\n    \r\n    // for(let i = 0; i < 10; i++){\r\n    //     hash += String.fromCharCode(Math.floor(Math.random()*10)+97);\r\n    //     hash += Math.floor(Math.random()*10);\r\n    // }\r\n    let flyingIcons = document.querySelectorAll('.flying_icon') \r\n    let ImgSize = Math.random();\r\n    //flyingIcons[flyingIcons.length-1].classList.add(hash) \r\n    flyingIcons[flyingIcons.length-1].style.transform = `scale(${ImgSize},${ImgSize})`\r\n    flyingIcons[flyingIcons.length-1].style.left = `${Math.random()*100}%`\r\n    \r\n    console.log(hash)\r\n    //hash = ''\r\n}))\r\n\r\n\r\n\n\n//# sourceURL=webpack://digital-agency/./src/script/index.js?");

/***/ }),

/***/ "./src/assets/bootstrap.png":
/*!**********************************!*\
  !*** ./src/assets/bootstrap.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/f132cb791703420e69ca.png\";\n\n//# sourceURL=webpack://digital-agency/./src/assets/bootstrap.png?");

/***/ }),

/***/ "./src/assets/css.png":
/*!****************************!*\
  !*** ./src/assets/css.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/e31e30fbd381c3f058df.png\";\n\n//# sourceURL=webpack://digital-agency/./src/assets/css.png?");

/***/ }),

/***/ "./src/assets/html.png":
/*!*****************************!*\
  !*** ./src/assets/html.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/d29c5e251c2b655c459b.png\";\n\n//# sourceURL=webpack://digital-agency/./src/assets/html.png?");

/***/ }),

/***/ "./src/assets/js.png":
/*!***************************!*\
  !*** ./src/assets/js.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/60dbbe1569571db1eda7.png\";\n\n//# sourceURL=webpack://digital-agency/./src/assets/js.png?");

/***/ }),

/***/ "./src/assets/react.png":
/*!******************************!*\
  !*** ./src/assets/react.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/f3e576ba08e6be927148.png\";\n\n//# sourceURL=webpack://digital-agency/./src/assets/react.png?");

/***/ }),

/***/ "./src/assets/sass.png":
/*!*****************************!*\
  !*** ./src/assets/sass.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/b4856dfeb58fd76614f8.png\";\n\n//# sourceURL=webpack://digital-agency/./src/assets/sass.png?");

/***/ }),

/***/ "./src/assets/vite.png":
/*!*****************************!*\
  !*** ./src/assets/vite.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/83fc56296fdfb132d352.png\";\n\n//# sourceURL=webpack://digital-agency/./src/assets/vite.png?");

/***/ }),

/***/ "./src/assets/webpack.png":
/*!********************************!*\
  !*** ./src/assets/webpack.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/09a1a1112c577c279435.png\";\n\n//# sourceURL=webpack://digital-agency/./src/assets/webpack.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdigital_agency"] = self["webpackChunkdigital_agency"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_jquery_dist_jquery_js"], () => (__webpack_require__("./src/script/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;