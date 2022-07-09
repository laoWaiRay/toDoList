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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n@media only screen and (max-width: 380px) {\n  html {\n    font-size: 52.5%;\n  }\n}\n\nbody {\n  box-sizing: border-box;\n  user-select: none;\n}\n\nli {\n  list-style: none;\n}\n\n.icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.icon-add-solid,\n.icon-plus,\n.icon-circle-down {\n  fill: #fff;\n  width: 3.5rem;\n  height: 3.5rem;\n  margin-bottom: 3rem;\n  margin-left: 2.5rem;\n  transition: all 500ms ease-in-out;\n  border-radius: 50%;\n}\n.icon-add-solid:hover,\n.icon-plus:hover,\n.icon-circle-down:hover {\n  cursor: pointer;\n  fill: #8b5615;\n}\n@media only screen and (max-width: 760px) {\n  .icon-add-solid,\n.icon-plus,\n.icon-circle-down {\n    margin-bottom: 0;\n  }\n}\n\n.icon-add-solid:hover,\n.icon-plus:hover {\n  transform: scale(1.2);\n}\n\n.main {\n  font-size: 2rem;\n  font-family: \"Noto Sans\", sans-serif;\n  font-weight: 400;\n  color: #fff;\n}\n\n.heading-primary {\n  margin-bottom: 3rem;\n}\n@media only screen and (max-width: 760px) {\n  .heading-primary {\n    margin: 0;\n  }\n}\n\n.heading-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 4rem;\n  padding-bottom: 0;\n  z-index: 1;\n}\n@media only screen and (max-width: 760px) {\n  .heading-container {\n    padding: 1rem 2rem;\n    background-color: #242426;\n  }\n}\n.heading-container--to-do {\n  padding: 0;\n}\n@media only screen and (max-width: 760px) {\n  .heading-container--to-do {\n    margin-bottom: 2rem;\n    background-color: transparent;\n  }\n}\n\n.display-block {\n  display: block;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-90 {\n  width: 90%;\n}\n\nbutton {\n  background-color: transparent;\n  border: 1px solid #fff;\n  font-size: 2rem;\n  font-weight: inherit;\n  font-family: inherit;\n  color: inherit;\n}\n\n.btn-close-project {\n  border: 0;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  position: relative;\n}\n.btn-close-project:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.btn-close-to-do {\n  border: 0;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  right: 4rem;\n  visibility: hidden;\n}\n.btn-close-to-do:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.form:hover .btn-close-to-do {\n  visibility: visible;\n}\n\n.btn-group {\n  display: flex;\n}\n.btn-group__label {\n  display: inline-block;\n  margin-right: 1rem;\n}\n.btn-group__btn {\n  padding: 0.5rem 1rem;\n  border-radius: 3px;\n}\n.btn-group__btn:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.priority-btn.active {\n  background-color: #8b5615;\n}\n\nlabel {\n  margin-right: 1rem;\n}\n\n.form-container--createProject {\n  display: \"block\";\n}\n\n.form {\n  border: 1px solid #fff;\n  padding: 2rem 4rem;\n}\n.form__group {\n  padding: 1rem 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.form__group:first-child {\n  padding-top: 0;\n}\n.form__group:last-child {\n  padding-bottom: 0;\n}\n.form__input {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 400;\n  color: inherit;\n  background-color: transparent;\n  border: 0;\n  outline: none;\n  padding: 1rem 4rem;\n}\n.form__input--to-do {\n  padding: 0;\n  resize: none;\n}\n.form__input--to-do::-webkit-scrollbar {\n  display: none;\n}\n\n.create-project-form {\n  width: 100%;\n  background-color: #242426;\n}\n\n#createToDoForm {\n  margin: 1rem 0;\n  border-radius: 3px;\n  position: relative;\n}\n@media only screen and (max-width: 760px) {\n  #createToDoForm {\n    width: calc(100% + 4rem);\n    margin-left: -4rem;\n    padding: 1rem 2rem;\n  }\n}\n\ninput[type=date] {\n  height: 35px;\n  margin: 0;\n  width: 17rem;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  text-transform: uppercase;\n  background-color: transparent;\n  outline: none;\n  border: 1px solid #fff;\n  border-radius: 3px;\n  padding: 0 3px;\n  color: #fff;\n}\ninput[type=date]::-webkit-clear-button {\n  font-size: 18px;\n  height: 30px;\n  position: relative;\n  right: 5px;\n  margin-right: 4px;\n}\ninput[type=date]::-webkit-inner-spin-button {\n  height: 30px;\n}\ninput[type=date]::-webkit-calendar-picker-indicator {\n  font-size: 18px;\n  filter: invert(1);\n}\n\n.footer {\n  padding: 1rem;\n  background-color: #292937;\n  color: #fff;\n}\n\n.footer-text-main {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media only screen and (max-width: 375px) {\n  .footer-text-main {\n    margin-bottom: 1rem;\n  }\n}\n\n.odin-logo {\n  height: 3.5rem;\n  width: auto;\n  margin-left: 2.5rem;\n  fill: #fff;\n  color: #fff;\n}\n\n.github-cat {\n  fill: #fff;\n  margin-left: 2rem;\n  transition: all 2s;\n  height: 3.5rem;\n}\n.github-cat:hover {\n  transform: rotate(360deg);\n  fill: #8b5615;\n}\n@media only screen and (max-width: 496px) {\n  .github-cat {\n    margin-left: 30px;\n  }\n}\n\n.github-handle {\n  color: #8b5615;\n  font-weight: 400;\n  padding: 0 1rem;\n  text-decoration: none;\n}\n\n.footer-text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media only screen and (max-width: 496px) {\n  .footer-text {\n    flex-direction: column;\n  }\n}\n\n.footer-text-main,\n.footer-logos {\n  display: inline-block;\n}\n\n@media only screen and (max-width: 496px) {\n  .footer-logos {\n    margin-left: -15px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n  }\n}\n\n.sidebar {\n  grid-template-columns: 1/2;\n  grid-row: 1/3;\n  width: 100%;\n  background-color: #242426;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n}\n@media only screen and (max-width: 760px) {\n  .sidebar {\n    grid-row: 1/2;\n    background-color: transparent;\n  }\n}\n\n.project-list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n}\n.project-list__item {\n  padding: 1rem 4rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #242426;\n}\n@media only screen and (max-width: 760px) {\n  .project-list {\n    height: 0;\n    overflow: hidden;\n  }\n}\n\n.project-list__item.active {\n  font-weight: 400;\n  background-color: #8b5615;\n}\n\n.toggler {\n  display: none;\n  transition: transform 1s;\n  transform: rotateX(0);\n  z-index: 3;\n  position: absolute;\n  right: 2rem;\n}\n@media only screen and (max-width: 760px) {\n  .toggler {\n    display: block;\n  }\n}\n\n.flip-180 {\n  transform: rotateX(-180deg);\n}\n\n.hero {\n  position: fixed;\n  height: 100vh;\n  width: 101vw;\n  background: linear-gradient(to bottom right, #293038, #31475a);\n  z-index: -999;\n}\n\n.grid {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 30rem 1fr;\n  grid-template-rows: 1fr 6rem;\n}\n@media only screen and (max-width: 760px) {\n  .grid {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr 6rem;\n  }\n}\n@media only screen and (max-width: 496px) {\n  .grid {\n    grid-template-rows: auto 1fr 10rem;\n  }\n}\n\n.to-do-container {\n  padding: 4rem 8rem;\n}\n@media only screen and (max-width: 760px) {\n  .to-do-container {\n    padding: 2rem 2rem;\n  }\n}\n\n@media only screen and (max-width: 760px) {\n  .to-do-list {\n    padding-left: 4rem;\n  }\n}\n\n.to-do-item {\n  padding: 1rem 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.to-do-item__checkbox {\n  position: absolute;\n  left: -5rem;\n  height: 3rem;\n  width: 3rem;\n  display: none;\n}\n.to-do-item__checkbox-label {\n  height: 2rem;\n  width: 2rem;\n  background-color: #fff;\n  position: absolute;\n  left: -4rem;\n  border-radius: 50%;\n  transition: transform 300ms;\n}\n.to-do-item__checkbox-label::after {\n  content: \"\";\n  height: 50%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #242424;\n  z-index: 3;\n  transform: translate(50%, 50%);\n  visibility: hidden;\n}\n.to-do-item__checkbox-label:hover {\n  cursor: pointer;\n  transform: scale(1.2);\n}\n.to-do-item__checkbox-label.active {\n  visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label {\n  opacity: 0.5;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label::after {\n  visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__text-wrapper {\n  text-decoration: line-through;\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/scss/base/_base.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_icons.scss","webpack://./src/scss/abstracts/_variables.scss","webpack://./src/scss/base/_typography.scss","webpack://./src/scss/base/_utilities.scss","webpack://./src/scss/components/_button.scss","webpack://./src/scss/components/_form.scss","webpack://./src/scss/layout/_footer.scss","webpack://./src/scss/layout/_sidebar.scss","webpack://./src/scss/pages/_home.scss"],"names":[],"mappings":"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","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nhtml{\n    font-size: 62.5%;\n\n    @media only screen and (max-width: 380px) {\n        font-size: 52.5%;\n    }\n}\n\nbody{\n    box-sizing: border-box;\n    user-select: none;\n}\n\nli{\n    list-style: none;\n}\n\n.icon {\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    stroke-width: 0;\n    stroke: currentColor;\n    fill: currentColor;\n}\n\nform::-webkit-scrollbar {\n    display: none;\n}","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n@media only screen and (max-width: 380px) {\n  html {\n    font-size: 52.5%;\n  }\n}\n\nbody {\n  box-sizing: border-box;\n  user-select: none;\n}\n\nli {\n  list-style: none;\n}\n\n.icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.icon-add-solid,\n.icon-plus,\n.icon-circle-down {\n  fill: #fff;\n  width: 3.5rem;\n  height: 3.5rem;\n  margin-bottom: 3rem;\n  margin-left: 2.5rem;\n  transition: all 500ms ease-in-out;\n  border-radius: 50%;\n}\n.icon-add-solid:hover,\n.icon-plus:hover,\n.icon-circle-down:hover {\n  cursor: pointer;\n  fill: #8b5615;\n}\n@media only screen and (max-width: 760px) {\n  .icon-add-solid,\n.icon-plus,\n.icon-circle-down {\n    margin-bottom: 0;\n  }\n}\n\n.icon-add-solid:hover,\n.icon-plus:hover {\n  transform: scale(1.2);\n}\n\n.main {\n  font-size: 2rem;\n  font-family: \"Noto Sans\", sans-serif;\n  font-weight: 400;\n  color: #fff;\n}\n\n.heading-primary {\n  margin-bottom: 3rem;\n}\n@media only screen and (max-width: 760px) {\n  .heading-primary {\n    margin: 0;\n  }\n}\n\n.heading-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 4rem;\n  padding-bottom: 0;\n  z-index: 1;\n}\n@media only screen and (max-width: 760px) {\n  .heading-container {\n    padding: 1rem 2rem;\n    background-color: #242426;\n  }\n}\n.heading-container--to-do {\n  padding: 0;\n}\n@media only screen and (max-width: 760px) {\n  .heading-container--to-do {\n    margin-bottom: 2rem;\n    background-color: transparent;\n  }\n}\n\n.display-block {\n  display: block;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-90 {\n  width: 90%;\n}\n\nbutton {\n  background-color: transparent;\n  border: 1px solid #fff;\n  font-size: 2rem;\n  font-weight: inherit;\n  font-family: inherit;\n  color: inherit;\n}\n\n.btn-close-project {\n  border: 0;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  position: relative;\n}\n.btn-close-project:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.btn-close-to-do {\n  border: 0;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  right: 4rem;\n  visibility: hidden;\n}\n.btn-close-to-do:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.form:hover .btn-close-to-do {\n  visibility: visible;\n}\n\n.btn-group {\n  display: flex;\n}\n.btn-group__label {\n  display: inline-block;\n  margin-right: 1rem;\n}\n.btn-group__btn {\n  padding: 0.5rem 1rem;\n  border-radius: 3px;\n}\n.btn-group__btn:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.priority-btn.active {\n  background-color: #8b5615;\n}\n\nlabel {\n  margin-right: 1rem;\n}\n\n.form-container--createProject {\n  display: \"block\";\n}\n\n.form {\n  border: 1px solid #fff;\n  padding: 2rem 4rem;\n}\n.form__group {\n  padding: 1rem 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.form__group:first-child {\n  padding-top: 0;\n}\n.form__group:last-child {\n  padding-bottom: 0;\n}\n.form__input {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 400;\n  color: inherit;\n  background-color: transparent;\n  border: 0;\n  outline: none;\n  padding: 1rem 4rem;\n}\n.form__input--to-do {\n  padding: 0;\n  resize: none;\n}\n.form__input--to-do::-webkit-scrollbar {\n  display: none;\n}\n\n.create-project-form {\n  width: 100%;\n  background-color: #242426;\n}\n\n#createToDoForm {\n  margin: 1rem 0;\n  border-radius: 3px;\n  position: relative;\n}\n@media only screen and (max-width: 760px) {\n  #createToDoForm {\n    width: calc(100% + 4rem);\n    margin-left: -4rem;\n    padding: 1rem 2rem;\n  }\n}\n\ninput[type=date] {\n  height: 35px;\n  margin: 0;\n  width: 17rem;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  text-transform: uppercase;\n  background-color: transparent;\n  outline: none;\n  border: 1px solid #fff;\n  border-radius: 3px;\n  padding: 0 3px;\n  color: #fff;\n}\ninput[type=date]::-webkit-clear-button {\n  font-size: 18px;\n  height: 30px;\n  position: relative;\n  right: 5px;\n  margin-right: 4px;\n}\ninput[type=date]::-webkit-inner-spin-button {\n  height: 30px;\n}\ninput[type=date]::-webkit-calendar-picker-indicator {\n  font-size: 18px;\n  filter: invert(1);\n}\n\n.footer {\n  padding: 1rem;\n  background-color: #292937;\n  color: #fff;\n}\n\n.footer-text-main {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media only screen and (max-width: 375px) {\n  .footer-text-main {\n    margin-bottom: 1rem;\n  }\n}\n\n.odin-logo {\n  height: 3.5rem;\n  width: auto;\n  margin-left: 2.5rem;\n  fill: #fff;\n  color: #fff;\n}\n\n.github-cat {\n  fill: #fff;\n  margin-left: 2rem;\n  transition: all 2s;\n  height: 3.5rem;\n}\n.github-cat:hover {\n  transform: rotate(360deg);\n  fill: #8b5615;\n}\n@media only screen and (max-width: 496px) {\n  .github-cat {\n    margin-left: 30px;\n  }\n}\n\n.github-handle {\n  color: #8b5615;\n  font-weight: 400;\n  padding: 0 1rem;\n  text-decoration: none;\n}\n\n.footer-text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media only screen and (max-width: 496px) {\n  .footer-text {\n    flex-direction: column;\n  }\n}\n\n.footer-text-main,\n.footer-logos {\n  display: inline-block;\n}\n\n@media only screen and (max-width: 496px) {\n  .footer-logos {\n    margin-left: -15px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n  }\n}\n\n.sidebar {\n  grid-template-columns: 1/2;\n  grid-row: 1/3;\n  width: 100%;\n  background-color: #242426;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n}\n@media only screen and (max-width: 760px) {\n  .sidebar {\n    grid-row: 1/2;\n    background-color: transparent;\n  }\n}\n\n.project-list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n}\n.project-list__item {\n  padding: 1rem 4rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #242426;\n}\n@media only screen and (max-width: 760px) {\n  .project-list {\n    height: 0;\n    overflow: hidden;\n  }\n}\n\n.project-list__item.active {\n  font-weight: 400;\n  background-color: #8b5615;\n}\n\n.toggler {\n  display: none;\n  transition: transform 1s;\n  transform: rotateX(0);\n  z-index: 3;\n  position: absolute;\n  right: 2rem;\n}\n@media only screen and (max-width: 760px) {\n  .toggler {\n    display: block;\n  }\n}\n\n.flip-180 {\n  transform: rotateX(-180deg);\n}\n\n.hero {\n  position: fixed;\n  height: 100vh;\n  width: 101vw;\n  background: linear-gradient(to bottom right, #293038, #31475a);\n  z-index: -999;\n}\n\n.grid {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 30rem 1fr;\n  grid-template-rows: 1fr 6rem;\n}\n@media only screen and (max-width: 760px) {\n  .grid {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr 6rem;\n  }\n}\n@media only screen and (max-width: 496px) {\n  .grid {\n    grid-template-rows: auto 1fr 10rem;\n  }\n}\n\n.to-do-container {\n  padding: 4rem 8rem;\n}\n@media only screen and (max-width: 760px) {\n  .to-do-container {\n    padding: 2rem 2rem;\n  }\n}\n\n@media only screen and (max-width: 760px) {\n  .to-do-list {\n    padding-left: 4rem;\n  }\n}\n\n.to-do-item {\n  padding: 1rem 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.to-do-item__checkbox {\n  position: absolute;\n  left: -5rem;\n  height: 3rem;\n  width: 3rem;\n  display: none;\n}\n.to-do-item__checkbox-label {\n  height: 2rem;\n  width: 2rem;\n  background-color: #fff;\n  position: absolute;\n  left: -4rem;\n  border-radius: 50%;\n  transition: transform 300ms;\n}\n.to-do-item__checkbox-label::after {\n  content: \"\";\n  height: 50%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #242424;\n  z-index: 3;\n  transform: translate(50%, 50%);\n  visibility: hidden;\n}\n.to-do-item__checkbox-label:hover {\n  cursor: pointer;\n  transform: scale(1.2);\n}\n.to-do-item__checkbox-label.active {\n  visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label {\n  opacity: 0.5;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label::after {\n  visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__text-wrapper {\n  text-decoration: line-through;\n  opacity: 0.5;\n}",".icon-add-solid,\n.icon-plus,\n.icon-circle-down{\n    fill: #fff;\n    width: 3.5rem;\n    height: 3.5rem;\n    margin-bottom: 3rem;\n    margin-left: 2.5rem;\n    transition: all 500ms ease-in-out;\n    border-radius: 50%;\n\n    &:hover{\n        cursor: pointer;\n        fill: $color-primary;\n    }\n\n\n    @media only screen and (max-width: 760px){\n        margin-bottom: 0;\n    }\n}\n\n.icon-add-solid,\n.icon-plus{\n    &:hover{\n        transform: scale(1.2);\n    }\n}","// COLORS\n\n\n$color-primary: #8b5615;\n\n//FONT\n\n$font-size-default: 1.6rem;",".main{\n    font-size: 2rem;\n    font-family: 'Noto Sans', sans-serif;\n    font-weight: 400;\n    color: #fff;\n}\n\n.heading-primary{\n    margin-bottom: 3rem;\n    @media only screen and (max-width: 760px){\n        margin: 0;\n    }\n}\n\n.heading-container{\n    display: flex;\n    align-items: center;\n    width: 100%;\n    padding: 4rem;\n    padding-bottom: 0;\n    z-index: 1;\n\n    @media only screen and (max-width: 760px){\n        padding: 1rem 2rem;\n        background-color: #242426;\n    }\n\n    &--to-do{\n        padding: 0;\n        \n        @media only screen and (max-width: 760px){\n            margin-bottom: 2rem;\n            background-color: transparent;\n\n        }\n    }\n}\n",".display-block{\n    display: block;\n}\n\n.full-width{\n    width: 100%;\n}\n\n.width-90{\n    width: 90%;\n}","button{\n    background-color: transparent;\n    border: 1px solid #fff;\n    font-size: 2rem;\n    font-weight: inherit;\n    font-family: inherit;\n    color: inherit;\n}\n\n.btn-close-project{\n    border: 0;\n    font-weight: 300;\n    color: rgba(255, 255, 255, 0.5);\n    position: relative;\n\n    &:hover{\n        cursor: pointer;\n        color: #fff;\n    }\n}\n\n.btn-close-to-do{\n    border: 0;\n    font-weight: 300;\n    color: rgba(255, 255, 255, 0.5);\n    position: absolute;\n    right: 4rem;\n    visibility: hidden;\n\n    &:hover{\n        cursor: pointer;\n        color: #fff;\n    }\n}\n\n.form:hover .btn-close-to-do{\n    visibility: visible;\n}\n\n\n\n\n.btn-group{\n    display: flex;\n\n    &__label{\n        display: inline-block;\n        margin-right: 1rem;\n    }\n\n    &__btn{\n        padding: .5rem 1rem;\n        border-radius: 3px;\n\n        &:hover{\n            cursor: pointer;\n            background-color: rgba(0, 0, 0, 0.3);\n        }\n    }\n}\n\n.priority-btn.active{\n    background-color: $color-primary;\n}","label{\n    margin-right: 1rem;\n}\n\n.form-container--createProject{\n    display: 'block';\n}\n\n.form{\n\n    border: 1px solid #fff;\n    padding: 2rem 4rem;\n\n    &__group{\n        padding: 1rem 0;\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n\n        &:first-child{\n            padding-top: 0;\n        }\n        &:last-child{\n            padding-bottom: 0;\n        }\n    }\n\n    &__input{\n        font-family: inherit;\n        font-size: inherit;\n        font-weight: 400;\n        color: inherit;\n        background-color: transparent;\n        border: 0;\n        outline: none;\n        padding: 1rem 4rem;\n        \n\n        &--to-do{\n            padding: 0;\n            resize: none;\n\n            &::-webkit-scrollbar{\n                display: none;\n            }\n        }\n    }\n}\n\n.create-project-form{\n    width: 100%;\n    background-color: #242426;\n}\n\n#createToDoForm{\n    margin: 1rem 0;\n    border-radius: 3px;\n    position: relative;\n\n    @media only screen and (max-width: 760px){\n        width: calc(100% + 4rem);\n        margin-left: -4rem;\n        padding: 1rem 2rem;\n    }\n}\n\n////////\n\ninput[type=date] {\n    height: 35px;\n    margin: 0;\n    width: 17rem;\n    font-family: inherit;\n    font-size: inherit;\n    font-weight: inherit;\n    text-transform: uppercase;\n    background-color: transparent;\n    outline: none;\n    border: 1px solid #fff;\n    border-radius: 3px;\n    padding: 0 3px;\n    color: #fff;\n    \n    &::-webkit-clear-button {\n      font-size: 18px;\n      height: 30px;\n      position: relative;\n      right: 5px;\n      margin-right: 4px;\n    }\n    &::-webkit-inner-spin-button {\n      height: 30px;\n    }\n    &::-webkit-calendar-picker-indicator {\n      font-size: 18px;\n      filter: invert(1);\n    }\n  }",".footer{\n    padding: 1rem;\n    // border-top: 1px solid rgba(0, 0, 0, 0.283);\n    background-color: #292937;\n    color: #fff;\n}\n\n.footer-text-main{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    @media only screen and (max-width:375px){\n        margin-bottom: 1rem;\n    }\n}\n\n.odin-logo{\n    height: 3.5rem;\n    width: auto;\n    margin-left: 2.5rem;\n    fill: #fff;\n    color: #fff;\n}\n\n.github-cat{\n    fill: #fff;\n    margin-left: 2rem;\n    transition: all 2s;\n    height: 3.5rem;\n\n    &:hover{\n        transform: rotate(360deg);\n        fill: $color-primary;\n    }\n\n    @media only screen and (max-width:496px){\n        margin-left: 30px;\n    }\n}\n\n.github-handle{\n    color: $color-primary;\n    font-weight: 400;\n    padding: 0 1rem;\n    text-decoration: none;\n}\n\n.footer-text{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    @media only screen and (max-width:496px){\n        flex-direction: column;\n    }\n}\n\n.footer-text-main,\n.footer-logos{\n    display: inline-block; \n}\n\n.footer-logos{\n    @media only screen and (max-width:496px){\n        margin-left: -15px;\n        width: 100%;\n        text-align: center;\n        display: flex;\n        justify-content: center;\n    }\n}\n",".sidebar{\n    grid-template-columns: 1/2;\n    grid-row: 1/3;\n    width: 100%;\n\n    background-color: #242426;\n    color: white;\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n\n    position: relative;\n\n    @media only screen and (max-width: 760px){\n        grid-row: 1/2;\n        background-color: transparent;\n    }\n}\n\n.project-list{\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    width: 100%;\n\n    &__item{\n        padding: 1rem 4rem;\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        background-color: #242426;\n    }\n    \n    @media only screen and (max-width: 760px){\n        height: 0;\n        overflow: hidden;\n        // transition: height 1s;\n    }\n\n    \n}\n\n.project-list__item.active{\n    font-weight: 400;\n    background-color: $color-primary;\n}\n\n.toggler{\n    display: none;\n    transition: transform 1s;\n    transform: rotateX(0);\n    z-index: 3;   \n    position: absolute;\n    right: 2rem;\n\n    @media only screen and (max-width: 760px){\n        display: block;       \n    }\n}\n\n.flip-180{\n    transform: rotateX(-180deg);\n}\n",".hero{\n    position: fixed;\n    height: 100vh;\n    width: 101vw;\n    background: linear-gradient(to bottom right,#293038, #31475a);\n\n    z-index: -999;\n}\n\n.grid{\n    width: 100%;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 30rem 1fr;\n    grid-template-rows: 1fr 6rem;\n\n    @media only screen and (max-width: 760px){\n        grid-template-columns: 1fr;\n        grid-template-rows: auto 1fr 6rem;\n    }\n\n    @media only screen and (max-width:496px){\n        grid-template-rows: auto 1fr 10rem;\n    }\n}\n\n.to-do-container{\n    padding: 4rem 8rem;\n\n    @media only screen and (max-width: 760px){\n        padding: 2rem 2rem;\n    }\n}\n\n.to-do-list{\n    @media only screen and (max-width: 760px){\n        padding-left: 4rem;\n    }\n}\n\n.to-do-item{\n    padding: 1rem 0;\n    display: flex;\n    align-items: center;\n    position: relative;\n\n    &__checkbox{\n        position: absolute;\n        left: -5rem;\n        height: 3rem;\n        width: 3rem;\n        display: none;\n    }\n    \n    &__checkbox-label{\n        height: 2rem;\n        width: 2rem;\n        background-color: #fff;\n        position: absolute;\n        left: -4rem;\n        border-radius: 50%;\n        transition: transform 300ms;\n\n        &::after{\n            content: \"\";\n            height: 50%;\n            aspect-ratio: 1;\n            border-radius: 50%;\n            position: absolute;\n            background-color: #242424;\n            z-index: 3;\n            transform: translate(50%,50%);\n            visibility: hidden;\n        }\n\n        &:hover{\n            cursor: pointer;\n            transform: scale(1.2);\n        }\n\n        &.active{\n            visibility: visible;\n        }\n    }\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label{\n    opacity: .5;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__checkbox-label::after{\n    visibility: visible;\n}\n\n.to-do-item__checkbox:checked ~ .to-do-item__text-wrapper{\n    text-decoration: line-through;\n    opacity: .5;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sWUFBWSxRQUFRLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxRQUFRLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFX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USw2REFBb0I7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BOzs7QUFHQTtBQUNBLHFCQUFxQixxRUFBNEI7QUFDakQ7QUFDQSxRQUFRLHVFQUE4QjtBQUN0QyxNQUFNO0FBQ04sUUFBUSx3RUFBK0I7QUFDdkM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3NzL21haW4uc2Nzcz82ZDI1Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZG9tTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zZWN0aW9uQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b0RvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1Mi41JTtcXG4gIH1cXG59XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHN0cm9rZS13aWR0aDogMDtcXG4gIHN0cm9rZTogY3VycmVudENvbG9yO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG5cXG5mb3JtOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaWNvbi1hZGQtc29saWQsXFxuLmljb24tcGx1cyxcXG4uaWNvbi1jaXJjbGUtZG93biB7XFxuICBmaWxsOiAjZmZmO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5pY29uLWFkZC1zb2xpZDpob3ZlcixcXG4uaWNvbi1wbHVzOmhvdmVyLFxcbi5pY29uLWNpcmNsZS1kb3duOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZpbGw6ICM4YjU2MTU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gIC5pY29uLWFkZC1zb2xpZCxcXG4uaWNvbi1wbHVzLFxcbi5pY29uLWNpcmNsZS1kb3duIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH1cXG59XFxuXFxuLmljb24tYWRkLXNvbGlkOmhvdmVyLFxcbi5pY29uLXBsdXM6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5oZWFkaW5nLXByaW1hcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLmhlYWRpbmctcHJpbWFyeSB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuXFxuLmhlYWRpbmctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAuaGVhZGluZy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjY7XFxuICB9XFxufVxcbi5oZWFkaW5nLWNvbnRhaW5lci0tdG8tZG8ge1xcbiAgcGFkZGluZzogMDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLmhlYWRpbmctY29udGFpbmVyLS10by1kbyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG5cXG4uZGlzcGxheS1ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZ1bGwtd2lkdGgge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53aWR0aC05MCB7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uYnRuLWNsb3NlLXByb2plY3Qge1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5idG4tY2xvc2UtcHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJ0bi1jbG9zZS10by1kbyB7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA0cmVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uYnRuLWNsb3NlLXRvLWRvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9ybTpob3ZlciAuYnRuLWNsb3NlLXRvLWRvIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5idG4tZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmJ0bi1ncm91cF9fbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uYnRuLWdyb3VwX19idG4ge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5idG4tZ3JvdXBfX2J0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5wcmlvcml0eS1idG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjU2MTU7XFxufVxcblxcbmxhYmVsIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyLS1jcmVhdGVQcm9qZWN0IHtcXG4gIGRpc3BsYXk6IFxcXCJibG9ja1xcXCI7XFxufVxcblxcbi5mb3JtIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICBwYWRkaW5nOiAycmVtIDRyZW07XFxufVxcbi5mb3JtX19ncm91cCB7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLmZvcm1fX2dyb3VwOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbn1cXG4uZm9ybV9fZ3JvdXA6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLmZvcm1fX2lucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xcbn1cXG4uZm9ybV9faW5wdXQtLXRvLWRvIHtcXG4gIHBhZGRpbmc6IDA7XFxuICByZXNpemU6IG5vbmU7XFxufVxcbi5mb3JtX19pbnB1dC0tdG8tZG86Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNjtcXG59XFxuXFxuI2NyZWF0ZVRvRG9Gb3JtIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAjY3JlYXRlVG9Eb0Zvcm0ge1xcbiAgICB3aWR0aDogY2FsYygxMDAlICsgNHJlbSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNHJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgfVxcbn1cXG5cXG5pbnB1dFt0eXBlPWRhdGVdIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxN3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDAgM3B4O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2xlYXItYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHJpZ2h0OiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkzNztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQtbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICAuZm9vdGVyLXRleHQtbWFpbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB9XFxufVxcblxcbi5vZGluLWxvZ28ge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuICBmaWxsOiAjZmZmO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5naXRodWItY2F0IHtcXG4gIGZpbGw6ICNmZmY7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAycztcXG4gIGhlaWdodDogMy41cmVtO1xcbn1cXG4uZ2l0aHViLWNhdDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgZmlsbDogIzhiNTYxNTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTZweCkge1xcbiAgLmdpdGh1Yi1jYXQge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIH1cXG59XFxuXFxuLmdpdGh1Yi1oYW5kbGUge1xcbiAgY29sb3I6ICM4YjU2MTU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTZweCkge1xcbiAgLmZvb3Rlci10ZXh0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuLmZvb3Rlci10ZXh0LW1haW4sXFxuLmZvb3Rlci1sb2dvcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk2cHgpIHtcXG4gIC5mb290ZXItbG9nb3Mge1xcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEvMjtcXG4gIGdyaWQtcm93OiAxLzM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAuc2lkZWJhciB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdC1saXN0X19pdGVtIHtcXG4gIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI2O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAucHJvamVjdC1saXN0IHtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbn1cXG5cXG4ucHJvamVjdC1saXN0X19pdGVtLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNTYxNTtcXG59XFxuXFxuLnRvZ2dsZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcXG4gIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcXG4gIHotaW5kZXg6IDM7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMnJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLnRvZ2dsZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLmZsaXAtMTgwIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlWCgtMTgwZGVnKTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDF2dztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMyOTMwMzgsICMzMTQ3NWEpO1xcbiAgei1pbmRleDogLTk5OTtcXG59XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzByZW0gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNnJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLmdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciA2cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5NnB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgMTByZW07XFxuICB9XFxufVxcblxcbi50by1kby1jb250YWluZXIge1xcbiAgcGFkZGluZzogNHJlbSA4cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAudG8tZG8tY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMnJlbSAycmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAudG8tZG8tbGlzdCB7XFxuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcXG4gIH1cXG59XFxuXFxuLnRvLWRvLWl0ZW0ge1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50by1kby1pdGVtX19jaGVja2JveCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtNXJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC00cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xcbn1cXG4udG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0O1xcbiAgei1pbmRleDogMztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsLmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udG8tZG8taXRlbV9fY2hlY2tib3g6Y2hlY2tlZCB+IC50by1kby1pdGVtX19jaGVja2JveC1sYWJlbCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50by1kby1pdGVtX19jaGVja2JveDpjaGVja2VkIH4gLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsOjphZnRlciB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udG8tZG8taXRlbV9fY2hlY2tib3g6Y2hlY2tlZCB+IC50by1kby1pdGVtX190ZXh0LXdyYXBwZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBvcGFjaXR5OiAwLjU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL19pY29ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9hYnN0cmFjdHMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvX3V0aWxpdGllcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19idXR0b24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fZm9ybS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9sYXlvdXQvX2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9sYXlvdXQvX3NpZGViYXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvcGFnZXMvX2hvbWUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJ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QUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FUcVpaO0FTbFpRO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FUb1paO0FTalpRO0VBQ0ksbUJBQUE7QVRtWlo7O0FTOVlBO0VBQ0ksWUFBQTtBVGlaSjs7QVM5WUE7RUFDSSxtQkFBQTtBVGlaSjs7QVM5WUE7RUFDSSw2QkFBQTtFQUNBLFlBQUE7QVRpWkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1se1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XFxuICAgICAgICBmb250LXNpemU6IDUyLjUlO1xcbiAgICB9XFxufVxcblxcbmJvZHl7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5saXtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmljb24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxZW07XFxuICAgIGhlaWdodDogMWVtO1xcbiAgICBzdHJva2Utd2lkdGg6IDA7XFxuICAgIHN0cm9rZTogY3VycmVudENvbG9yO1xcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbmZvcm06Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDUyLjUlO1xcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDFlbTtcXG4gIGhlaWdodDogMWVtO1xcbiAgc3Ryb2tlLXdpZHRoOiAwO1xcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbmZvcm06Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pY29uLWFkZC1zb2xpZCxcXG4uaWNvbi1wbHVzLFxcbi5pY29uLWNpcmNsZS1kb3duIHtcXG4gIGZpbGw6ICNmZmY7XFxuICB3aWR0aDogMy41cmVtO1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmljb24tYWRkLXNvbGlkOmhvdmVyLFxcbi5pY29uLXBsdXM6aG92ZXIsXFxuLmljb24tY2lyY2xlLWRvd246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsbDogIzhiNTYxNTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLmljb24tYWRkLXNvbGlkLFxcbi5pY29uLXBsdXMsXFxuLmljb24tY2lyY2xlLWRvd24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcbn1cXG5cXG4uaWNvbi1hZGQtc29saWQ6aG92ZXIsXFxuLmljb24tcGx1czpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5tYWluIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlYWRpbmctcHJpbWFyeSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAuaGVhZGluZy1wcmltYXJ5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGluZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gIC5oZWFkaW5nLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNjtcXG4gIH1cXG59XFxuLmhlYWRpbmctY29udGFpbmVyLS10by1kbyB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAuaGVhZGluZy1jb250YWluZXItLXRvLWRvIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcbi5kaXNwbGF5LWJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZnVsbC13aWR0aCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLndpZHRoLTkwIHtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5idG4tY2xvc2UtcHJvamVjdCB7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJ0bi1jbG9zZS1wcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYnRuLWNsb3NlLXRvLWRvIHtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDRyZW07XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5idG4tY2xvc2UtdG8tZG86aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb3JtOmhvdmVyIC5idG4tY2xvc2UtdG8tZG8ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmJ0bi1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uYnRuLWdyb3VwX19sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5idG4tZ3JvdXBfX2J0biB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLmJ0bi1ncm91cF9fYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLnByaW9yaXR5LWJ0bi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNTYxNTtcXG59XFxuXFxubGFiZWwge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXItLWNyZWF0ZVByb2plY3Qge1xcbiAgZGlzcGxheTogXFxcImJsb2NrXFxcIjtcXG59XFxuXFxuLmZvcm0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG59XFxuLmZvcm1fX2dyb3VwIHtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4uZm9ybV9fZ3JvdXA6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy10b3A6IDA7XFxufVxcbi5mb3JtX19ncm91cDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG4uZm9ybV9faW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtIDRyZW07XFxufVxcbi5mb3JtX19pbnB1dC0tdG8tZG8ge1xcbiAgcGFkZGluZzogMDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLmZvcm1fX2lucHV0LS10by1kbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI2O1xcbn1cXG5cXG4jY3JlYXRlVG9Eb0Zvcm0ge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gICNjcmVhdGVUb0RvRm9ybSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA0cmVtKTtcXG4gICAgbWFyZ2luLWxlZnQ6IC00cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICB9XFxufVxcblxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDE3cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogMCAzcHg7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1jbGVhci1idXR0b24ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcmlnaHQ6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTM3O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb290ZXItdGV4dC1tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcXG4gIC5mb290ZXItdGV4dC1tYWluIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIH1cXG59XFxuXFxuLm9kaW4tbG9nbyB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcXG4gIGZpbGw6ICNmZmY7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmdpdGh1Yi1jYXQge1xcbiAgZmlsbDogI2ZmZjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDJzO1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxufVxcbi5naXRodWItY2F0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICBmaWxsOiAjOGI1NjE1O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5NnB4KSB7XFxuICAuZ2l0aHViLWNhdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgfVxcbn1cXG5cXG4uZ2l0aHViLWhhbmRsZSB7XFxuICBjb2xvcjogIzhiNTYxNTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5mb290ZXItdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5NnB4KSB7XFxuICAuZm9vdGVyLXRleHQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG4uZm9vdGVyLXRleHQtbWFpbixcXG4uZm9vdGVyLWxvZ29zIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTZweCkge1xcbiAgLmZvb3Rlci1sb2dvcyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gIC5zaWRlYmFyIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wcm9qZWN0LWxpc3RfX2l0ZW0ge1xcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gIC5wcm9qZWN0LWxpc3Qge1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxufVxcblxcbi5wcm9qZWN0LWxpc3RfX2l0ZW0uYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI1NjE1O1xcbn1cXG5cXG4udG9nZ2xlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xcbiAgei1pbmRleDogMztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAycmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAudG9nZ2xlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cXG4uZmxpcC0xODAge1xcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC0xODBkZWcpO1xcbn1cXG5cXG4uaGVybyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMXZ3O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzI5MzAzOCwgIzMxNDc1YSk7XFxuICB6LWluZGV4OiAtOTk5O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHJlbSAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDZyZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk2cHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAxMHJlbTtcXG4gIH1cXG59XFxuXFxuLnRvLWRvLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA0cmVtIDhyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gIC50by1kby1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAycmVtIDJyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gIC50by1kby1saXN0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xcbiAgfVxcbn1cXG5cXG4udG8tZG8taXRlbSB7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC01cmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWwge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTRyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XFxufVxcbi50by1kby1pdGVtX19jaGVja2JveC1sYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjQ7XFxuICB6LWluZGV4OiAzO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4udG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG4udG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWwuYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50by1kby1pdGVtX19jaGVja2JveDpjaGVja2VkIH4gLnRvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94OmNoZWNrZWQgfiAudG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWw6OmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50by1kby1pdGVtX19jaGVja2JveDpjaGVja2VkIH4gLnRvLWRvLWl0ZW1fX3RleHQtd3JhcHBlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XCIsXCIuaWNvbi1hZGQtc29saWQsXFxuLmljb24tcGx1cyxcXG4uaWNvbi1jaXJjbGUtZG93bntcXG4gICAgZmlsbDogI2ZmZjtcXG4gICAgd2lkdGg6IDMuNXJlbTtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZmlsbDogJGNvbG9yLXByaW1hcnk7XFxuICAgIH1cXG5cXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCl7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxufVxcblxcbi5pY29uLWFkZC1zb2xpZCxcXG4uaWNvbi1wbHVze1xcbiAgICAmOmhvdmVye1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB9XFxufVwiLFwiLy8gQ09MT1JTXFxuXFxuXFxuJGNvbG9yLXByaW1hcnk6ICM4YjU2MTU7XFxuXFxuLy9GT05UXFxuXFxuJGZvbnQtc2l6ZS1kZWZhdWx0OiAxLjZyZW07XCIsXCIubWFpbntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaGVhZGluZy1wcmltYXJ5e1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KXtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbn1cXG5cXG4uaGVhZGluZy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCl7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI2O1xcbiAgICB9XFxuXFxuICAgICYtLXRvLWRve1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIFxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCl7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi5kaXNwbGF5LWJsb2Nre1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZ1bGwtd2lkdGh7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2lkdGgtOTB7XFxuICAgIHdpZHRoOiA5MCU7XFxufVwiLFwiYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uYnRuLWNsb3NlLXByb2plY3R7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgIH1cXG59XFxuXFxuLmJ0bi1jbG9zZS10by1kb3tcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA0cmVtO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFxuICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgfVxcbn1cXG5cXG4uZm9ybTpob3ZlciAuYnRuLWNsb3NlLXRvLWRve1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG5cXG5cXG5cXG4uYnRuLWdyb3Vwe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAmX19sYWJlbHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgfVxcblxcbiAgICAmX19idG57XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcblxcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5wcmlvcml0eS1idG4uYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG59XCIsXCJsYWJlbHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXItLWNyZWF0ZVByb2plY3R7XFxuICAgIGRpc3BsYXk6ICdibG9jayc7XFxufVxcblxcbi5mb3Jte1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XFxuXFxuICAgICZfX2dyb3Vwe1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFxuICAgICAgICAmOmZpcnN0LWNoaWxke1xcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpsYXN0LWNoaWxke1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2lucHV0e1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDRyZW07XFxuICAgICAgICBcXG5cXG4gICAgICAgICYtLXRvLWRve1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgcmVzaXplOiBub25lO1xcblxcbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFye1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtZm9ybXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjY7XFxufVxcblxcbiNjcmVhdGVUb0RvRm9ybXtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KXtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA0cmVtKTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNHJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgfVxcbn1cXG5cXG4vLy8vLy8vL1xcblxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDE3cmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMCAzcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBcXG4gICAgJjo6LXdlYmtpdC1jbGVhci1idXR0b24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHJpZ2h0OiA1cHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxuICAgIH1cXG4gICAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB9XFxuICAgICY6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICB9XFxuICB9XCIsXCIuZm9vdGVye1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI4Myk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mzc7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQtbWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCl7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICB9XFxufVxcblxcbi5vZGluLWxvZ297XFxuICAgIGhlaWdodDogMy41cmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcXG4gICAgZmlsbDogI2ZmZjtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5naXRodWItY2F0e1xcbiAgICBmaWxsOiAjZmZmO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzO1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG5cXG4gICAgJjpob3ZlcntcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICBmaWxsOiAkY29sb3ItcHJpbWFyeTtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDk2cHgpe1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIH1cXG59XFxuXFxuLmdpdGh1Yi1oYW5kbGV7XFxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5mb290ZXItdGV4dHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0OTZweCl7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVxcblxcbi5mb290ZXItdGV4dC1tYWluLFxcbi5mb290ZXItbG9nb3N7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXFxufVxcblxcbi5mb290ZXItbG9nb3N7XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0OTZweCl7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cIixcIi5zaWRlYmFye1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCl7XFxuICAgICAgICBncmlkLXJvdzogMS8yO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG59XFxuXFxuLnByb2plY3QtbGlzdHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgJl9faXRlbXtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI2O1xcbiAgICB9XFxuICAgIFxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KXtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAvLyB0cmFuc2l0aW9uOiBoZWlnaHQgMXM7XFxuICAgIH1cXG5cXG4gICAgXFxufVxcblxcbi5wcm9qZWN0LWxpc3RfX2l0ZW0uYWN0aXZle1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG59XFxuXFxuLnRvZ2dsZXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xcbiAgICB6LWluZGV4OiAzOyAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAycmVtO1xcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KXtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAgICAgICBcXG4gICAgfVxcbn1cXG5cXG4uZmxpcC0xODB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTgwZGVnKTtcXG59XFxuXCIsXCIuaGVyb3tcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAxdnc7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIzI5MzAzOCwgIzMxNDc1YSk7XFxuXFxuICAgIHotaW5kZXg6IC05OTk7XFxufVxcblxcbi5ncmlke1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHJlbSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZyZW07XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpe1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDZyZW07XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ5NnB4KXtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgMTByZW07XFxuICAgIH1cXG59XFxuXFxuLnRvLWRvLWNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogNHJlbSA4cmVtO1xcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KXtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbTtcXG4gICAgfVxcbn1cXG5cXG4udG8tZG8tbGlzdHtcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCl7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XFxuICAgIH1cXG59XFxuXFxuLnRvLWRvLWl0ZW17XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAmX19jaGVja2JveHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IC01cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgd2lkdGg6IDNyZW07XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIFxcbiAgICAmX19jaGVja2JveC1sYWJlbHtcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgIHdpZHRoOiAycmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IC00cmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xcblxcbiAgICAgICAgJjo6YWZ0ZXJ7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XFxuICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNDtcXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSw1MCUpO1xcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYuYWN0aXZle1xcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLnRvLWRvLWl0ZW1fX2NoZWNrYm94OmNoZWNrZWQgfiAudG8tZG8taXRlbV9fY2hlY2tib3gtbGFiZWx7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4udG8tZG8taXRlbV9fY2hlY2tib3g6Y2hlY2tlZCB+IC50by1kby1pdGVtX19jaGVja2JveC1sYWJlbDo6YWZ0ZXJ7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50by1kby1pdGVtX19jaGVja2JveDpjaGVja2VkIH4gLnRvLWRvLWl0ZW1fX3RleHQtd3JhcHBlcntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIG9wYWNpdHk6IC41O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5pbXBvcnQgc2VjdGlvbkNvbnRyb2xsZXIgZnJvbSBcIi4vc2VjdGlvbkNvbnRyb2xsZXJcIjtcbmltcG9ydCB0b0RvTWFuYWdlciBmcm9tIFwiLi90b0RvTWFuYWdlclwiO1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKTtcbmNvbnN0IHRvRG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QnKTtcbmNvbnN0IHRvRG9Gb3JtVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG8tZG8tZm9ybS10ZW1wbGF0ZScpO1xuXG5cbmNvbnN0IGRvbU1hbmFnZXIgPSAoZnVuY3Rpb24oKXtcblxuICAgIGZ1bmN0aW9uIHNldEFjdGl2ZVByb2plY3RMaW5rKCl7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1saXN0X19pdGVtJyk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICAgICAgcHJvamVjdExpc3RJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGlmKGl0ZW0uaW5uZXJUZXh0ID09PSBjdXJyZW50UHJvamVjdC5uYW1lKXtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLWNsb3NlLXByb2plY3QnKTtcbiAgICAgICAgICAgICAgICBjbG9zZUJ0bi5hcHBlbmQoJ3gnKTtcbiAgICAgICAgICAgICAgICBpdGVtLmFwcGVuZChjbG9zZUJ0bik7XG5cblxuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuZGVsZXRlUHJvamVjdChjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIuc2hvd1Byb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIuc2hvd1RvRG9zKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Db250cm9sbGVyLmNsb3NlU2VjdGlvbigwKTtcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkNvbnRyb2xsZXIuZXhwYW5kU2VjdGlvbigwKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UHJvamVjdHMoKXtcbiAgICAgICAgd2hpbGUocHJvamVjdExpc3QuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCk7XG5cbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0X19pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdFRleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcHJvamVjdExpc3RUZXh0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3RfX3RleHQtd3JhcHBlcicpO1xuICAgICAgICAgICAgcHJvamVjdExpc3RUZXh0V3JhcHBlci5hcHBlbmQocHJvamVjdC5uYW1lKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5hcHBlbmQocHJvamVjdExpc3RUZXh0V3JhcHBlcik7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdEl0ZW0pO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYocHJvamVjdCA9PT0gcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmNoYW5nZUN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIuc2hvd1Byb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChlKT0+e1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYocHJvamVjdExpc3QubGFzdENoaWxkLm5vZGVOYW1lID09PSAnRk9STScpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybV9faW5wdXQnKTtcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXQudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtLnJlcGxhY2VXaXRoKGZvcm0pO1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKGZvcm1JbnB1dCk7XG4gICAgICAgICAgICAgICAgZm9ybUlucHV0LmZvY3VzKCk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFmb3JtLmNvbnRhaW5zKGUudGFyZ2V0KSkgZm9ybS5yZXBsYWNlV2l0aChwcm9qZWN0TGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBmb3JtSW5wdXQudmFsdWUpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBsYWNlV2l0aChwcm9qZWN0TGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuZWRpdFByb2plY3ROYW1lKHByb2plY3QsIGZvcm1JbnB1dC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93UHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIHNldEFjdGl2ZVByb2plY3RMaW5rKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dUb0Rvcygpe1xuICAgICAgICB3aGlsZSh0b0RvTGlzdC5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHRvRG9MaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b0RvcyA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RUb0RvcygpOyAgICAgICAgICAgICAgICAgLy8gY291cGxpbmcgYmV0d2VlbiBtb2R1bGVzXG5cbiAgICAgICAgbGV0IGluZGV4ID0gMTtcblxuICAgICAgICB0b0Rvcy5mb3JFYWNoKHRvRG8gPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICB0b0RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0by1kby1pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCB0b0RvVGV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0b0RvVGV4dFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndG8tZG8taXRlbV9fdGV4dC13cmFwcGVyJyk7XG4gICAgICAgICAgICB0b0RvVGV4dFdyYXBwZXIuYXBwZW5kKHRvRG8udGl0bGUpO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRvRG9DaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0by1kby1pdGVtX19jaGVja2JveCcpO1xuICAgICAgICAgICAgdG9Eb0NoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgdG9Eb0NoZWNrYm94LmlkID0gYHRvLWRvLWl0ZW1fX2NoZWNrYm94LS0ke2luZGV4fWA7XG4gICAgICAgICAgICBjb25zdCB0b0RvQ2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB0b0RvQ2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKGB0by1kby1pdGVtX19jaGVja2JveC1sYWJlbC0tJHtpbmRleH1gKTtcbiAgICAgICAgICAgIHRvRG9DaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWl0ZW1fX2NoZWNrYm94LWxhYmVsJyk7XG4gICAgICAgICAgICB0b0RvQ2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0by1kby1pdGVtX19jaGVja2JveC0tJHtpbmRleH1gKTtcblxuICAgICAgICAgICAgdG9Eb0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0b0RvLmNvbXBsZXRlZCA9ICF0b0RvLmNvbXBsZXRlZDtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRvRG9MaXN0LmFwcGVuZCh0b0RvSXRlbSk7XG4gICAgICAgICAgICB0b0RvSXRlbS5hcHBlbmQodG9Eb0NoZWNrYm94LCB0b0RvQ2hlY2tib3hMYWJlbCwgdG9Eb1RleHRXcmFwcGVyKTsgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRvRG8uY29tcGxldGVkID09PSB0cnVlKSB0b0RvQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG5cblxuICAgICAgICAgICAgdG9Eb0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1UZW1wbGF0ZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodG9Eb0Zvcm1UZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS5yZXBsYWNlV2l0aChmb3JtVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlVG9Eb0Zvcm0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2xvc2UtdG8tZG8nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1sb3cnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1tZWRpdW0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHktaGlnaCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmlvcml0eS1idG4nKTtcblxuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9NYW5hZ2VyLmRlbGV0ZVRvRG8ocHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKSwgdG9Ebyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcblxuICAgICAgICAgICAgICAgIHByaW9yaXR5TG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TG93LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBwcmlvcml0eU1lZGl1bS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TWVkaXVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBwcmlvcml0eUhpZ2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUhpZ2guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvRG8udGl0bGU7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdG9Eby5kdWVEYXRlO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0b0RvLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUJ0biA9IEFycmF5LmZyb20ocHJpb3JpdHlCdG5zKS5maW5kKGVsID0+IGVsLmNsYXNzTGlzdC5jb250YWlucyh0b0RvLnByaW9yaXR5KSk7XG4gICAgICAgICAgICAgICAgYWN0aXZlQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFmb3JtLmNvbnRhaW5zKGUudGFyZ2V0KSkgZm9ybS5yZXBsYWNlV2l0aCh0b0RvSXRlbSk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlDb2RlID0gZS5jb2RlO1xuICAgICAgICAgICAgICAgICAgICBpZihrZXlDb2RlID09PSAnRW50ZXInICYmICFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRpdGxlSW5wdXQudmFsdWUpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlQnRuID0gQXJyYXkuZnJvbShwcmlvcml0eUJ0bnMpLmZpbmQoZWwgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gYWN0aXZlQnRuLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb01hbmFnZXIuZWRpdFRvRG8oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9EbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eby5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIuc2hvd1RvRG9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmNvZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmKGtleUNvZGUgPT09ICdFbnRlcicgJiYgIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGl0bGVJbnB1dC52YWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVCdG4gPSBBcnJheS5mcm9tKHByaW9yaXR5QnRucykuZmluZChlbCA9PiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBhY3RpdmVCdG4uaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RvTWFuYWdlci5lZGl0VG9EbyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0RvLmNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICByZXR1cm57XG4gICAgICAgIHNob3dQcm9qZWN0cyxcbiAgICAgICAgc2hvd1RvRG9zXG4gICAgfVxufSkoKVxuXG5cbmV4cG9ydCBkZWZhdWx0IGRvbU1hbmFnZXIiLCJpbXBvcnQgc2VjdGlvbkNvbnRyb2xsZXIgZnJvbSBcIi4vc2VjdGlvbkNvbnRyb2xsZXJcIjtcblxuY29uc3QgUHJvamVjdCA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHRvRG9MaXN0OiBbXVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpKSk7ICAvLyBsb2NhbCBzdG9yYWdlIG9ubHkgc3VwcG9ydHMgc3RyaW5nIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtdXN0IHVzZSBKU09OLnN0cmluZ2lmeSBhbmQgSlNPTi5wYXJzZVxuICAgIGNvbnNvbGUuZGlyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpKTtcbn1cblxuY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoZnVuY3Rpb24oKXsgICAgICAgIC8vbW9kdWxlXG4gICAgXG4gICAgbGV0IHByb2plY3RzID0gW107XG5cbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IFByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcpO1xuICAgIHByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0O1xuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKXtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSl7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KG5hbWUpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7ICAgICAgICAgIC8vIHNhdmUgbmV3IHByb2plY3RzIGFycmF5IHRvIHN0b3JhZ2VcbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKXtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFByb2plY3RzKHByb2plY3RzQXJyYXkpe1xuICAgICAgICBwcm9qZWN0cyA9IHByb2plY3RzQXJyYXk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNBcnJheVswXTtcbiAgICAgICAgY29uc29sZS5kaXIocHJvamVjdHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb2plY3QobmFtZSl7XG4gICAgICAgIGlmKHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpKXtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvdWxkIG5vdCBmaW5kIHByb2plY3Qgd2l0aCBtYXRjaGluZyBuYW1lLicpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlZGl0UHJvamVjdE5hbWUocHJvamVjdCwgbmV3TmFtZSl7XG4gICAgICAgIHByb2plY3QubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdFRvRG9zID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0LnRvRG9MaXN0O1xuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZUN1cnJlbnRQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVEZWZhdWx0UHJvamVjdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xuICAgICAgICByZXR1cm4gZGVmYXVsdFByb2plY3Q7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uKGRlbGV0ZWRQcm9qZWN0KXtcbiAgICAgICAgY29uc3QgaW5kZXhPZkRlbGV0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBkZWxldGVkUHJvamVjdC5uYW1lKTtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4T2ZEZWxldGVkUHJvamVjdCwgMSk7XG5cbiAgICAgICAgaWYocHJvamVjdHMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcbiAgICAgICAgICAgIGNoYW5nZUN1cnJlbnRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoYW5nZUN1cnJlbnRQcm9qZWN0KHByb2plY3RzWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNlY3Rpb25Db250cm9sbGVyLmNsb3NlU2VjdGlvbigwKTtcbiAgICAgICAgLy8gc2VjdGlvbkNvbnRyb2xsZXIuZXhwYW5kU2VjdGlvbigwKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7ICAgICAgICAgIC8vIHNhdmUgbmV3IHByb2plY3RzIGFycmF5IHRvIHN0b3JhZ2VcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRDdXJyZW50UHJvamVjdCxcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgZ2V0UHJvamVjdHMsXG4gICAgICAgIHNldFByb2plY3RzLFxuICAgICAgICBnZXRQcm9qZWN0LFxuICAgICAgICBlZGl0UHJvamVjdE5hbWUsXG4gICAgICAgIGdldFByb2plY3RUb0RvcyxcbiAgICAgICAgY2hhbmdlQ3VycmVudFByb2plY3QsXG4gICAgICAgIGRlbGV0ZVByb2plY3QsXG4gICAgICAgIGNyZWF0ZURlZmF1bHRQcm9qZWN0XG4gICAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TWFuYWdlciIsImNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuXG5jb25zdCBzZWN0aW9uQ29udHJvbGxlciA9IChmdW5jdGlvbigpe1xuXG4gICAgbGV0IGV4cGFuZGVkID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBleHBhbmRTZWN0aW9uKGRlbGF5KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RMSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3RfX2l0ZW0nKTtcbiAgICAgICAgY29uc3QgcHJvamVjdExJcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWxpc3RfX2l0ZW0nKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1wcm9qZWN0LWZvcm0nKTtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtSGVpZ2h0ID0gcHJvamVjdExJLnNjcm9sbEhlaWdodDtcbiAgICAgICAgbGV0IHByb2plY3RMaXN0SGVpZ2h0O1xuXG4gICAgICAgIGlmKHByb2plY3RGb3Jtcyl7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdEhlaWdodCA9IHBhcnNlSW50KHByb2plY3RMaXN0SXRlbUhlaWdodCkgKiAocGFyc2VJbnQocHJvamVjdExJcy5sZW5ndGgpK3BhcnNlSW50KHByb2plY3RGb3Jtcy5sZW5ndGgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0SGVpZ2h0ID0gcGFyc2VJbnQocHJvamVjdExpc3RJdGVtSGVpZ2h0KSAqIHBhcnNlSW50KHByb2plY3RMSXMubGVuZ3RoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcHJvamVjdExpc3Quc3R5bGUudHJhbnNpdGlvbiA9IGBhbGwgJHtkZWxheX1tc2BcbiAgICAgICAgcHJvamVjdExpc3Quc3R5bGUuaGVpZ2h0ID0gYCR7cHJvamVjdExpc3RIZWlnaHR9cHhgXG4gIFxuICAgICAgICBleHBhbmRlZCA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNsb3NlU2VjdGlvbihkZWxheSkge1xuICAgICAgICBwcm9qZWN0TGlzdC5zdHlsZS50cmFuc2l0aW9uID0gYGFsbCAke2RlbGF5fWBcbiAgICAgICAgcHJvamVjdExpc3Quc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICBwcm9qZWN0TGlzdC5zdHlsZS50cmFuc2l0aW9uID0gJzUwMG1zJztcblxuICAgICAgICBleHBhbmRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRXhwYW5kZWQoKXtcbiAgICAgICAgY29uc29sZS5sb2coZXhwYW5kZWQpXG4gICAgICAgIHJldHVybiBleHBhbmRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBleHBhbmRTZWN0aW9uLFxuICAgICAgICBjbG9zZVNlY3Rpb24sXG4gICAgICAgIGlzRXhwYW5kZWRcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IHNlY3Rpb25Db250cm9sbGVyIiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5cbmNvbnN0IFRvRG9JdGVtID0gZnVuY3Rpb24odGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkKXsgICAgICAgLy9mYWN0b3J5IGZ1bmN0aW9uc1xuICAgIHJldHVybiB7dGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkfTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCkpKTsgIC8vIGxvY2FsIHN0b3JhZ2Ugb25seSBzdXBwb3J0cyBzdHJpbmcgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG11c3QgdXNlIEpTT04uc3RyaW5naWZ5IGFuZCBKU09OLnBhcnNlXG4gICAgY29uc29sZS5kaXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpO1xufVxuXG5jb25zdCB0b0RvTWFuYWdlciA9IChmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgY3JlYXRlVG9EbyA9IGZ1bmN0aW9uKHByb2plY3QsIHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNvbXBsZXRlZD1mYWxzZSl7XG4gICAgICAgIGNvbnN0IG5ld1RvRG8gPSBUb0RvSXRlbSh0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWQpO1xuICAgICAgICBwcm9qZWN0LnRvRG9MaXN0LnB1c2gobmV3VG9Ebyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICB9ICBcblxuICAgIGNvbnN0IGdldFRvRG8gPSBmdW5jdGlvbihwcm9qZWN0LCB0aXRsZSl7XG4gICAgICAgIGlmKHByb2plY3QudG9Eb0xpc3QuZmluZChpdGVtID0+IGl0ZW0udGl0bGUgPT09IHRpdGxlKSl7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdC50b0RvTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdGl0bGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvdWxkIG5vdCBmaW5kIFRvIERvIEl0ZW0gd2l0aCBtYXRjaGluZyB0aXRsZScpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGVsZXRlVG9EbyA9IGZ1bmN0aW9uKHByb2plY3QsIHRvRG9JdGVtKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0LnRvRG9MaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udGl0bGUgPT09IHRvRG9JdGVtLnRpdGxlKTtcbiAgICAgICAgcHJvamVjdC50b0RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGVkaXRUb0RvID0gZnVuY3Rpb24odG9Eb0l0ZW0sIHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNvbXBsZXRlZD1mYWxzZSl7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFRvRG8gPSBUb0RvSXRlbSh0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWQpO1xuICAgICAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRQcm9qZWN0LnRvRG9MaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udGl0bGUgPT09IHRvRG9JdGVtLnRpdGxlKTtcbiAgICAgICAgY3VycmVudFByb2plY3QudG9Eb0xpc3Quc3BsaWNlKGluZGV4LCAxLCB1cGRhdGVkVG9Ebyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlVG9EbyxcbiAgICAgICAgZ2V0VG9EbyxcbiAgICAgICAgZGVsZXRlVG9EbyxcbiAgICAgICAgZWRpdFRvRG8sXG4gICAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCB0b0RvTWFuYWdlciIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL0RlcGVuZGVuY2llcyBMaXN0XG5pbXBvcnQgXCIuL3Njc3MvbWFpbi5zY3NzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuL3Nwcml0ZS5zdmdcIjtcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiO1xuaW1wb3J0IHRvRG9NYW5hZ2VyIGZyb20gXCIuL3RvRG9NYW5hZ2VyXCI7XG5pbXBvcnQgZG9tTWFuYWdlciBmcm9tIFwiLi9kb21NYW5hZ2VyXCI7XG5pbXBvcnQgc2VjdGlvbkNvbnRyb2xsZXIgZnJvbSBcIi4vc2VjdGlvbkNvbnRyb2xsZXJcIjtcblxuLy9ET00gUXVlcnkgU2VsZWN0b3JzXG5cbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuY29uc3QgdG9Eb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdCcpO1xuY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcHJvamVjdC1idG4nKTtcbmNvbnN0IHRvRG9Gb3JtVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG8tZG8tZm9ybS10ZW1wbGF0ZScpO1xuY29uc3QgY3JlYXRlVG9Eb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdG8tZG8tYnRuJyk7XG5jb25zdCB0b2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZXInKTtcblxuY3JlYXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZihwcm9qZWN0TGlzdC5sYXN0Q2hpbGQubm9kZU5hbWUgPT09ICdGT1JNJykgcmV0dXJuO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBmb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLXByb2plY3QtZm9ybScpXG4gICAgZm9ybUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2lucHV0Jyk7XG4gICAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmV3IFByb2plY3QnKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoZm9ybSk7XG4gICAgZm9ybS5hcHBlbmQoZm9ybUlucHV0KTtcbiAgICBzZWN0aW9uQ29udHJvbGxlci5jbG9zZVNlY3Rpb24oMCk7XG4gICAgc2VjdGlvbkNvbnRyb2xsZXIuZXhwYW5kU2VjdGlvbigwKTtcbiAgICBmb3JtSW5wdXQuZm9jdXMoKTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZUZvcm0oZSl7XG4gICAgICAgIGlmKCFmb3JtLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgZm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHNlY3Rpb25Db250cm9sbGVyLmNsb3NlU2VjdGlvbigwKTtcbiAgICAgICAgICAgIHNlY3Rpb25Db250cm9sbGVyLmV4cGFuZFNlY3Rpb24oMCk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgcmVtb3ZlRm9ybSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgcmVtb3ZlRm9ybSk7XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghZm9ybUlucHV0LnZhbHVlKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgaWYocHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBmb3JtSW5wdXQudmFsdWUpLmxlbmd0aCA+IDApIHJldHVybjsgICAvLyBjaGVjayBmb3IgZXhpc3RpbmcgcHJvamVjdCBuYW1lXG4gICAgICAgIHByb2plY3RNYW5hZ2VyLmNyZWF0ZVByb2plY3QoZm9ybUlucHV0LnZhbHVlKTtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuY2hhbmdlQ3VycmVudFByb2plY3QocHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChmb3JtSW5wdXQudmFsdWUpKTtcbiAgICAgICAgZG9tTWFuYWdlci5zaG93UHJvamVjdHMoKTtcbiAgICAgICAgZG9tTWFuYWdlci5zaG93VG9Eb3MoKTtcbiAgICAgICAgZm9ybUlucHV0LnZhbHVlID0gJyc7XG4gICAgfSlcbn0pXG5cbmNyZWF0ZVRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgdG9Eb0xpc3RDaGlsZE5vZGVBcnJheSA9IEFycmF5LmZyb20odG9Eb0xpc3QuY2hpbGROb2Rlcyk7XG4gICAgaWYodG9Eb0xpc3RDaGlsZE5vZGVBcnJheS5maW5kKGNoaWxkTm9kZSA9PiBjaGlsZE5vZGUuaWQgPT09ICdjcmVhdGVUb0RvRm9ybScpKSByZXR1cm47XG5cbiAgICBjb25zdCBmb3JtVGVtcGxhdGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRvRG9Gb3JtVGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgdG9Eb0xpc3QuYXBwZW5kKGZvcm1UZW1wbGF0ZSk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVRvRG9Gb3JtJyk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNsb3NlLXRvLWRvJyk7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgcHJpb3JpdHlMb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHktbG93Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHktbWVkaXVtJyk7XG4gICAgY29uc3QgcHJpb3JpdHlIaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LWhpZ2gnKTtcbiAgICBjb25zdCBwcmlvcml0eUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpb3JpdHktYnRuJyk7XG5cbiAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG5cbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICBwcmlvcml0eUxvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICBwcmlvcml0eUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuICAgICAgICBwcmlvcml0eUxvdy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH0pXG4gICAgcHJpb3JpdHlNZWRpdW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBwcmlvcml0eUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuICAgICAgICBwcmlvcml0eU1lZGl1bS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH0pXG4gICAgcHJpb3JpdHlIaWdoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgcHJpb3JpdHlCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcbiAgICAgICAgcHJpb3JpdHlIaWdoLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcbiAgICAgICAgaWYoIWZvcm0uY29udGFpbnMoZS50YXJnZXQpKSBmb3JtLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICBjb25zdCBmaXJlYWJsZUlucHV0cyA9IFtkZXNjcmlwdGlvbklucHV0LCB0aXRsZUlucHV0XTtcblxuICAgIGZvcihsZXQgaW5wdXQgb2YgZmlyZWFibGVJbnB1dHMpe1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57XG4gICAgICAgICAgICBjb25zdCBrZXlDb2RlID0gZS5jb2RlO1xuICAgICAgICAgICAgaWYoa2V5Q29kZSA9PT0gJ0VudGVyJyAmJiAhZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRpdGxlSW5wdXQudmFsdWUpIHJldHVybjtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVCdG4gPSBBcnJheS5mcm9tKHByaW9yaXR5QnRucykuZmluZChlbCA9PiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gYWN0aXZlQnRuLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB0b0RvTWFuYWdlci5jcmVhdGVUb0RvKFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLCBcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlLCBcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VmFsdWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIuc2hvd1RvRG9zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSlcblxuLy9Mb2NhbCBTdG9yYWdlXG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIHZhciBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIHZhciB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKSkpOyAgLy8gbG9jYWwgc3RvcmFnZSBvbmx5IHN1cHBvcnRzIHN0cmluZyB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbXVzdCB1c2UgSlNPTi5zdHJpbmdpZnkgYW5kIEpTT04ucGFyc2VcbiAgICBjb25zb2xlLmRpcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSk7XG59XG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgIGNvbnNvbGUubG9nKCdZaXBwZWUhIFdlIGNhbiB1c2UgbG9jYWxTdG9yYWdlIGF3ZXNvbWVuZXNzJyk7XG5cbiAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuc2V0UHJvamVjdHMocHJvamVjdHMpO1xuICAgICAgICBkb21NYW5hZ2VyLnNob3dQcm9qZWN0cygpO1xuICAgICAgICBkb21NYW5hZ2VyLnNob3dUb0RvcygpO1xuICAgIH1cblxufVxuZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ1RvbyBiYWQsIG5vIGxvY2FsU3RvcmFnZSBmb3IgdXMnKTtcbn1cblxuXG5cblxuXG4vLyBNb2JpbGUgbmF2IHRvZ2dsZXJcblxuXG50b2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgbGV0IGlzRXhwYW5kZWQgPSBzZWN0aW9uQ29udHJvbGxlci5pc0V4cGFuZGVkKCk7XG4gICAgaWYoaXNFeHBhbmRlZCl7XG4gICAgICAgIHNlY3Rpb25Db250cm9sbGVyLmNsb3NlU2VjdGlvbig1MDApXG4gICAgfSBlbHNle1xuICAgICAgICBzZWN0aW9uQ29udHJvbGxlci5leHBhbmRTZWN0aW9uKDUwMClcbiAgICB9XG4gICAgdG9nZ2xlci5jbGFzc0xpc3QudG9nZ2xlKCdmbGlwLTE4MCcpXG59KVxuXG5sZXQgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2MHB4KScpO1xuXG5tcWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgaWYobXFsLm1hdGNoZXMgPT09IGZhbHNlICYmIHByb2plY3RMaXN0LnN0eWxlLmhlaWdodCA9PT0gJzBweCcpe1xuICAgICAgICBwcm9qZWN0TGlzdC5zdHlsZS5oZWlnaHQgPSAnJ1xuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9