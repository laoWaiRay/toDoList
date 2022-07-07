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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  box-sizing: border-box;\n  user-select: none;\n}\n\nli {\n  list-style: none;\n}\n\n.icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n\n.icon-add-solid,\n.icon-plus {\n  fill: #fff;\n  width: 3.5rem;\n  height: 3.5rem;\n  margin-bottom: 3rem;\n  margin-left: 2.5rem;\n  transition: all 500ms ease-in-out;\n  border-radius: 50%;\n}\n.icon-add-solid:hover,\n.icon-plus:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  fill: #8b5615;\n}\n\n.main {\n  font-size: 2rem;\n  font-family: \"Noto Sans\", sans-serif;\n  font-weight: 400;\n  color: #fff;\n}\n\n.heading-primary {\n  margin-bottom: 3rem;\n}\n\n.heading-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 4rem;\n  padding-bottom: 0;\n}\n\n.display-block {\n  display: block;\n}\n\n.btn-close-project {\n  background-color: transparent;\n  border: 0;\n  font-size: 2rem;\n  font-weight: 300;\n  font-family: inherit;\n  color: rgba(255, 255, 255, 0.5);\n  position: relative;\n}\n.btn-close-project:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.form-container {\n  display: none;\n}\n\n.form-container--createProject {\n  display: \"block\";\n}\n\n.form__input {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 400;\n  color: inherit;\n  background-color: transparent;\n  border: 0;\n  outline: none;\n  padding: 1rem 4rem;\n}\n\n.footer {\n  padding: 1rem;\n  background-color: #292937;\n  color: #fff;\n}\n\n.footer-text-main {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.odin-logo {\n  height: 3.5rem;\n  width: auto;\n  margin-left: 2rem;\n  fill: #fff;\n  color: #fff;\n}\n\n.github-cat {\n  fill: #fff;\n  margin-left: 2rem;\n  transition: all 2s;\n  height: 3.5rem;\n}\n.github-cat:hover {\n  transform: rotate(360deg);\n  fill: #8b5615;\n}\n\n.github-handle {\n  color: #8b5615;\n  font-weight: 400;\n  padding: 0 1rem;\n  text-decoration: none;\n}\n\n.sidebar {\n  grid-template-columns: 1/2;\n  grid-row: 1/3;\n  width: 100%;\n  background-color: #242426;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.project-list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n}\n.project-list__item {\n  padding: 1rem 4rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-list__item.active {\n  font-weight: 400;\n  background-color: #8b5615;\n}\n\n.hero {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background: linear-gradient(to bottom right, #293038, #31475a);\n  z-index: -1;\n}\n\n.grid {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 30rem 1fr;\n  grid-template-rows: 1fr 6rem;\n}\n\n.to-do-container {\n  padding: 4rem 8rem;\n}", "",{"version":3,"sources":["webpack://./src/scss/base/_base.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_icons.scss","webpack://./src/scss/abstracts/_variables.scss","webpack://./src/scss/base/_typography.scss","webpack://./src/scss/base/_utilities.scss","webpack://./src/scss/components/_button.scss","webpack://./src/scss/components/_form.scss","webpack://./src/scss/layout/_footer.scss","webpack://./src/scss/layout/_sidebar.scss","webpack://./src/scss/pages/_home.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,mBAAA;ACCJ;;ADEA;EACI,gBAAA;ACCJ;;ADEA;EACI,sBAAA;EACA,iBAAA;ACCJ;;ADEA;EACI,gBAAA;ACCJ;;ADEA;EACI,qBAAA;EACA,UAAA;EACA,WAAA;EACA,eAAA;EACA,oBAAA;EACA,kBAAA;ACCJ;;AC1BA;;EAEI,UAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,mBAAA;EACA,iCAAA;EACA,kBAAA;AD6BJ;AC3BI;;EACI,eAAA;EACA,qBAAA;EACA,aCVQ;AFwChB;;AG3CA;EACI,eAAA;EACA,oCAAA;EACA,gBAAA;EACA,WAAA;AH8CJ;;AG3CA;EACI,mBAAA;AH8CJ;;AG3CA;EACI,aAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,iBAAA;AH8CJ;;AI9DA;EACI,cAAA;AJiEJ;;AKlEA;EACI,6BAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,+BAAA;EACA,kBAAA;ALqEJ;AKnEI;EACI,eAAA;EACA,WAAA;ALqER;;AMhFA;EACI,aAAA;ANmFJ;;AM/EA;EACI,gBAAA;ANkFJ;;AM7EI;EACI,oBAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,6BAAA;EACA,SAAA;EACA,aAAA;EACA,kBAAA;ANgFR;;AOnGA;EACI,aAAA;EAEA,yBAAA;EACA,WAAA;APqGJ;;AOlGA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;APqGJ;;AOlGA;EACI,cAAA;EACA,WAAA;EACA,iBAAA;EACA,UAAA;EACA,WAAA;APqGJ;;AOlGA;EACI,UAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;APqGJ;AOnGI;EACI,yBAAA;EACA,aL1BQ;AF+HhB;;AOhGA;EACI,cLhCY;EKiCZ,gBAAA;EACA,eAAA;EACA,qBAAA;APmGJ;;AQzIA;EACI,0BAAA;EACA,aAAA;EACA,WAAA;EAEA,yBAAA;EACA,YAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;AR0IJ;;AQrIA;EAEI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,WAAA;ARuIJ;AQrII;EACI,kBAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;ARuIR;;AQnIA;EACI,gBAAA;EACA,yBN/BY;AFqKhB;;ASxKA;EACI,eAAA;EACA,aAAA;EACA,YAAA;EAEA,8DAAA;EAIA,WAAA;ATuKJ;;ASpKA;EACI,WAAA;EACA,aAAA;EACA,aAAA;EACA,gCAAA;EACA,4BAAA;ATuKJ;;ASpKA;EACI,kBAAA;ATuKJ","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nhtml{\n    font-size: 62.5%;\n}\n\nbody{\n    box-sizing: border-box;\n    user-select: none;\n}\n\nli{\n    list-style: none;\n}\n\n.icon {\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    stroke-width: 0;\n    stroke: currentColor;\n    fill: currentColor;\n}","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  box-sizing: border-box;\n  user-select: none;\n}\n\nli {\n  list-style: none;\n}\n\n.icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n\n.icon-add-solid,\n.icon-plus {\n  fill: #fff;\n  width: 3.5rem;\n  height: 3.5rem;\n  margin-bottom: 3rem;\n  margin-left: 2.5rem;\n  transition: all 500ms ease-in-out;\n  border-radius: 50%;\n}\n.icon-add-solid:hover,\n.icon-plus:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  fill: #8b5615;\n}\n\n.main {\n  font-size: 2rem;\n  font-family: \"Noto Sans\", sans-serif;\n  font-weight: 400;\n  color: #fff;\n}\n\n.heading-primary {\n  margin-bottom: 3rem;\n}\n\n.heading-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 4rem;\n  padding-bottom: 0;\n}\n\n.display-block {\n  display: block;\n}\n\n.btn-close-project {\n  background-color: transparent;\n  border: 0;\n  font-size: 2rem;\n  font-weight: 300;\n  font-family: inherit;\n  color: rgba(255, 255, 255, 0.5);\n  position: relative;\n}\n.btn-close-project:hover {\n  cursor: pointer;\n  color: #fff;\n}\n\n.form-container {\n  display: none;\n}\n\n.form-container--createProject {\n  display: \"block\";\n}\n\n.form__input {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 400;\n  color: inherit;\n  background-color: transparent;\n  border: 0;\n  outline: none;\n  padding: 1rem 4rem;\n}\n\n.footer {\n  padding: 1rem;\n  background-color: #292937;\n  color: #fff;\n}\n\n.footer-text-main {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.odin-logo {\n  height: 3.5rem;\n  width: auto;\n  margin-left: 2rem;\n  fill: #fff;\n  color: #fff;\n}\n\n.github-cat {\n  fill: #fff;\n  margin-left: 2rem;\n  transition: all 2s;\n  height: 3.5rem;\n}\n.github-cat:hover {\n  transform: rotate(360deg);\n  fill: #8b5615;\n}\n\n.github-handle {\n  color: #8b5615;\n  font-weight: 400;\n  padding: 0 1rem;\n  text-decoration: none;\n}\n\n.sidebar {\n  grid-template-columns: 1/2;\n  grid-row: 1/3;\n  width: 100%;\n  background-color: #242426;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.project-list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n}\n.project-list__item {\n  padding: 1rem 4rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-list__item.active {\n  font-weight: 400;\n  background-color: #8b5615;\n}\n\n.hero {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background: linear-gradient(to bottom right, #293038, #31475a);\n  z-index: -1;\n}\n\n.grid {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 30rem 1fr;\n  grid-template-rows: 1fr 6rem;\n}\n\n.to-do-container {\n  padding: 4rem 8rem;\n}",".icon-add-solid,\n.icon-plus{\n    fill: #fff;\n    width: 3.5rem;\n    height: 3.5rem;\n    margin-bottom: 3rem;\n    margin-left: 2.5rem;\n    transition: all 500ms ease-in-out;\n    border-radius: 50%;\n\n    &:hover{\n        cursor: pointer;\n        transform: scale(1.1);\n        fill: $color-primary;\n    }\n}","// COLORS\n\n\n$color-primary: #8b5615;\n\n//FONT\n\n$font-size-default: 1.6rem;",".main{\n    font-size: 2rem;\n    font-family: 'Noto Sans', sans-serif;\n    font-weight: 400;\n    color: #fff;\n}\n\n.heading-primary{\n    margin-bottom: 3rem;\n}\n\n.heading-container{\n    display: flex;\n    align-items: center;\n    width: 100%;\n    padding: 4rem;\n    padding-bottom: 0;\n}\n",".display-block{\n    display: block;\n}",".btn-close-project{\n    background-color: transparent;\n    border: 0;\n    font-size: 2rem;\n    font-weight: 300;\n    font-family: inherit;\n    color: rgba(255, 255, 255, 0.5);\n    position: relative;\n\n    &:hover{\n        cursor: pointer;\n        color: #fff;\n    }\n}",".form-container{\n    display: none;\n    // position: absolute;\n}\n\n.form-container--createProject{\n    display: 'block';\n}\n\n.form{\n\n    &__input{\n        font-family: inherit;\n        font-size: inherit;\n        font-weight: 400;\n        color: inherit;\n        background-color: transparent;\n        border: 0;\n        outline: none;\n        padding: 1rem 4rem;\n    }\n}",".footer{\n    padding: 1rem;\n    // border-top: 1px solid rgba(0, 0, 0, 0.283);\n    background-color: #292937;\n    color: #fff;\n}\n\n.footer-text-main{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.odin-logo{\n    height: 3.5rem;\n    width: auto;\n    margin-left: 2rem;\n    fill: #fff;\n    color: #fff;\n}\n\n.github-cat{\n    fill: #fff;\n    margin-left: 2rem;\n    transition: all 2s;\n    height: 3.5rem;\n\n    &:hover{\n        transform: rotate(360deg);\n        fill: $color-primary;\n\n    }\n}\n\n.github-handle{\n    color: $color-primary;\n    font-weight: 400;\n    padding: 0 1rem;\n    text-decoration: none;\n}",".sidebar{\n    grid-template-columns: 1/2;\n    grid-row: 1/3;\n    width: 100%;\n\n    background-color: #242426;\n    color: white;\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n\n    // padding: 4rem;\n}\n\n.project-list{\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    width: 100%;\n\n    &__item{\n        padding: 1rem 4rem;\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n}\n\n.project-list__item.active{\n    font-weight: 400;\n    background-color: $color-primary;\n}",".hero{\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    // background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(/dist/assets/hero.jpg);\n    background: linear-gradient(to bottom right,#293038, #31475a);\n    // background-size: cover;\n    // background-position: center;\n    // background-repeat: no-repeat;\n    z-index: -1;\n}\n\n.grid{\n    width: 100%;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 30rem 1fr;\n    grid-template-rows: 1fr 6rem;\n}\n\n.to-do-container{\n    padding: 4rem 8rem;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/img/hero.jpg":
/*!**************************!*\
  !*** ./src/img/hero.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/hero.jpg";

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
/* harmony import */ var _img_hero_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/hero.jpg */ "./src/img/hero.jpg");
/* harmony import */ var _sprite_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sprite.svg */ "./src/sprite.svg");
//Dependencies List




//DOM Query Selectors


const createToDoForm = document.querySelector('#createToDoForm');
const createToDoFormInputs = document.querySelectorAll('#createToDoForm .form__input');
const titleInput = document.querySelector('#title');
const dueDateInput = document.querySelector('#dueDate');
const priorityInput = document.querySelector('#priority');
const descriptionInput = document.querySelector('#description');



const projectList = document.querySelector('.project-list');
const toDoList = document.querySelector('.to-do-list');

const hero = document.querySelector('.hero');
hero.src = _img_hero_jpg__WEBPACK_IMPORTED_MODULE_1__;

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

    window.addEventListener('click', e => {
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

createToDoBtn.addEventListener('click', ()=>{
    const formElement = document.importNode(toDoFormTemplate.content, true);
    console.dir(formElement);
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
    
    const projects = [];

    const defaultProject = Project('Default Project');
    projects.push(defaultProject);
    let currentProject = defaultProject;

    function getCurrentProject(){
        return currentProject;
    }

    function createProject(name){
        const newProject = Project(name);
        projects.push(newProject);
        return newProject;
    }

    function getProjects(){
        return projects;
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

    const showCurrentProject = function(){
        console.log(currentProject);
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
        getProject,
        editProjectName,
        getProjectToDos,
        showCurrentProject,
        changeCurrentProject,
        deleteProject,
        createDefaultProject
    }
})()



const toDoManager = (function(){

    const createToDo = function(project, title, dueDate, description, priority, completed=false){
        const newToDo = ToDoItem(title, dueDate, description, priority, completed);
        project.toDoList.push(newToDo);
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

    const editToDo = function(project, toDoItem, title, dueDate, description, priority, completed){
        const updatedToDo = ToDoItem(title, dueDate, description, priority, completed);
        const index = project.toDoList.findIndex(item => item.title === toDoItem.title);
        project.toDoList.splice(index, 1, updatedToDo);
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

                window.addEventListener('click', e => {
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
        toDos.forEach(toDo => {

            const toDoItem = document.createElement('li');
            toDoItem.classList.add('to-do-item');
            toDoItem.append(toDo.title);
            const toDoCheckbox = document.createElement('input');
            toDoCheckbox.classList.add('to-do-item__checkbox');
            toDoCheckbox.setAttribute('type', 'checkbox');


            toDoCheckbox.addEventListener('change', () => {
                toDo.completed = !toDo.completed;
            })
            


            toDoList.append(toDoItem);
            toDoItem.append(toDoCheckbox);
            
            toDoItem.addEventListener('dblclick', ()=>{

                if(!toDoItem.nextElementSibling || toDoItem.nextElementSibling.className === 'to-do-item'){
                    const toDoPopup = document.createElement('form');
                    toDoPopup.classList.add('to-do-popup');

                    const toDoPopupDueDate = document.createElement('input');
                    toDoPopupDueDate.classList.add('to-do-popup__due-date', 'display-block');
                    toDoPopupDueDate.setAttribute('type', 'date');
                    toDoPopupDueDate.value = (toDo.dueDate);
                    toDoPopupDueDate.addEventListener('change', ()=>{
                        toDo.dueDate = toDoPopupDueDate.value;
                    })

                    const toDoPopupDescription = document.createElement('textarea');
                    toDoPopupDescription.classList.add('to-do-popup__description', 'display-block');
                    toDoPopupDescription.append(toDo.description);
                    toDoPopupDescription.addEventListener('change', ()=>{
                        toDo.description = toDoPopupDescription.value;
                    })

                    const toDoPopupPriorityLabel = document.createElement('label');
                    toDoPopupPriorityLabel.classList.add('to-do-popup__label', 'display-block');
                    toDoPopupPriorityLabel.setAttribute('for', 'toDoPopupPriority');
                    toDoPopupPriorityLabel.append('Priority: ');

                    const toDoPopupPriority = document.createElement('input');
                    toDoPopupPriority.id = 'toDoPopupPriority';
                    toDoPopupPriority.classList.add('to-do-popup__priority', 'display-block');
                    toDoPopupPriority.setAttribute('type', 'range');
                    toDoPopupPriority.setAttribute('min', '1');
                    toDoPopupPriority.setAttribute('max', '3');
                    toDoPopupPriority.setAttribute('step', '1');
                    toDoPopupPriority.value = toDo.priority;
                    toDoPopupPriority.addEventListener('change', ()=>{
                        toDo.priority = toDoPopupPriority.value;
                    })

                    const closeBtn = document.createElement('button');
                    closeBtn.classList.add('to-do-popup__close');
                    closeBtn.append('x');
                    closeBtn.addEventListener('click', ()=>{
                        const currentProject = projectManager.getCurrentProject();
                        toDoManager.deleteToDo(currentProject, toDoManager.getToDo(currentProject, toDo.title));
                        domManager.showToDos();
                    })

                    toDoItem.append(closeBtn);
                    
                    toDoItem.insertAdjacentElement('afterend', toDoPopup);
                    toDoPopup.append(toDoPopupDueDate, toDoPopupDescription, toDoPopupPriorityLabel, toDoPopupPriority);


                } else if(toDoItem.nextElementSibling && toDoItem.nextElementSibling.className === 'to-do-popup'){
                    const nextElement = toDoItem.nextElementSibling;
                    nextElement.remove();
                    toDoItem.lastChild.remove();
                }
            })
        })
    }

    
    return{
        showProjects,
        showToDos
    }
})()



domManager.showProjects();
// domManager.showToDos();
 

///////////////////////////////////////////////////////////


//////////////////////// Event Handlers //////////////////////

createToDoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (!titleInput.value) return;

    toDoManager.createToDo(
        projectManager.getCurrentProject(), 
        titleInput.value,
        dueDateInput.value, 
        descriptionInput.value, 
        priorityInput.value,
    );
    
    domManager.showToDos();

    createToDoFormInputs.forEach(input => {
        input.value = '';
    })
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Szs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RkFBOEY7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7O0FBT0QsbUZBQW1GO0FBQ25GLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7OztBQU1EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3RUFBd0U7QUFDeEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2Nzcy9tYWluLnNjc3M/NmQyNSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMWVtO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBzdHJva2Utd2lkdGg6IDA7XFxuICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLmljb24tYWRkLXNvbGlkLFxcbi5pY29uLXBsdXMge1xcbiAgZmlsbDogI2ZmZjtcXG4gIHdpZHRoOiAzLjVyZW07XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICBtYXJnaW4tbGVmdDogMi41cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uaWNvbi1hZGQtc29saWQ6aG92ZXIsXFxuLmljb24tcGx1czpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBmaWxsOiAjOGI1NjE1O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5oZWFkaW5nLXByaW1hcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLmhlYWRpbmctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcblxcbi5kaXNwbGF5LWJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uYnRuLWNsb3NlLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYnRuLWNsb3NlLXByb2plY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXItLWNyZWF0ZVByb2plY3Qge1xcbiAgZGlzcGxheTogXFxcImJsb2NrXFxcIjtcXG59XFxuXFxuLmZvcm1fX2lucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTM3O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb290ZXItdGV4dC1tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5vZGluLWxvZ28ge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgZmlsbDogI2ZmZjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZ2l0aHViLWNhdCB7XFxuICBmaWxsOiAjZmZmO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMnM7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG59XFxuLmdpdGh1Yi1jYXQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIGZpbGw6ICM4YjU2MTU7XFxufVxcblxcbi5naXRodWItaGFuZGxlIHtcXG4gIGNvbG9yOiAjOGI1NjE1O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLzI7XFxuICBncmlkLXJvdzogMS8zO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI2O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnByb2plY3QtbGlzdF9faXRlbSB7XFxuICBwYWRkaW5nOiAxcmVtIDRyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0X19pdGVtLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNTYxNTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMyOTMwMzgsICMzMTQ3NWEpO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5ncmlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcmVtIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZyZW07XFxufVxcblxcbi50by1kby1jb250YWluZXIge1xcbiAgcGFkZGluZzogNHJlbSA4cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9faWNvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYWJzdHJhY3RzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL191dGlsaXRpZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2Zvcm0uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19zaWRlYmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3BhZ2VzL19ob21lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBQzFCQTs7RUFFSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBRDZCSjtBQzNCSTs7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQ1ZRO0FGd0NoQjs7QUczQ0E7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUg4Q0o7O0FHM0NBO0VBQ0ksbUJBQUE7QUg4Q0o7O0FHM0NBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBSDhDSjs7QUk5REE7RUFDSSxjQUFBO0FKaUVKOztBS2xFQTtFQUNJLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBTHFFSjtBS25FSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FMcUVSOztBTWhGQTtFQUNJLGFBQUE7QU5tRko7O0FNL0VBO0VBQ0ksZ0JBQUE7QU5rRko7O0FNN0VJO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBTmdGUjs7QU9uR0E7RUFDSSxhQUFBO0VBRUEseUJBQUE7RUFDQSxXQUFBO0FQcUdKOztBT2xHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FQcUdKOztBT2xHQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBUHFHSjs7QU9sR0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QVBxR0o7QU9uR0k7RUFDSSx5QkFBQTtFQUNBLGFMMUJRO0FGK0hoQjs7QU9oR0E7RUFDSSxjTGhDWTtFS2lDWixnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBUG1HSjs7QVF6SUE7RUFDSSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QVIwSUo7O0FRcklBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QVJ1SUo7QVFySUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBUnVJUjs7QVFuSUE7RUFDSSxnQkFBQTtFQUNBLHlCTi9CWTtBRnFLaEI7O0FTeEtBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBRUEsOERBQUE7RUFJQSxXQUFBO0FUdUtKOztBU3BLQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7QVR1S0o7O0FTcEtBO0VBQ0ksa0JBQUE7QVR1S0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1se1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxubGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5pY29uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgc3Ryb2tlLXdpZHRoOiAwO1xcbiAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcXG4gICAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cIixcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHN0cm9rZS13aWR0aDogMDtcXG4gIHN0cm9rZTogY3VycmVudENvbG9yO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG5cXG4uaWNvbi1hZGQtc29saWQsXFxuLmljb24tcGx1cyB7XFxuICBmaWxsOiAjZmZmO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiAyLjVyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5pY29uLWFkZC1zb2xpZDpob3ZlcixcXG4uaWNvbi1wbHVzOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGZpbGw6ICM4YjU2MTU7XFxufVxcblxcbi5tYWluIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlYWRpbmctcHJpbWFyeSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uaGVhZGluZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuXFxuLmRpc3BsYXktYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5idG4tY2xvc2UtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5idG4tY2xvc2UtcHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lci0tY3JlYXRlUHJvamVjdCB7XFxuICBkaXNwbGF5OiBcXFwiYmxvY2tcXFwiO1xcbn1cXG5cXG4uZm9ybV9faW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtIDRyZW07XFxufVxcblxcbi5mb290ZXIge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mzc7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvb3Rlci10ZXh0LW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm9kaW4tbG9nbyB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBmaWxsOiAjZmZmO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5naXRodWItY2F0IHtcXG4gIGZpbGw6ICNmZmY7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAycztcXG4gIGhlaWdodDogMy41cmVtO1xcbn1cXG4uZ2l0aHViLWNhdDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgZmlsbDogIzhiNTYxNTtcXG59XFxuXFxuLmdpdGh1Yi1oYW5kbGUge1xcbiAgY29sb3I6ICM4YjU2MTU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEvMjtcXG4gIGdyaWQtcm93OiAxLzM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdC1saXN0X19pdGVtIHtcXG4gIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWxpc3RfX2l0ZW0uYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI1NjE1O1xcbn1cXG5cXG4uaGVybyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzI5MzAzOCwgIzMxNDc1YSk7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzByZW0gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNnJlbTtcXG59XFxuXFxuLnRvLWRvLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA0cmVtIDhyZW07XFxufVwiLFwiLmljb24tYWRkLXNvbGlkLFxcbi5pY29uLXBsdXN7XFxuICAgIGZpbGw6ICNmZmY7XFxuICAgIHdpZHRoOiAzLjVyZW07XFxuICAgIGhlaWdodDogMy41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICAgIGZpbGw6ICRjb2xvci1wcmltYXJ5O1xcbiAgICB9XFxufVwiLFwiLy8gQ09MT1JTXFxuXFxuXFxuJGNvbG9yLXByaW1hcnk6ICM4YjU2MTU7XFxuXFxuLy9GT05UXFxuXFxuJGZvbnQtc2l6ZS1kZWZhdWx0OiAxLjZyZW07XCIsXCIubWFpbntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaGVhZGluZy1wcmltYXJ5e1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uaGVhZGluZy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuXCIsXCIuZGlzcGxheS1ibG9ja3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVwiLFwiLmJ0bi1jbG9zZS1wcm9qZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgfVxcbn1cIixcIi5mb3JtLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXItLWNyZWF0ZVByb2plY3R7XFxuICAgIGRpc3BsYXk6ICdibG9jayc7XFxufVxcblxcbi5mb3Jte1xcblxcbiAgICAmX19pbnB1dHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgcGFkZGluZzogMXJlbSA0cmVtO1xcbiAgICB9XFxufVwiLFwiLmZvb3RlcntcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yODMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTM3O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvb3Rlci10ZXh0LW1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ub2Rpbi1sb2dve1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICBmaWxsOiAjZmZmO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmdpdGh1Yi1jYXR7XFxuICAgIGZpbGw6ICNmZmY7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnM7XFxuICAgIGhlaWdodDogMy41cmVtO1xcblxcbiAgICAmOmhvdmVye1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgIGZpbGw6ICRjb2xvci1wcmltYXJ5O1xcblxcbiAgICB9XFxufVxcblxcbi5naXRodWItaGFuZGxle1xcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cIixcIi5zaWRlYmFye1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFxuICAgIC8vIHBhZGRpbmc6IDRyZW07XFxufVxcblxcbi5wcm9qZWN0LWxpc3R7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICZfX2l0ZW17XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDRyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxufVxcblxcbi5wcm9qZWN0LWxpc3RfX2l0ZW0uYWN0aXZle1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG59XCIsXCIuaGVyb3tcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMjUpLCByZ2JhKDAsIDAsIDAsIDAuMjUpKSwgdXJsKC9kaXN0L2Fzc2V0cy9oZXJvLmpwZyk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIzI5MzAzOCwgIzMxNDc1YSk7XFxuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi5ncmlke1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHJlbSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZyZW07XFxufVxcblxcbi50by1kby1jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDRyZW0gOHJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL0RlcGVuZGVuY2llcyBMaXN0XG5pbXBvcnQgXCIuL3Njc3MvbWFpbi5zY3NzXCI7XG5pbXBvcnQgaGVyb0ltYWdlIGZyb20gXCIuL2ltZy9oZXJvLmpwZ1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi9zcHJpdGUuc3ZnXCI7XG5cbi8vRE9NIFF1ZXJ5IFNlbGVjdG9yc1xuXG5cbmNvbnN0IGNyZWF0ZVRvRG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVRvRG9Gb3JtJyk7XG5jb25zdCBjcmVhdGVUb0RvRm9ybUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjcmVhdGVUb0RvRm9ybSAuZm9ybV9faW5wdXQnKTtcbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG5jb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG5cblxuXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKTtcbmNvbnN0IHRvRG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QnKTtcblxuY29uc3QgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJyk7XG5oZXJvLnNyYyA9IGhlcm9JbWFnZTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcHJvamVjdC1idG4nKTtcblxuY3JlYXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZihwcm9qZWN0TGlzdC5sYXN0Q2hpbGQubm9kZU5hbWUgPT09ICdGT1JNJykgcmV0dXJuO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBmb3JtSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybV9faW5wdXQnKTtcbiAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOZXcgUHJvamVjdCcpO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZChmb3JtKTtcbiAgICBmb3JtLmFwcGVuZChmb3JtSW5wdXQpO1xuICAgIGZvcm1JbnB1dC5mb2N1cygpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmKGZvcm0uY29udGFpbnMoZS50YXJnZXQpKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkIGluIGZvcm0nKVxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfSlcblxuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIWZvcm1JbnB1dC52YWx1ZSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCk7XG4gICAgICAgIGlmKHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gZm9ybUlucHV0LnZhbHVlKS5sZW5ndGggPiAwKSByZXR1cm47ICAgLy8gY2hlY2sgZm9yIGV4aXN0aW5nIHByb2plY3QgbmFtZVxuICAgICAgICBwcm9qZWN0TWFuYWdlci5jcmVhdGVQcm9qZWN0KGZvcm1JbnB1dC52YWx1ZSk7XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLmNoYW5nZUN1cnJlbnRQcm9qZWN0KHByb2plY3RNYW5hZ2VyLmdldFByb2plY3QoZm9ybUlucHV0LnZhbHVlKSk7XG4gICAgICAgIGRvbU1hbmFnZXIuc2hvd1Byb2plY3RzKCk7XG4gICAgICAgIGRvbU1hbmFnZXIuc2hvd1RvRG9zKCk7XG4gICAgICAgIGZvcm1JbnB1dC52YWx1ZSA9ICcnO1xuICAgIH0pXG59KVxuY29uc3QgdG9Eb0Zvcm1UZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0by1kby1mb3JtLXRlbXBsYXRlJyk7XG5jb25zdCBjcmVhdGVUb0RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10by1kby1idG4nKTtcblxuY3JlYXRlVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRvRG9Gb3JtVGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgY29uc29sZS5kaXIoZm9ybUVsZW1lbnQpO1xufSlcblxuXG5cblxuXG5cbmNvbnN0IFRvRG9JdGVtID0gZnVuY3Rpb24odGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkKXsgICAgICAgLy9mYWN0b3J5IGZ1bmN0aW9uc1xuICAgIHJldHVybiB7dGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkfTtcbn1cblxuY29uc3QgUHJvamVjdCA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHRvRG9MaXN0OiBbXVxuICAgIH07XG59XG5cbmNvbnN0IHByb2plY3RNYW5hZ2VyID0gKGZ1bmN0aW9uKCl7ICAgICAgICAvL21vZHVsZVxuICAgIFxuICAgIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IFByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcpO1xuICAgIHByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0O1xuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKXtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSl7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KG5hbWUpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0cygpe1xuICAgICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdChuYW1lKXtcbiAgICAgICAgaWYocHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSkpe1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IGZpbmQgcHJvamVjdCB3aXRoIG1hdGNoaW5nIG5hbWUuJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVkaXRQcm9qZWN0TmFtZShwcm9qZWN0LCBuZXdOYW1lKXtcbiAgICAgICAgcHJvamVjdC5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0VG9Eb3MgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3QudG9Eb0xpc3Q7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0N1cnJlbnRQcm9qZWN0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZUN1cnJlbnRQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVEZWZhdWx0UHJvamVjdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xuICAgICAgICByZXR1cm4gZGVmYXVsdFByb2plY3Q7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uKGRlbGV0ZWRQcm9qZWN0KXtcbiAgICAgICAgY29uc3QgaW5kZXhPZkRlbGV0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBkZWxldGVkUHJvamVjdC5uYW1lKTtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4T2ZEZWxldGVkUHJvamVjdCwgMSk7XG5cbiAgICAgICAgaWYocHJvamVjdHMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcbiAgICAgICAgICAgIGNoYW5nZUN1cnJlbnRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoYW5nZUN1cnJlbnRQcm9qZWN0KHByb2plY3RzWzBdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEN1cnJlbnRQcm9qZWN0LFxuICAgICAgICBjcmVhdGVQcm9qZWN0LFxuICAgICAgICBnZXRQcm9qZWN0cyxcbiAgICAgICAgZ2V0UHJvamVjdCxcbiAgICAgICAgZWRpdFByb2plY3ROYW1lLFxuICAgICAgICBnZXRQcm9qZWN0VG9Eb3MsXG4gICAgICAgIHNob3dDdXJyZW50UHJvamVjdCxcbiAgICAgICAgY2hhbmdlQ3VycmVudFByb2plY3QsXG4gICAgICAgIGRlbGV0ZVByb2plY3QsXG4gICAgICAgIGNyZWF0ZURlZmF1bHRQcm9qZWN0XG4gICAgfVxufSkoKVxuXG5cblxuY29uc3QgdG9Eb01hbmFnZXIgPSAoZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IGNyZWF0ZVRvRG8gPSBmdW5jdGlvbihwcm9qZWN0LCB0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWQ9ZmFsc2Upe1xuICAgICAgICBjb25zdCBuZXdUb0RvID0gVG9Eb0l0ZW0odGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkKTtcbiAgICAgICAgcHJvamVjdC50b0RvTGlzdC5wdXNoKG5ld1RvRG8pO1xuICAgIH0gIFxuXG4gICAgY29uc3QgZ2V0VG9EbyA9IGZ1bmN0aW9uKHByb2plY3QsIHRpdGxlKXtcbiAgICAgICAgaWYocHJvamVjdC50b0RvTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdGl0bGUpKXtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0LnRvRG9MaXN0LmZpbmQoaXRlbSA9PiBpdGVtLnRpdGxlID09PSB0aXRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IGZpbmQgVG8gRG8gSXRlbSB3aXRoIG1hdGNoaW5nIHRpdGxlJylcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZWxldGVUb0RvID0gZnVuY3Rpb24ocHJvamVjdCwgdG9Eb0l0ZW0pe1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3QudG9Eb0xpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdG9Eb0l0ZW0udGl0bGUpO1xuICAgICAgICBwcm9qZWN0LnRvRG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdFRvRG8gPSBmdW5jdGlvbihwcm9qZWN0LCB0b0RvSXRlbSwgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkKXtcbiAgICAgICAgY29uc3QgdXBkYXRlZFRvRG8gPSBUb0RvSXRlbSh0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWQpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3QudG9Eb0xpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdG9Eb0l0ZW0udGl0bGUpO1xuICAgICAgICBwcm9qZWN0LnRvRG9MaXN0LnNwbGljZShpbmRleCwgMSwgdXBkYXRlZFRvRG8pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVRvRG8sXG4gICAgICAgIGdldFRvRG8sXG4gICAgICAgIGRlbGV0ZVRvRG8sXG4gICAgICAgIGVkaXRUb0RvLFxuICAgIH1cbn0pKClcblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gRE9NIFN0dWZmIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5jb25zdCBkb21NYW5hZ2VyID0gKGZ1bmN0aW9uKCl7XG5cbiAgICBmdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0TGluaygpe1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtbGlzdF9faXRlbScpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgIHByb2plY3RMaXN0SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZihpdGVtLmlubmVyVGV4dCA9PT0gY3VycmVudFByb2plY3QubmFtZSl7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1jbG9zZS1wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYXBwZW5kKCd4Jyk7XG4gICAgICAgICAgICAgICAgaXRlbS5hcHBlbmQoY2xvc2VCdG4pO1xuXG5cbiAgICAgICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmRlbGV0ZVByb2plY3QoY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLnNob3dQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLnNob3dUb0RvcygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IFxuICAgICAgICB9KVxuXG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQcm9qZWN0cygpe1xuICAgICAgICB3aGlsZShwcm9qZWN0TGlzdC5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKTtcblxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3RfX2l0ZW0nKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0VGV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdFRleHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdF9fdGV4dC13cmFwcGVyJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdFRleHRXcmFwcGVyLmFwcGVuZChwcm9qZWN0Lm5hbWUpO1xuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZChwcm9qZWN0TGlzdFRleHRXcmFwcGVyKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RMaXN0SXRlbSk7XG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZihwcm9qZWN0ID09PSBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuY2hhbmdlQ3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgZG9tTWFuYWdlci5zaG93UHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLnNob3dUb0RvcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgKGUpPT57XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZihwcm9qZWN0TGlzdC5sYXN0Q2hpbGQubm9kZU5hbWUgPT09ICdGT1JNJykgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGZvcm1JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtX19pbnB1dCcpO1xuICAgICAgICAgICAgICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgIGZvcm1JbnB1dC52YWx1ZSA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW0ucmVwbGFjZVdpdGgoZm9ybSk7XG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoZm9ybUlucHV0KTtcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXQuZm9jdXMoKTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihmb3JtLmNvbnRhaW5zKGUudGFyZ2V0KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCBpbiBmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBsYWNlV2l0aChwcm9qZWN0TGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT57XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgICAgICBpZihwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IGZvcm1JbnB1dC52YWx1ZSkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcGxhY2VXaXRoKHByb2plY3RMaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5lZGl0UHJvamVjdE5hbWUocHJvamVjdCwgZm9ybUlucHV0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLnNob3dQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLnNob3dUb0RvcygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdExpbmsoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1RvRG9zKCl7XG4gICAgICAgIHdoaWxlKHRvRG9MaXN0LmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgdG9Eb0xpc3QuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvRG9zID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdFRvRG9zKCk7ICAgICAgICAgICAgICAgICAvLyBjb3VwbGluZyBiZXR3ZWVuIG1vZHVsZXNcbiAgICAgICAgdG9Eb3MuZm9yRWFjaCh0b0RvID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgdG9Eb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG8tZG8taXRlbScpO1xuICAgICAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kKHRvRG8udGl0bGUpO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRvRG9DaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0by1kby1pdGVtX19jaGVja2JveCcpO1xuICAgICAgICAgICAgdG9Eb0NoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuXG5cbiAgICAgICAgICAgIHRvRG9DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9Eby5jb21wbGV0ZWQgPSAhdG9Eby5jb21wbGV0ZWQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgdG9Eb0xpc3QuYXBwZW5kKHRvRG9JdGVtKTtcbiAgICAgICAgICAgIHRvRG9JdGVtLmFwcGVuZCh0b0RvQ2hlY2tib3gpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b0RvSXRlbS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpPT57XG5cbiAgICAgICAgICAgICAgICBpZighdG9Eb0l0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nIHx8IHRvRG9JdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc05hbWUgPT09ICd0by1kby1pdGVtJyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9Qb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb1BvcHVwLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLXBvcHVwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9Eb1BvcHVwRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9Qb3B1cER1ZURhdGUuY2xhc3NMaXN0LmFkZCgndG8tZG8tcG9wdXBfX2R1ZS1kYXRlJywgJ2Rpc3BsYXktYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb1BvcHVwRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB0b0RvUG9wdXBEdWVEYXRlLnZhbHVlID0gKHRvRG8uZHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9Qb3B1cER1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG8uZHVlRGF0ZSA9IHRvRG9Qb3B1cER1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9Eb1BvcHVwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgICAgICAgICB0b0RvUG9wdXBEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0by1kby1wb3B1cF9fZGVzY3JpcHRpb24nLCAnZGlzcGxheS1ibG9jaycpO1xuICAgICAgICAgICAgICAgICAgICB0b0RvUG9wdXBEZXNjcmlwdGlvbi5hcHBlbmQodG9Eby5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9Qb3B1cERlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RvLmRlc2NyaXB0aW9uID0gdG9Eb1BvcHVwRGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9Eb1BvcHVwUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9Qb3B1cFByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgndG8tZG8tcG9wdXBfX2xhYmVsJywgJ2Rpc3BsYXktYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb1BvcHVwUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b0RvUG9wdXBQcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICB0b0RvUG9wdXBQcmlvcml0eUxhYmVsLmFwcGVuZCgnUHJpb3JpdHk6ICcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9Qb3B1cFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb1BvcHVwUHJpb3JpdHkuaWQgPSAndG9Eb1BvcHVwUHJpb3JpdHknO1xuICAgICAgICAgICAgICAgICAgICB0b0RvUG9wdXBQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0by1kby1wb3B1cF9fcHJpb3JpdHknLCAnZGlzcGxheS1ibG9jaycpO1xuICAgICAgICAgICAgICAgICAgICB0b0RvUG9wdXBQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb1BvcHVwUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdtaW4nLCAnMScpO1xuICAgICAgICAgICAgICAgICAgICB0b0RvUG9wdXBQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ21heCcsICczJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9Qb3B1cFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnc3RlcCcsICcxJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9Qb3B1cFByaW9yaXR5LnZhbHVlID0gdG9Eby5wcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb1BvcHVwUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG8ucHJpb3JpdHkgPSB0b0RvUG9wdXBQcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCd0by1kby1wb3B1cF9fY2xvc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdG4uYXBwZW5kKCd4Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9NYW5hZ2VyLmRlbGV0ZVRvRG8oY3VycmVudFByb2plY3QsIHRvRG9NYW5hZ2VyLmdldFRvRG8oY3VycmVudFByb2plY3QsIHRvRG8udGl0bGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIuc2hvd1RvRG9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kKGNsb3NlQnRuKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRvRG9JdGVtLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCB0b0RvUG9wdXApO1xuICAgICAgICAgICAgICAgICAgICB0b0RvUG9wdXAuYXBwZW5kKHRvRG9Qb3B1cER1ZURhdGUsIHRvRG9Qb3B1cERlc2NyaXB0aW9uLCB0b0RvUG9wdXBQcmlvcml0eUxhYmVsLCB0b0RvUG9wdXBQcmlvcml0eSk7XG5cblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0b0RvSXRlbS5uZXh0RWxlbWVudFNpYmxpbmcgJiYgdG9Eb0l0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTmFtZSA9PT0gJ3RvLWRvLXBvcHVwJyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRFbGVtZW50ID0gdG9Eb0l0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBuZXh0RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0l0ZW0ubGFzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgXG4gICAgcmV0dXJue1xuICAgICAgICBzaG93UHJvamVjdHMsXG4gICAgICAgIHNob3dUb0Rvc1xuICAgIH1cbn0pKClcblxuXG5cbmRvbU1hbmFnZXIuc2hvd1Byb2plY3RzKCk7XG4vLyBkb21NYW5hZ2VyLnNob3dUb0RvcygpO1xuIFxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBFdmVudCBIYW5kbGVycyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmNyZWF0ZVRvRG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRpdGxlSW5wdXQudmFsdWUpIHJldHVybjtcblxuICAgIHRvRG9NYW5hZ2VyLmNyZWF0ZVRvRG8oXG4gICAgICAgIHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCksIFxuICAgICAgICB0aXRsZUlucHV0LnZhbHVlLFxuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUsIFxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBcbiAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSxcbiAgICApO1xuICAgIFxuICAgIGRvbU1hbmFnZXIuc2hvd1RvRG9zKCk7XG5cbiAgICBjcmVhdGVUb0RvRm9ybUlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9KVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=