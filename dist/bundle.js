/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/scripts/imgIndex.js":
/*!****************************************!*\
  !*** ./src/assets/scripts/imgIndex.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addIcon: () => (/* binding */ addIcon),
/* harmony export */   completeIcon: () => (/* binding */ completeIcon),
/* harmony export */   hashtagIcon: () => (/* binding */ hashtagIcon),
/* harmony export */   menuIcon: () => (/* binding */ menuIcon),
/* harmony export */   priorityIcon: () => (/* binding */ priorityIcon),
/* harmony export */   projectIcon: () => (/* binding */ projectIcon),
/* harmony export */   todayIcon: () => (/* binding */ todayIcon)
/* harmony export */ });
var completeIcon = __webpack_require__(/*! ../imgs/complete-icon.svg */ "./src/assets/imgs/complete-icon.svg");
var menuIcon = __webpack_require__(/*! ../imgs/menu-icon.svg */ "./src/assets/imgs/menu-icon.svg");
var priorityIcon = __webpack_require__(/*! ../imgs/priority-icon.svg */ "./src/assets/imgs/priority-icon.svg");
var hashtagIcon = __webpack_require__(/*! ../imgs/project-hashtags.svg */ "./src/assets/imgs/project-hashtags.svg");
var projectIcon = __webpack_require__(/*! ../imgs/project-icon.svg */ "./src/assets/imgs/project-icon.svg");
var todayIcon = __webpack_require__(/*! ../imgs/today-icon.svg */ "./src/assets/imgs/today-icon.svg");
var addIcon = __webpack_require__(/*! ../imgs/add-icon.svg */ "./src/assets/imgs/add-icon.svg");
var DOMCompleteIcon = document.querySelector('img[alt="complete-icon"]');
var DOMMenuIcon = document.querySelector('img[alt="menu-icon"]');
var DOMPriorityIcon = document.querySelector('img[alt="priority-icon"]');
var DOMProjectIcon = document.querySelector('img[alt="project-icon"]');
var DOMTodayIcon = document.querySelector('img[alt="today-icon"]');
var DOMAddItem = document.querySelector('#add-content-item');
DOMCompleteIcon.setAttribute('src', completeIcon);
DOMMenuIcon.setAttribute('src', menuIcon);
DOMPriorityIcon.setAttribute('src', priorityIcon);
DOMProjectIcon.setAttribute('src', projectIcon);
DOMTodayIcon.setAttribute('src', todayIcon);
DOMAddItem.setAttribute('src', addIcon);

/***/ }),

/***/ "./src/assets/scripts/itemList.js":
/*!****************************************!*\
  !*** ./src/assets/scripts/itemList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createItem: () => (/* binding */ createItem)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/assets/scripts/project.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Create a modal which takes input from users
var ListItem = /*#__PURE__*/_createClass(function ListItem(title, description, dueDate, priority) {
  _classCallCheck(this, ListItem);
  this._title = title;
  this._description = description;
  this._dueDate = dueDate;
  this._priority = priority;
}); // Once clicked submit, modal will use data into this args 
function createItem(title, description, dueDate, priority) {
  var toDoItem = new ListItem(title, description, dueDate, priority);
  _project__WEBPACK_IMPORTED_MODULE_0__.activeProject.toDoList.push(toDoItem);
}


/***/ }),

/***/ "./src/assets/scripts/project.js":
/*!***************************************!*\
  !*** ./src/assets/scripts/project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeProject: () => (/* binding */ activeProject),
/* harmony export */   clickActiveProject: () => (/* binding */ clickActiveProject),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   projectArr: () => (/* binding */ projectArr),
/* harmony export */   removeProject: () => (/* binding */ removeProject)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var projectArr = [];
var activeProject;
var Project = /*#__PURE__*/function () {
  function Project() {
    _classCallCheck(this, Project);
    this._title;
    this._toDoList = [];
  }
  _createClass(Project, [{
    key: "title",
    get: function get() {
      return this._title;
    },
    set: function set(data) {
      this._title = data;
    }
  }, {
    key: "toDoList",
    get: function get() {
      return this._toDoList;
    }
  }]);
  return Project;
}(); // Event when clicked it will create a new project
function createProject(data) {
  if (typeof data !== 'string') {
    return console.log('title not a string');
  } else {
    var obj = new Project();
    obj.title = data;
    projectArr.push(obj);
  }
}

// Event when clicked it will remove that specified index.
function removeProject(IndexClicked) {
  projectArr.splice(IndexClicked, 1);
}

// Event when an object is clicked.
function clickActiveProject(projectIndex) {
  var projectArrIndex = projectArr[projectIndex];
  console.log("Project set to ".concat(projectArrIndex.title));
  return activeProject = projectArrIndex;
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font: inherit;
}

img, picture, svg, video{
    display: block;
    max-width: 100%;
}

body{
    display: grid;
    min-height: 100vh;
    /* this will change in media query */
    grid-template-rows: 5fr 1fr;
    grid-template-columns: 1fr;
}

#nav-container {
    border: 1px dashed black;
    background-color: #5A86AD;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}


#nav-list {
    display: flex;
    border: 1px dashed blue;
    justify-content: center;
    list-style: none;
    width: 100%;
    gap: 2rem;
    padding-top: 2rem;
}


.icon-title {
    display: none;
}


#main-container {
    background-color: #FFFFB0;
    width: 85%;
    margin: 1rem auto;
    border-radius: 2rem;
    border: 1px dashed black;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    padding: 5%;
}

#hero-header-container {
    display: flex;
    border-bottom: 2px solid black;
    margin-bottom: 2rem;
}

#to-do-list-title{
    font-size: 2rem;
}

#content-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#content-container .content-item{
    display: flex;
    gap: 1rem;
}

.add-button-wrapper {
    border: none;
    background-color: #FFFFB0;
    margin-left: auto;
}

.icons {
    width: 2rem;
}


@media all and (min-width: 600px){
    body{
        /* this will change in media query */
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 9fr;
    }

    #nav-container {
        display: grid;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        width: 100%;
        grid-template-rows: 2fr 1fr;
    }

    #nav-list {
        display: flex;
        width: 5rem;
        align-items: center;
        justify-content:flex-start;
        flex-direction: column;
        border: 1px dashed blue;
        list-style: none;
        padding-top: 2rem;
    }

    .nav-link {
       display: flex; 
       align-items: center;
       text-decoration: none;
    }

    .nav-link img{
        margin: 0;
    }

    .icon-title {
        display: none;
        margin-left: 1rem;
    }

    #nav-container:hover{
        width: 12rem;
    }

    #nav-container:hover .icon-title {
        display: block;
    }


    #user-buttons {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    #main-container {
        background-color: #FFFFB0;
        width: 85%;
        margin: 1rem auto;
        border-radius: 2rem;
        border: 1px dashed black;
        grid-column: 2/3;
    }
    .icons {
        width: 2rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,oCAAoC;IACpC,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;IACI,wBAAwB;IACxB,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,gBAAgB;IAChB,WAAW;IACX,SAAS;IACT,iBAAiB;AACrB;;;AAGA;IACI,aAAa;AACjB;;;AAGA;IACI,yBAAyB;IACzB,UAAU;IACV,iBAAiB;IACjB,mBAAmB;IACnB,wBAAwB;IACxB,kBAAkB;IAClB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;;AAGA;IACI;QACI,oCAAoC;QACpC,uBAAuB;QACvB,8BAA8B;IAClC;;IAEA;QACI,aAAa;QACb,kBAAkB;QAClB,eAAe;QACf,WAAW;QACX,2BAA2B;IAC/B;;IAEA;QACI,aAAa;QACb,WAAW;QACX,mBAAmB;QACnB,0BAA0B;QAC1B,sBAAsB;QACtB,uBAAuB;QACvB,gBAAgB;QAChB,iBAAiB;IACrB;;IAEA;OACG,aAAa;OACb,mBAAmB;OACnB,qBAAqB;IACxB;;IAEA;QACI,SAAS;IACb;;IAEA;QACI,aAAa;QACb,iBAAiB;IACrB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,cAAc;IAClB;;;IAGA;QACI,aAAa;QACb,sBAAsB;QACtB,SAAS;IACb;IACA;QACI,yBAAyB;QACzB,UAAU;QACV,iBAAiB;QACjB,mBAAmB;QACnB,wBAAwB;QACxB,gBAAgB;IACpB;IACA;QACI,WAAW;IACf;AACJ","sourcesContent":["*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font: inherit;\n}\n\nimg, picture, svg, video{\n    display: block;\n    max-width: 100%;\n}\n\nbody{\n    display: grid;\n    min-height: 100vh;\n    /* this will change in media query */\n    grid-template-rows: 5fr 1fr;\n    grid-template-columns: 1fr;\n}\n\n#nav-container {\n    border: 1px dashed black;\n    background-color: #5A86AD;\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n\n#nav-list {\n    display: flex;\n    border: 1px dashed blue;\n    justify-content: center;\n    list-style: none;\n    width: 100%;\n    gap: 2rem;\n    padding-top: 2rem;\n}\n\n\n.icon-title {\n    display: none;\n}\n\n\n#main-container {\n    background-color: #FFFFB0;\n    width: 85%;\n    margin: 1rem auto;\n    border-radius: 2rem;\n    border: 1px dashed black;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    padding: 5%;\n}\n\n#hero-header-container {\n    display: flex;\n    border-bottom: 2px solid black;\n    margin-bottom: 2rem;\n}\n\n#to-do-list-title{\n    font-size: 2rem;\n}\n\n#content-container{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n#content-container .content-item{\n    display: flex;\n    gap: 1rem;\n}\n\n.add-button-wrapper {\n    border: none;\n    background-color: #FFFFB0;\n    margin-left: auto;\n}\n\n.icons {\n    width: 2rem;\n}\n\n\n@media all and (min-width: 600px){\n    body{\n        /* this will change in media query */\n        grid-template-rows: 1fr;\n        grid-template-columns: 1fr 9fr;\n    }\n\n    #nav-container {\n        display: grid;\n        grid-column: 1 / 2;\n        grid-row: 1 / 2;\n        width: 100%;\n        grid-template-rows: 2fr 1fr;\n    }\n\n    #nav-list {\n        display: flex;\n        width: 5rem;\n        align-items: center;\n        justify-content:flex-start;\n        flex-direction: column;\n        border: 1px dashed blue;\n        list-style: none;\n        padding-top: 2rem;\n    }\n\n    .nav-link {\n       display: flex; \n       align-items: center;\n       text-decoration: none;\n    }\n\n    .nav-link img{\n        margin: 0;\n    }\n\n    .icon-title {\n        display: none;\n        margin-left: 1rem;\n    }\n\n    #nav-container:hover{\n        width: 12rem;\n    }\n\n    #nav-container:hover .icon-title {\n        display: block;\n    }\n\n\n    #user-buttons {\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n    }\n    #main-container {\n        background-color: #FFFFB0;\n        width: 85%;\n        margin: 1rem auto;\n        border-radius: 2rem;\n        border: 1px dashed black;\n        grid-column: 2/3;\n    }\n    .icons {\n        width: 2rem;\n    }\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/assets/imgs/add-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/imgs/add-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "add-icon.svg";

/***/ }),

/***/ "./src/assets/imgs/complete-icon.svg":
/*!*******************************************!*\
  !*** ./src/assets/imgs/complete-icon.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "complete-icon.svg";

/***/ }),

/***/ "./src/assets/imgs/menu-icon.svg":
/*!***************************************!*\
  !*** ./src/assets/imgs/menu-icon.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu-icon.svg";

/***/ }),

/***/ "./src/assets/imgs/priority-icon.svg":
/*!*******************************************!*\
  !*** ./src/assets/imgs/priority-icon.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "priority-icon.svg";

/***/ }),

/***/ "./src/assets/imgs/project-hashtags.svg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/project-hashtags.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "project-hashtags.svg";

/***/ }),

/***/ "./src/assets/imgs/project-icon.svg":
/*!******************************************!*\
  !*** ./src/assets/imgs/project-icon.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "project-icon.svg";

/***/ }),

/***/ "./src/assets/imgs/today-icon.svg":
/*!****************************************!*\
  !*** ./src/assets/imgs/today-icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "today-icon.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/* harmony import */ var _assets_scripts_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scripts/project */ "./src/assets/scripts/project.js");
/* harmony import */ var _assets_scripts_itemList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scripts/itemList */ "./src/assets/scripts/itemList.js");
/* harmony import */ var _assets_scripts_imgIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/scripts/imgIndex */ "./src/assets/scripts/imgIndex.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(0,_assets_scripts_project__WEBPACK_IMPORTED_MODULE_0__.createProject)('default project');
(0,_assets_scripts_project__WEBPACK_IMPORTED_MODULE_0__.clickActiveProject)(0);
console.log(_assets_scripts_project__WEBPACK_IMPORTED_MODULE_0__.activeProject);
(0,_assets_scripts_itemList__WEBPACK_IMPORTED_MODULE_1__.createItem)('first task', 'some task on default project', 'tomorrow', 'false');
console.log(_assets_scripts_project__WEBPACK_IMPORTED_MODULE_0__.activeProject);
(0,_assets_scripts_project__WEBPACK_IMPORTED_MODULE_0__.createProject)('second project');
(0,_assets_scripts_project__WEBPACK_IMPORTED_MODULE_0__.createProject)('third project');
(0,_assets_scripts_project__WEBPACK_IMPORTED_MODULE_0__.clickActiveProject)(2);
console.log(_assets_scripts_project__WEBPACK_IMPORTED_MODULE_0__.activeProject);
(0,_assets_scripts_itemList__WEBPACK_IMPORTED_MODULE_1__.createItem)('first task', 'some task on third project', 'next week', 'true');
console.log(_assets_scripts_project__WEBPACK_IMPORTED_MODULE_0__.activeProject);
(0,_assets_scripts_project__WEBPACK_IMPORTED_MODULE_0__.removeProject)(0);
console.log(_assets_scripts_project__WEBPACK_IMPORTED_MODULE_0__.projectArr);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVB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QUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXNzZXRzL3NjcmlwdHMvaW1nSW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hc3NldHMvc2NyaXB0cy9pdGVtTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Fzc2V0cy9zY3JpcHRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb21wbGV0ZUljb24gPSByZXF1aXJlKCcuLi9pbWdzL2NvbXBsZXRlLWljb24uc3ZnJyk7XG5leHBvcnQgY29uc3QgbWVudUljb24gPSByZXF1aXJlKCcuLi9pbWdzL21lbnUtaWNvbi5zdmcnKTtcbmV4cG9ydCBjb25zdCBwcmlvcml0eUljb24gPSByZXF1aXJlKCcuLi9pbWdzL3ByaW9yaXR5LWljb24uc3ZnJyk7XG5leHBvcnQgY29uc3QgaGFzaHRhZ0ljb24gPSByZXF1aXJlKCcuLi9pbWdzL3Byb2plY3QtaGFzaHRhZ3Muc3ZnJyk7XG5leHBvcnQgY29uc3QgcHJvamVjdEljb24gPSByZXF1aXJlKCcuLi9pbWdzL3Byb2plY3QtaWNvbi5zdmcnKTtcbmV4cG9ydCBjb25zdCB0b2RheUljb24gPSByZXF1aXJlKCcuLi9pbWdzL3RvZGF5LWljb24uc3ZnJyk7XG5leHBvcnQgY29uc3QgYWRkSWNvbiA9IHJlcXVpcmUoJy4uL2ltZ3MvYWRkLWljb24uc3ZnJylcblxuY29uc3QgRE9NQ29tcGxldGVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nW2FsdD1cImNvbXBsZXRlLWljb25cIl0nKTtcbmNvbnN0IERPTU1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nW2FsdD1cIm1lbnUtaWNvblwiXScpO1xuY29uc3QgRE9NUHJpb3JpdHlJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nW2FsdD1cInByaW9yaXR5LWljb25cIl0nKTtcbmNvbnN0IERPTVByb2plY3RJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nW2FsdD1cInByb2plY3QtaWNvblwiXScpO1xuY29uc3QgRE9NVG9kYXlJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nW2FsdD1cInRvZGF5LWljb25cIl0nKTtcbmNvbnN0IERPTUFkZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWNvbnRlbnQtaXRlbScpXG5cbkRPTUNvbXBsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNvbXBsZXRlSWNvbik7XG5ET01NZW51SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIG1lbnVJY29uKTtcbkRPTVByaW9yaXR5SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHByaW9yaXR5SWNvbik7XG5ET01Qcm9qZWN0SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHByb2plY3RJY29uKTtcbkRPTVRvZGF5SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRvZGF5SWNvbik7XG5ET01BZGRJdGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgYWRkSWNvbikiLCJpbXBvcnQgeyBhY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuLy8gQ3JlYXRlIGEgbW9kYWwgd2hpY2ggdGFrZXMgaW5wdXQgZnJvbSB1c2Vyc1xuXG5jbGFzcyBMaXN0SXRlbXtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KXtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufVxuXG4vLyBPbmNlIGNsaWNrZWQgc3VibWl0LCBtb2RhbCB3aWxsIHVzZSBkYXRhIGludG8gdGhpcyBhcmdzIFxuZnVuY3Rpb24gY3JlYXRlSXRlbSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGxldCB0b0RvSXRlbSA9IG5ldyBMaXN0SXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICBhY3RpdmVQcm9qZWN0LnRvRG9MaXN0LnB1c2godG9Eb0l0ZW0pO1xufVxuXG5leHBvcnQge2NyZWF0ZUl0ZW19IiwiY29uc3QgcHJvamVjdEFyciA9IFtdO1xubGV0IGFjdGl2ZVByb2plY3Q7IFxuXG5jbGFzcyBQcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuX3RpdGxlO1xuICAgICAgICB0aGlzLl90b0RvTGlzdCA9IFtdO1xuICAgIH1cbiAgICBzZXQgdGl0bGUoZGF0YSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IGRhdGE7XG4gICAgfVxuICAgIGdldCB0aXRsZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuICAgIGdldCB0b0RvTGlzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdG9Eb0xpc3Q7XG4gICAgfSBcbn1cblxuLy8gRXZlbnQgd2hlbiBjbGlja2VkIGl0IHdpbGwgY3JlYXRlIGEgbmV3IHByb2plY3RcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoZGF0YSl7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ3RpdGxlIG5vdCBhIHN0cmluZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBvYmogPSBuZXcgUHJvamVjdCgpO1xuICAgICAgICBvYmoudGl0bGUgPSBkYXRhO1xuICAgICAgICBwcm9qZWN0QXJyLnB1c2gob2JqKVxuICAgIH1cbn1cblxuLy8gRXZlbnQgd2hlbiBjbGlja2VkIGl0IHdpbGwgcmVtb3ZlIHRoYXQgc3BlY2lmaWVkIGluZGV4LlxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChJbmRleENsaWNrZWQpIHtcbiAgICBwcm9qZWN0QXJyLnNwbGljZShJbmRleENsaWNrZWQsIDEpXG59XG5cbi8vIEV2ZW50IHdoZW4gYW4gb2JqZWN0IGlzIGNsaWNrZWQuXG5mdW5jdGlvbiBjbGlja0FjdGl2ZVByb2plY3QocHJvamVjdEluZGV4KXtcbiAgICBsZXQgcHJvamVjdEFyckluZGV4ID0gcHJvamVjdEFycltwcm9qZWN0SW5kZXhdXG4gICAgY29uc29sZS5sb2coYFByb2plY3Qgc2V0IHRvICR7cHJvamVjdEFyckluZGV4LnRpdGxlfWApXG4gICAgcmV0dXJuIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0QXJySW5kZXg7XG59XG5cbmV4cG9ydCB7cHJvamVjdEFyciwgYWN0aXZlUHJvamVjdCwgY3JlYXRlUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgY2xpY2tBY3RpdmVQcm9qZWN0fSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmltZywgcGljdHVyZSwgc3ZnLCB2aWRlb3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmJvZHl7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAvKiB0aGlzIHdpbGwgY2hhbmdlIGluIG1lZGlhIHF1ZXJ5ICovXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1ZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xufVxuXG4jbmF2LWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QTg2QUQ7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cblxuXG4jbmF2LWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGJsdWU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBnYXA6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG59XG5cblxuLmljb24tdGl0bGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuI21haW4tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkIwO1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBwYWRkaW5nOiA1JTtcbn1cblxuI2hlcm8taGVhZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuI3RvLWRvLWxpc3QtdGl0bGV7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4jY29udGVudC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbn1cblxuI2NvbnRlbnQtY29udGFpbmVyIC5jb250ZW50LWl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5hZGQtYnV0dG9uLXdyYXBwZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkIwO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uaWNvbnMge1xuICAgIHdpZHRoOiAycmVtO1xufVxuXG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDYwMHB4KXtcbiAgICBib2R5e1xuICAgICAgICAvKiB0aGlzIHdpbGwgY2hhbmdlIGluIG1lZGlhIHF1ZXJ5ICovXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5ZnI7XG4gICAgfVxuXG4gICAgI25hdi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcbiAgICB9XG5cbiAgICAjbmF2LWxpc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCBibHVlO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICB9XG5cbiAgICAubmF2LWxpbmsge1xuICAgICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cblxuICAgIC5uYXYtbGluayBpbWd7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAuaWNvbi10aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIH1cblxuICAgICNuYXYtY29udGFpbmVyOmhvdmVye1xuICAgICAgICB3aWR0aDogMTJyZW07XG4gICAgfVxuXG4gICAgI25hdi1jb250YWluZXI6aG92ZXIgLmljb24tdGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cblxuICAgICN1c2VyLWJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDFyZW07XG4gICAgfVxuICAgICNtYWluLWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGQjA7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgfVxuICAgIC5pY29ucyB7XG4gICAgICAgIHdpZHRoOiAycmVtO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQywyQkFBMkI7SUFDM0IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBO0lBQ0k7UUFDSSxvQ0FBb0M7UUFDcEMsdUJBQXVCO1FBQ3ZCLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLFdBQVc7UUFDWCwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsV0FBVztRQUNYLG1CQUFtQjtRQUNuQiwwQkFBMEI7UUFDMUIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztJQUVBO09BQ0csYUFBYTtPQUNiLG1CQUFtQjtPQUNuQixxQkFBcUI7SUFDeEI7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7OztJQUdBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixTQUFTO0lBQ2I7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQix3QkFBd0I7UUFDeEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5pbWcsIHBpY3R1cmUsIHN2ZywgdmlkZW97XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAvKiB0aGlzIHdpbGwgY2hhbmdlIGluIG1lZGlhIHF1ZXJ5ICovXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcblxcbiNuYXYtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUE4NkFEO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuXFxuI25hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGJsdWU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG59XFxuXFxuXFxuLmljb24tdGl0bGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkIwO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgcGFkZGluZzogNSU7XFxufVxcblxcbiNoZXJvLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbiN0by1kby1saXN0LXRpdGxle1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNjb250ZW50LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbi13cmFwcGVyIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkIwO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmljb25zIHtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDYwMHB4KXtcXG4gICAgYm9keXtcXG4gICAgICAgIC8qIHRoaXMgd2lsbCBjaGFuZ2UgaW4gbWVkaWEgcXVlcnkgKi9cXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOWZyO1xcbiAgICB9XFxuXFxuICAgICNuYXYtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG4gICAgfVxcblxcbiAgICAjbmF2LWxpc3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiA1cmVtO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCBibHVlO1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtbGluayB7XFxuICAgICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm5hdi1saW5rIGltZ3tcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICAuaWNvbi10aXRsZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgI25hdi1jb250YWluZXI6aG92ZXJ7XFxuICAgICAgICB3aWR0aDogMTJyZW07XFxuICAgIH1cXG5cXG4gICAgI25hdi1jb250YWluZXI6aG92ZXIgLmljb24tdGl0bGUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG5cXG4gICAgI3VzZXItYnV0dG9ucyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMXJlbTtcXG4gICAgfVxcbiAgICAjbWFpbi1jb250YWluZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZCMDtcXG4gICAgICAgIHdpZHRoOiA4NSU7XFxuICAgICAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XFxuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICB9XFxuICAgIC5pY29ucyB7XFxuICAgICAgICB3aWR0aDogMnJlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge3Byb2plY3RBcnIsIHByb2plY3RJbmRleCwgY3JlYXRlUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgY2xpY2tBY3RpdmVQcm9qZWN0LCBhY3RpdmVQcm9qZWN0fSBmcm9tIFwiLi9hc3NldHMvc2NyaXB0cy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSBcIi4vYXNzZXRzL3NjcmlwdHMvaXRlbUxpc3RcIjtcbmltcG9ydCB7Y29tcGxldGVJY29uLCBtZW51SWNvbiwgcHJpb3JpdHlJY29uLCBoYXNodGFnSWNvbiwgcHJvamVjdEljb24sIHRvZGF5SWNvbiB9IGZyb20gXCIuL2Fzc2V0cy9zY3JpcHRzL2ltZ0luZGV4XCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuXG5jcmVhdGVQcm9qZWN0KCdkZWZhdWx0IHByb2plY3QnKVxuY2xpY2tBY3RpdmVQcm9qZWN0KDApO1xuY29uc29sZS5sb2coYWN0aXZlUHJvamVjdClcbmNyZWF0ZUl0ZW0oJ2ZpcnN0IHRhc2snLCAnc29tZSB0YXNrIG9uIGRlZmF1bHQgcHJvamVjdCcsICd0b21vcnJvdycsICdmYWxzZScpXG5jb25zb2xlLmxvZyhhY3RpdmVQcm9qZWN0KVxuY3JlYXRlUHJvamVjdCgnc2Vjb25kIHByb2plY3QnKVxuY3JlYXRlUHJvamVjdCgndGhpcmQgcHJvamVjdCcpXG5jbGlja0FjdGl2ZVByb2plY3QoMik7XG5jb25zb2xlLmxvZyhhY3RpdmVQcm9qZWN0KVxuY3JlYXRlSXRlbSgnZmlyc3QgdGFzaycsICdzb21lIHRhc2sgb24gdGhpcmQgcHJvamVjdCcsICduZXh0IHdlZWsnLCAndHJ1ZScpXG5jb25zb2xlLmxvZyhhY3RpdmVQcm9qZWN0KVxucmVtb3ZlUHJvamVjdCgwKVxuXG5cbmNvbnNvbGUubG9nKHByb2plY3RBcnIpXG4iXSwibmFtZXMiOlsiY29tcGxldGVJY29uIiwicmVxdWlyZSIsIm1lbnVJY29uIiwicHJpb3JpdHlJY29uIiwiaGFzaHRhZ0ljb24iLCJwcm9qZWN0SWNvbiIsInRvZGF5SWNvbiIsImFkZEljb24iLCJET01Db21wbGV0ZUljb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJET01NZW51SWNvbiIsIkRPTVByaW9yaXR5SWNvbiIsIkRPTVByb2plY3RJY29uIiwiRE9NVG9kYXlJY29uIiwiRE9NQWRkSXRlbSIsInNldEF0dHJpYnV0ZSIsImFjdGl2ZVByb2plY3QiLCJMaXN0SXRlbSIsIl9jcmVhdGVDbGFzcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJfY2xhc3NDYWxsQ2hlY2siLCJfdGl0bGUiLCJfZGVzY3JpcHRpb24iLCJfZHVlRGF0ZSIsIl9wcmlvcml0eSIsImNyZWF0ZUl0ZW0iLCJ0b0RvSXRlbSIsInRvRG9MaXN0IiwicHVzaCIsInByb2plY3RBcnIiLCJQcm9qZWN0IiwiX3RvRG9MaXN0Iiwia2V5IiwiZ2V0Iiwic2V0IiwiZGF0YSIsImNyZWF0ZVByb2plY3QiLCJjb25zb2xlIiwibG9nIiwib2JqIiwicmVtb3ZlUHJvamVjdCIsIkluZGV4Q2xpY2tlZCIsInNwbGljZSIsImNsaWNrQWN0aXZlUHJvamVjdCIsInByb2plY3RJbmRleCIsInByb2plY3RBcnJJbmRleCIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=