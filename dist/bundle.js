/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  box-sizing: border-box;\n  user-select: none;\n}\n\nli {\n  list-style: none;\n}\n\n.icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n\n.icon-add-solid,\n.icon-plus {\n  fill: #fff;\n  width: 3.5rem;\n  height: 3.5rem;\n  margin-bottom: 3rem;\n  margin-left: 2.5rem;\n  transition: all 500ms ease-in-out;\n  border-radius: 50%;\n}\n.icon-add-solid:hover,\n.icon-plus:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  fill: #8b5615;\n}\n\n.main {\n  font-size: 2rem;\n  font-family: \"Noto Sans\", sans-serif;\n  font-weight: 400;\n  color: #fff;\n}\n\n.heading-primary {\n  margin-bottom: 3rem;\n}\n\n.heading-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 4rem;\n  padding-bottom: 0;\n}\n.heading-container--to-do {\n  padding: 0;\n}\n\n.display-block {\n  display: block;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-90 {\n  width: 90%;\n}\n\nbutton {\n  background-color: transparent;\n  border: 1px solid #fff;\n  font-size: 2rem;\n  font-weight: inherit;\n  font-family: inherit;\n  color: inherit;\n}\n\n.btn-close-project {\n  border: 0;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  position: relative;\n}\n.btn-close-project:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.btn-close-to-do {\n  border: 0;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  right: 4rem;\n  visibility: hidden;\n}\n.btn-close-to-do:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.form:hover .btn-close-to-do {\n  visibility: visible;\n}\n\n.btn-group {\n  display: inline-block;\n}\n.btn-group__label {\n  display: inline-block;\n  margin-right: 1rem;\n}\n.btn-group__btn {\n  padding: 0.5rem 2rem;\n  border-radius: 3px;\n}\n.btn-group__btn:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.priority-btn.active {\n  background-color: #8b5615;\n}\n\nlabel {\n  margin-right: 1rem;\n}\n\n.form-container--createProject {\n  display: \"block\";\n}\n\n.form {\n  border: 1px solid #fff;\n  padding: 2rem 4rem;\n}\n.form__group {\n  padding: 1rem 0;\n}\n.form__group:first-child {\n  padding-top: 0;\n}\n.form__group:last-child {\n  padding-bottom: 0;\n}\n.form__input {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 400;\n  color: inherit;\n  background-color: transparent;\n  border: 0;\n  outline: none;\n  padding: 1rem 4rem;\n}\n.form__input--to-do {\n  padding: 0;\n  resize: none;\n}\n.form__input--to-do::-webkit-scrollbar {\n  display: none;\n}\n\n#createToDoForm {\n  margin: 1rem 0;\n  border-radius: 3px;\n  position: relative;\n}\n\ninput[type=date] {\n  width: 16rem;\n}\n\n::-webkit-calendar-picker-indicator {\n  filter: invert(1);\n}\n\n.footer {\n  padding: 1rem;\n  background-color: #292937;\n  color: #fff;\n}\n\n.footer-text-main {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.odin-logo {\n  height: 3.5rem;\n  width: auto;\n  margin-left: 2rem;\n  fill: #fff;\n  color: #fff;\n}\n\n.github-cat {\n  fill: #fff;\n  margin-left: 2rem;\n  transition: all 2s;\n  height: 3.5rem;\n}\n.github-cat:hover {\n  transform: rotate(360deg);\n  fill: #8b5615;\n}\n\n.github-handle {\n  color: #8b5615;\n  font-weight: 400;\n  padding: 0 1rem;\n  text-decoration: none;\n}\n\n.sidebar {\n  grid-template-columns: 1/2;\n  grid-row: 1/3;\n  width: 100%;\n  background-color: #242426;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.project-list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n}\n.project-list__item {\n  padding: 1rem 4rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-list__item.active {\n  font-weight: 400;\n  background-color: #8b5615;\n}\n\n.hero {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background: linear-gradient(to bottom right, #293038, #31475a);\n  z-index: -1;\n}\n\n.grid {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 30rem 1fr;\n  grid-template-rows: 1fr 6rem;\n}\n\n.to-do-container {\n  padding: 4rem 8rem;\n}\n\n.to-do-item {\n  padding: 1rem 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.to-do-item__checkbox {\n  position: absolute;\n  left: -5rem;\n  height: 3rem;\n  width: 3rem;\n  display: none;\n}\n.to-do-item__checkbox-label {\n  height: 2rem;\n  width: 2rem;\n  background-color: #fff;\n  position: absolute;\n  left: -4rem;\n  border-radius: 50%;\n  transition: transform 300ms;\n}\n.to-do-item__checkbox-label::after {\n  content: \"\";\n  height: 50%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #242424;\n  z-index: 3;\n  transform: translate(50%, 50%);\n  visibility: hidden;\n}\n.to-do-item__checkbox-label:hover {\n  cursor: pointer;\n  transform: scale(1.2);\n}\n.to-do-item__checkbox-label.active {\n  visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label {\n  opacity: 0.5;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label::after {\n  visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__text-wrapper {\n  text-decoration: line-through;\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/scss/base/_base.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_icons.scss","webpack://./src/scss/abstracts/_variables.scss","webpack://./src/scss/base/_typography.scss","webpack://./src/scss/base/_utilities.scss","webpack://./src/scss/components/_button.scss","webpack://./src/scss/components/_form.scss","webpack://./src/scss/layout/_footer.scss","webpack://./src/scss/layout/_sidebar.scss","webpack://./src/scss/pages/_home.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,mBAAA;ACCJ;;ADEA;EACI,gBAAA;ACCJ;;ADEA;EACI,sBAAA;EACA,iBAAA;ACCJ;;ADEA;EACI,gBAAA;ACCJ;;ADEA;EACI,qBAAA;EACA,UAAA;EACA,WAAA;EACA,eAAA;EACA,oBAAA;EACA,kBAAA;ACCJ;;AC1BA;;EAEI,UAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,mBAAA;EACA,iCAAA;EACA,kBAAA;AD6BJ;AC3BI;;EACI,eAAA;EACA,qBAAA;EACA,aCVQ;AFwChB;;AG3CA;EACI,eAAA;EACA,oCAAA;EACA,gBAAA;EACA,WAAA;AH8CJ;;AG3CA;EACI,mBAAA;AH8CJ;;AG3CA;EACI,aAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,iBAAA;AH8CJ;AG5CI;EACI,UAAA;AH8CR;;AIjEA;EACI,cAAA;AJoEJ;;AIjEA;EACI,WAAA;AJoEJ;;AIjEA;EACI,UAAA;AJoEJ;;AK7EA;EACI,6BAAA;EACA,sBAAA;EACA,eAAA;EACA,oBAAA;EACA,oBAAA;EACA,cAAA;ALgFJ;;AK7EA;EACI,SAAA;EACA,gBAAA;EACA,+BAAA;EACA,kBAAA;ALgFJ;AK9EI;EACI,eAAA;EACA,WAAA;ALgFR;;AK5EA;EACI,SAAA;EACA,gBAAA;EACA,+BAAA;EACA,kBAAA;EACA,WAAA;EACA,kBAAA;AL+EJ;AK7EI;EACI,eAAA;EACA,WAAA;AL+ER;;AK3EA;EACI,mBAAA;AL8EJ;;AKxEA;EACI,qBAAA;AL2EJ;AKzEI;EACI,qBAAA;EACA,kBAAA;AL2ER;AKxEI;EACI,oBAAA;EACA,kBAAA;AL0ER;AKxEQ;EACI,eAAA;EACA,oCAAA;AL0EZ;;AKrEA;EACI,yBH3DY;AFmIhB;;AMtIA;EACI,kBAAA;ANyIJ;;AMtIA;EACI,gBAAA;ANyIJ;;AMtIA;EAEI,sBAAA;EACA,kBAAA;ANwIJ;AMtII;EACI,eAAA;ANwIR;AMtIQ;EACI,cAAA;ANwIZ;AMtIQ;EACI,iBAAA;ANwIZ;AMpII;EACI,oBAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,6BAAA;EACA,SAAA;EACA,aAAA;EACA,kBAAA;ANsIR;AMnIQ;EACI,UAAA;EACA,YAAA;ANqIZ;AMnIY;EACI,aAAA;ANqIhB;;AM/HA;EACI,cAAA;EACA,kBAAA;EACA,kBAAA;ANkIJ;;AM/HA;EACI,YAAA;ANkIJ;;AM/HA;EACI,iBAAA;ANkIJ;;AO3LA;EACI,aAAA;EAEA,yBAAA;EACA,WAAA;AP6LJ;;AO1LA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;AP6LJ;;AO1LA;EACI,cAAA;EACA,WAAA;EACA,iBAAA;EACA,UAAA;EACA,WAAA;AP6LJ;;AO1LA;EACI,UAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AP6LJ;AO3LI;EACI,yBAAA;EACA,aL1BQ;AFuNhB;;AOxLA;EACI,cLhCY;EKiCZ,gBAAA;EACA,eAAA;EACA,qBAAA;AP2LJ;;AQjOA;EACI,0BAAA;EACA,aAAA;EACA,WAAA;EAEA,yBAAA;EACA,YAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;ARkOJ;;AQ/NA;EAEI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,WAAA;ARiOJ;AQ/NI;EACI,kBAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;ARiOR;;AQ7NA;EACI,gBAAA;EACA,yBN7BY;AF6PhB;;AShQA;EACI,eAAA;EACA,aAAA;EACA,YAAA;EACA,8DAAA;EAEA,WAAA;ATkQJ;;AS/PA;EACI,WAAA;EACA,aAAA;EACA,aAAA;EACA,gCAAA;EACA,4BAAA;ATkQJ;;AS/PA;EACI,kBAAA;ATkQJ;;AS/PA;EACI,eAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;ATkQJ;AShQI;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;ATkQR;AS/PI;EACI,YAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,2BAAA;ATiQR;AS/PQ;EACI,WAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,UAAA;EACA,8BAAA;EACA,kBAAA;ATiQZ;AS9PQ;EACI,eAAA;EACA,qBAAA;ATgQZ;AS7PQ;EACI,mBAAA;AT+PZ;;AS1PA;EACI,YAAA;AT6PJ;;AS1PA;EACI,mBAAA;AT6PJ;;AS1PA;EACI,6BAAA;EACA,YAAA;AT6PJ","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nhtml{\n    font-size: 62.5%;\n}\n\nbody{\n    box-sizing: border-box;\n    user-select: none;\n}\n\nli{\n    list-style: none;\n}\n\n.icon {\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    stroke-width: 0;\n    stroke: currentColor;\n    fill: currentColor;\n}","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  box-sizing: border-box;\n  user-select: none;\n}\n\nli {\n  list-style: none;\n}\n\n.icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n\n.icon-add-solid,\n.icon-plus {\n  fill: #fff;\n  width: 3.5rem;\n  height: 3.5rem;\n  margin-bottom: 3rem;\n  margin-left: 2.5rem;\n  transition: all 500ms ease-in-out;\n  border-radius: 50%;\n}\n.icon-add-solid:hover,\n.icon-plus:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  fill: #8b5615;\n}\n\n.main {\n  font-size: 2rem;\n  font-family: \"Noto Sans\", sans-serif;\n  font-weight: 400;\n  color: #fff;\n}\n\n.heading-primary {\n  margin-bottom: 3rem;\n}\n\n.heading-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 4rem;\n  padding-bottom: 0;\n}\n.heading-container--to-do {\n  padding: 0;\n}\n\n.display-block {\n  display: block;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-90 {\n  width: 90%;\n}\n\nbutton {\n  background-color: transparent;\n  border: 1px solid #fff;\n  font-size: 2rem;\n  font-weight: inherit;\n  font-family: inherit;\n  color: inherit;\n}\n\n.btn-close-project {\n  border: 0;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  position: relative;\n}\n.btn-close-project:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.btn-close-to-do {\n  border: 0;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  right: 4rem;\n  visibility: hidden;\n}\n.btn-close-to-do:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.form:hover .btn-close-to-do {\n  visibility: visible;\n}\n\n.btn-group {\n  display: inline-block;\n}\n.btn-group__label {\n  display: inline-block;\n  margin-right: 1rem;\n}\n.btn-group__btn {\n  padding: 0.5rem 2rem;\n  border-radius: 3px;\n}\n.btn-group__btn:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.priority-btn.active {\n  background-color: #8b5615;\n}\n\nlabel {\n  margin-right: 1rem;\n}\n\n.form-container--createProject {\n  display: \"block\";\n}\n\n.form {\n  border: 1px solid #fff;\n  padding: 2rem 4rem;\n}\n.form__group {\n  padding: 1rem 0;\n}\n.form__group:first-child {\n  padding-top: 0;\n}\n.form__group:last-child {\n  padding-bottom: 0;\n}\n.form__input {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 400;\n  color: inherit;\n  background-color: transparent;\n  border: 0;\n  outline: none;\n  padding: 1rem 4rem;\n}\n.form__input--to-do {\n  padding: 0;\n  resize: none;\n}\n.form__input--to-do::-webkit-scrollbar {\n  display: none;\n}\n\n#createToDoForm {\n  margin: 1rem 0;\n  border-radius: 3px;\n  position: relative;\n}\n\ninput[type=date] {\n  width: 16rem;\n}\n\n::-webkit-calendar-picker-indicator {\n  filter: invert(1);\n}\n\n.footer {\n  padding: 1rem;\n  background-color: #292937;\n  color: #fff;\n}\n\n.footer-text-main {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.odin-logo {\n  height: 3.5rem;\n  width: auto;\n  margin-left: 2rem;\n  fill: #fff;\n  color: #fff;\n}\n\n.github-cat {\n  fill: #fff;\n  margin-left: 2rem;\n  transition: all 2s;\n  height: 3.5rem;\n}\n.github-cat:hover {\n  transform: rotate(360deg);\n  fill: #8b5615;\n}\n\n.github-handle {\n  color: #8b5615;\n  font-weight: 400;\n  padding: 0 1rem;\n  text-decoration: none;\n}\n\n.sidebar {\n  grid-template-columns: 1/2;\n  grid-row: 1/3;\n  width: 100%;\n  background-color: #242426;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.project-list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n}\n.project-list__item {\n  padding: 1rem 4rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-list__item.active {\n  font-weight: 400;\n  background-color: #8b5615;\n}\n\n.hero {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background: linear-gradient(to bottom right, #293038, #31475a);\n  z-index: -1;\n}\n\n.grid {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 30rem 1fr;\n  grid-template-rows: 1fr 6rem;\n}\n\n.to-do-container {\n  padding: 4rem 8rem;\n}\n\n.to-do-item {\n  padding: 1rem 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.to-do-item__checkbox {\n  position: absolute;\n  left: -5rem;\n  height: 3rem;\n  width: 3rem;\n  display: none;\n}\n.to-do-item__checkbox-label {\n  height: 2rem;\n  width: 2rem;\n  background-color: #fff;\n  position: absolute;\n  left: -4rem;\n  border-radius: 50%;\n  transition: transform 300ms;\n}\n.to-do-item__checkbox-label::after {\n  content: \"\";\n  height: 50%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #242424;\n  z-index: 3;\n  transform: translate(50%, 50%);\n  visibility: hidden;\n}\n.to-do-item__checkbox-label:hover {\n  cursor: pointer;\n  transform: scale(1.2);\n}\n.to-do-item__checkbox-label.active {\n  visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label {\n  opacity: 0.5;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label::after {\n  visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__text-wrapper {\n  text-decoration: line-through;\n  opacity: 0.5;\n}",".icon-add-solid,\n.icon-plus{\n    fill: #fff;\n    width: 3.5rem;\n    height: 3.5rem;\n    margin-bottom: 3rem;\n    margin-left: 2.5rem;\n    transition: all 500ms ease-in-out;\n    border-radius: 50%;\n\n    &:hover{\n        cursor: pointer;\n        transform: scale(1.1);\n        fill: $color-primary;\n    }\n}","// COLORS\n\n\n$color-primary: #8b5615;\n\n//FONT\n\n$font-size-default: 1.6rem;",".main{\n    font-size: 2rem;\n    font-family: 'Noto Sans', sans-serif;\n    font-weight: 400;\n    color: #fff;\n}\n\n.heading-primary{\n    margin-bottom: 3rem;\n}\n\n.heading-container{\n    display: flex;\n    align-items: center;\n    width: 100%;\n    padding: 4rem;\n    padding-bottom: 0;\n\n    &--to-do{\n        padding: 0;\n    }\n}\n",".display-block{\n    display: block;\n}\n\n.full-width{\n    width: 100%;\n}\n\n.width-90{\n    width: 90%;\n}","button{\n    background-color: transparent;\n    border: 1px solid #fff;\n    font-size: 2rem;\n    font-weight: inherit;\n    font-family: inherit;\n    color: inherit;\n}\n\n.btn-close-project{\n    border: 0;\n    font-weight: 300;\n    color: rgba(255, 255, 255, 0.5);\n    position: relative;\n\n    &:hover{\n        cursor: pointer;\n        color: #fff;\n    }\n}\n\n.btn-close-to-do{\n    border: 0;\n    font-weight: 300;\n    color: rgba(255, 255, 255, 0.5);\n    position: absolute;\n    right: 4rem;\n    visibility: hidden;\n\n    &:hover{\n        cursor: pointer;\n        color: #fff;\n    }\n}\n\n.form:hover .btn-close-to-do{\n    visibility: visible;\n}\n\n\n\n\n.btn-group{\n    display: inline-block;\n\n    &__label{\n        display: inline-block;\n        margin-right: 1rem;\n    }\n\n    &__btn{\n        padding: .5rem 2rem;\n        border-radius: 3px;\n\n        &:hover{\n            cursor: pointer;\n            background-color: rgba(0, 0, 0, 0.3);\n        }\n    }\n}\n\n.priority-btn.active{\n    background-color: $color-primary;\n}","label{\n    margin-right: 1rem;\n}\n\n.form-container--createProject{\n    display: 'block';\n}\n\n.form{\n\n    border: 1px solid #fff;\n    padding: 2rem 4rem;\n\n    &__group{\n        padding: 1rem 0;\n\n        &:first-child{\n            padding-top: 0;\n        }\n        &:last-child{\n            padding-bottom: 0;\n        }\n    }\n\n    &__input{\n        font-family: inherit;\n        font-size: inherit;\n        font-weight: 400;\n        color: inherit;\n        background-color: transparent;\n        border: 0;\n        outline: none;\n        padding: 1rem 4rem;\n        \n\n        &--to-do{\n            padding: 0;\n            resize: none;\n\n            &::-webkit-scrollbar{\n                display: none;\n            }\n        }\n    }\n}\n\n#createToDoForm{\n    margin: 1rem 0;\n    border-radius: 3px;\n    position: relative;\n}\n\ninput[type=date]{\n    width: 16rem;\n}\n\n::-webkit-calendar-picker-indicator {\n    filter: invert(1);\n}\n",".footer{\n    padding: 1rem;\n    // border-top: 1px solid rgba(0, 0, 0, 0.283);\n    background-color: #292937;\n    color: #fff;\n}\n\n.footer-text-main{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.odin-logo{\n    height: 3.5rem;\n    width: auto;\n    margin-left: 2rem;\n    fill: #fff;\n    color: #fff;\n}\n\n.github-cat{\n    fill: #fff;\n    margin-left: 2rem;\n    transition: all 2s;\n    height: 3.5rem;\n\n    &:hover{\n        transform: rotate(360deg);\n        fill: $color-primary;\n\n    }\n}\n\n.github-handle{\n    color: $color-primary;\n    font-weight: 400;\n    padding: 0 1rem;\n    text-decoration: none;\n}",".sidebar{\n    grid-template-columns: 1/2;\n    grid-row: 1/3;\n    width: 100%;\n\n    background-color: #242426;\n    color: white;\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.project-list{\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    width: 100%;\n\n    &__item{\n        padding: 1rem 4rem;\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n}\n\n.project-list__item.active{\n    font-weight: 400;\n    background-color: $color-primary;\n}",".hero{\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    background: linear-gradient(to bottom right,#293038, #31475a);\n\n    z-index: -1;\n}\n\n.grid{\n    width: 100%;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 30rem 1fr;\n    grid-template-rows: 1fr 6rem;\n}\n\n.to-do-container{\n    padding: 4rem 8rem;\n}\n\n.to-do-item{\n    padding: 1rem 0;\n    display: flex;\n    align-items: center;\n    position: relative;\n\n    &__checkbox{\n        position: absolute;\n        left: -5rem;\n        height: 3rem;\n        width: 3rem;\n        display: none;\n    }\n    \n    &__checkbox-label{\n        height: 2rem;\n        width: 2rem;\n        background-color: #fff;\n        position: absolute;\n        left: -4rem;\n        border-radius: 50%;\n        transition: transform 300ms;\n\n        &::after{\n            content: \"\";\n            height: 50%;\n            aspect-ratio: 1;\n            border-radius: 50%;\n            position: absolute;\n            background-color: #242424;\n            z-index: 3;\n            transform: translate(50%,50%);\n            visibility: hidden;\n        }\n\n        &:hover{\n            cursor: pointer;\n            transform: scale(1.2);\n        }\n\n        &.active{\n            visibility: visible;\n        }\n    }\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label{\n    opacity: .5;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label::after{\n    visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__text-wrapper{\n    text-decoration: line-through;\n    opacity: .5;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ "./src/projectManager.js");
/* harmony import */ var _toDoManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoManager */ "./src/toDoManager.js");



const projectList = document.querySelector('.project-list');
const toDoList = document.querySelector('.to-do-list');
const toDoFormTemplate = document.getElementById('to-do-form-template');


const domManager = (function(){

    function setActiveProjectLink(){
        const projectListItems = document.querySelectorAll('.project-list__item');
        const currentProject = _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject();
        projectListItems.forEach(item => {
            item.classList.remove('active');
            if(item.innerText === currentProject.name){
                item.classList.add('active');
                const closeBtn = document.createElement('button');
                closeBtn.classList.add('btn-close-project');
                closeBtn.append('x');
                item.append(closeBtn);


                closeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(currentProject);
                    domManager.showProjects();
                    domManager.showToDos();
                })
            } 
        })
    }

    function showProjects(){
        while(projectList.firstChild){
            projectList.firstChild.remove();
        }
        
        const projects = _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();

        projects.forEach(project => {
            const projectListItem = document.createElement('li');
            projectListItem.classList.add('project-list__item');
            const projectListTextWrapper = document.createElement('span');
            projectListTextWrapper.classList.add('project-list__text-wrapper');
            projectListTextWrapper.append(project.name);
            projectListItem.append(projectListTextWrapper);
            projectList.appendChild(projectListItem);

            projectListItem.addEventListener('click', (e) => {
                e.stopPropagation();
                if(project === _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject()) return;
                _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].changeCurrentProject(project);
                domManager.showProjects();
                domManager.showToDos();
            });
        
            projectListItem.addEventListener('dblclick', (e)=>{
                e.stopPropagation();
                if(projectList.lastChild.nodeName === 'FORM') return;

                const form = document.createElement('form');
                const formInput = document.createElement('input');
                formInput.classList.add('form__input');
                formInput.setAttribute('type', 'text');
                formInput.value = project.name;
                projectListItem.replaceWith(form);
                form.append(formInput);
                formInput.focus();

                window.addEventListener('mousedown', e => {
                    if(!form.contains(e.target)) form.replaceWith(projectListItem);
                })

                form.addEventListener('submit', (e)=>{
                    e.preventDefault();
                    const projects = _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
                    if(projects.filter(project => project.name === formInput.value).length > 0){
                        form.replaceWith(projectListItem);
                    } else {
                        _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].editProjectName(project, formInput.value)
                        form.remove();
                    }
                    domManager.showProjects();
                    domManager.showToDos();
                })
            })
                        
        })

        setActiveProjectLink();
        
    }

    function showToDos(){
        while(toDoList.firstChild){
            toDoList.firstChild.remove();
        }

        const toDos = _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectToDos();                 // coupling between modules

        let index = 1;

        toDos.forEach(toDo => {

            const toDoItem = document.createElement('li');
            toDoItem.classList.add('to-do-item');
            const toDoTextWrapper = document.createElement('span');
            toDoTextWrapper.classList.add('to-do-item__text-wrapper');
            toDoTextWrapper.append(toDo.title);
            const toDoCheckbox = document.createElement('input');
            toDoCheckbox.classList.add('to-do-item__checkbox');
            toDoCheckbox.setAttribute('type', 'checkbox');
            toDoCheckbox.id = `to-do-item__checkbox--${index}`;
            const toDoCheckboxLabel = document.createElement('label');
            toDoCheckboxLabel.classList.add(`to-do-item__checkbox-label--${index}`);
            toDoCheckboxLabel.classList.add('to-do-item__checkbox-label');
            toDoCheckboxLabel.setAttribute('for', `to-do-item__checkbox--${index}`);

            toDoCheckbox.addEventListener('change', () => {
                toDo.completed = !toDo.completed;
            })

            toDoList.append(toDoItem);
            toDoItem.append(toDoCheckbox, toDoCheckboxLabel, toDoTextWrapper);    
            
            if(toDo.completed === true) toDoCheckbox.checked = true;


            toDoItem.addEventListener('dblclick', ()=>{
                const formTemplate = document.importNode(toDoFormTemplate.content, true);
                toDoItem.replaceWith(formTemplate);
                const form = document.querySelector('#createToDoForm');
                const closeBtn = document.querySelector('.btn-close-to-do');

                const titleInput = document.querySelector('#title');
                const dueDateInput = document.querySelector('#dueDate');
                const descriptionInput = document.querySelector('#description');
                const priorityLow = document.querySelector('#priority-low');
                const priorityMedium = document.querySelector('#priority-medium');
                const priorityHigh = document.querySelector('#priority-high');
                const priorityBtns = document.querySelectorAll('.priority-btn');

                closeBtn.addEventListener('click', e => {
                    _toDoManager__WEBPACK_IMPORTED_MODULE_1__["default"].deleteToDo(_projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject(), toDo);
                    form.remove();
                })

                titleInput.focus();

                priorityLow.addEventListener('click', (e)=>{
                    priorityBtns.forEach(btn => btn.classList.remove('active'))
                    priorityLow.classList.add('active')
                })
                priorityMedium.addEventListener('click', ()=>{
                    priorityBtns.forEach(btn => btn.classList.remove('active'))
                    priorityMedium.classList.add('active')
                })
                priorityHigh.addEventListener('click', ()=>{
                    priorityBtns.forEach(btn => btn.classList.remove('active'))
                    priorityHigh.classList.add('active')
                })

                titleInput.value = toDo.title;
                dueDateInput.value = toDo.dueDate;
                descriptionInput.value = toDo.description;
                priorityBtns.forEach(btn => btn.classList.remove('active'));
                const activeBtn = Array.from(priorityBtns).find(el => el.classList.contains(toDo.priority));
                activeBtn.classList.add('active');


                window.addEventListener('mousedown', e => {
                    if(!form.contains(e.target)) form.replaceWith(toDoItem);
                })

                descriptionInput.addEventListener('keydown', (e)=>{
                    const keyCode = e.code;
                    if(keyCode === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        if (!titleInput.value) return;

                        const activeBtn = Array.from(priorityBtns).find(el => el.classList.contains('active'));
                        const priorityValue = activeBtn.innerText.toLowerCase();
                
                        _toDoManager__WEBPACK_IMPORTED_MODULE_1__["default"].editToDo(
                            toDo,
                            titleInput.value,
                            dueDateInput.value,
                            descriptionInput.value,
                            priorityValue,
                            toDo.completed
                        );
                        
                        domManager.showToDos();
                    }
                })

                titleInput.addEventListener('keydown', (e)=>{
                    const keyCode = e.code;
                    if(keyCode === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        if (!titleInput.value) return;

                        const activeBtn = Array.from(priorityBtns).find(el => el.classList.contains('active'));
                        const priorityValue = activeBtn.innerText.toLowerCase();
                
                        _toDoManager__WEBPACK_IMPORTED_MODULE_1__["default"].editToDo(
                            toDo,
                            titleInput.value,
                            dueDateInput.value,
                            descriptionInput.value,
                            priorityValue,
                            toDo.completed
                        );
                        
                        domManager.showToDos();
                    }
                })
            })

            index++;
        })
    }
    
    return{
        showProjects,
        showToDos
    }
})()


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManager);

/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Project = function(name){
    return {
        name,
        toDoList: []
    };
}

function populateStorage() {
    localStorage.setItem('projects', JSON.stringify(projectManager.getProjects()));  // local storage only supports string type,
                                                                                    // must use JSON.stringify and JSON.parse
    console.dir(JSON.parse(localStorage.getItem('projects')));
}

const projectManager = (function(){        //module
    
    let projects = [];

    const defaultProject = Project('Default Project');
    projects.push(defaultProject);
    let currentProject = defaultProject;

    function getCurrentProject(){
        return currentProject;
    }

    function createProject(name){
        const newProject = Project(name);
        projects.push(newProject);
        localStorage.clear();
        populateStorage();          // save new projects array to storage
        return newProject;
    }

    function getProjects(){
        return projects;
    }

    function setProjects(projectsArray){
        projects = projectsArray;
        currentProject = projectsArray[0];
        console.dir(projects);
    }

    function getProject(name){
        if(projects.find(project => project.name === name)){
            return projects.find(project => project.name === name)
        } else {
            console.log('Could not find project with matching name.')
        }
    }

    function editProjectName(project, newName){
        project.name = newName;
    }

    const getProjectToDos = function(){
        return currentProject.toDoList;
    }

    const changeCurrentProject = function(project){
        currentProject = project;
    }

    const createDefaultProject = function(){
        const defaultProject = Project('Default Project');
        projects.push(defaultProject);
        return defaultProject;
    }

    const deleteProject = function(deletedProject){
        const indexOfDeletedProject = projects.findIndex(project => project.name === deletedProject.name);
        projects.splice(indexOfDeletedProject, 1);

        if(projects.length === 0){
            const defaultProject = createDefaultProject();
            changeCurrentProject(defaultProject);
        } else {
            changeCurrentProject(projects[0]);
        }
    }

    return {
        getCurrentProject,
        createProject,
        getProjects,
        setProjects,
        getProject,
        editProjectName,
        getProjectToDos,
        changeCurrentProject,
        deleteProject,
        createDefaultProject
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectManager);

/***/ }),

/***/ "./src/toDoManager.js":
/*!****************************!*\
  !*** ./src/toDoManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ "./src/projectManager.js");


const ToDoItem = function(title, dueDate, description, priority, completed){       //factory functions
    return {title, dueDate, description, priority, completed};
}

function populateStorage() {
    localStorage.setItem('projects', JSON.stringify(_projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects()));  // local storage only supports string type,
                                                                                    // must use JSON.stringify and JSON.parse
    console.dir(JSON.parse(localStorage.getItem('projects')));
}

const toDoManager = (function(){

    const createToDo = function(project, title, dueDate, description, priority, completed=false){
        const newToDo = ToDoItem(title, dueDate, description, priority, completed);
        project.toDoList.push(newToDo);
        localStorage.clear();
        populateStorage();
    }  

    const getToDo = function(project, title){
        if(project.toDoList.find(item => item.title === title)){
            return project.toDoList.find(item => item.title === title);
        } else {
            console.log('Could not find To Do Item with matching title')
        }
    }
    
    const deleteToDo = function(project, toDoItem){
        const index = project.toDoList.findIndex(item => item.title === toDoItem.title);
        project.toDoList.splice(index, 1);
    }

    const editToDo = function(toDoItem, title, dueDate, description, priority, completed=false){
        const currentProject = _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject();
        const updatedToDo = ToDoItem(title, dueDate, description, priority, completed);
        const index = currentProject.toDoList.findIndex(item => item.title === toDoItem.title);
        currentProject.toDoList.splice(index, 1, updatedToDo);
    }

    return {
        createToDo,
        getToDo,
        deleteToDo,
        editToDo,
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoManager);

/***/ }),

/***/ "./src/sprite.svg":
/*!************************!*\
  !*** ./src/sprite.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/sprite.svg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _sprite_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite.svg */ "./src/sprite.svg");
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager */ "./src/projectManager.js");
/* harmony import */ var _toDoManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDoManager */ "./src/toDoManager.js");
/* harmony import */ var _domManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domManager */ "./src/domManager.js");
//Dependencies List






//DOM Query Selectors

const projectList = document.querySelector('.project-list');
const toDoList = document.querySelector('.to-do-list');
const createProjectBtn = document.querySelector('.create-project-btn');
const toDoFormTemplate = document.getElementById('to-do-form-template');
const createToDoBtn = document.querySelector('.create-to-do-btn');


createProjectBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if(projectList.lastChild.nodeName === 'FORM') return;

    const form = document.createElement('form');
    const formInput = document.createElement('input');
    formInput.classList.add('form__input');
    formInput.setAttribute('type', 'text');
    formInput.setAttribute('placeholder', 'New Project');
    projectList.append(form);
    form.append(formInput);
    formInput.focus();

    window.addEventListener('mousedown', e => {
        if(!form.contains(e.target)) form.remove();
    })

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        if (!formInput.value) return;
        const projects = _projectManager__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
        if(projects.filter(project => project.name === formInput.value).length > 0) return;   // check for existing project name
        _projectManager__WEBPACK_IMPORTED_MODULE_2__["default"].createProject(formInput.value);
        _projectManager__WEBPACK_IMPORTED_MODULE_2__["default"].changeCurrentProject(_projectManager__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(formInput.value));
        _domManager__WEBPACK_IMPORTED_MODULE_4__["default"].showProjects();
        _domManager__WEBPACK_IMPORTED_MODULE_4__["default"].showToDos();
        formInput.value = '';
    })
})

createToDoBtn.addEventListener('click', (e)=>{
    e.stopPropagation();

    const toDoListChildNodeArray = Array.from(toDoList.childNodes);
    if(toDoListChildNodeArray.find(childNode => childNode.id === 'createToDoForm')) return;

    const formTemplate = document.importNode(toDoFormTemplate.content, true);
    toDoList.append(formTemplate);

    const form = document.querySelector('#createToDoForm');
    const closeBtn = document.querySelector('.btn-close-to-do');

    const titleInput = document.querySelector('#title');
    const dueDateInput = document.querySelector('#dueDate');
    const descriptionInput = document.querySelector('#description');
    const priorityLow = document.querySelector('#priority-low');
    const priorityMedium = document.querySelector('#priority-medium');
    const priorityHigh = document.querySelector('#priority-high');
    const priorityBtns = document.querySelectorAll('.priority-btn');

    titleInput.focus();

    closeBtn.addEventListener('click', e => {
        form.remove();
    })

    priorityLow.addEventListener('click', (e)=>{
        priorityBtns.forEach(btn => btn.classList.remove('active'))
        priorityLow.classList.add('active')
    })
    priorityMedium.addEventListener('click', ()=>{
        priorityBtns.forEach(btn => btn.classList.remove('active'))
        priorityMedium.classList.add('active')
    })
    priorityHigh.addEventListener('click', ()=>{
        priorityBtns.forEach(btn => btn.classList.remove('active'))
        priorityHigh.classList.add('active')
    })

    window.addEventListener('mousedown', e => {
        if(!form.contains(e.target)) form.remove();
    })

    const fireableInputs = [descriptionInput, titleInput];

    for(let input of fireableInputs){
        input.addEventListener('keydown', (e)=>{
            const keyCode = e.code;
            if(keyCode === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (!titleInput.value) return;
    
                const activeBtn = Array.from(priorityBtns).find(el => el.classList.contains('active'));
                const priorityValue = activeBtn.innerText.toLowerCase();
        
                _toDoManager__WEBPACK_IMPORTED_MODULE_3__["default"].createToDo(
                    _projectManager__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentProject(), 
                    titleInput.value,
                    dueDateInput.value, 
                    descriptionInput.value, 
                    priorityValue
                );
                _domManager__WEBPACK_IMPORTED_MODULE_4__["default"].showToDos();
            }
        })
    }
})

//Local Storage

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function populateStorage() {
    localStorage.setItem('projects', JSON.stringify(_projectManager__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects()));  // local storage only supports string type,
                                                                                    // must use JSON.stringify and JSON.parse
    console.dir(JSON.parse(localStorage.getItem('projects')));
}

if (storageAvailable('localStorage')) {
    console.log('Yippee! We can use localStorage awesomeness');

    if(!localStorage.getItem('projects')) {
        populateStorage();
    } else {
        const projects = JSON.parse(localStorage.getItem('projects'));
        _projectManager__WEBPACK_IMPORTED_MODULE_2__["default"].setProjects(projects);
        _domManager__WEBPACK_IMPORTED_MODULE_4__["default"].showProjects();
        _domManager__WEBPACK_IMPORTED_MODULE_4__["default"].showToDos();
    }

}
else {
    console.log('Too bad, no localStorage for us');
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0RBQXNCO0FBQ3RDLG9CQUFvQix5RUFBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2REFBb0I7QUFDcEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRCxtRUFBMEIsT0FBTztBQUNyRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsUUFBUSxtRUFBMEI7QUFDbEMsUUFBUSxnRUFBdUI7QUFDL0IsUUFBUSw2REFBb0I7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Njc3MvbWFpbi5zY3NzPzZkMjUiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb21NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvRG9NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMWVtO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBzdHJva2Utd2lkdGg6IDA7XFxuICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLmljb24tYWRkLXNvbGlkLFxcbi5pY29uLXBsdXMge1xcbiAgZmlsbDogI2ZmZjtcXG4gIHdpZHRoOiAzLjVyZW07XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICBtYXJnaW4tbGVmdDogMi41cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uaWNvbi1hZGQtc29saWQ6aG92ZXIsXFxuLmljb24tcGx1czpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBmaWxsOiAjOGI1NjE1O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5oZWFkaW5nLXByaW1hcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLmhlYWRpbmctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcbi5oZWFkaW5nLWNvbnRhaW5lci0tdG8tZG8ge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmRpc3BsYXktYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mdWxsLXdpZHRoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2lkdGgtOTAge1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmJ0bi1jbG9zZS1wcm9qZWN0IHtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYnRuLWNsb3NlLXByb2plY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5idG4tY2xvc2UtdG8tZG8ge1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNHJlbTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmJ0bi1jbG9zZS10by1kbzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvcm06aG92ZXIgLmJ0bi1jbG9zZS10by1kbyB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uYnRuLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmJ0bi1ncm91cF9fbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uYnRuLWdyb3VwX19idG4ge1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5idG4tZ3JvdXBfX2J0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5wcmlvcml0eS1idG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjU2MTU7XFxufVxcblxcbmxhYmVsIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyLS1jcmVhdGVQcm9qZWN0IHtcXG4gIGRpc3BsYXk6IFxcXCJibG9ja1xcXCI7XFxufVxcblxcbi5mb3JtIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICBwYWRkaW5nOiAycmVtIDRyZW07XFxufVxcbi5mb3JtX19ncm91cCB7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcbi5mb3JtX19ncm91cDpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG59XFxuLmZvcm1fX2dyb3VwOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcbi5mb3JtX19pbnB1dCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG59XFxuLmZvcm1fX2lucHV0LS10by1kbyB7XFxuICBwYWRkaW5nOiAwO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG4uZm9ybV9faW5wdXQtLXRvLWRvOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY3JlYXRlVG9Eb0Zvcm0ge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgd2lkdGg6IDE2cmVtO1xcbn1cXG5cXG46Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkzNztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQtbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ub2Rpbi1sb2dvIHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIGZpbGw6ICNmZmY7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmdpdGh1Yi1jYXQge1xcbiAgZmlsbDogI2ZmZjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDJzO1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxufVxcbi5naXRodWItY2F0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICBmaWxsOiAjOGI1NjE1O1xcbn1cXG5cXG4uZ2l0aHViLWhhbmRsZSB7XFxuICBjb2xvcjogIzhiNTYxNTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wcm9qZWN0LWxpc3RfX2l0ZW0ge1xcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtbGlzdF9faXRlbS5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjU2MTU7XFxufVxcblxcbi5oZXJvIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMjkzMDM4LCAjMzE0NzVhKTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHJlbSAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2cmVtO1xcbn1cXG5cXG4udG8tZG8tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDRyZW0gOHJlbTtcXG59XFxuXFxuLnRvLWRvLWl0ZW0ge1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50by1kby1pdGVtX19jaGVja2JveCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtNXJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC00cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xcbn1cXG4udG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0O1xcbiAgei1pbmRleDogMztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsLmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udG8tZG8taXRlbV9fY2hlY2tib3g6Y2hlY2tlZCB+IC50by1kby1pdGVtX19jaGVja2JveC1sYWJlbCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50by1kby1pdGVtX19jaGVja2JveDpjaGVja2VkIH4gLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsOjphZnRlciB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udG8tZG8taXRlbV9fY2hlY2tib3g6Y2hlY2tlZCB+IC50by1kby1pdGVtX190ZXh0LXdyYXBwZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBvcGFjaXR5OiAwLjU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL19pY29ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9hYnN0cmFjdHMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvX3V0aWxpdGllcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19idXR0b24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fZm9ybS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9sYXlvdXQvX2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9sYXlvdXQvX3NpZGViYXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvcGFnZXMvX2hvbWUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FDMUJBOztFQUVJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FENkJKO0FDM0JJOztFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGFDVlE7QUZ3Q2hCOztBRzNDQTtFQUNJLGVBQUE7RUFDQSxv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RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FUa1FKO0FTaFFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FUa1FSO0FTL1BJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QVRpUVI7QVMvUFE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBVGlRWjtBUzlQUTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBVGdRWjtBUzdQUTtFQUNJLG1CQUFBO0FUK1BaOztBUzFQQTtFQUNJLFlBQUE7QVQ2UEo7O0FTMVBBO0VBQ0ksbUJBQUE7QVQ2UEo7O0FTMVBBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0FUNlBKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbHtcXG4gICAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmxpe1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIHN0cm9rZS13aWR0aDogMDtcXG4gICAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XFxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XCIsXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMWVtO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBzdHJva2Utd2lkdGg6IDA7XFxuICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLmljb24tYWRkLXNvbGlkLFxcbi5pY29uLXBsdXMge1xcbiAgZmlsbDogI2ZmZjtcXG4gIHdpZHRoOiAzLjVyZW07XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICBtYXJnaW4tbGVmdDogMi41cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uaWNvbi1hZGQtc29saWQ6aG92ZXIsXFxuLmljb24tcGx1czpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBmaWxsOiAjOGI1NjE1O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5oZWFkaW5nLXByaW1hcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLmhlYWRpbmctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcbi5oZWFkaW5nLWNvbnRhaW5lci0tdG8tZG8ge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmRpc3BsYXktYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mdWxsLXdpZHRoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2lkdGgtOTAge1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmJ0bi1jbG9zZS1wcm9qZWN0IHtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYnRuLWNsb3NlLXByb2plY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5idG4tY2xvc2UtdG8tZG8ge1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNHJlbTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmJ0bi1jbG9zZS10by1kbzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvcm06aG92ZXIgLmJ0bi1jbG9zZS10by1kbyB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uYnRuLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmJ0bi1ncm91cF9fbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uYnRuLWdyb3VwX19idG4ge1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5idG4tZ3JvdXBfX2J0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5wcmlvcml0eS1idG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjU2MTU7XFxufVxcblxcbmxhYmVsIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyLS1jcmVhdGVQcm9qZWN0IHtcXG4gIGRpc3BsYXk6IFxcXCJibG9ja1xcXCI7XFxufVxcblxcbi5mb3JtIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICBwYWRkaW5nOiAycmVtIDRyZW07XFxufVxcbi5mb3JtX19ncm91cCB7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcbi5mb3JtX19ncm91cDpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG59XFxuLmZvcm1fX2dyb3VwOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcbi5mb3JtX19pbnB1dCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG59XFxuLmZvcm1fX2lucHV0LS10by1kbyB7XFxuICBwYWRkaW5nOiAwO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG4uZm9ybV9faW5wdXQtLXRvLWRvOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY3JlYXRlVG9Eb0Zvcm0ge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgd2lkdGg6IDE2cmVtO1xcbn1cXG5cXG46Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkzNztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQtbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ub2Rpbi1sb2dvIHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIGZpbGw6ICNmZmY7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmdpdGh1Yi1jYXQge1xcbiAgZmlsbDogI2ZmZjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDJzO1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxufVxcbi5naXRodWItY2F0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICBmaWxsOiAjOGI1NjE1O1xcbn1cXG5cXG4uZ2l0aHViLWhhbmRsZSB7XFxuICBjb2xvcjogIzhiNTYxNTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wcm9qZWN0LWxpc3RfX2l0ZW0ge1xcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtbGlzdF9faXRlbS5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjU2MTU7XFxufVxcblxcbi5oZXJvIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMjkzMDM4LCAjMzE0NzVhKTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHJlbSAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2cmVtO1xcbn1cXG5cXG4udG8tZG8tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDRyZW0gOHJlbTtcXG59XFxuXFxuLnRvLWRvLWl0ZW0ge1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50by1kby1pdGVtX19jaGVja2JveCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtNXJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC00cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xcbn1cXG4udG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0O1xcbiAgei1pbmRleDogMztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsLmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udG8tZG8taXRlbV9fY2hlY2tib3g6Y2hlY2tlZCB+IC50by1kby1pdGVtX19jaGVja2JveC1sYWJlbCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50by1kby1pdGVtX19jaGVja2JveDpjaGVja2VkIH4gLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsOjphZnRlciB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udG8tZG8taXRlbV9fY2hlY2tib3g6Y2hlY2tlZCB+IC50by1kby1pdGVtX190ZXh0LXdyYXBwZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBvcGFjaXR5OiAwLjU7XFxufVwiLFwiLmljb24tYWRkLXNvbGlkLFxcbi5pY29uLXBsdXN7XFxuICAgIGZpbGw6ICNmZmY7XFxuICAgIHdpZHRoOiAzLjVyZW07XFxuICAgIGhlaWdodDogMy41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICAgIGZpbGw6ICRjb2xvci1wcmltYXJ5O1xcbiAgICB9XFxufVwiLFwiLy8gQ09MT1JTXFxuXFxuXFxuJGNvbG9yLXByaW1hcnk6ICM4YjU2MTU7XFxuXFxuLy9GT05UXFxuXFxuJGZvbnQtc2l6ZS1kZWZhdWx0OiAxLjZyZW07XCIsXCIubWFpbntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaGVhZGluZy1wcmltYXJ5e1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uaGVhZGluZy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG5cXG4gICAgJi0tdG8tZG97XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxufVxcblwiLFwiLmRpc3BsYXktYmxvY2t7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZnVsbC13aWR0aHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53aWR0aC05MHtcXG4gICAgd2lkdGg6IDkwJTtcXG59XCIsXCJidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5idG4tY2xvc2UtcHJvamVjdHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgfVxcbn1cXG5cXG4uYnRuLWNsb3NlLXRvLWRve1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDRyZW07XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICB9XFxufVxcblxcbi5mb3JtOmhvdmVyIC5idG4tY2xvc2UtdG8tZG97XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcblxcblxcblxcbi5idG4tZ3JvdXB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgJl9fbGFiZWx7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgJl9fYnRue1xcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMnJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4ucHJpb3JpdHktYnRuLmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxufVwiLFwibGFiZWx7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyLS1jcmVhdGVQcm9qZWN0e1xcbiAgICBkaXNwbGF5OiAnYmxvY2snO1xcbn1cXG5cXG4uZm9ybXtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gICAgcGFkZGluZzogMnJlbSA0cmVtO1xcblxcbiAgICAmX19ncm91cHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcXG5cXG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XFxuICAgICAgICB9XFxuICAgICAgICAmOmxhc3QtY2hpbGR7XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9faW5wdXR7XFxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG4gICAgICAgIFxcblxcbiAgICAgICAgJi0tdG8tZG97XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XFxuXFxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbiNjcmVhdGVUb0RvRm9ybXtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWRhdGVde1xcbiAgICB3aWR0aDogMTZyZW07XFxufVxcblxcbjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblwiLFwiLmZvb3RlcntcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yODMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTM3O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvb3Rlci10ZXh0LW1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ub2Rpbi1sb2dve1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICBmaWxsOiAjZmZmO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmdpdGh1Yi1jYXR7XFxuICAgIGZpbGw6ICNmZmY7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnM7XFxuICAgIGhlaWdodDogMy41cmVtO1xcblxcbiAgICAmOmhvdmVye1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgIGZpbGw6ICRjb2xvci1wcmltYXJ5O1xcblxcbiAgICB9XFxufVxcblxcbi5naXRodWItaGFuZGxle1xcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cIixcIi5zaWRlYmFye1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0LWxpc3R7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICZfX2l0ZW17XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDRyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxufVxcblxcbi5wcm9qZWN0LWxpc3RfX2l0ZW0uYWN0aXZle1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG59XCIsXCIuaGVyb3tcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIzI5MzAzOCwgIzMxNDc1YSk7XFxuXFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uZ3JpZHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzByZW0gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2cmVtO1xcbn1cXG5cXG4udG8tZG8tY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiA0cmVtIDhyZW07XFxufVxcblxcbi50by1kby1pdGVte1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgJl9fY2hlY2tib3h7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAtNXJlbTtcXG4gICAgICAgIGhlaWdodDogM3JlbTtcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICBcXG4gICAgJl9fY2hlY2tib3gtbGFiZWx7XFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgICB3aWR0aDogMnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAtNHJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcXG5cXG4gICAgICAgICY6OmFmdGVye1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjQ7XFxuICAgICAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsNTAlKTtcXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLmFjdGl2ZXtcXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi50by1kby1pdGVtX19jaGVja2JveDpjaGVja2VkIH4gLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVse1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94OmNoZWNrZWQgfiAudG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWw6OmFmdGVye1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udG8tZG8taXRlbV9fY2hlY2tib3g6Y2hlY2tlZCB+IC50by1kby1pdGVtX190ZXh0LXdyYXBwZXJ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiO1xuaW1wb3J0IHRvRG9NYW5hZ2VyIGZyb20gXCIuL3RvRG9NYW5hZ2VyXCI7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuY29uc3QgdG9Eb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdCcpO1xuY29uc3QgdG9Eb0Zvcm1UZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0by1kby1mb3JtLXRlbXBsYXRlJyk7XG5cblxuY29uc3QgZG9tTWFuYWdlciA9IChmdW5jdGlvbigpe1xuXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdExpbmsoKXtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWxpc3RfX2l0ZW0nKTtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICBwcm9qZWN0TGlzdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYoaXRlbS5pbm5lclRleHQgPT09IGN1cnJlbnRQcm9qZWN0Lm5hbWUpe1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tY2xvc2UtcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFwcGVuZCgneCcpO1xuICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kKGNsb3NlQnRuKTtcblxuXG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5kZWxldGVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93UHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UHJvamVjdHMoKXtcbiAgICAgICAgd2hpbGUocHJvamVjdExpc3QuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCk7XG5cbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0X19pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdFRleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcHJvamVjdExpc3RUZXh0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3RfX3RleHQtd3JhcHBlcicpO1xuICAgICAgICAgICAgcHJvamVjdExpc3RUZXh0V3JhcHBlci5hcHBlbmQocHJvamVjdC5uYW1lKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5hcHBlbmQocHJvamVjdExpc3RUZXh0V3JhcHBlcik7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdEl0ZW0pO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYocHJvamVjdCA9PT0gcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmNoYW5nZUN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIuc2hvd1Byb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChlKT0+e1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYocHJvamVjdExpc3QubGFzdENoaWxkLm5vZGVOYW1lID09PSAnRk9STScpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybV9faW5wdXQnKTtcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXQudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtLnJlcGxhY2VXaXRoKGZvcm0pO1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKGZvcm1JbnB1dCk7XG4gICAgICAgICAgICAgICAgZm9ybUlucHV0LmZvY3VzKCk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFmb3JtLmNvbnRhaW5zKGUudGFyZ2V0KSkgZm9ybS5yZXBsYWNlV2l0aChwcm9qZWN0TGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBmb3JtSW5wdXQudmFsdWUpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBsYWNlV2l0aChwcm9qZWN0TGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuZWRpdFByb2plY3ROYW1lKHByb2plY3QsIGZvcm1JbnB1dC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93UHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIHNldEFjdGl2ZVByb2plY3RMaW5rKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dUb0Rvcygpe1xuICAgICAgICB3aGlsZSh0b0RvTGlzdC5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHRvRG9MaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b0RvcyA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RUb0RvcygpOyAgICAgICAgICAgICAgICAgLy8gY291cGxpbmcgYmV0d2VlbiBtb2R1bGVzXG5cbiAgICAgICAgbGV0IGluZGV4ID0gMTtcblxuICAgICAgICB0b0Rvcy5mb3JFYWNoKHRvRG8gPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICB0b0RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0by1kby1pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCB0b0RvVGV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0b0RvVGV4dFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndG8tZG8taXRlbV9fdGV4dC13cmFwcGVyJyk7XG4gICAgICAgICAgICB0b0RvVGV4dFdyYXBwZXIuYXBwZW5kKHRvRG8udGl0bGUpO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRvRG9DaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0by1kby1pdGVtX19jaGVja2JveCcpO1xuICAgICAgICAgICAgdG9Eb0NoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgdG9Eb0NoZWNrYm94LmlkID0gYHRvLWRvLWl0ZW1fX2NoZWNrYm94LS0ke2luZGV4fWA7XG4gICAgICAgICAgICBjb25zdCB0b0RvQ2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB0b0RvQ2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKGB0by1kby1pdGVtX19jaGVja2JveC1sYWJlbC0tJHtpbmRleH1gKTtcbiAgICAgICAgICAgIHRvRG9DaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsJyk7XG4gICAgICAgICAgICB0b0RvQ2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0by1kby1pdGVtX19jaGVja2JveC0tJHtpbmRleH1gKTtcblxuICAgICAgICAgICAgdG9Eb0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0b0RvLmNvbXBsZXRlZCA9ICF0b0RvLmNvbXBsZXRlZDtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRvRG9MaXN0LmFwcGVuZCh0b0RvSXRlbSk7XG4gICAgICAgICAgICB0b0RvSXRlbS5hcHBlbmQodG9Eb0NoZWNrYm94LCB0b0RvQ2hlY2tib3hMYWJlbCwgdG9Eb1RleHRXcmFwcGVyKTsgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRvRG8uY29tcGxldGVkID09PSB0cnVlKSB0b0RvQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG5cblxuICAgICAgICAgICAgdG9Eb0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1UZW1wbGF0ZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodG9Eb0Zvcm1UZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS5yZXBsYWNlV2l0aChmb3JtVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlVG9Eb0Zvcm0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2xvc2UtdG8tZG8nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1sb3cnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1tZWRpdW0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHktaGlnaCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmlvcml0eS1idG4nKTtcblxuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9NYW5hZ2VyLmRlbGV0ZVRvRG8ocHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKSwgdG9Ebyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcblxuICAgICAgICAgICAgICAgIHByaW9yaXR5TG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TG93LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBwcmlvcml0eU1lZGl1bS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TWVkaXVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBwcmlvcml0eUhpZ2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUhpZ2guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvRG8udGl0bGU7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdG9Eby5kdWVEYXRlO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0b0RvLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUJ0biA9IEFycmF5LmZyb20ocHJpb3JpdHlCdG5zKS5maW5kKGVsID0+IGVsLmNsYXNzTGlzdC5jb250YWlucyh0b0RvLnByaW9yaXR5KSk7XG4gICAgICAgICAgICAgICAgYWN0aXZlQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFmb3JtLmNvbnRhaW5zKGUudGFyZ2V0KSkgZm9ybS5yZXBsYWNlV2l0aCh0b0RvSXRlbSk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlDb2RlID0gZS5jb2RlO1xuICAgICAgICAgICAgICAgICAgICBpZihrZXlDb2RlID09PSAnRW50ZXInICYmICFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRpdGxlSW5wdXQudmFsdWUpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlQnRuID0gQXJyYXkuZnJvbShwcmlvcml0eUJ0bnMpLmZpbmQoZWwgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gYWN0aXZlQnRuLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb01hbmFnZXIuZWRpdFRvRG8oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9EbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eby5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIuc2hvd1RvRG9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmNvZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmKGtleUNvZGUgPT09ICdFbnRlcicgJiYgIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGl0bGVJbnB1dC52YWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVCdG4gPSBBcnJheS5mcm9tKHByaW9yaXR5QnRucykuZmluZChlbCA9PiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBhY3RpdmVCdG4uaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RvTWFuYWdlci5lZGl0VG9EbyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0RvLmNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICByZXR1cm57XG4gICAgICAgIHNob3dQcm9qZWN0cyxcbiAgICAgICAgc2hvd1RvRG9zXG4gICAgfVxufSkoKVxuXG5cbmV4cG9ydCBkZWZhdWx0IGRvbU1hbmFnZXIiLCJjb25zdCBQcm9qZWN0ID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdG9Eb0xpc3Q6IFtdXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCkpKTsgIC8vIGxvY2FsIHN0b3JhZ2Ugb25seSBzdXBwb3J0cyBzdHJpbmcgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG11c3QgdXNlIEpTT04uc3RyaW5naWZ5IGFuZCBKU09OLnBhcnNlXG4gICAgY29uc29sZS5kaXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpO1xufVxuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9IChmdW5jdGlvbigpeyAgICAgICAgLy9tb2R1bGVcbiAgICBcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0Jyk7XG4gICAgcHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZGVmYXVsdFByb2plY3Q7XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpe1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKXtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QobmFtZSk7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTsgICAgICAgICAgLy8gc2F2ZSBuZXcgcHJvamVjdHMgYXJyYXkgdG8gc3RvcmFnZVxuICAgICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0cygpe1xuICAgICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UHJvamVjdHMocHJvamVjdHNBcnJheSl7XG4gICAgICAgIHByb2plY3RzID0gcHJvamVjdHNBcnJheTtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c0FycmF5WzBdO1xuICAgICAgICBjb25zb2xlLmRpcihwcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdChuYW1lKXtcbiAgICAgICAgaWYocHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSkpe1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IGZpbmQgcHJvamVjdCB3aXRoIG1hdGNoaW5nIG5hbWUuJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVkaXRQcm9qZWN0TmFtZShwcm9qZWN0LCBuZXdOYW1lKXtcbiAgICAgICAgcHJvamVjdC5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0VG9Eb3MgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3QudG9Eb0xpc3Q7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlQ3VycmVudFByb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0KXtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZURlZmF1bHRQcm9qZWN0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBQcm9qZWN0KCdEZWZhdWx0IFByb2plY3QnKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gICAgICAgIHJldHVybiBkZWZhdWx0UHJvamVjdDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24oZGVsZXRlZFByb2plY3Qpe1xuICAgICAgICBjb25zdCBpbmRleE9mRGVsZXRlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IGRlbGV0ZWRQcm9qZWN0Lm5hbWUpO1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXhPZkRlbGV0ZWRQcm9qZWN0LCAxKTtcblxuICAgICAgICBpZihwcm9qZWN0cy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBjcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xuICAgICAgICAgICAgY2hhbmdlQ3VycmVudFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhbmdlQ3VycmVudFByb2plY3QocHJvamVjdHNbMF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QsXG4gICAgICAgIGNyZWF0ZVByb2plY3QsXG4gICAgICAgIGdldFByb2plY3RzLFxuICAgICAgICBzZXRQcm9qZWN0cyxcbiAgICAgICAgZ2V0UHJvamVjdCxcbiAgICAgICAgZWRpdFByb2plY3ROYW1lLFxuICAgICAgICBnZXRQcm9qZWN0VG9Eb3MsXG4gICAgICAgIGNoYW5nZUN1cnJlbnRQcm9qZWN0LFxuICAgICAgICBkZWxldGVQcm9qZWN0LFxuICAgICAgICBjcmVhdGVEZWZhdWx0UHJvamVjdFxuICAgIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1hbmFnZXIiLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcblxuY29uc3QgVG9Eb0l0ZW0gPSBmdW5jdGlvbih0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWQpeyAgICAgICAvL2ZhY3RvcnkgZnVuY3Rpb25zXG4gICAgcmV0dXJuIHt0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWR9O1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKSkpOyAgLy8gbG9jYWwgc3RvcmFnZSBvbmx5IHN1cHBvcnRzIHN0cmluZyB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbXVzdCB1c2UgSlNPTi5zdHJpbmdpZnkgYW5kIEpTT04ucGFyc2VcbiAgICBjb25zb2xlLmRpcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSk7XG59XG5cbmNvbnN0IHRvRG9NYW5hZ2VyID0gKGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCBjcmVhdGVUb0RvID0gZnVuY3Rpb24ocHJvamVjdCwgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkPWZhbHNlKXtcbiAgICAgICAgY29uc3QgbmV3VG9EbyA9IFRvRG9JdGVtKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNvbXBsZXRlZCk7XG4gICAgICAgIHByb2plY3QudG9Eb0xpc3QucHVzaChuZXdUb0RvKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgIH0gIFxuXG4gICAgY29uc3QgZ2V0VG9EbyA9IGZ1bmN0aW9uKHByb2plY3QsIHRpdGxlKXtcbiAgICAgICAgaWYocHJvamVjdC50b0RvTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdGl0bGUpKXtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0LnRvRG9MaXN0LmZpbmQoaXRlbSA9PiBpdGVtLnRpdGxlID09PSB0aXRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IGZpbmQgVG8gRG8gSXRlbSB3aXRoIG1hdGNoaW5nIHRpdGxlJylcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZWxldGVUb0RvID0gZnVuY3Rpb24ocHJvamVjdCwgdG9Eb0l0ZW0pe1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3QudG9Eb0xpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdG9Eb0l0ZW0udGl0bGUpO1xuICAgICAgICBwcm9qZWN0LnRvRG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdFRvRG8gPSBmdW5jdGlvbih0b0RvSXRlbSwgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkPWZhbHNlKXtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICBjb25zdCB1cGRhdGVkVG9EbyA9IFRvRG9JdGVtKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNvbXBsZXRlZCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudFByb2plY3QudG9Eb0xpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdG9Eb0l0ZW0udGl0bGUpO1xuICAgICAgICBjdXJyZW50UHJvamVjdC50b0RvTGlzdC5zcGxpY2UoaW5kZXgsIDEsIHVwZGF0ZWRUb0RvKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVUb0RvLFxuICAgICAgICBnZXRUb0RvLFxuICAgICAgICBkZWxldGVUb0RvLFxuICAgICAgICBlZGl0VG9EbyxcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IHRvRG9NYW5hZ2VyIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vRGVwZW5kZW5jaWVzIExpc3RcbmltcG9ydCBcIi4vc2Nzcy9tYWluLnNjc3NcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcIi4vc3ByaXRlLnN2Z1wiO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5pbXBvcnQgdG9Eb01hbmFnZXIgZnJvbSBcIi4vdG9Eb01hbmFnZXJcIjtcbmltcG9ydCBkb21NYW5hZ2VyIGZyb20gXCIuL2RvbU1hbmFnZXJcIjtcblxuLy9ET00gUXVlcnkgU2VsZWN0b3JzXG5cbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuY29uc3QgdG9Eb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdCcpO1xuY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcHJvamVjdC1idG4nKTtcbmNvbnN0IHRvRG9Gb3JtVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG8tZG8tZm9ybS10ZW1wbGF0ZScpO1xuY29uc3QgY3JlYXRlVG9Eb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdG8tZG8tYnRuJyk7XG5cblxuY3JlYXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZihwcm9qZWN0TGlzdC5sYXN0Q2hpbGQubm9kZU5hbWUgPT09ICdGT1JNJykgcmV0dXJuO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBmb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGZvcm1JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtX19pbnB1dCcpO1xuICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05ldyBQcm9qZWN0Jyk7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kKGZvcm0pO1xuICAgIGZvcm0uYXBwZW5kKGZvcm1JbnB1dCk7XG4gICAgZm9ybUlucHV0LmZvY3VzKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgICAgIGlmKCFmb3JtLmNvbnRhaW5zKGUudGFyZ2V0KSkgZm9ybS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIWZvcm1JbnB1dC52YWx1ZSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCk7XG4gICAgICAgIGlmKHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gZm9ybUlucHV0LnZhbHVlKS5sZW5ndGggPiAwKSByZXR1cm47ICAgLy8gY2hlY2sgZm9yIGV4aXN0aW5nIHByb2plY3QgbmFtZVxuICAgICAgICBwcm9qZWN0TWFuYWdlci5jcmVhdGVQcm9qZWN0KGZvcm1JbnB1dC52YWx1ZSk7XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLmNoYW5nZUN1cnJlbnRQcm9qZWN0KHByb2plY3RNYW5hZ2VyLmdldFByb2plY3QoZm9ybUlucHV0LnZhbHVlKSk7XG4gICAgICAgIGRvbU1hbmFnZXIuc2hvd1Byb2plY3RzKCk7XG4gICAgICAgIGRvbU1hbmFnZXIuc2hvd1RvRG9zKCk7XG4gICAgICAgIGZvcm1JbnB1dC52YWx1ZSA9ICcnO1xuICAgIH0pXG59KVxuXG5jcmVhdGVUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGNvbnN0IHRvRG9MaXN0Q2hpbGROb2RlQXJyYXkgPSBBcnJheS5mcm9tKHRvRG9MaXN0LmNoaWxkTm9kZXMpO1xuICAgIGlmKHRvRG9MaXN0Q2hpbGROb2RlQXJyYXkuZmluZChjaGlsZE5vZGUgPT4gY2hpbGROb2RlLmlkID09PSAnY3JlYXRlVG9Eb0Zvcm0nKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgZm9ybVRlbXBsYXRlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0b0RvRm9ybVRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgIHRvRG9MaXN0LmFwcGVuZChmb3JtVGVtcGxhdGUpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVUb0RvRm9ybScpO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jbG9zZS10by1kbycpO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHByaW9yaXR5TG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LWxvdycpO1xuICAgIGNvbnN0IHByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LW1lZGl1bScpO1xuICAgIGNvbnN0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1oaWdoJyk7XG4gICAgY29uc3QgcHJpb3JpdHlCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaW9yaXR5LWJ0bicpO1xuXG4gICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZm9ybS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgcHJpb3JpdHlMb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgcHJpb3JpdHlCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcbiAgICAgICAgcHJpb3JpdHlMb3cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9KVxuICAgIHByaW9yaXR5TWVkaXVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgcHJpb3JpdHlCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcbiAgICAgICAgcHJpb3JpdHlNZWRpdW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9KVxuICAgIHByaW9yaXR5SGlnaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgICAgIHByaW9yaXR5SGlnaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgICAgIGlmKCFmb3JtLmNvbnRhaW5zKGUudGFyZ2V0KSkgZm9ybS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgY29uc3QgZmlyZWFibGVJbnB1dHMgPSBbZGVzY3JpcHRpb25JbnB1dCwgdGl0bGVJbnB1dF07XG5cbiAgICBmb3IobGV0IGlucHV0IG9mIGZpcmVhYmxlSW5wdXRzKXtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKT0+e1xuICAgICAgICAgICAgY29uc3Qga2V5Q29kZSA9IGUuY29kZTtcbiAgICAgICAgICAgIGlmKGtleUNvZGUgPT09ICdFbnRlcicgJiYgIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aXRsZUlucHV0LnZhbHVlKSByZXR1cm47XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlQnRuID0gQXJyYXkuZnJvbShwcmlvcml0eUJ0bnMpLmZpbmQoZWwgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IGFjdGl2ZUJ0bi5pbm5lclRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgdG9Eb01hbmFnZXIuY3JlYXRlVG9EbyhcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKSwgXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSwgXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVZhbHVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLnNob3dUb0RvcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn0pXG5cbi8vTG9jYWwgU3RvcmFnZVxuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICB2YXIgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCkpKTsgIC8vIGxvY2FsIHN0b3JhZ2Ugb25seSBzdXBwb3J0cyBzdHJpbmcgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG11c3QgdXNlIEpTT04uc3RyaW5naWZ5IGFuZCBKU09OLnBhcnNlXG4gICAgY29uc29sZS5kaXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpO1xufVxuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICBjb25zb2xlLmxvZygnWWlwcGVlISBXZSBjYW4gdXNlIGxvY2FsU3RvcmFnZSBhd2Vzb21lbmVzcycpO1xuXG4gICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLnNldFByb2plY3RzKHByb2plY3RzKTtcbiAgICAgICAgZG9tTWFuYWdlci5zaG93UHJvamVjdHMoKTtcbiAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICB9XG5cbn1cbmVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdUb28gYmFkLCBubyBsb2NhbFN0b3JhZ2UgZm9yIHVzJyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9