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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  box-sizing: border-box;\n  user-select: none;\n}\n\nli {\n  list-style: none;\n}\n\n.icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.icon-add-solid,\n.icon-plus,\n.icon-circle-down {\n  fill: #fff;\n  width: 3.5rem;\n  height: 3.5rem;\n  margin-bottom: 3rem;\n  margin-left: 2.5rem;\n  transition: all 500ms ease-in-out;\n  border-radius: 50%;\n}\n.icon-add-solid:hover,\n.icon-plus:hover,\n.icon-circle-down:hover {\n  cursor: pointer;\n  fill: #8b5615;\n}\n@media only screen and (max-width: 760px) {\n  .icon-add-solid,\n.icon-plus,\n.icon-circle-down {\n    margin-bottom: 0;\n  }\n}\n\n.icon-add-solid:hover,\n.icon-plus:hover {\n  transform: scale(1.2);\n}\n\n.main {\n  font-size: 2rem;\n  font-family: \"Noto Sans\", sans-serif;\n  font-weight: 400;\n  color: #fff;\n}\n\n.heading-primary {\n  margin-bottom: 3rem;\n}\n@media only screen and (max-width: 760px) {\n  .heading-primary {\n    margin: 0;\n  }\n}\n\n.heading-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 4rem;\n  padding-bottom: 0;\n  z-index: 1;\n}\n@media only screen and (max-width: 760px) {\n  .heading-container {\n    padding: 1rem 2rem;\n    background-color: #242426;\n  }\n}\n.heading-container--to-do {\n  padding: 0;\n}\n@media only screen and (max-width: 760px) {\n  .heading-container--to-do {\n    margin-bottom: 2rem;\n    background-color: transparent;\n  }\n}\n\n.display-block {\n  display: block;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-90 {\n  width: 90%;\n}\n\nbutton {\n  background-color: transparent;\n  border: 1px solid #fff;\n  font-size: 2rem;\n  font-weight: inherit;\n  font-family: inherit;\n  color: inherit;\n}\n\n.btn-close-project {\n  border: 0;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  position: relative;\n}\n.btn-close-project:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.btn-close-to-do {\n  border: 0;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  right: 4rem;\n  visibility: hidden;\n}\n.btn-close-to-do:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.form:hover .btn-close-to-do {\n  visibility: visible;\n}\n\n.btn-group {\n  display: inline-block;\n}\n.btn-group__label {\n  display: inline-block;\n  margin-right: 1rem;\n}\n.btn-group__btn {\n  padding: 0.5rem 2rem;\n  border-radius: 3px;\n}\n.btn-group__btn:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.priority-btn.active {\n  background-color: #8b5615;\n}\n\nlabel {\n  margin-right: 1rem;\n}\n\n.form-container--createProject {\n  display: \"block\";\n}\n\n.form {\n  border: 1px solid #fff;\n  padding: 2rem 4rem;\n}\n.form__group {\n  padding: 1rem 0;\n}\n.form__group:first-child {\n  padding-top: 0;\n}\n.form__group:last-child {\n  padding-bottom: 0;\n}\n.form__input {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 400;\n  color: inherit;\n  background-color: transparent;\n  border: 0;\n  outline: none;\n  padding: 1rem 4rem;\n}\n.form__input--to-do {\n  padding: 0;\n  resize: none;\n}\n.form__input--to-do::-webkit-scrollbar {\n  display: none;\n}\n\n.create-project-form {\n  width: 100%;\n  background-color: #242426;\n}\n\n#createToDoForm {\n  margin: 1rem 0;\n  border-radius: 3px;\n  position: relative;\n}\n@media only screen and (max-width: 760px) {\n  #createToDoForm {\n    width: calc(100% + 4rem);\n    margin-left: -4rem;\n    padding: 1rem 2rem;\n  }\n}\n\ninput[type=date]::-webkit-inner-spin-button,\ninput[type=date]::-webkit-calendar-picker-indicator {\n  display: block;\n}\n\n.footer {\n  padding: 1rem;\n  background-color: #292937;\n  color: #fff;\n}\n\n.footer-text-main {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media only screen and (max-width: 375px) {\n  .footer-text-main {\n    margin-bottom: 1rem;\n  }\n}\n\n.odin-logo {\n  height: 3.5rem;\n  width: auto;\n  margin-left: 2.5rem;\n  fill: #fff;\n  color: #fff;\n}\n\n.github-cat {\n  fill: #fff;\n  margin-left: 2rem;\n  transition: all 2s;\n  height: 3.5rem;\n}\n.github-cat:hover {\n  transform: rotate(360deg);\n  fill: #8b5615;\n}\n@media only screen and (max-width: 496px) {\n  .github-cat {\n    margin-left: 30px;\n  }\n}\n\n.github-handle {\n  color: #8b5615;\n  font-weight: 400;\n  padding: 0 1rem;\n  text-decoration: none;\n}\n\n.footer-text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media only screen and (max-width: 496px) {\n  .footer-text {\n    flex-direction: column;\n  }\n}\n\n.footer-text-main,\n.footer-logos {\n  display: inline-block;\n}\n\n@media only screen and (max-width: 496px) {\n  .footer-logos {\n    margin-left: -15px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n  }\n}\n\n.sidebar {\n  grid-template-columns: 1/2;\n  grid-row: 1/3;\n  width: 100%;\n  background-color: #242426;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n}\n@media only screen and (max-width: 760px) {\n  .sidebar {\n    grid-row: 1/2;\n    background-color: transparent;\n  }\n}\n\n.project-list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n}\n.project-list__item {\n  padding: 1rem 4rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #242426;\n}\n@media only screen and (max-width: 760px) {\n  .project-list {\n    height: 0;\n    overflow: hidden;\n  }\n}\n\n.project-list__item.active {\n  font-weight: 400;\n  background-color: #8b5615;\n}\n\n.toggler {\n  display: none;\n  transition: transform 1s;\n  transform: rotateX(0);\n  z-index: 3;\n  position: absolute;\n  right: 2rem;\n}\n@media only screen and (max-width: 760px) {\n  .toggler {\n    display: block;\n  }\n}\n\n.flip-180 {\n  transform: rotateX(-180deg);\n}\n\n.hero {\n  position: fixed;\n  height: 100vh;\n  width: 101vw;\n  background: linear-gradient(to bottom right, #293038, #31475a);\n  z-index: -1;\n}\n\n.grid {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 30rem 1fr;\n  grid-template-rows: 1fr 6rem;\n}\n@media only screen and (max-width: 760px) {\n  .grid {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr 6rem;\n  }\n}\n@media only screen and (max-width: 496px) {\n  .grid {\n    grid-template-rows: auto 1fr 10rem;\n  }\n}\n\n.to-do-container {\n  padding: 4rem 8rem;\n}\n@media only screen and (max-width: 760px) {\n  .to-do-container {\n    padding: 2rem 2rem;\n  }\n}\n\n@media only screen and (max-width: 760px) {\n  .to-do-list {\n    padding-left: 4rem;\n  }\n}\n\n.to-do-item {\n  padding: 1rem 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.to-do-item__checkbox {\n  position: absolute;\n  left: -5rem;\n  height: 3rem;\n  width: 3rem;\n  display: none;\n}\n.to-do-item__checkbox-label {\n  height: 2rem;\n  width: 2rem;\n  background-color: #fff;\n  position: absolute;\n  left: -4rem;\n  border-radius: 50%;\n  transition: transform 300ms;\n}\n.to-do-item__checkbox-label::after {\n  content: \"\";\n  height: 50%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #242424;\n  z-index: 3;\n  transform: translate(50%, 50%);\n  visibility: hidden;\n}\n.to-do-item__checkbox-label:hover {\n  cursor: pointer;\n  transform: scale(1.2);\n}\n.to-do-item__checkbox-label.active {\n  visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label {\n  opacity: 0.5;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label::after {\n  visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__text-wrapper {\n  text-decoration: line-through;\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/scss/base/_base.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_icons.scss","webpack://./src/scss/abstracts/_variables.scss","webpack://./src/scss/base/_typography.scss","webpack://./src/scss/base/_utilities.scss","webpack://./src/scss/components/_button.scss","webpack://./src/scss/components/_form.scss","webpack://./src/scss/layout/_footer.scss","webpack://./src/scss/layout/_sidebar.scss","webpack://./src/scss/pages/_home.scss"],"names":[],"mappings":"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","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nhtml{\n    font-size: 62.5%;\n}\n\nbody{\n    box-sizing: border-box;\n    user-select: none;\n}\n\nli{\n    list-style: none;\n}\n\n.icon {\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    stroke-width: 0;\n    stroke: currentColor;\n    fill: currentColor;\n}\n\nform::-webkit-scrollbar {\n    display: none;\n}","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  box-sizing: border-box;\n  user-select: none;\n}\n\nli {\n  list-style: none;\n}\n\n.icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.icon-add-solid,\n.icon-plus,\n.icon-circle-down {\n  fill: #fff;\n  width: 3.5rem;\n  height: 3.5rem;\n  margin-bottom: 3rem;\n  margin-left: 2.5rem;\n  transition: all 500ms ease-in-out;\n  border-radius: 50%;\n}\n.icon-add-solid:hover,\n.icon-plus:hover,\n.icon-circle-down:hover {\n  cursor: pointer;\n  fill: #8b5615;\n}\n@media only screen and (max-width: 760px) {\n  .icon-add-solid,\n.icon-plus,\n.icon-circle-down {\n    margin-bottom: 0;\n  }\n}\n\n.icon-add-solid:hover,\n.icon-plus:hover {\n  transform: scale(1.2);\n}\n\n.main {\n  font-size: 2rem;\n  font-family: \"Noto Sans\", sans-serif;\n  font-weight: 400;\n  color: #fff;\n}\n\n.heading-primary {\n  margin-bottom: 3rem;\n}\n@media only screen and (max-width: 760px) {\n  .heading-primary {\n    margin: 0;\n  }\n}\n\n.heading-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 4rem;\n  padding-bottom: 0;\n  z-index: 1;\n}\n@media only screen and (max-width: 760px) {\n  .heading-container {\n    padding: 1rem 2rem;\n    background-color: #242426;\n  }\n}\n.heading-container--to-do {\n  padding: 0;\n}\n@media only screen and (max-width: 760px) {\n  .heading-container--to-do {\n    margin-bottom: 2rem;\n    background-color: transparent;\n  }\n}\n\n.display-block {\n  display: block;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-90 {\n  width: 90%;\n}\n\nbutton {\n  background-color: transparent;\n  border: 1px solid #fff;\n  font-size: 2rem;\n  font-weight: inherit;\n  font-family: inherit;\n  color: inherit;\n}\n\n.btn-close-project {\n  border: 0;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  position: relative;\n}\n.btn-close-project:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.btn-close-to-do {\n  border: 0;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  right: 4rem;\n  visibility: hidden;\n}\n.btn-close-to-do:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.form:hover .btn-close-to-do {\n  visibility: visible;\n}\n\n.btn-group {\n  display: inline-block;\n}\n.btn-group__label {\n  display: inline-block;\n  margin-right: 1rem;\n}\n.btn-group__btn {\n  padding: 0.5rem 2rem;\n  border-radius: 3px;\n}\n.btn-group__btn:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.priority-btn.active {\n  background-color: #8b5615;\n}\n\nlabel {\n  margin-right: 1rem;\n}\n\n.form-container--createProject {\n  display: \"block\";\n}\n\n.form {\n  border: 1px solid #fff;\n  padding: 2rem 4rem;\n}\n.form__group {\n  padding: 1rem 0;\n}\n.form__group:first-child {\n  padding-top: 0;\n}\n.form__group:last-child {\n  padding-bottom: 0;\n}\n.form__input {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 400;\n  color: inherit;\n  background-color: transparent;\n  border: 0;\n  outline: none;\n  padding: 1rem 4rem;\n}\n.form__input--to-do {\n  padding: 0;\n  resize: none;\n}\n.form__input--to-do::-webkit-scrollbar {\n  display: none;\n}\n\n.create-project-form {\n  width: 100%;\n  background-color: #242426;\n}\n\n#createToDoForm {\n  margin: 1rem 0;\n  border-radius: 3px;\n  position: relative;\n}\n@media only screen and (max-width: 760px) {\n  #createToDoForm {\n    width: calc(100% + 4rem);\n    margin-left: -4rem;\n    padding: 1rem 2rem;\n  }\n}\n\ninput[type=date]::-webkit-inner-spin-button,\ninput[type=date]::-webkit-calendar-picker-indicator {\n  display: block;\n}\n\n.footer {\n  padding: 1rem;\n  background-color: #292937;\n  color: #fff;\n}\n\n.footer-text-main {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media only screen and (max-width: 375px) {\n  .footer-text-main {\n    margin-bottom: 1rem;\n  }\n}\n\n.odin-logo {\n  height: 3.5rem;\n  width: auto;\n  margin-left: 2.5rem;\n  fill: #fff;\n  color: #fff;\n}\n\n.github-cat {\n  fill: #fff;\n  margin-left: 2rem;\n  transition: all 2s;\n  height: 3.5rem;\n}\n.github-cat:hover {\n  transform: rotate(360deg);\n  fill: #8b5615;\n}\n@media only screen and (max-width: 496px) {\n  .github-cat {\n    margin-left: 30px;\n  }\n}\n\n.github-handle {\n  color: #8b5615;\n  font-weight: 400;\n  padding: 0 1rem;\n  text-decoration: none;\n}\n\n.footer-text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media only screen and (max-width: 496px) {\n  .footer-text {\n    flex-direction: column;\n  }\n}\n\n.footer-text-main,\n.footer-logos {\n  display: inline-block;\n}\n\n@media only screen and (max-width: 496px) {\n  .footer-logos {\n    margin-left: -15px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n  }\n}\n\n.sidebar {\n  grid-template-columns: 1/2;\n  grid-row: 1/3;\n  width: 100%;\n  background-color: #242426;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n}\n@media only screen and (max-width: 760px) {\n  .sidebar {\n    grid-row: 1/2;\n    background-color: transparent;\n  }\n}\n\n.project-list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n}\n.project-list__item {\n  padding: 1rem 4rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #242426;\n}\n@media only screen and (max-width: 760px) {\n  .project-list {\n    height: 0;\n    overflow: hidden;\n  }\n}\n\n.project-list__item.active {\n  font-weight: 400;\n  background-color: #8b5615;\n}\n\n.toggler {\n  display: none;\n  transition: transform 1s;\n  transform: rotateX(0);\n  z-index: 3;\n  position: absolute;\n  right: 2rem;\n}\n@media only screen and (max-width: 760px) {\n  .toggler {\n    display: block;\n  }\n}\n\n.flip-180 {\n  transform: rotateX(-180deg);\n}\n\n.hero {\n  position: fixed;\n  height: 100vh;\n  width: 101vw;\n  background: linear-gradient(to bottom right, #293038, #31475a);\n  z-index: -1;\n}\n\n.grid {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 30rem 1fr;\n  grid-template-rows: 1fr 6rem;\n}\n@media only screen and (max-width: 760px) {\n  .grid {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr 6rem;\n  }\n}\n@media only screen and (max-width: 496px) {\n  .grid {\n    grid-template-rows: auto 1fr 10rem;\n  }\n}\n\n.to-do-container {\n  padding: 4rem 8rem;\n}\n@media only screen and (max-width: 760px) {\n  .to-do-container {\n    padding: 2rem 2rem;\n  }\n}\n\n@media only screen and (max-width: 760px) {\n  .to-do-list {\n    padding-left: 4rem;\n  }\n}\n\n.to-do-item {\n  padding: 1rem 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.to-do-item__checkbox {\n  position: absolute;\n  left: -5rem;\n  height: 3rem;\n  width: 3rem;\n  display: none;\n}\n.to-do-item__checkbox-label {\n  height: 2rem;\n  width: 2rem;\n  background-color: #fff;\n  position: absolute;\n  left: -4rem;\n  border-radius: 50%;\n  transition: transform 300ms;\n}\n.to-do-item__checkbox-label::after {\n  content: \"\";\n  height: 50%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #242424;\n  z-index: 3;\n  transform: translate(50%, 50%);\n  visibility: hidden;\n}\n.to-do-item__checkbox-label:hover {\n  cursor: pointer;\n  transform: scale(1.2);\n}\n.to-do-item__checkbox-label.active {\n  visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label {\n  opacity: 0.5;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label::after {\n  visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__text-wrapper {\n  text-decoration: line-through;\n  opacity: 0.5;\n}",".icon-add-solid,\n.icon-plus,\n.icon-circle-down{\n    fill: #fff;\n    width: 3.5rem;\n    height: 3.5rem;\n    margin-bottom: 3rem;\n    margin-left: 2.5rem;\n    transition: all 500ms ease-in-out;\n    border-radius: 50%;\n\n    &:hover{\n        cursor: pointer;\n        fill: $color-primary;\n    }\n\n\n    @media only screen and (max-width: 760px){\n        margin-bottom: 0;\n    }\n}\n\n.icon-add-solid,\n.icon-plus{\n    &:hover{\n        transform: scale(1.2);\n    }\n}","// COLORS\n\n\n$color-primary: #8b5615;\n\n//FONT\n\n$font-size-default: 1.6rem;",".main{\n    font-size: 2rem;\n    font-family: 'Noto Sans', sans-serif;\n    font-weight: 400;\n    color: #fff;\n}\n\n.heading-primary{\n    margin-bottom: 3rem;\n    @media only screen and (max-width: 760px){\n        margin: 0;\n    }\n}\n\n.heading-container{\n    display: flex;\n    align-items: center;\n    width: 100%;\n    padding: 4rem;\n    padding-bottom: 0;\n    z-index: 1;\n\n    @media only screen and (max-width: 760px){\n        padding: 1rem 2rem;\n        background-color: #242426;\n    }\n\n    &--to-do{\n        padding: 0;\n        \n        @media only screen and (max-width: 760px){\n            margin-bottom: 2rem;\n            background-color: transparent;\n\n        }\n    }\n}\n",".display-block{\n    display: block;\n}\n\n.full-width{\n    width: 100%;\n}\n\n.width-90{\n    width: 90%;\n}","button{\n    background-color: transparent;\n    border: 1px solid #fff;\n    font-size: 2rem;\n    font-weight: inherit;\n    font-family: inherit;\n    color: inherit;\n}\n\n.btn-close-project{\n    border: 0;\n    font-weight: 300;\n    color: rgba(255, 255, 255, 0.5);\n    position: relative;\n\n    &:hover{\n        cursor: pointer;\n        color: #fff;\n    }\n}\n\n.btn-close-to-do{\n    border: 0;\n    font-weight: 300;\n    color: rgba(255, 255, 255, 0.5);\n    position: absolute;\n    right: 4rem;\n    visibility: hidden;\n\n    &:hover{\n        cursor: pointer;\n        color: #fff;\n    }\n}\n\n.form:hover .btn-close-to-do{\n    visibility: visible;\n}\n\n\n\n\n.btn-group{\n    display: inline-block;\n\n    &__label{\n        display: inline-block;\n        margin-right: 1rem;\n    }\n\n    &__btn{\n        padding: .5rem 2rem;\n        border-radius: 3px;\n\n        &:hover{\n            cursor: pointer;\n            background-color: rgba(0, 0, 0, 0.3);\n        }\n    }\n}\n\n.priority-btn.active{\n    background-color: $color-primary;\n}","label{\n    margin-right: 1rem;\n}\n\n.form-container--createProject{\n    display: 'block';\n}\n\n.form{\n\n    border: 1px solid #fff;\n    padding: 2rem 4rem;\n\n    &__group{\n        padding: 1rem 0;\n\n        &:first-child{\n            padding-top: 0;\n        }\n        &:last-child{\n            padding-bottom: 0;\n        }\n    }\n\n    &__input{\n        font-family: inherit;\n        font-size: inherit;\n        font-weight: 400;\n        color: inherit;\n        background-color: transparent;\n        border: 0;\n        outline: none;\n        padding: 1rem 4rem;\n        \n\n        &--to-do{\n            padding: 0;\n            resize: none;\n\n            &::-webkit-scrollbar{\n                display: none;\n            }\n        }\n    }\n}\n\n.create-project-form{\n    width: 100%;\n    background-color: #242426;\n}\n\n#createToDoForm{\n    margin: 1rem 0;\n    border-radius: 3px;\n    position: relative;\n\n    @media only screen and (max-width: 760px){\n        width: calc(100% + 4rem);\n        margin-left: -4rem;\n        padding: 1rem 2rem;\n    }\n}\n\n\ninput[type=\"date\"]::-webkit-inner-spin-button,\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n    display: block;\n}",".footer{\n    padding: 1rem;\n    // border-top: 1px solid rgba(0, 0, 0, 0.283);\n    background-color: #292937;\n    color: #fff;\n}\n\n.footer-text-main{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    @media only screen and (max-width:375px){\n        margin-bottom: 1rem;\n    }\n}\n\n.odin-logo{\n    height: 3.5rem;\n    width: auto;\n    margin-left: 2.5rem;\n    fill: #fff;\n    color: #fff;\n}\n\n.github-cat{\n    fill: #fff;\n    margin-left: 2rem;\n    transition: all 2s;\n    height: 3.5rem;\n\n    &:hover{\n        transform: rotate(360deg);\n        fill: $color-primary;\n    }\n\n    @media only screen and (max-width:496px){\n        margin-left: 30px;\n    }\n}\n\n.github-handle{\n    color: $color-primary;\n    font-weight: 400;\n    padding: 0 1rem;\n    text-decoration: none;\n}\n\n.footer-text{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    @media only screen and (max-width:496px){\n        flex-direction: column;\n    }\n}\n\n.footer-text-main,\n.footer-logos{\n    display: inline-block; \n}\n\n.footer-logos{\n    @media only screen and (max-width:496px){\n        margin-left: -15px;\n        width: 100%;\n        text-align: center;\n        display: flex;\n        justify-content: center;\n    }\n}\n",".sidebar{\n    grid-template-columns: 1/2;\n    grid-row: 1/3;\n    width: 100%;\n\n    background-color: #242426;\n    color: white;\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n\n    position: relative;\n\n    @media only screen and (max-width: 760px){\n        grid-row: 1/2;\n        background-color: transparent;\n    }\n}\n\n.project-list{\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    width: 100%;\n\n    &__item{\n        padding: 1rem 4rem;\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        background-color: #242426;\n    }\n    \n    @media only screen and (max-width: 760px){\n        height: 0;\n        overflow: hidden;\n        // transition: height 1s;\n    }\n\n    \n}\n\n.project-list__item.active{\n    font-weight: 400;\n    background-color: $color-primary;\n}\n\n.toggler{\n    display: none;\n    transition: transform 1s;\n    transform: rotateX(0);\n    z-index: 3;   \n    position: absolute;\n    right: 2rem;\n\n    @media only screen and (max-width: 760px){\n        display: block;       \n    }\n}\n\n.flip-180{\n    transform: rotateX(-180deg);\n}\n",".hero{\n    position: fixed;\n    height: 100vh;\n    width: 101vw;\n    background: linear-gradient(to bottom right,#293038, #31475a);\n\n    z-index: -1;\n}\n\n.grid{\n    width: 100%;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 30rem 1fr;\n    grid-template-rows: 1fr 6rem;\n\n    @media only screen and (max-width: 760px){\n        grid-template-columns: 1fr;\n        grid-template-rows: auto 1fr 6rem;\n    }\n\n    @media only screen and (max-width:496px){\n        grid-template-rows: auto 1fr 10rem;\n    }\n}\n\n.to-do-container{\n    padding: 4rem 8rem;\n\n    @media only screen and (max-width: 760px){\n        padding: 2rem 2rem;\n    }\n}\n\n.to-do-list{\n    @media only screen and (max-width: 760px){\n        padding-left: 4rem;\n    }\n}\n\n.to-do-item{\n    padding: 1rem 0;\n    display: flex;\n    align-items: center;\n    position: relative;\n\n    &__checkbox{\n        position: absolute;\n        left: -5rem;\n        height: 3rem;\n        width: 3rem;\n        display: none;\n    }\n    \n    &__checkbox-label{\n        height: 2rem;\n        width: 2rem;\n        background-color: #fff;\n        position: absolute;\n        left: -4rem;\n        border-radius: 50%;\n        transition: transform 300ms;\n\n        &::after{\n            content: \"\";\n            height: 50%;\n            aspect-ratio: 1;\n            border-radius: 50%;\n            position: absolute;\n            background-color: #242424;\n            z-index: 3;\n            transform: translate(50%,50%);\n            visibility: hidden;\n        }\n\n        &:hover{\n            cursor: pointer;\n            transform: scale(1.2);\n        }\n\n        &.active{\n            visibility: visible;\n        }\n    }\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label{\n    opacity: .5;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label::after{\n    visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__text-wrapper{\n    text-decoration: line-through;\n    opacity: .5;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _sectionController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sectionController */ "./src/sectionController.js");
/* harmony import */ var _toDoManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoManager */ "./src/toDoManager.js");




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
                    _sectionController__WEBPACK_IMPORTED_MODULE_1__["default"].closeSection(0);
                    _sectionController__WEBPACK_IMPORTED_MODULE_1__["default"].expandSection(0);
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


            toDoItem.addEventListener('click', ()=>{
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
                    _toDoManager__WEBPACK_IMPORTED_MODULE_2__["default"].deleteToDo(_projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject(), toDo);
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
                
                        _toDoManager__WEBPACK_IMPORTED_MODULE_2__["default"].editToDo(
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
                
                        _toDoManager__WEBPACK_IMPORTED_MODULE_2__["default"].editToDo(
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
/* harmony import */ var _sectionController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sectionController */ "./src/sectionController.js");


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

        // sectionController.closeSection(0);
        // sectionController.expandSection(0);

        localStorage.clear();
        populateStorage();          // save new projects array to storage
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

/***/ "./src/sectionController.js":
/*!**********************************!*\
  !*** ./src/sectionController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectList = document.querySelector('.project-list');

const sectionController = (function(){

    let expanded = false;

    function expandSection(delay) {
        const projectLI = document.querySelector('.project-list__item');
        const projectLIs = document.querySelectorAll('.project-list__item');
        const projectForms = document.querySelector('.create-project-form');
        const projectListItemHeight = projectLI.scrollHeight;
        let projectListHeight;

        if(projectForms){
            projectListHeight = parseInt(projectListItemHeight) * (parseInt(projectLIs.length)+parseInt(projectForms.length));
        } else {
            projectListHeight = parseInt(projectListItemHeight) * parseInt(projectLIs.length);
        }


        projectList.style.transition = `all ${delay}ms`
        projectList.style.height = `${projectListHeight}px`
  
        expanded = true;
    }
    
    function closeSection(delay) {
        projectList.style.transition = `all ${delay}`
        projectList.style.height = '0';
        projectList.style.transition = '500ms';

        expanded = false;
    }

    function isExpanded(){
        console.log(expanded)
        return expanded;
    }

    return {
        expandSection,
        closeSection,
        isExpanded
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sectionController);

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
/* harmony import */ var _sectionController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sectionController */ "./src/sectionController.js");
//Dependencies List







//DOM Query Selectors

const projectList = document.querySelector('.project-list');
const toDoList = document.querySelector('.to-do-list');
const createProjectBtn = document.querySelector('.create-project-btn');
const toDoFormTemplate = document.getElementById('to-do-form-template');
const createToDoBtn = document.querySelector('.create-to-do-btn');
const toggler = document.querySelector('.toggler');

createProjectBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if(projectList.lastChild.nodeName === 'FORM') return;

    const form = document.createElement('form');
    const formInput = document.createElement('input');
    form.classList.add('create-project-form')
    formInput.classList.add('form__input');
    formInput.setAttribute('type', 'text');
    formInput.setAttribute('placeholder', 'New Project');
    projectList.append(form);
    form.append(formInput);
    _sectionController__WEBPACK_IMPORTED_MODULE_5__["default"].closeSection(0);
    _sectionController__WEBPACK_IMPORTED_MODULE_5__["default"].expandSection(0);
    formInput.focus();

    function removeForm(e){
        if(!form.contains(e.target)) {
            form.remove();
            _sectionController__WEBPACK_IMPORTED_MODULE_5__["default"].closeSection(0);
            _sectionController__WEBPACK_IMPORTED_MODULE_5__["default"].expandSection(0);
            window.removeEventListener('mousedown', removeForm);
        }
    }

    window.addEventListener('mousedown', removeForm);

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





// Mobile nav toggler


toggler.addEventListener('click', e => {
    let isExpanded = _sectionController__WEBPACK_IMPORTED_MODULE_5__["default"].isExpanded();
    if(isExpanded){
        _sectionController__WEBPACK_IMPORTED_MODULE_5__["default"].closeSection(500)
    } else{
        _sectionController__WEBPACK_IMPORTED_MODULE_5__["default"].expandSection(500)
    }
    toggler.classList.toggle('flip-180')
})

let mql = window.matchMedia('(max-width: 760px)');

mql.addEventListener('change', e => {
    if(mql.matches === false && projectList.style.height === '0px'){
        projectList.style.height = ''
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLHdCQUF3QixHQUFHLFVBQVUscUJBQXFCLEdBQUcsVUFBVSwyQkFBMkIsc0JBQXNCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxXQUFXLDBCQUEwQixlQUFlLGdCQUFnQixvQkFBb0IseUJBQXlCLHVCQUF1QixHQUFHLDZCQUE2QixrQkFBa0IsR0FBRyxzREFBc0QsZUFBZSxrQkFBa0IsbUJBQW1CLHdCQUF3Qix3QkFBd0Isc0NBQXNDLHVCQUF1QixHQUFHLHNFQUFzRSxvQkFBb0Isa0JBQWtCLEdBQUcsNkNBQTZDLHNEQUFzRCx1QkFBdUIsS0FBSyxHQUFHLDhDQUE4QywwQkFBMEIsR0FBRyxXQUFXLG9CQUFvQiwyQ0FBMkMscUJBQXFCLGdCQUFnQixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyw2Q0FBNkMsc0JBQXNCLGdCQUFnQixLQUFLLEdBQUcsd0JBQXdCLGtCQUFrQix3QkFBd0IsZ0JBQWdCLGtCQUFrQixzQkFBc0IsZUFBZSxHQUFHLDZDQUE2Qyx3QkFBd0IseUJBQXlCLGdDQUFnQyxLQUFLLEdBQUcsNkJBQTZCLGVBQWUsR0FBRyw2Q0FBNkMsK0JBQStCLDBCQUEwQixvQ0FBb0MsS0FBSyxHQUFHLG9CQUFvQixtQkFBbUIsR0FBRyxpQkFBaUIsZ0JBQWdCLEdBQUcsZUFBZSxlQUFlLEdBQUcsWUFBWSxrQ0FBa0MsMkJBQTJCLG9CQUFvQix5QkFBeUIseUJBQXlCLG1CQUFtQixHQUFHLHdCQUF3QixjQUFjLHFCQUFxQixvQ0FBb0MsdUJBQXVCLEdBQUcsNEJBQTRCLG9CQUFvQixnQkFBZ0IsR0FBRyxzQkFBc0IsY0FBYyxxQkFBcUIsb0NBQW9DLHVCQUF1QixnQkFBZ0IsdUJBQXVCLEdBQUcsMEJBQTBCLG9CQUFvQixnQkFBZ0IsR0FBRyxrQ0FBa0Msd0JBQXdCLEdBQUcsZ0JBQWdCLDBCQUEwQixHQUFHLHFCQUFxQiwwQkFBMEIsdUJBQXVCLEdBQUcsbUJBQW1CLHlCQUF5Qix1QkFBdUIsR0FBRyx5QkFBeUIsb0JBQW9CLHlDQUF5QyxHQUFHLDBCQUEwQiw4QkFBOEIsR0FBRyxXQUFXLHVCQUF1QixHQUFHLG9DQUFvQyx1QkFBdUIsR0FBRyxXQUFXLDJCQUEyQix1QkFBdUIsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsNEJBQTRCLG1CQUFtQixHQUFHLDJCQUEyQixzQkFBc0IsR0FBRyxnQkFBZ0IseUJBQXlCLHVCQUF1QixxQkFBcUIsbUJBQW1CLGtDQUFrQyxjQUFjLGtCQUFrQix1QkFBdUIsR0FBRyx1QkFBdUIsZUFBZSxpQkFBaUIsR0FBRywwQ0FBMEMsa0JBQWtCLEdBQUcsMEJBQTBCLGdCQUFnQiw4QkFBOEIsR0FBRyxxQkFBcUIsbUJBQW1CLHVCQUF1Qix1QkFBdUIsR0FBRyw2Q0FBNkMscUJBQXFCLCtCQUErQix5QkFBeUIseUJBQXlCLEtBQUssR0FBRyx1R0FBdUcsbUJBQW1CLEdBQUcsYUFBYSxrQkFBa0IsOEJBQThCLGdCQUFnQixHQUFHLHVCQUF1QixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLDZDQUE2Qyx1QkFBdUIsMEJBQTBCLEtBQUssR0FBRyxnQkFBZ0IsbUJBQW1CLGdCQUFnQix3QkFBd0IsZUFBZSxnQkFBZ0IsR0FBRyxpQkFBaUIsZUFBZSxzQkFBc0IsdUJBQXVCLG1CQUFtQixHQUFHLHFCQUFxQiw4QkFBOEIsa0JBQWtCLEdBQUcsNkNBQTZDLGlCQUFpQix3QkFBd0IsS0FBSyxHQUFHLG9CQUFvQixtQkFBbUIscUJBQXFCLG9CQUFvQiwwQkFBMEIsR0FBRyxrQkFBa0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyw2Q0FBNkMsa0JBQWtCLDZCQUE2QixLQUFLLEdBQUcsdUNBQXVDLDBCQUEwQixHQUFHLCtDQUErQyxtQkFBbUIseUJBQXlCLGtCQUFrQix5QkFBeUIsb0JBQW9CLDhCQUE4QixLQUFLLEdBQUcsY0FBYywrQkFBK0Isa0JBQWtCLGdCQUFnQiw4QkFBOEIsaUJBQWlCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHVCQUF1QixHQUFHLDZDQUE2QyxjQUFjLG9CQUFvQixvQ0FBb0MsS0FBSyxHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLDRCQUE0Qiw0QkFBNEIsZ0JBQWdCLEdBQUcsdUJBQXVCLHVCQUF1QixnQkFBZ0Isa0JBQWtCLG1DQUFtQyx3QkFBd0IsOEJBQThCLEdBQUcsNkNBQTZDLG1CQUFtQixnQkFBZ0IsdUJBQXVCLEtBQUssR0FBRyxnQ0FBZ0MscUJBQXFCLDhCQUE4QixHQUFHLGNBQWMsa0JBQWtCLDZCQUE2QiwwQkFBMEIsZUFBZSx1QkFBdUIsZ0JBQWdCLEdBQUcsNkNBQTZDLGNBQWMscUJBQXFCLEtBQUssR0FBRyxlQUFlLGdDQUFnQyxHQUFHLFdBQVcsb0JBQW9CLGtCQUFrQixpQkFBaUIsbUVBQW1FLGdCQUFnQixHQUFHLFdBQVcsZ0JBQWdCLGtCQUFrQixrQkFBa0IscUNBQXFDLGlDQUFpQyxHQUFHLDZDQUE2QyxXQUFXLGlDQUFpQyx3Q0FBd0MsS0FBSyxHQUFHLDZDQUE2QyxXQUFXLHlDQUF5QyxLQUFLLEdBQUcsc0JBQXNCLHVCQUF1QixHQUFHLDZDQUE2QyxzQkFBc0IseUJBQXlCLEtBQUssR0FBRywrQ0FBK0MsaUJBQWlCLHlCQUF5QixLQUFLLEdBQUcsaUJBQWlCLG9CQUFvQixrQkFBa0Isd0JBQXdCLHVCQUF1QixHQUFHLHlCQUF5Qix1QkFBdUIsZ0JBQWdCLGlCQUFpQixnQkFBZ0Isa0JBQWtCLEdBQUcsK0JBQStCLGlCQUFpQixnQkFBZ0IsMkJBQTJCLHVCQUF1QixnQkFBZ0IsdUJBQXVCLGdDQUFnQyxHQUFHLHNDQUFzQyxrQkFBa0IsZ0JBQWdCLG9CQUFvQix1QkFBdUIsdUJBQXVCLDhCQUE4QixlQUFlLG1DQUFtQyx1QkFBdUIsR0FBRyxxQ0FBcUMsb0JBQW9CLDBCQUEwQixHQUFHLHNDQUFzQyx3QkFBd0IsR0FBRyxpRUFBaUUsaUJBQWlCLEdBQUcsd0VBQXdFLHdCQUF3QixHQUFHLCtEQUErRCxrQ0FBa0MsaUJBQWlCLEdBQUcsT0FBTyx5Z0JBQXlnQixVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLFFBQVEsVUFBVSxVQUFVLE9BQU8sTUFBTSxRQUFRLFlBQVksTUFBTSxNQUFNLE9BQU8sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxZQUFZLFFBQVEsTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFFBQVEsTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxPQUFPLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sT0FBTyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLFFBQVEsTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxX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O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLFFBQVEsbUVBQTBCO0FBQ2xDLFFBQVEsZ0VBQXVCO0FBQy9CLFFBQVEsNkRBQW9CO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7O0FBR0E7QUFDQSxxQkFBcUIscUVBQTRCO0FBQ2pEO0FBQ0EsUUFBUSx1RUFBOEI7QUFDdEMsTUFBTTtBQUNOLFFBQVEsd0VBQStCO0FBQ3ZDO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2Nzcy9tYWluLnNjc3M/NmQyNSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2VjdGlvbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9Eb01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHN0cm9rZS13aWR0aDogMDtcXG4gIHN0cm9rZTogY3VycmVudENvbG9yO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG5cXG5mb3JtOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaWNvbi1hZGQtc29saWQsXFxuLmljb24tcGx1cyxcXG4uaWNvbi1jaXJjbGUtZG93biB7XFxuICBmaWxsOiAjZmZmO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5pY29uLWFkZC1zb2xpZDpob3ZlcixcXG4uaWNvbi1wbHVzOmhvdmVyLFxcbi5pY29uLWNpcmNsZS1kb3duOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZpbGw6ICM4YjU2MTU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gIC5pY29uLWFkZC1zb2xpZCxcXG4uaWNvbi1wbHVzLFxcbi5pY29uLWNpcmNsZS1kb3duIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH1cXG59XFxuXFxuLmljb24tYWRkLXNvbGlkOmhvdmVyLFxcbi5pY29uLXBsdXM6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5oZWFkaW5nLXByaW1hcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLmhlYWRpbmctcHJpbWFyeSB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuXFxuLmhlYWRpbmctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAuaGVhZGluZy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjY7XFxuICB9XFxufVxcbi5oZWFkaW5nLWNvbnRhaW5lci0tdG8tZG8ge1xcbiAgcGFkZGluZzogMDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLmhlYWRpbmctY29udGFpbmVyLS10by1kbyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG5cXG4uZGlzcGxheS1ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZ1bGwtd2lkdGgge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53aWR0aC05MCB7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uYnRuLWNsb3NlLXByb2plY3Qge1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5idG4tY2xvc2UtcHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJ0bi1jbG9zZS10by1kbyB7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA0cmVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uYnRuLWNsb3NlLXRvLWRvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9ybTpob3ZlciAuYnRuLWNsb3NlLXRvLWRvIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5idG4tZ3JvdXAge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYnRuLWdyb3VwX19sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5idG4tZ3JvdXBfX2J0biB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLmJ0bi1ncm91cF9fYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLnByaW9yaXR5LWJ0bi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNTYxNTtcXG59XFxuXFxubGFiZWwge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXItLWNyZWF0ZVByb2plY3Qge1xcbiAgZGlzcGxheTogXFxcImJsb2NrXFxcIjtcXG59XFxuXFxuLmZvcm0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG59XFxuLmZvcm1fX2dyb3VwIHtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuLmZvcm1fX2dyb3VwOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbn1cXG4uZm9ybV9fZ3JvdXA6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLmZvcm1fX2lucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xcbn1cXG4uZm9ybV9faW5wdXQtLXRvLWRvIHtcXG4gIHBhZGRpbmc6IDA7XFxuICByZXNpemU6IG5vbmU7XFxufVxcbi5mb3JtX19pbnB1dC0tdG8tZG86Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNjtcXG59XFxuXFxuI2NyZWF0ZVRvRG9Gb3JtIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAjY3JlYXRlVG9Eb0Zvcm0ge1xcbiAgICB3aWR0aDogY2FsYygxMDAlICsgNHJlbSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNHJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgfVxcbn1cXG5cXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkzNztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQtbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICAuZm9vdGVyLXRleHQtbWFpbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB9XFxufVxcblxcbi5vZGluLWxvZ28ge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuICBmaWxsOiAjZmZmO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5naXRodWItY2F0IHtcXG4gIGZpbGw6ICNmZmY7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAycztcXG4gIGhlaWdodDogMy41cmVtO1xcbn1cXG4uZ2l0aHViLWNhdDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgZmlsbDogIzhiNTYxNTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTZweCkge1xcbiAgLmdpdGh1Yi1jYXQge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIH1cXG59XFxuXFxuLmdpdGh1Yi1oYW5kbGUge1xcbiAgY29sb3I6ICM4YjU2MTU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTZweCkge1xcbiAgLmZvb3Rlci10ZXh0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuLmZvb3Rlci10ZXh0LW1haW4sXFxuLmZvb3Rlci1sb2dvcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk2cHgpIHtcXG4gIC5mb290ZXItbG9nb3Mge1xcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEvMjtcXG4gIGdyaWQtcm93OiAxLzM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAuc2lkZWJhciB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdC1saXN0X19pdGVtIHtcXG4gIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI2O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAucHJvamVjdC1saXN0IHtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbn1cXG5cXG4ucHJvamVjdC1saXN0X19pdGVtLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNTYxNTtcXG59XFxuXFxuLnRvZ2dsZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcXG4gIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcXG4gIHotaW5kZXg6IDM7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMnJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLnRvZ2dsZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLmZsaXAtMTgwIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlWCgtMTgwZGVnKTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDF2dztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMyOTMwMzgsICMzMTQ3NWEpO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5ncmlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcmVtIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgNnJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTZweCkge1xcbiAgLmdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDEwcmVtO1xcbiAgfVxcbn1cXG5cXG4udG8tZG8tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDRyZW0gOHJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLnRvLWRvLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDJyZW0gMnJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLnRvLWRvLWxpc3Qge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XFxuICB9XFxufVxcblxcbi50by1kby1pdGVtIHtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udG8tZG8taXRlbV9fY2hlY2tib3gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTVyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50by1kby1pdGVtX19jaGVja2JveC1sYWJlbCB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogNTAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNDtcXG4gIHotaW5kZXg6IDM7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi50by1kby1pdGVtX19jaGVja2JveC1sYWJlbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcbi50by1kby1pdGVtX19jaGVja2JveC1sYWJlbC5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94OmNoZWNrZWQgfiAudG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWwge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udG8tZG8taXRlbV9fY2hlY2tib3g6Y2hlY2tlZCB+IC50by1kby1pdGVtX19jaGVja2JveC1sYWJlbDo6YWZ0ZXIge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94OmNoZWNrZWQgfiAudG8tZG8taXRlbV9fdGV4dC13cmFwcGVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9faWNvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYWJzdHJhY3RzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL191dGlsaXRpZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2Zvcm0uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19zaWRlYmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3BhZ2VzL19ob21lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBQzlCQTs7O0VBR0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QURpQ0o7QUMvQkk7OztFQUNJLGVBQUE7RUFDQSxhQ1ZRO0FGNkNoQjtBQy9CSTtFQWpCSjs7O0lBa0JRLGdCQUFBO0VEb0NOO0FBQ0Y7O0FDL0JJOztFQUNJLHFCQUFBO0FEbUNSOztBRzVEQTtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBSCtESjs7QUc1REE7RUFDSSxtQkFBQTtBSCtESjtBRzlESTtFQUZKO0lBR1EsU0FBQTtFSGlFTjtBQUNGOztBRzlEQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FIaUVKO0FHL0RJO0VBUko7SUFTUSxrQkFBQTtJQUNBLHlCQUFBO0VIa0VO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QUFBO0FUb1haO0FTalhRO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FUbVhaO0FTaFhRO0VBQ0ksbUJBQUE7QVRrWFo7O0FTN1dBO0VBQ0ksWUFBQTtBVGdYSjs7QVM3V0E7RUFDSSxtQkFBQTtBVGdYSjs7QVM3V0E7RUFDSSw2QkFBQTtFQUNBLFlBQUE7QVRnWEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1se1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxubGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5pY29uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgc3Ryb2tlLXdpZHRoOiAwO1xcbiAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcXG4gICAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG5cXG5mb3JtOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDFlbTtcXG4gIGhlaWdodDogMWVtO1xcbiAgc3Ryb2tlLXdpZHRoOiAwO1xcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbmZvcm06Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pY29uLWFkZC1zb2xpZCxcXG4uaWNvbi1wbHVzLFxcbi5pY29uLWNpcmNsZS1kb3duIHtcXG4gIGZpbGw6ICNmZmY7XFxuICB3aWR0aDogMy41cmVtO1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmljb24tYWRkLXNvbGlkOmhvdmVyLFxcbi5pY29uLXBsdXM6aG92ZXIsXFxuLmljb24tY2lyY2xlLWRvd246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsbDogIzhiNTYxNTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLmljb24tYWRkLXNvbGlkLFxcbi5pY29uLXBsdXMsXFxuLmljb24tY2lyY2xlLWRvd24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcbn1cXG5cXG4uaWNvbi1hZGQtc29saWQ6aG92ZXIsXFxuLmljb24tcGx1czpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5tYWluIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlYWRpbmctcHJpbWFyeSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAuaGVhZGluZy1wcmltYXJ5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGluZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gIC5oZWFkaW5nLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNjtcXG4gIH1cXG59XFxuLmhlYWRpbmctY29udGFpbmVyLS10by1kbyB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAuaGVhZGluZy1jb250YWluZXItLXRvLWRvIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcbi5kaXNwbGF5LWJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZnVsbC13aWR0aCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLndpZHRoLTkwIHtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5idG4tY2xvc2UtcHJvamVjdCB7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJ0bi1jbG9zZS1wcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYnRuLWNsb3NlLXRvLWRvIHtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDRyZW07XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5idG4tY2xvc2UtdG8tZG86aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb3JtOmhvdmVyIC5idG4tY2xvc2UtdG8tZG8ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmJ0bi1ncm91cCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5idG4tZ3JvdXBfX2xhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmJ0bi1ncm91cF9fYnRuIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4uYnRuLWdyb3VwX19idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4ucHJpb3JpdHktYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI1NjE1O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lci0tY3JlYXRlUHJvamVjdCB7XFxuICBkaXNwbGF5OiBcXFwiYmxvY2tcXFwiO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgcGFkZGluZzogMnJlbSA0cmVtO1xcbn1cXG4uZm9ybV9fZ3JvdXAge1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4uZm9ybV9fZ3JvdXA6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy10b3A6IDA7XFxufVxcbi5mb3JtX19ncm91cDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG4uZm9ybV9faW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtIDRyZW07XFxufVxcbi5mb3JtX19pbnB1dC0tdG8tZG8ge1xcbiAgcGFkZGluZzogMDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLmZvcm1fX2lucHV0LS10by1kbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI2O1xcbn1cXG5cXG4jY3JlYXRlVG9Eb0Zvcm0ge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gICNjcmVhdGVUb0RvRm9ybSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA0cmVtKTtcXG4gICAgbWFyZ2luLWxlZnQ6IC00cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICB9XFxufVxcblxcbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTM3O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb290ZXItdGV4dC1tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcXG4gIC5mb290ZXItdGV4dC1tYWluIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIH1cXG59XFxuXFxuLm9kaW4tbG9nbyB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcXG4gIGZpbGw6ICNmZmY7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmdpdGh1Yi1jYXQge1xcbiAgZmlsbDogI2ZmZjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDJzO1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxufVxcbi5naXRodWItY2F0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICBmaWxsOiAjOGI1NjE1O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5NnB4KSB7XFxuICAuZ2l0aHViLWNhdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgfVxcbn1cXG5cXG4uZ2l0aHViLWhhbmRsZSB7XFxuICBjb2xvcjogIzhiNTYxNTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5mb290ZXItdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5NnB4KSB7XFxuICAuZm9vdGVyLXRleHQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG4uZm9vdGVyLXRleHQtbWFpbixcXG4uZm9vdGVyLWxvZ29zIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTZweCkge1xcbiAgLmZvb3Rlci1sb2dvcyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gIC5zaWRlYmFyIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wcm9qZWN0LWxpc3RfX2l0ZW0ge1xcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gIC5wcm9qZWN0LWxpc3Qge1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxufVxcblxcbi5wcm9qZWN0LWxpc3RfX2l0ZW0uYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI1NjE1O1xcbn1cXG5cXG4udG9nZ2xlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xcbiAgei1pbmRleDogMztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAycmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAudG9nZ2xlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cXG4uZmxpcC0xODAge1xcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC0xODBkZWcpO1xcbn1cXG5cXG4uaGVybyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMXZ3O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzI5MzAzOCwgIzMxNDc1YSk7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzByZW0gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNnJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLmdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciA2cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5NnB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgMTByZW07XFxuICB9XFxufVxcblxcbi50by1kby1jb250YWluZXIge1xcbiAgcGFkZGluZzogNHJlbSA4cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAudG8tZG8tY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMnJlbSAycmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAudG8tZG8tbGlzdCB7XFxuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcXG4gIH1cXG59XFxuXFxuLnRvLWRvLWl0ZW0ge1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50by1kby1pdGVtX19jaGVja2JveCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtNXJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC00cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xcbn1cXG4udG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0O1xcbiAgei1pbmRleDogMztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsLmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udG8tZG8taXRlbV9fY2hlY2tib3g6Y2hlY2tlZCB+IC50by1kby1pdGVtX19jaGVja2JveC1sYWJlbCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50by1kby1pdGVtX19jaGVja2JveDpjaGVja2VkIH4gLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsOjphZnRlciB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udG8tZG8taXRlbV9fY2hlY2tib3g6Y2hlY2tlZCB+IC50by1kby1pdGVtX190ZXh0LXdyYXBwZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBvcGFjaXR5OiAwLjU7XFxufVwiLFwiLmljb24tYWRkLXNvbGlkLFxcbi5pY29uLXBsdXMsXFxuLmljb24tY2lyY2xlLWRvd257XFxuICAgIGZpbGw6ICNmZmY7XFxuICAgIHdpZHRoOiAzLjVyZW07XFxuICAgIGhlaWdodDogMy41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGZpbGw6ICRjb2xvci1wcmltYXJ5O1xcbiAgICB9XFxuXFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpe1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcbn1cXG5cXG4uaWNvbi1hZGQtc29saWQsXFxuLmljb24tcGx1c3tcXG4gICAgJjpob3ZlcntcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgfVxcbn1cIixcIi8vIENPTE9SU1xcblxcblxcbiRjb2xvci1wcmltYXJ5OiAjOGI1NjE1O1xcblxcbi8vRk9OVFxcblxcbiRmb250LXNpemUtZGVmYXVsdDogMS42cmVtO1wiLFwiLm1haW57XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlYWRpbmctcHJpbWFyeXtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCl7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG59XFxuXFxuLmhlYWRpbmctY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNHJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpe1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNjtcXG4gICAgfVxcblxcbiAgICAmLS10by1kb3tcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBcXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpe1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIuZGlzcGxheS1ibG9ja3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mdWxsLXdpZHRoe1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLndpZHRoLTkwe1xcbiAgICB3aWR0aDogOTAlO1xcbn1cIixcImJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmJ0bi1jbG9zZS1wcm9qZWN0e1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICB9XFxufVxcblxcbi5idG4tY2xvc2UtdG8tZG97XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNHJlbTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgIH1cXG59XFxuXFxuLmZvcm06aG92ZXIgLmJ0bi1jbG9zZS10by1kb3tcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuXFxuXFxuXFxuLmJ0bi1ncm91cHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbiAgICAmX19sYWJlbHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgfVxcblxcbiAgICAmX19idG57XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcblxcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5wcmlvcml0eS1idG4uYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG59XCIsXCJsYWJlbHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXItLWNyZWF0ZVByb2plY3R7XFxuICAgIGRpc3BsYXk6ICdibG9jayc7XFxufVxcblxcbi5mb3Jte1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XFxuXFxuICAgICZfX2dyb3Vwe1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xcblxcbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICAgIH1cXG4gICAgICAgICY6bGFzdC1jaGlsZHtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19pbnB1dHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgcGFkZGluZzogMXJlbSA0cmVtO1xcbiAgICAgICAgXFxuXFxuICAgICAgICAmLS10by1kb3tcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXG5cXG4gICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcntcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWZvcm17XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI2O1xcbn1cXG5cXG4jY3JlYXRlVG9Eb0Zvcm17XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCl7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgNHJlbSk7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTRyZW07XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIH1cXG59XFxuXFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVwiLFwiLmZvb3RlcntcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yODMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTM3O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvb3Rlci10ZXh0LW1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpe1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgfVxcbn1cXG5cXG4ub2Rpbi1sb2dve1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuICAgIGZpbGw6ICNmZmY7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZ2l0aHViLWNhdHtcXG4gICAgZmlsbDogI2ZmZjtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAycztcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuXFxuICAgICY6aG92ZXJ7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgZmlsbDogJGNvbG9yLXByaW1hcnk7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ5NnB4KXtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICB9XFxufVxcblxcbi5naXRodWItaGFuZGxle1xcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uZm9vdGVyLXRleHR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDk2cHgpe1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cXG5cXG4uZm9vdGVyLXRleHQtbWFpbixcXG4uZm9vdGVyLWxvZ29ze1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxcbn1cXG5cXG4uZm9vdGVyLWxvZ29ze1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDk2cHgpe1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXCIsXCIuc2lkZWJhcntcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI2O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpe1xcbiAgICAgICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxufVxcblxcbi5wcm9qZWN0LWxpc3R7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICZfX2l0ZW17XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDRyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNjtcXG4gICAgfVxcbiAgICBcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCl7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogaGVpZ2h0IDFzO1xcbiAgICB9XFxuXFxuICAgIFxcbn1cXG5cXG4ucHJvamVjdC1saXN0X19pdGVtLmFjdGl2ZXtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxufVxcblxcbi50b2dnbGVye1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcXG4gICAgei1pbmRleDogMzsgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMnJlbTtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCl7XFxuICAgICAgICBkaXNwbGF5OiBibG9jazsgICAgICAgXFxuICAgIH1cXG59XFxuXFxuLmZsaXAtMTgwe1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTE4MGRlZyk7XFxufVxcblwiLFwiLmhlcm97XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMXZ3O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCMyOTMwMzgsICMzMTQ3NWEpO1xcblxcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmdyaWR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcmVtIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNnJlbTtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCl7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgNnJlbTtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDk2cHgpe1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAxMHJlbTtcXG4gICAgfVxcbn1cXG5cXG4udG8tZG8tY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiA0cmVtIDhyZW07XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpe1xcbiAgICAgICAgcGFkZGluZzogMnJlbSAycmVtO1xcbiAgICB9XFxufVxcblxcbi50by1kby1saXN0e1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KXtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogNHJlbTtcXG4gICAgfVxcbn1cXG5cXG4udG8tZG8taXRlbXtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICZfX2NoZWNrYm94e1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogLTVyZW07XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgICB3aWR0aDogM3JlbTtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgXFxuICAgICZfX2NoZWNrYm94LWxhYmVse1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogLTRyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XFxuXFxuICAgICAgICAmOjphZnRlcntcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcXG4gICAgICAgICAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0O1xcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLDUwJSk7XFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5hY3RpdmV7XFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4udG8tZG8taXRlbV9fY2hlY2tib3g6Y2hlY2tlZCB+IC50by1kby1pdGVtX19jaGVja2JveC1sYWJlbHtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi50by1kby1pdGVtX19jaGVja2JveDpjaGVja2VkIH4gLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsOjphZnRlcntcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94OmNoZWNrZWQgfiAudG8tZG8taXRlbV9fdGV4dC13cmFwcGVye1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgb3BhY2l0eTogLjU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcbmltcG9ydCBzZWN0aW9uQ29udHJvbGxlciBmcm9tIFwiLi9zZWN0aW9uQ29udHJvbGxlclwiO1xuaW1wb3J0IHRvRG9NYW5hZ2VyIGZyb20gXCIuL3RvRG9NYW5hZ2VyXCI7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuY29uc3QgdG9Eb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdCcpO1xuY29uc3QgdG9Eb0Zvcm1UZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0by1kby1mb3JtLXRlbXBsYXRlJyk7XG5cblxuY29uc3QgZG9tTWFuYWdlciA9IChmdW5jdGlvbigpe1xuXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdExpbmsoKXtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWxpc3RfX2l0ZW0nKTtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICBwcm9qZWN0TGlzdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYoaXRlbS5pbm5lclRleHQgPT09IGN1cnJlbnRQcm9qZWN0Lm5hbWUpe1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tY2xvc2UtcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFwcGVuZCgneCcpO1xuICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kKGNsb3NlQnRuKTtcblxuXG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5kZWxldGVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93UHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkNvbnRyb2xsZXIuY2xvc2VTZWN0aW9uKDApO1xuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uQ29udHJvbGxlci5leHBhbmRTZWN0aW9uKDApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQcm9qZWN0cygpe1xuICAgICAgICB3aGlsZShwcm9qZWN0TGlzdC5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKTtcblxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3RfX2l0ZW0nKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0VGV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdFRleHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdF9fdGV4dC13cmFwcGVyJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdFRleHRXcmFwcGVyLmFwcGVuZChwcm9qZWN0Lm5hbWUpO1xuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZChwcm9qZWN0TGlzdFRleHRXcmFwcGVyKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RMaXN0SXRlbSk7XG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZihwcm9qZWN0ID09PSBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuY2hhbmdlQ3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93UHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLnNob3dUb0RvcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgKGUpPT57XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZihwcm9qZWN0TGlzdC5sYXN0Q2hpbGQubm9kZU5hbWUgPT09ICdGT1JNJykgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGZvcm1JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtX19pbnB1dCcpO1xuICAgICAgICAgICAgICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgIGZvcm1JbnB1dC52YWx1ZSA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW0ucmVwbGFjZVdpdGgoZm9ybSk7XG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoZm9ybUlucHV0KTtcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXQuZm9jdXMoKTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWZvcm0uY29udGFpbnMoZS50YXJnZXQpKSBmb3JtLnJlcGxhY2VXaXRoKHByb2plY3RMaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT57XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgICAgICBpZihwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IGZvcm1JbnB1dC52YWx1ZSkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcGxhY2VXaXRoKHByb2plY3RMaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5lZGl0UHJvamVjdE5hbWUocHJvamVjdCwgZm9ybUlucHV0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLnNob3dQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLnNob3dUb0RvcygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdExpbmsoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1RvRG9zKCl7XG4gICAgICAgIHdoaWxlKHRvRG9MaXN0LmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgdG9Eb0xpc3QuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvRG9zID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdFRvRG9zKCk7ICAgICAgICAgICAgICAgICAvLyBjb3VwbGluZyBiZXR3ZWVuIG1vZHVsZXNcblxuICAgICAgICBsZXQgaW5kZXggPSAxO1xuXG4gICAgICAgIHRvRG9zLmZvckVhY2godG9EbyA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHRvRG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWl0ZW0nKTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9UZXh0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRvRG9UZXh0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0by1kby1pdGVtX190ZXh0LXdyYXBwZXInKTtcbiAgICAgICAgICAgIHRvRG9UZXh0V3JhcHBlci5hcHBlbmQodG9Eby50aXRsZSk7XG4gICAgICAgICAgICBjb25zdCB0b0RvQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdG9Eb0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWl0ZW1fX2NoZWNrYm94Jyk7XG4gICAgICAgICAgICB0b0RvQ2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICB0b0RvQ2hlY2tib3guaWQgPSBgdG8tZG8taXRlbV9fY2hlY2tib3gtLSR7aW5kZXh9YDtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9DaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIHRvRG9DaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoYHRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsLS0ke2luZGV4fWApO1xuICAgICAgICAgICAgdG9Eb0NoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgndG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWwnKTtcbiAgICAgICAgICAgIHRvRG9DaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHRvLWRvLWl0ZW1fX2NoZWNrYm94LS0ke2luZGV4fWApO1xuXG4gICAgICAgICAgICB0b0RvQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRvRG8uY29tcGxldGVkID0gIXRvRG8uY29tcGxldGVkO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdG9Eb0xpc3QuYXBwZW5kKHRvRG9JdGVtKTtcbiAgICAgICAgICAgIHRvRG9JdGVtLmFwcGVuZCh0b0RvQ2hlY2tib3gsIHRvRG9DaGVja2JveExhYmVsLCB0b0RvVGV4dFdyYXBwZXIpOyAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodG9Eby5jb21wbGV0ZWQgPT09IHRydWUpIHRvRG9DaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcblxuXG4gICAgICAgICAgICB0b0RvSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybVRlbXBsYXRlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0b0RvRm9ybVRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRvRG9JdGVtLnJlcGxhY2VXaXRoKGZvcm1UZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVUb0RvRm9ybScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jbG9zZS10by1kbycpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LWxvdycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LW1lZGl1bScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1oaWdoJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaW9yaXR5LWJ0bicpO1xuXG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb01hbmFnZXIuZGVsZXRlVG9Ebyhwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLCB0b0RvKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlMb3cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHByaW9yaXR5TWVkaXVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlNZWRpdW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHByaW9yaXR5SGlnaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5SGlnaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gdG9Eby50aXRsZTtcbiAgICAgICAgICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0b0RvLmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRvRG8uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlQnRuID0gQXJyYXkuZnJvbShwcmlvcml0eUJ0bnMpLmZpbmQoZWwgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHRvRG8ucHJpb3JpdHkpKTtcbiAgICAgICAgICAgICAgICBhY3RpdmVCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWZvcm0uY29udGFpbnMoZS50YXJnZXQpKSBmb3JtLnJlcGxhY2VXaXRoKHRvRG9JdGVtKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmNvZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmKGtleUNvZGUgPT09ICdFbnRlcicgJiYgIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGl0bGVJbnB1dC52YWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVCdG4gPSBBcnJheS5mcm9tKHByaW9yaXR5QnRucykuZmluZChlbCA9PiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBhY3RpdmVCdG4uaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RvTWFuYWdlci5lZGl0VG9EbyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0RvLmNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5Q29kZSA9IGUuY29kZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoa2V5Q29kZSA9PT0gJ0VudGVyJyAmJiAhZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aXRsZUlucHV0LnZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUJ0biA9IEFycmF5LmZyb20ocHJpb3JpdHlCdG5zKS5maW5kKGVsID0+IGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IGFjdGl2ZUJ0bi5pbm5lclRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9NYW5hZ2VyLmVkaXRUb0RvKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG8uY29tcGxldGVkXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLnNob3dUb0RvcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHJldHVybntcbiAgICAgICAgc2hvd1Byb2plY3RzLFxuICAgICAgICBzaG93VG9Eb3NcbiAgICB9XG59KSgpXG5cblxuZXhwb3J0IGRlZmF1bHQgZG9tTWFuYWdlciIsImltcG9ydCBzZWN0aW9uQ29udHJvbGxlciBmcm9tIFwiLi9zZWN0aW9uQ29udHJvbGxlclwiO1xuXG5jb25zdCBQcm9qZWN0ID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdG9Eb0xpc3Q6IFtdXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCkpKTsgIC8vIGxvY2FsIHN0b3JhZ2Ugb25seSBzdXBwb3J0cyBzdHJpbmcgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG11c3QgdXNlIEpTT04uc3RyaW5naWZ5IGFuZCBKU09OLnBhcnNlXG4gICAgY29uc29sZS5kaXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpO1xufVxuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9IChmdW5jdGlvbigpeyAgICAgICAgLy9tb2R1bGVcbiAgICBcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0Jyk7XG4gICAgcHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZGVmYXVsdFByb2plY3Q7XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpe1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKXtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QobmFtZSk7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTsgICAgICAgICAgLy8gc2F2ZSBuZXcgcHJvamVjdHMgYXJyYXkgdG8gc3RvcmFnZVxuICAgICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0cygpe1xuICAgICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UHJvamVjdHMocHJvamVjdHNBcnJheSl7XG4gICAgICAgIHByb2plY3RzID0gcHJvamVjdHNBcnJheTtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c0FycmF5WzBdO1xuICAgICAgICBjb25zb2xlLmRpcihwcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdChuYW1lKXtcbiAgICAgICAgaWYocHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSkpe1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IGZpbmQgcHJvamVjdCB3aXRoIG1hdGNoaW5nIG5hbWUuJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVkaXRQcm9qZWN0TmFtZShwcm9qZWN0LCBuZXdOYW1lKXtcbiAgICAgICAgcHJvamVjdC5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0VG9Eb3MgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3QudG9Eb0xpc3Q7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlQ3VycmVudFByb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0KXtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZURlZmF1bHRQcm9qZWN0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBQcm9qZWN0KCdEZWZhdWx0IFByb2plY3QnKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gICAgICAgIHJldHVybiBkZWZhdWx0UHJvamVjdDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24oZGVsZXRlZFByb2plY3Qpe1xuICAgICAgICBjb25zdCBpbmRleE9mRGVsZXRlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IGRlbGV0ZWRQcm9qZWN0Lm5hbWUpO1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXhPZkRlbGV0ZWRQcm9qZWN0LCAxKTtcblxuICAgICAgICBpZihwcm9qZWN0cy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBjcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xuICAgICAgICAgICAgY2hhbmdlQ3VycmVudFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhbmdlQ3VycmVudFByb2plY3QocHJvamVjdHNbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2VjdGlvbkNvbnRyb2xsZXIuY2xvc2VTZWN0aW9uKDApO1xuICAgICAgICAvLyBzZWN0aW9uQ29udHJvbGxlci5leHBhbmRTZWN0aW9uKDApO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTsgICAgICAgICAgLy8gc2F2ZSBuZXcgcHJvamVjdHMgYXJyYXkgdG8gc3RvcmFnZVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEN1cnJlbnRQcm9qZWN0LFxuICAgICAgICBjcmVhdGVQcm9qZWN0LFxuICAgICAgICBnZXRQcm9qZWN0cyxcbiAgICAgICAgc2V0UHJvamVjdHMsXG4gICAgICAgIGdldFByb2plY3QsXG4gICAgICAgIGVkaXRQcm9qZWN0TmFtZSxcbiAgICAgICAgZ2V0UHJvamVjdFRvRG9zLFxuICAgICAgICBjaGFuZ2VDdXJyZW50UHJvamVjdCxcbiAgICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgY3JlYXRlRGVmYXVsdFByb2plY3RcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNYW5hZ2VyIiwiY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0Jyk7XG5cbmNvbnN0IHNlY3Rpb25Db250cm9sbGVyID0gKGZ1bmN0aW9uKCl7XG5cbiAgICBsZXQgZXhwYW5kZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGV4cGFuZFNlY3Rpb24oZGVsYXkpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdExJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdF9faXRlbScpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TElzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtbGlzdF9faXRlbScpO1xuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXByb2plY3QtZm9ybScpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW1IZWlnaHQgPSBwcm9qZWN0TEkuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICBsZXQgcHJvamVjdExpc3RIZWlnaHQ7XG5cbiAgICAgICAgaWYocHJvamVjdEZvcm1zKXtcbiAgICAgICAgICAgIHByb2plY3RMaXN0SGVpZ2h0ID0gcGFyc2VJbnQocHJvamVjdExpc3RJdGVtSGVpZ2h0KSAqIChwYXJzZUludChwcm9qZWN0TElzLmxlbmd0aCkrcGFyc2VJbnQocHJvamVjdEZvcm1zLmxlbmd0aCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdExpc3RIZWlnaHQgPSBwYXJzZUludChwcm9qZWN0TGlzdEl0ZW1IZWlnaHQpICogcGFyc2VJbnQocHJvamVjdExJcy5sZW5ndGgpO1xuICAgICAgICB9XG5cblxuICAgICAgICBwcm9qZWN0TGlzdC5zdHlsZS50cmFuc2l0aW9uID0gYGFsbCAke2RlbGF5fW1zYFxuICAgICAgICBwcm9qZWN0TGlzdC5zdHlsZS5oZWlnaHQgPSBgJHtwcm9qZWN0TGlzdEhlaWdodH1weGBcbiAgXG4gICAgICAgIGV4cGFuZGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY2xvc2VTZWN0aW9uKGRlbGF5KSB7XG4gICAgICAgIHByb2plY3RMaXN0LnN0eWxlLnRyYW5zaXRpb24gPSBgYWxsICR7ZGVsYXl9YFxuICAgICAgICBwcm9qZWN0TGlzdC5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgIHByb2plY3RMaXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnNTAwbXMnO1xuXG4gICAgICAgIGV4cGFuZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNFeHBhbmRlZCgpe1xuICAgICAgICBjb25zb2xlLmxvZyhleHBhbmRlZClcbiAgICAgICAgcmV0dXJuIGV4cGFuZGVkO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGV4cGFuZFNlY3Rpb24sXG4gICAgICAgIGNsb3NlU2VjdGlvbixcbiAgICAgICAgaXNFeHBhbmRlZFxuICAgIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgc2VjdGlvbkNvbnRyb2xsZXIiLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcblxuY29uc3QgVG9Eb0l0ZW0gPSBmdW5jdGlvbih0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWQpeyAgICAgICAvL2ZhY3RvcnkgZnVuY3Rpb25zXG4gICAgcmV0dXJuIHt0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWR9O1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKSkpOyAgLy8gbG9jYWwgc3RvcmFnZSBvbmx5IHN1cHBvcnRzIHN0cmluZyB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbXVzdCB1c2UgSlNPTi5zdHJpbmdpZnkgYW5kIEpTT04ucGFyc2VcbiAgICBjb25zb2xlLmRpcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSk7XG59XG5cbmNvbnN0IHRvRG9NYW5hZ2VyID0gKGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCBjcmVhdGVUb0RvID0gZnVuY3Rpb24ocHJvamVjdCwgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkPWZhbHNlKXtcbiAgICAgICAgY29uc3QgbmV3VG9EbyA9IFRvRG9JdGVtKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNvbXBsZXRlZCk7XG4gICAgICAgIHByb2plY3QudG9Eb0xpc3QucHVzaChuZXdUb0RvKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgIH0gIFxuXG4gICAgY29uc3QgZ2V0VG9EbyA9IGZ1bmN0aW9uKHByb2plY3QsIHRpdGxlKXtcbiAgICAgICAgaWYocHJvamVjdC50b0RvTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdGl0bGUpKXtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0LnRvRG9MaXN0LmZpbmQoaXRlbSA9PiBpdGVtLnRpdGxlID09PSB0aXRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IGZpbmQgVG8gRG8gSXRlbSB3aXRoIG1hdGNoaW5nIHRpdGxlJylcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZWxldGVUb0RvID0gZnVuY3Rpb24ocHJvamVjdCwgdG9Eb0l0ZW0pe1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3QudG9Eb0xpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdG9Eb0l0ZW0udGl0bGUpO1xuICAgICAgICBwcm9qZWN0LnRvRG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdFRvRG8gPSBmdW5jdGlvbih0b0RvSXRlbSwgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkPWZhbHNlKXtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICBjb25zdCB1cGRhdGVkVG9EbyA9IFRvRG9JdGVtKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNvbXBsZXRlZCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudFByb2plY3QudG9Eb0xpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdG9Eb0l0ZW0udGl0bGUpO1xuICAgICAgICBjdXJyZW50UHJvamVjdC50b0RvTGlzdC5zcGxpY2UoaW5kZXgsIDEsIHVwZGF0ZWRUb0RvKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVUb0RvLFxuICAgICAgICBnZXRUb0RvLFxuICAgICAgICBkZWxldGVUb0RvLFxuICAgICAgICBlZGl0VG9EbyxcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IHRvRG9NYW5hZ2VyIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vRGVwZW5kZW5jaWVzIExpc3RcbmltcG9ydCBcIi4vc2Nzcy9tYWluLnNjc3NcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcIi4vc3ByaXRlLnN2Z1wiO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5pbXBvcnQgdG9Eb01hbmFnZXIgZnJvbSBcIi4vdG9Eb01hbmFnZXJcIjtcbmltcG9ydCBkb21NYW5hZ2VyIGZyb20gXCIuL2RvbU1hbmFnZXJcIjtcbmltcG9ydCBzZWN0aW9uQ29udHJvbGxlciBmcm9tIFwiLi9zZWN0aW9uQ29udHJvbGxlclwiO1xuXG4vL0RPTSBRdWVyeSBTZWxlY3RvcnNcblxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0Jyk7XG5jb25zdCB0b0RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0Jyk7XG5jb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1wcm9qZWN0LWJ0bicpO1xuY29uc3QgdG9Eb0Zvcm1UZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0by1kby1mb3JtLXRlbXBsYXRlJyk7XG5jb25zdCBjcmVhdGVUb0RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10by1kby1idG4nKTtcbmNvbnN0IHRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlcicpO1xuXG5jcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmKHByb2plY3RMaXN0Lmxhc3RDaGlsZC5ub2RlTmFtZSA9PT0gJ0ZPUk0nKSByZXR1cm47XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtcHJvamVjdC1mb3JtJylcbiAgICBmb3JtSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybV9faW5wdXQnKTtcbiAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOZXcgUHJvamVjdCcpO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZChmb3JtKTtcbiAgICBmb3JtLmFwcGVuZChmb3JtSW5wdXQpO1xuICAgIHNlY3Rpb25Db250cm9sbGVyLmNsb3NlU2VjdGlvbigwKTtcbiAgICBzZWN0aW9uQ29udHJvbGxlci5leHBhbmRTZWN0aW9uKDApO1xuICAgIGZvcm1JbnB1dC5mb2N1cygpO1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRm9ybShlKXtcbiAgICAgICAgaWYoIWZvcm0uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICAgICAgc2VjdGlvbkNvbnRyb2xsZXIuY2xvc2VTZWN0aW9uKDApO1xuICAgICAgICAgICAgc2VjdGlvbkNvbnRyb2xsZXIuZXhwYW5kU2VjdGlvbigwKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCByZW1vdmVGb3JtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCByZW1vdmVGb3JtKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCFmb3JtSW5wdXQudmFsdWUpIHJldHVybjtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpO1xuICAgICAgICBpZihwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IGZvcm1JbnB1dC52YWx1ZSkubGVuZ3RoID4gMCkgcmV0dXJuOyAgIC8vIGNoZWNrIGZvciBleGlzdGluZyBwcm9qZWN0IG5hbWVcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuY3JlYXRlUHJvamVjdChmb3JtSW5wdXQudmFsdWUpO1xuICAgICAgICBwcm9qZWN0TWFuYWdlci5jaGFuZ2VDdXJyZW50UHJvamVjdChwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0KGZvcm1JbnB1dC52YWx1ZSkpO1xuICAgICAgICBkb21NYW5hZ2VyLnNob3dQcm9qZWN0cygpO1xuICAgICAgICBkb21NYW5hZ2VyLnNob3dUb0RvcygpO1xuICAgICAgICBmb3JtSW5wdXQudmFsdWUgPSAnJztcbiAgICB9KVxufSlcblxuY3JlYXRlVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCB0b0RvTGlzdENoaWxkTm9kZUFycmF5ID0gQXJyYXkuZnJvbSh0b0RvTGlzdC5jaGlsZE5vZGVzKTtcbiAgICBpZih0b0RvTGlzdENoaWxkTm9kZUFycmF5LmZpbmQoY2hpbGROb2RlID0+IGNoaWxkTm9kZS5pZCA9PT0gJ2NyZWF0ZVRvRG9Gb3JtJykpIHJldHVybjtcblxuICAgIGNvbnN0IGZvcm1UZW1wbGF0ZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodG9Eb0Zvcm1UZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICB0b0RvTGlzdC5hcHBlbmQoZm9ybVRlbXBsYXRlKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlVG9Eb0Zvcm0nKTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2xvc2UtdG8tZG8nKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBwcmlvcml0eUxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1sb3cnKTtcbiAgICBjb25zdCBwcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1tZWRpdW0nKTtcbiAgICBjb25zdCBwcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHktaGlnaCcpO1xuICAgIGNvbnN0IHByaW9yaXR5QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmlvcml0eS1idG4nKTtcblxuICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIHByaW9yaXR5TG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgICAgIHByaW9yaXR5TG93LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfSlcbiAgICBwcmlvcml0eU1lZGl1bS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgICAgIHByaW9yaXR5TWVkaXVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfSlcbiAgICBwcmlvcml0eUhpZ2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBwcmlvcml0eUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuICAgICAgICBwcmlvcml0eUhpZ2guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xuICAgICAgICBpZighZm9ybS5jb250YWlucyhlLnRhcmdldCkpIGZvcm0ucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGZpcmVhYmxlSW5wdXRzID0gW2Rlc2NyaXB0aW9uSW5wdXQsIHRpdGxlSW5wdXRdO1xuXG4gICAgZm9yKGxldCBpbnB1dCBvZiBmaXJlYWJsZUlucHV0cyl7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmNvZGU7XG4gICAgICAgICAgICBpZihrZXlDb2RlID09PSAnRW50ZXInICYmICFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmICghdGl0bGVJbnB1dC52YWx1ZSkgcmV0dXJuO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUJ0biA9IEFycmF5LmZyb20ocHJpb3JpdHlCdG5zKS5maW5kKGVsID0+IGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBhY3RpdmVCdG4uaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHRvRG9NYW5hZ2VyLmNyZWF0ZVRvRG8oXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCksIFxuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUsIFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59KVxuXG4vL0xvY2FsIFN0b3JhZ2VcblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgdmFyIHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgdmFyIHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpKSk7ICAvLyBsb2NhbCBzdG9yYWdlIG9ubHkgc3VwcG9ydHMgc3RyaW5nIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtdXN0IHVzZSBKU09OLnN0cmluZ2lmeSBhbmQgSlNPTi5wYXJzZVxuICAgIGNvbnNvbGUuZGlyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpKTtcbn1cblxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgY29uc29sZS5sb2coJ1lpcHBlZSEgV2UgY2FuIHVzZSBsb2NhbFN0b3JhZ2UgYXdlc29tZW5lc3MnKTtcblxuICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgICAgICBwcm9qZWN0TWFuYWdlci5zZXRQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgICAgIGRvbU1hbmFnZXIuc2hvd1Byb2plY3RzKCk7XG4gICAgICAgIGRvbU1hbmFnZXIuc2hvd1RvRG9zKCk7XG4gICAgfVxuXG59XG5lbHNlIHtcbiAgICBjb25zb2xlLmxvZygnVG9vIGJhZCwgbm8gbG9jYWxTdG9yYWdlIGZvciB1cycpO1xufVxuXG5cblxuXG5cbi8vIE1vYmlsZSBuYXYgdG9nZ2xlclxuXG5cbnRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBsZXQgaXNFeHBhbmRlZCA9IHNlY3Rpb25Db250cm9sbGVyLmlzRXhwYW5kZWQoKTtcbiAgICBpZihpc0V4cGFuZGVkKXtcbiAgICAgICAgc2VjdGlvbkNvbnRyb2xsZXIuY2xvc2VTZWN0aW9uKDUwMClcbiAgICB9IGVsc2V7XG4gICAgICAgIHNlY3Rpb25Db250cm9sbGVyLmV4cGFuZFNlY3Rpb24oNTAwKVxuICAgIH1cbiAgICB0b2dnbGVyLmNsYXNzTGlzdC50b2dnbGUoJ2ZsaXAtMTgwJylcbn0pXG5cbmxldCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzYwcHgpJyk7XG5cbm1xbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICBpZihtcWwubWF0Y2hlcyA9PT0gZmFsc2UgJiYgcHJvamVjdExpc3Quc3R5bGUuaGVpZ2h0ID09PSAnMHB4Jyl7XG4gICAgICAgIHByb2plY3RMaXN0LnN0eWxlLmhlaWdodCA9ICcnXG4gICAgfVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=