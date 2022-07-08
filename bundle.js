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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  box-sizing: border-box;\n  user-select: none;\n}\n\nli {\n  list-style: none;\n}\n\n.icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n\n.icon-add-solid,\n.icon-plus {\n  fill: #fff;\n  width: 3.5rem;\n  height: 3.5rem;\n  margin-bottom: 3rem;\n  margin-left: 2.5rem;\n  transition: all 500ms ease-in-out;\n  border-radius: 50%;\n}\n.icon-add-solid:hover,\n.icon-plus:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  fill: #8b5615;\n}\n\n.main {\n  font-size: 2rem;\n  font-family: \"Noto Sans\", sans-serif;\n  font-weight: 400;\n  color: #fff;\n}\n\n.heading-primary {\n  margin-bottom: 3rem;\n}\n\n.heading-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 4rem;\n  padding-bottom: 0;\n}\n.heading-container--to-do {\n  padding: 0;\n}\n\n.display-block {\n  display: block;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-90 {\n  width: 90%;\n}\n\nbutton {\n  background-color: transparent;\n  border: 1px solid #fff;\n  font-size: 2rem;\n  font-weight: inherit;\n  font-family: inherit;\n  color: inherit;\n}\n\n.btn-close-project {\n  border: 0;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  position: relative;\n}\n.btn-close-project:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.btn-close-to-do {\n  border: 0;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  right: 4rem;\n  visibility: hidden;\n}\n.btn-close-to-do:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.form:hover .btn-close-to-do {\n  visibility: visible;\n}\n\n.btn-group {\n  display: inline-block;\n}\n.btn-group__label {\n  display: inline-block;\n  margin-right: 1rem;\n}\n.btn-group__btn {\n  padding: 0.5rem 2rem;\n  border-radius: 3px;\n}\n.btn-group__btn:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.priority-btn.active {\n  background-color: #8b5615;\n}\n\nlabel {\n  margin-right: 1rem;\n}\n\n.form-container--createProject {\n  display: \"block\";\n}\n\n.form {\n  border: 1px solid #fff;\n  padding: 2rem 4rem;\n}\n.form__group {\n  padding: 1rem 0;\n}\n.form__group:first-child {\n  padding-top: 0;\n}\n.form__group:last-child {\n  padding-bottom: 0;\n}\n.form__input {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 400;\n  color: inherit;\n  background-color: transparent;\n  border: 0;\n  outline: none;\n  padding: 1rem 4rem;\n}\n.form__input--to-do {\n  padding: 0;\n  resize: none;\n}\n.form__input--to-do::-webkit-scrollbar {\n  display: none;\n}\n\n#createToDoForm {\n  margin: 1rem 0;\n  border-radius: 3px;\n  position: relative;\n}\n\ninput[type=date] {\n  width: 16rem;\n}\n\n::-webkit-calendar-picker-indicator {\n  filter: invert(1);\n}\n\n.footer {\n  padding: 1rem;\n  background-color: #292937;\n  color: #fff;\n}\n\n.footer-text-main {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.odin-logo {\n  height: 3.5rem;\n  width: auto;\n  margin-left: 2rem;\n  fill: #fff;\n  color: #fff;\n}\n\n.github-cat {\n  fill: #fff;\n  margin-left: 2rem;\n  transition: all 2s;\n  height: 3.5rem;\n}\n.github-cat:hover {\n  transform: rotate(360deg);\n  fill: #8b5615;\n}\n\n.github-handle {\n  color: #8b5615;\n  font-weight: 400;\n  padding: 0 1rem;\n  text-decoration: none;\n}\n\n.sidebar {\n  grid-template-columns: 1/2;\n  grid-row: 1/3;\n  width: 100%;\n  background-color: #242426;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.project-list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n}\n.project-list__item {\n  padding: 1rem 4rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-list__item.active {\n  font-weight: 400;\n  background-color: #8b5615;\n}\n\n.hero {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background: linear-gradient(to bottom right, #293038, #31475a);\n  z-index: -1;\n}\n\n.grid {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 30rem 1fr;\n  grid-template-rows: 1fr 6rem;\n}\n\n.to-do-container {\n  padding: 4rem 8rem;\n}\n\n.to-do-item {\n  padding: 1rem 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.to-do-item__checkbox {\n  position: absolute;\n  left: -5rem;\n  height: 3rem;\n  width: 3rem;\n  display: none;\n}\n.to-do-item__checkbox-label {\n  height: 2rem;\n  width: 2rem;\n  background-color: #fff;\n  position: absolute;\n  left: -4rem;\n  border-radius: 50%;\n  transition: transform 300ms;\n}\n.to-do-item__checkbox-label::after {\n  content: \"\";\n  height: 50%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #242424;\n  z-index: 3;\n  transform: translate(50%, 50%);\n  visibility: hidden;\n}\n.to-do-item__checkbox-label:hover {\n  cursor: pointer;\n  transform: scale(1.2);\n}\n.to-do-item__checkbox-label.active {\n  visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label {\n  opacity: 0.5;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label::after {\n  visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__text-wrapper {\n  text-decoration: line-through;\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/scss/base/_base.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_icons.scss","webpack://./src/scss/abstracts/_variables.scss","webpack://./src/scss/base/_typography.scss","webpack://./src/scss/base/_utilities.scss","webpack://./src/scss/components/_button.scss","webpack://./src/scss/components/_form.scss","webpack://./src/scss/layout/_footer.scss","webpack://./src/scss/layout/_sidebar.scss","webpack://./src/scss/pages/_home.scss"],"names":[],"mappings":"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","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nhtml{\n    font-size: 62.5%;\n}\n\nbody{\n    box-sizing: border-box;\n    user-select: none;\n}\n\nli{\n    list-style: none;\n}\n\n.icon {\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    stroke-width: 0;\n    stroke: currentColor;\n    fill: currentColor;\n}","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  box-sizing: border-box;\n  user-select: none;\n}\n\nli {\n  list-style: none;\n}\n\n.icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n\n.icon-add-solid,\n.icon-plus {\n  fill: #fff;\n  width: 3.5rem;\n  height: 3.5rem;\n  margin-bottom: 3rem;\n  margin-left: 2.5rem;\n  transition: all 500ms ease-in-out;\n  border-radius: 50%;\n}\n.icon-add-solid:hover,\n.icon-plus:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  fill: #8b5615;\n}\n\n.main {\n  font-size: 2rem;\n  font-family: \"Noto Sans\", sans-serif;\n  font-weight: 400;\n  color: #fff;\n}\n\n.heading-primary {\n  margin-bottom: 3rem;\n}\n\n.heading-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 4rem;\n  padding-bottom: 0;\n}\n.heading-container--to-do {\n  padding: 0;\n}\n\n.display-block {\n  display: block;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-90 {\n  width: 90%;\n}\n\nbutton {\n  background-color: transparent;\n  border: 1px solid #fff;\n  font-size: 2rem;\n  font-weight: inherit;\n  font-family: inherit;\n  color: inherit;\n}\n\n.btn-close-project {\n  border: 0;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  position: relative;\n}\n.btn-close-project:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.btn-close-to-do {\n  border: 0;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  right: 4rem;\n  visibility: hidden;\n}\n.btn-close-to-do:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.form:hover .btn-close-to-do {\n  visibility: visible;\n}\n\n.btn-group {\n  display: inline-block;\n}\n.btn-group__label {\n  display: inline-block;\n  margin-right: 1rem;\n}\n.btn-group__btn {\n  padding: 0.5rem 2rem;\n  border-radius: 3px;\n}\n.btn-group__btn:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.priority-btn.active {\n  background-color: #8b5615;\n}\n\nlabel {\n  margin-right: 1rem;\n}\n\n.form-container--createProject {\n  display: \"block\";\n}\n\n.form {\n  border: 1px solid #fff;\n  padding: 2rem 4rem;\n}\n.form__group {\n  padding: 1rem 0;\n}\n.form__group:first-child {\n  padding-top: 0;\n}\n.form__group:last-child {\n  padding-bottom: 0;\n}\n.form__input {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 400;\n  color: inherit;\n  background-color: transparent;\n  border: 0;\n  outline: none;\n  padding: 1rem 4rem;\n}\n.form__input--to-do {\n  padding: 0;\n  resize: none;\n}\n.form__input--to-do::-webkit-scrollbar {\n  display: none;\n}\n\n#createToDoForm {\n  margin: 1rem 0;\n  border-radius: 3px;\n  position: relative;\n}\n\ninput[type=date] {\n  width: 16rem;\n}\n\n::-webkit-calendar-picker-indicator {\n  filter: invert(1);\n}\n\n.footer {\n  padding: 1rem;\n  background-color: #292937;\n  color: #fff;\n}\n\n.footer-text-main {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.odin-logo {\n  height: 3.5rem;\n  width: auto;\n  margin-left: 2rem;\n  fill: #fff;\n  color: #fff;\n}\n\n.github-cat {\n  fill: #fff;\n  margin-left: 2rem;\n  transition: all 2s;\n  height: 3.5rem;\n}\n.github-cat:hover {\n  transform: rotate(360deg);\n  fill: #8b5615;\n}\n\n.github-handle {\n  color: #8b5615;\n  font-weight: 400;\n  padding: 0 1rem;\n  text-decoration: none;\n}\n\n.sidebar {\n  grid-template-columns: 1/2;\n  grid-row: 1/3;\n  width: 100%;\n  background-color: #242426;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.project-list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n}\n.project-list__item {\n  padding: 1rem 4rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-list__item.active {\n  font-weight: 400;\n  background-color: #8b5615;\n}\n\n.hero {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background: linear-gradient(to bottom right, #293038, #31475a);\n  z-index: -1;\n}\n\n.grid {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 30rem 1fr;\n  grid-template-rows: 1fr 6rem;\n}\n\n.to-do-container {\n  padding: 4rem 8rem;\n}\n\n.to-do-item {\n  padding: 1rem 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.to-do-item__checkbox {\n  position: absolute;\n  left: -5rem;\n  height: 3rem;\n  width: 3rem;\n  display: none;\n}\n.to-do-item__checkbox-label {\n  height: 2rem;\n  width: 2rem;\n  background-color: #fff;\n  position: absolute;\n  left: -4rem;\n  border-radius: 50%;\n  transition: transform 300ms;\n}\n.to-do-item__checkbox-label::after {\n  content: \"\";\n  height: 50%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #242424;\n  z-index: 3;\n  transform: translate(50%, 50%);\n  visibility: hidden;\n}\n.to-do-item__checkbox-label:hover {\n  cursor: pointer;\n  transform: scale(1.2);\n}\n.to-do-item__checkbox-label.active {\n  visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label {\n  opacity: 0.5;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label::after {\n  visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__text-wrapper {\n  text-decoration: line-through;\n  opacity: 0.5;\n}",".icon-add-solid,\n.icon-plus{\n    fill: #fff;\n    width: 3.5rem;\n    height: 3.5rem;\n    margin-bottom: 3rem;\n    margin-left: 2.5rem;\n    transition: all 500ms ease-in-out;\n    border-radius: 50%;\n\n    &:hover{\n        cursor: pointer;\n        transform: scale(1.1);\n        fill: $color-primary;\n    }\n}","// COLORS\n\n\n$color-primary: #8b5615;\n\n//FONT\n\n$font-size-default: 1.6rem;",".main{\n    font-size: 2rem;\n    font-family: 'Noto Sans', sans-serif;\n    font-weight: 400;\n    color: #fff;\n}\n\n.heading-primary{\n    margin-bottom: 3rem;\n}\n\n.heading-container{\n    display: flex;\n    align-items: center;\n    width: 100%;\n    padding: 4rem;\n    padding-bottom: 0;\n\n    &--to-do{\n        padding: 0;\n    }\n}\n",".display-block{\n    display: block;\n}\n\n.full-width{\n    width: 100%;\n}\n\n.width-90{\n    width: 90%;\n}","button{\n    background-color: transparent;\n    border: 1px solid #fff;\n    font-size: 2rem;\n    font-weight: inherit;\n    font-family: inherit;\n    color: inherit;\n}\n\n.btn-close-project{\n    border: 0;\n    font-weight: 300;\n    color: rgba(255, 255, 255, 0.5);\n    position: relative;\n\n    &:hover{\n        cursor: pointer;\n        color: #fff;\n    }\n}\n\n.btn-close-to-do{\n    border: 0;\n    font-weight: 300;\n    color: rgba(255, 255, 255, 0.5);\n    position: absolute;\n    right: 4rem;\n    visibility: hidden;\n\n    &:hover{\n        cursor: pointer;\n        color: #fff;\n    }\n}\n\n.form:hover .btn-close-to-do{\n    visibility: visible;\n}\n\n\n\n\n.btn-group{\n    display: inline-block;\n\n    &__label{\n        display: inline-block;\n        margin-right: 1rem;\n    }\n\n    &__btn{\n        padding: .5rem 2rem;\n        border-radius: 3px;\n\n        &:hover{\n            cursor: pointer;\n            background-color: rgba(0, 0, 0, 0.3);\n        }\n    }\n}\n\n.priority-btn.active{\n    background-color: $color-primary;\n}","label{\n    margin-right: 1rem;\n}\n\n.form-container--createProject{\n    display: 'block';\n}\n\n.form{\n\n    border: 1px solid #fff;\n    padding: 2rem 4rem;\n\n    &__group{\n        padding: 1rem 0;\n\n        &:first-child{\n            padding-top: 0;\n        }\n        &:last-child{\n            padding-bottom: 0;\n        }\n    }\n\n    &__input{\n        font-family: inherit;\n        font-size: inherit;\n        font-weight: 400;\n        color: inherit;\n        background-color: transparent;\n        border: 0;\n        outline: none;\n        padding: 1rem 4rem;\n        \n\n        &--to-do{\n            padding: 0;\n            resize: none;\n\n            &::-webkit-scrollbar{\n                display: none;\n            }\n        }\n    }\n}\n\n#createToDoForm{\n    margin: 1rem 0;\n    border-radius: 3px;\n    position: relative;\n}\n\ninput[type=date]{\n    width: 16rem;\n}\n\n::-webkit-calendar-picker-indicator {\n    filter: invert(1);\n}\n",".footer{\n    padding: 1rem;\n    // border-top: 1px solid rgba(0, 0, 0, 0.283);\n    background-color: #292937;\n    color: #fff;\n}\n\n.footer-text-main{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.odin-logo{\n    height: 3.5rem;\n    width: auto;\n    margin-left: 2rem;\n    fill: #fff;\n    color: #fff;\n}\n\n.github-cat{\n    fill: #fff;\n    margin-left: 2rem;\n    transition: all 2s;\n    height: 3.5rem;\n\n    &:hover{\n        transform: rotate(360deg);\n        fill: $color-primary;\n\n    }\n}\n\n.github-handle{\n    color: $color-primary;\n    font-weight: 400;\n    padding: 0 1rem;\n    text-decoration: none;\n}",".sidebar{\n    grid-template-columns: 1/2;\n    grid-row: 1/3;\n    width: 100%;\n\n    background-color: #242426;\n    color: white;\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.project-list{\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    width: 100%;\n\n    &__item{\n        padding: 1rem 4rem;\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n}\n\n.project-list__item.active{\n    font-weight: 400;\n    background-color: $color-primary;\n}",".hero{\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    background: linear-gradient(to bottom right,#293038, #31475a);\n\n    z-index: -1;\n}\n\n.grid{\n    width: 100%;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 30rem 1fr;\n    grid-template-rows: 1fr 6rem;\n}\n\n.to-do-container{\n    padding: 4rem 8rem;\n}\n\n.to-do-item{\n    padding: 1rem 0;\n    display: flex;\n    align-items: center;\n    position: relative;\n\n    &__checkbox{\n        position: absolute;\n        left: -5rem;\n        height: 3rem;\n        width: 3rem;\n        display: none;\n    }\n    \n    &__checkbox-label{\n        height: 2rem;\n        width: 2rem;\n        background-color: #fff;\n        position: absolute;\n        left: -4rem;\n        border-radius: 50%;\n        transition: transform 300ms;\n\n        &::after{\n            content: \"\";\n            height: 50%;\n            aspect-ratio: 1;\n            border-radius: 50%;\n            position: absolute;\n            background-color: #242424;\n            z-index: 3;\n            transform: translate(50%,50%);\n            visibility: hidden;\n        }\n\n        &:hover{\n            cursor: pointer;\n            transform: scale(1.2);\n        }\n\n        &.active{\n            visibility: visible;\n        }\n    }\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label{\n    opacity: .5;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label::after{\n    visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__text-wrapper{\n    text-decoration: line-through;\n    opacity: .5;\n}"],"sourceRoot":""}]);
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
//Dependencies List




//DOM Query Selectors

const projectList = document.querySelector('.project-list');
const toDoList = document.querySelector('.to-do-list');

const hero = document.querySelector('.hero');
hero.src = heroImage;

const createProjectBtn = document.querySelector('.create-project-btn');

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
        if(form.contains(e.target)){
            console.log('clicked in form')
        } else{
            form.remove();
        }
    })


    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        if (!formInput.value) return;
        const projects = projectManager.getProjects();
        if(projects.filter(project => project.name === formInput.value).length > 0) return;   // check for existing project name
        projectManager.createProject(formInput.value);
        projectManager.changeCurrentProject(projectManager.getProject(formInput.value));
        domManager.showProjects();
        domManager.showToDos();
        formInput.value = '';
    })
})

const toDoFormTemplate = document.getElementById('to-do-form-template');
const createToDoBtn = document.querySelector('.create-to-do-btn');

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

    descriptionInput.addEventListener('keydown', (e)=>{
        const keyCode = e.code;
        if(keyCode === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!titleInput.value) return;

            const activeBtn = Array.from(priorityBtns).find(el => el.classList.contains('active'));
            const priorityValue = activeBtn.innerText.toLowerCase();
    
            toDoManager.createToDo(
                projectManager.getCurrentProject(), 
                titleInput.value,
                dueDateInput.value, 
                descriptionInput.value, 
                priorityValue
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
    
            toDoManager.createToDo(
                projectManager.getCurrentProject(), 
                titleInput.value,
                dueDateInput.value, 
                descriptionInput.value, 
                priorityValue
            );
            
            domManager.showToDos();
        }
    })
})






const ToDoItem = function(title, dueDate, description, priority, completed){       //factory functions
    return {title, dueDate, description, priority, completed};
}

const Project = function(name){
    return {
        name,
        toDoList: []
    };
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

    const showCurrentProjects = function(){
        console.dir(projects);
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
        showCurrentProjects,
        changeCurrentProject,
        deleteProject,
        createDefaultProject
    }
})()



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
        const currentProject = projectManager.getCurrentProject();
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





//////////////////////// DOM Stuff /////////////////////////////////

const domManager = (function(){

    function setActiveProjectLink(){
        const projectListItems = document.querySelectorAll('.project-list__item');
        const currentProject = projectManager.getCurrentProject();
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
                    projectManager.deleteProject(currentProject);
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
        
        const projects = projectManager.getProjects();

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
                if(project === projectManager.getCurrentProject()) return;
                projectManager.changeCurrentProject(project);
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
                    if(form.contains(e.target)){
                        console.log('clicked in form')
                    } else{
                        form.replaceWith(projectListItem);
                    }
                })

                form.addEventListener('submit', (e)=>{
                    e.preventDefault();
                    const projects = projectManager.getProjects();
                    if(projects.filter(project => project.name === formInput.value).length > 0){
                        form.replaceWith(projectListItem);
                    } else {
                        projectManager.editProjectName(project, formInput.value)
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

        const toDos = projectManager.getProjectToDos();                 // coupling between modules


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
                    toDoManager.deleteToDo(projectManager.getCurrentProject(), toDo);
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
                    if(form.contains(e.target)){
                        console.log('clicked in form')
                    } else{
                        form.replaceWith(toDoItem);
                    }
                })

                descriptionInput.addEventListener('keydown', (e)=>{
                    const keyCode = e.code;
                    if(keyCode === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        if (!titleInput.value) return;

                        const activeBtn = Array.from(priorityBtns).find(el => el.classList.contains('active'));
                        const priorityValue = activeBtn.innerText.toLowerCase();
                
                        toDoManager.editToDo(
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
                
                        toDoManager.editToDo(
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
    localStorage.setItem('projects', JSON.stringify(projectManager.getProjects()));  // local storage only supports string type,
                                                                                    // must use JSON.stringify and JSON.parse
    console.dir(JSON.parse(localStorage.getItem('projects')));
}

if (storageAvailable('localStorage')) {
    console.log('Yippee! We can use localStorage awesomeness');

    if(!localStorage.getItem('projects')) {
        populateStorage();
    } else {
        const projects = JSON.parse(localStorage.getItem('projects'));
        projectManager.setProjects(projects);
        projectManager.showCurrentProjects();
        domManager.showProjects();
        domManager.showToDos();
    }

}
else {
    console.log('Too bad, no localStorage for us');
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7OztBQU1EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3RUFBd0U7OztBQUd4RTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELE1BQU07QUFDN0Q7QUFDQSwyRUFBMkUsTUFBTTtBQUNqRjtBQUNBLDJFQUEyRSxNQUFNOztBQUVqRjtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhOztBQUViO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Njc3MvbWFpbi5zY3NzPzZkMjUiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDFlbTtcXG4gIGhlaWdodDogMWVtO1xcbiAgc3Ryb2tlLXdpZHRoOiAwO1xcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbi5pY29uLWFkZC1zb2xpZCxcXG4uaWNvbi1wbHVzIHtcXG4gIGZpbGw6ICNmZmY7XFxuICB3aWR0aDogMy41cmVtO1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmljb24tYWRkLXNvbGlkOmhvdmVyLFxcbi5pY29uLXBsdXM6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgZmlsbDogIzhiNTYxNTtcXG59XFxuXFxuLm1haW4ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaGVhZGluZy1wcmltYXJ5IHtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbi5oZWFkaW5nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG4uaGVhZGluZy1jb250YWluZXItLXRvLWRvIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5kaXNwbGF5LWJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZnVsbC13aWR0aCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLndpZHRoLTkwIHtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5idG4tY2xvc2UtcHJvamVjdCB7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJ0bi1jbG9zZS1wcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYnRuLWNsb3NlLXRvLWRvIHtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDRyZW07XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5idG4tY2xvc2UtdG8tZG86aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb3JtOmhvdmVyIC5idG4tY2xvc2UtdG8tZG8ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmJ0bi1ncm91cCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5idG4tZ3JvdXBfX2xhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmJ0bi1ncm91cF9fYnRuIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4uYnRuLWdyb3VwX19idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4ucHJpb3JpdHktYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI1NjE1O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lci0tY3JlYXRlUHJvamVjdCB7XFxuICBkaXNwbGF5OiBcXFwiYmxvY2tcXFwiO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgcGFkZGluZzogMnJlbSA0cmVtO1xcbn1cXG4uZm9ybV9fZ3JvdXAge1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4uZm9ybV9fZ3JvdXA6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy10b3A6IDA7XFxufVxcbi5mb3JtX19ncm91cDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG4uZm9ybV9faW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtIDRyZW07XFxufVxcbi5mb3JtX19pbnB1dC0tdG8tZG8ge1xcbiAgcGFkZGluZzogMDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLmZvcm1fX2lucHV0LS10by1kbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2NyZWF0ZVRvRG9Gb3JtIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWRhdGVdIHtcXG4gIHdpZHRoOiAxNnJlbTtcXG59XFxuXFxuOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mzc7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvb3Rlci10ZXh0LW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm9kaW4tbG9nbyB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBmaWxsOiAjZmZmO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5naXRodWItY2F0IHtcXG4gIGZpbGw6ICNmZmY7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAycztcXG4gIGhlaWdodDogMy41cmVtO1xcbn1cXG4uZ2l0aHViLWNhdDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgZmlsbDogIzhiNTYxNTtcXG59XFxuXFxuLmdpdGh1Yi1oYW5kbGUge1xcbiAgY29sb3I6ICM4YjU2MTU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEvMjtcXG4gIGdyaWQtcm93OiAxLzM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdC1saXN0X19pdGVtIHtcXG4gIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWxpc3RfX2l0ZW0uYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI1NjE1O1xcbn1cXG5cXG4uaGVybyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzI5MzAzOCwgIzMxNDc1YSk7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzByZW0gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNnJlbTtcXG59XFxuXFxuLnRvLWRvLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA0cmVtIDhyZW07XFxufVxcblxcbi50by1kby1pdGVtIHtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udG8tZG8taXRlbV9fY2hlY2tib3gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTVyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50by1kby1pdGVtX19jaGVja2JveC1sYWJlbCB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogNTAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNDtcXG4gIHotaW5kZXg6IDM7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi50by1kby1pdGVtX19jaGVja2JveC1sYWJlbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcbi50by1kby1pdGVtX19jaGVja2JveC1sYWJlbC5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94OmNoZWNrZWQgfiAudG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWwge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udG8tZG8taXRlbV9fY2hlY2tib3g6Y2hlY2tlZCB+IC50by1kby1pdGVtX19jaGVja2JveC1sYWJlbDo6YWZ0ZXIge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94OmNoZWNrZWQgfiAudG8tZG8taXRlbV9fdGV4dC13cmFwcGVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9faWNvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYWJzdHJhY3RzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL191dGlsaXRpZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2Zvcm0uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19zaWRlYmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3BhZ2VzL19ob21lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBQzFCQTs7RUFFSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBRDZCSjtBQzNCSTs7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQ1ZRO0FGd0NoQjs7QUczQ0E7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUg4Q0o7O0FHM0NBO0VBQ0ksbUJBQUE7QUg4Q0o7O0FHM0NBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBSDhDSjtBRzVDSTtFQUNJLFVBQUE7QUg4Q1I7O0FJakVBO0VBQ0ksY0FBQTtBSm9FSjs7QUlqRUE7RUFDSSxXQUFBO0FKb0VKOztBSWpFQTtFQUNJLFVBQUE7QUpvRUo7O0FLN0VBO0VBQ0ksNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBTGdGSjs7QUs3RUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FMZ0ZKO0FLOUVJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUxnRlI7O0FLNUVBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBTCtFSjtBSzdFSTtFQUNJLGVBQUE7RUFDQSxX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bmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWx7XFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHl7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5saXtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmljb24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxZW07XFxuICAgIGhlaWdodDogMWVtO1xcbiAgICBzdHJva2Utd2lkdGg6IDA7XFxuICAgIHN0cm9rZTogY3VycmVudENvbG9yO1xcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVwiLFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDFlbTtcXG4gIGhlaWdodDogMWVtO1xcbiAgc3Ryb2tlLXdpZHRoOiAwO1xcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbi5pY29uLWFkZC1zb2xpZCxcXG4uaWNvbi1wbHVzIHtcXG4gIGZpbGw6ICNmZmY7XFxuICB3aWR0aDogMy41cmVtO1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmljb24tYWRkLXNvbGlkOmhvdmVyLFxcbi5pY29uLXBsdXM6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgZmlsbDogIzhiNTYxNTtcXG59XFxuXFxuLm1haW4ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaGVhZGluZy1wcmltYXJ5IHtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbi5oZWFkaW5nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG4uaGVhZGluZy1jb250YWluZXItLXRvLWRvIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5kaXNwbGF5LWJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZnVsbC13aWR0aCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLndpZHRoLTkwIHtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5idG4tY2xvc2UtcHJvamVjdCB7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJ0bi1jbG9zZS1wcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYnRuLWNsb3NlLXRvLWRvIHtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDRyZW07XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5idG4tY2xvc2UtdG8tZG86aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb3JtOmhvdmVyIC5idG4tY2xvc2UtdG8tZG8ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmJ0bi1ncm91cCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5idG4tZ3JvdXBfX2xhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmJ0bi1ncm91cF9fYnRuIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4uYnRuLWdyb3VwX19idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4ucHJpb3JpdHktYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI1NjE1O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lci0tY3JlYXRlUHJvamVjdCB7XFxuICBkaXNwbGF5OiBcXFwiYmxvY2tcXFwiO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgcGFkZGluZzogMnJlbSA0cmVtO1xcbn1cXG4uZm9ybV9fZ3JvdXAge1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4uZm9ybV9fZ3JvdXA6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy10b3A6IDA7XFxufVxcbi5mb3JtX19ncm91cDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG4uZm9ybV9faW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtIDRyZW07XFxufVxcbi5mb3JtX19pbnB1dC0tdG8tZG8ge1xcbiAgcGFkZGluZzogMDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLmZvcm1fX2lucHV0LS10by1kbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2NyZWF0ZVRvRG9Gb3JtIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWRhdGVdIHtcXG4gIHdpZHRoOiAxNnJlbTtcXG59XFxuXFxuOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mzc7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvb3Rlci10ZXh0LW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm9kaW4tbG9nbyB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBmaWxsOiAjZmZmO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5naXRodWItY2F0IHtcXG4gIGZpbGw6ICNmZmY7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAycztcXG4gIGhlaWdodDogMy41cmVtO1xcbn1cXG4uZ2l0aHViLWNhdDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgZmlsbDogIzhiNTYxNTtcXG59XFxuXFxuLmdpdGh1Yi1oYW5kbGUge1xcbiAgY29sb3I6ICM4YjU2MTU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEvMjtcXG4gIGdyaWQtcm93OiAxLzM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdC1saXN0X19pdGVtIHtcXG4gIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWxpc3RfX2l0ZW0uYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI1NjE1O1xcbn1cXG5cXG4uaGVybyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzI5MzAzOCwgIzMxNDc1YSk7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzByZW0gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNnJlbTtcXG59XFxuXFxuLnRvLWRvLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA0cmVtIDhyZW07XFxufVxcblxcbi50by1kby1pdGVtIHtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udG8tZG8taXRlbV9fY2hlY2tib3gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTVyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50by1kby1pdGVtX19jaGVja2JveC1sYWJlbCB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogNTAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNDtcXG4gIHotaW5kZXg6IDM7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi50by1kby1pdGVtX19jaGVja2JveC1sYWJlbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcbi50by1kby1pdGVtX19jaGVja2JveC1sYWJlbC5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94OmNoZWNrZWQgfiAudG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWwge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udG8tZG8taXRlbV9fY2hlY2tib3g6Y2hlY2tlZCB+IC50by1kby1pdGVtX19jaGVja2JveC1sYWJlbDo6YWZ0ZXIge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94OmNoZWNrZWQgfiAudG8tZG8taXRlbV9fdGV4dC13cmFwcGVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cIixcIi5pY29uLWFkZC1zb2xpZCxcXG4uaWNvbi1wbHVze1xcbiAgICBmaWxsOiAjZmZmO1xcbiAgICB3aWR0aDogMy41cmVtO1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxuICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICBmaWxsOiAkY29sb3ItcHJpbWFyeTtcXG4gICAgfVxcbn1cIixcIi8vIENPTE9SU1xcblxcblxcbiRjb2xvci1wcmltYXJ5OiAjOGI1NjE1O1xcblxcbi8vRk9OVFxcblxcbiRmb250LXNpemUtZGVmYXVsdDogMS42cmVtO1wiLFwiLm1haW57XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlYWRpbmctcHJpbWFyeXtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLmhlYWRpbmctY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNHJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuXFxuICAgICYtLXRvLWRve1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbn1cXG5cIixcIi5kaXNwbGF5LWJsb2Nre1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZ1bGwtd2lkdGh7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2lkdGgtOTB7XFxuICAgIHdpZHRoOiA5MCU7XFxufVwiLFwiYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uYnRuLWNsb3NlLXByb2plY3R7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgIH1cXG59XFxuXFxuLmJ0bi1jbG9zZS10by1kb3tcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA0cmVtO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFxuICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgfVxcbn1cXG5cXG4uZm9ybTpob3ZlciAuYnRuLWNsb3NlLXRvLWRve1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG5cXG5cXG5cXG4uYnRuLWdyb3Vwe1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFxuICAgICZfX2xhYmVse1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICB9XFxuXFxuICAgICZfX2J0bntcXG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuXFxuICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLnByaW9yaXR5LWJ0bi5hY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbn1cIixcImxhYmVse1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lci0tY3JlYXRlUHJvamVjdHtcXG4gICAgZGlzcGxheTogJ2Jsb2NrJztcXG59XFxuXFxuLmZvcm17XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG5cXG4gICAgJl9fZ3JvdXB7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XFxuXFxuICAgICAgICAmOmZpcnN0LWNoaWxke1xcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpsYXN0LWNoaWxke1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2lucHV0e1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDRyZW07XFxuICAgICAgICBcXG5cXG4gICAgICAgICYtLXRvLWRve1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgcmVzaXplOiBub25lO1xcblxcbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFye1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4jY3JlYXRlVG9Eb0Zvcm17XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1kYXRlXXtcXG4gICAgd2lkdGg6IDE2cmVtO1xcbn1cXG5cXG46Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cIixcIi5mb290ZXJ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjgzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkzNztcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb290ZXItdGV4dC1tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm9kaW4tbG9nb3tcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgZmlsbDogI2ZmZjtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5naXRodWItY2F0e1xcbiAgICBmaWxsOiAjZmZmO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzO1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG5cXG4gICAgJjpob3ZlcntcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICBmaWxsOiAkY29sb3ItcHJpbWFyeTtcXG5cXG4gICAgfVxcbn1cXG5cXG4uZ2l0aHViLWhhbmRsZXtcXG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XCIsXCIuc2lkZWJhcntcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI2O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0e1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAmX19pdGVte1xcbiAgICAgICAgcGFkZGluZzogMXJlbSA0cmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4ucHJvamVjdC1saXN0X19pdGVtLmFjdGl2ZXtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxufVwiLFwiLmhlcm97XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCMyOTMwMzgsICMzMTQ3NWEpO1xcblxcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmdyaWR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcmVtIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNnJlbTtcXG59XFxuXFxuLnRvLWRvLWNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogNHJlbSA4cmVtO1xcbn1cXG5cXG4udG8tZG8taXRlbXtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICZfX2NoZWNrYm94e1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogLTVyZW07XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgICB3aWR0aDogM3JlbTtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgXFxuICAgICZfX2NoZWNrYm94LWxhYmVse1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogLTRyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XFxuXFxuICAgICAgICAmOjphZnRlcntcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcXG4gICAgICAgICAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0O1xcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLDUwJSk7XFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5hY3RpdmV7XFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4udG8tZG8taXRlbV9fY2hlY2tib3g6Y2hlY2tlZCB+IC50by1kby1pdGVtX19jaGVja2JveC1sYWJlbHtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi50by1kby1pdGVtX19jaGVja2JveDpjaGVja2VkIH4gLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsOjphZnRlcntcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94OmNoZWNrZWQgfiAudG8tZG8taXRlbV9fdGV4dC13cmFwcGVye1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgb3BhY2l0eTogLjU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy9EZXBlbmRlbmNpZXMgTGlzdFxuaW1wb3J0IFwiLi9zY3NzL21haW4uc2Nzc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi9zcHJpdGUuc3ZnXCI7XG5cblxuLy9ET00gUXVlcnkgU2VsZWN0b3JzXG5cbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuY29uc3QgdG9Eb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdCcpO1xuXG5jb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKTtcbmhlcm8uc3JjID0gaGVyb0ltYWdlO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1wcm9qZWN0LWJ0bicpO1xuXG5jcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmKHByb2plY3RMaXN0Lmxhc3RDaGlsZC5ub2RlTmFtZSA9PT0gJ0ZPUk0nKSByZXR1cm47XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBmb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGZvcm1JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtX19pbnB1dCcpO1xuICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05ldyBQcm9qZWN0Jyk7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kKGZvcm0pO1xuICAgIGZvcm0uYXBwZW5kKGZvcm1JbnB1dCk7XG4gICAgZm9ybUlucHV0LmZvY3VzKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgICAgIGlmKGZvcm0uY29udGFpbnMoZS50YXJnZXQpKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkIGluIGZvcm0nKVxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfSlcblxuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIWZvcm1JbnB1dC52YWx1ZSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCk7XG4gICAgICAgIGlmKHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gZm9ybUlucHV0LnZhbHVlKS5sZW5ndGggPiAwKSByZXR1cm47ICAgLy8gY2hlY2sgZm9yIGV4aXN0aW5nIHByb2plY3QgbmFtZVxuICAgICAgICBwcm9qZWN0TWFuYWdlci5jcmVhdGVQcm9qZWN0KGZvcm1JbnB1dC52YWx1ZSk7XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLmNoYW5nZUN1cnJlbnRQcm9qZWN0KHByb2plY3RNYW5hZ2VyLmdldFByb2plY3QoZm9ybUlucHV0LnZhbHVlKSk7XG4gICAgICAgIGRvbU1hbmFnZXIuc2hvd1Byb2plY3RzKCk7XG4gICAgICAgIGRvbU1hbmFnZXIuc2hvd1RvRG9zKCk7XG4gICAgICAgIGZvcm1JbnB1dC52YWx1ZSA9ICcnO1xuICAgIH0pXG59KVxuXG5jb25zdCB0b0RvRm9ybVRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvLWRvLWZvcm0tdGVtcGxhdGUnKTtcbmNvbnN0IGNyZWF0ZVRvRG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXRvLWRvLWJ0bicpO1xuXG5jcmVhdGVUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGNvbnN0IHRvRG9MaXN0Q2hpbGROb2RlQXJyYXkgPSBBcnJheS5mcm9tKHRvRG9MaXN0LmNoaWxkTm9kZXMpO1xuICAgIGlmKHRvRG9MaXN0Q2hpbGROb2RlQXJyYXkuZmluZChjaGlsZE5vZGUgPT4gY2hpbGROb2RlLmlkID09PSAnY3JlYXRlVG9Eb0Zvcm0nKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgZm9ybVRlbXBsYXRlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0b0RvRm9ybVRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgIHRvRG9MaXN0LmFwcGVuZChmb3JtVGVtcGxhdGUpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVUb0RvRm9ybScpO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jbG9zZS10by1kbycpO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHByaW9yaXR5TG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LWxvdycpO1xuICAgIGNvbnN0IHByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LW1lZGl1bScpO1xuICAgIGNvbnN0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1oaWdoJyk7XG4gICAgY29uc3QgcHJpb3JpdHlCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaW9yaXR5LWJ0bicpO1xuXG4gICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZm9ybS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgcHJpb3JpdHlMb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgcHJpb3JpdHlCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcbiAgICAgICAgcHJpb3JpdHlMb3cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9KVxuICAgIHByaW9yaXR5TWVkaXVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgcHJpb3JpdHlCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcbiAgICAgICAgcHJpb3JpdHlNZWRpdW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9KVxuICAgIHByaW9yaXR5SGlnaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgICAgIHByaW9yaXR5SGlnaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgICAgIGlmKCFmb3JtLmNvbnRhaW5zKGUudGFyZ2V0KSkgZm9ybS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgZGVzY3JpcHRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57XG4gICAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmNvZGU7XG4gICAgICAgIGlmKGtleUNvZGUgPT09ICdFbnRlcicgJiYgIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICghdGl0bGVJbnB1dC52YWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVCdG4gPSBBcnJheS5mcm9tKHByaW9yaXR5QnRucykuZmluZChlbCA9PiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBhY3RpdmVCdG4uaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgXG4gICAgICAgICAgICB0b0RvTWFuYWdlci5jcmVhdGVUb0RvKFxuICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCksIFxuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlLCBcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBcbiAgICAgICAgICAgICAgICBwcmlvcml0eVZhbHVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkb21NYW5hZ2VyLnNob3dUb0RvcygpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKT0+e1xuICAgICAgICBjb25zdCBrZXlDb2RlID0gZS5jb2RlO1xuICAgICAgICBpZihrZXlDb2RlID09PSAnRW50ZXInICYmICFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoIXRpdGxlSW5wdXQudmFsdWUpIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgYWN0aXZlQnRuID0gQXJyYXkuZnJvbShwcmlvcml0eUJ0bnMpLmZpbmQoZWwgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gYWN0aXZlQnRuLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIFxuICAgICAgICAgICAgdG9Eb01hbmFnZXIuY3JlYXRlVG9EbyhcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLCBcbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSwgXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG5cblxuXG5cblxuY29uc3QgVG9Eb0l0ZW0gPSBmdW5jdGlvbih0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWQpeyAgICAgICAvL2ZhY3RvcnkgZnVuY3Rpb25zXG4gICAgcmV0dXJuIHt0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWR9O1xufVxuXG5jb25zdCBQcm9qZWN0ID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdG9Eb0xpc3Q6IFtdXG4gICAgfTtcbn1cblxuY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoZnVuY3Rpb24oKXsgICAgICAgIC8vbW9kdWxlXG4gICAgXG4gICAgbGV0IHByb2plY3RzID0gW107XG5cbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IFByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcpO1xuICAgIHByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0O1xuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKXtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSl7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KG5hbWUpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7ICAgICAgICAgIC8vIHNhdmUgbmV3IHByb2plY3RzIGFycmF5IHRvIHN0b3JhZ2VcbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKXtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFByb2plY3RzKHByb2plY3RzQXJyYXkpe1xuICAgICAgICBwcm9qZWN0cyA9IHByb2plY3RzQXJyYXk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNBcnJheVswXTtcbiAgICAgICAgY29uc29sZS5kaXIocHJvamVjdHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb2plY3QobmFtZSl7XG4gICAgICAgIGlmKHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpKXtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvdWxkIG5vdCBmaW5kIHByb2plY3Qgd2l0aCBtYXRjaGluZyBuYW1lLicpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlZGl0UHJvamVjdE5hbWUocHJvamVjdCwgbmV3TmFtZSl7XG4gICAgICAgIHByb2plY3QubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdFRvRG9zID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0LnRvRG9MaXN0O1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dDdXJyZW50UHJvamVjdHMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmRpcihwcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlQ3VycmVudFByb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0KXtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZURlZmF1bHRQcm9qZWN0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBQcm9qZWN0KCdEZWZhdWx0IFByb2plY3QnKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gICAgICAgIHJldHVybiBkZWZhdWx0UHJvamVjdDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24oZGVsZXRlZFByb2plY3Qpe1xuICAgICAgICBjb25zdCBpbmRleE9mRGVsZXRlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IGRlbGV0ZWRQcm9qZWN0Lm5hbWUpO1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXhPZkRlbGV0ZWRQcm9qZWN0LCAxKTtcblxuICAgICAgICBpZihwcm9qZWN0cy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBjcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xuICAgICAgICAgICAgY2hhbmdlQ3VycmVudFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhbmdlQ3VycmVudFByb2plY3QocHJvamVjdHNbMF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QsXG4gICAgICAgIGNyZWF0ZVByb2plY3QsXG4gICAgICAgIGdldFByb2plY3RzLFxuICAgICAgICBzZXRQcm9qZWN0cyxcbiAgICAgICAgZ2V0UHJvamVjdCxcbiAgICAgICAgZWRpdFByb2plY3ROYW1lLFxuICAgICAgICBnZXRQcm9qZWN0VG9Eb3MsXG4gICAgICAgIHNob3dDdXJyZW50UHJvamVjdHMsXG4gICAgICAgIGNoYW5nZUN1cnJlbnRQcm9qZWN0LFxuICAgICAgICBkZWxldGVQcm9qZWN0LFxuICAgICAgICBjcmVhdGVEZWZhdWx0UHJvamVjdFxuICAgIH1cbn0pKClcblxuXG5cbmNvbnN0IHRvRG9NYW5hZ2VyID0gKGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCBjcmVhdGVUb0RvID0gZnVuY3Rpb24ocHJvamVjdCwgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkPWZhbHNlKXtcbiAgICAgICAgY29uc3QgbmV3VG9EbyA9IFRvRG9JdGVtKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNvbXBsZXRlZCk7XG4gICAgICAgIHByb2plY3QudG9Eb0xpc3QucHVzaChuZXdUb0RvKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgIH0gIFxuXG4gICAgY29uc3QgZ2V0VG9EbyA9IGZ1bmN0aW9uKHByb2plY3QsIHRpdGxlKXtcbiAgICAgICAgaWYocHJvamVjdC50b0RvTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdGl0bGUpKXtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0LnRvRG9MaXN0LmZpbmQoaXRlbSA9PiBpdGVtLnRpdGxlID09PSB0aXRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IGZpbmQgVG8gRG8gSXRlbSB3aXRoIG1hdGNoaW5nIHRpdGxlJylcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZWxldGVUb0RvID0gZnVuY3Rpb24ocHJvamVjdCwgdG9Eb0l0ZW0pe1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3QudG9Eb0xpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdG9Eb0l0ZW0udGl0bGUpO1xuICAgICAgICBwcm9qZWN0LnRvRG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdFRvRG8gPSBmdW5jdGlvbih0b0RvSXRlbSwgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkPWZhbHNlKXtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICBjb25zdCB1cGRhdGVkVG9EbyA9IFRvRG9JdGVtKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNvbXBsZXRlZCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudFByb2plY3QudG9Eb0xpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdG9Eb0l0ZW0udGl0bGUpO1xuICAgICAgICBjdXJyZW50UHJvamVjdC50b0RvTGlzdC5zcGxpY2UoaW5kZXgsIDEsIHVwZGF0ZWRUb0RvKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVUb0RvLFxuICAgICAgICBnZXRUb0RvLFxuICAgICAgICBkZWxldGVUb0RvLFxuICAgICAgICBlZGl0VG9EbyxcbiAgICB9XG59KSgpXG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIERPTSBTdHVmZiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3QgZG9tTWFuYWdlciA9IChmdW5jdGlvbigpe1xuXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdExpbmsoKXtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWxpc3RfX2l0ZW0nKTtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICBwcm9qZWN0TGlzdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYoaXRlbS5pbm5lclRleHQgPT09IGN1cnJlbnRQcm9qZWN0Lm5hbWUpe1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tY2xvc2UtcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFwcGVuZCgneCcpO1xuICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kKGNsb3NlQnRuKTtcblxuXG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5kZWxldGVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93UHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSlcblxuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UHJvamVjdHMoKXtcbiAgICAgICAgd2hpbGUocHJvamVjdExpc3QuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCk7XG5cbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0X19pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdFRleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcHJvamVjdExpc3RUZXh0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3RfX3RleHQtd3JhcHBlcicpO1xuICAgICAgICAgICAgcHJvamVjdExpc3RUZXh0V3JhcHBlci5hcHBlbmQocHJvamVjdC5uYW1lKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5hcHBlbmQocHJvamVjdExpc3RUZXh0V3JhcHBlcik7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdEl0ZW0pO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYocHJvamVjdCA9PT0gcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmNoYW5nZUN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIuc2hvd1Byb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChlKT0+e1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYocHJvamVjdExpc3QubGFzdENoaWxkLm5vZGVOYW1lID09PSAnRk9STScpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybV9faW5wdXQnKTtcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXQudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtLnJlcGxhY2VXaXRoKGZvcm0pO1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKGZvcm1JbnB1dCk7XG4gICAgICAgICAgICAgICAgZm9ybUlucHV0LmZvY3VzKCk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGZvcm0uY29udGFpbnMoZS50YXJnZXQpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkIGluIGZvcm0nKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcGxhY2VXaXRoKHByb2plY3RMaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gZm9ybUlucHV0LnZhbHVlKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwbGFjZVdpdGgocHJvamVjdExpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmVkaXRQcm9qZWN0TmFtZShwcm9qZWN0LCBmb3JtSW5wdXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIuc2hvd1Byb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIuc2hvd1RvRG9zKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICBzZXRBY3RpdmVQcm9qZWN0TGluaygpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93VG9Eb3MoKXtcbiAgICAgICAgd2hpbGUodG9Eb0xpc3QuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICB0b0RvTGlzdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9Eb3MgPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0VG9Eb3MoKTsgICAgICAgICAgICAgICAgIC8vIGNvdXBsaW5nIGJldHdlZW4gbW9kdWxlc1xuXG5cbiAgICAgICAgbGV0IGluZGV4ID0gMTtcblxuICAgICAgICB0b0Rvcy5mb3JFYWNoKHRvRG8gPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICB0b0RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0by1kby1pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCB0b0RvVGV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0b0RvVGV4dFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndG8tZG8taXRlbV9fdGV4dC13cmFwcGVyJyk7XG4gICAgICAgICAgICB0b0RvVGV4dFdyYXBwZXIuYXBwZW5kKHRvRG8udGl0bGUpO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRvRG9DaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0by1kby1pdGVtX19jaGVja2JveCcpO1xuICAgICAgICAgICAgdG9Eb0NoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgdG9Eb0NoZWNrYm94LmlkID0gYHRvLWRvLWl0ZW1fX2NoZWNrYm94LS0ke2luZGV4fWA7XG4gICAgICAgICAgICBjb25zdCB0b0RvQ2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB0b0RvQ2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKGB0by1kby1pdGVtX19jaGVja2JveC1sYWJlbC0tJHtpbmRleH1gKTtcbiAgICAgICAgICAgIHRvRG9DaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsJyk7XG4gICAgICAgICAgICB0b0RvQ2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0by1kby1pdGVtX19jaGVja2JveC0tJHtpbmRleH1gKTtcblxuICAgICAgICAgICAgdG9Eb0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0b0RvLmNvbXBsZXRlZCA9ICF0b0RvLmNvbXBsZXRlZDtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRvRG9MaXN0LmFwcGVuZCh0b0RvSXRlbSk7XG4gICAgICAgICAgICB0b0RvSXRlbS5hcHBlbmQodG9Eb0NoZWNrYm94LCB0b0RvQ2hlY2tib3hMYWJlbCwgdG9Eb1RleHRXcmFwcGVyKTsgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRvRG8uY29tcGxldGVkID09PSB0cnVlKSB0b0RvQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG5cblxuICAgICAgICAgICAgdG9Eb0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1UZW1wbGF0ZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodG9Eb0Zvcm1UZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS5yZXBsYWNlV2l0aChmb3JtVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlVG9Eb0Zvcm0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2xvc2UtdG8tZG8nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1sb3cnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1tZWRpdW0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHktaGlnaCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmlvcml0eS1idG4nKTtcblxuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9NYW5hZ2VyLmRlbGV0ZVRvRG8ocHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKSwgdG9Ebyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcblxuICAgICAgICAgICAgICAgIHByaW9yaXR5TG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TG93LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBwcmlvcml0eU1lZGl1bS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TWVkaXVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBwcmlvcml0eUhpZ2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUhpZ2guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvRG8udGl0bGU7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdG9Eby5kdWVEYXRlO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0b0RvLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUJ0biA9IEFycmF5LmZyb20ocHJpb3JpdHlCdG5zKS5maW5kKGVsID0+IGVsLmNsYXNzTGlzdC5jb250YWlucyh0b0RvLnByaW9yaXR5KSk7XG4gICAgICAgICAgICAgICAgYWN0aXZlQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGZvcm0uY29udGFpbnMoZS50YXJnZXQpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkIGluIGZvcm0nKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcGxhY2VXaXRoKHRvRG9JdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5Q29kZSA9IGUuY29kZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoa2V5Q29kZSA9PT0gJ0VudGVyJyAmJiAhZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aXRsZUlucHV0LnZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUJ0biA9IEFycmF5LmZyb20ocHJpb3JpdHlCdG5zKS5maW5kKGVsID0+IGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IGFjdGl2ZUJ0bi5pbm5lclRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9NYW5hZ2VyLmVkaXRUb0RvKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG8uY29tcGxldGVkXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLnNob3dUb0RvcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlDb2RlID0gZS5jb2RlO1xuICAgICAgICAgICAgICAgICAgICBpZihrZXlDb2RlID09PSAnRW50ZXInICYmICFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRpdGxlSW5wdXQudmFsdWUpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlQnRuID0gQXJyYXkuZnJvbShwcmlvcml0eUJ0bnMpLmZpbmQoZWwgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gYWN0aXZlQnRuLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb01hbmFnZXIuZWRpdFRvRG8oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9EbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eby5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIuc2hvd1RvRG9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBcbiAgICByZXR1cm57XG4gICAgICAgIHNob3dQcm9qZWN0cyxcbiAgICAgICAgc2hvd1RvRG9zXG4gICAgfVxufSkoKVxuXG5cbi8vTG9jYWwgU3RvcmFnZVxuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICB2YXIgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCkpKTsgIC8vIGxvY2FsIHN0b3JhZ2Ugb25seSBzdXBwb3J0cyBzdHJpbmcgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG11c3QgdXNlIEpTT04uc3RyaW5naWZ5IGFuZCBKU09OLnBhcnNlXG4gICAgY29uc29sZS5kaXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpO1xufVxuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICBjb25zb2xlLmxvZygnWWlwcGVlISBXZSBjYW4gdXNlIGxvY2FsU3RvcmFnZSBhd2Vzb21lbmVzcycpO1xuXG4gICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLnNldFByb2plY3RzKHByb2plY3RzKTtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuc2hvd0N1cnJlbnRQcm9qZWN0cygpO1xuICAgICAgICBkb21NYW5hZ2VyLnNob3dQcm9qZWN0cygpO1xuICAgICAgICBkb21NYW5hZ2VyLnNob3dUb0RvcygpO1xuICAgIH1cblxufVxuZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ1RvbyBiYWQsIG5vIGxvY2FsU3RvcmFnZSBmb3IgdXMnKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=