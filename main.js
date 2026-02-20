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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/about.css"
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/about.css ***!
  \********************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n#staff{\n    height: 120vh;\n    width: 100vw;\n    grid-column:1/13 ;\n    grid-row: 1/6;\n}\n#description{\n    padding: 5%;\n    grid-column:1/13 ;\n    grid-row:6/11;\n    font-size: larger;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/about.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css"
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css ***!
  \*******************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\n    margin: 0px;\n    font-family:'Vintage','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: bold;\n}\n#content{\n    display: grid;\n    grid: repeat(12,1fr)/repeat(12,1fr);\n}\n#main{\n    grid-column: 1/13;\n    grid-row: 1/4;\n}\n#side{\n    grid-column: 1/13;\n    grid-row: 4/7;\n    margin-top: 122px;\n}\n#drinks{\n    grid-column: 1/13;\n    grid-row: 7/10;\n    margin-top: 122px;\n}\n#dessert{\n    grid-column: 1/13;\n    grid-row: 10/13;\n    margin-top: 122px;\n}\n#main,#side,#drinks,#dessert{\n    display: grid;\n    grid-template-rows: repeat(2,minmax(200px,300px));\n    grid-template-columns: repeat(3,minmax(300px,1fr));\n    row-gap: 2rem;\n    column-gap: 3rem;\n    grid-auto-flow: column;\n    overflow: auto;\n    border-bottom: solid gray;\n}\n#main>div,#side>div,#drinks>div,#dessert>div{\n    display: flex;\n    flex-direction: column-reverse;\n    border: solid black;\n    padding: 2rem;\n    justify-content: space-between;\n}\nimg{\n    height: 180px;\n    width: 200px;\n    padding-bottom: 10px;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/menu.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css"
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pexels-elina-sazonova-4403903.jpg */ \"./src/images/pexels-elina-sazonova-4403903.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pexels-basnetsurendra7-12367499.jpg */ \"./src/images/pexels-basnetsurendra7-12367499.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pexels-bala-12444402.jpg */ \"./src/images/pexels-bala-12444402.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pexels-tomas-malik-793526-3408348.jpg */ \"./src/images/pexels-tomas-malik-793526-3408348.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/johannes-andersson-UCd78vfC8vU-unsplash.jpg */ \"./src/images/johannes-andersson-UCd78vfC8vU-unsplash.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pexels-karolina-wv-20194713-6929329.jpg */ \"./src/images/pexels-karolina-wv-20194713-6929329.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pexels-cmonphotography-1809647.jpg */ \"./src/images/pexels-cmonphotography-1809647.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Vintage Propagandist.ttf */ \"./src/fonts/Vintage Propagandist.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\n    margin: 0px;\n    font-family:'Vintage','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: bold;\n}\nnav{\n    /* height: 10vh; */\n    background-color: black;\n    display: flex;\n    justify-content: space-around;\n    gap: 4rem;\n    padding: 1rem;\n}\n#content{\n    display: grid;\n    grid:repeat(12,1fr)/repeat(12,1fr);\n    /* overflow: auto; */\n}\n#content>div{\n    /* border: solid red; */\n}\n#bigImage {\n    grid-column: 1/13;\n    height: 110vh;\n    grid-row: 1/3;\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    border-bottom: solid gray;\n    margin-bottom: 0px;\n    background-color: white;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover;\n}\n#infoDiv {\n    grid-column: 1/13;\n    grid-row: 3/4;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: center;\n    padding: 0px;\n    border-bottom: solid gray;\n    background-color: white;\n    margin-top: -15%;\n    padding-bottom: 0px;\n    font-size: larger;\n}\n#infoDiv > div {\n    width: clamp(150px, 20vw, 250px);\n    aspect-ratio: 4/3;\n    min-width: 100px;\n}\n#forest{\n    grid-column: 1/13;\n    grid-row:4/7;\n}\n#forest,#deers,#inn{\n    display: flex;\n    justify-content: space-evenly;\n    border-bottom: solid gray;\n}\n#deers{\n    grid-column: 1/13;\n    grid-row:7/10;\n}\n#inn{\n    grid-column: 1/13;\n    grid-row: 10/13;\n}\n#footer{\n    grid-column: 1/13;\n    grid-row:13/15;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 1rem;\n    \n}\n.slide {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: center;\n    transform: translateX(100%);\n    animation: sideshow 12s infinite;\n}\n\n.slide1 { \n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    animation-delay: 0s;\n}\n.slide2 { \n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n    animation-delay: 3s;\n}\n.slide3 { \n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    animation-delay: 6s;\n}\n.slide4 { \n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n    animation-delay: 9s;\n}\n\n/* @keyframes sideshow {\n    0% { transform: translateX(100%); }\n    10% { transform: translateX(0); }   \n    25% { transform: translateX(0); }   \n    35% { transform: translateX(-100%); } \n    100% { transform: translateX(-100%); }\n} */\n#forest>div,#deers>div,#inn>div{\n  height: 100%;\n \n}\n#forestTxt,#deersTxt,#innTxt{\n    background-color:white;\n    width: 35%;\n    padding: 2%;\n}\n#forestImg{\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n    background-size: cover;\n}\n#forestImg,#deersImg,#innImg{\n    width: 65%;\n}\n#deersTxt{\n    order: 1;\n}\n#deersImg{\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\n    background-size:cover;\n}\n#innImg{\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});\n    background-size:cover ;\n}\nnav{\n    display: flex;\n    justify-content: center;\n}\n@font-face {\n    font-family: 'Vintage';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_7___});\n}\n#name{\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    font-family:'Vintage','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    color: white;\n    font-size: 5rem;\n}\na{\n    color: black;\n}\nbutton{\n    background: none;       \n    border: none;          \n    color: inherit;        \n    text-decoration: underline;        \n    cursor: pointer;              \n    padding: 0;                   \n    font: inherit;   \n    font-family:'Vintage','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-weight: bold;\n    color: white;\n\n}\nbutton:hover{\n    text-decoration: none;\n    text-decoration-color: red;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles/about.css"
/*!******************************!*\
  !*** ./src/styles/about.css ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/about.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/about.css?\n}");

/***/ },

/***/ "./src/styles/menu.css"
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/menu.css?\n}");

/***/ },

/***/ "./src/styles/style.css"
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/fonts/Vintage Propagandist.ttf"
/*!********************************************!*\
  !*** ./src/fonts/Vintage Propagandist.ttf ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"71b78ab0c88262864ac6.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Vintage_Propagandist.ttf?\n}");

/***/ },

/***/ "./src/images/johannes-andersson-UCd78vfC8vU-unsplash.jpg"
/*!****************************************************************!*\
  !*** ./src/images/johannes-andersson-UCd78vfC8vU-unsplash.jpg ***!
  \****************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"60e1938235f42a423c46.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/johannes-andersson-UCd78vfC8vU-unsplash.jpg?\n}");

/***/ },

/***/ "./src/images/pexels-bala-12444402.jpg"
/*!*********************************************!*\
  !*** ./src/images/pexels-bala-12444402.jpg ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ba0ae68c2a2d094bdc82.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pexels-bala-12444402.jpg?\n}");

/***/ },

/***/ "./src/images/pexels-basnetsurendra7-12367499.jpg"
/*!********************************************************!*\
  !*** ./src/images/pexels-basnetsurendra7-12367499.jpg ***!
  \********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ef5a39a1a6d41bcd9d4c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pexels-basnetsurendra7-12367499.jpg?\n}");

/***/ },

/***/ "./src/images/pexels-cmonphotography-1809647.jpg"
/*!*******************************************************!*\
  !*** ./src/images/pexels-cmonphotography-1809647.jpg ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"7661822aad3bbd4f17c9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pexels-cmonphotography-1809647.jpg?\n}");

/***/ },

/***/ "./src/images/pexels-elina-sazonova-4403903.jpg"
/*!******************************************************!*\
  !*** ./src/images/pexels-elina-sazonova-4403903.jpg ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8e41d27eea787bdbfa31.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pexels-elina-sazonova-4403903.jpg?\n}");

/***/ },

/***/ "./src/images/pexels-elizabeth-zernetska-86424040-9409746.jpg"
/*!********************************************************************!*\
  !*** ./src/images/pexels-elizabeth-zernetska-86424040-9409746.jpg ***!
  \********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6ec9d5d08f102ed9c767.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pexels-elizabeth-zernetska-86424040-9409746.jpg?\n}");

/***/ },

/***/ "./src/images/pexels-karolina-wv-20194713-6929329.jpg"
/*!************************************************************!*\
  !*** ./src/images/pexels-karolina-wv-20194713-6929329.jpg ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"53fb3ff8cefb0aba5227.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pexels-karolina-wv-20194713-6929329.jpg?\n}");

/***/ },

/***/ "./src/images/pexels-mali-65175.jpg"
/*!******************************************!*\
  !*** ./src/images/pexels-mali-65175.jpg ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"1c500cd3698dca86a701.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pexels-mali-65175.jpg?\n}");

/***/ },

/***/ "./src/images/pexels-tomas-malik-793526-3408348.jpg"
/*!**********************************************************!*\
  !*** ./src/images/pexels-tomas-malik-793526-3408348.jpg ***!
  \**********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"310a870547c661acc4c0.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pexels-tomas-malik-793526-3408348.jpg?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu.js */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about.js */ \"./src/pages/about.js\");\n\n\n\n(0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\nlet menuBtn=document.querySelector(\"#menu\");\nmenuBtn.addEventListener(\"click\",()=>{\n    (0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n});\nlet homeBtn=document.querySelector(\"#home\");\nhomeBtn.addEventListener(\"click\",()=>{\n    (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n});\nlet aboutBtn=document.querySelector(\"#about\");\naboutBtn.addEventListener(\"click\",()=>{\n    (0,_pages_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/pages/about.js"
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_pexels_elizabeth_zernetska_86424040_9409746_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/pexels-elizabeth-zernetska-86424040-9409746.jpg */ \"./src/images/pexels-elizabeth-zernetska-86424040-9409746.jpg\");\n/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/about.css */ \"./src/styles/about.css\");\n\n\nlet about=function(){\n    let content=document.querySelector(\"#content\");\n    content.textContent=\"\"\n    let staffPic=document.createElement(\"img\");\n    staffPic.id=\"staff\"\n    staffPic.src=_images_pexels_elizabeth_zernetska_86424040_9409746_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    let description=document.createElement(\"div\");\n    description.id=\"description\"\n    description.innerHTML=\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;History & Staff<br><br>The inn has stood at the bend of Hollow Brook Road for as long as anyone remembers. It burned twice—1887 and 1923—and rebuilt itself overnight both times. Locals stopped asking questions.<br><br>A photographer came through in the 1950s and took a group shot out back. When he developed it, there were more faces than people. That photograph still hangs behind the front desk.<br><br><b>Elara</b> — innkeeper since 1972. Knows your name before you arrive. Doesn't sleep.<br><br><b>Marlow</b> — kitchen. Arrived one winter, frost on his coat. Walks the tree line at dusk, talking to someone.<br><br><b>June</b> — front of house. Appears behind you without walking. Remembers every guest.<br><br><b>Silas</b> — grounds. Doesn't speak. Sits at the bench where trees begin. Things grow where he's been.<br><br>The photograph shows them all, wearing clothes from another time, standing with people no one has seen in years. The same Elara. The same Marlow. A woman in back who looks exactly like June.<br><br>The photographer swore he took one picture. The frame holds six.\";\n    description.style.cssText=\"padding:2rem\";\n    let footer=document.createElement(\"div\");\n    footer.id=\"footer\";\n    footer.innerHTML=`Made by  <a href=\"https://github.com/dawit-kibatu\">Dawit Kibatu</a>`\n    footer.style.cssText=`\n    #footer{\n    grid-column:1/13 ;\n    grid-row:11/13;\n    border-top:solid gray;\n     }`\n    content.appendChild(footer)\n    content.appendChild(staffPic);\n    content.appendChild(description);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/about.js?\n}");

/***/ },

/***/ "./src/pages/home.js"
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n\nlet home=function(){\n    let content=document.querySelector(\"#content\");\n    content.innerHTML=\"\";\n    let forest=document.createElement(\"div\");\n    let bigImage=document.createElement(\"div\");\n    bigImage.id=\"bigImage\";\n    let slideContainer=document.createElement(\"div\");\n    let slide1=document.createElement(\"div\");\n    let slide2=document.createElement(\"div\");\n    let slide3=document.createElement(\"div\");\n    let slide4=document.createElement(\"div\");\n    slide1.classList.add(\"slide\",\"slide1\")\n    slide2.classList.add(\"slide\",\"slide2\")\n    slide3.classList.add(\"slide\",\"slide3\")\n    slide4.classList.add(\"slide\",\"slide4\")\n    slideContainer.appendChild(slide1);\n    slideContainer.appendChild(slide2);\n    slideContainer.appendChild(slide3);\n    slideContainer.appendChild(slide4);\n    bigImage.appendChild(slideContainer);\n    let forestText=document.createElement(\"div\");\n    let forestImg=document.createElement(\"div\");\n    forestText.id=\"forestTxt\";\n    forestText.innerHTML=\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Forest<br><br>The restaurant exists at the end of a long, unlit road. No sign marks its entrance, only a single lantern hung from a low-hanging branch, swaying slightly even when the air is still. Inside, the tables are rough-hewn wood, polished smooth by countless hands and countless meals.<br><br>Our signature dish is the venison. We don't print it on the menu. We don't need to. The ones who come here, they know to ask.<br><br>\\\"It's the forest's own offering,\\\" our server might say, leaning in slightly too close, her voice barely above a whisper. \\\"Ethically sourced. Naturally.\\\"<br><br>When the plate arrives, the meat rests in a pool of shadow-dark jus, surrounded by foraged mushrooms and tiny, bitter herbs you won't find in any market. The first bite carries the taste of damp autumn leaves, of cold streams running over ancient stones, of something green and growing and utterly wild.<br><br>Some diners pause mid-chew, a strange stillness settling over them. They look toward the tall windows that line one wall, windows that open directly onto the woods. Sometimes, if the timing is right, they'll see the eyes. Just beyond the glass, reflecting the candlelight back at them. Watching. Waiting.<br><br>The deer come right up to the edge of the clearing, you see. They stand in perfect stillness, their breath misting in the cold air, their heads bowed slightly as if in prayer. Or as if they're waiting for something. Someone.<br><br>Our hunters don't use guns. They don't use bows. They simply walk out among them, hands open and empty, and choose. The deer never run. They never startle. They only watch with those deep, liquid eyes, and wait to be selected.<br><br>The chef prefers the older ones. The matriarchs, with their grey-flecked muzzles and patient eyes. Their meat has more story in it, he says. More memory. More forest.<br><br>After service, when the last diner has driven back down that unlit road, the staff gathers in the kitchen. We share a small plate of the venison among ourselves. It's tradition. A reminder of what we owe to the darkness outside, to the soft-footed ones who give themselves so willingly.<br><br>\\\"To the forest,\\\" we toast, raising our glasses.<br><br>And from beyond the windows, in the absolute blackness between the trees, a soft answering sound drifts back. A low, collective exhale. A hundred warm bodies, pressing closer to the light.\";\n    forestImg.id=\"forestImg\";\n    forest.appendChild(forestText);\n    forest.appendChild(forestImg);\n    let infoDiv=document.createElement(\"div\")\n    let location=document.createElement(\"div\");\n    let hours=document.createElement(\"div\");\n    let contact=document.createElement(\"div\");\n    location.id=\"location\";\n    location.innerHTML=\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Location<br><br>📍 Hollow Brook Road, 12 miles past Gray Birch, deep in the Tamarack Valley. No streetlights. No neighbours. Just the forest and the turn you almost miss.\"\n    hours.id=\"hours\"\n    hours.innerHTML=\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours<br><br>🕊️ Open every day, dusk to dawn. If you arrive after midnight, the door will be unlocked. The kettle will be warm.\"\n    contact.id=\"contact\"\n    contact.innerHTML=\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact<br><br>☎️ (607) 555‑0199 — rings twice, then a soft voice says \\\"you're on the way.\\\"<br><br>🐾 No reservations needed. There's always room. The deer make sure of it.\";\n    infoDiv.appendChild(location)\n    infoDiv.appendChild(hours);\n    infoDiv.appendChild(contact);\n    infoDiv.id=\"infoDiv\";\n    let deers=document.createElement(\"div\");\n    let deersText=document.createElement(\"div\");\n    let deersImg=document.createElement(\"div\");\n    deersText.id=\"deersTxt\"\n    deersText.innerHTML=\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Deers<br><br>They come at dusk, emerging from between the ancient oaks like memories rising. There is something familiar in the way they hold themselves, something almost improper. The tilt of a head, the slight hunch of a shoulder—gestures that don't belong to animals.<br><br>The oldest doe carries a scar above her left eye, crescent-shaped, like the mark of a wedding ring worn for decades. She watches the restaurant windows with an intensity that feels personal, as if she's looking for someone specific. As if she's been looking for a very long time.<br><br>Sometimes, when the light catches them right, you can almost see it. The way one shifts her weight like a woman tired from standing. The way another cocks his head like a man about to speak. The young one with the crooked ear—that's the kind of injury you get from a fall, not from the forest. The kind you get as a child, learning to walk on two legs.<br><br>They don't startle at human voices. They turn toward them, listening. Understanding.<br><br>The chef says their eyes are too old for deer. Too much knowledge in them. Too much regret. When you look into them, really look, you feel you should apologize for something. You're just not sure what.<br><br>They gather at the forest's edge every night, standing in that patient semicircle. Watching the diners eat. Watching the candles flicker. Watching the warm light spill out onto the cold ground.<br><br>And sometimes, late, when only the staff remains, one of them will step forward. Just one pace. Just enough to cross from shadow into the faint glow. She'll stand there, that old doe with the scar, and she'll look at us through the glass with an expression that is not animal at all.<br><br>It's the look of someone who remembers. Who remembers forks and firelight. Who remembers being the one inside, looking out.<br><br>Then she turns, and the forest swallows her, and we are left with the silence and the soft sound of hooves on fallen leaves. Footsteps that sound almost like they used to walk differently. Once. A long time ago.\";\n    deersImg.id=\"deersImg\";\n    deers.appendChild(deersText);\n    deers.appendChild(deersImg);\n    let inn=document.createElement(\"div\");\n    let innText=document.createElement(\"div\");\n    let innImg=document.createElement(\"div\");\n    innText.id=\"innTxt\"\n    innText.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Inn<br><br>It stands where the road bends, white walls and grey shutters, smoke always rising from the chimney. The innkeeper knows your name before you tell her. She smiles like she's been waiting.<br><br>Only six rooms, but one is always free. The beds are soft, the windows open to rustling leaves. You'll sleep better than you have in years.<br><br>Breakfast at a long wooden table. Bread and honey, tea that tastes of pine. The other guests are pleasant. Some have been here a while. They speak of the inn like home.<br><br>The innkeeper tells stories at night. Nothing frightening. Just tales of travelers, of deer that watch from the garden's edge. Her voice is gentle. You could listen forever.<br><br>There's a bench where the trees begin. Guests watch the light fade there. They always come back. Mostly.<br><br>Sometimes one walks into the woods. Just for an hour, they say. The innkeeper smiles. The forest takes care of people, she says.<br><br>They don't always return. But on certain evenings, a figure stands at the garden's edge. Watching. Their eyes soft. Patient. Familiar.<br><br>Then they turn and vanish between the trees.<br><br>The innkeeper pours more tea. The fire crackles on.<br><br>You should visit sometime.<br><br>The deer would love to see you.\";\n    innImg.id=\"innImg\";\n    inn.appendChild(innText);\n    inn.appendChild(innImg);\n    forest.id=\"forest\";\n    deers.id=\"deers\";\n    inn.id=\"inn\";\n    let footer=document.createElement(\"div\");\n    footer.id=\"footer\";\n    footer.innerHTML=`Made by  <a href=\"https://github.com/dawit-kibatu\">Dawit Kibatu</a>`\n    let resturantName=document.createElement(\"div\");\n    resturantName.id=\"name\"\n    resturantName.textContent=\"Resturant's Name\";\n    bigImage.appendChild(resturantName);\n    content.appendChild(bigImage);\n    content.appendChild(infoDiv)\n    content.appendChild(forest);\n    content.appendChild(deers);\n    content.appendChild(inn);\n    content.appendChild(footer);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?\n}");

/***/ },

/***/ "./src/pages/menu.js"
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/menu.css */ \"./src/styles/menu.css\");\n/* harmony import */ var _images_pexels_mali_65175_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/pexels-mali-65175.jpg */ \"./src/images/pexels-mali-65175.jpg\");\n\n\nlet menu=function(){\n   let content = document.querySelector(\"#content\");\n   content.innerHTML = \"\"\n   let mainCourse = document.createElement(\"div\");\n   let sideDish = document.createElement(\"div\");\n   let drinks = document.createElement(\"div\");\n   let dessert = document.createElement(\"div\");\n   mainCourse.id = \"main\"\n   sideDish.id = \"side\";\n   drinks.id = \"drinks\";\n   dessert.id = \"dessert\";\n\n   // MAIN COURSE DISHES\n   let mainDish1 = document.createElement(\"div\");\n   let mainDish1Txt = document.createElement(\"div\");\n   mainDish1Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;The Watcher's Haunch<p><p>venison from the old doe who stands longest at the tree line, braised in juniper and shadow\";\n   let mainDish1Img = document.createElement(\"img\");\n   mainDish1Img.src=_images_pexels_mali_65175_jpg__WEBPACK_IMPORTED_MODULE_1__;\n   mainDish1.appendChild(mainDish1Txt);\n   mainDish1.appendChild(mainDish1Img);\n    \n   let mainDish2 = document.createElement(\"div\");\n   let mainDish2Txt = document.createElement(\"div\");\n   mainDish2Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;What She Forgot<p><p>slow-roasted shoulder of a matriarch, served with mushrooms that taste of damp wool and cellars\";\n   let mainDish2Img = document.createElement(\"img\");\n   mainDish2.appendChild(mainDish2Txt);\n   mainDish2.appendChild(mainDish2Img);\n    \n   let mainDish3 = document.createElement(\"div\");\n   let mainDish3Txt = document.createElement(\"div\");\n   mainDish3Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;The Quiet One<p><p>a young buck who never learned to run, seared and rested in its own stillness\";\n   let mainDish3Img = document.createElement(\"img\");\n   mainDish3.appendChild(mainDish3Txt);\n   mainDish3.appendChild(mainDish3Img);\n    \n   let mainDish4 = document.createElement(\"div\");\n   let mainDish4Txt = document.createElement(\"div\");\n   mainDish4Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;Her Last Morning<p><p>rabbit that fed on wild thyme and dew, roasted whole with herbs from the clearing's edge\";\n   let mainDish4Img = document.createElement(\"img\");\n   mainDish4.appendChild(mainDish4Txt);\n   mainDish4.appendChild(mainDish4Img);\n    \n   let mainDish5 = document.createElement(\"div\");\n   let mainDish5Txt = document.createElement(\"div\");\n   mainDish5Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;The Traveler<p><p>pheasant stuffed with chestnuts and the faint smell of cigarette smoke\";\n   let mainDish5Img = document.createElement(\"img\");\n   mainDish5.appendChild(mainDish5Txt);\n   mainDish5.appendChild(mainDish5Img);\n    \n   let mainDish6 = document.createElement(\"div\");\n   let mainDish6Txt = document.createElement(\"div\");\n   mainDish6Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;Understone<p><p>trout from the black creek, tasting of cold and things that hide from light\";\n   let mainDish6Img = document.createElement(\"img\");\n   mainDish6.appendChild(mainDish6Txt);\n   mainDish6.appendChild(mainDish6Img);\n\n   mainCourse.appendChild(mainDish1);\n   mainCourse.appendChild(mainDish2);\n   mainCourse.appendChild(mainDish3);\n   mainCourse.appendChild(mainDish4);\n   mainCourse.appendChild(mainDish5);\n   mainCourse.appendChild(mainDish6);\n\n   // SIDE DISHES\n   let sideDish1 = document.createElement(\"div\");\n   let sideDish1Txt = document.createElement(\"div\");\n   sideDish1Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;Roots That Remember<p><p>carrots and parsnips pulled from gravesoil, roasted with honey from bees that never sleep\";\n   let sideDish1Img = document.createElement(\"img\");\n   sideDish1.appendChild(sideDish1Txt);\n   sideDish1.appendChild(sideDish1Img);\n\n   let sideDish2 = document.createElement(\"div\");\n   let sideDish2Txt = document.createElement(\"div\");\n   sideDish2Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;Fingers of Earth<p><p>potatoes boiled in water from the iron spring, crushed with butter from the last cow\";\n   let sideDish2Img = document.createElement(\"img\");\n   sideDish2.appendChild(sideDish2Txt);\n   sideDish2.appendChild(sideDish2Img);\n\n  let sideDish3 = document.createElement(\"div\");\n  let sideDish3Txt = document.createElement(\"div\");\n  sideDish3Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;The Widow's Harvest<p><p>braised leeks and onions, soft as secrets, stained with beet juice like old blood\";\n  let sideDish3Img = document.createElement(\"img\");\n  sideDish3.appendChild(sideDish3Txt);\n  sideDish3.appendChild(sideDish3Img);\n\n  let sideDish4 = document.createElement(\"div\");\n  let sideDish4Txt = document.createElement(\"div\");\n  sideDish4Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;Gatherer's Remorse<p><p>wild greens that grow where the boundary fence used to stand, wilted in bacon fat and regret\";\n  let sideDish4Img = document.createElement(\"img\");\n  sideDish4.appendChild(sideDish4Txt);\n  sideDish4.appendChild(sideDish4Img);\n\n  let sideDish5 = document.createElement(\"div\");\n  let sideDish5Txt = document.createElement(\"div\");\n  sideDish5Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;Bone Nest<p><p>morels stuffed with breadcrumbs and herbs, foraged from the clearing where the fire was\";\n  let sideDish5Img = document.createElement(\"img\");\n  sideDish5.appendChild(sideDish5Txt);\n  sideDish5.appendChild(sideDish5Img);\n\n  let sideDish6 = document.createElement(\"div\");\n  let sideDish6Txt = document.createElement(\"div\");\n  sideDish6Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;Last Year's Cabbage<p><p>fermented slowly through the long dark, sharp with the taste of waiting\";\n  let sideDish6Img = document.createElement(\"img\");\n  sideDish6.appendChild(sideDish6Txt);\n  sideDish6.appendChild(sideDish6Img);\n\n  sideDish.appendChild(sideDish1);\n  sideDish.appendChild(sideDish2);\n  sideDish.appendChild(sideDish3);\n  sideDish.appendChild(sideDish4);\n  sideDish.appendChild(sideDish5);\n  sideDish.appendChild(sideDish6);\n\n  // DRINKS\n  let drink1 = document.createElement(\"div\");\n  let drink1Txt = document.createElement(\"div\");\n  drink1Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;What She Whispered<p><p>mead from honey gathered at dusk, when the bees speak in tongues\";\n  let drink1Img = document.createElement(\"img\");\n  drink1.appendChild(drink1Txt);\n  drink1.appendChild(drink1Img);\n\n  let drink2 = document.createElement(\"div\");\n  let drink2Txt = document.createElement(\"div\");\n  drink2Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;The Drowner's Share<p><p>clear spirits that taste of riverweed and the bubbles from a sunken lung\";\n  let drink2Img = document.createElement(\"img\");\n  drink2.appendChild(drink2Txt);\n  drink2.appendChild(drink2Img);\n\n  let drink3 = document.createElement(\"div\");\n  let drink3Txt = document.createElement(\"div\");\n  drink3Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;Stillness<p><p>water from the deep well, where the surface never moves and wishes are returned unanswered\";\n  let drink3Img = document.createElement(\"img\");\n  drink3.appendChild(drink3Txt);\n  drink3.appendChild(drink3Img);\n\n  let drink4 = document.createElement(\"div\");\n  let drink4Txt = document.createElement(\"div\");\n  drink4Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;Red Memory<p><p>wine from grapes grown on the hill where they buried the strangers, bold and unsettled\";\n  let drink4Img = document.createElement(\"img\");\ndrink4.appendChild(drink4Txt);\ndrink4.appendChild(drink4Img);\n\nlet drink5 = document.createElement(\"div\");\nlet drink5Txt = document.createElement(\"div\");\ndrink5Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;The Last Toast<p><p>dark ale brewed with heather and something that crunched between the stones\";\nlet drink5Img = document.createElement(\"img\");\ndrink5.appendChild(drink5Txt);\ndrink5.appendChild(drink5Img);\n\nlet drink6 = document.createElement(\"div\");\nlet drink6Txt = document.createElement(\"div\");\ndrink6Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;Her Milk<p><p>warm and thick, from the nanny goat with the knowing eye\";\nlet drink6Img = document.createElement(\"img\");\ndrink6.appendChild(drink6Txt);\ndrink6.appendChild(drink6Img);\n\ndrinks.appendChild(drink1);\ndrinks.appendChild(drink2);\ndrinks.appendChild(drink3);\ndrinks.appendChild(drink4);\ndrinks.appendChild(drink5);\ndrinks.appendChild(drink6);\n\n// DESSERTS\nlet dessert1 = document.createElement(\"div\");\nlet dessert1Txt = document.createElement(\"div\");\ndessert1Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;The Hive's Lament<p><p>honey cake soaked in something dark, sweet with the grief of a thousand workers\";\nlet dessert1Img = document.createElement(\"img\");\ndessert1.appendChild(dessert1Txt);\ndessert1.appendChild(dessert1Img);\n\nlet dessert2 = document.createElement(\"div\");\nlet dessert2Txt = document.createElement(\"div\");\ndessert2Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;Buried Berries<p><p>blackberries picked where the soil is richest, baked into a pie that weeps when cut\";\nlet dessert2Img = document.createElement(\"img\");\ndessert2.appendChild(dessert2Txt);\ndessert2.appendChild(dessert2Img);\n\nlet dessert3 = document.createElement(\"div\");\nlet dessert3Txt = document.createElement(\"div\");\ndessert3Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;What the Moth Knows<p><p>panna cotta with cream from the restless herd, topped with preserves the color of old linen\";\nlet dessert3Img = document.createElement(\"img\");\ndessert3.appendChild(dessert3Txt);\ndessert3.appendChild(dessert3Img);\n\nlet dessert4 = document.createElement(\"div\");\nlet dessert4Txt = document.createElement(\"div\");\ndessert4Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;The Last Apple<p><p>poached in wine from the year the sun forgot us, served with the skin still on\";\nlet dessert4Img = document.createElement(\"img\");\ndessert4.appendChild(dessert4Txt);\ndessert4.appendChild(dessert4Img);\n\nlet dessert5 = document.createElement(\"div\");\nlet dessert5Txt = document.createElement(\"div\");\ndessert5Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;Fallen Leaves<p><p>crisp pastries folded like shed skin, filled with chestnut paste and the taste of bonfire smoke\";\nlet dessert5Img = document.createElement(\"img\");\ndessert5.appendChild(dessert5Txt);\ndessert5.appendChild(dessert5Img);\n\nlet dessert6 = document.createElement(\"div\");\nlet dessert6Txt = document.createElement(\"div\");\ndessert6Txt.innerHTML = \"&nbsp;&nbsp;&nbsp;&nbsp;Her Teeth<p><p>small white meringues that crack between the teeth, sweet as lies and just as hollow\";\nlet dessert6Img = document.createElement(\"img\");\ndessert6.appendChild(dessert6Txt);\ndessert6.appendChild(dessert6Img);\n\ndessert.appendChild(dessert1);\ndessert.appendChild(dessert2);\ndessert.appendChild(dessert3);\ndessert.appendChild(dessert4);\ndessert.appendChild(dessert5);\ndessert.appendChild(dessert6);\n\ncontent.appendChild(mainCourse);\ncontent.appendChild(sideDish);\ncontent.appendChild(drinks);\ncontent.appendChild(dessert);\nlet footer=document.createElement(\"div\");\nfooter.id=\"footer\";\nfooter.innerHTML=`Made by  <a href=\"https://github.com/dawit-kibatu\">Dawit Kibatu</a>`\nfooter.style.cssText=`\n    #footer{\n    grid-column:1/13 ;\n    grid-row:11/13;\n    border-top:solid gray;\n     }`\ncontent.appendChild(footer)\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;