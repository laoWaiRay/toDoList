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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7QUFNRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0VBQXdFOzs7QUFHeEU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxNQUFNO0FBQzdEO0FBQ0EsMkVBQTJFLE1BQU07QUFDakY7QUFDQSwyRUFBMkUsTUFBTTs7QUFFakY7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTs7QUFFYjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3NzL21haW4uc2Nzcz82ZDI1Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHN0cm9rZS13aWR0aDogMDtcXG4gIHN0cm9rZTogY3VycmVudENvbG9yO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG5cXG4uaWNvbi1hZGQtc29saWQsXFxuLmljb24tcGx1cyB7XFxuICBmaWxsOiAjZmZmO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5pY29uLWFkZC1zb2xpZDpob3ZlcixcXG4uaWNvbi1wbHVzOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGZpbGw6ICM4YjU2MTU7XFxufVxcblxcbi5tYWluIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlYWRpbmctcHJpbWFyeSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uaGVhZGluZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLmhlYWRpbmctY29udGFpbmVyLS10by1kbyB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZGlzcGxheS1ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZ1bGwtd2lkdGgge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53aWR0aC05MCB7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uYnRuLWNsb3NlLXByb2plY3Qge1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5idG4tY2xvc2UtcHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJ0bi1jbG9zZS10by1kbyB7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA0cmVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uYnRuLWNsb3NlLXRvLWRvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9ybTpob3ZlciAuYnRuLWNsb3NlLXRvLWRvIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5idG4tZ3JvdXAge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYnRuLWdyb3VwX19sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5idG4tZ3JvdXBfX2J0biB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLmJ0bi1ncm91cF9fYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLnByaW9yaXR5LWJ0bi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNTYxNTtcXG59XFxuXFxubGFiZWwge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXItLWNyZWF0ZVByb2plY3Qge1xcbiAgZGlzcGxheTogXFxcImJsb2NrXFxcIjtcXG59XFxuXFxuLmZvcm0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG59XFxuLmZvcm1fX2dyb3VwIHtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuLmZvcm1fX2dyb3VwOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbn1cXG4uZm9ybV9fZ3JvdXA6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLmZvcm1fX2lucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xcbn1cXG4uZm9ybV9faW5wdXQtLXRvLWRvIHtcXG4gIHBhZGRpbmc6IDA7XFxuICByZXNpemU6IG5vbmU7XFxufVxcbi5mb3JtX19pbnB1dC0tdG8tZG86Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjcmVhdGVUb0RvRm9ybSB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxuICB3aWR0aDogMTZyZW07XFxufVxcblxcbjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTM3O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb290ZXItdGV4dC1tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5vZGluLWxvZ28ge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgZmlsbDogI2ZmZjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZ2l0aHViLWNhdCB7XFxuICBmaWxsOiAjZmZmO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMnM7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG59XFxuLmdpdGh1Yi1jYXQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIGZpbGw6ICM4YjU2MTU7XFxufVxcblxcbi5naXRodWItaGFuZGxlIHtcXG4gIGNvbG9yOiAjOGI1NjE1O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLzI7XFxuICBncmlkLXJvdzogMS8zO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI2O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnByb2plY3QtbGlzdF9faXRlbSB7XFxuICBwYWRkaW5nOiAxcmVtIDRyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0X19pdGVtLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNTYxNTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMyOTMwMzgsICMzMTQ3NWEpO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5ncmlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcmVtIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZyZW07XFxufVxcblxcbi50by1kby1jb250YWluZXIge1xcbiAgcGFkZGluZzogNHJlbSA4cmVtO1xcbn1cXG5cXG4udG8tZG8taXRlbSB7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC01cmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWwge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTRyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XFxufVxcbi50by1kby1pdGVtX19jaGVja2JveC1sYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjQ7XFxuICB6LWluZGV4OiAzO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4udG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG4udG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWwuYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50by1kby1pdGVtX19jaGVja2JveDpjaGVja2VkIH4gLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94OmNoZWNrZWQgfiAudG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWw6OmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50by1kby1pdGVtX19jaGVja2JveDpjaGVja2VkIH4gLnRvLWRvLWl0ZW1fX3RleHQtd3JhcHBlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvX2ljb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Fic3RyYWN0cy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9fdXRpbGl0aWVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2J1dHRvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19mb3JtLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dC9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dC9fc2lkZWJhci5zY3NzXCIs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O1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1se1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxubGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5pY29uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgc3Ryb2tlLXdpZHRoOiAwO1xcbiAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcXG4gICAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cIixcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHN0cm9rZS13aWR0aDogMDtcXG4gIHN0cm9rZTogY3VycmVudENvbG9yO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG5cXG4uaWNvbi1hZGQtc29saWQsXFxuLmljb24tcGx1cyB7XFxuICBmaWxsOiAjZmZmO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5pY29uLWFkZC1zb2xpZDpob3ZlcixcXG4uaWNvbi1wbHVzOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGZpbGw6ICM4YjU2MTU7XFxufVxcblxcbi5tYWluIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlYWRpbmctcHJpbWFyeSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uaGVhZGluZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLmhlYWRpbmctY29udGFpbmVyLS10by1kbyB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZGlzcGxheS1ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZ1bGwtd2lkdGgge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53aWR0aC05MCB7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uYnRuLWNsb3NlLXByb2plY3Qge1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5idG4tY2xvc2UtcHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJ0bi1jbG9zZS10by1kbyB7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA0cmVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uYnRuLWNsb3NlLXRvLWRvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9ybTpob3ZlciAuYnRuLWNsb3NlLXRvLWRvIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5idG4tZ3JvdXAge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYnRuLWdyb3VwX19sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5idG4tZ3JvdXBfX2J0biB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLmJ0bi1ncm91cF9fYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLnByaW9yaXR5LWJ0bi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNTYxNTtcXG59XFxuXFxubGFiZWwge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXItLWNyZWF0ZVByb2plY3Qge1xcbiAgZGlzcGxheTogXFxcImJsb2NrXFxcIjtcXG59XFxuXFxuLmZvcm0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG59XFxuLmZvcm1fX2dyb3VwIHtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuLmZvcm1fX2dyb3VwOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbn1cXG4uZm9ybV9fZ3JvdXA6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLmZvcm1fX2lucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xcbn1cXG4uZm9ybV9faW5wdXQtLXRvLWRvIHtcXG4gIHBhZGRpbmc6IDA7XFxuICByZXNpemU6IG5vbmU7XFxufVxcbi5mb3JtX19pbnB1dC0tdG8tZG86Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjcmVhdGVUb0RvRm9ybSB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxuICB3aWR0aDogMTZyZW07XFxufVxcblxcbjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTM3O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb290ZXItdGV4dC1tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5vZGluLWxvZ28ge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgZmlsbDogI2ZmZjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZ2l0aHViLWNhdCB7XFxuICBmaWxsOiAjZmZmO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMnM7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG59XFxuLmdpdGh1Yi1jYXQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIGZpbGw6ICM4YjU2MTU7XFxufVxcblxcbi5naXRodWItaGFuZGxlIHtcXG4gIGNvbG9yOiAjOGI1NjE1O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLzI7XFxuICBncmlkLXJvdzogMS8zO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI2O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnByb2plY3QtbGlzdF9faXRlbSB7XFxuICBwYWRkaW5nOiAxcmVtIDRyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0X19pdGVtLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNTYxNTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMyOTMwMzgsICMzMTQ3NWEpO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5ncmlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcmVtIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZyZW07XFxufVxcblxcbi50by1kby1jb250YWluZXIge1xcbiAgcGFkZGluZzogNHJlbSA4cmVtO1xcbn1cXG5cXG4udG8tZG8taXRlbSB7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC01cmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWwge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTRyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XFxufVxcbi50by1kby1pdGVtX19jaGVja2JveC1sYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjQ7XFxuICB6LWluZGV4OiAzO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4udG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG4udG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWwuYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50by1kby1pdGVtX19jaGVja2JveDpjaGVja2VkIH4gLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94OmNoZWNrZWQgfiAudG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWw6OmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50by1kby1pdGVtX19jaGVja2JveDpjaGVja2VkIH4gLnRvLWRvLWl0ZW1fX3RleHQtd3JhcHBlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XCIsXCIuaWNvbi1hZGQtc29saWQsXFxuLmljb24tcGx1c3tcXG4gICAgZmlsbDogI2ZmZjtcXG4gICAgd2lkdGg6IDMuNXJlbTtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgZmlsbDogJGNvbG9yLXByaW1hcnk7XFxuICAgIH1cXG59XCIsXCIvLyBDT0xPUlNcXG5cXG5cXG4kY29sb3ItcHJpbWFyeTogIzhiNTYxNTtcXG5cXG4vL0ZPTlRcXG5cXG4kZm9udC1zaXplLWRlZmF1bHQ6IDEuNnJlbTtcIixcIi5tYWlue1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5oZWFkaW5nLXByaW1hcnl7XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbi5oZWFkaW5nLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcblxcbiAgICAmLS10by1kb3tcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG59XFxuXCIsXCIuZGlzcGxheS1ibG9ja3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mdWxsLXdpZHRoe1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLndpZHRoLTkwe1xcbiAgICB3aWR0aDogOTAlO1xcbn1cIixcImJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmJ0bi1jbG9zZS1wcm9qZWN0e1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICB9XFxufVxcblxcbi5idG4tY2xvc2UtdG8tZG97XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNHJlbTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgIH1cXG59XFxuXFxuLmZvcm06aG92ZXIgLmJ0bi1jbG9zZS10by1kb3tcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuXFxuXFxuXFxuLmJ0bi1ncm91cHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbiAgICAmX19sYWJlbHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgfVxcblxcbiAgICAmX19idG57XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcblxcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5wcmlvcml0eS1idG4uYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG59XCIsXCJsYWJlbHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXItLWNyZWF0ZVByb2plY3R7XFxuICAgIGRpc3BsYXk6ICdibG9jayc7XFxufVxcblxcbi5mb3Jte1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XFxuXFxuICAgICZfX2dyb3Vwe1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xcblxcbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICAgIH1cXG4gICAgICAgICY6bGFzdC1jaGlsZHtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19pbnB1dHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgcGFkZGluZzogMXJlbSA0cmVtO1xcbiAgICAgICAgXFxuXFxuICAgICAgICAmLS10by1kb3tcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXG5cXG4gICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcntcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuI2NyZWF0ZVRvRG9Gb3Jte1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmlucHV0W3R5cGU9ZGF0ZV17XFxuICAgIHdpZHRoOiAxNnJlbTtcXG59XFxuXFxuOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXCIsXCIuZm9vdGVye1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI4Myk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mzc7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQtbWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5vZGluLWxvZ297XFxuICAgIGhlaWdodDogMy41cmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgIGZpbGw6ICNmZmY7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZ2l0aHViLWNhdHtcXG4gICAgZmlsbDogI2ZmZjtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAycztcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuXFxuICAgICY6aG92ZXJ7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgZmlsbDogJGNvbG9yLXByaW1hcnk7XFxuXFxuICAgIH1cXG59XFxuXFxuLmdpdGh1Yi1oYW5kbGV7XFxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVwiLFwiLnNpZGViYXJ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS8yO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNjtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnByb2plY3QtbGlzdHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgJl9faXRlbXtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLnByb2plY3QtbGlzdF9faXRlbS5hY3RpdmV7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbn1cIixcIi5oZXJve1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwjMjkzMDM4LCAjMzE0NzVhKTtcXG5cXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi5ncmlke1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHJlbSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZyZW07XFxufVxcblxcbi50by1kby1jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDRyZW0gOHJlbTtcXG59XFxuXFxuLnRvLWRvLWl0ZW17XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAmX19jaGVja2JveHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IC01cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgd2lkdGg6IDNyZW07XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIFxcbiAgICAmX19jaGVja2JveC1sYWJlbHtcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgIHdpZHRoOiAycmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IC00cmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xcblxcbiAgICAgICAgJjo6YWZ0ZXJ7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XFxuICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNDtcXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSw1MCUpO1xcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYuYWN0aXZle1xcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94OmNoZWNrZWQgfiAudG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWx7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4udG8tZG8taXRlbV9fY2hlY2tib3g6Y2hlY2tlZCB+IC50by1kby1pdGVtX19jaGVja2JveC1sYWJlbDo6YWZ0ZXJ7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50by1kby1pdGVtX19jaGVja2JveDpjaGVja2VkIH4gLnRvLWRvLWl0ZW1fX3RleHQtd3JhcHBlcntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vRGVwZW5kZW5jaWVzIExpc3RcbmltcG9ydCBcIi4vc2Nzcy9tYWluLnNjc3NcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcIi4vc3ByaXRlLnN2Z1wiO1xuXG5cbi8vRE9NIFF1ZXJ5IFNlbGVjdG9yc1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKTtcbmNvbnN0IHRvRG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QnKTtcblxuY29uc3QgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJyk7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXByb2plY3QtYnRuJyk7XG5cbmNyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYocHJvamVjdExpc3QubGFzdENoaWxkLm5vZGVOYW1lID09PSAnRk9STScpIHJldHVybjtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZm9ybUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2lucHV0Jyk7XG4gICAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmV3IFByb2plY3QnKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoZm9ybSk7XG4gICAgZm9ybS5hcHBlbmQoZm9ybUlucHV0KTtcbiAgICBmb3JtSW5wdXQuZm9jdXMoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcbiAgICAgICAgaWYoZm9ybS5jb250YWlucyhlLnRhcmdldCkpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQgaW4gZm9ybScpXG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghZm9ybUlucHV0LnZhbHVlKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgaWYocHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBmb3JtSW5wdXQudmFsdWUpLmxlbmd0aCA+IDApIHJldHVybjsgICAvLyBjaGVjayBmb3IgZXhpc3RpbmcgcHJvamVjdCBuYW1lXG4gICAgICAgIHByb2plY3RNYW5hZ2VyLmNyZWF0ZVByb2plY3QoZm9ybUlucHV0LnZhbHVlKTtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuY2hhbmdlQ3VycmVudFByb2plY3QocHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChmb3JtSW5wdXQudmFsdWUpKTtcbiAgICAgICAgZG9tTWFuYWdlci5zaG93UHJvamVjdHMoKTtcbiAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgZm9ybUlucHV0LnZhbHVlID0gJyc7XG4gICAgfSlcbn0pXG5cbmNvbnN0IHRvRG9Gb3JtVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG8tZG8tZm9ybS10ZW1wbGF0ZScpO1xuY29uc3QgY3JlYXRlVG9Eb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdG8tZG8tYnRuJyk7XG5cbmNyZWF0ZVRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgdG9Eb0xpc3RDaGlsZE5vZGVBcnJheSA9IEFycmF5LmZyb20odG9Eb0xpc3QuY2hpbGROb2Rlcyk7XG4gICAgaWYodG9Eb0xpc3RDaGlsZE5vZGVBcnJheS5maW5kKGNoaWxkTm9kZSA9PiBjaGlsZE5vZGUuaWQgPT09ICdjcmVhdGVUb0RvRm9ybScpKSByZXR1cm47XG5cbiAgICBjb25zdCBmb3JtVGVtcGxhdGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRvRG9Gb3JtVGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgdG9Eb0xpc3QuYXBwZW5kKGZvcm1UZW1wbGF0ZSk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVRvRG9Gb3JtJyk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNsb3NlLXRvLWRvJyk7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgcHJpb3JpdHlMb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHktbG93Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHktbWVkaXVtJyk7XG4gICAgY29uc3QgcHJpb3JpdHlIaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LWhpZ2gnKTtcbiAgICBjb25zdCBwcmlvcml0eUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpb3JpdHktYnRuJyk7XG5cbiAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG5cbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICBwcmlvcml0eUxvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICBwcmlvcml0eUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuICAgICAgICBwcmlvcml0eUxvdy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH0pXG4gICAgcHJpb3JpdHlNZWRpdW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBwcmlvcml0eUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuICAgICAgICBwcmlvcml0eU1lZGl1bS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH0pXG4gICAgcHJpb3JpdHlIaWdoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgcHJpb3JpdHlCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcbiAgICAgICAgcHJpb3JpdHlIaWdoLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcbiAgICAgICAgaWYoIWZvcm0uY29udGFpbnMoZS50YXJnZXQpKSBmb3JtLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICBkZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSk9PntcbiAgICAgICAgY29uc3Qga2V5Q29kZSA9IGUuY29kZTtcbiAgICAgICAgaWYoa2V5Q29kZSA9PT0gJ0VudGVyJyAmJiAhZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKCF0aXRsZUlucHV0LnZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUJ0biA9IEFycmF5LmZyb20ocHJpb3JpdHlCdG5zKS5maW5kKGVsID0+IGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IGFjdGl2ZUJ0bi5pbm5lclRleHQudG9Mb3dlckNhc2UoKTtcbiAgICBcbiAgICAgICAgICAgIHRvRG9NYW5hZ2VyLmNyZWF0ZVRvRG8oXG4gICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKSwgXG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUsIFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIFxuICAgICAgICAgICAgICAgIHByaW9yaXR5VmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRvbU1hbmFnZXIuc2hvd1RvRG9zKCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57XG4gICAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmNvZGU7XG4gICAgICAgIGlmKGtleUNvZGUgPT09ICdFbnRlcicgJiYgIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICghdGl0bGVJbnB1dC52YWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVCdG4gPSBBcnJheS5mcm9tKHByaW9yaXR5QnRucykuZmluZChlbCA9PiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBhY3RpdmVCdG4uaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgXG4gICAgICAgICAgICB0b0RvTWFuYWdlci5jcmVhdGVUb0RvKFxuICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCksIFxuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlLCBcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBcbiAgICAgICAgICAgICAgICBwcmlvcml0eVZhbHVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkb21NYW5hZ2VyLnNob3dUb0RvcygpO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG5cblxuXG5cblxuXG5jb25zdCBUb0RvSXRlbSA9IGZ1bmN0aW9uKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNvbXBsZXRlZCl7ICAgICAgIC8vZmFjdG9yeSBmdW5jdGlvbnNcbiAgICByZXR1cm4ge3RpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNvbXBsZXRlZH07XG59XG5cbmNvbnN0IFByb2plY3QgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICB0b0RvTGlzdDogW11cbiAgICB9O1xufVxuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9IChmdW5jdGlvbigpeyAgICAgICAgLy9tb2R1bGVcbiAgICBcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0Jyk7XG4gICAgcHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZGVmYXVsdFByb2plY3Q7XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpe1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKXtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QobmFtZSk7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTsgICAgICAgICAgLy8gc2F2ZSBuZXcgcHJvamVjdHMgYXJyYXkgdG8gc3RvcmFnZVxuICAgICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0cygpe1xuICAgICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UHJvamVjdHMocHJvamVjdHNBcnJheSl7XG4gICAgICAgIHByb2plY3RzID0gcHJvamVjdHNBcnJheTtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c0FycmF5WzBdO1xuICAgICAgICBjb25zb2xlLmRpcihwcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdChuYW1lKXtcbiAgICAgICAgaWYocHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSkpe1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IGZpbmQgcHJvamVjdCB3aXRoIG1hdGNoaW5nIG5hbWUuJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVkaXRQcm9qZWN0TmFtZShwcm9qZWN0LCBuZXdOYW1lKXtcbiAgICAgICAgcHJvamVjdC5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0VG9Eb3MgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3QudG9Eb0xpc3Q7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0N1cnJlbnRQcm9qZWN0cyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUuZGlyKHByb2plY3RzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VDdXJyZW50UHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRGVmYXVsdFByb2plY3QgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IFByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9qZWN0O1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbihkZWxldGVkUHJvamVjdCl7XG4gICAgICAgIGNvbnN0IGluZGV4T2ZEZWxldGVkUHJvamVjdCA9IHByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gZGVsZXRlZFByb2plY3QubmFtZSk7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleE9mRGVsZXRlZFByb2plY3QsIDEpO1xuXG4gICAgICAgIGlmKHByb2plY3RzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGNyZWF0ZURlZmF1bHRQcm9qZWN0KCk7XG4gICAgICAgICAgICBjaGFuZ2VDdXJyZW50UHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGFuZ2VDdXJyZW50UHJvamVjdChwcm9qZWN0c1swXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRDdXJyZW50UHJvamVjdCxcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgZ2V0UHJvamVjdHMsXG4gICAgICAgIHNldFByb2plY3RzLFxuICAgICAgICBnZXRQcm9qZWN0LFxuICAgICAgICBlZGl0UHJvamVjdE5hbWUsXG4gICAgICAgIGdldFByb2plY3RUb0RvcyxcbiAgICAgICAgc2hvd0N1cnJlbnRQcm9qZWN0cyxcbiAgICAgICAgY2hhbmdlQ3VycmVudFByb2plY3QsXG4gICAgICAgIGRlbGV0ZVByb2plY3QsXG4gICAgICAgIGNyZWF0ZURlZmF1bHRQcm9qZWN0XG4gICAgfVxufSkoKVxuXG5cblxuY29uc3QgdG9Eb01hbmFnZXIgPSAoZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IGNyZWF0ZVRvRG8gPSBmdW5jdGlvbihwcm9qZWN0LCB0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWQ9ZmFsc2Upe1xuICAgICAgICBjb25zdCBuZXdUb0RvID0gVG9Eb0l0ZW0odGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkKTtcbiAgICAgICAgcHJvamVjdC50b0RvTGlzdC5wdXNoKG5ld1RvRG8pO1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgfSAgXG5cbiAgICBjb25zdCBnZXRUb0RvID0gZnVuY3Rpb24ocHJvamVjdCwgdGl0bGUpe1xuICAgICAgICBpZihwcm9qZWN0LnRvRG9MaXN0LmZpbmQoaXRlbSA9PiBpdGVtLnRpdGxlID09PSB0aXRsZSkpe1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3QudG9Eb0xpc3QuZmluZChpdGVtID0+IGl0ZW0udGl0bGUgPT09IHRpdGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb3VsZCBub3QgZmluZCBUbyBEbyBJdGVtIHdpdGggbWF0Y2hpbmcgdGl0bGUnKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGRlbGV0ZVRvRG8gPSBmdW5jdGlvbihwcm9qZWN0LCB0b0RvSXRlbSl7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdC50b0RvTGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnRpdGxlID09PSB0b0RvSXRlbS50aXRsZSk7XG4gICAgICAgIHByb2plY3QudG9Eb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0VG9EbyA9IGZ1bmN0aW9uKHRvRG9JdGVtLCB0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWQ9ZmFsc2Upe1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUb0RvID0gVG9Eb0l0ZW0odGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyZW50UHJvamVjdC50b0RvTGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnRpdGxlID09PSB0b0RvSXRlbS50aXRsZSk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnRvRG9MaXN0LnNwbGljZShpbmRleCwgMSwgdXBkYXRlZFRvRG8pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVRvRG8sXG4gICAgICAgIGdldFRvRG8sXG4gICAgICAgIGRlbGV0ZVRvRG8sXG4gICAgICAgIGVkaXRUb0RvLFxuICAgIH1cbn0pKClcblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gRE9NIFN0dWZmIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5jb25zdCBkb21NYW5hZ2VyID0gKGZ1bmN0aW9uKCl7XG5cbiAgICBmdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0TGluaygpe1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtbGlzdF9faXRlbScpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgIHByb2plY3RMaXN0SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZihpdGVtLmlubmVyVGV4dCA9PT0gY3VycmVudFByb2plY3QubmFtZSl7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1jbG9zZS1wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYXBwZW5kKCd4Jyk7XG4gICAgICAgICAgICAgICAgaXRlbS5hcHBlbmQoY2xvc2VCdG4pO1xuXG5cbiAgICAgICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmRlbGV0ZVByb2plY3QoY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLnNob3dQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLnNob3dUb0RvcygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IFxuICAgICAgICB9KVxuXG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQcm9qZWN0cygpe1xuICAgICAgICB3aGlsZShwcm9qZWN0TGlzdC5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKTtcblxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3RfX2l0ZW0nKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0VGV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdFRleHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdF9fdGV4dC13cmFwcGVyJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdFRleHRXcmFwcGVyLmFwcGVuZChwcm9qZWN0Lm5hbWUpO1xuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZChwcm9qZWN0TGlzdFRleHRXcmFwcGVyKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RMaXN0SXRlbSk7XG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZihwcm9qZWN0ID09PSBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuY2hhbmdlQ3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93UHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLnNob3dUb0RvcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgKGUpPT57XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZihwcm9qZWN0TGlzdC5sYXN0Q2hpbGQubm9kZU5hbWUgPT09ICdGT1JNJykgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGZvcm1JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtX19pbnB1dCcpO1xuICAgICAgICAgICAgICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgIGZvcm1JbnB1dC52YWx1ZSA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW0ucmVwbGFjZVdpdGgoZm9ybSk7XG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoZm9ybUlucHV0KTtcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXQuZm9jdXMoKTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZm9ybS5jb250YWlucyhlLnRhcmdldCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQgaW4gZm9ybScpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwbGFjZVdpdGgocHJvamVjdExpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBmb3JtSW5wdXQudmFsdWUpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBsYWNlV2l0aChwcm9qZWN0TGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuZWRpdFByb2plY3ROYW1lKHByb2plY3QsIGZvcm1JbnB1dC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93UHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIHNldEFjdGl2ZVByb2plY3RMaW5rKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dUb0Rvcygpe1xuICAgICAgICB3aGlsZSh0b0RvTGlzdC5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHRvRG9MaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b0RvcyA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RUb0RvcygpOyAgICAgICAgICAgICAgICAgLy8gY291cGxpbmcgYmV0d2VlbiBtb2R1bGVzXG5cblxuICAgICAgICBsZXQgaW5kZXggPSAxO1xuXG4gICAgICAgIHRvRG9zLmZvckVhY2godG9EbyA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHRvRG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWl0ZW0nKTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9UZXh0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRvRG9UZXh0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0by1kby1pdGVtX190ZXh0LXdyYXBwZXInKTtcbiAgICAgICAgICAgIHRvRG9UZXh0V3JhcHBlci5hcHBlbmQodG9Eby50aXRsZSk7XG4gICAgICAgICAgICBjb25zdCB0b0RvQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdG9Eb0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWl0ZW1fX2NoZWNrYm94Jyk7XG4gICAgICAgICAgICB0b0RvQ2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICB0b0RvQ2hlY2tib3guaWQgPSBgdG8tZG8taXRlbV9fY2hlY2tib3gtLSR7aW5kZXh9YDtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9DaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIHRvRG9DaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoYHRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsLS0ke2luZGV4fWApO1xuICAgICAgICAgICAgdG9Eb0NoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgndG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWwnKTtcbiAgICAgICAgICAgIHRvRG9DaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHRvLWRvLWl0ZW1fX2NoZWNrYm94LS0ke2luZGV4fWApO1xuXG4gICAgICAgICAgICB0b0RvQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRvRG8uY29tcGxldGVkID0gIXRvRG8uY29tcGxldGVkO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdG9Eb0xpc3QuYXBwZW5kKHRvRG9JdGVtKTtcbiAgICAgICAgICAgIHRvRG9JdGVtLmFwcGVuZCh0b0RvQ2hlY2tib3gsIHRvRG9DaGVja2JveExhYmVsLCB0b0RvVGV4dFdyYXBwZXIpOyAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodG9Eby5jb21wbGV0ZWQgPT09IHRydWUpIHRvRG9DaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcblxuXG4gICAgICAgICAgICB0b0RvSXRlbS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybVRlbXBsYXRlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0b0RvRm9ybVRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRvRG9JdGVtLnJlcGxhY2VXaXRoKGZvcm1UZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVUb0RvRm9ybScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jbG9zZS10by1kbycpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LWxvdycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LW1lZGl1bScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1oaWdoJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaW9yaXR5LWJ0bicpO1xuXG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb01hbmFnZXIuZGVsZXRlVG9Ebyhwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLCB0b0RvKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlMb3cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHByaW9yaXR5TWVkaXVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlNZWRpdW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHByaW9yaXR5SGlnaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5SGlnaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gdG9Eby50aXRsZTtcbiAgICAgICAgICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0b0RvLmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRvRG8uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlQnRuID0gQXJyYXkuZnJvbShwcmlvcml0eUJ0bnMpLmZpbmQoZWwgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHRvRG8ucHJpb3JpdHkpKTtcbiAgICAgICAgICAgICAgICBhY3RpdmVCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZm9ybS5jb250YWlucyhlLnRhcmdldCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQgaW4gZm9ybScpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwbGFjZVdpdGgodG9Eb0l0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlDb2RlID0gZS5jb2RlO1xuICAgICAgICAgICAgICAgICAgICBpZihrZXlDb2RlID09PSAnRW50ZXInICYmICFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRpdGxlSW5wdXQudmFsdWUpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlQnRuID0gQXJyYXkuZnJvbShwcmlvcml0eUJ0bnMpLmZpbmQoZWwgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gYWN0aXZlQnRuLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb01hbmFnZXIuZWRpdFRvRG8oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9EbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eby5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIuc2hvd1RvRG9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmNvZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmKGtleUNvZGUgPT09ICdFbnRlcicgJiYgIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGl0bGVJbnB1dC52YWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVCdG4gPSBBcnJheS5mcm9tKHByaW9yaXR5QnRucykuZmluZChlbCA9PiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBhY3RpdmVCdG4uaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RvTWFuYWdlci5lZGl0VG9EbyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0RvLmNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIFxuICAgIHJldHVybntcbiAgICAgICAgc2hvd1Byb2plY3RzLFxuICAgICAgICBzaG93VG9Eb3NcbiAgICB9XG59KSgpXG5cblxuLy9Mb2NhbCBTdG9yYWdlXG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIHZhciBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIHZhciB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKSkpOyAgLy8gbG9jYWwgc3RvcmFnZSBvbmx5IHN1cHBvcnRzIHN0cmluZyB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbXVzdCB1c2UgSlNPTi5zdHJpbmdpZnkgYW5kIEpTT04ucGFyc2VcbiAgICBjb25zb2xlLmRpcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSk7XG59XG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgIGNvbnNvbGUubG9nKCdZaXBwZWUhIFdlIGNhbiB1c2UgbG9jYWxTdG9yYWdlIGF3ZXNvbWVuZXNzJyk7XG5cbiAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuc2V0UHJvamVjdHMocHJvamVjdHMpO1xuICAgICAgICBwcm9qZWN0TWFuYWdlci5zaG93Q3VycmVudFByb2plY3RzKCk7XG4gICAgICAgIGRvbU1hbmFnZXIuc2hvd1Byb2plY3RzKCk7XG4gICAgICAgIGRvbU1hbmFnZXIuc2hvd1RvRG9zKCk7XG4gICAgfVxuXG59XG5lbHNlIHtcbiAgICBjb25zb2xlLmxvZygnVG9vIGJhZCwgbm8gbG9jYWxTdG9yYWdlIGZvciB1cycpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==