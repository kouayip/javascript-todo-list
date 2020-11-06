/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/styles.scss */ "./src/assets/scss/styles.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/styles.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/styles.scss ***!
  \******************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Syne+Mono&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --font-family-montserrat: \"Montserrat\", sans-serif;\n  --font-family-Syne-mono: \"Syne Mono\", monospace;\n  --text-color: #2f3640;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.6rem;\n  font-weight: 400;\n  line-height: 1.3;\n  font-family: var(--font-family-montserrat);\n  color: var(--text-color);\n}\n@media only screen and (max-width: 600px) {\n  body {\n    font-size: 1.4rem;\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-bottom: 1rem;\n  line-height: 1.2;\n}\n\nh1 {\n  font-size: 4rem;\n}\n\nh2 {\n  font-size: 3.5rem;\n}\n\nh3 {\n  font-size: 3rem;\n}\n\nh4 {\n  font-size: 2.5;\n}\n\nh5 {\n  font-size: 2;\n}\n\nh6 {\n  font-size: 1.5;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.layout-grid-container {\n  display: grid;\n  width: 100%;\n  height: 100vh;\n  grid-template-areas: \"header-grid-component\" \"main-grid-component\" \"footer-grid-component\";\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: auto;\n}\n.layout-grid-container > .header-component {\n  grid-area: header-grid-component;\n}\n.layout-grid-container > .main-component {\n  grid-area: main-grid-component;\n}\n.layout-grid-container > .footer-component {\n  grid-area: footer-grid-component;\n}\n\n.flx-container {\n  max-width: 1400px;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 40px;\n}\n@media only screen and (max-width: 600px) {\n  .flx-container {\n    padding: 0 20px;\n  }\n}\n.flx-row {\n  display: flex;\n  flex-flow: row wrap;\n  height: inherit;\n}\n.flx-col {\n  flex: 0 0 auto;\n  padding: 10px 0;\n}\n.flx-col- {\n  flex: 1;\n  padding: 10px 0;\n}\n.flx-col-1 {\n  padding: 10px 0;\n  flex: 0 0 8.3333333333%;\n}\n.flx-col-2 {\n  padding: 10px 0;\n  flex: 0 0 16.6666666667%;\n}\n.flx-col-3 {\n  padding: 10px 0;\n  flex: 0 0 25%;\n}\n.flx-col-4 {\n  padding: 10px 0;\n  flex: 0 0 33.3333333333%;\n}\n.flx-col-5 {\n  padding: 10px 0;\n  flex: 0 0 41.6666666667%;\n}\n.flx-col-6 {\n  padding: 10px 0;\n  flex: 0 0 50%;\n}\n.flx-col-7 {\n  padding: 10px 0;\n  flex: 0 0 58.3333333333%;\n}\n.flx-col-8 {\n  padding: 10px 0;\n  flex: 0 0 66.6666666667%;\n}\n.flx-col-9 {\n  padding: 10px 0;\n  flex: 0 0 75%;\n}\n.flx-col-10 {\n  padding: 10px 0;\n  flex: 0 0 83.3333333333%;\n}\n.flx-col-11 {\n  padding: 10px 0;\n  flex: 0 0 91.6666666667%;\n}\n.flx-col-12 {\n  padding: 10px 0;\n  flex: 0 0 100%;\n}\n.flx-ctr {\n  justify-content: center;\n  align-items: center;\n}\n.flx-just-ctr {\n  justify-content: center;\n}\n.flx-algn-ctr {\n  align-items: center;\n}\n.flx-wrap {\n  flex-wrap: wrap;\n}\n.flx-nowrap {\n  flex-wrap: nowrap;\n}\n@media only screen and (max-width: 600px) {\n  .flx-xs-col {\n    flex: 0 0 auto;\n    padding: 10px 0;\n  }\n  .flx-xs-col- {\n    flex: 1;\n    padding: 10px 0;\n  }\n  .flx-xs-col-1 {\n    padding: 10px 0;\n    flex: 0 0 8%;\n  }\n  .flx-xs-col-2 {\n    padding: 10px 0;\n    flex: 0 0 17%;\n  }\n  .flx-xs-col-3 {\n    padding: 10px 0;\n    flex: 0 0 25%;\n  }\n  .flx-xs-col-4 {\n    padding: 10px 0;\n    flex: 0 0 33%;\n  }\n  .flx-xs-col-5 {\n    padding: 10px 0;\n    flex: 0 0 42%;\n  }\n  .flx-xs-col-6 {\n    padding: 10px 0;\n    flex: 0 0 50%;\n  }\n  .flx-xs-col-7 {\n    padding: 10px 0;\n    flex: 0 0 58%;\n  }\n  .flx-xs-col-8 {\n    padding: 10px 0;\n    flex: 0 0 67%;\n  }\n  .flx-xs-col-9 {\n    padding: 10px 0;\n    flex: 0 0 75%;\n  }\n  .flx-xs-col-10 {\n    padding: 10px 0;\n    flex: 0 0 83%;\n  }\n  .flx-xs-col-11 {\n    padding: 10px 0;\n    flex: 0 0 92%;\n  }\n  .flx-xs-col-12 {\n    padding: 10px 0;\n    flex: 0 0 100%;\n  }\n  .flx-xs-ctr {\n    justify-content: center;\n    align-items: center;\n  }\n  .flx-xs-just-ctr {\n    justify-content: center;\n  }\n  .flx-xs-algn-ctr {\n    align-items: center;\n  }\n}\n\n.txt-algn-ctr {\n  text-align: center;\n}\n@media only screen and (max-width: 600px) {\n  .txt-xs-algn-ctr {\n    text-align: center;\n  }\n}\n\n.display-none {\n  display: none;\n}\n.display-block {\n  display: block;\n}\n@media only screen and (min-width: 992px) {\n  .display-lg-none {\n    display: none;\n  }\n  .display-lg-block {\n    display: block;\n  }\n}\n\n.btn {\n  padding: 10px 20px;\n  border-radius: 3px;\n  display: inline-block;\n}\n.btn-primary {\n  background: #00a8ff;\n  color: white;\n}\n\n.mg-tp-0 {\n  margin-top: 0rem;\n}\n.mg-bm-0 {\n  margin-bottom: 0rem;\n}\n.mg-lt-0 {\n  margin-left: 0rem;\n}\n.mg-rt-0 {\n  margin-right: 0rem;\n}\n.mgx-0 {\n  margin: 0 0rem;\n}\n.mgy-0 {\n  margin: 0rem 0;\n}\n.mg-tp-1 {\n  margin-top: 1rem;\n}\n.mg-bm-1 {\n  margin-bottom: 1rem;\n}\n.mg-lt-1 {\n  margin-left: 1rem;\n}\n.mg-rt-1 {\n  margin-right: 1rem;\n}\n.mgx-1 {\n  margin: 0 1rem;\n}\n.mgy-1 {\n  margin: 1rem 0;\n}\n.mg-tp-2 {\n  margin-top: 2rem;\n}\n.mg-bm-2 {\n  margin-bottom: 2rem;\n}\n.mg-lt-2 {\n  margin-left: 2rem;\n}\n.mg-rt-2 {\n  margin-right: 2rem;\n}\n.mgx-2 {\n  margin: 0 2rem;\n}\n.mgy-2 {\n  margin: 2rem 0;\n}\n.mg-tp-3 {\n  margin-top: 3rem;\n}\n.mg-bm-3 {\n  margin-bottom: 3rem;\n}\n.mg-lt-3 {\n  margin-left: 3rem;\n}\n.mg-rt-3 {\n  margin-right: 3rem;\n}\n.mgx-3 {\n  margin: 0 3rem;\n}\n.mgy-3 {\n  margin: 3rem 0;\n}\n.mg-tp-4 {\n  margin-top: 4rem;\n}\n.mg-bm-4 {\n  margin-bottom: 4rem;\n}\n.mg-lt-4 {\n  margin-left: 4rem;\n}\n.mg-rt-4 {\n  margin-right: 4rem;\n}\n.mgx-4 {\n  margin: 0 4rem;\n}\n.mgy-4 {\n  margin: 4rem 0;\n}\n\n.pd-0 {\n  padding: 0rem 0rem;\n}\n.pd-tp-0 {\n  padding-top: 0rem;\n}\n.pd-bm-0 {\n  padding-bottom: 0rem;\n}\n.pd-lt-0 {\n  padding-left: 0rem;\n}\n.pd-rt-0 {\n  padding-right: 0rem;\n}\n.pd-x-0 {\n  padding: 0 0rem;\n}\n.pd-y-0 {\n  padding: 0rem 0;\n}\n.pd-1 {\n  padding: 1rem 1rem;\n}\n.pd-tp-1 {\n  padding-top: 1rem;\n}\n.pd-bm-1 {\n  padding-bottom: 1rem;\n}\n.pd-lt-1 {\n  padding-left: 1rem;\n}\n.pd-rt-1 {\n  padding-right: 1rem;\n}\n.pd-x-1 {\n  padding: 0 1rem;\n}\n.pd-y-1 {\n  padding: 1rem 0;\n}\n.pd-2 {\n  padding: 2rem 2rem;\n}\n.pd-tp-2 {\n  padding-top: 2rem;\n}\n.pd-bm-2 {\n  padding-bottom: 2rem;\n}\n.pd-lt-2 {\n  padding-left: 2rem;\n}\n.pd-rt-2 {\n  padding-right: 2rem;\n}\n.pd-x-2 {\n  padding: 0 2rem;\n}\n.pd-y-2 {\n  padding: 2rem 0;\n}\n.pd-3 {\n  padding: 3rem 3rem;\n}\n.pd-tp-3 {\n  padding-top: 3rem;\n}\n.pd-bm-3 {\n  padding-bottom: 3rem;\n}\n.pd-lt-3 {\n  padding-left: 3rem;\n}\n.pd-rt-3 {\n  padding-right: 3rem;\n}\n.pd-x-3 {\n  padding: 0 3rem;\n}\n.pd-y-3 {\n  padding: 3rem 0;\n}\n.pd-4 {\n  padding: 4rem 4rem;\n}\n.pd-tp-4 {\n  padding-top: 4rem;\n}\n.pd-bm-4 {\n  padding-bottom: 4rem;\n}\n.pd-lt-4 {\n  padding-left: 4rem;\n}\n.pd-rt-4 {\n  padding-right: 4rem;\n}\n.pd-x-4 {\n  padding: 0 4rem;\n}\n.pd-y-4 {\n  padding: 4rem 0;\n}\n\nnav.nav-menu {\n  display: flex;\n}\n@media only screen and (max-width: 600px) {\n  nav.nav-menu {\n    justify-content: flex-end;\n  }\n}\n@media only screen and (min-width: 600px) {\n  nav.nav-menu {\n    justify-content: center;\n  }\n}\n@media only screen and (min-width: 768px) {\n  nav.nav-menu {\n    justify-content: flex-end;\n  }\n}\nnav.nav-menu > ul.nav-menu-list {\n  display: flex;\n}\n@media only screen and (max-width: 600px) {\n  nav.nav-menu > ul.nav-menu-list {\n    display: none;\n  }\n}\nnav.nav-menu > ul.nav-menu-list > li.nav-item {\n  margin-left: 3rem;\n}\nnav.nav-menu > ul.nav-menu-list > li.nav-item > a.nav-link {\n  font-size: 1.4rem;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\nnav.nav-menu > ul.nav-menu-list > li.nav-item > a.nav-link:hover {\n  opacity: 0.8;\n  transition: all 0.2s;\n}\nnav.nav-menu .nav-menu-toggle {\n  cursor: pointer;\n  z-index: 99999;\n  font-size: 2rem;\n}\nnav.nav-menu .nav-menu-toggle > .toggle-icon-open {\n  display: none;\n}\nnav.nav-menu .nav-menu-toggle > .toggle-icon-close {\n  display: none;\n}\n@media only screen and (max-width: 600px) {\n  nav.nav-menu .nav-menu-toggle > .toggle-icon-open {\n    display: block;\n  }\n}\n@media only screen and (max-width: 600px) {\n  nav.nav-menu.open > ul.nav-menu-list {\n    display: flex;\n    align-items: center;\n    position: absolute;\n    z-index: 9999;\n    flex-direction: column;\n    background: white;\n    padding: 8rem 2rem 0 2rem;\n    width: 100%;\n    height: 100vh;\n    top: 0;\n    right: 0;\n    animation: moveOver 0.2s ease-in-out;\n    animation-fill-mode: forwards;\n  }\n}\n@media only screen and (max-width: 600px) {\n  nav.nav-menu.open > ul.nav-menu-list > li.nav-item {\n    margin-left: 0;\n    margin-bottom: 3rem;\n  }\n}\n@media only screen and (max-width: 600px) {\n  nav.nav-menu.open > ul.nav-menu-list > li.nav-item > a.nav-link {\n    display: inline-block;\n    font-size: 1.6rem;\n    text-transform: uppercase;\n    border-bottom: 1px solid black;\n    transition: transform 0.3s ease-in-out;\n  }\n  nav.nav-menu.open > ul.nav-menu-list > li.nav-item > a.nav-link:hover {\n    transform: scale(1.5);\n  }\n}\n@media only screen and (max-width: 600px) {\n  nav.nav-menu.open .toggle-icon-open {\n    display: none;\n  }\n  nav.nav-menu.open .toggle-icon-close {\n    display: block;\n  }\n}\n\n@keyframes moveOver {\n  to {\n    transform: translateY(0%);\n  }\n  from {\n    transform: translateY(-100%);\n  }\n}\nheader {\n  background: #ffffff;\n  position: relative;\n}\n@media only screen and (min-width: 768px) {\n  header {\n    height: 5.5rem;\n  }\n}\nheader::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 100%;\n  height: 4px;\n  background: linear-gradient(rgba(9, 30, 66, 0.13) 0px, rgba(9, 30, 66, 0.13) 1px, rgba(9, 30, 66, 0.08) 1px, rgba(9, 30, 66, 0) 4px);\n}\nheader .header-brand-text {\n  font-size: 2rem;\n  font-family: var(--font-family-Syne-mono);\n}\n\nmain {\n  background: #f5f6fa;\n}\n\n.footer {\n  background-color: orange;\n  height: 30px;\n}", "",{"version":3,"sources":["webpack://src/assets/scss/_reset.scss","webpack://src/assets/scss/styles.scss","webpack://src/assets/scss/_vars.scss","webpack://src/assets/scss/_base.scss","webpack://src/assets/scss/_media-queries.scss","webpack://src/assets/scss/stylfy/_stylfy-style.scss","webpack://src/assets/scss/_utils.scss","webpack://src/assets/scss/stylfy/core/module/padding/_sfy-padding_.scss"],"names":[],"mappings":"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1KM;EACE,mBAAA;AJ4KR;AIxKM;EACE,iBAAA;AJ0KR;AItKM;EACE,kBAAA;AJwKR;AIpKM;EACE,cAAA;AJsKR;AIlKM;EACE,cAAA;AJoKR;AI9LM;EACE,gBAAA;AJgMR;AI5LM;EACE,mBAAA;AJ8LR;AI1LM;EACE,iBAAA;AJ4LR;AIxLM;EACE,kBAAA;AJ0LR;AItLM;EACE,cAAA;AJwLR;AIpLM;EACE,cAAA;AJsLR;AIhNM;EACE,gBAAA;AJkNR;AI9MM;EACE,mBAAA;AJgNR;AI5MM;EACE,iBAAA;AJ8MR;AI1MM;EACE,kBAAA;AJ4MR;AIxMM;EACE,cAAA;AJ0MR;AItMM;EACE,cAAA;AJwMR;;AMtXE;EACE,kBAAA;ANyXJ;AMjXE;EACE,iBAAA;ANmXJ;AM3WE;EACE,oBAAA;AN6WJ;AMrWE;EACE,kBAAA;ANuWJ;AM/VE;EACE,mBAAA;ANiWJ;AMzVE;EACE,eAAA;AN2VJ;AMnVE;EACE,eAAA;ANqVJ;AM5YE;EACE,kBAAA;AN8YJ;AMtYE;EACE,iBAAA;ANwYJ;AMhYE;EACE,oBAAA;ANkYJ;AM1XE;EACE,kBAAA;AN4XJ;AMpXE;EACE,mBAAA;ANsXJ;AM9WE;EACE,eAAA;ANgXJ;AMxWE;EACE,eAAA;AN0WJ;AMjaE;EACE,kBAAA;ANmaJ;AM3ZE;EACE,iBAAA;AN6ZJ;AMrZE;EACE,oBAAA;ANuZJ;AM/YE;EACE,kBAAA;ANiZJ;AMzYE;EACE,mBAAA;AN2YJ;AMnYE;EACE,eAAA;ANqYJ;AM7XE;EACE,eAAA;AN+XJ;AMtbE;EACE,kBAAA;ANwbJ;AMhbE;EACE,iBAAA;ANkbJ;AM1aE;EACE,oBAAA;AN4aJ;AMpaE;EACE,kBAAA;ANsaJ;AM9ZE;EACE,mBAAA;ANgaJ;AMxZE;EACE,eAAA;AN0ZJ;AMlZE;EACE,eAAA;ANoZJ;AM3cE;EACE,kBAAA;AN6cJ;AMrcE;EACE,iBAAA;ANucJ;AM/bE;EACE,oBAAA;ANicJ;AMzbE;EACE,kBAAA;AN2bJ;AMnbE;EACE,mBAAA;ANqbJ;AM7aE;EACE,eAAA;AN+aJ;AMvaE;EACE,eAAA;ANyaJ;;AK1aA;EACE,aAAA;AL6aF;AGteI;EEwDJ;IAGI,yBAAA;EL+aF;AACF;AGreI;EEkDJ;IAMI,uBAAA;ELibF;AACF;AGpeI;EE4CJ;IASI,yBAAA;ELmbF;AACF;AKlbE;EACE,aAAA;ALobJ;AGxfI;EEmEF;IAGI,aAAA;ELsbJ;AACF;AKrbI;EACE,iBAAA;ALubN;AKrbM;EACE,iBAAA;EACA,gBAAA;EACA,mBAAA;ALubR;AKtbQ;EACE,YAAA;EACA,oBAAA;ALwbV;AKnbE;EACE,eAAA;EACA,cAAA;EACA,eAAA;ALqbJ;AKnbM;EACE,aAAA;ALqbR;AKnbM;EACE,aAAA;ALqbR;AGphBI;EEkGI;IACE,cAAA;ELqbR;AACF;AGzhBI;EE0GA;IAEI,aAAA;IACA,mBAAA;IACA,kBAAA;IACA,aAAA;IACA,sBAAA;IACA,iBAAA;IACA,yBAAA;IACA,WAAA;IACA,aAAA;IACA,MAAA;IACA,QAAA;IACA,oCAAA;IACA,6BAAA;ELibN;AACF;AG1iBI;EE0HE;IAEI,cAAA;IACA,mBAAA;ELkbR;AACF;AGhjBI;EE+HI;IAEI,qBAAA;IACA,iBAAA;IACA,yBAAA;IACA,8BAAA;IACA,sCAAA;ELmbV;EKlbU;IACE,qBAAA;ELobZ;AACF;AG5jBI;EE+IE;IACE,aAAA;ELgbN;EK9aI;IACE,cAAA;ELgbN;AACF;;AK1aA;EACE;IACE,yBAAA;EL6aF;EK3aA;IACE,4BAAA;EL6aF;AACF;AAxkBA;EACE,mBAAA;EACA,kBAAA;AA0kBF;AGrkBI;EHPJ;IAII,cAAA;EA4kBF;AACF;AA3kBE;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,oIAAA;AA6kBJ;AArkBE;EACE,eAAA;EACA,yCAAA;AAukBJ;;AAnkBA;EACE,mBAAA;AAskBF;;AAnkBA;EACE,wBAAA;EACA,YAAA;AAskBF","sourcesContent":["*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n","@import \"reset\";\n@import \"vars\";\n@import \"media-queries\";\n@import \"base\";\n@import \"utils\";\n@import \"classes\";\n\nheader {\n  background: #ffffff;\n  position: relative;\n  @include responsive-device(md) {\n    height: 5.5rem;\n  }\n  &::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 100%;\n    height: 4px;\n    background: linear-gradient(\n      rgba(9, 30, 66, 0.13) 0px,\n      rgba(9, 30, 66, 0.13) 1px,\n      rgba(9, 30, 66, 0.08) 1px,\n      rgba(9, 30, 66, 0) 4px\n    );\n  }\n\n  .header-brand-text {\n    font-size: 2rem;\n    font-family: var(--font-family-Syne-mono);\n  }\n}\n\nmain {\n  background: #f5f6fa;\n}\n\n.footer {\n  background-color: orange;\n  height: 30px;\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Syne+Mono&display=swap\");\n\n:root {\n  --font-family-montserrat: \"Montserrat\", sans-serif;\n  --font-family-Syne-mono: \"Syne Mono\", monospace;\n  --text-color: #2f3640;\n}\n","html {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.6rem;\n  @include responsive-device(xs) {\n    font-size: 1.4rem;\n  }\n  font-weight: 400;\n  line-height: 1.3;\n  font-family: var(--font-family-montserrat);\n  color: var(--text-color);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-bottom: 1rem;\n  line-height: 1.2;\n}\n\nh1 {\n  font-size: 4rem;\n}\n\nh2 {\n  font-size: 3.5rem;\n}\n\nh3 {\n  font-size: 3rem;\n}\n\nh4 {\n  font-size: 2.5;\n}\n\nh5 {\n  font-size: 2;\n}\n\nh6 {\n  font-size: 1.5;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n}\n","@mixin responsive-device($break-point) {\n  @if $break-point == xs {\n    @media only screen and(max-width: 600px) {\n      @content;\n    }\n  }\n\n  @if $break-point == sm {\n    @media only screen and(min-width: 600px) {\n      @content;\n    }\n  }\n\n  @if $break-point == md {\n    @media only screen and(min-width: 768px) {\n      @content;\n    }\n  }\n\n  @if $break-point == lg {\n    @media only screen and(min-width: 992px) {\n      @content;\n    }\n  }\n\n  @if $break-point == lx {\n    @media only screen and(min-width: 1200px) {\n      @content;\n    }\n  }\n}\n","@import \"./config/stylfy-config\";\n@import \"./core/module/padding/sfy-padding\";\n\n/// Grid layout container\n///\n/// @Use\n///   .element {\n///       @include sfy-layout-container;\n///   }\n///\n@mixin sfy-layout-container {\n  &-grid-container {\n    display: grid;\n    width: 100%;\n    height: 100vh;\n    grid-template-areas:\n      \"header-grid-component\"\n      \"main-grid-component\"\n      \"footer-grid-component\";\n    grid-template-rows: auto 1fr auto;\n    grid-template-columns: auto;\n\n    & > .header-component {\n      grid-area: header-grid-component;\n    }\n\n    & > .main-component {\n      grid-area: main-grid-component;\n    }\n\n    & > .footer-component {\n      grid-area: footer-grid-component;\n    }\n  }\n}\n\n///\n///\n///\n///\n///\n@mixin sfy-flex-container(\n  $max-size: 1400px,\n  $container-offset: 40px,\n  $col-count: 12,\n  $col-offset: 10px,\n  $precision: false\n) {\n  &-container {\n    max-width: #{$max-size};\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n    padding: 0 $container-offset;\n    @include responsive-device(xs) {\n      padding: 0 $container-offset / 2;\n    }\n  }\n\n  &-row {\n    display: flex;\n    flex-flow: row wrap;\n    height: inherit;\n  }\n\n  @include sfy-flex-col($col-count, $col-offset, $precision);\n\n  @include sfy-flex-align;\n\n  &-wrap {\n    flex-wrap: wrap;\n  }\n\n  &-nowrap {\n    flex-wrap: nowrap;\n  }\n}\n\n///\n///\n///\n///\n@mixin sfy-flex-col($col-count: 12, $col-offset: 10px, $precision: false) {\n  &-col {\n    flex: 0 0 auto;\n    padding: #{$col-offset} 0;\n  }\n\n  &-col- {\n    flex: 1;\n    padding: #{$col-offset} 0;\n  }\n\n  @for $i from 1 through $col-count {\n    &-col-#{$i} {\n      padding: #{$col-offset} 0;\n      $number: 100% / $col-count * $i;\n      @if $precision {\n        flex: 0 0 round($number);\n      } @else {\n        flex: 0 0 $number;\n      }\n    }\n  }\n}\n\n@mixin sfy-flex-align {\n  &-ctr {\n    justify-content: center;\n    align-items: center;\n  }\n  &-just {\n    &-ctr {\n      justify-content: center;\n    }\n  }\n  &-algn {\n    &-ctr {\n      align-items: center;\n    }\n  }\n}\n///\n///\n///\n///\n///\n///\n@mixin sfy-text {\n  &-algn {\n    &-ctr {\n      text-align: center;\n    }\n  }\n}\n\n///\n///\n///\n///\n///\n@mixin sfy-margin(\n  $count: 4,\n  $mt: true,\n  $mb: true,\n  $ml: true,\n  $mr: true,\n  $mx: true,\n  $my: true\n) {\n  @for $i from 0 through $count {\n    @if $mt {\n      &-tp-#{$i} {\n        margin-top: #{$i}rem;\n      }\n    }\n    @if $mb {\n      &-bm-#{$i} {\n        margin-bottom: #{$i}rem;\n      }\n    }\n    @if $ml {\n      &-lt-#{$i} {\n        margin-left: #{$i}rem;\n      }\n    }\n    @if $mr {\n      &-rt-#{$i} {\n        margin-right: #{$i}rem;\n      }\n    }\n    @if $mx {\n      &x-#{$i} {\n        margin: 0 #{$i}rem;\n      }\n    }\n    @if $my {\n      &y-#{$i} {\n        margin: #{$i}rem 0;\n      }\n    }\n  }\n}\n\n///\n///\n///\n///\n///\n///\n@mixin sfy-buttom($offsetY: 10px, $offsetX: 20px, $radius: 3px) {\n  padding: #{$offsetY} #{$offsetX};\n  border-radius: #{$radius};\n  display: inline-block;\n  @content;\n}\n\n///\n///\n///\n///\n///\n///\n@mixin sfy-display {\n  &-none {\n    display: none;\n  }\n  &-block {\n    display: block;\n  }\n}\n","@import \"./stylfy/stylfy-style\";\n\n//Layout\n.layout {\n  @include sfy-layout-container;\n}\n\n//Flex\n.flx {\n  @include sfy-flex-container;\n  @include responsive-device(xs) {\n    &-xs {\n      @include sfy-flex-col($precision: true);\n      @include sfy-flex-align;\n    }\n  }\n}\n\n//Text\n.txt {\n  @include sfy-text;\n  @include responsive-device(xs) {\n    &-xs {\n      @include sfy-text;\n    }\n  }\n}\n\n//Display\n.display {\n  @include sfy-display;\n  @include responsive-device(lg) {\n    &-lg {\n      @include sfy-display;\n    }\n  }\n}\n\n//Btn\n.btn {\n  @include sfy-buttom {\n    &-primary {\n      background: #00a8ff;\n      color: white;\n    }\n  }\n}\n\n//Margin\n.mg {\n  @include sfy-margin;\n}\n\n//Padding\n.pd {\n  @include sfy-padding;\n}\n\nnav.nav-menu {\n  display: flex;\n  @include responsive-device(xs) {\n    justify-content: flex-end;\n  }\n  @include responsive-device(sm) {\n    justify-content: center;\n  }\n  @include responsive-device(md) {\n    justify-content: flex-end;\n  }\n  & > ul.nav-menu-list {\n    display: flex;\n    @include responsive-device(xs) {\n      display: none;\n    }\n    & > li.nav-item {\n      margin-left: 3rem;\n\n      & > a.nav-link {\n        font-size: 1.4rem;\n        font-weight: 500;\n        letter-spacing: 1px;\n        &:hover {\n          opacity: 0.8;\n          transition: all 0.2s;\n        }\n      }\n    }\n  }\n  .nav-menu-toggle {\n    cursor: pointer;\n    z-index: 99999;\n    font-size: 2rem;\n    & > {\n      .toggle-icon-open {\n        display: none;\n      }\n      .toggle-icon-close {\n        display: none;\n      }\n      @include responsive-device(xs) {\n        .toggle-icon-open {\n          display: block;\n        }\n      }\n    }\n  }\n\n  &.open {\n    & > ul.nav-menu-list {\n      @include responsive-device(xs) {\n        display: flex;\n        align-items: center;\n        position: absolute;\n        z-index: 9999;\n        flex-direction: column;\n        background: white;\n        padding: 8rem 2rem 0 2rem;\n        width: 100%;\n        height: 100vh;\n        top: 0;\n        right: 0;\n        animation: moveOver 0.2s ease-in-out;\n        animation-fill-mode: forwards;\n      }\n      & > li.nav-item {\n        @include responsive-device(xs) {\n          margin-left: 0;\n          margin-bottom: 3rem;\n        }\n        & > a.nav-link {\n          @include responsive-device(xs) {\n            display: inline-block;\n            font-size: 1.6rem;\n            text-transform: uppercase;\n            border-bottom: 1px solid black;\n            transition: transform 0.3s ease-in-out;\n            &:hover {\n              transform: scale(1.5);\n            }\n          }\n        }\n      }\n    }\n\n    @include responsive-device(xs) {\n      .toggle-icon-open {\n        display: none;\n      }\n      .toggle-icon-close {\n        display: block;\n      }\n    }\n  }\n}\n\n//Annimation\n@keyframes moveOver {\n  to {\n    transform: translateY(0%);\n  }\n  from {\n    transform: translateY(-100%);\n  }\n}\n","///\n///\n///\n@mixin sfy-pd($value: 1, $unit: rem) {\n  &-#{$value} {\n    padding: #{$value}#{$unit} #{$value}#{$unit};\n  }\n}\n\n///\n///\n///\n@mixin sfy-pd-tp($value: 1, $unit: rem) {\n  &-tp-#{$value} {\n    padding-top: #{$value}#{$unit};\n  }\n}\n\n///\n///\n///\n@mixin sfy-pd-bm($value: 1, $unit: rem) {\n  &-bm-#{$value} {\n    padding-bottom: #{$value}#{$unit};\n  }\n}\n\n///\n///\n///\n@mixin sfy-pd-lt($value: 1, $unit: rem) {\n  &-lt-#{$value} {\n    padding-left: #{$value}#{$unit};\n  }\n}\n\n///\n///\n///\n@mixin sfy-pd-rt($value: 1, $unit: rem) {\n  &-rt-#{$value} {\n    padding-right: #{$value}#{$unit};\n  }\n}\n\n///\n///\n///\n@mixin sfy-pd-x($value: 1, $unit: rem) {\n  &-x-#{$value} {\n    padding: 0 #{$value}#{$unit};\n  }\n}\n\n///\n///\n///\n@mixin sfy-pd-y($value: 1, $unit: rem) {\n  &-y-#{$value} {\n    padding: #{$value}#{$unit} 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".banner-background {\n  height: 40rem;\n  width: 40rem;\n}\n\n.banner-title {\n  font-size: 6rem;\n  letter-spacing: 2px;\n}\n@media only screen and (max-width: 600px) {\n  .banner-title {\n    font-size: 4rem;\n  }\n}\n\n.banner-desc {\n  font-size: 1.8rem;\n  letter-spacing: 1px;\n  line-height: 1.5;\n}\n@media only screen and (max-width: 600px) {\n  .banner-desc {\n    font-size: 1.6rem;\n  }\n}", "",{"version":3,"sources":["webpack://src/index.scss","webpack://src/assets/scss/_media-queries.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,YAAA;AADF;;AAIA;EACE,eAAA;EACA,mBAAA;AADF;ACNI;EDKJ;IAII,eAAA;EACF;AACF;;AAEA;EACE,iBAAA;EACA,mBAAA;EACA,gBAAA;AACF;ACjBI;EDaJ;IAKI,iBAAA;EAGF;AACF","sourcesContent":["@import \"./assets/scss/media-queries\";\n\n.banner-background {\n  height: 40rem;\n  width: 40rem;\n}\n\n.banner-title {\n  font-size: 6rem;\n  letter-spacing: 2px;\n  @include responsive-device(xs) {\n    font-size: 4rem;\n  }\n}\n\n.banner-desc {\n  font-size: 1.8rem;\n  letter-spacing: 1px;\n  line-height: 1.5;\n  @include responsive-device(xs) {\n    font-size: 1.6rem;\n  }\n}\n","@mixin responsive-device($break-point) {\n  @if $break-point == xs {\n    @media only screen and(max-width: 600px) {\n      @content;\n    }\n  }\n\n  @if $break-point == sm {\n    @media only screen and(min-width: 600px) {\n      @content;\n    }\n  }\n\n  @if $break-point == md {\n    @media only screen and(min-width: 768px) {\n      @content;\n    }\n  }\n\n  @if $break-point == lg {\n    @media only screen and(min-width: 992px) {\n      @content;\n    }\n  }\n\n  @if $break-point == lx {\n    @media only screen and(min-width: 1200px) {\n      @content;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 15:0-14 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/assets/scss/styles.scss":
/*!*************************************!*\
  !*** ./src/assets/scss/styles.scss ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/styles.scss");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map