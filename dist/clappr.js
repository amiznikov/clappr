(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Clappr"] = factory();
	else
		root["Clappr"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/json/stringify.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/clappr-zepto/zepto.js":
/*!********************************************!*\
  !*** ./node_modules/clappr-zepto/zepto.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Zepto v1.2.0 - zepto ajax callbacks deferred event ie selector - zeptojs.com/license */


var Zepto = (function() {
  var undefined, key, $, classList, emptyArray = [], concat = emptyArray.concat, filter = emptyArray.filter, slice = emptyArray.slice,
    document = window.document,
    elementDisplay = {}, classCache = {},
    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    rootNodeRE = /^(?:body|html)$/i,
    capitalRE = /([A-Z])/g,

    // special attributes that should be get/set via method calls
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
    table = document.createElement('table'),
    tableRow = document.createElement('tr'),
    containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
    readyRE = /complete|loaded|interactive/,
    simpleSelectorRE = /^[\w-]*$/,
    class2type = {},
    toString = class2type.toString,
    zepto = {},
    camelize, uniq,
    tempParent = document.createElement('div'),
    propMap = {
      'tabindex': 'tabIndex',
      'readonly': 'readOnly',
      'for': 'htmlFor',
      'class': 'className',
      'maxlength': 'maxLength',
      'cellspacing': 'cellSpacing',
      'cellpadding': 'cellPadding',
      'rowspan': 'rowSpan',
      'colspan': 'colSpan',
      'usemap': 'useMap',
      'frameborder': 'frameBorder',
      'contenteditable': 'contentEditable'
    },
    isArray = Array.isArray ||
      function(object){ return object instanceof Array }

  zepto.matches = function(element, selector) {
    if (!selector || !element || element.nodeType !== 1) return false
    var matchesSelector = element.matches || element.webkitMatchesSelector ||
                          element.mozMatchesSelector || element.oMatchesSelector ||
                          element.matchesSelector
    if (matchesSelector) return matchesSelector.call(element, selector)
    // fall back to performing a selector:
    var match, parent = element.parentNode, temp = !parent
    if (temp) (parent = tempParent).appendChild(element)
    match = ~zepto.qsa(parent, selector).indexOf(element)
    temp && tempParent.removeChild(element)
    return match
  }

  function type(obj) {
    return obj == null ? String(obj) :
      class2type[toString.call(obj)] || "object"
  }

  function isFunction(value) { return type(value) == "function" }
  function isWindow(obj)     { return obj != null && obj == obj.window }
  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
  function isObject(obj)     { return type(obj) == "object" }
  function isPlainObject(obj) {
    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
  }

  function likeArray(obj) {
    var length = !!obj && 'length' in obj && obj.length,
      type = $.type(obj)

    return 'function' != type && !isWindow(obj) && (
      'array' == type || length === 0 ||
        (typeof length == 'number' && length > 0 && (length - 1) in obj)
    )
  }

  function compact(array) { return filter.call(array, function(item){ return item != null }) }
  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
  function dasherize(str) {
    return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
  }
  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

  function classRE(name) {
    return name in classCache ?
      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
  }

  function maybeAddPx(name, value) {
    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
  }

  function defaultDisplay(nodeName) {
    var element, display
    if (!elementDisplay[nodeName]) {
      element = document.createElement(nodeName)
      document.body.appendChild(element)
      display = getComputedStyle(element, '').getPropertyValue("display")
      element.parentNode.removeChild(element)
      display == "none" && (display = "block")
      elementDisplay[nodeName] = display
    }
    return elementDisplay[nodeName]
  }

  function children(element) {
    return 'children' in element ?
      slice.call(element.children) :
      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
  }

  function Z(dom, selector) {
    var i, len = dom ? dom.length : 0
    for (i = 0; i < len; i++) this[i] = dom[i]
    this.length = len
    this.selector = selector || ''
  }

  // `$.zepto.fragment` takes a html string and an optional tag name
  // to generate DOM nodes from the given html string.
  // The generated DOM nodes are returned as an array.
  // This function can be overridden in plugins for example to make
  // it compatible with browsers that don't support the DOM fully.
  zepto.fragment = function(html, name, properties) {
    var dom, nodes, container

    // A special case optimization for a single tag
    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

    if (!dom) {
      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
      if (!(name in containers)) name = '*'

      container = containers[name]
      container.innerHTML = '' + html
      dom = $.each(slice.call(container.childNodes), function(){
        container.removeChild(this)
      })
    }

    if (isPlainObject(properties)) {
      nodes = $(dom)
      $.each(properties, function(key, value) {
        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
        else nodes.attr(key, value)
      })
    }

    return dom
  }

  // `$.zepto.Z` swaps out the prototype of the given `dom` array
  // of nodes with `$.fn` and thus supplying all the Zepto functions
  // to the array. This method can be overridden in plugins.
  zepto.Z = function(dom, selector) {
    return new Z(dom, selector)
  }

  // `$.zepto.isZ` should return `true` if the given object is a Zepto
  // collection. This method can be overridden in plugins.
  zepto.isZ = function(object) {
    return object instanceof zepto.Z
  }

  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
  // takes a CSS selector and an optional context (and handles various
  // special cases).
  // This method can be overridden in plugins.
  zepto.init = function(selector, context) {
    var dom
    // If nothing given, return an empty Zepto collection
    if (!selector) return zepto.Z()
    // Optimize for string selectors
    else if (typeof selector == 'string') {
      selector = selector.trim()
      // If it's a html fragment, create nodes from it
      // Note: In both Chrome 21 and Firefox 15, DOM error 12
      // is thrown if the fragment doesn't begin with <
      if (selector[0] == '<' && fragmentRE.test(selector))
        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // If it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
    }
    // If a function is given, call it when the DOM is ready
    else if (isFunction(selector)) return $(document).ready(selector)
    // If a Zepto collection is given, just return it
    else if (zepto.isZ(selector)) return selector
    else {
      // normalize array if an array of nodes is given
      if (isArray(selector)) dom = compact(selector)
      // Wrap DOM nodes.
      else if (isObject(selector))
        dom = [selector], selector = null
      // If it's a html fragment, create nodes from it
      else if (fragmentRE.test(selector))
        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // And last but no least, if it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
    }
    // create a new Zepto collection from the nodes found
    return zepto.Z(dom, selector)
  }

  // `$` will be the base `Zepto` object. When calling this
  // function just call `$.zepto.init, which makes the implementation
  // details of selecting nodes and creating Zepto collections
  // patchable in plugins.
  $ = function(selector, context){
    return zepto.init(selector, context)
  }

  function extend(target, source, deep) {
    for (key in source)
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
          target[key] = {}
        if (isArray(source[key]) && !isArray(target[key]))
          target[key] = []
        extend(target[key], source[key], deep)
      }
      else if (source[key] !== undefined) target[key] = source[key]
  }

  // Copy all but undefined properties from one or more
  // objects to the `target` object.
  $.extend = function(target){
    var deep, args = slice.call(arguments, 1)
    if (typeof target == 'boolean') {
      deep = target
      target = args.shift()
    }
    args.forEach(function(arg){ extend(target, arg, deep) })
    return target
  }

  // `$.zepto.qsa` is Zepto's CSS selector implementation which
  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
  // This method can be overridden in plugins.
  zepto.qsa = function(element, selector){
    var found,
        maybeID = selector[0] == '#',
        maybeClass = !maybeID && selector[0] == '.',
        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
        isSimple = simpleSelectorRE.test(nameOnly)
    return (element.getElementById && isSimple && maybeID) ? // Safari DocumentFragment doesn't have getElementById
      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
      (element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11) ? [] :
      slice.call(
        isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName
          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
          element.getElementsByTagName(selector) : // Or a tag
          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
      )
  }

  function filtered(nodes, selector) {
    return selector == null ? $(nodes) : $(nodes).filter(selector)
  }

  $.contains = document.documentElement.contains ?
    function(parent, node) {
      return parent !== node && parent.contains(node)
    } :
    function(parent, node) {
      while (node && (node = node.parentNode))
        if (node === parent) return true
      return false
    }

  function funcArg(context, arg, idx, payload) {
    return isFunction(arg) ? arg.call(context, idx, payload) : arg
  }

  function setAttribute(node, name, value) {
    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
  }

  // access className property while respecting SVGAnimatedString
  function className(node, value){
    var klass = node.className || '',
        svg   = klass && klass.baseVal !== undefined

    if (value === undefined) return svg ? klass.baseVal : klass
    svg ? (klass.baseVal = value) : (node.className = value)
  }

  // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // "08"    => "08"
  // JSON    => parse if valid
  // String  => self
  function deserializeValue(value) {
    try {
      return value ?
        value == "true" ||
        ( value == "false" ? false :
          value == "null" ? null :
          +value + "" == value ? +value :
          /^[\[\{]/.test(value) ? $.parseJSON(value) :
          value )
        : value
    } catch(e) {
      return value
    }
  }

  $.type = type
  $.isFunction = isFunction
  $.isWindow = isWindow
  $.isArray = isArray
  $.isPlainObject = isPlainObject

  $.isEmptyObject = function(obj) {
    var name
    for (name in obj) return false
    return true
  }

  $.isNumeric = function(val) {
    var num = Number(val), type = typeof val
    return val != null && type != 'boolean' &&
      (type != 'string' || val.length) &&
      !isNaN(num) && isFinite(num) || false
  }

  $.inArray = function(elem, array, i){
    return emptyArray.indexOf.call(array, elem, i)
  }

  $.camelCase = camelize
  $.trim = function(str) {
    return str == null ? "" : String.prototype.trim.call(str)
  }

  // plugin compatibility
  $.uuid = 0
  $.support = { }
  $.expr = { }
  $.noop = function() {}

  $.map = function(elements, callback){
    var value, values = [], i, key
    if (likeArray(elements))
      for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i)
        if (value != null) values.push(value)
      }
    else
      for (key in elements) {
        value = callback(elements[key], key)
        if (value != null) values.push(value)
      }
    return flatten(values)
  }

  $.each = function(elements, callback){
    var i, key
    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++)
        if (callback.call(elements[i], i, elements[i]) === false) return elements
    } else {
      for (key in elements)
        if (callback.call(elements[key], key, elements[key]) === false) return elements
    }

    return elements
  }

  $.grep = function(elements, callback){
    return filter.call(elements, callback)
  }

  if (window.JSON) $.parseJSON = JSON.parse

  // Populate the class2type map
  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase()
  })

  // Define methods that will be available on all
  // Zepto collections
  $.fn = {
    constructor: zepto.Z,
    length: 0,

    // Because a collection acts like an array
    // copy over these useful array functions.
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    sort: emptyArray.sort,
    splice: emptyArray.splice,
    indexOf: emptyArray.indexOf,
    concat: function(){
      var i, value, args = []
      for (i = 0; i < arguments.length; i++) {
        value = arguments[i]
        args[i] = zepto.isZ(value) ? value.toArray() : value
      }
      return concat.apply(zepto.isZ(this) ? this.toArray() : this, args)
    },

    // `map` and `slice` in the jQuery API work differently
    // from their array counterparts
    map: function(fn){
      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
    },
    slice: function(){
      return $(slice.apply(this, arguments))
    },

    ready: function(callback){
      // need to check if document.body exists for IE as that browser reports
      // document ready when it hasn't yet created the body element
      if (readyRE.test(document.readyState) && document.body) callback($)
      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
      return this
    },
    get: function(idx){
      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
    },
    toArray: function(){ return this.get() },
    size: function(){
      return this.length
    },
    remove: function(){
      return this.each(function(){
        if (this.parentNode != null)
          this.parentNode.removeChild(this)
      })
    },
    each: function(callback){
      emptyArray.every.call(this, function(el, idx){
        return callback.call(el, idx, el) !== false
      })
      return this
    },
    filter: function(selector){
      if (isFunction(selector)) return this.not(this.not(selector))
      return $(filter.call(this, function(element){
        return zepto.matches(element, selector)
      }))
    },
    add: function(selector,context){
      return $(uniq(this.concat($(selector,context))))
    },
    is: function(selector){
      return this.length > 0 && zepto.matches(this[0], selector)
    },
    not: function(selector){
      var nodes=[]
      if (isFunction(selector) && selector.call !== undefined)
        this.each(function(idx){
          if (!selector.call(this,idx)) nodes.push(this)
        })
      else {
        var excludes = typeof selector == 'string' ? this.filter(selector) :
          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
        this.forEach(function(el){
          if (excludes.indexOf(el) < 0) nodes.push(el)
        })
      }
      return $(nodes)
    },
    has: function(selector){
      return this.filter(function(){
        return isObject(selector) ?
          $.contains(this, selector) :
          $(this).find(selector).size()
      })
    },
    eq: function(idx){
      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
    },
    first: function(){
      var el = this[0]
      return el && !isObject(el) ? el : $(el)
    },
    last: function(){
      var el = this[this.length - 1]
      return el && !isObject(el) ? el : $(el)
    },
    find: function(selector){
      var result, $this = this
      if (!selector) result = $()
      else if (typeof selector == 'object')
        result = $(selector).filter(function(){
          var node = this
          return emptyArray.some.call($this, function(parent){
            return $.contains(parent, node)
          })
        })
      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
      else result = this.map(function(){ return zepto.qsa(this, selector) })
      return result
    },
    closest: function(selector, context){
      var nodes = [], collection = typeof selector == 'object' && $(selector)
      this.each(function(_, node){
        while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
          node = node !== context && !isDocument(node) && node.parentNode
        if (node && nodes.indexOf(node) < 0) nodes.push(node)
      })
      return $(nodes)
    },
    parents: function(selector){
      var ancestors = [], nodes = this
      while (nodes.length > 0)
        nodes = $.map(nodes, function(node){
          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            ancestors.push(node)
            return node
          }
        })
      return filtered(ancestors, selector)
    },
    parent: function(selector){
      return filtered(uniq(this.pluck('parentNode')), selector)
    },
    children: function(selector){
      return filtered(this.map(function(){ return children(this) }), selector)
    },
    contents: function() {
      return this.map(function() { return this.contentDocument || slice.call(this.childNodes) })
    },
    siblings: function(selector){
      return filtered(this.map(function(i, el){
        return filter.call(children(el.parentNode), function(child){ return child!==el })
      }), selector)
    },
    empty: function(){
      return this.each(function(){ this.innerHTML = '' })
    },
    // `pluck` is borrowed from Prototype.js
    pluck: function(property){
      return $.map(this, function(el){ return el[property] })
    },
    show: function(){
      return this.each(function(){
        this.style.display == "none" && (this.style.display = '')
        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
          this.style.display = defaultDisplay(this.nodeName)
      })
    },
    replaceWith: function(newContent){
      return this.before(newContent).remove()
    },
    wrap: function(structure){
      var func = isFunction(structure)
      if (this[0] && !func)
        var dom   = $(structure).get(0),
            clone = dom.parentNode || this.length > 1

      return this.each(function(index){
        $(this).wrapAll(
          func ? structure.call(this, index) :
            clone ? dom.cloneNode(true) : dom
        )
      })
    },
    wrapAll: function(structure){
      if (this[0]) {
        $(this[0]).before(structure = $(structure))
        var children
        // drill down to the inmost element
        while ((children = structure.children()).length) structure = children.first()
        $(structure).append(this)
      }
      return this
    },
    wrapInner: function(structure){
      var func = isFunction(structure)
      return this.each(function(index){
        var self = $(this), contents = self.contents(),
            dom  = func ? structure.call(this, index) : structure
        contents.length ? contents.wrapAll(dom) : self.append(dom)
      })
    },
    unwrap: function(){
      this.parent().each(function(){
        $(this).replaceWith($(this).children())
      })
      return this
    },
    clone: function(){
      return this.map(function(){ return this.cloneNode(true) })
    },
    hide: function(){
      return this.css("display", "none")
    },
    toggle: function(setting){
      return this.each(function(){
        var el = $(this)
        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
      })
    },
    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
    html: function(html){
      return 0 in arguments ?
        this.each(function(idx){
          var originHtml = this.innerHTML
          $(this).empty().append( funcArg(this, html, idx, originHtml) )
        }) :
        (0 in this ? this[0].innerHTML : null)
    },
    text: function(text){
      return 0 in arguments ?
        this.each(function(idx){
          var newText = funcArg(this, text, idx, this.textContent)
          this.textContent = newText == null ? '' : ''+newText
        }) :
        (0 in this ? this.pluck('textContent').join("") : null)
    },
    attr: function(name, value){
      var result
      return (typeof name == 'string' && !(1 in arguments)) ?
        (0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined) :
        this.each(function(idx){
          if (this.nodeType !== 1) return
          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
        })
    },
    removeAttr: function(name){
      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
        setAttribute(this, attribute)
      }, this)})
    },
    prop: function(name, value){
      name = propMap[name] || name
      return (1 in arguments) ?
        this.each(function(idx){
          this[name] = funcArg(this, value, idx, this[name])
        }) :
        (this[0] && this[0][name])
    },
    removeProp: function(name){
      name = propMap[name] || name
      return this.each(function(){ delete this[name] })
    },
    data: function(name, value){
      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()

      var data = (1 in arguments) ?
        this.attr(attrName, value) :
        this.attr(attrName)

      return data !== null ? deserializeValue(data) : undefined
    },
    val: function(value){
      if (0 in arguments) {
        if (value == null) value = ""
        return this.each(function(idx){
          this.value = funcArg(this, value, idx, this.value)
        })
      } else {
        return this[0] && (this[0].multiple ?
           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
           this[0].value)
      }
    },
    offset: function(coordinates){
      if (coordinates) return this.each(function(index){
        var $this = $(this),
            coords = funcArg(this, coordinates, index, $this.offset()),
            parentOffset = $this.offsetParent().offset(),
            props = {
              top:  coords.top  - parentOffset.top,
              left: coords.left - parentOffset.left
            }

        if ($this.css('position') == 'static') props['position'] = 'relative'
        $this.css(props)
      })
      if (!this.length) return null
      if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0]))
        return {top: 0, left: 0}
      var obj = this[0].getBoundingClientRect()
      return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: Math.round(obj.width),
        height: Math.round(obj.height)
      }
    },
    css: function(property, value){
      if (arguments.length < 2) {
        var element = this[0]
        if (typeof property == 'string') {
          if (!element) return
          return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property)
        } else if (isArray(property)) {
          if (!element) return
          var props = {}
          var computedStyle = getComputedStyle(element, '')
          $.each(property, function(_, prop){
            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
          })
          return props
        }
      }

      var css = ''
      if (type(property) == 'string') {
        if (!value && value !== 0)
          this.each(function(){ this.style.removeProperty(dasherize(property)) })
        else
          css = dasherize(property) + ":" + maybeAddPx(property, value)
      } else {
        for (key in property)
          if (!property[key] && property[key] !== 0)
            this.each(function(){ this.style.removeProperty(dasherize(key)) })
          else
            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
      }

      return this.each(function(){ this.style.cssText += ';' + css })
    },
    index: function(element){
      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
    },
    hasClass: function(name){
      if (!name) return false
      return emptyArray.some.call(this, function(el){
        return this.test(className(el))
      }, classRE(name))
    },
    addClass: function(name){
      if (!name) return this
      return this.each(function(idx){
        if (!('className' in this)) return
        classList = []
        var cls = className(this), newName = funcArg(this, name, idx, cls)
        newName.split(/\s+/g).forEach(function(klass){
          if (!$(this).hasClass(klass)) classList.push(klass)
        }, this)
        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
      })
    },
    removeClass: function(name){
      return this.each(function(idx){
        if (!('className' in this)) return
        if (name === undefined) return className(this, '')
        classList = className(this)
        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
          classList = classList.replace(classRE(klass), " ")
        })
        className(this, classList.trim())
      })
    },
    toggleClass: function(name, when){
      if (!name) return this
      return this.each(function(idx){
        var $this = $(this), names = funcArg(this, name, idx, className(this))
        names.split(/\s+/g).forEach(function(klass){
          (when === undefined ? !$this.hasClass(klass) : when) ?
            $this.addClass(klass) : $this.removeClass(klass)
        })
      })
    },
    scrollTop: function(value){
      if (!this.length) return
      var hasScrollTop = 'scrollTop' in this[0]
      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
      return this.each(hasScrollTop ?
        function(){ this.scrollTop = value } :
        function(){ this.scrollTo(this.scrollX, value) })
    },
    scrollLeft: function(value){
      if (!this.length) return
      var hasScrollLeft = 'scrollLeft' in this[0]
      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
      return this.each(hasScrollLeft ?
        function(){ this.scrollLeft = value } :
        function(){ this.scrollTo(value, this.scrollY) })
    },
    position: function() {
      if (!this.length) return

      var elem = this[0],
        // Get *real* offsetParent
        offsetParent = this.offsetParent(),
        // Get correct offsets
        offset       = this.offset(),
        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

      // Subtract element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0
      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

      // Add offsetParent borders
      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

      // Subtract the two offsets
      return {
        top:  offset.top  - parentOffset.top,
        left: offset.left - parentOffset.left
      }
    },
    offsetParent: function() {
      return this.map(function(){
        var parent = this.offsetParent || document.body
        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
          parent = parent.offsetParent
        return parent
      })
    }
  }

  // for now
  $.fn.detach = $.fn.remove

  // Generate the `width` and `height` functions
  ;['width', 'height'].forEach(function(dimension){
    var dimensionProperty =
      dimension.replace(/./, function(m){ return m[0].toUpperCase() })

    $.fn[dimension] = function(value){
      var offset, el = this[0]
      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
        (offset = this.offset()) && offset[dimension]
      else return this.each(function(idx){
        el = $(this)
        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
      })
    }
  })

  function traverseNode(node, fun) {
    fun(node)
    for (var i = 0, len = node.childNodes.length; i < len; i++)
      traverseNode(node.childNodes[i], fun)
  }

  // Generate the `after`, `prepend`, `before`, `append`,
  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
  adjacencyOperators.forEach(function(operator, operatorIndex) {
    var inside = operatorIndex % 2 //=> prepend, append

    $.fn[operator] = function(){
      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
      var argType, nodes = $.map(arguments, function(arg) {
            var arr = []
            argType = type(arg)
            if (argType == "array") {
              arg.forEach(function(el) {
                if (el.nodeType !== undefined) return arr.push(el)
                else if ($.zepto.isZ(el)) return arr = arr.concat(el.get())
                arr = arr.concat(zepto.fragment(el))
              })
              return arr
            }
            return argType == "object" || arg == null ?
              arg : zepto.fragment(arg)
          }),
          parent, copyByClone = this.length > 1
      if (nodes.length < 1) return this

      return this.each(function(_, target){
        parent = inside ? target : target.parentNode

        // convert all methods to a "before" operation
        target = operatorIndex == 0 ? target.nextSibling :
                 operatorIndex == 1 ? target.firstChild :
                 operatorIndex == 2 ? target :
                 null

        var parentInDocument = $.contains(document.documentElement, parent)

        nodes.forEach(function(node){
          if (copyByClone) node = node.cloneNode(true)
          else if (!parent) return $(node).remove()

          parent.insertBefore(node, target)
          if (parentInDocument) traverseNode(node, function(el){
            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
               (!el.type || el.type === 'text/javascript') && !el.src){
              var target = el.ownerDocument ? el.ownerDocument.defaultView : window
              target['eval'].call(target, el.innerHTML)
            }
          })
        })
      })
    }

    // after    => insertAfter
    // prepend  => prependTo
    // before   => insertBefore
    // append   => appendTo
    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
      $(html)[operator](this)
      return this
    }
  })

  zepto.Z.prototype = Z.prototype = $.fn

  // Export internal API functions in the `$.zepto` namespace
  zepto.uniq = uniq
  zepto.deserializeValue = deserializeValue
  $.zepto = zepto

  return $
})()

window.Zepto = Zepto
window.$ === undefined && (window.$ = Zepto)

;(function($){
  var jsonpID = +new Date(),
      document = window.document,
      key,
      name,
      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      scriptTypeRE = /^(?:text|application)\/javascript/i,
      xmlTypeRE = /^(?:text|application)\/xml/i,
      jsonType = 'application/json',
      htmlType = 'text/html',
      blankRE = /^\s*$/,
      originAnchor = document.createElement('a')

  originAnchor.href = window.location.href

  // trigger a custom event and return false if it was cancelled
  function triggerAndReturn(context, eventName, data) {
    var event = $.Event(eventName)
    $(context).trigger(event, data)
    return !event.isDefaultPrevented()
  }

  // trigger an Ajax "global" event
  function triggerGlobal(settings, context, eventName, data) {
    if (settings.global) return triggerAndReturn(context || document, eventName, data)
  }

  // Number of active Ajax requests
  $.active = 0

  function ajaxStart(settings) {
    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
  }
  function ajaxStop(settings) {
    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
  }

  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
  function ajaxBeforeSend(xhr, settings) {
    var context = settings.context
    if (settings.beforeSend.call(context, xhr, settings) === false ||
        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
      return false

    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
  }
  function ajaxSuccess(data, xhr, settings, deferred) {
    var context = settings.context, status = 'success'
    settings.success.call(context, data, status, xhr)
    if (deferred) deferred.resolveWith(context, [data, status, xhr])
    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
    ajaxComplete(status, xhr, settings)
  }
  // type: "timeout", "error", "abort", "parsererror"
  function ajaxError(error, type, xhr, settings, deferred) {
    var context = settings.context
    settings.error.call(context, xhr, type, error)
    if (deferred) deferred.rejectWith(context, [xhr, type, error])
    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
    ajaxComplete(type, xhr, settings)
  }
  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
  function ajaxComplete(status, xhr, settings) {
    var context = settings.context
    settings.complete.call(context, xhr, status)
    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
    ajaxStop(settings)
  }

  function ajaxDataFilter(data, type, settings) {
    if (settings.dataFilter == empty) return data
    var context = settings.context
    return settings.dataFilter.call(context, data, type)
  }

  // Empty function, used as default callback
  function empty() {}

  $.ajaxJSONP = function(options, deferred){
    if (!('type' in options)) return $.ajax(options)

    var _callbackName = options.jsonpCallback,
      callbackName = ($.isFunction(_callbackName) ?
        _callbackName() : _callbackName) || ('Zepto' + (jsonpID++)),
      script = document.createElement('script'),
      originalCallback = window[callbackName],
      responseData,
      abort = function(errorType) {
        $(script).triggerHandler('error', errorType || 'abort')
      },
      xhr = { abort: abort }, abortTimeout

    if (deferred) deferred.promise(xhr)

    $(script).on('load error', function(e, errorType){
      clearTimeout(abortTimeout)
      $(script).off().remove()

      if (e.type == 'error' || !responseData) {
        ajaxError(null, errorType || 'error', xhr, options, deferred)
      } else {
        ajaxSuccess(responseData[0], xhr, options, deferred)
      }

      window[callbackName] = originalCallback
      if (responseData && $.isFunction(originalCallback))
        originalCallback(responseData[0])

      originalCallback = responseData = undefined
    })

    if (ajaxBeforeSend(xhr, options) === false) {
      abort('abort')
      return xhr
    }

    window[callbackName] = function(){
      responseData = arguments
    }

    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
    document.head.appendChild(script)

    if (options.timeout > 0) abortTimeout = setTimeout(function(){
      abort('timeout')
    }, options.timeout)

    return xhr
  }

  $.ajaxSettings = {
    // Default type of request
    type: 'GET',
    // Callback that is executed before request
    beforeSend: empty,
    // Callback that is executed if the request succeeds
    success: empty,
    // Callback that is executed the the server drops error
    error: empty,
    // Callback that is executed on request complete (both: error and success)
    complete: empty,
    // The context for the callbacks
    context: null,
    // Whether to trigger "global" Ajax events
    global: true,
    // Transport
    xhr: function () {
      return new window.XMLHttpRequest()
    },
    // MIME types mapping
    // IIS returns Javascript as "application/x-javascript"
    accepts: {
      script: 'text/javascript, application/javascript, application/x-javascript',
      json:   jsonType,
      xml:    'application/xml, text/xml',
      html:   htmlType,
      text:   'text/plain'
    },
    // Whether the request is to another domain
    crossDomain: false,
    // Default timeout
    timeout: 0,
    // Whether data should be serialized to string
    processData: true,
    // Whether the browser should be allowed to cache GET responses
    cache: true,
    //Used to handle the raw response data of XMLHttpRequest.
    //This is a pre-filtering function to sanitize the response.
    //The sanitized response should be returned
    dataFilter: empty
  }

  function mimeToDataType(mime) {
    if (mime) mime = mime.split(';', 2)[0]
    return mime && ( mime == htmlType ? 'html' :
      mime == jsonType ? 'json' :
      scriptTypeRE.test(mime) ? 'script' :
      xmlTypeRE.test(mime) && 'xml' ) || 'text'
  }

  function appendQuery(url, query) {
    if (query == '') return url
    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
  }

  // serialize payload and append it to the URL for GET requests
  function serializeData(options) {
    if (options.processData && options.data && $.type(options.data) != "string")
      options.data = $.param(options.data, options.traditional)
    if (options.data && (!options.type || options.type.toUpperCase() == 'GET' || 'jsonp' == options.dataType))
      options.url = appendQuery(options.url, options.data), options.data = undefined
  }

  $.ajax = function(options){
    var settings = $.extend({}, options || {}),
        deferred = $.Deferred && $.Deferred(),
        urlAnchor, hashIndex
    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

    ajaxStart(settings)

    if (!settings.crossDomain) {
      urlAnchor = document.createElement('a')
      urlAnchor.href = settings.url
      // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049
      urlAnchor.href = urlAnchor.href
      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
    }

    if (!settings.url) settings.url = window.location.toString()
    if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex)
    serializeData(settings)

    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
    if (hasPlaceholder) dataType = 'jsonp'

    if (settings.cache === false || (
         (!options || options.cache !== true) &&
         ('script' == dataType || 'jsonp' == dataType)
        ))
      settings.url = appendQuery(settings.url, '_=' + Date.now())

    if ('jsonp' == dataType) {
      if (!hasPlaceholder)
        settings.url = appendQuery(settings.url,
          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
      return $.ajaxJSONP(settings, deferred)
    }

    var mime = settings.accepts[dataType],
        headers = { },
        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
        xhr = settings.xhr(),
        nativeSetHeader = xhr.setRequestHeader,
        abortTimeout

    if (deferred) deferred.promise(xhr)

    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
    setHeader('Accept', mime || '*/*')
    if (mime = settings.mimeType || mime) {
      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
      xhr.overrideMimeType && xhr.overrideMimeType(mime)
    }
    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')

    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
    xhr.setRequestHeader = setHeader

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        xhr.onreadystatechange = empty
        clearTimeout(abortTimeout)
        var result, error = false
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))

          if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob')
            result = xhr.response
          else {
            result = xhr.responseText

            try {
              // http://perfectionkills.com/global-eval-what-are-the-options/
              // sanitize response accordingly if data filter callback provided
              result = ajaxDataFilter(result, dataType, settings)
              if (dataType == 'script')    (1,eval)(result)
              else if (dataType == 'xml')  result = xhr.responseXML
              else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
            } catch (e) { error = e }

            if (error) return ajaxError(error, 'parsererror', xhr, settings, deferred)
          }

          ajaxSuccess(result, xhr, settings, deferred)
        } else {
          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
        }
      }
    }

    if (ajaxBeforeSend(xhr, settings) === false) {
      xhr.abort()
      ajaxError(null, 'abort', xhr, settings, deferred)
      return xhr
    }

    var async = 'async' in settings ? settings.async : true
    xhr.open(settings.type, settings.url, async, settings.username, settings.password)

    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]

    for (name in headers) nativeSetHeader.apply(xhr, headers[name])

    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
        xhr.onreadystatechange = empty
        xhr.abort()
        ajaxError(null, 'timeout', xhr, settings, deferred)
      }, settings.timeout)

    // avoid sending empty string (#319)
    xhr.send(settings.data ? settings.data : null)
    return xhr
  }

  // handle optional data/success arguments
  function parseArguments(url, data, success, dataType) {
    if ($.isFunction(data)) dataType = success, success = data, data = undefined
    if (!$.isFunction(success)) dataType = success, success = undefined
    return {
      url: url
    , data: data
    , success: success
    , dataType: dataType
    }
  }

  $.get = function(/* url, data, success, dataType */){
    return $.ajax(parseArguments.apply(null, arguments))
  }

  $.post = function(/* url, data, success, dataType */){
    var options = parseArguments.apply(null, arguments)
    options.type = 'POST'
    return $.ajax(options)
  }

  $.getJSON = function(/* url, data, success */){
    var options = parseArguments.apply(null, arguments)
    options.dataType = 'json'
    return $.ajax(options)
  }

  $.fn.load = function(url, data, success){
    if (!this.length) return this
    var self = this, parts = url.split(/\s/), selector,
        options = parseArguments(url, data, success),
        callback = options.success
    if (parts.length > 1) options.url = parts[0], selector = parts[1]
    options.success = function(response){
      self.html(selector ?
        $('<div>').html(response.replace(rscript, "")).find(selector)
        : response)
      callback && callback.apply(self, arguments)
    }
    $.ajax(options)
    return this
  }

  var escape = encodeURIComponent

  function serialize(params, obj, traditional, scope){
    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
    $.each(obj, function(key, value) {
      type = $.type(value)
      if (scope) key = traditional ? scope :
        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
      // handle data in serializeArray() format
      if (!scope && array) params.add(value.name, value.value)
      // recurse into nested objects
      else if (type == "array" || (!traditional && type == "object"))
        serialize(params, value, traditional, key)
      else params.add(key, value)
    })
  }

  $.param = function(obj, traditional){
    var params = []
    params.add = function(key, value) {
      if ($.isFunction(value)) value = value()
      if (value == null) value = ""
      this.push(escape(key) + '=' + escape(value))
    }
    serialize(params, obj, traditional)
    return params.join('&').replace(/%20/g, '+')
  }
})(Zepto)

;(function($){
  // Create a collection of callbacks to be fired in a sequence, with configurable behaviour
  // Option flags:
  //   - once: Callbacks fired at most one time.
  //   - memory: Remember the most recent context and arguments
  //   - stopOnFalse: Cease iterating over callback list
  //   - unique: Permit adding at most one instance of the same callback
  $.Callbacks = function(options) {
    options = $.extend({}, options)

    var memory, // Last fire value (for non-forgettable lists)
        fired,  // Flag to know if list was already fired
        firing, // Flag to know if list is currently firing
        firingStart, // First callback to fire (used internally by add and fireWith)
        firingLength, // End of the loop when firing
        firingIndex, // Index of currently firing callback (modified by remove if needed)
        list = [], // Actual callback list
        stack = !options.once && [], // Stack of fire calls for repeatable lists
        fire = function(data) {
          memory = options.memory && data
          fired = true
          firingIndex = firingStart || 0
          firingStart = 0
          firingLength = list.length
          firing = true
          for ( ; list && firingIndex < firingLength ; ++firingIndex ) {
            if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
              memory = false
              break
            }
          }
          firing = false
          if (list) {
            if (stack) stack.length && fire(stack.shift())
            else if (memory) list.length = 0
            else Callbacks.disable()
          }
        },

        Callbacks = {
          add: function() {
            if (list) {
              var start = list.length,
                  add = function(args) {
                    $.each(args, function(_, arg){
                      if (typeof arg === "function") {
                        if (!options.unique || !Callbacks.has(arg)) list.push(arg)
                      }
                      else if (arg && arg.length && typeof arg !== 'string') add(arg)
                    })
                  }
              add(arguments)
              if (firing) firingLength = list.length
              else if (memory) {
                firingStart = start
                fire(memory)
              }
            }
            return this
          },
          remove: function() {
            if (list) {
              $.each(arguments, function(_, arg){
                var index
                while ((index = $.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1)
                  // Handle firing indexes
                  if (firing) {
                    if (index <= firingLength) --firingLength
                    if (index <= firingIndex) --firingIndex
                  }
                }
              })
            }
            return this
          },
          has: function(fn) {
            return !!(list && (fn ? $.inArray(fn, list) > -1 : list.length))
          },
          empty: function() {
            firingLength = list.length = 0
            return this
          },
          disable: function() {
            list = stack = memory = undefined
            return this
          },
          disabled: function() {
            return !list
          },
          lock: function() {
            stack = undefined
            if (!memory) Callbacks.disable()
            return this
          },
          locked: function() {
            return !stack
          },
          fireWith: function(context, args) {
            if (list && (!fired || stack)) {
              args = args || []
              args = [context, args.slice ? args.slice() : args]
              if (firing) stack.push(args)
              else fire(args)
            }
            return this
          },
          fire: function() {
            return Callbacks.fireWith(this, arguments)
          },
          fired: function() {
            return !!fired
          }
        }

    return Callbacks
  }
})(Zepto)

;(function($){
  var slice = Array.prototype.slice

  function Deferred(func) {
    var tuples = [
          // action, add listener, listener list, final state
          [ "resolve", "done", $.Callbacks({once:1, memory:1}), "resolved" ],
          [ "reject", "fail", $.Callbacks({once:1, memory:1}), "rejected" ],
          [ "notify", "progress", $.Callbacks({memory:1}) ]
        ],
        state = "pending",
        promise = {
          state: function() {
            return state
          },
          always: function() {
            deferred.done(arguments).fail(arguments)
            return this
          },
          then: function(/* fnDone [, fnFailed [, fnProgress]] */) {
            var fns = arguments
            return Deferred(function(defer){
              $.each(tuples, function(i, tuple){
                var fn = $.isFunction(fns[i]) && fns[i]
                deferred[tuple[1]](function(){
                  var returned = fn && fn.apply(this, arguments)
                  if (returned && $.isFunction(returned.promise)) {
                    returned.promise()
                      .done(defer.resolve)
                      .fail(defer.reject)
                      .progress(defer.notify)
                  } else {
                    var context = this === promise ? defer.promise() : this,
                        values = fn ? [returned] : arguments
                    defer[tuple[0] + "With"](context, values)
                  }
                })
              })
              fns = null
            }).promise()
          },

          promise: function(obj) {
            return obj != null ? $.extend( obj, promise ) : promise
          }
        },
        deferred = {}

    $.each(tuples, function(i, tuple){
      var list = tuple[2],
          stateString = tuple[3]

      promise[tuple[1]] = list.add

      if (stateString) {
        list.add(function(){
          state = stateString
        }, tuples[i^1][2].disable, tuples[2][2].lock)
      }

      deferred[tuple[0]] = function(){
        deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments)
        return this
      }
      deferred[tuple[0] + "With"] = list.fireWith
    })

    promise.promise(deferred)
    if (func) func.call(deferred, deferred)
    return deferred
  }

  $.when = function(sub) {
    var resolveValues = slice.call(arguments),
        len = resolveValues.length,
        i = 0,
        remain = len !== 1 || (sub && $.isFunction(sub.promise)) ? len : 0,
        deferred = remain === 1 ? sub : Deferred(),
        progressValues, progressContexts, resolveContexts,
        updateFn = function(i, ctx, val){
          return function(value){
            ctx[i] = this
            val[i] = arguments.length > 1 ? slice.call(arguments) : value
            if (val === progressValues) {
              deferred.notifyWith(ctx, val)
            } else if (!(--remain)) {
              deferred.resolveWith(ctx, val)
            }
          }
        }

    if (len > 1) {
      progressValues = new Array(len)
      progressContexts = new Array(len)
      resolveContexts = new Array(len)
      for ( ; i < len; ++i ) {
        if (resolveValues[i] && $.isFunction(resolveValues[i].promise)) {
          resolveValues[i].promise()
            .done(updateFn(i, resolveContexts, resolveValues))
            .fail(deferred.reject)
            .progress(updateFn(i, progressContexts, progressValues))
        } else {
          --remain
        }
      }
    }
    if (!remain) deferred.resolveWith(resolveContexts, resolveValues)
    return deferred.promise()
  }

  $.Deferred = Deferred
})(Zepto)

;(function($){
  var _zid = 1, undefined,
      slice = Array.prototype.slice,
      isFunction = $.isFunction,
      isString = function(obj){ return typeof obj == 'string' },
      handlers = {},
      specialEvents={},
      focusinSupported = 'onfocusin' in window,
      focus = { focus: 'focusin', blur: 'focusout' },
      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

  function zid(element) {
    return element._zid || (element._zid = _zid++)
  }
  function findHandlers(element, event, fn, selector) {
    event = parse(event)
    if (event.ns) var matcher = matcherFor(event.ns)
    return (handlers[zid(element)] || []).filter(function(handler) {
      return handler
        && (!event.e  || handler.e == event.e)
        && (!event.ns || matcher.test(handler.ns))
        && (!fn       || zid(handler.fn) === zid(fn))
        && (!selector || handler.sel == selector)
    })
  }
  function parse(event) {
    var parts = ('' + event).split('.')
    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
  }
  function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
  }

  function eventCapture(handler, captureSetting) {
    return handler.del &&
      (!focusinSupported && (handler.e in focus)) ||
      !!captureSetting
  }

  function realEvent(type) {
    return hover[type] || (focusinSupported && focus[type]) || type
  }

  function add(element, events, fn, data, selector, delegator, capture){
    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
    events.split(/\s/).forEach(function(event){
      if (event == 'ready') return $(document).ready(fn)
      var handler   = parse(event)
      handler.fn    = fn
      handler.sel   = selector
      // emulate mouseenter, mouseleave
      if (handler.e in hover) fn = function(e){
        var related = e.relatedTarget
        if (!related || (related !== this && !$.contains(this, related)))
          return handler.fn.apply(this, arguments)
      }
      handler.del   = delegator
      var callback  = delegator || fn
      handler.proxy = function(e){
        e = compatible(e)
        if (e.isImmediatePropagationStopped()) return
        e.data = data
        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
        if (result === false) e.preventDefault(), e.stopPropagation()
        return result
      }
      handler.i = set.length
      set.push(handler)
      if ('addEventListener' in element)
        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
    })
  }
  function remove(element, events, fn, selector, capture){
    var id = zid(element)
    ;(events || '').split(/\s/).forEach(function(event){
      findHandlers(element, event, fn, selector).forEach(function(handler){
        delete handlers[id][handler.i]
      if ('removeEventListener' in element)
        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
      })
    })
  }

  $.event = { add: add, remove: remove }

  $.proxy = function(fn, context) {
    var args = (2 in arguments) && slice.call(arguments, 2)
    if (isFunction(fn)) {
      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
      proxyFn._zid = zid(fn)
      return proxyFn
    } else if (isString(context)) {
      if (args) {
        args.unshift(fn[context], fn)
        return $.proxy.apply(null, args)
      } else {
        return $.proxy(fn[context], fn)
      }
    } else {
      throw new TypeError("expected function")
    }
  }

  $.fn.bind = function(event, data, callback){
    return this.on(event, data, callback)
  }
  $.fn.unbind = function(event, callback){
    return this.off(event, callback)
  }
  $.fn.one = function(event, selector, data, callback){
    return this.on(event, selector, data, callback, 1)
  }

  var returnTrue = function(){return true},
      returnFalse = function(){return false},
      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
      eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      }

  function compatible(event, source) {
    if (source || !event.isDefaultPrevented) {
      source || (source = event)

      $.each(eventMethods, function(name, predicate) {
        var sourceMethod = source[name]
        event[name] = function(){
          this[predicate] = returnTrue
          return sourceMethod && sourceMethod.apply(source, arguments)
        }
        event[predicate] = returnFalse
      })

      event.timeStamp || (event.timeStamp = Date.now())

      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
          'returnValue' in source ? source.returnValue === false :
          source.getPreventDefault && source.getPreventDefault())
        event.isDefaultPrevented = returnTrue
    }
    return event
  }

  function createProxy(event) {
    var key, proxy = { originalEvent: event }
    for (key in event)
      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

    return compatible(proxy, event)
  }

  $.fn.delegate = function(selector, event, callback){
    return this.on(event, selector, callback)
  }
  $.fn.undelegate = function(selector, event, callback){
    return this.off(event, selector, callback)
  }

  $.fn.live = function(event, callback){
    $(document.body).delegate(this.selector, event, callback)
    return this
  }
  $.fn.die = function(event, callback){
    $(document.body).undelegate(this.selector, event, callback)
    return this
  }

  $.fn.on = function(event, selector, data, callback, one){
    var autoRemove, delegator, $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.on(type, selector, data, fn, one)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = data, data = selector, selector = undefined
    if (callback === undefined || data === false)
      callback = data, data = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(_, element){
      if (one) autoRemove = function(e){
        remove(element, e.type, callback)
        return callback.apply(this, arguments)
      }

      if (selector) delegator = function(e){
        var evt, match = $(e.target).closest(selector, element).get(0)
        if (match && match !== element) {
          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
        }
      }

      add(element, event, callback, data, selector, delegator || autoRemove)
    })
  }
  $.fn.off = function(event, selector, callback){
    var $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.off(type, selector, fn)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = selector, selector = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(){
      remove(this, event, callback, selector)
    })
  }

  $.fn.trigger = function(event, args){
    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
    event._args = args
    return this.each(function(){
      // handle focus(), blur() by calling them directly
      if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
      // items in the collection might not be DOM elements
      else if ('dispatchEvent' in this) this.dispatchEvent(event)
      else $(this).triggerHandler(event, args)
    })
  }

  // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble
  $.fn.triggerHandler = function(event, args){
    var e, result
    this.each(function(i, element){
      e = createProxy(isString(event) ? $.Event(event) : event)
      e._args = args
      e.target = element
      $.each(findHandlers(element, event.type || event), function(i, handler){
        result = handler.proxy(e)
        if (e.isImmediatePropagationStopped()) return false
      })
    })
    return result
  }

  // shortcut methods for `.bind(event, fn)` for each event type
  ;('focusin focusout focus blur load resize scroll unload click dblclick '+
  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
    $.fn[event] = function(callback) {
      return (0 in arguments) ?
        this.bind(event, callback) :
        this.trigger(event)
    }
  })

  $.Event = function(type, props) {
    if (!isString(type)) props = type, type = props.type
    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
    event.initEvent(type, bubbles, true)
    return compatible(event)
  }

})(Zepto)

;(function(){
  // getComputedStyle shouldn't freak out when called
  // without a valid element as argument
  try {
    getComputedStyle(undefined)
  } catch(e) {
    var nativeGetComputedStyle = getComputedStyle
    window.getComputedStyle = function(element, pseudoElement){
      try {
        return nativeGetComputedStyle(element, pseudoElement)
      } catch(e) {
        return null
      }
    }
  }
})()

;(function($){
  var zepto = $.zepto, oldQsa = zepto.qsa, oldMatches = zepto.matches

  function visible(elem){
    elem = $(elem)
    return !!(elem.width() || elem.height()) && elem.css("display") !== "none"
  }

  // Implements a subset from:
  // http://api.jquery.com/category/selectors/jquery-selector-extensions/
  //
  // Each filter function receives the current index, all nodes in the
  // considered set, and a value if there were parentheses. The value
  // of `this` is the node currently being considered. The function returns the
  // resulting node(s), null, or undefined.
  //
  // Complex selectors are not supported:
  //   li:has(label:contains("foo")) + li:has(label:contains("bar"))
  //   ul.inner:first > li
  var filters = $.expr[':'] = {
    visible:  function(){ if (visible(this)) return this },
    hidden:   function(){ if (!visible(this)) return this },
    selected: function(){ if (this.selected) return this },
    checked:  function(){ if (this.checked) return this },
    parent:   function(){ return this.parentNode },
    first:    function(idx){ if (idx === 0) return this },
    last:     function(idx, nodes){ if (idx === nodes.length - 1) return this },
    eq:       function(idx, _, value){ if (idx === value) return this },
    contains: function(idx, _, text){ if ($(this).text().indexOf(text) > -1) return this },
    has:      function(idx, _, sel){ if (zepto.qsa(this, sel).length) return this }
  }

  var filterRe = new RegExp('(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*'),
      childRe  = /^\s*>/,
      classTag = 'Zepto' + (+new Date())

  function process(sel, fn) {
    // quote the hash in `a[href^=#]` expression
    sel = sel.replace(/=#\]/g, '="#"]')
    var filter, arg, match = filterRe.exec(sel)
    if (match && match[2] in filters) {
      filter = filters[match[2]], arg = match[3]
      sel = match[1]
      if (arg) {
        var num = Number(arg)
        if (isNaN(num)) arg = arg.replace(/^["']|["']$/g, '')
        else arg = num
      }
    }
    return fn(sel, filter, arg)
  }

  zepto.qsa = function(node, selector) {
    return process(selector, function(sel, filter, arg){
      try {
        var taggedParent
        if (!sel && filter) sel = '*'
        else if (childRe.test(sel))
          // support "> *" child queries by tagging the parent node with a
          // unique class and prepending that classname onto the selector
          taggedParent = $(node).addClass(classTag), sel = '.'+classTag+' '+sel

        var nodes = oldQsa(node, sel)
      } catch(e) {
        console.error('error performing selector: %o', selector)
        throw e
      } finally {
        if (taggedParent) taggedParent.removeClass(classTag)
      }
      return !filter ? nodes :
        zepto.uniq($.map(nodes, function(n, i){ return filter.call(n, i, nodes, arg) }))
    })
  }

  zepto.matches = function(node, selector){
    return process(selector, function(sel, filter, arg){
      return (!sel || oldMatches(node, sel)) &&
        (!filter || filter.call(node, null, arg) === node)
    })
  }
})(Zepto)
module.exports = Zepto


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/components/container/public/style.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/components/container/public/style.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container[data-container] {\n  position: absolute;\n  background-color: black;\n  height: 100%;\n  width: 100%;\n  max-width: 100%; }\n  .container[data-container] .chromeless {\n    cursor: default; }\n\n[data-player]:not(.nocursor) .container[data-container]:not(.chromeless).pointer-enabled {\n  cursor: pointer; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/components/core/public/style.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/components/core/public/style.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-player] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transform: translate3d(0, 0, 0);\n  position: relative;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-style: normal;\n  font-weight: normal;\n  text-align: center;\n  overflow: hidden;\n  font-size: 100%;\n  font-family: \"Roboto\", \"Open Sans\", Arial, sans-serif;\n  text-shadow: 0 0 0;\n  box-sizing: border-box; }\n  [data-player] div, [data-player] span, [data-player] applet, [data-player] object, [data-player] iframe,\n  [data-player] h1, [data-player] h2, [data-player] h3, [data-player] h4, [data-player] h5, [data-player] h6, [data-player] p, [data-player] blockquote, [data-player] pre,\n  [data-player] a, [data-player] abbr, [data-player] acronym, [data-player] address, [data-player] big, [data-player] cite, [data-player] code,\n  [data-player] del, [data-player] dfn, [data-player] em, [data-player] img, [data-player] ins, [data-player] kbd, [data-player] q, [data-player] s, [data-player] samp,\n  [data-player] small, [data-player] strike, [data-player] strong, [data-player] sub, [data-player] sup, [data-player] tt, [data-player] var,\n  [data-player] b, [data-player] u, [data-player] i, [data-player] center,\n  [data-player] dl, [data-player] dt, [data-player] dd, [data-player] ol, [data-player] ul, [data-player] li,\n  [data-player] fieldset, [data-player] form, [data-player] label, [data-player] legend,\n  [data-player] table, [data-player] caption, [data-player] tbody, [data-player] tfoot, [data-player] thead, [data-player] tr, [data-player] th, [data-player] td,\n  [data-player] article, [data-player] aside, [data-player] canvas, [data-player] details, [data-player] embed,\n  [data-player] figure, [data-player] figcaption, [data-player] footer, [data-player] header, [data-player] hgroup,\n  [data-player] menu, [data-player] nav, [data-player] output, [data-player] ruby, [data-player] section, [data-player] summary,\n  [data-player] time, [data-player] mark, [data-player] audio, [data-player] video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline; }\n  [data-player] table {\n    border-collapse: collapse;\n    border-spacing: 0; }\n  [data-player] caption, [data-player] th, [data-player] td {\n    text-align: left;\n    font-weight: normal;\n    vertical-align: middle; }\n  [data-player] q, [data-player] blockquote {\n    quotes: none; }\n    [data-player] q:before, [data-player] q:after, [data-player] blockquote:before, [data-player] blockquote:after {\n      content: \"\";\n      content: none; }\n  [data-player] a img {\n    border: none; }\n  [data-player]:focus {\n    outline: 0; }\n  [data-player] * {\n    max-width: none;\n    box-sizing: inherit;\n    float: none; }\n  [data-player] div {\n    display: block; }\n  [data-player].fullscreen {\n    width: 100% !important;\n    height: 100% !important;\n    top: 0;\n    left: 0; }\n  [data-player].nocursor {\n    cursor: none; }\n\n.clappr-style {\n  display: none !important; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/playbacks/html5_video/public/style.scss":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/playbacks/html5_video/public/style.scss ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-html5-video] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: block; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/playbacks/html_img/public/style.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/playbacks/html_img/public/style.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-html-img] {\n  max-width: 100%;\n  max-height: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/playbacks/no_op/public/style.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/playbacks/no_op/public/style.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-no-op] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  text-align: center; }\n\n[data-no-op] p[data-no-op-msg] {\n  position: absolute;\n  text-align: center;\n  font-size: 25px;\n  left: 0;\n  right: 0;\n  color: white;\n  padding: 10px;\n  /* center vertically */\n  top: 50%;\n  transform: translateY(-50%);\n  max-height: 100%;\n  overflow: auto; }\n\n[data-no-op] canvas[data-no-op-canvas] {\n  background-color: #777;\n  height: 100%;\n  width: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/closed_captions/public/closed_captions.scss":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/closed_captions/public/closed_captions.scss ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cc-controls[data-cc-controls] {\n  float: right;\n  position: relative;\n  display: none; }\n  .cc-controls[data-cc-controls].available {\n    display: block; }\n  .cc-controls[data-cc-controls] .cc-button {\n    padding: 6px !important; }\n    .cc-controls[data-cc-controls] .cc-button.enabled {\n      display: block;\n      opacity: 1.0; }\n      .cc-controls[data-cc-controls] .cc-button.enabled:hover {\n        opacity: 1.0;\n        text-shadow: none; }\n  .cc-controls[data-cc-controls] > ul {\n    list-style-type: none;\n    position: absolute;\n    bottom: 25px;\n    border: 1px solid black;\n    display: none;\n    background-color: #e6e6e6; }\n  .cc-controls[data-cc-controls] li {\n    font-size: 10px; }\n    .cc-controls[data-cc-controls] li[data-title] {\n      background-color: #c3c2c2;\n      padding: 5px; }\n    .cc-controls[data-cc-controls] li a {\n      color: #444;\n      padding: 2px 10px;\n      display: block;\n      text-decoration: none; }\n      .cc-controls[data-cc-controls] li a:hover {\n        background-color: #555;\n        color: white; }\n        .cc-controls[data-cc-controls] li a:hover a {\n          color: white;\n          text-decoration: none; }\n    .cc-controls[data-cc-controls] li.current a {\n      color: #f00; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/dvr_controls/public/dvr_controls.scss":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/dvr_controls/public/dvr_controls.scss ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dvr-controls[data-dvr-controls] {\n  display: inline-block;\n  float: left;\n  color: #fff;\n  line-height: 32px;\n  font-size: 10px;\n  font-weight: bold;\n  margin-left: 6px; }\n  .dvr-controls[data-dvr-controls] .live-info {\n    cursor: default;\n    font-family: \"Roboto\", \"Open Sans\", Arial, sans-serif;\n    text-transform: uppercase; }\n    .dvr-controls[data-dvr-controls] .live-info:before {\n      content: \"\";\n      display: inline-block;\n      position: relative;\n      width: 7px;\n      height: 7px;\n      border-radius: 3.5px;\n      margin-right: 3.5px;\n      background-color: #ff0101; }\n    .dvr-controls[data-dvr-controls] .live-info.disabled {\n      opacity: 0.3; }\n      .dvr-controls[data-dvr-controls] .live-info.disabled:before {\n        background-color: #fff; }\n  .dvr-controls[data-dvr-controls] .live-button {\n    cursor: pointer;\n    outline: none;\n    display: none;\n    border: 0;\n    color: #fff;\n    background-color: transparent;\n    height: 32px;\n    padding: 0;\n    opacity: 0.7;\n    font-family: \"Roboto\", \"Open Sans\", Arial, sans-serif;\n    text-transform: uppercase;\n    transition: all 0.1s ease; }\n    .dvr-controls[data-dvr-controls] .live-button:before {\n      content: \"\";\n      display: inline-block;\n      position: relative;\n      width: 7px;\n      height: 7px;\n      border-radius: 3.5px;\n      margin-right: 3.5px;\n      background-color: #fff; }\n    .dvr-controls[data-dvr-controls] .live-button:hover {\n      opacity: 1;\n      text-shadow: rgba(255, 255, 255, 0.75) 0 0 5px; }\n\n.dvr .dvr-controls[data-dvr-controls] .live-info {\n  display: none; }\n\n.dvr .dvr-controls[data-dvr-controls] .live-button {\n  display: block; }\n\n.dvr.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {\n  background-color: #005aff; }\n\n.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {\n  background-color: #ff0101; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/error_screen/public/error_screen.scss":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/error_screen/public/error_screen.scss ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.player-error-screen {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #CCCACA;\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 2000;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center; }\n  div.player-error-screen__content[data-error-screen] {\n    font-size: 14px;\n    color: #CCCACA;\n    margin-top: 45px; }\n  div.player-error-screen__title[data-error-screen] {\n    font-weight: bold;\n    line-height: 30px;\n    font-size: 18px; }\n  div.player-error-screen__message[data-error-screen] {\n    width: 90%;\n    margin: 0 auto; }\n  div.player-error-screen__code[data-error-screen] {\n    font-size: 13px;\n    margin-top: 15px; }\n  div.player-error-screen__reload {\n    cursor: pointer;\n    width: 30px;\n    margin: 15px auto 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/media_control/public/media-control.scss":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/media_control/public/media-control.scss ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/poster/public/poster.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/poster/public/poster.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player-poster[data-poster] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 998;\n  top: 0;\n  left: 0;\n  background-color: #000;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%; }\n  .player-poster[data-poster].clickable {\n    cursor: pointer; }\n  .player-poster[data-poster]:hover .play-wrapper[data-poster] {\n    opacity: 1; }\n  .player-poster[data-poster] .play-wrapper[data-poster] {\n    width: 100%;\n    height: 25%;\n    margin: 0 auto;\n    opacity: 0.75;\n    transition: opacity 0.1s ease; }\n    .player-poster[data-poster] .play-wrapper[data-poster] svg {\n      height: 100%; }\n      .player-poster[data-poster] .play-wrapper[data-poster] svg path {\n        fill: #fff; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/seek_time/public/seek_time.scss":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/seek_time/public/seek_time.scss ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".seek-time[data-seek-time] {\n  position: absolute;\n  white-space: nowrap;\n  height: 20px;\n  line-height: 20px;\n  font-size: 0;\n  left: -100%;\n  bottom: 55px;\n  background-color: rgba(2, 2, 2, 0.5);\n  z-index: 9999;\n  transition: opacity 0.1s ease; }\n  .seek-time[data-seek-time].hidden[data-seek-time] {\n    opacity: 0; }\n  .seek-time[data-seek-time] [data-seek-time] {\n    display: inline-block;\n    color: white;\n    font-size: 10px;\n    padding-left: 7px;\n    padding-right: 7px;\n    vertical-align: top; }\n  .seek-time[data-seek-time] [data-duration] {\n    display: inline-block;\n    color: rgba(255, 255, 255, 0.5);\n    font-size: 10px;\n    padding-right: 7px;\n    vertical-align: top; }\n    .seek-time[data-seek-time] [data-duration]:before {\n      content: \"|\";\n      margin-right: 7px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/spinner_three_bounce/public/spinner.scss":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/spinner_three_bounce/public/spinner.scss ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner-three-bounce[data-spinner] {\n  position: absolute;\n  margin: 0 auto;\n  width: 70px;\n  text-align: center;\n  z-index: 999;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  /* center vertically */\n  top: 50%;\n  transform: translateY(-50%); }\n  .spinner-three-bounce[data-spinner] > div {\n    width: 18px;\n    height: 18px;\n    background-color: #FFFFFF;\n    border-radius: 100%;\n    display: inline-block;\n    animation: bouncedelay 1.4s infinite ease-in-out;\n    /* Prevent first frame from flickering when animation starts */\n    animation-fill-mode: both; }\n  .spinner-three-bounce[data-spinner] [data-bounce1] {\n    animation-delay: -0.32s; }\n  .spinner-three-bounce[data-spinner] [data-bounce2] {\n    animation-delay: -0.16s; }\n\n@keyframes bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0); }\n  40% {\n    transform: scale(1); } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/watermark/public/watermark.scss":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/watermark/public/watermark.scss ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clappr-watermark[data-watermark] {\n  position: absolute;\n  min-width: 70px;\n  max-width: 200px;\n  width: 12%;\n  text-align: center;\n  z-index: 10; }\n\n.clappr-watermark[data-watermark] a {\n  outline: none;\n  cursor: pointer; }\n\n.clappr-watermark[data-watermark] img {\n  max-width: 100%; }\n\n.clappr-watermark[data-watermark-bottom-left] {\n  bottom: 10px;\n  left: 10px; }\n\n.clappr-watermark[data-watermark-bottom-right] {\n  bottom: 10px;\n  right: 42px; }\n\n.clappr-watermark[data-watermark-top-left] {\n  top: 10px;\n  left: 10px; }\n\n.clappr-watermark[data-watermark-top-right] {\n  top: 10px;\n  right: 37px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/hls.js/dist/hls.light.min.js":
/*!***************************************************!*\
  !*** ./node_modules/hls.js/dist/hls.light.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"undefined"!=typeof window&&function(t,e){ true?module.exports=e():undefined}(this,(function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=18)}([function(t,e,r){"use strict";var i;r.d(e,"a",(function(){return i})),function(t){t.MEDIA_ATTACHING="hlsMediaAttaching",t.MEDIA_ATTACHED="hlsMediaAttached",t.MEDIA_DETACHING="hlsMediaDetaching",t.MEDIA_DETACHED="hlsMediaDetached",t.BUFFER_RESET="hlsBufferReset",t.BUFFER_CODECS="hlsBufferCodecs",t.BUFFER_CREATED="hlsBufferCreated",t.BUFFER_APPENDING="hlsBufferAppending",t.BUFFER_APPENDED="hlsBufferAppended",t.BUFFER_EOS="hlsBufferEos",t.BUFFER_FLUSHING="hlsBufferFlushing",t.BUFFER_FLUSHED="hlsBufferFlushed",t.MANIFEST_LOADING="hlsManifestLoading",t.MANIFEST_LOADED="hlsManifestLoaded",t.MANIFEST_PARSED="hlsManifestParsed",t.LEVEL_SWITCHING="hlsLevelSwitching",t.LEVEL_SWITCHED="hlsLevelSwitched",t.LEVEL_LOADING="hlsLevelLoading",t.LEVEL_LOADED="hlsLevelLoaded",t.LEVEL_UPDATED="hlsLevelUpdated",t.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",t.LEVELS_UPDATED="hlsLevelsUpdated",t.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",t.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",t.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",t.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",t.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",t.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",t.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",t.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",t.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",t.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",t.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",t.CUES_PARSED="hlsCuesParsed",t.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",t.INIT_PTS_FOUND="hlsInitPtsFound",t.FRAG_LOADING="hlsFragLoading",t.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",t.FRAG_LOADED="hlsFragLoaded",t.FRAG_DECRYPTED="hlsFragDecrypted",t.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",t.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",t.FRAG_PARSING_METADATA="hlsFragParsingMetadata",t.FRAG_PARSED="hlsFragParsed",t.FRAG_BUFFERED="hlsFragBuffered",t.FRAG_CHANGED="hlsFragChanged",t.FPS_DROP="hlsFpsDrop",t.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",t.ERROR="hlsError",t.DESTROYING="hlsDestroying",t.KEY_LOADING="hlsKeyLoading",t.KEY_LOADED="hlsKeyLoaded",t.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached"}(i||(i={}))},function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return l}));var i=function(){},a={trace:i,debug:i,log:i,warn:i,info:i,error:i},n=a;function s(t){var e=self.console[t];return e?e.bind(self.console,"["+t+"] >"):i}function o(t){if(self.console&&!0===t||"object"==typeof t){!function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];r.forEach((function(e){n[e]=t[e]?t[e].bind(t):s(e)}))}(t,"debug","log","info","warn","error");try{n.log()}catch(t){n=a}}else n=a}var l=a},function(t,e,r){"use strict";var i,a;r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return a})),function(t){t.NETWORK_ERROR="networkError",t.MEDIA_ERROR="mediaError",t.KEY_SYSTEM_ERROR="keySystemError",t.MUX_ERROR="muxError",t.OTHER_ERROR="otherError"}(i||(i={})),function(t){t.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",t.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",t.KEY_SYSTEM_NO_SESSION="keySystemNoSession",t.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",t.KEY_SYSTEM_NO_INIT_DATA="keySystemNoInitData",t.MANIFEST_LOAD_ERROR="manifestLoadError",t.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",t.MANIFEST_PARSING_ERROR="manifestParsingError",t.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",t.LEVEL_EMPTY_ERROR="levelEmptyError",t.LEVEL_LOAD_ERROR="levelLoadError",t.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",t.LEVEL_SWITCH_ERROR="levelSwitchError",t.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",t.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",t.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",t.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",t.FRAG_LOAD_ERROR="fragLoadError",t.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",t.FRAG_DECRYPT_ERROR="fragDecryptError",t.FRAG_PARSING_ERROR="fragParsingError",t.REMUX_ALLOC_ERROR="remuxAllocError",t.KEY_LOAD_ERROR="keyLoadError",t.KEY_LOAD_TIMEOUT="keyLoadTimeOut",t.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",t.BUFFER_APPEND_ERROR="bufferAppendError",t.BUFFER_APPENDING_ERROR="bufferAppendingError",t.BUFFER_STALLED_ERROR="bufferStalledError",t.BUFFER_FULL_ERROR="bufferFullError",t.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",t.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",t.INTERNAL_EXCEPTION="internalException",t.INTERNAL_ABORTED="aborted",t.UNKNOWN="unknown"}(a||(a={}))},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var i=Number.isFinite||function(t){return"number"==typeof t&&isFinite(t)};Number.MAX_SAFE_INTEGER},function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return v}));var i,a=r(3),n=r(9),s=r(1),o=r(15),l=r(10);function u(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function d(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function h(t,e,r){return e&&d(t.prototype,e),r&&d(t,r),t}!function(t){t.AUDIO="audio",t.VIDEO="video",t.AUDIOVIDEO="audiovideo"}(i||(i={}));var f=function(){function t(t){var e;this._byteRange=null,this._url=null,this.baseurl=void 0,this.relurl=void 0,this.elementaryStreams=((e={})[i.AUDIO]=null,e[i.VIDEO]=null,e[i.AUDIOVIDEO]=null,e),this.baseurl=t}return t.prototype.setByteRange=function(t,e){var r=t.split("@",2),i=[];1===r.length?i[0]=e?e.byteRangeEndOffset:0:i[0]=parseInt(r[1]),i[1]=parseInt(r[0])+i[0],this._byteRange=i},h(t,[{key:"byteRange",get:function(){return this._byteRange?this._byteRange:[]}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"url",get:function(){return!this._url&&this.baseurl&&this.relurl&&(this._url=Object(n.buildAbsoluteURL)(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""},set:function(t){this._url=t}}]),t}(),c=function(t){function e(e,r){var i;return(i=t.call(this,r)||this)._decryptdata=null,i.rawProgramDateTime=null,i.programDateTime=null,i.tagList=[],i.duration=0,i.sn=0,i.levelkey=void 0,i.type=void 0,i.loader=null,i.level=-1,i.cc=0,i.startPTS=void 0,i.endPTS=void 0,i.appendedPTS=void 0,i.startDTS=void 0,i.endDTS=void 0,i.start=0,i.deltaPTS=void 0,i.maxStartPTS=void 0,i.minEndPTS=void 0,i.stats=new l.a,i.urlId=0,i.data=void 0,i.bitrateTest=!1,i.title=null,i.type=e,i}u(e,t);var r=e.prototype;return r.createInitializationVector=function(t){for(var e=new Uint8Array(16),r=12;r<16;r++)e[r]=t>>8*(15-r)&255;return e},r.setDecryptDataFromLevelKey=function(t,e){var r=t;return"AES-128"===(null==t?void 0:t.method)&&t.uri&&!t.iv&&((r=o.a.fromURI(t.uri)).method=t.method,r.iv=this.createInitializationVector(e),r.keyFormat="identity"),r},r.setElementaryStreamInfo=function(t,e,r,i,a,n){void 0===n&&(n=!1);var s=this.elementaryStreams,o=s[t];o?(o.startPTS=Math.min(o.startPTS,e),o.endPTS=Math.max(o.endPTS,r),o.startDTS=Math.min(o.startDTS,i),o.endDTS=Math.max(o.endDTS,a)):s[t]={startPTS:e,endPTS:r,startDTS:i,endDTS:a,partial:n}},r.clearElementaryStreamInfo=function(){var t=this.elementaryStreams;t[i.AUDIO]=null,t[i.VIDEO]=null,t[i.AUDIOVIDEO]=null},h(e,[{key:"decryptdata",get:function(){if(!this.levelkey&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkey){var t=this.sn;"number"!=typeof t&&(this.levelkey&&"AES-128"===this.levelkey.method&&!this.levelkey.iv&&s.b.warn('missing IV for initialization segment with method="'+this.levelkey.method+'" - compliance issue'),t=0),this._decryptdata=this.setDecryptDataFromLevelKey(this.levelkey,t)}return this._decryptdata}},{key:"end",get:function(){return this.start+this.duration}},{key:"endProgramDateTime",get:function(){if(null===this.programDateTime)return null;if(!Object(a.a)(this.programDateTime))return null;var t=Object(a.a)(this.duration)?this.duration:0;return this.programDateTime+1e3*t}},{key:"encrypted",get:function(){var t;return!(null===(t=this.decryptdata)||void 0===t||!t.keyFormat||!this.decryptdata.uri)}}]),e}(f),v=function(t){function e(e,r,i,a,n){var s;(s=t.call(this,i)||this).fragOffset=0,s.duration=0,s.gap=!1,s.independent=!1,s.relurl=void 0,s.fragment=void 0,s.index=void 0,s.stats=new l.a,s.duration=e.decimalFloatingPoint("DURATION"),s.gap=e.bool("GAP"),s.independent=!e.INDEPENDENT||e.bool("INDEPENDENT"),s.relurl=e.enumeratedString("URI"),s.fragment=r,s.index=a;var o=e.enumeratedString("BYTERANGE");return o&&s.setByteRange(o,n),n&&(s.fragOffset=n.fragOffset+n.duration),s}return u(e,t),h(e,[{key:"start",get:function(){return this.fragment.start+this.fragOffset}},{key:"end",get:function(){return this.start+this.duration}},{key:"loaded",get:function(){var t=this.elementaryStreams;return!!(t.audio||t.video||t.audiovideo)}}]),e}(f)},function(t,e,r){"use strict";r.d(e,"b",(function(){return d})),r.d(e,"g",(function(){return h})),r.d(e,"f",(function(){return f})),r.d(e,"d",(function(){return c})),r.d(e,"c",(function(){return v})),r.d(e,"e",(function(){return p})),r.d(e,"h",(function(){return m})),r.d(e,"a",(function(){return y}));var i=r(7),a=r(4),n=Math.pow(2,32)-1,s=[].push;function o(t){return String.fromCharCode.apply(null,t)}function l(t,e){"data"in t&&(e+=t.start,t=t.data);var r=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3];return r<0?4294967296+r:r}function u(t,e,r){"data"in t&&(e+=t.start,t=t.data),t[e]=r>>24,t[e+1]=r>>16&255,t[e+2]=r>>8&255,t[e+3]=255&r}function d(t,e){var r,i,a,n=[];if(!e.length)return n;"data"in t?(r=t.data,i=t.start,a=t.end):(i=0,a=(r=t).byteLength);for(var u=i;u<a;){var h=l(r,u),f=h>1?u+h:a;if(o(r.subarray(u+4,u+8))===e[0])if(1===e.length)n.push({data:r,start:u+8,end:f});else{var c=d({data:r,start:u+8,end:f},e.slice(1));c.length&&s.apply(n,c)}u=f}return n}function h(t){var e=d(t,["moov"]),r=e?e[0]:null,i=r?r.end:null,a=d(t,["sidx"]);if(!a||!a[0])return null;var n=[],s=a[0],o=s.data[0],u=0===o?8:16,h=l(s,u);u+=4;u+=0===o?8:16,u+=2;var f=s.end+0,c=function(t,e){"data"in t&&(e+=t.start,t=t.data);var r=t[e]<<8|t[e+1];return r<0?65536+r:r}(s,u);u+=2;for(var v=0;v<c;v++){var g=u,p=l(s,g);g+=4;var m=2147483647&p;if(1===(2147483648&p)>>>31)return console.warn("SIDX has hierarchical references (not supported)"),null;var y=l(s,g);g+=4,n.push({referenceSize:m,subsegmentDuration:y,info:{duration:y/h,start:f,end:f+m-1}}),f+=m,u=g+=4}return{earliestPresentationTime:0,timescale:h,version:o,referencesCount:c,references:n,moovEndOffset:i}}function f(t){for(var e=[],r=d(t,["moov","trak"]),i=0;i<r.length;i++){var n=r[i],s=d(n,["tkhd"])[0];if(s){var u=s.data[s.start],h=0===u?12:20,f=l(s,h),c=d(n,["mdia","mdhd"])[0];if(c){var v=l(c,h=0===(u=c.data[c.start])?12:20),g=d(n,["mdia","hdlr"])[0];if(g){var p=o(g.data.subarray(g.start+8,g.start+12)),m={soun:a.a.AUDIO,vide:a.a.VIDEO}[p];if(m){var y=d(n,["mdia","minf","stbl","stsd"]),b=void 0;if(y.length){var T=y[0];b=o(T.data.subarray(T.start+12,T.start+16))}e[f]={timescale:v,type:m},e[m]={timescale:v,id:f,codec:b}}}}}}return d(t,["moov","mvex","trex"]).forEach((function(t){var r=l(t,4),i=e[r];i&&(i.default={duration:l(t,12),flags:l(t,20)})})),e}function c(t,e){return d(e,["moof","traf"]).reduce((function(e,r){var i=d(r,["tfdt"])[0],a=i.data[i.start],n=d(r,["tfhd"]).reduce((function(e,r){var n=l(r,4),s=t[n];if(s){var o=l(i,4);1===a&&(o*=Math.pow(2,32),o+=l(i,8));var u=o/(s.timescale||9e4);if(isFinite(u)&&(null===e||u<e))return u}return e}),null);return null!==n&&isFinite(n)&&(null===e||n<e)?n:e}),null)||0}function v(t,e){for(var r=0,i=0,n=0,s=d(t,["moof","traf"]),o=0;o<s.length;o++){var u=s[o],f=d(u,["tfhd"])[0],c=e[l(f,4)];if(c){var v=c.default,p=l(f,0)|(null==v?void 0:v.flags),m=null==v?void 0:v.duration;8&p&&(m=l(f,2&p?12:8));for(var y=c.timescale||9e4,b=d(u,["trun"]),T=0;T<b.length;T++){if(m)r=m*l(b[T],4);else r=g(b[T]);c.type===a.a.VIDEO?i+=r/y:c.type===a.a.AUDIO&&(n+=r/y)}}}if(0===i&&0===n){var E=h(t);if(null!=E&&E.references)return E.references.reduce((function(t,e){return t+e.info.duration||0}),0)}return i||n}function g(t){var e=l(t,0),r=8;1&e&&(r+=4),4&e&&(r+=4);for(var i=0,a=l(t,4),n=0;n<a;n++){if(256&e)i+=l(t,r),r+=4;512&e&&(r+=4),1024&e&&(r+=4),2048&e&&(r+=4)}return i}function p(t,e,r){d(e,["moof","traf"]).forEach((function(e){d(e,["tfhd"]).forEach((function(i){var a=l(i,4),s=t[a];if(s){var o=s.timescale||9e4;d(e,["tfdt"]).forEach((function(t){var e=t.data[t.start],i=l(t,4);if(0===e)u(t,4,i-r*o);else{i*=Math.pow(2,32),i+=l(t,8),i-=r*o,i=Math.max(i,0);var a=Math.floor(i/(n+1)),s=Math.floor(i%(n+1));u(t,4,a),u(t,8,s)}}))}}))}))}function m(t){var e={valid:null,remainder:null},r=d(t,["moof"]);if(!r)return e;if(r.length<2)return e.remainder=t,e;var a=r[r.length-1];return e.valid=Object(i.a)(t,0,a.start-8),e.remainder=Object(i.a)(t,a.start-8),e}function y(t,e){var r=new Uint8Array(t.length+e.length);return r.set(t),r.set(e,t.length),r}},function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return l})),r.d(e,"d",(function(){return u})),r.d(e,"e",(function(){return d})),r.d(e,"c",(function(){return f})),r.d(e,"f",(function(){return y}));var i,a=function(t,e){return e+10<=t.length&&73===t[e]&&68===t[e+1]&&51===t[e+2]&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},n=function(t,e){return e+10<=t.length&&51===t[e]&&68===t[e+1]&&73===t[e+2]&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},s=function(t,e){for(var r=e,i=0;a(t,e);){i+=10,i+=o(t,e+6),n(t,e+10)&&(i+=10),e+=i}if(i>0)return t.subarray(r,r+i)},o=function(t,e){var r=0;return r=(127&t[e])<<21,r|=(127&t[e+1])<<14,r|=(127&t[e+2])<<7,r|=127&t[e+3]},l=function(t,e){return a(t,e)&&o(t,e+6)+10<=t.length-e},u=function(t){for(var e=f(t),r=0;r<e.length;r++){var i=e[r];if(d(i))return m(i)}},d=function(t){return t&&"PRIV"===t.key&&"com.apple.streaming.transportStreamTimestamp"===t.info},h=function(t){var e=String.fromCharCode(t[0],t[1],t[2],t[3]),r=o(t,4);return{type:e,size:r,data:t.subarray(10,10+r)}},f=function(t){for(var e=0,r=[];a(t,e);){for(var i=o(t,e+6),s=(e+=10)+i;e+8<s;){var l=h(t.subarray(e)),u=c(l);u&&r.push(u),e+=l.size+10}n(t,e)&&(e+=10)}return r},c=function(t){return"PRIV"===t.type?v(t):"W"===t.type[0]?p(t):g(t)},v=function(t){if(!(t.size<2)){var e=y(t.data,!0),r=new Uint8Array(t.data.subarray(e.length+1));return{key:t.type,info:e,data:r.buffer}}},g=function(t){if(!(t.size<2)){if("TXXX"===t.type){var e=1,r=y(t.data.subarray(e),!0);e+=r.length+1;var i=y(t.data.subarray(e));return{key:t.type,info:r,data:i}}var a=y(t.data.subarray(1));return{key:t.type,data:a}}},p=function(t){if("WXXX"===t.type){if(t.size<2)return;var e=1,r=y(t.data.subarray(e),!0);e+=r.length+1;var i=y(t.data.subarray(e));return{key:t.type,info:r,data:i}}var a=y(t.data);return{key:t.type,data:a}},m=function(t){if(8===t.data.byteLength){var e=new Uint8Array(t.data),r=1&e[3],i=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return i/=45,r&&(i+=47721858.84),Math.round(i)}},y=function(t,e){void 0===e&&(e=!1);var r=b();if(r){var i=r.decode(t);if(e){var a=i.indexOf("\0");return-1!==a?i.substring(0,a):i}return i.replace(/\0/g,"")}for(var n,s,o,l=t.length,u="",d=0;d<l;){if(0===(n=t[d++])&&e)return u;if(0!==n&&3!==n)switch(n>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:u+=String.fromCharCode(n);break;case 12:case 13:s=t[d++],u+=String.fromCharCode((31&n)<<6|63&s);break;case 14:s=t[d++],o=t[d++],u+=String.fromCharCode((15&n)<<12|(63&s)<<6|(63&o)<<0)}}return u};function b(){return i||void 0===self.TextDecoder||(i=new self.TextDecoder("utf-8")),i}},function(t,e,r){"use strict";function i(t,e,r){return Uint8Array.prototype.slice?t.slice(e,r):new Uint8Array(Array.prototype.slice.call(t,e,r))}r.d(e,"a",(function(){return i}))},function(t,e,r){"use strict";r.d(e,"c",(function(){return vt})),r.d(e,"d",(function(){return pt})),r.d(e,"a",(function(){return mt})),r.d(e,"b",(function(){return yt}));var i=r(0),a=r(2),n=r(14),s=r(3),o=r(6);var l=r(5),u=r(7),d=function(){function t(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.initPTS=null}var e=t.prototype;return e.resetInitSegment=function(t,e,r){this._id3Track={type:"id3",id:0,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}},e.resetTimeStamp=function(){},e.resetContiguity=function(){},e.canParse=function(t,e){return!1},e.appendFrame=function(t,e,r){},e.demux=function(t,e){this.cachedData&&(t=Object(l.a)(this.cachedData,t),this.cachedData=null);var r,i,a=o.b(t,0),n=a?a.length:0,s=this._audioTrack,d=this._id3Track,f=a?o.d(a):void 0,c=t.length;for(0!==this.frameIndex&&null!==this.initPTS||(this.initPTS=h(f,e)),a&&a.length>0&&d.samples.push({pts:this.initPTS,dts:this.initPTS,data:a}),i=this.initPTS;n<c;){if(this.canParse(t,n)){var v=this.appendFrame(s,t,n);v?(this.frameIndex++,i=v.sample.pts,r=n+=v.length):n=c}else o.a(t,n)?(a=o.b(t,n),d.samples.push({pts:i,dts:i,data:a}),r=n+=a.length):n++;if(n===c&&r!==c){var g=Object(u.a)(t,r);this.cachedData?this.cachedData=Object(l.a)(this.cachedData,g):this.cachedData=g}}return{audioTrack:s,avcTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},id3Track:d,textTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0}}},e.demuxSampleAes=function(t,e,r){return Promise.reject(new Error("["+this+"] This demuxer does not support Sample-AES decryption"))},e.flush=function(t){return this.cachedData&&this.demux(this.cachedData,0),this.frameIndex=0,this.cachedData=null,{audioTrack:this._audioTrack,avcTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},id3Track:this._id3Track,textTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0}}},e.destroy=function(){},t}(),h=function(t,e){return Object(s.a)(t)?90*t:9e4*e},f=d,c=r(1);function v(t,e){return 255===t[e]&&240==(246&t[e+1])}function g(t,e){return 1&t[e+1]?7:9}function p(t,e){return(3&t[e+3])<<11|t[e+4]<<3|(224&t[e+5])>>>5}function m(t,e){return e+1<t.length&&v(t,e)}function y(t,e){if(m(t,e)){var r=g(t,e);if(e+r>=t.length)return!1;var i=p(t,e);if(i<=r)return!1;var a=e+i;return a===t.length||m(t,a)}return!1}function b(t,e,r,n,s){if(!t.samplerate){var o=function(t,e,r,n){var s,o,l,u,d=navigator.userAgent.toLowerCase(),h=n,f=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];s=1+((192&e[r+2])>>>6);var v=(60&e[r+2])>>>2;if(!(v>f.length-1))return l=(1&e[r+2])<<2,l|=(192&e[r+3])>>>6,c.b.log("manifest codec:"+n+",ADTS data:type:"+s+",sampleingIndex:"+v+"["+f[v]+"Hz],channelConfig:"+l),/firefox/i.test(d)?v>=6?(s=5,u=new Array(4),o=v-3):(s=2,u=new Array(2),o=v):-1!==d.indexOf("android")?(s=2,u=new Array(2),o=v):(s=5,u=new Array(4),n&&(-1!==n.indexOf("mp4a.40.29")||-1!==n.indexOf("mp4a.40.5"))||!n&&v>=6?o=v-3:((n&&-1!==n.indexOf("mp4a.40.2")&&(v>=6&&1===l||/vivaldi/i.test(d))||!n&&1===l)&&(s=2,u=new Array(2)),o=v)),u[0]=s<<3,u[0]|=(14&v)>>1,u[1]|=(1&v)<<7,u[1]|=l<<3,5===s&&(u[1]|=(14&o)>>1,u[2]=(1&o)<<7,u[2]|=8,u[3]=0),{config:u,samplerate:f[v],channelCount:l,codec:"mp4a.40."+s,manifestCodec:h};t.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+v})}(e,r,n,s);if(!o)return;t.config=o.config,t.samplerate=o.samplerate,t.channelCount=o.channelCount,t.codec=o.codec,t.manifestCodec=o.manifestCodec,c.b.log("parsed codec:"+t.codec+",rate:"+o.samplerate+",nb channel:"+o.channelCount)}}function T(t){return 9216e4/t}function E(t,e,r,i,a){var n=function(t,e,r,i,a){var n=t.length,s=g(t,e),o=p(t,e);if((o-=s)>0&&e+s+o<=n)return{headerLength:s,frameLength:o,stamp:r+i*a}}(e,r,i,a,T(t.samplerate));if(n){var s=n.stamp,o=n.headerLength,l=n.frameLength,u={unit:e.subarray(r+o,r+o+l),pts:s,dts:s};return t.samples.push(u),{sample:u,length:l+o}}}var S=function(t){var e,r;function i(e,r){var i;return(i=t.call(this)||this).observer=void 0,i.config=void 0,i.observer=e,i.config=r,i}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var a=i.prototype;return a.resetInitSegment=function(e,r,i){t.prototype.resetInitSegment.call(this,e,r,i),this._audioTrack={container:"audio/adts",type:"audio",id:0,pid:-1,sequenceNumber:0,isAAC:!0,samples:[],manifestCodec:e,duration:i,inputTimeScale:9e4,dropped:0}},i.probe=function(t){if(!t)return!1;for(var e=(o.b(t,0)||[]).length,r=t.length;e<r;e++)if(y(t,e))return c.b.log("ADTS sync word found !"),!0;return!1},a.canParse=function(t,e){return function(t,e){return function(t,e){return e+5<t.length}(t,e)&&v(t,e)&&p(t,e)<t.length-e}(t,e)},a.appendFrame=function(t,e,r){return b(t,this.observer,e,r,t.manifestCodec),E(t,e,r,this.initPTS,this.frameIndex)},i}(f);S.minProbeByteLength=9;var L=S,A=function(){function t(t,e){this.remainderData=null,this.config=void 0,this.config=e}var e=t.prototype;return e.resetTimeStamp=function(){},e.resetInitSegment=function(){},e.resetContiguity=function(){},t.probe=function(t){return Object(l.b)({data:t,start:0,end:Math.min(t.length,16384)},["moof"]).length>0},e.demux=function(t){var e=t,r={type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0};if(this.config.progressive){this.remainderData&&(e=Object(l.a)(this.remainderData,t));var i=Object(l.h)(e);this.remainderData=i.remainder,r.samples=i.valid||new Uint8Array}else r.samples=e;return{audioTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},avcTrack:r,id3Track:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},textTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0}}},e.flush=function(){var t={type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0};return t.samples=this.remainderData||new Uint8Array,this.remainderData=null,{audioTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},avcTrack:t,id3Track:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0},textTrack:{type:"",id:-1,pid:-1,inputTimeScale:9e4,sequenceNumber:-1,samples:[],dropped:0}}},e.demuxSampleAes=function(t,e,r){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))},e.destroy=function(){},t}();A.minProbeByteLength=1024;var R=A,D=null,_=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],k=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],x=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],w=[0,1,1,4];function C(t,e,r,i,a){if(!(r+24>e.length)){var n=O(e,r);if(n&&r+n.frameLength<=e.length){var s=i+a*(9e4*n.samplesPerFrame/n.sampleRate),o={unit:e.subarray(r,r+n.frameLength),pts:s,dts:s};return t.config=[],t.channelCount=n.channelCount,t.samplerate=n.sampleRate,t.samples.push(o),{sample:o,length:n.frameLength}}}}function O(t,e){var r=t[e+1]>>3&3,i=t[e+1]>>1&3,a=t[e+2]>>4&15,n=t[e+2]>>2&3;if(1!==r&&0!==a&&15!==a&&3!==n){var s=t[e+2]>>1&1,o=t[e+3]>>6,l=1e3*_[14*(3===r?3-i:3===i?3:4)+a-1],u=k[3*(3===r?0:2===r?1:2)+n],d=3===o?1:2,h=x[r][i],f=w[i],c=8*h*f,v=Math.floor(h*l/u+s)*f;if(null===D){var g=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);D=g?parseInt(g[1]):0}return!!D&&D<=87&&2===i&&l>=224e3&&0===o&&(t[e+3]=128|t[e+3]),{sampleRate:u,channelCount:d,frameLength:v,samplesPerFrame:c}}}function I(t,e){return 255===t[e]&&224==(224&t[e+1])&&0!=(6&t[e+1])}function P(t,e){return e+1<t.length&&I(t,e)}function F(t,e){if(e+1<t.length&&I(t,e)){var r=O(t,e),i=4;null!=r&&r.frameLength&&(i=r.frameLength);var a=e+i;return a===t.length||P(t,a)}return!1}var M=function(){function t(t){this.data=t,this.bytesAvailable=t.byteLength,this.word=0,this.bitsAvailable=0}var e=t.prototype;return e.loadWord=function(){var t=this.data,e=this.bytesAvailable,r=t.byteLength-e,i=new Uint8Array(4),a=Math.min(4,e);if(0===a)throw new Error("no bytes available");i.set(t.subarray(r,r+a)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=8*a,this.bytesAvailable-=a},e.skipBits=function(t){var e;this.bitsAvailable>t?(this.word<<=t,this.bitsAvailable-=t):(t-=this.bitsAvailable,t-=(e=t>>3)>>3,this.bytesAvailable-=e,this.loadWord(),this.word<<=t,this.bitsAvailable-=t)},e.readBits=function(t){var e=Math.min(this.bitsAvailable,t),r=this.word>>>32-e;return t>32&&c.b.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=e,this.bitsAvailable>0?this.word<<=e:this.bytesAvailable>0&&this.loadWord(),(e=t-e)>0&&this.bitsAvailable?r<<e|this.readBits(e):r},e.skipLZ=function(){var t;for(t=0;t<this.bitsAvailable;++t)if(0!=(this.word&2147483648>>>t))return this.word<<=t,this.bitsAvailable-=t,t;return this.loadWord(),t+this.skipLZ()},e.skipUEG=function(){this.skipBits(1+this.skipLZ())},e.skipEG=function(){this.skipBits(1+this.skipLZ())},e.readUEG=function(){var t=this.skipLZ();return this.readBits(t+1)-1},e.readEG=function(){var t=this.readUEG();return 1&t?1+t>>>1:-1*(t>>>1)},e.readBoolean=function(){return 1===this.readBits(1)},e.readUByte=function(){return this.readBits(8)},e.readUShort=function(){return this.readBits(16)},e.readUInt=function(){return this.readBits(32)},e.skipScalingList=function(t){for(var e=8,r=8,i=0;i<t;i++)0!==r&&(r=(e+this.readEG()+256)%256),e=0===r?e:r},e.readSPS=function(){var t,e,r,i=0,a=0,n=0,s=0,o=this.readUByte.bind(this),l=this.readBits.bind(this),u=this.readUEG.bind(this),d=this.readBoolean.bind(this),h=this.skipBits.bind(this),f=this.skipEG.bind(this),c=this.skipUEG.bind(this),v=this.skipScalingList.bind(this);o();var g=o();if(l(5),h(3),o(),c(),100===g||110===g||122===g||244===g||44===g||83===g||86===g||118===g||128===g){var p=u();if(3===p&&h(1),c(),c(),h(1),d())for(e=3!==p?8:12,r=0;r<e;r++)d()&&v(r<6?16:64)}c();var m=u();if(0===m)u();else if(1===m)for(h(1),f(),f(),t=u(),r=0;r<t;r++)f();c(),h(1);var y=u(),b=u(),T=l(1);0===T&&h(1),h(1),d()&&(i=u(),a=u(),n=u(),s=u());var E=[1,1];if(d()&&d())switch(o()){case 1:E=[1,1];break;case 2:E=[12,11];break;case 3:E=[10,11];break;case 4:E=[16,11];break;case 5:E=[40,33];break;case 6:E=[24,11];break;case 7:E=[20,11];break;case 8:E=[32,11];break;case 9:E=[80,33];break;case 10:E=[18,11];break;case 11:E=[15,11];break;case 12:E=[64,33];break;case 13:E=[160,99];break;case 14:E=[4,3];break;case 15:E=[3,2];break;case 16:E=[2,1];break;case 255:E=[o()<<8|o(),o()<<8|o()]}return{width:Math.ceil(16*(y+1)-2*i-2*a),height:(2-T)*(b+1)*16-(T?2:4)*(n+s),pixelRatio:E}},e.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},t}(),N=function(){function t(t,e,r,i){this.decryptdata=r,this.discardEPB=i,this.decrypter=new n.a(t,e,{removePKCS7Padding:!1})}var e=t.prototype;return e.decryptBuffer=function(t,e){this.decrypter.decrypt(t,this.decryptdata.key.buffer,this.decryptdata.iv.buffer,e)},e.decryptAacSample=function(t,e,r,i){var a=t[e].unit,n=a.subarray(16,a.length-a.length%16),s=n.buffer.slice(n.byteOffset,n.byteOffset+n.length),o=this;this.decryptBuffer(s,(function(n){n=new Uint8Array(n),a.set(n,16),i||o.decryptAacSamples(t,e+1,r)}))},e.decryptAacSamples=function(t,e,r){for(;;e++){if(e>=t.length)return void r();if(!(t[e].unit.length<32)){var i=this.decrypter.isSync();if(this.decryptAacSample(t,e,r,i),!i)return}}},e.getAvcEncryptedData=function(t){for(var e=16*Math.floor((t.length-48)/160)+16,r=new Int8Array(e),i=0,a=32;a<=t.length-16;a+=160,i+=16)r.set(t.subarray(a,a+16),i);return r},e.getAvcDecryptedUnit=function(t,e){e=new Uint8Array(e);for(var r=0,i=32;i<=t.length-16;i+=160,r+=16)t.set(e.subarray(r,r+16),i);return t},e.decryptAvcSample=function(t,e,r,i,a,n){var s=this.discardEPB(a.data),o=this.getAvcEncryptedData(s),l=this;this.decryptBuffer(o.buffer,(function(o){a.data=l.getAvcDecryptedUnit(s,o),n||l.decryptAvcSamples(t,e,r+1,i)}))},e.decryptAvcSamples=function(t,e,r,i){for(;;e++,r=0){if(e>=t.length)return void i();for(var a=t[e].units;!(r>=a.length);r++){var n=a[r];if(!(n.data.length<=48||1!==n.type&&5!==n.type)){var s=this.decrypter.isSync();if(this.decryptAvcSample(t,e,r,i,n,s),!s)return}}}},t}(),U={video:1,audio:2,id3:3,text:4},B=function(){function t(t,e,r){this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.contiguous=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._duration=0,this.aacLastPTS=null,this._initPTS=null,this._initDTS=null,this._pmtId=-1,this._avcTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.avcSample=null,this.remainderData=null,this.observer=t,this.config=e,this.typeSupported=r}t.probe=function(e){var r=t._syncOffset(e);return!(r<0)&&(r&&c.b.warn("MPEG2-TS detected but first sync word found @ offset "+r+", junk ahead ?"),!0)},t._syncOffset=function(t){for(var e=Math.min(1e3,t.length-564),r=0;r<e;){if(71===t[r]&&71===t[r+188]&&71===t[r+376])return r;r++}return-1},t.createTrack=function(t,e){return{container:"video"===t||"audio"===t?"video/mp2t":void 0,type:t,id:U[t],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:"audio"===t?e:void 0}};var e=t.prototype;return e.resetInitSegment=function(e,r,i){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack=t.createTrack("video",i),this._audioTrack=t.createTrack("audio",i),this._id3Track=t.createTrack("id3",i),this._txtTrack=t.createTrack("text",i),this._audioTrack.isAAC=!0,this.aacOverFlow=null,this.aacLastPTS=null,this.avcSample=null,this.audioCodec=e,this.videoCodec=r,this._duration=i},e.resetTimeStamp=function(){},e.resetContiguity=function(){var t=this._audioTrack,e=this._avcTrack,r=this._id3Track;t&&(t.pesData=null),e&&(e.pesData=null),r&&(r.pesData=null),this.aacOverFlow=null,this.aacLastPTS=null},e.demux=function(e,r,n,s){var o,u,d,h,f;void 0===n&&(n=!1),void 0===s&&(s=!1),n||(this.sampleAes=null);var v=this._avcTrack,g=this._audioTrack,p=this._id3Track,m=v.pid,y=v.pesData,b=g.pid,T=p.pid,E=g.pesData,S=p.pesData,L=!1,A=this.pmtParsed,R=this._pmtId,D=e.length;if(this.remainderData&&(D=(e=Object(l.a)(this.remainderData,e)).length,this.remainderData=null),D<188&&!s)return this.remainderData=e,{audioTrack:g,avcTrack:v,id3Track:p,textTrack:this._txtTrack};var _=Math.max(0,t._syncOffset(e));for((D-=(D+_)%188)<e.byteLength&&!s&&(this.remainderData=new Uint8Array(e.buffer,D,e.buffer.byteLength-D)),o=_;o<D;o+=188)if(71===e[o]){if(u=!!(64&e[o+1]),d=((31&e[o+1])<<8)+e[o+2],(48&e[o+3])>>4>1){if((h=o+5+e[o+4])===o+188)continue}else h=o+4;switch(d){case m:u&&(y&&(f=K(y))&&this._parseAVCPES(f,!1),y={data:[],size:0}),y&&(y.data.push(e.subarray(h,o+188)),y.size+=o+188-h);break;case b:u&&(E&&(f=K(E))&&(g.isAAC?this._parseAACPES(f):this._parseMPEGPES(f)),E={data:[],size:0}),E&&(E.data.push(e.subarray(h,o+188)),E.size+=o+188-h);break;case T:u&&(S&&(f=K(S))&&this._parseID3PES(f),S={data:[],size:0}),S&&(S.data.push(e.subarray(h,o+188)),S.size+=o+188-h);break;case 0:u&&(h+=e[h]+1),R=this._pmtId=j(e,h);break;case R:u&&(h+=e[h]+1);var k=H(e,h,!0===this.typeSupported.mpeg||!0===this.typeSupported.mp3,n);(m=k.avc)>0&&(v.pid=m),(b=k.audio)>0&&(g.pid=b,g.isAAC=k.isAAC),(T=k.id3)>0&&(p.pid=T),L&&!A&&(c.b.log("reparse from beginning"),L=!1,o=_-188),A=this.pmtParsed=!0;break;case 17:case 8191:break;default:L=!0}}else this.observer.emit(i.a.ERROR,i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!1,reason:"TS packet did not start with 0x47"});return v.pesData=y,g.pesData=E,p.pesData=S,{audioTrack:g,avcTrack:v,id3Track:p,textTrack:this._txtTrack}},e.flush=function(){var t,e=this.remainderData;return this.remainderData=null,t=e?this.demux(e,-1,!1,!0):{audioTrack:this._audioTrack,avcTrack:this._avcTrack,textTrack:this._txtTrack,id3Track:this._id3Track},this.extractRemainingSamples(t),t},e.extractRemainingSamples=function(t){var e,r=t.audioTrack,i=t.avcTrack,a=t.id3Track,n=i.pesData,s=r.pesData,o=a.pesData;n&&(e=K(n))?(this._parseAVCPES(e,!0),i.pesData=null):i.pesData=n,s&&(e=K(s))?(r.isAAC?this._parseAACPES(e):this._parseMPEGPES(e),r.pesData=null):(null!=s&&s.size&&c.b.log("last AAC PES packet truncated,might overlap between fragments"),r.pesData=s),o&&(e=K(o))?(this._parseID3PES(e),a.pesData=null):a.pesData=o},e.demuxSampleAes=function(t,e,r){var i=this,a=this.demux(t,r,!0),n=this.sampleAes=new N(this.observer,this.config,e,this.discardEPB);return new Promise((function(t,e){i.decrypt(a.audioTrack,a.avcTrack,n).then((function(){t(a)}))}))},e.decrypt=function(t,e,r){return new Promise((function(i){t.samples&&t.isAAC?r.decryptAacSamples(t.samples,0,(function(){e.samples?r.decryptAvcSamples(e.samples,0,0,(function(){i()})):i()})):e.samples&&r.decryptAvcSamples(e.samples,0,0,(function(){i()}))}))},e.destroy=function(){this._initPTS=this._initDTS=null,this._duration=0},e.pushAccessUnit=function(t,e){if(t.units.length&&t.frame){if(isNaN(t.pts)){var r=e.samples,i=r.length;if(!i)return void e.dropped++;var a=r[i-1];t.pts=a.pts,t.dts=a.dts}e.samples.push(t)}t.debug.length&&c.b.log(t.pts+"/"+t.dts+":"+t.debug)},e._parseAVCPES=function(t,e){var r,i,a,n=this,s=this._avcTrack,l=this._parseAVCNALu(t.data),u=this.avcSample,d=!1,h=this.pushAccessUnit.bind(this);t.data=null,u&&l.length&&!s.audFound&&(h(u,s),u=this.avcSample=G(!1,t.pts,t.dts,"")),l.forEach((function(e){switch(e.type){case 1:i=!0,u||(u=n.avcSample=G(!0,t.pts,t.dts,"")),u.frame=!0;var l=e.data;if(d&&l.length>4){var f=new M(l).readSliceType();2!==f&&4!==f&&7!==f&&9!==f||(u.key=!0)}break;case 5:i=!0,u||(u=n.avcSample=G(!0,t.pts,t.dts,"")),u.key=!0,u.frame=!0;break;case 6:i=!0,(r=new M(n.discardEPB(e.data))).readUByte();for(var c=0,v=0,g=!1,p=0;!g&&r.bytesAvailable>1;){c=0;do{c+=p=r.readUByte()}while(255===p);v=0;do{v+=p=r.readUByte()}while(255===p);if(4===c&&0!==r.bytesAvailable){if(g=!0,181===r.readUByte())if(49===r.readUShort())if(1195456820===r.readUInt())if(3===r.readUByte()){var m=r.readUByte(),y=31&m,b=[m,r.readUByte()];for(a=0;a<y;a++)b.push(r.readUByte()),b.push(r.readUByte()),b.push(r.readUByte());n._insertSampleInOrder(n._txtTrack.samples,{type:3,pts:t.pts,bytes:b})}}else if(5===c&&0!==r.bytesAvailable){if(g=!0,v>16){var T=[];for(a=0;a<16;a++)T.push(r.readUByte().toString(16)),3!==a&&5!==a&&7!==a&&9!==a||T.push("-");var E=v-16,S=new Uint8Array(E);for(a=0;a<E;a++)S[a]=r.readUByte();n._insertSampleInOrder(n._txtTrack.samples,{pts:t.pts,payloadType:c,uuid:T.join(""),userData:Object(o.f)(S),userDataBytes:S})}}else if(v<r.bytesAvailable)for(a=0;a<v;a++)r.readUByte()}break;case 7:if(i=!0,d=!0,!s.sps){var L=(r=new M(e.data)).readSPS();s.width=L.width,s.height=L.height,s.pixelRatio=L.pixelRatio,s.sps=[e.data],s.duration=n._duration;var A=e.data.subarray(1,4),R="avc1.";for(a=0;a<3;a++){var D=A[a].toString(16);D.length<2&&(D="0"+D),R+=D}s.codec=R}break;case 8:i=!0,s.pps||(s.pps=[e.data]);break;case 9:i=!1,s.audFound=!0,u&&h(u,s),u=n.avcSample=G(!1,t.pts,t.dts,"");break;case 12:i=!1;break;default:i=!1,u&&(u.debug+="unknown NAL "+e.type+" ")}u&&i&&u.units.push(e)})),e&&u&&(h(u,s),this.avcSample=null)},e._insertSampleInOrder=function(t,e){var r=t.length;if(r>0){if(e.pts>=t[r-1].pts)t.push(e);else for(var i=r-1;i>=0;i--)if(e.pts<t[i].pts){t.splice(i,0,e);break}}else t.push(e)},e._getLastNalUnit=function(){var t,e,r=this.avcSample;if(!r||0===r.units.length){var i=this._avcTrack.samples;r=i[i.length-1]}if(null!==(t=r)&&void 0!==t&&t.units){var a=r.units;e=a[a.length-1]}return e},e._parseAVCNALu=function(t){var e,r,i,a,n=t.byteLength,s=this._avcTrack,o=s.naluState||0,l=o,u=[],d=0,h=-1;for(-1===o&&(h=0,a=31&t[0],o=0,d=1);d<n;)if(e=t[d++],o)if(1!==o)if(e)if(1===e){if(h>=0)i={data:t.subarray(h,d-o-1),type:a},u.push(i);else{var f=this._getLastNalUnit();if(f&&(l&&d<=4-l&&f.state&&(f.data=f.data.subarray(0,f.data.byteLength-l)),(r=d-o-1)>0)){var c=new Uint8Array(f.data.byteLength+r);c.set(f.data,0),c.set(t.subarray(0,r),f.data.byteLength),f.data=c}}d<n?(h=d,a=31&t[d],o=0):o=-1}else o=0;else o=3;else o=e?0:2;else o=e?0:1;if(h>=0&&o>=0&&(i={data:t.subarray(h,n),type:a,state:o},u.push(i)),0===u.length){var v=this._getLastNalUnit();if(v){var g=new Uint8Array(v.data.byteLength+t.byteLength);g.set(v.data,0),g.set(t,v.data.byteLength),v.data=g}}return s.naluState=o,u},e.discardEPB=function(t){for(var e=t.byteLength,r=[],i=1;i<e-2;)0===t[i]&&0===t[i+1]&&3===t[i+2]?(r.push(i+2),i+=2):i++;if(0===r.length)return t;var a=e-r.length,n=new Uint8Array(a),s=0;for(i=0;i<a;s++,i++)s===r[0]&&(s++,r.shift()),n[i]=t[s];return n},e._parseAACPES=function(t){var e,r,n,s,o,l,u=this._audioTrack,d=this.aacLastPTS,h=this.aacOverFlow,f=t.data,v=t.pts;if(h){var g=new Uint8Array(h.byteLength+f.byteLength);g.set(h,0),g.set(f,h.byteLength),f=g}for(r=0,s=f.length;r<s-1&&!m(f,r);r++);if(r&&(r<s-1?(o="AAC PES did not start with ADTS header,offset:"+r,l=!1):(o="no ADTS header found in AAC PES",l=!0),c.b.warn("parsing error:"+o),this.observer.emit(i.a.ERROR,i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:l,reason:o}),l))return;b(u,this.observer,f,r,this.audioCodec),e=0;var p=T(u.samplerate);if(h&&d){var y=d+p;Math.abs(y-v)>1&&(c.b.log("[tsdemuxer]: AAC: align PTS for overlapping frames by "+Math.round((y-v)/90)),v=y)}for(;r<s;){if(m(f,r)){if(r+5<s){var S=E(u,f,r,v,e);if(S){r+=S.length,n=S.sample.pts,e++;continue}}break}r++}h=r<s?f.subarray(r,s):null,this.aacOverFlow=h,this.aacLastPTS=n},e._parseMPEGPES=function(t){for(var e=t.data,r=e.length,i=0,a=0,n=t.pts;a<r;)if(P(e,a)){var s=C(this._audioTrack,e,a,n,i);if(!s)break;a+=s.length,i++}else a++},e._parseID3PES=function(t){this._id3Track.samples.push(t)},t}();function G(t,e,r,i){return{key:t,frame:!1,pts:e,dts:r,units:[],debug:i,length:0}}function j(t,e){return(31&t[e+10])<<8|t[e+11]}function H(t,e,r,i){var a={audio:-1,avc:-1,id3:-1,isAAC:!0},n=e+3+((15&t[e+1])<<8|t[e+2])-4;for(e+=12+((15&t[e+10])<<8|t[e+11]);e<n;){var s=(31&t[e+1])<<8|t[e+2];switch(t[e]){case 207:if(!i){c.b.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");break}case 15:-1===a.audio&&(a.audio=s);break;case 21:-1===a.id3&&(a.id3=s);break;case 219:if(!i){c.b.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");break}case 27:-1===a.avc&&(a.avc=s);break;case 3:case 4:r?-1===a.audio&&(a.audio=s,a.isAAC=!1):c.b.log("MPEG audio found, not supported in this browser");break;case 36:c.b.warn("Unsupported HEVC stream type found")}e+=5+((15&t[e+3])<<8|t[e+4])}return a}function K(t){var e,r,i,a,n,s,o,l,u=0,d=t.data;if(!t||0===t.size)return null;for(;d[0].length<19&&d.length>1;){var h=new Uint8Array(d[0].length+d[1].length);h.set(d[0]),h.set(d[1],d[0].length),d[0]=h,d.splice(1,1)}if(1===((e=d[0])[0]<<16)+(e[1]<<8)+e[2]){if((i=(e[4]<<8)+e[5])&&i>t.size-6)return null;if(192&(r=e[7])&&(s=536870912*(14&e[9])+4194304*(255&e[10])+16384*(254&e[11])+128*(255&e[12])+(254&e[13])/2,64&r?s-(o=536870912*(14&e[14])+4194304*(255&e[15])+16384*(254&e[16])+128*(255&e[17])+(254&e[18])/2)>54e5&&(c.b.warn(Math.round((s-o)/9e4)+"s delta between PTS and DTS, align them"),s=o):o=s),l=(a=e[8])+9,t.size<=l)return null;t.size-=l,n=new Uint8Array(t.size);for(var f=0,v=d.length;f<v;f++){var g=(e=d[f]).byteLength;if(l){if(l>g){l-=g;continue}e=e.subarray(l),g-=l,l=0}n.set(e,u),u+=g}return i&&(i-=a+3),{data:n,pts:s,dts:o,len:i}}return null}B.minProbeByteLength=188;var V=B;var W=function(t){var e,r;function i(){return t.apply(this,arguments)||this}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var a=i.prototype;return a.resetInitSegment=function(e,r,i){t.prototype.resetInitSegment.call(this,e,r,i),this._audioTrack={container:"audio/mpeg",type:"audio",id:0,pid:-1,sequenceNumber:0,isAAC:!1,samples:[],manifestCodec:e,duration:i,inputTimeScale:9e4,dropped:0}},i.probe=function(t){if(!t)return!1;for(var e=(o.b(t,0)||[]).length,r=t.length;e<r;e++)if(F(t,e))return c.b.log("MPEG Audio sync word found !"),!0;return!1},a.canParse=function(t,e){return function(t,e){return I(t,e)&&t.length-e>=4}(t,e)},a.appendFrame=function(t,e,r){if(null!==this.initPTS)return C(t,e,r,this.initPTS,this.frameIndex)},i}(f);W.minProbeByteLength=4;var Y=W,X=function(){function t(){}return t.getSilentFrame=function(t,e){switch(t){case"mp4a.40.2":if(1===e)return new Uint8Array([0,200,0,128,35,128]);if(2===e)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(1===e)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===e)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===e)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}},t}(),q=Math.pow(2,32)-1,z=function(){function t(){}return t.init=function(){var e;for(e in t.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]},t.types)t.types.hasOwnProperty(e)&&(t.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);var r=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),i=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);t.HDLR_TYPES={video:r,audio:i};var a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),n=new Uint8Array([0,0,0,0,0,0,0,0]);t.STTS=t.STSC=t.STCO=n,t.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),t.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),t.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),t.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var s=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);t.FTYP=t.box(t.types.ftyp,s,l,s,o),t.DINF=t.box(t.types.dinf,t.box(t.types.dref,a))},t.box=function(t){for(var e=8,r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];for(var n=i.length,s=n;n--;)e+=i[n].byteLength;var o=new Uint8Array(e);for(o[0]=e>>24&255,o[1]=e>>16&255,o[2]=e>>8&255,o[3]=255&e,o.set(t,4),n=0,e=8;n<s;n++)o.set(i[n],e),e+=i[n].byteLength;return o},t.hdlr=function(e){return t.box(t.types.hdlr,t.HDLR_TYPES[e])},t.mdat=function(e){return t.box(t.types.mdat,e)},t.mdhd=function(e,r){r*=e;var i=Math.floor(r/(q+1)),a=Math.floor(r%(q+1));return t.box(t.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24,i>>16&255,i>>8&255,255&i,a>>24,a>>16&255,a>>8&255,255&a,85,196,0,0]))},t.mdia=function(e){return t.box(t.types.mdia,t.mdhd(e.timescale,e.duration),t.hdlr(e.type),t.minf(e))},t.mfhd=function(e){return t.box(t.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,255&e]))},t.minf=function(e){return"audio"===e.type?t.box(t.types.minf,t.box(t.types.smhd,t.SMHD),t.DINF,t.stbl(e)):t.box(t.types.minf,t.box(t.types.vmhd,t.VMHD),t.DINF,t.stbl(e))},t.moof=function(e,r,i){return t.box(t.types.moof,t.mfhd(e),t.traf(i,r))},t.moov=function(e){for(var r=e.length,i=[];r--;)i[r]=t.trak(e[r]);return t.box.apply(null,[t.types.moov,t.mvhd(e[0].timescale,e[0].duration)].concat(i).concat(t.mvex(e)))},t.mvex=function(e){for(var r=e.length,i=[];r--;)i[r]=t.trex(e[r]);return t.box.apply(null,[t.types.mvex].concat(i))},t.mvhd=function(e,r){r*=e;var i=Math.floor(r/(q+1)),a=Math.floor(r%(q+1)),n=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24,i>>16&255,i>>8&255,255&i,a>>24,a>>16&255,a>>8&255,255&a,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return t.box(t.types.mvhd,n)},t.sdtp=function(e){var r,i,a=e.samples||[],n=new Uint8Array(4+a.length);for(r=0;r<a.length;r++)i=a[r].flags,n[r+4]=i.dependsOn<<4|i.isDependedOn<<2|i.hasRedundancy;return t.box(t.types.sdtp,n)},t.stbl=function(e){return t.box(t.types.stbl,t.stsd(e),t.box(t.types.stts,t.STTS),t.box(t.types.stsc,t.STSC),t.box(t.types.stsz,t.STSZ),t.box(t.types.stco,t.STCO))},t.avc1=function(e){var r,i,a,n=[],s=[];for(r=0;r<e.sps.length;r++)a=(i=e.sps[r]).byteLength,n.push(a>>>8&255),n.push(255&a),n=n.concat(Array.prototype.slice.call(i));for(r=0;r<e.pps.length;r++)a=(i=e.pps[r]).byteLength,s.push(a>>>8&255),s.push(255&a),s=s.concat(Array.prototype.slice.call(i));var o=t.box(t.types.avcC,new Uint8Array([1,n[3],n[4],n[5],255,224|e.sps.length].concat(n).concat([e.pps.length]).concat(s))),l=e.width,u=e.height,d=e.pixelRatio[0],h=e.pixelRatio[1];return t.box(t.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,255&l,u>>8&255,255&u,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o,t.box(t.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),t.box(t.types.pasp,new Uint8Array([d>>24,d>>16&255,d>>8&255,255&d,h>>24,h>>16&255,h>>8&255,255&h])))},t.esds=function(t){var e=t.config.length;return new Uint8Array([0,0,0,0,3,23+e,0,1,0,4,15+e,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([e]).concat(t.config).concat([6,1,2]))},t.mp4a=function(e){var r=e.samplerate;return t.box(t.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]),t.box(t.types.esds,t.esds(e)))},t.mp3=function(e){var r=e.samplerate;return t.box(t.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]))},t.stsd=function(e){return"audio"===e.type?e.isAAC||"mp3"!==e.codec?t.box(t.types.stsd,t.STSD,t.mp4a(e)):t.box(t.types.stsd,t.STSD,t.mp3(e)):t.box(t.types.stsd,t.STSD,t.avc1(e))},t.tkhd=function(e){var r=e.id,i=e.duration*e.timescale,a=e.width,n=e.height,s=Math.floor(i/(q+1)),o=Math.floor(i%(q+1));return t.box(t.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,r>>24&255,r>>16&255,r>>8&255,255&r,0,0,0,0,s>>24,s>>16&255,s>>8&255,255&s,o>>24,o>>16&255,o>>8&255,255&o,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,a>>8&255,255&a,0,0,n>>8&255,255&n,0,0]))},t.traf=function(e,r){var i=t.sdtp(e),a=e.id,n=Math.floor(r/(q+1)),s=Math.floor(r%(q+1));return t.box(t.types.traf,t.box(t.types.tfhd,new Uint8Array([0,0,0,0,a>>24,a>>16&255,a>>8&255,255&a])),t.box(t.types.tfdt,new Uint8Array([1,0,0,0,n>>24,n>>16&255,n>>8&255,255&n,s>>24,s>>16&255,s>>8&255,255&s])),t.trun(e,i.length+16+20+8+16+8+8),i)},t.trak=function(e){return e.duration=e.duration||4294967295,t.box(t.types.trak,t.tkhd(e),t.mdia(e))},t.trex=function(e){var r=e.id;return t.box(t.types.trex,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},t.trun=function(e,r){var i,a,n,s,o,l,u=e.samples||[],d=u.length,h=12+16*d,f=new Uint8Array(h);for(r+=8+h,f.set([0,0,15,1,d>>>24&255,d>>>16&255,d>>>8&255,255&d,r>>>24&255,r>>>16&255,r>>>8&255,255&r],0),i=0;i<d;i++)n=(a=u[i]).duration,s=a.size,o=a.flags,l=a.cts,f.set([n>>>24&255,n>>>16&255,n>>>8&255,255&n,s>>>24&255,s>>>16&255,s>>>8&255,255&s,o.isLeading<<2|o.dependsOn,o.isDependedOn<<6|o.hasRedundancy<<4|o.paddingValue<<1|o.isNonSync,61440&o.degradPrio,15&o.degradPrio,l>>>24&255,l>>>16&255,l>>>8&255,255&l],12+16*i);return t.box(t.types.trun,f)},t.initSegment=function(e){t.types||t.init();var r=t.moov(e),i=new Uint8Array(t.FTYP.byteLength+r.byteLength);return i.set(t.FTYP),i.set(r,t.FTYP.byteLength),i},t}();z.types=void 0,z.HDLR_TYPES=void 0,z.STTS=void 0,z.STSC=void 0,z.STCO=void 0,z.STSZ=void 0,z.VMHD=void 0,z.SMHD=void 0,z.STSD=void 0,z.FTYP=void 0,z.DINF=void 0;var Q=z;function Z(t,e,r,i){void 0===r&&(r=1),void 0===i&&(i=!1);var a=t*e*r;return i?Math.round(a):a}function $(t,e){return void 0===e&&(e=!1),Z(t,1e3,1/9e4,e)}function J(){return(J=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}var tt=null,et=null,rt=!1,it=function(){function t(t,e,r,i){if(void 0===i&&(i=""),this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=void 0,this._initDTS=void 0,this.nextAvcDts=null,this.nextAudioPts=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.observer=t,this.config=e,this.typeSupported=r,this.ISGenerated=!1,null===tt){var a=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);tt=a?parseInt(a[1]):0}if(null===et){var n=navigator.userAgent.match(/Safari\/(\d+)/i);et=n?parseInt(n[1]):0}rt=!!tt&&tt<75||!!et&&et<600}var e=t.prototype;return e.destroy=function(){},e.resetTimeStamp=function(t){c.b.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=t},e.resetNextTimestamp=function(){c.b.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1},e.resetInitSegment=function(){c.b.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1},e.getVideoStartPts=function(t){var e=!1,r=t.reduce((function(t,r){var i=r.pts-t;return i<-4294967296?(e=!0,at(t,r.pts)):i>0?t:r.pts}),t[0].pts);return e&&c.b.debug("PTS rollover detected"),r},e.remux=function(t,e,r,i,a,n,s){var o,l,u,d,h,f,v=a,g=a,p=t.pid>-1,m=e.pid>-1,y=t.samples.length>0,b=e.samples.length>1;if((!p||y)&&(!m||b)||this.ISGenerated||s){this.ISGenerated||(u=this.generateIS(t,e,a));var T=this.isVideoContiguous;if(b&&!T&&this.config.forceKeyFrameOnDiscontinuity){var E=e.samples.length,S=function(t){for(var e=0;e<t.length;e++)if(t[e].key)return e;return-1}(e.samples);if(f=!0,S>0){c.b.warn("[mp4-remuxer]: Dropped "+S+" out of "+E+" video samples due to a missing keyframe");var L=this.getVideoStartPts(e.samples);e.samples=e.samples.slice(S),e.dropped+=S,g+=(e.samples[0].pts-L)/(e.timescale||9e4)}else-1===S&&(c.b.warn("[mp4-remuxer]: No keyframe found out of "+E+" video samples"),f=!1)}if(this.ISGenerated){if(y&&b){var A=this.getVideoStartPts(e.samples),R=(at(t.samples[0].pts,A)-A)/e.inputTimeScale;v+=Math.max(0,R),g+=Math.max(0,-R)}if(y){if(t.samplerate||(c.b.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),delete(u=this.generateIS(t,e,a)).video),l=this.remuxAudio(t,v,this.isAudioContiguous,n,b?g:void 0),b){var D=l?l.endPTS-l.startPTS:0;e.inputTimeScale||(c.b.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),u=this.generateIS(t,e,a)),o=this.remuxVideo(e,g,T,D)}}else b&&(o=this.remuxVideo(e,g,T,0));o&&void 0!==f&&(o.independent=f)}}return this.ISGenerated&&(r.samples.length&&(h=this.remuxID3(r,a)),i.samples.length&&(d=this.remuxText(i,a))),{audio:l,video:o,initSegment:u,independent:f,text:d,id3:h}},e.generateIS=function(t,e,r){var i,a,n,o=t.samples,l=e.samples,u=this.typeSupported,d={},h=!Object(s.a)(this._initPTS),f="audio/mp4";if(h&&(i=a=1/0),t.config&&o.length&&(t.timescale=t.samplerate,c.b.log("[mp4-remuxer]: audio sampling rate : "+t.samplerate),t.isAAC||(u.mpeg?(f="audio/mpeg",t.codec=""):u.mp3&&(t.codec="mp3")),d.audio={id:"audio",container:f,codec:t.codec,initSegment:!t.isAAC&&u.mpeg?new Uint8Array(0):Q.initSegment([t]),metadata:{channelCount:t.channelCount}},h&&(n=t.inputTimeScale,i=a=o[0].pts-Math.round(n*r))),e.sps&&e.pps&&l.length&&(e.timescale=e.inputTimeScale,d.video={id:"main",container:"video/mp4",codec:e.codec,initSegment:Q.initSegment([e]),metadata:{width:e.width,height:e.height}},h)){n=e.inputTimeScale;var v=this.getVideoStartPts(l),g=Math.round(n*r);a=Math.min(a,at(l[0].dts,v)-g),i=Math.min(i,v-g)}if(Object.keys(d).length)return this.ISGenerated=!0,h&&(this._initPTS=i,this._initDTS=a),{tracks:d,initPTS:i,timescale:n}},e.remuxVideo=function(t,e,r,n){var s,o,l,u=t.inputTimeScale,d=t.samples,h=[],f=d.length,v=this._initPTS,g=this.nextAvcDts,p=8,m=Number.POSITIVE_INFINITY,y=Number.NEGATIVE_INFINITY,b=0,T=!1;r&&null!==g||(g=e*u-(d[0].pts-at(d[0].dts,d[0].pts)));for(var E=0;E<f;E++){var S=d[E];if(S.pts=at(S.pts-v,g),S.dts=at(S.dts-v,g),S.dts>S.pts){b=Math.max(Math.min(b,S.pts-S.dts),-18e3)}S.dts<d[E>0?E-1:E].dts&&(T=!0)}T&&d.sort((function(t,e){var r=t.dts-e.dts,i=t.pts-e.pts;return r||i})),o=d[0].dts,l=d[d.length-1].dts;var L=Math.round((l-o)/(f-1));if(b<0){if(b<-2*L){c.b.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by "+$(-L,!0)+" ms");for(var A=b,R=0;R<f;R++)d[R].dts=A=Math.max(A,d[R].pts-L),d[R].pts=Math.max(A,d[R].pts)}else{c.b.warn("PTS < DTS detected in video samples, shifting DTS by "+$(b,!0)+" ms to overcome this issue");for(var D=0;D<f;D++)d[D].dts=d[D].dts+b}o=d[0].dts,l=d[f-1].dts}if(r){var _=o-g,k=_>L;if(k||_<-1){k?c.b.warn("AVC: "+$(_,!0)+" ms ("+_+"dts) hole between fragments detected, filling it"):c.b.warn("AVC: "+$(-_,!0)+" ms ("+_+"dts) overlapping between fragments detected"),o=g;var x=d[0].pts-_;d[0].dts=o,d[0].pts=x,c.b.log("Video: First PTS/DTS adjusted: "+$(x,!0)+"/"+$(o,!0)+", delta: "+$(_,!0)+" ms")}}rt&&(o=Math.max(0,o));for(var w=0,C=0,O=0;O<f;O++){for(var I=d[O],P=I.units,F=P.length,M=0,N=0;N<F;N++)M+=P[N].data.length;C+=M,w+=F,I.length=M,I.dts=Math.max(I.dts,o),I.pts=Math.max(I.pts,I.dts,0),m=Math.min(I.pts,m),y=Math.max(I.pts,y)}l=d[f-1].dts;var U,B=C+4*w+8;try{U=new Uint8Array(B)}catch(t){return void this.observer.emit(i.a.ERROR,i.a.ERROR,{type:a.b.MUX_ERROR,details:a.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:B,reason:"fail allocating video mdat "+B})}var G=new DataView(U.buffer);G.setUint32(0,B),U.set(Q.types.mdat,4);for(var j=0;j<f;j++){for(var H=d[j],K=H.units,V=0,W=0,Y=K.length;W<Y;W++){var X=K[W],q=X.data,z=X.data.byteLength;G.setUint32(p,z),p+=4,U.set(q,p),p+=z,V+=4+z}if(j<f-1)s=d[j+1].dts-H.dts;else{var Z=this.config,et=H.dts-d[j>0?j-1:j].dts;if(Z.stretchShortVideoTrack&&null!==this.nextAudioPts){var it=Math.floor(Z.maxBufferHole*u),nt=(n?m+n*u:this.nextAudioPts)-H.pts;nt>it?((s=nt-et)<0&&(s=et),c.b.log("[mp4-remuxer]: It is approximately "+nt/90+" ms to the next segment; using duration "+s/90+" ms for the last video frame.")):s=et}else s=et}var ot=Math.round(H.pts-H.dts);h.push(new st(H.key,s,V,ot))}if(h.length&&tt&&tt<70){var lt=h[0].flags;lt.dependsOn=2,lt.isNonSync=0}this.nextAvcDts=g=l+s,this.isVideoContiguous=!0;var ut={data1:Q.moof(t.sequenceNumber++,o,J({},t,{samples:h})),data2:U,startPTS:m/u,endPTS:(y+s)/u,startDTS:o/u,endDTS:g/u,type:"video",hasAudio:!1,hasVideo:!0,nb:h.length,dropped:t.dropped};return t.samples=[],t.dropped=0,ut},e.remuxAudio=function(t,e,r,n,s){var o,l=t.inputTimeScale,u=l/(t.samplerate?t.samplerate:l),d=t.isAAC?1024:1152,h=d*u,f=this._initPTS,v=!t.isAAC&&this.typeSupported.mpeg,g=[],p=t.samples,m=v?0:8,y=this.nextAudioPts||-1,b=e*l;if(this.isAudioContiguous=r=r||p.length&&y>0&&(n&&Math.abs(b-y)<9e3||Math.abs(at(p[0].pts-f,b)-y)<20*h),p.forEach((function(t){t.pts=t.dts=at(t.pts-f,b)})),!r||y<0){if(!(p=p.filter((function(t){return t.pts>=0}))).length)return;y=0===s?0:n?Math.max(0,b):p[0].pts}if(t.isAAC)for(var T=this.config.maxAudioFramesDrift,E=0,S=y;E<p.length;){var L=p[E],A=L.pts,R=A-S,D=Math.abs(1e3*R/l);if(R<=-T*h&&void 0!==s)r||E>0?(c.b.warn("[mp4-remuxer]: Dropping 1 audio frame @ "+(S/l).toFixed(3)+"s due to "+Math.round(D)+" ms overlap."),p.splice(E,1)):(c.b.warn("Audio frame @ "+(A/l).toFixed(3)+"s overlaps nextAudioPts by "+Math.round(1e3*R/l)+" ms."),S=A+h,E++);else if(R>=T*h&&D<1e4&&void 0!==s){var _=Math.floor(R/h);S=A-_*h,c.b.warn("[mp4-remuxer]: Injecting "+_+" audio frame @ "+(S/l).toFixed(3)+"s due to "+Math.round(1e3*R/l)+" ms gap.");for(var k=0;k<_;k++){var x=Math.max(S,0);(o=X.getSilentFrame(t.manifestCodec||t.codec,t.channelCount))||(c.b.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),o=L.unit.subarray()),p.splice(E,0,{unit:o,pts:x,dts:x}),S+=h,E++}L.pts=L.dts=S,S+=h,E++}else L.pts=L.dts=S,S+=h,E++}for(var w,C=null,O=null,I=0,P=p.length;P--;)I+=p[P].unit.byteLength;for(var F=0,M=p.length;F<M;F++){var N=p[F],U=N.unit,B=N.pts;if(null!==O){g[F-1].duration=Math.round((B-O)/u)}else{var G=Math.round(1e3*(B-y)/l),j=0;if(r&&t.isAAC){if(G>0&&G<1e4)j=Math.round((B-y)/h),c.b.log("[mp4-remuxer]: "+G+" ms hole between AAC samples detected,filling it"),j>0&&((o=X.getSilentFrame(t.manifestCodec||t.codec,t.channelCount))||(o=U.subarray()),I+=j*o.length);else if(G<-12){c.b.log("[mp4-remuxer]: drop overlapping AAC sample, expected/parsed/delta:"+(y/l).toFixed(3)+"s/"+(B/l).toFixed(3)+"s/"+-G+"ms"),I-=U.byteLength;continue}B=y}if(C=B,!(I>0))return;I+=m;try{w=new Uint8Array(I)}catch(t){return void this.observer.emit(i.a.ERROR,i.a.ERROR,{type:a.b.MUX_ERROR,details:a.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:I,reason:"fail allocating audio mdat "+I})}v||(new DataView(w.buffer).setUint32(0,I),w.set(Q.types.mdat,4));for(var H=0;H<j;H++)(o=X.getSilentFrame(t.manifestCodec||t.codec,t.channelCount))||(c.b.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating the current frame instead"),o=U.subarray()),w.set(o,m),m+=o.byteLength,g.push(new st(!0,1024,o.byteLength,0))}w.set(U,m);var K=U.byteLength;m+=K,g.push(new st(!0,d,K,0)),O=B}var V=g.length;if(V){var W=g[g.length-1];this.nextAudioPts=y=O+u*W.duration;var Y=v?new Uint8Array(0):Q.moof(t.sequenceNumber++,C/u,J({},t,{samples:g}));t.samples=[];var q=C/l,z=y/l;return{data1:Y,data2:w,startPTS:q,endPTS:z,startDTS:q,endDTS:z,type:"audio",hasAudio:!0,hasVideo:!1,nb:V}}},e.remuxEmptyAudio=function(t,e,r,i){var a=t.inputTimeScale,n=a/(t.samplerate?t.samplerate:a),s=this.nextAudioPts,o=(null!==s?s:i.startDTS*a)+this._initDTS,l=i.endDTS*a+this._initDTS,u=1024*n,d=Math.ceil((l-o)/u),h=X.getSilentFrame(t.manifestCodec||t.codec,t.channelCount);if(c.b.warn("[mp4-remuxer]: remux empty Audio"),h){for(var f=[],v=0;v<d;v++){var g=o+v*u;f.push({unit:h,pts:g,dts:g})}return t.samples=f,this.remuxAudio(t,e,r,!1)}c.b.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec")},e.remuxID3=function(t,e){var r=t.samples.length;if(r){for(var i=t.inputTimeScale,a=this._initPTS,n=this._initDTS,s=0;s<r;s++){var o=t.samples[s];o.pts=at(o.pts-a,e*i)/i,o.dts=at(o.dts-n,e*i)/i}var l=t.samples;return t.samples=[],{samples:l}}},e.remuxText=function(t,e){var r=t.samples.length;if(r){for(var i=t.inputTimeScale,a=this._initPTS,n=0;n<r;n++){var s=t.samples[n];s.pts=at(s.pts-a,e*i)/i}t.samples.sort((function(t,e){return t.pts-e.pts}));var o=t.samples;return t.samples=[],{samples:o}}},t}();function at(t,e){var r;if(null===e)return t;for(r=e<t?-8589934592:8589934592;Math.abs(t-e)>4294967296;)t+=r;return t}var nt,st=function(t,e,r,i){this.size=void 0,this.duration=void 0,this.cts=void 0,this.flags=void 0,this.duration=e,this.size=r,this.cts=i,this.flags=new ot(t)},ot=function(t){this.isLeading=0,this.isDependedOn=0,this.hasRedundancy=0,this.degradPrio=0,this.dependsOn=1,this.isNonSync=1,this.dependsOn=t?2:1,this.isNonSync=t?0:1},lt=function(){function t(){this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=void 0,this.initTracks=void 0,this.lastEndDTS=null}var e=t.prototype;return e.destroy=function(){},e.resetTimeStamp=function(t){this.initPTS=t,this.lastEndDTS=null},e.resetNextTimestamp=function(){this.lastEndDTS=null},e.resetInitSegment=function(t,e,r){this.audioCodec=e,this.videoCodec=r,this.generateInitSegment(t),this.emitInitSegment=!0},e.generateInitSegment=function(t){var e=this.audioCodec,r=this.videoCodec;if(!t||!t.byteLength)return this.initTracks=void 0,void(this.initData=void 0);var i=this.initData=Object(l.f)(t);e||(e="mp4a.40.5"),r||(r="avc1.42e01e");var a={};i.audio&&i.video?a.audiovideo={container:"video/mp4",codec:e+","+r,initSegment:t,id:"main"}:i.audio?a.audio={container:"audio/mp4",codec:e,initSegment:t,id:"audio"}:i.video?a.video={container:"video/mp4",codec:r,initSegment:t,id:"main"}:c.b.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=a},e.remux=function(t,e,r,i,a){var n=this.initPTS,o=this.lastEndDTS,u={audio:void 0,video:void 0,text:i,id3:r,initSegment:void 0};Object(s.a)(o)||(o=this.lastEndDTS=a||0);var d=e.samples;if(!d||!d.length)return u;var h={initPTS:void 0,timescale:1},f=this.initData;if(f&&f.length||(this.generateInitSegment(d),f=this.initData),!f||!f.length)return c.b.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),u;this.emitInitSegment&&(h.tracks=this.initTracks,this.emitInitSegment=!1),Object(s.a)(n)||(this.initPTS=h.initPTS=n=ut(f,d,o));var v=Object(l.c)(d,f),g=o,p=v+g;Object(l.e)(f,d,n),v>0?this.lastEndDTS=p:(c.b.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());var m=!!f.audio,y=!!f.video,b="";m&&(b+="audio"),y&&(b+="video");var T={data1:d,startPTS:g,startDTS:g,endPTS:p,endDTS:p,type:b,hasAudio:m,hasVideo:y,nb:1,dropped:0};return u.audio="audio"===T.type?T:void 0,u.video="audio"!==T.type?T:void 0,u.text=i,u.id3=r,u.initSegment=h,u},t}(),ut=function(t,e,r){return Object(l.d)(t,e)-r},dt=lt,ht=r(12);try{nt=self.performance.now.bind(self.performance)}catch(t){c.b.debug("Unable to use Performance API on this environment"),nt=self.Date.now}var ft=[{demux:V,remux:it},{demux:R,remux:dt},{demux:L,remux:it},{demux:Y,remux:it}],ct=1024;ft.forEach((function(t){var e=t.demux;ct=Math.max(ct,e.minProbeByteLength)}));var vt=function(){function t(t,e,r,i){this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.vendor=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.cache=new ht.a,this.observer=t,this.typeSupported=e,this.config=r,this.vendor=i}var e=t.prototype;return e.configure=function(t){this.transmuxConfig=t,this.decrypter&&this.decrypter.reset()},e.push=function(t,e,r,i){var a=this,n=r.transmuxing;n.executeStart=nt();var s=new Uint8Array(t),o=this.cache,u=this.config,d=this.currentTransmuxState,h=this.transmuxConfig;i&&(this.currentTransmuxState=i);var f=function(t,e){var r=null;t.byteLength>0&&null!=e&&null!=e.key&&(r=e.method);return r}(s,e);if("AES-128"===f){var c=this.getDecrypter();if(!u.enableSoftwareAES)return this.decryptionPromise=c.webCryptoDecrypt(s,e.key.buffer,e.iv.buffer).then((function(t){var e=a.push(t,null,r);return a.decryptionPromise=null,e})),this.decryptionPromise;var v=c.softwareDecrypt(s,e.key.buffer,e.iv.buffer);if(!v)return n.executeEnd=nt(),gt(r);s=new Uint8Array(v)}var g=i||d,p=g.contiguous,m=g.discontinuity,y=g.trackSwitch,b=g.accurateTimeOffset,T=g.timeOffset,E=h.audioCodec,S=h.videoCodec,L=h.defaultInitPts,A=h.duration,R=h.initSegmentData;(m||y)&&this.resetInitSegment(R,E,S,A),m&&this.resetInitialTimestamp(L),p||this.resetContiguity();var D=this.demuxer,_=this.remuxer;if(this.needsProbing(s,m,y)){if(o.dataLength){var k=o.flush();s=Object(l.a)(k,s)}var x=this.configureTransmuxer(s,h);D=x.demuxer,_=x.remuxer}if(!D||!_)return o.push(s),n.executeEnd=nt(),gt(r);var w=this.transmux(s,e,f,T,b,r),C=this.currentTransmuxState;return C.contiguous=!0,C.discontinuity=!1,C.trackSwitch=!1,n.executeEnd=nt(),w},e.flush=function(t){var e=this,r=t.transmuxing;r.executeStart=nt();var n=this.decrypter,s=this.cache,o=this.currentTransmuxState,l=this.decryptionPromise,u=this.observer,d=[];if(l)return l.then((function(){return e.flush(t)}));var h=o.accurateTimeOffset,f=o.timeOffset;if(n){var v=n.flush();v&&d.push(this.push(v,null,t))}var g=s.dataLength;s.reset();var p=this.demuxer,m=this.remuxer;if(!p||!m)return g>=ct&&u.emit(i.a.ERROR,i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"}),r.executeEnd=nt(),[gt(t)];var y=p.flush(f),b=y.audioTrack,T=y.avcTrack,E=y.id3Track,S=y.textTrack;c.b.log("[transmuxer.ts]: Flushed fragment "+t.sn+(t.part>-1?" p: "+t.part:"")+" of level "+t.level);var L=m.remux(b,T,E,S,f,h,!0);return d.push({remuxResult:L,chunkMeta:t}),r.executeEnd=nt(),d},e.resetInitialTimestamp=function(t){var e=this.demuxer,r=this.remuxer;e&&r&&(e.resetTimeStamp(t),r.resetTimeStamp(t))},e.resetContiguity=function(){var t=this.demuxer,e=this.remuxer;t&&e&&(t.resetContiguity(),e.resetNextTimestamp())},e.resetInitSegment=function(t,e,r,i){var a=this.demuxer,n=this.remuxer;a&&n&&(a.resetInitSegment(e,r,i),n.resetInitSegment(t,e,r))},e.destroy=function(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)},e.transmux=function(t,e,r,i,a,n){return"SAMPLE-AES"===r?this.transmuxSampleAes(t,e,i,a,n):this.transmuxUnencrypted(t,i,a,n)},e.transmuxUnencrypted=function(t,e,r,i){var a=this.demuxer.demux(t,e,!1),n=a.audioTrack,s=a.avcTrack,o=a.id3Track,l=a.textTrack;return{remuxResult:this.remuxer.remux(n,s,o,l,e,r,!1),chunkMeta:i}},e.transmuxSampleAes=function(t,e,r,i,a){var n=this;return this.demuxer.demuxSampleAes(t,e,r).then((function(t){return{remuxResult:n.remuxer.remux(t.audioTrack,t.avcTrack,t.id3Track,t.textTrack,r,i,!1),chunkMeta:a}}))},e.configureTransmuxer=function(t,e){for(var r,i=this.config,a=this.observer,n=this.typeSupported,s=this.vendor,o=e.audioCodec,l=e.defaultInitPts,u=e.duration,d=e.initSegmentData,h=e.videoCodec,f=0,c=ft.length;f<c&&!(r=ft[f]).demux.probe(t);f++);if(!r)return{remuxer:void 0,demuxer:void 0};var v=this.demuxer,g=this.remuxer,p=r.remux,m=r.demux;return g&&g instanceof p||(g=this.remuxer=new p(a,i,n,s)),v&&v instanceof m||(v=this.demuxer=new m(a,i,n),this.probe=m.probe),this.resetInitSegment(d,o,h,u),this.resetInitialTimestamp(l),{demuxer:v,remuxer:g}},e.needsProbing=function(t,e,r){return!this.demuxer||e||r},e.getDecrypter=function(){var t=this.decrypter;return t||(t=this.decrypter=new n.a(this.observer,this.config)),t},t}();var gt=function(t){return{remuxResult:{},chunkMeta:t}};function pt(t){return"then"in t&&t.then instanceof Function}var mt=function(t,e,r,i,a){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=t,this.videoCodec=e,this.initSegmentData=r,this.duration=i,this.defaultInitPts=a},yt=function(t,e,r,i,a){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.discontinuity=t,this.contiguous=e,this.accurateTimeOffset=r,this.trackSwitch=i,this.timeOffset=a}},function(t,e,r){var i,a,n,s,o;i=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/,a=/^([^\/?#]*)(.*)$/,n=/(?:\/|^)\.(?=\/)/g,s=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,o={buildAbsoluteURL:function(t,e,r){if(r=r||{},t=t.trim(),!(e=e.trim())){if(!r.alwaysNormalize)return t;var i=o.parseURL(t);if(!i)throw new Error("Error trying to parse base URL.");return i.path=o.normalizePath(i.path),o.buildURLFromParts(i)}var n=o.parseURL(e);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return r.alwaysNormalize?(n.path=o.normalizePath(n.path),o.buildURLFromParts(n)):e;var s=o.parseURL(t);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var l=a.exec(s.path);s.netLoc=l[1],s.path=l[2]}s.netLoc&&!s.path&&(s.path="/");var u={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(u.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var d=s.path,h=d.substring(0,d.lastIndexOf("/")+1)+n.path;u.path=o.normalizePath(h)}else u.path=s.path,n.params||(u.params=s.params,n.query||(u.query=s.query));return null===u.path&&(u.path=r.alwaysNormalize?o.normalizePath(n.path):n.path),o.buildURLFromParts(u)},parseURL:function(t){var e=i.exec(t);return e?{scheme:e[1]||"",netLoc:e[2]||"",path:e[3]||"",params:e[4]||"",query:e[5]||"",fragment:e[6]||""}:null},normalizePath:function(t){for(t=t.split("").reverse().join("").replace(n,"");t.length!==(t=t.replace(s,"")).length;);return t.split("").reverse().join("")},buildURLFromParts:function(t){return t.scheme+t.netLoc+t.path+t.params+t.query+t.fragment}},t.exports=o},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var i=function(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}},function(t,e){t.exports=void 0},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var i=function(){function t(){this.chunks=[],this.dataLength=0}var e=t.prototype;return e.push=function(t){this.chunks.push(t),this.dataLength+=t.length},e.flush=function(){var t,e=this.chunks,r=this.dataLength;return e.length?(t=1===e.length?e[0]:function(t,e){for(var r=new Uint8Array(e),i=0,a=0;a<t.length;a++){var n=t[a];r.set(n,i),i+=n.length}return r}(e,r),this.reset(),t):new Uint8Array(0)},e.reset=function(){this.chunks.length=0,this.dataLength=0},t}()},function(t,e,r){"use strict";var i=Object.prototype.hasOwnProperty,a="~";function n(){}function s(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function o(t,e,r,i,n){if("function"!=typeof r)throw new TypeError("The listener must be a function");var o=new s(r,i||t,n),l=a?a+e:e;return t._events[l]?t._events[l].fn?t._events[l]=[t._events[l],o]:t._events[l].push(o):(t._events[l]=o,t._eventsCount++),t}function l(t,e){0==--t._eventsCount?t._events=new n:delete t._events[e]}function u(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(a=!1)),u.prototype.eventNames=function(){var t,e,r=[];if(0===this._eventsCount)return r;for(e in t=this._events)i.call(t,e)&&r.push(a?e.slice(1):e);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(t)):r},u.prototype.listeners=function(t){var e=a?a+t:t,r=this._events[e];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,n=r.length,s=new Array(n);i<n;i++)s[i]=r[i].fn;return s},u.prototype.listenerCount=function(t){var e=a?a+t:t,r=this._events[e];return r?r.fn?1:r.length:0},u.prototype.emit=function(t,e,r,i,n,s){var o=a?a+t:t;if(!this._events[o])return!1;var l,u,d=this._events[o],h=arguments.length;if(d.fn){switch(d.once&&this.removeListener(t,d.fn,void 0,!0),h){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,e),!0;case 3:return d.fn.call(d.context,e,r),!0;case 4:return d.fn.call(d.context,e,r,i),!0;case 5:return d.fn.call(d.context,e,r,i,n),!0;case 6:return d.fn.call(d.context,e,r,i,n,s),!0}for(u=1,l=new Array(h-1);u<h;u++)l[u-1]=arguments[u];d.fn.apply(d.context,l)}else{var f,c=d.length;for(u=0;u<c;u++)switch(d[u].once&&this.removeListener(t,d[u].fn,void 0,!0),h){case 1:d[u].fn.call(d[u].context);break;case 2:d[u].fn.call(d[u].context,e);break;case 3:d[u].fn.call(d[u].context,e,r);break;case 4:d[u].fn.call(d[u].context,e,r,i);break;default:if(!l)for(f=1,l=new Array(h-1);f<h;f++)l[f-1]=arguments[f];d[u].fn.apply(d[u].context,l)}}return!0},u.prototype.on=function(t,e,r){return o(this,t,e,r,!1)},u.prototype.once=function(t,e,r){return o(this,t,e,r,!0)},u.prototype.removeListener=function(t,e,r,i){var n=a?a+t:t;if(!this._events[n])return this;if(!e)return l(this,n),this;var s=this._events[n];if(s.fn)s.fn!==e||i&&!s.once||r&&s.context!==r||l(this,n);else{for(var o=0,u=[],d=s.length;o<d;o++)(s[o].fn!==e||i&&!s[o].once||r&&s[o].context!==r)&&u.push(s[o]);u.length?this._events[n]=1===u.length?u[0]:u:l(this,n)}return this},u.prototype.removeAllListeners=function(t){var e;return t?(e=a?a+t:t,this._events[e]&&l(this,e)):(this._events=new n,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=a,u.EventEmitter=u,t.exports=u},function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var i=function(){function t(t,e){this.subtle=void 0,this.aesIV=void 0,this.subtle=t,this.aesIV=e}return t.prototype.decrypt=function(t,e){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},e,t)},t}(),a=function(){function t(t,e){this.subtle=void 0,this.key=void 0,this.subtle=t,this.key=e}return t.prototype.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},t}(),n=r(7);var s=function(){function t(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}var e=t.prototype;return e.uint8ArrayToUint32Array_=function(t){for(var e=new DataView(t),r=new Uint32Array(4),i=0;i<4;i++)r[i]=e.getUint32(4*i);return r},e.initTable=function(){var t=this.sBox,e=this.invSBox,r=this.subMix,i=r[0],a=r[1],n=r[2],s=r[3],o=this.invSubMix,l=o[0],u=o[1],d=o[2],h=o[3],f=new Uint32Array(256),c=0,v=0,g=0;for(g=0;g<256;g++)f[g]=g<128?g<<1:g<<1^283;for(g=0;g<256;g++){var p=v^v<<1^v<<2^v<<3^v<<4;p=p>>>8^255&p^99,t[c]=p,e[p]=c;var m=f[c],y=f[m],b=f[y],T=257*f[p]^16843008*p;i[c]=T<<24|T>>>8,a[c]=T<<16|T>>>16,n[c]=T<<8|T>>>24,s[c]=T,T=16843009*b^65537*y^257*m^16843008*c,l[p]=T<<24|T>>>8,u[p]=T<<16|T>>>16,d[p]=T<<8|T>>>24,h[p]=T,c?(c=m^f[f[f[b^m]]],v^=f[f[v]]):c=v=1}},e.expandKey=function(t){for(var e=this.uint8ArrayToUint32Array_(t),r=!0,i=0;i<e.length&&r;)r=e[i]===this.key[i],i++;if(!r){this.key=e;var a=this.keySize=e.length;if(4!==a&&6!==a&&8!==a)throw new Error("Invalid aes key size="+a);var n,s,o,l,u=this.ksRows=4*(a+6+1),d=this.keySchedule=new Uint32Array(u),h=this.invKeySchedule=new Uint32Array(u),f=this.sBox,c=this.rcon,v=this.invSubMix,g=v[0],p=v[1],m=v[2],y=v[3];for(n=0;n<u;n++)n<a?o=d[n]=e[n]:(l=o,n%a==0?(l=f[(l=l<<8|l>>>24)>>>24]<<24|f[l>>>16&255]<<16|f[l>>>8&255]<<8|f[255&l],l^=c[n/a|0]<<24):a>6&&n%a==4&&(l=f[l>>>24]<<24|f[l>>>16&255]<<16|f[l>>>8&255]<<8|f[255&l]),d[n]=o=(d[n-a]^l)>>>0);for(s=0;s<u;s++)n=u-s,l=3&s?d[n]:d[n-4],h[s]=s<4||n<=4?l:g[f[l>>>24]]^p[f[l>>>16&255]]^m[f[l>>>8&255]]^y[f[255&l]],h[s]=h[s]>>>0}},e.networkToHostOrderSwap=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},e.decrypt=function(t,e,r){for(var i,a,n,s,o,l,u,d,h,f,c,v,g,p,m=this.keySize+6,y=this.invKeySchedule,b=this.invSBox,T=this.invSubMix,E=T[0],S=T[1],L=T[2],A=T[3],R=this.uint8ArrayToUint32Array_(r),D=R[0],_=R[1],k=R[2],x=R[3],w=new Int32Array(t),C=new Int32Array(w.length),O=this.networkToHostOrderSwap;e<w.length;){for(h=O(w[e]),f=O(w[e+1]),c=O(w[e+2]),v=O(w[e+3]),o=h^y[0],l=v^y[1],u=c^y[2],d=f^y[3],g=4,p=1;p<m;p++)i=E[o>>>24]^S[l>>16&255]^L[u>>8&255]^A[255&d]^y[g],a=E[l>>>24]^S[u>>16&255]^L[d>>8&255]^A[255&o]^y[g+1],n=E[u>>>24]^S[d>>16&255]^L[o>>8&255]^A[255&l]^y[g+2],s=E[d>>>24]^S[o>>16&255]^L[l>>8&255]^A[255&u]^y[g+3],o=i,l=a,u=n,d=s,g+=4;i=b[o>>>24]<<24^b[l>>16&255]<<16^b[u>>8&255]<<8^b[255&d]^y[g],a=b[l>>>24]<<24^b[u>>16&255]<<16^b[d>>8&255]<<8^b[255&o]^y[g+1],n=b[u>>>24]<<24^b[d>>16&255]<<16^b[o>>8&255]<<8^b[255&l]^y[g+2],s=b[d>>>24]<<24^b[o>>16&255]<<16^b[l>>8&255]<<8^b[255&u]^y[g+3],g+=3,C[e]=O(i^D),C[e+1]=O(s^_),C[e+2]=O(n^k),C[e+3]=O(a^x),D=h,_=f,k=c,x=v,e+=4}return C.buffer},t}(),o=r(1),l=r(5),u=function(){function t(t,e,r){var i=(void 0===r?{}:r).removePKCS7Padding,a=void 0===i||i;if(this.logEnabled=!0,this.observer=void 0,this.config=void 0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.observer=t,this.config=e,this.removePKCS7Padding=a,a)try{var n=self.crypto;n?this.subtle=n.subtle||n.webkitSubtle:this.config.enableSoftwareAES=!0}catch(t){}}var e=t.prototype;return e.isSync=function(){return this.config.enableSoftwareAES},e.flush=function(){var t=this.currentResult;if(t){var e,r,i,a=new Uint8Array(t);return this.reset(),this.removePKCS7Padding?(r=(e=a).byteLength,(i=r&&new DataView(e.buffer).getUint8(r-1))?Object(n.a)(e,0,r-i):e):a}this.reset()},e.reset=function(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)},e.softwareDecrypt=function(t,e,r){var i=this.currentIV,a=this.currentResult,o=this.remainderData;this.logOnce("JS AES decrypt"),o&&(t=Object(l.a)(o,t),this.remainderData=null);var u=this.getValidChunk(t);if(!u.length)return null;i&&(r=i);var d=this.softwareDecrypter;d||(d=this.softwareDecrypter=new s),d.expandKey(e);var h=a;return this.currentResult=d.decrypt(u.buffer,0,r),this.currentIV=Object(n.a)(u,-16).buffer,h||null},e.webCryptoDecrypt=function(t,e,r){var n=this,s=this.subtle;return this.key===e&&this.fastAesKey||(this.key=e,this.fastAesKey=new a(s,e)),this.fastAesKey.expandKey().then((function(e){return s?new i(s,r).decrypt(t.buffer,e):Promise.reject(new Error("web crypto not initialized"))})).catch((function(i){return n.onWebCryptoError(i,t,e,r)}))},e.onWebCryptoError=function(t,e,r,i){return o.b.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:",t),this.config.enableSoftwareAES=!0,this.logEnabled=!0,this.softwareDecrypt(e,r,i)},e.getValidChunk=function(t){var e=t,r=t.length-t.length%16;return r!==t.length&&(e=Object(n.a)(t,0,r),this.remainderData=Object(n.a)(t,r)),e},e.logOnce=function(t){this.logEnabled&&(o.b.log("[decrypter.ts]: "+t),this.logEnabled=!1)},t}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var i=r(9);function a(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var n=function(){function t(t,e){this._uri=null,this.method=null,this.keyFormat=null,this.keyFormatVersions=null,this.keyID=null,this.key=null,this.iv=null,this._uri=e?Object(i.buildAbsoluteURL)(t,e,{alwaysNormalize:!0}):t}var e,r,n;return t.fromURL=function(e,r){return new t(e,r)},t.fromURI=function(e){return new t(e)},e=t,(r=[{key:"uri",get:function(){return this._uri}}])&&a(e.prototype,r),n&&a(e,n),t}()},function(t,e,r){function i(t){var e={};function r(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.i=function(t){return t},r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var i=r(r.s=ENTRY_MODULE);return i.default||i}function a(t){return(t+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function n(t,e,i){var n={};n[i]=[];var s=e.toString(),o=s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);if(!o)return n;for(var l,u=o[1],d=new RegExp("(\\\\n|\\W)"+a(u)+"\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)","g");l=d.exec(s);)"dll-reference"!==l[3]&&n[i].push(l[3]);for(d=new RegExp("\\("+a(u)+'\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',"g");l=d.exec(s);)t[l[2]]||(n[i].push(l[1]),t[l[2]]=r(l[1]).m),n[l[2]]=n[l[2]]||[],n[l[2]].push(l[4]);for(var h,f=Object.keys(n),c=0;c<f.length;c++)for(var v=0;v<n[f[c]].length;v++)h=n[f[c]][v],isNaN(1*h)||(n[f[c]][v]=1*n[f[c]][v]);return n}function s(t){return Object.keys(t).reduce((function(e,r){return e||t[r].length>0}),!1)}t.exports=function(t,e){e=e||{};var a={main:r.m},o=e.all?{main:Object.keys(a.main)}:function(t,e){for(var r={main:[e]},i={main:[]},a={main:{}};s(r);)for(var o=Object.keys(r),l=0;l<o.length;l++){var u=o[l],d=r[u].pop();if(a[u]=a[u]||{},!a[u][d]&&t[u][d]){a[u][d]=!0,i[u]=i[u]||[],i[u].push(d);for(var h=n(t,t[u][d],u),f=Object.keys(h),c=0;c<f.length;c++)r[f[c]]=r[f[c]]||[],r[f[c]]=r[f[c]].concat(h[f[c]])}}return i}(a,t),l="";Object.keys(o).filter((function(t){return"main"!==t})).forEach((function(t){for(var e=0;o[t][e];)e++;o[t].push(e),a[t][e]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",l=l+"var "+t+" = ("+i.toString().replace("ENTRY_MODULE",JSON.stringify(e))+")({"+o[t].map((function(e){return JSON.stringify(e)+": "+a[t][e].toString()})).join(",")+"});\n"})),l=l+"new (("+i.toString().replace("ENTRY_MODULE",JSON.stringify(t))+")({"+o.main.map((function(t){return JSON.stringify(t)+": "+a.main[t].toString()})).join(",")+"}))(self);";var u=new window.Blob([l],{type:"text/javascript"});if(e.bare)return u;var d=(window.URL||window.webkitURL||window.mozURL||window.msURL).createObjectURL(u),h=new window.Worker(d);return h.objectURL=d,h}},function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return o}));var i=r(8),a=r(0),n=r(1),s=r(13);function o(t){var e=new s.EventEmitter,r=function(e,r){t.postMessage({event:e,data:r})};e.on(a.a.FRAG_DECRYPTED,r),e.on(a.a.ERROR,r),t.addEventListener("message",(function(a){var s=a.data;switch(s.cmd){case"init":var o=JSON.parse(s.config);t.transmuxer=new i.c(e,s.typeSupported,o,s.vendor),Object(n.a)(o.debug),r("init",null);break;case"configure":t.transmuxer.configure(s.config);break;case"demux":var u=t.transmuxer.push(s.data,s.decryptdata,s.chunkMeta,s.state);Object(i.d)(u)?u.then((function(e){l(t,e)})):l(t,u);break;case"flush":var h=s.chunkMeta,f=t.transmuxer.flush(h);Object(i.d)(f)?f.then((function(e){d(t,e,h)})):d(t,f,h)}}))}function l(t,e){if((r=e.remuxResult).audio||r.video||r.text||r.id3||r.initSegment){var r,i=[],a=e.remuxResult,n=a.audio,s=a.video;n&&u(i,n),s&&u(i,s),t.postMessage({event:"transmuxComplete",data:e},i)}}function u(t,e){e.data1&&t.push(e.data1.buffer),e.data2&&t.push(e.data2.buffer)}function d(t,e,r){e.forEach((function(e){l(t,e)})),t.postMessage({event:"flush",data:r})}},function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return ke}));var i=r(9),a=r(2),n=r(3),s=r(0),o=r(1),l=r(5),u=r(4);function d(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var h=function(){function t(t){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.initSegment=null,this.live=!0,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.availabilityDelay=void 0,this.misses=0,this.needSidxRanges=!1,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.fragments=[],this.url=t}var e,r,i;return t.prototype.reloaded=function(t){if(!t)return this.advanced=!0,void(this.updated=!0);var e=this.lastPartSn-t.lastPartSn,r=this.lastPartIndex-t.lastPartIndex;this.updated=this.endSN!==t.endSN||!!r||!!e,this.advanced=this.endSN>t.endSN||e>0||0===e&&r>0,this.updated||this.advanced?this.misses=Math.floor(.6*t.misses):this.misses=t.misses+1,this.availabilityDelay=t.availabilityDelay},e=t,(r=[{key:"hasProgramDateTime",get:function(){return!!this.fragments.length&&Object(n.a)(this.fragments[this.fragments.length-1].programDateTime)}},{key:"levelTargetDuration",get:function(){return this.averagetargetduration||this.targetduration||10}},{key:"edge",get:function(){return this.partEnd||this.fragmentEnd}},{key:"partEnd",get:function(){var t;return null!==(t=this.partList)&&void 0!==t&&t.length?this.partList[this.partList.length-1].end:this.fragmentEnd}},{key:"fragmentEnd",get:function(){var t;return null!==(t=this.fragments)&&void 0!==t&&t.length?this.fragments[this.fragments.length-1].end:0}},{key:"age",get:function(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}},{key:"lastPartIndex",get:function(){var t;return null!==(t=this.partList)&&void 0!==t&&t.length?this.partList[this.partList.length-1].index:-1}},{key:"lastPartSn",get:function(){var t;return null!==(t=this.partList)&&void 0!==t&&t.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}}])&&d(e.prototype,r),i&&d(e,i),t}(),f=r(15),c=/^(\d+)x(\d+)$/,v=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,g=function(){function t(e){for(var r in"string"==typeof e&&(e=t.parseAttrList(e)),e)e.hasOwnProperty(r)&&(this[r]=e[r])}var e=t.prototype;return e.decimalInteger=function(t){var e=parseInt(this[t],10);return e>Number.MAX_SAFE_INTEGER?1/0:e},e.hexadecimalInteger=function(t){if(this[t]){var e=(this[t]||"0x").slice(2);e=(1&e.length?"0":"")+e;for(var r=new Uint8Array(e.length/2),i=0;i<e.length/2;i++)r[i]=parseInt(e.slice(2*i,2*i+2),16);return r}return null},e.hexadecimalIntegerAsNumber=function(t){var e=parseInt(this[t],16);return e>Number.MAX_SAFE_INTEGER?1/0:e},e.decimalFloatingPoint=function(t){return parseFloat(this[t])},e.optionalFloat=function(t,e){var r=this[t];return r?parseFloat(r):e},e.enumeratedString=function(t){return this[t]},e.bool=function(t){return"YES"===this[t]},e.decimalResolution=function(t){var e=c.exec(this[t]);if(null!==e)return{width:parseInt(e[1],10),height:parseInt(e[2],10)}},t.parseAttrList=function(t){var e,r={};for(v.lastIndex=0;null!==(e=v.exec(t));){var i=e[2];0===i.indexOf('"')&&i.lastIndexOf('"')===i.length-1&&(i=i.slice(1,-1)),r[e[1]]=i}return r},t}(),p={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,drac:!0,dvav:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0},text:{stpp:!0,wvtt:!0}};function m(t,e){return MediaSource.isTypeSupported((e||"video")+'/mp4;codecs="'+t+'"')}var y,b,T=/#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)|#EXT-X-SESSION-DATA:([^\n\r]*)[\r\n]+/g,E=/#EXT-X-MEDIA:(.*)/g,S=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[\S ]*)/.source,/#EXT-X-BYTERANGE:*(.+)/.source,/#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/#.*/.source].join("|"),"g"),L=new RegExp([/#(EXTM3U)/.source,/#EXT-X-(PLAYLIST-TYPE):(.+)/.source,/#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source,/#EXT-X-(SKIP):(.+)/.source,/#EXT-X-(TARGETDURATION): *(\d+)/.source,/#EXT-X-(KEY):(.+)/.source,/#EXT-X-(START):(.+)/.source,/#EXT-X-(ENDLIST)/.source,/#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source,/#EXT-X-(DIS)CONTINUITY/.source,/#EXT-X-(VERSION):(\d+)/.source,/#EXT-X-(MAP):(.+)/.source,/#EXT-X-(SERVER-CONTROL):(.+)/.source,/#EXT-X-(PART-INF):(.+)/.source,/#EXT-X-(GAP)/.source,/#EXT-X-(BITRATE):\s*(\d+)/.source,/#EXT-X-(PART):(.+)/.source,/#EXT-X-(PRELOAD-HINT):(.+)/.source,/#EXT-X-(RENDITION-REPORT):(.+)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|")),A=/\.(mp4|m4s|m4v|m4a)$/i,R=function(){function t(){}return t.findGroup=function(t,e){for(var r=0;r<t.length;r++){var i=t[r];if(i.id===e)return i}},t.convertAVC1ToAVCOTI=function(t){var e,r=t.split(".");return r.length>2?(e=r.shift()+".",e+=parseInt(r.shift()).toString(16),e+=("000"+parseInt(r.shift()).toString(16)).substr(-4)):e=t,e},t.resolve=function(t,e){return i.buildAbsoluteURL(e,t,{alwaysNormalize:!0})},t.parseMasterPlaylist=function(e,r){var i,a=[],n={},s=!1;for(T.lastIndex=0;null!=(i=T.exec(e));)if(i[1]){var o=new g(i[1]),l={attrs:o,bitrate:o.decimalInteger("AVERAGE-BANDWIDTH")||o.decimalInteger("BANDWIDTH"),name:o.NAME,url:t.resolve(i[2],r)},u=o.decimalResolution("RESOLUTION");u&&(l.width=u.width,l.height=u.height),D((o.CODECS||"").split(/[ ,]+/).filter((function(t){return t})),l),l.videoCodec&&-1!==l.videoCodec.indexOf("avc1")&&(l.videoCodec=t.convertAVC1ToAVCOTI(l.videoCodec)),a.push(l)}else if(i[3]){var d=new g(i[3]);d["DATA-ID"]&&(s=!0,n[d["DATA-ID"]]=d)}return{levels:a,sessionData:s?n:null}},t.parseMasterPlaylistMedia=function(e,r,i,a){var n;void 0===a&&(a=[]);var s=[],o=0;for(E.lastIndex=0;null!==(n=E.exec(e));){var l=new g(n[1]);if(l.TYPE===i){var u={attrs:l,bitrate:0,id:o++,groupId:l["GROUP-ID"],instreamId:l["INSTREAM-ID"],name:l.NAME||l.LANGUAGE||"",type:i,default:l.bool("DEFAULT"),autoselect:l.bool("AUTOSELECT"),forced:l.bool("FORCED"),lang:l.LANGUAGE,url:l.URI?t.resolve(l.URI,r):""};if(a.length){var d=t.findGroup(a,u.groupId)||a[0];_(u,d,"audioCodec"),_(u,d,"textCodec")}s.push(u)}}return s},t.parseLevelPlaylist=function(t,e,r,i,a){var s,l,d,c=new h(e),v=c.fragments,p=0,m=0,y=0,b=0,T=null,E=new u.c(i,e),R=-1;for(S.lastIndex=0,c.m3u8=t;null!==(s=S.exec(t));){var D=s[1];if(D){E.duration=parseFloat(D);var _=(" "+s[2]).slice(1);E.title=_||null,E.tagList.push(_?["INF",D,_]:["INF",D])}else if(s[3])Object(n.a)(E.duration)&&(E.start=y,d&&(E.levelkey=d),E.sn=p,E.level=r,E.cc=b,E.urlId=a,v.push(E),E.relurl=(" "+s[3]).slice(1),k(E,T),T=E,y+=E.duration,p++,m=0,(E=new u.c(i,e)).start=y,E.sn=p,E.cc=b,E.level=r);else if(s[4]){var x=(" "+s[4]).slice(1);T?E.setByteRange(x,T):E.setByteRange(x)}else if(s[5])E.rawProgramDateTime=(" "+s[5]).slice(1),E.tagList.push(["PROGRAM-DATE-TIME",E.rawProgramDateTime]),-1===R&&(R=v.length);else{if(!(s=s[0].match(L))){o.b.warn("No matches on slow regex match for level playlist!");continue}for(l=1;l<s.length&&void 0===s[l];l++);var w=(" "+s[l]).slice(1),C=(" "+s[l+1]).slice(1),O=s[l+2]?(" "+s[l+2]).slice(1):"";switch(w){case"PLAYLIST-TYPE":c.type=C.toUpperCase();break;case"MEDIA-SEQUENCE":p=c.startSN=parseInt(C);break;case"SKIP":var I=new g(C),P=I.decimalInteger("SKIPPED-SEGMENTS");if(Object(n.a)(P)){c.skippedSegments=P;for(var F=P;F--;)v.unshift(null);p+=P}var M=I.enumeratedString("RECENTLY-REMOVED-DATERANGES");M&&(c.recentlyRemovedDateranges=M.split("\t"));break;case"TARGETDURATION":c.targetduration=parseFloat(C);break;case"VERSION":c.version=parseInt(C);break;case"EXTM3U":break;case"ENDLIST":c.live=!1;break;case"#":(C||O)&&E.tagList.push(O?[C,O]:[C]);break;case"DIS":b++;case"GAP":E.tagList.push([w]);break;case"BITRATE":E.tagList.push([w,C]);break;case"DISCONTINUITY-SEQ":b=parseInt(C);break;case"KEY":var N,U=new g(C),B=U.enumeratedString("METHOD"),G=U.URI,j=U.hexadecimalInteger("IV"),H=U.enumeratedString("KEYFORMATVERSIONS"),K=U.enumeratedString("KEYID"),V=null!=(N=U.enumeratedString("KEYFORMAT"))?N:"identity";if(["com.apple.streamingkeydelivery","com.microsoft.playready","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed","com.widevine"].indexOf(V)>-1){o.b.warn("Keyformat "+V+" is not supported from the manifest");continue}if("identity"!==V)continue;B&&(d=f.a.fromURL(e,G),G&&["AES-128","SAMPLE-AES","SAMPLE-AES-CENC"].indexOf(B)>=0&&(d.method=B,d.keyFormat=V,K&&(d.keyID=K),H&&(d.keyFormatVersions=H),d.iv=j));break;case"START":var W=new g(C).decimalFloatingPoint("TIME-OFFSET");Object(n.a)(W)&&(c.startTimeOffset=W);break;case"MAP":var Y=new g(C);E.relurl=Y.URI,Y.BYTERANGE&&E.setByteRange(Y.BYTERANGE),E.level=r,E.sn="initSegment",d&&(E.levelkey=d),c.initSegment=E,(E=new u.c(i,e)).rawProgramDateTime=c.initSegment.rawProgramDateTime;break;case"SERVER-CONTROL":var X=new g(C);c.canBlockReload=X.bool("CAN-BLOCK-RELOAD"),c.canSkipUntil=X.optionalFloat("CAN-SKIP-UNTIL",0),c.canSkipDateRanges=c.canSkipUntil>0&&X.bool("CAN-SKIP-DATERANGES"),c.partHoldBack=X.optionalFloat("PART-HOLD-BACK",0),c.holdBack=X.optionalFloat("HOLD-BACK",0);break;case"PART-INF":var q=new g(C);c.partTarget=q.decimalFloatingPoint("PART-TARGET");break;case"PART":var z=c.partList;z||(z=c.partList=[]);var Q=m>0?z[z.length-1]:void 0,Z=m++,$=new u.b(new g(C),E,e,Z,Q);z.push($),E.duration+=$.duration;break;case"PRELOAD-HINT":var J=new g(C);c.preloadHint=J;break;case"RENDITION-REPORT":var tt=new g(C);c.renditionReports=c.renditionReports||[],c.renditionReports.push(tt);break;default:o.b.warn("line parsed but not handled: "+s)}}}T&&!T.relurl?(v.pop(),y-=T.duration,c.fragmentHint=T):c.fragmentHint=E;var et=v.length,rt=v[0],it=v[et-1];if((y+=c.skippedSegments*c.targetduration)>0&&et&&it){c.averagetargetduration=y/et;var at=it.sn;c.endSN="initSegment"!==at?at:0,rt&&(c.startCC=rt.cc,c.initSegment||c.fragments.every((function(t){return A.test(t.relurl)}))&&(o.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),(E=new u.c(i,e)).relurl=it.relurl,E.level=r,E.sn="initSegment",c.initSegment=E,c.needSidxRanges=!0))}else c.endSN=0,c.startCC=0;return c.partList&&(y+=c.fragmentHint.duration),c.totalduration=y,c.endCC=b,R>0&&function(t,e){for(var r=t[e],i=e;i--;){var a=t[i];if(!a)return;a.programDateTime=r.programDateTime-1e3*a.duration,r=a}}(v,R),c},t}();function D(t,e){["video","audio","text"].forEach((function(r){var i=t.filter((function(t){return function(t,e){var r=p[e];return!!r&&!0===r[t.slice(0,4)]}(t,r)}));if(i.length){var a=i.filter((function(t){return 0===t.lastIndexOf("avc1",0)||0===t.lastIndexOf("mp4a",0)}));e[r+"Codec"]=a.length>0?a[0]:i[0],t=t.filter((function(t){return-1===i.indexOf(t)}))}})),e.unknownCodecs=t}function _(t,e,r){var i=e[r];i&&(t[r]=i)}function k(t,e){t.rawProgramDateTime?t.programDateTime=Date.parse(t.rawProgramDateTime):null!=e&&e.programDateTime&&(t.programDateTime=e.endProgramDateTime),Object(n.a)(t.programDateTime)||(t.programDateTime=null,t.rawProgramDateTime=null)}function x(t,e){var r=t.url;return void 0!==r&&0!==r.indexOf("data:")||(r=e.url),r}!function(t){t.MANIFEST="manifest",t.LEVEL="level",t.AUDIO_TRACK="audioTrack",t.SUBTITLE_TRACK="subtitleTrack"}(y||(y={})),function(t){t.MAIN="main",t.AUDIO="audio",t.SUBTITLE="subtitle"}(b||(b={}));var w,C=function(){function t(t){this.hls=void 0,this.loaders=Object.create(null),this.checkAgeHeader=!0,this.hls=t,this.registerListeners()}var e=t.prototype;return e.registerListeners=function(){var t=this.hls;t.on(s.a.MANIFEST_LOADING,this.onManifestLoading,this),t.on(s.a.LEVEL_LOADING,this.onLevelLoading,this),t.on(s.a.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),t.on(s.a.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},e.unregisterListeners=function(){var t=this.hls;t.off(s.a.MANIFEST_LOADING,this.onManifestLoading,this),t.off(s.a.LEVEL_LOADING,this.onLevelLoading,this),t.off(s.a.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),t.off(s.a.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},e.createInternalLoader=function(t){var e=this.hls.config,r=e.pLoader,i=e.loader,a=new(r||i)(e);return t.loader=a,this.loaders[t.type]=a,a},e.getInternalLoader=function(t){return this.loaders[t.type]},e.resetInternalLoader=function(t){this.loaders[t]&&delete this.loaders[t]},e.destroyInternalLoaders=function(){for(var t in this.loaders){var e=this.loaders[t];e&&e.destroy(),this.resetInternalLoader(t)}},e.destroy=function(){this.unregisterListeners(),this.destroyInternalLoaders()},e.onManifestLoading=function(t,e){var r=e.url;this.checkAgeHeader=!0,this.load({id:null,groupId:null,level:0,responseType:"text",type:y.MANIFEST,url:r,deliveryDirectives:null})},e.onLevelLoading=function(t,e){var r=e.id,i=e.level,a=e.url,n=e.deliveryDirectives;this.load({id:r,groupId:null,level:i,responseType:"text",type:y.LEVEL,url:a,deliveryDirectives:n})},e.onAudioTrackLoading=function(t,e){var r=e.id,i=e.groupId,a=e.url,n=e.deliveryDirectives;this.load({id:r,groupId:i,level:null,responseType:"text",type:y.AUDIO_TRACK,url:a,deliveryDirectives:n})},e.onSubtitleTrackLoading=function(t,e){var r=e.id,i=e.groupId,a=e.url,n=e.deliveryDirectives;this.load({id:r,groupId:i,level:null,responseType:"text",type:y.SUBTITLE_TRACK,url:a,deliveryDirectives:n})},e.load=function(t){var e,r,i,a,n,s,l=this.hls.config,u=this.getInternalLoader(t);if(u){var d=u.context;if(d&&d.url===t.url)return void o.b.trace("[playlist-loader]: playlist request ongoing");o.b.log("[playlist-loader]: aborting previous loader for type: "+t.type),u.abort()}switch(t.type){case y.MANIFEST:r=l.manifestLoadingMaxRetry,i=l.manifestLoadingTimeOut,a=l.manifestLoadingRetryDelay,n=l.manifestLoadingMaxRetryTimeout;break;case y.LEVEL:case y.AUDIO_TRACK:case y.SUBTITLE_TRACK:r=0,i=l.levelLoadingTimeOut;break;default:r=l.levelLoadingMaxRetry,i=l.levelLoadingTimeOut,a=l.levelLoadingRetryDelay,n=l.levelLoadingMaxRetryTimeout}if((u=this.createInternalLoader(t),null!==(e=t.deliveryDirectives)&&void 0!==e&&e.part)&&(t.type===y.LEVEL&&null!==t.level?s=this.hls.levels[t.level].details:t.type===y.AUDIO_TRACK&&null!==t.id?s=this.hls.audioTracks[t.id].details:t.type===y.SUBTITLE_TRACK&&null!==t.id&&(s=this.hls.subtitleTracks[t.id].details),s)){var h=s.partTarget,f=s.targetduration;h&&f&&(i=Math.min(1e3*Math.max(3*h,.8*f),i))}var c={timeout:i,maxRetry:r,retryDelay:a,maxRetryDelay:n,highWaterMark:0},v={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};u.load(t,c,v)},e.loadsuccess=function(t,e,r,i){if(void 0===i&&(i=null),r.isSidxRequest)return this.handleSidxRequest(t,r),void this.handlePlaylistLoaded(t,e,r,i);this.resetInternalLoader(r.type);var a=t.data;0===a.indexOf("#EXTM3U")?(e.parsing.start=performance.now(),a.indexOf("#EXTINF:")>0||a.indexOf("#EXT-X-TARGETDURATION:")>0?this.handleTrackOrLevelPlaylist(t,e,r,i):this.handleMasterPlaylist(t,e,r,i)):this.handleManifestParsingError(t,r,"no EXTM3U delimiter",i)},e.loaderror=function(t,e,r){void 0===r&&(r=null),this.handleNetworkError(e,r,!1,t)},e.loadtimeout=function(t,e,r){void 0===r&&(r=null),this.handleNetworkError(e,r,!0)},e.handleMasterPlaylist=function(t,e,r,i){var a=this.hls,n=t.data,l=x(t,r),u=R.parseMasterPlaylist(n,l),d=u.levels,h=u.sessionData;if(d.length){var f=d.map((function(t){return{id:t.attrs.AUDIO,audioCodec:t.audioCodec}})),c=d.map((function(t){return{id:t.attrs.SUBTITLES,textCodec:t.textCodec}})),v=R.parseMasterPlaylistMedia(n,l,"AUDIO",f),p=R.parseMasterPlaylistMedia(n,l,"SUBTITLES",c),m=R.parseMasterPlaylistMedia(n,l,"CLOSED-CAPTIONS");if(v.length)v.some((function(t){return!t.url}))||!d[0].audioCodec||d[0].attrs.AUDIO||(o.b.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),v.unshift({type:"main",name:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new g({}),bitrate:0,url:""}));a.trigger(s.a.MANIFEST_LOADED,{levels:d,audioTracks:v,subtitles:p,captions:m,url:l,stats:e,networkDetails:i,sessionData:h})}else this.handleManifestParsingError(t,r,"no level found in manifest",i)},e.handleTrackOrLevelPlaylist=function(t,e,r,i){var o=this.hls,l=r.id,u=r.level,d=r.type,h=x(t,r),f=Object(n.a)(l)?l:0,c=Object(n.a)(u)?u:f,v=function(t){switch(t.type){case y.AUDIO_TRACK:return b.AUDIO;case y.SUBTITLE_TRACK:return b.SUBTITLE;default:return b.MAIN}}(r),p=R.parseLevelPlaylist(t.data,h,c,v,f);if(p.fragments.length){if(d===y.MANIFEST){var m={attrs:new g({}),bitrate:0,details:p,name:"",url:h};o.trigger(s.a.MANIFEST_LOADED,{levels:[m],audioTracks:[],url:h,stats:e,networkDetails:i,sessionData:null})}if(e.parsing.end=performance.now(),p.needSidxRanges){var T=p.initSegment.url;this.load({url:T,isSidxRequest:!0,type:d,level:u,levelDetails:p,id:l,groupId:null,rangeStart:0,rangeEnd:2048,responseType:"arraybuffer",deliveryDirectives:null})}else r.levelDetails=p,this.handlePlaylistLoaded(t,e,r,i)}else o.trigger(s.a.ERROR,{type:a.b.NETWORK_ERROR,details:a.a.LEVEL_EMPTY_ERROR,fatal:!1,url:h,reason:"no fragments found in level",level:"number"==typeof r.level?r.level:void 0})},e.handleSidxRequest=function(t,e){var r=Object(l.g)(new Uint8Array(t.data));if(r){var i=r.references,a=e.levelDetails;i.forEach((function(t,e){var r=t.info,i=a.fragments[e];0===i.byteRange.length&&i.setByteRange(String(1+r.end-r.start)+"@"+String(r.start))})),a.initSegment.setByteRange(String(r.moovEndOffset)+"@0")}},e.handleManifestParsingError=function(t,e,r,i){this.hls.trigger(s.a.ERROR,{type:a.b.NETWORK_ERROR,details:a.a.MANIFEST_PARSING_ERROR,fatal:e.type===y.MANIFEST,url:t.url,reason:r,response:t,context:e,networkDetails:i})},e.handleNetworkError=function(t,e,r,i){void 0===r&&(r=!1),o.b.warn("[playlist-loader]: A network "+(r?"timeout":"error")+" occurred while loading "+t.type+" level: "+t.level+" id: "+t.id+' group-id: "'+t.groupId+'"');var n=a.a.UNKNOWN,l=!1,u=this.getInternalLoader(t);switch(t.type){case y.MANIFEST:n=r?a.a.MANIFEST_LOAD_TIMEOUT:a.a.MANIFEST_LOAD_ERROR,l=!0;break;case y.LEVEL:n=r?a.a.LEVEL_LOAD_TIMEOUT:a.a.LEVEL_LOAD_ERROR,l=!1;break;case y.AUDIO_TRACK:n=r?a.a.AUDIO_TRACK_LOAD_TIMEOUT:a.a.AUDIO_TRACK_LOAD_ERROR,l=!1;break;case y.SUBTITLE_TRACK:n=r?a.a.SUBTITLE_TRACK_LOAD_TIMEOUT:a.a.SUBTITLE_LOAD_ERROR,l=!1}u&&this.resetInternalLoader(t.type);var d={type:a.b.NETWORK_ERROR,details:n,fatal:l,url:t.url,loader:u,context:t,networkDetails:e};i&&(d.response=i),this.hls.trigger(s.a.ERROR,d)},e.handlePlaylistLoaded=function(t,e,r,i){var a=r.type,n=r.level,o=r.id,l=r.groupId,u=r.loader,d=r.levelDetails,h=r.deliveryDirectives;if(null!=d&&d.targetduration){if(u){var f=this.checkAgeHeader&&d.live?u.getResponseHeader("age"):null;switch(d.ageHeader=f?parseFloat(f):0,this.checkAgeHeader=!!f,a){case y.MANIFEST:case y.LEVEL:this.hls.trigger(s.a.LEVEL_LOADED,{details:d,level:n||0,id:o||0,stats:e,networkDetails:i,deliveryDirectives:h});break;case y.AUDIO_TRACK:this.hls.trigger(s.a.AUDIO_TRACK_LOADED,{details:d,id:o||0,groupId:l||"",stats:e,networkDetails:i,deliveryDirectives:h});break;case y.SUBTITLE_TRACK:this.hls.trigger(s.a.SUBTITLE_TRACK_LOADED,{details:d,id:o||0,groupId:l||"",stats:e,networkDetails:i,deliveryDirectives:h})}}}else this.handleManifestParsingError(t,r,"invalid target duration",i)},t}(),O=function(){function t(t){this.hls=void 0,this.loaders={},this.decryptkey=null,this.decrypturl=null,this.hls=t,this._registerListeners()}var e=t.prototype;return e._registerListeners=function(){this.hls.on(s.a.KEY_LOADING,this.onKeyLoading,this)},e._unregisterListeners=function(){this.hls.off(s.a.KEY_LOADING,this.onKeyLoading)},e.destroy=function(){for(var t in this._unregisterListeners(),this.loaders){var e=this.loaders[t];e&&e.destroy()}this.loaders={}},e.onKeyLoading=function(t,e){var r=e.frag,i=r.type,a=this.loaders[i];if(r.decryptdata){var n=r.decryptdata.uri;if(n!==this.decrypturl||null===this.decryptkey){var l=this.hls.config;if(a&&(o.b.warn("abort previous key loader for type:"+i),a.abort()),!n)return void o.b.warn("key uri is falsy");var u=l.loader,d=r.loader=this.loaders[i]=new u(l);this.decrypturl=n,this.decryptkey=null;var h={url:n,frag:r,responseType:"arraybuffer"},f={timeout:l.fragLoadingTimeOut,maxRetry:0,retryDelay:l.fragLoadingRetryDelay,maxRetryDelay:l.fragLoadingMaxRetryTimeout,highWaterMark:0},c={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};d.load(h,f,c)}else this.decryptkey&&(r.decryptdata.key=this.decryptkey,this.hls.trigger(s.a.KEY_LOADED,{frag:r}))}else o.b.warn("Missing decryption data on fragment in onKeyLoading")},e.loadsuccess=function(t,e,r){var i=r.frag;i.decryptdata?(this.decryptkey=i.decryptdata.key=new Uint8Array(t.data),i.loader=null,delete this.loaders[i.type],this.hls.trigger(s.a.KEY_LOADED,{frag:i})):o.b.error("after key load, decryptdata unset")},e.loaderror=function(t,e){var r=e.frag,i=r.loader;i&&i.abort(),delete this.loaders[r.type],this.hls.trigger(s.a.ERROR,{type:a.b.NETWORK_ERROR,details:a.a.KEY_LOAD_ERROR,fatal:!1,frag:r,response:t})},e.loadtimeout=function(t,e){var r=e.frag,i=r.loader;i&&i.abort(),delete this.loaders[r.type],this.hls.trigger(s.a.ERROR,{type:a.b.NETWORK_ERROR,details:a.a.KEY_LOAD_TIMEOUT,fatal:!1,frag:r})},t}();!function(t){t.NOT_LOADED="NOT_LOADED",t.BACKTRACKED="BACKTRACKED",t.APPENDING="APPENDING",t.PARTIAL="PARTIAL",t.OK="OK"}(w||(w={}));var I=function(){function t(t){this.activeFragment=null,this.activePart=null,this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hls=t,this._registerListeners()}var e=t.prototype;return e._registerListeners=function(){var t=this.hls;t.on(s.a.BUFFER_APPENDED,this.onBufferAppended,this),t.on(s.a.FRAG_BUFFERED,this.onFragBuffered,this),t.on(s.a.FRAG_LOADED,this.onFragLoaded,this)},e._unregisterListeners=function(){var t=this.hls;t.off(s.a.BUFFER_APPENDED,this.onBufferAppended,this),t.off(s.a.FRAG_BUFFERED,this.onFragBuffered,this),t.off(s.a.FRAG_LOADED,this.onFragLoaded,this)},e.destroy=function(){this.fragments=Object.create(null),this.timeRanges=Object.create(null),this._unregisterListeners()},e.getAppendedFrag=function(t,e){var r=this.activeFragment;return r?void 0!==r.appendedPTS&&r.start<=t&&t<=r.appendedPTS?r:this.getBufferedFrag(t,e):null},e.getBufferedFrag=function(t,e){for(var r=this.fragments,i=Object.keys(r),a=i.length;a--;){var n=r[i[a]];if((null==n?void 0:n.body.type)===e&&n.buffered){var s=n.body;if(s.start<=t&&t<=s.end)return s}}return null},e.detectEvictedFragments=function(t,e){var r=this;Object.keys(this.fragments).forEach((function(i){var a=r.fragments[i];if(a&&a.buffered){var n=a.range[t];n&&n.time.some((function(t){var i=!r.isTimeBuffered(t.startPTS,t.endPTS,e);return i&&r.removeFragment(a.body),i}))}}))},e.detectPartialFragments=function(t){var e=this,r=this.timeRanges,i=t.frag,a=t.part;if(r&&"initSegment"!==i.sn){var n=F(i),s=this.fragments[n];s&&(s.buffered=!0,s.backtrack=s.loaded=null,Object.keys(r).forEach((function(t){var n=i.elementaryStreams[t];if(n){var o=r[t],l=null!==a||!0===n.partial;s.range[t]=e.getBufferedTimes(i,a,l,o)}})))}},e.getBufferedTimes=function(t,e,r,i){for(var a={time:[],partial:r},n=e?e.start:t.start,s=e?e.end:t.end,o=t.minEndPTS||s,l=t.maxStartPTS||n,u=0;u<i.length;u++){var d=i.start(u)-this.bufferPadding,h=i.end(u)+this.bufferPadding;if(l>=d&&o<=h){a.time.push({startPTS:Math.max(n,i.start(u)),endPTS:Math.min(s,i.end(u))});break}if(n<h&&s>d)a.partial=!0,a.time.push({startPTS:Math.max(n,i.start(u)),endPTS:Math.min(s,i.end(u))});else if(s<=d)break}return a},e.getPartialFragment=function(t){var e,r,i,a=null,n=0,s=this.bufferPadding,o=this.fragments;return Object.keys(o).forEach((function(l){var u=o[l];u&&P(u)&&(r=u.body.start-s,i=u.body.end+s,t>=r&&t<=i&&(e=Math.min(t-r,i-t),n<=e&&(a=u.body,n=e)))})),a},e.getState=function(t){var e=F(t),r=this.fragments[e];return r?r.buffered?P(r)?w.PARTIAL:w.OK:r.backtrack?w.BACKTRACKED:w.APPENDING:w.NOT_LOADED},e.backtrack=function(t,e){var r=F(t),i=this.fragments[r];i&&!i.backtrack&&(i.backtrack=e||i.loaded,i.loaded=null)},e.getBacktrackData=function(t){var e=F(t),r=this.fragments[e];if(r){var i,a=r.backtrack;if(null!=a&&null!==(i=a.payload)&&void 0!==i&&i.byteLength)return a;this.removeFragment(t)}return null},e.isTimeBuffered=function(t,e,r){for(var i,a,n=0;n<r.length;n++){if(i=r.start(n)-this.bufferPadding,a=r.end(n)+this.bufferPadding,t>=i&&e<=a)return!0;if(e<=i)return!1}return!1},e.onFragLoaded=function(t,e){var r=e.frag,i=e.part;if("initSegment"!==r.sn&&!r.bitrateTest&&!i){var a=F(r);this.fragments[a]={body:r,part:i,loaded:e,backtrack:null,buffered:!1,range:Object.create(null)}}},e.onBufferAppended=function(t,e){var r=this,i=e.frag,a=e.part,n=e.timeRanges;this.activeFragment=i,this.activePart=a,this.timeRanges=n,Object.keys(n).forEach((function(t){var e=n[t];if(r.detectEvictedFragments(t,e),!a)for(var s=0;s<e.length;s++)i.appendedPTS=Math.max(e.end(s),i.appendedPTS||0)}))},e.onFragBuffered=function(t,e){this.detectPartialFragments(e)},e.hasFragment=function(t){var e=F(t);return!!this.fragments[e]},e.removeFragment=function(t){var e=F(t);t.stats.loaded=0,t.clearElementaryStreamInfo(),delete this.fragments[e]},e.removeAllFragments=function(){this.fragments=Object.create(null)},t}();function P(t){var e,r;return t.buffered&&((null===(e=t.range.video)||void 0===e?void 0:e.partial)||(null===(r=t.range.audio)||void 0===r?void 0:r.partial))}function F(t){return t.type+"_"+t.level+"_"+t.urlId+"_"+t.sn}var M=function(){function t(){this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}var e=t.prototype;return e.destroy=function(){this.onHandlerDestroying(),this.onHandlerDestroyed()},e.onHandlerDestroying=function(){this.clearNextTick(),this.clearInterval()},e.onHandlerDestroyed=function(){},e.hasInterval=function(){return!!this._tickInterval},e.hasNextTick=function(){return!!this._tickTimer},e.setInterval=function(t){return!this._tickInterval&&(this._tickInterval=self.setInterval(this._boundTick,t),!0)},e.clearInterval=function(){return!!this._tickInterval&&(self.clearInterval(this._tickInterval),this._tickInterval=null,!0)},e.clearNextTick=function(){return!!this._tickTimer&&(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0)},e.tick=function(){this._tickCallCount++,1===this._tickCallCount&&(this.doTick(),this._tickCallCount>1&&(this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)),this._tickCallCount=0)},e.doTick=function(){},t}(),N={length:0,start:function(){return 0},end:function(){return 0}},U=function(){function t(){}return t.isBuffered=function(e,r){try{if(e)for(var i=t.getBuffered(e),a=0;a<i.length;a++)if(r>=i.start(a)&&r<=i.end(a))return!0}catch(t){}return!1},t.bufferInfo=function(e,r,i){try{if(e){var a,n=t.getBuffered(e),s=[];for(a=0;a<n.length;a++)s.push({start:n.start(a),end:n.end(a)});return this.bufferedInfo(s,r,i)}}catch(t){}return{len:0,start:r,end:r,nextStart:void 0}},t.bufferedInfo=function(t,e,r){t.sort((function(t,e){var r=t.start-e.start;return r||e.end-t.end}));var i=[];if(r)for(var a=0;a<t.length;a++){var n=i.length;if(n){var s=i[n-1].end;t[a].start-s<r?t[a].end>s&&(i[n-1].end=t[a].end):i.push(t[a])}else i.push(t[a])}else i=t;for(var o,l=0,u=e,d=e,h=0;h<i.length;h++){var f=i[h].start,c=i[h].end;if(e+r>=f&&e<c)u=f,l=(d=c)-e;else if(e+r<f){o=f;break}}return{len:l,start:u||0,end:d||0,nextStart:o}},t.getBuffered=function(t){try{return t.buffered}catch(t){return o.b.log("failed to get media.buffered",t),N}},t}();function B(t,e,r){switch(e){case"audio":t.audioGroupIds||(t.audioGroupIds=[]),t.audioGroupIds.push(r);break;case"text":t.textGroupIds||(t.textGroupIds=[]),t.textGroupIds.push(r)}}function G(t){var e={};t.forEach((function(t){var r=t.groupId||"";t.id=e[r]=e[r]||0,e[r]++}))}function j(t,e){var r=e.startPTS;if(Object(n.a)(r)){var i,a=0;e.sn>t.sn?(a=r-t.start,i=t):(a=t.start-r,i=e),i.duration!==a&&(i.duration=a)}else if(e.sn>t.sn){t.cc===e.cc&&t.minEndPTS?e.start=t.start+(t.minEndPTS-t.start):e.start=t.start+t.duration}else e.start=Math.max(t.start-e.duration,0)}function H(t,e,r,i,a,s){i-r<=0&&(o.b.warn("Fragment should have a positive duration",e),i=r+e.duration,s=a+e.duration);var l=r,u=i,d=e.startPTS,h=e.endPTS;if(Object(n.a)(d)){var f=Math.abs(d-r);Object(n.a)(e.deltaPTS)?e.deltaPTS=Math.max(f,e.deltaPTS):e.deltaPTS=f,l=Math.max(r,d),r=Math.min(r,d),a=Math.min(a,e.startDTS),u=Math.min(i,h),i=Math.max(i,h),s=Math.max(s,e.endDTS)}e.duration=i-r;var c=r-e.start;e.appendedPTS=i,e.start=e.startPTS=r,e.maxStartPTS=l,e.startDTS=a,e.endPTS=i,e.minEndPTS=u,e.endDTS=s;var v,g=e.sn;if(!t||g<t.startSN||g>t.endSN)return 0;var p=g-t.startSN,m=t.fragments;for(m[p]=e,v=p;v>0;v--)j(m[v],m[v-1]);for(v=p;v<m.length-1;v++)j(m[v],m[v+1]);return t.fragmentHint&&j(m[m.length-1],t.fragmentHint),t.PTSKnown=t.alignedSliding=!0,c}function K(t,e){e.initSegment&&t.initSegment&&(e.initSegment=t.initSegment),t.fragmentHint&&delete t.fragmentHint.endPTS;var r,i=0;if(function(t,e,r){for(var i=e.skippedSegments,a=Math.max(t.startSN,e.startSN)-e.startSN,n=(t.fragmentHint?1:0)+(i?e.endSN:Math.min(t.endSN,e.endSN))-e.startSN,s=e.startSN-t.startSN,o=e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments,l=t.fragmentHint?t.fragments.concat(t.fragmentHint):t.fragments,u=a;u<=n;u++){var d=l[s+u],h=o[u];i&&!h&&u<i&&(h=e.fragments[u]=d),d&&h&&r(d,h)}}(t,e,(function(t,a){i=t.cc-a.cc,Object(n.a)(t.startPTS)&&Object(n.a)(t.endPTS)&&(a.start=a.startPTS=t.startPTS,a.startDTS=t.startDTS,a.appendedPTS=t.appendedPTS,a.maxStartPTS=t.maxStartPTS,a.endPTS=t.endPTS,a.endDTS=t.endDTS,a.minEndPTS=t.minEndPTS,a.duration=t.endPTS-t.startPTS,a.duration&&(r=a),e.PTSKnown=e.alignedSliding=!0),a.elementaryStreams=t.elementaryStreams,a.loader=t.loader,a.stats=t.stats,a.urlId=t.urlId})),e.skippedSegments&&(e.deltaUpdateFailed=e.fragments.some((function(t){return!t})),e.deltaUpdateFailed)){o.b.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(var a=e.skippedSegments;a--;)e.fragments.shift();e.startSN=e.fragments[0].sn,e.startCC=e.fragments[0].cc}var s=e.fragments;if(i){o.b.log("discontinuity sliding from playlist, take drift into account");for(var l=0;l<s.length;l++)s[l].cc+=i}e.skippedSegments&&(e.initSegment||(e.initSegment=t.initSegment),e.startCC=e.fragments[0].cc),function(t,e,r){if(t&&e)for(var i=0,a=0,n=t.length;a<=n;a++){var s=t[a],o=e[a+i];s&&o&&s.index===o.index&&s.fragment.sn===o.fragment.sn?r(s,o):i--}}(t.partList,e.partList,(function(t,e){e.elementaryStreams=t.elementaryStreams,e.stats=t.stats})),r?H(e,r,r.startPTS,r.endPTS,r.startDTS,r.endDTS):V(t,e),s.length&&(e.totalduration=e.edge-s[0].start)}function V(t,e){var r=e.startSN+e.skippedSegments-t.startSN,i=t.fragments,a=e.fragments;if(!(r<0||r>=i.length)){var n=i[r].start;if(n){for(var s=e.skippedSegments;s<a.length;s++)a[s].start+=n;e.fragmentHint&&(e.fragmentHint.start+=n)}}}var W=function(t,e,r,i,a,n){void 0===i&&(i=0),void 0===a&&(a=-1),void 0===n&&(n=!1),this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing={start:0,executeStart:0,executeEnd:0,end:0},this.buffering={audio:{start:0,executeStart:0,executeEnd:0,end:0},video:{start:0,executeStart:0,executeEnd:0,end:0},audiovideo:{start:0,executeStart:0,executeEnd:0,end:0}},this.level=t,this.sn=e,this.id=r,this.size=i,this.part=a,this.partial=n};function Y(t,e){if(t){var r=t.start+e;t.start=t.startPTS=r,t.endPTS=r+t.duration}}function X(t,e){for(var r=e.fragments,i=0,a=r.length;i<a;i++)Y(r[i],t);e.fragmentHint&&Y(e.fragmentHint,t),e.alignedSliding=!0}function q(t,e,r){e&&(!function(t,e,r){if(function(t,e,r){return!(!e.details||!(r.endCC>r.startCC||t&&t.cc<r.startCC))}(t,r,e)){var i=function(t,e){var r=t.fragments,i=e.fragments;if(i.length&&r.length){var a=function(t,e){for(var r=null,i=0,a=t.length;i<a;i++){var n=t[i];if(n&&n.cc===e){r=n;break}}return r}(r,i[0].cc);if(a&&(!a||a.startPTS))return a;o.b.log("No frag in previous level to align on")}else o.b.log("No fragments to align")}(r.details,e);null!=i&&i.start&&(o.b.log("Adjusting PTS using last level due to CC increase within current level "+e.url),X(i.start,e))}}(t,r,e),!r.alignedSliding&&e.details&&z(r,e.details),r.alignedSliding||!e.details||r.skippedSegments||V(e.details,r))}function z(t,e){if(e.fragments.length&&t.hasProgramDateTime&&e.hasProgramDateTime){var r=e.fragments[0].programDateTime,i=t.fragments[0].programDateTime,a=(i-r)/1e3+e.fragments[0].start;a&&Object(n.a)(a)&&(o.b.log("Adjusting PTS using programDateTime delta "+(i-r)+"ms, sliding:"+a.toFixed(3)+" "+t.url+" "),X(a,t))}}var Q={search:function(t,e){for(var r=0,i=t.length-1,a=null,n=null;r<=i;){var s=e(n=t[a=(r+i)/2|0]);if(s>0)r=a+1;else{if(!(s<0))return n;i=a-1}}return null}};function Z(t,e,r){void 0===t&&(t=0),void 0===e&&(e=0);var i=Math.min(e,r.duration+(r.deltaPTS?r.deltaPTS:0));return r.start+r.duration-i<=t?1:r.start-i>t&&r.start?-1:0}function $(t,e,r){var i=1e3*Math.min(e,r.duration+(r.deltaPTS?r.deltaPTS:0));return(r.endProgramDateTime||0)-i>t}function J(t){var e="function"==typeof Map?new Map:void 0;return(J=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return tt(t,arguments,it(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),rt(i,t)})(t)}function tt(t,e,r){return(tt=et()?Reflect.construct:function(t,e,r){var i=[null];i.push.apply(i,e);var a=new(Function.bind.apply(t,i));return r&&rt(a,r.prototype),a}).apply(null,arguments)}function et(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function rt(t,e){return(rt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function it(t){return(it=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var at=Math.pow(2,17),nt=function(){function t(t){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=t}var e=t.prototype;return e.abort=function(){this.loader&&this.loader.abort()},e.load=function(t,e){var r=this,i=t.url;if(!i)return Promise.reject(new ot({type:a.b.NETWORK_ERROR,details:a.a.FRAG_LOAD_ERROR,fatal:!1,frag:t,networkDetails:null},"Fragment does not have a "+(i?"part list":"url")));this.abort();var n=this.config,s=n.fLoader,o=n.loader;return new Promise((function(i,l){var u=r.loader=t.loader=s?new s(n):new o(n),d=st(t),h={timeout:n.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:n.fragLoadingMaxRetryTimeout,highWaterMark:at};t.stats=u.stats,u.load(d,h,{onSuccess:function(e,a,n,s){r.resetLoader(t,u),i({frag:t,part:null,payload:e.data,networkDetails:s})},onError:function(e,i,n){r.resetLoader(t,u),l(new ot({type:a.b.NETWORK_ERROR,details:a.a.FRAG_LOAD_ERROR,fatal:!1,frag:t,response:e,networkDetails:n}))},onAbort:function(e,i,n){r.resetLoader(t,u),l(new ot({type:a.b.NETWORK_ERROR,details:a.a.INTERNAL_ABORTED,fatal:!1,frag:t,networkDetails:n}))},onTimeout:function(e,i,n){r.resetLoader(t,u),l(new ot({type:a.b.NETWORK_ERROR,details:a.a.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t,networkDetails:n}))},onProgress:function(r,i,a,n){e&&e({frag:t,part:null,payload:a,networkDetails:n})}})}))},e.loadPart=function(t,e,r){var i=this;this.abort();var n=this.config,s=n.fLoader,o=n.loader;return new Promise((function(l,u){var d=i.loader=t.loader=s?new s(n):new o(n),h=st(t,e),f={timeout:n.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:n.fragLoadingMaxRetryTimeout,highWaterMark:at};e.stats=d.stats,d.load(h,f,{onSuccess:function(a,n,s,o){i.resetLoader(t,d),i.updateStatsFromPart(t,e);var u={frag:t,part:e,payload:a.data,networkDetails:o};r(u),l(u)},onError:function(r,n,s){i.resetLoader(t,d),u(new ot({type:a.b.NETWORK_ERROR,details:a.a.FRAG_LOAD_ERROR,fatal:!1,frag:t,part:e,response:r,networkDetails:s}))},onAbort:function(r,n,s){t.stats.aborted=e.stats.aborted,i.resetLoader(t,d),u(new ot({type:a.b.NETWORK_ERROR,details:a.a.INTERNAL_ABORTED,fatal:!1,frag:t,part:e,networkDetails:s}))},onTimeout:function(r,n,s){i.resetLoader(t,d),u(new ot({type:a.b.NETWORK_ERROR,details:a.a.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t,part:e,networkDetails:s}))}})}))},e.updateStatsFromPart=function(t,e){var r=t.stats,i=e.stats,a=i.total;if(r.loaded+=i.loaded,a){var n=Math.round(t.duration/e.duration),s=Math.min(Math.round(r.loaded/a),n),o=(n-s)*Math.round(r.loaded/s);r.total=r.loaded+o}else r.total=Math.max(r.loaded,r.total);var l=r.loading,u=i.loading;l.start?l.first+=u.first-u.start:(l.start=u.start,l.first=u.first),l.end=u.end},e.resetLoader=function(t,e){t.loader=null,this.loader===e&&(self.clearTimeout(this.partLoadTimeout),this.loader=null)},t}();function st(t,e){void 0===e&&(e=null);var r=e||t,i={frag:t,part:e,responseType:"arraybuffer",url:r.url,rangeStart:0,rangeEnd:0},a=r.byteRangeStartOffset,s=r.byteRangeEndOffset;return Object(n.a)(a)&&Object(n.a)(s)&&(i.rangeStart=a,i.rangeEnd=s),i}var ot=function(t){var e,r;function i(e){for(var r,i=arguments.length,a=new Array(i>1?i-1:0),n=1;n<i;n++)a[n-1]=arguments[n];return(r=t.call.apply(t,[this].concat(a))||this).data=void 0,r.data=e,r}return r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,i}(J(Error)),lt=r(14),ut={toString:function(t){for(var e="",r=t.length,i=0;i<r;i++)e+="["+t.start(i).toFixed(3)+","+t.end(i).toFixed(3)+"]";return e}};function dt(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var ht="STOPPED",ft="IDLE",ct="KEY_LOADING",vt="FRAG_LOADING",gt="FRAG_LOADING_WAITING_RETRY",pt="PARSING",mt="PARSED",yt="BACKTRACKING",bt="ENDED",Tt="ERROR",Et="WAITING_LEVEL",St=function(t){var e,r;function i(e,r,i){var a;return(a=t.call(this)||this).hls=void 0,a.fragPrevious=null,a.fragCurrent=null,a.fragmentTracker=void 0,a.transmuxer=null,a._state=ht,a.media=void 0,a.mediaBuffer=void 0,a.config=void 0,a.lastCurrentTime=0,a.nextLoadPosition=0,a.startPosition=0,a.loadedmetadata=!1,a.fragLoadError=0,a.levels=null,a.fragmentLoader=void 0,a.levelLastLoaded=null,a.startFragRequested=!1,a.decrypter=void 0,a.initPTS=[],a.onvseeking=null,a.onvended=null,a.logPrefix="",a.log=void 0,a.warn=void 0,a.logPrefix=i,a.log=o.b.log.bind(o.b,i+":"),a.warn=o.b.warn.bind(o.b,i+":"),a.hls=e,a.fragmentTracker=r,a.config=e.config,a.decrypter=new lt.a(e,e.config),e.on(s.a.KEY_LOADED,a.onKeyLoaded,function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(a)),a}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var u,d,h,f=i.prototype;return f.doTick=function(){this.onTickEnd()},f.onTickEnd=function(){},f.startLoad=function(t){},f.stopLoad=function(){var t=this.fragCurrent;t&&(t.loader&&t.loader.abort(),this.fragmentTracker.removeFragment(t)),this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=ht},f._streamEnded=function(t,e){var r=this.fragCurrent,i=this.fragmentTracker;if(!e.live&&r&&r.sn===e.endSN&&!t.nextStart){var a=i.getState(r);return a===w.PARTIAL||a===w.OK}return!1},f.onMediaAttached=function(t,e){var r=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),r.addEventListener("seeking",this.onvseeking),r.addEventListener("ended",this.onvended);var i=this.config;this.levels&&i.autoStartLoad&&this.state===ht&&this.startLoad(i.startPosition)},f.onMediaDetaching=function(){var t=this.media;null!=t&&t.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),t&&(t.removeEventListener("seeking",this.onvseeking),t.removeEventListener("ended",this.onvended),this.onvseeking=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()},f.onMediaSeeking=function(){var t=this.config,e=this.fragCurrent,r=this.media,i=this.mediaBuffer,a=this.state,s=r?r.currentTime:null,o=U.bufferInfo(i||r,s,t.maxBufferHole);if(this.log("media seeking to "+(Object(n.a)(s)?s.toFixed(3):s)+", state: "+a),a===bt)o.len||(this.fragPrevious=null,this.fragCurrent=null),this.state=ft;else if(e&&!o.len){var l=t.maxFragLookUpTolerance,u=e.start-l,d=e.start+e.duration+l;(s<u||s>d)&&(e.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),e.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.state=ft)}r&&(this.lastCurrentTime=s),this.loadedmetadata||(this.nextLoadPosition=this.startPosition=s),this.tick()},f.onMediaEnded=function(){this.startPosition=this.lastCurrentTime=0},f.onKeyLoaded=function(t,e){if(this.state===ct&&this.levels){this.state=ft;var r=this.levels[e.frag.level].details;r&&this.loadFragment(e.frag,r,e.frag.start)}},f.onHandlerDestroying=function(){this.stopLoad(),t.prototype.onHandlerDestroying.call(this)},f.onHandlerDestroyed=function(){this.state=ht,this.hls.off(s.a.KEY_LOADED,this.onKeyLoaded,this),t.prototype.onHandlerDestroyed.call(this)},f.loadFragment=function(t,e,r){this._loadFragForPlayback(t,e,r)},f._loadFragForPlayback=function(t,e,r){var i=this;this._doFragLoad(t,e,r,(function(e){if(i.fragContextChanged(t))return i.warn("Fragment "+t.sn+(e.part?" p: "+e.part.index:"")+" of level "+t.level+" was dropped during download."),void i.fragmentTracker.removeFragment(t);t.stats.chunkCount++,i._handleFragmentLoadProgress(e)})).then((function(e){i.fragLoadError=0,e&&(i.fragContextChanged(t)?i.state!==vt&&i.state!==yt||(i.fragmentTracker.removeFragment(t),i.state=ft):"payload"in e&&(i.log("Loaded fragment "+t.sn+" of level "+t.level),i.hls.trigger(s.a.FRAG_LOADED,e),i.state===yt)?i.fragmentTracker.backtrack(t,e):i._handleFragmentLoadComplete(e))}))},f.flushMainBuffer=function(t,e,r){void 0===r&&(r=null);var i={startOffset:t,endOffset:e,type:r};this.fragLoadError=0,this.hls.trigger(s.a.BUFFER_FLUSHING,i)},f._loadInitSegment=function(t){var e=this;this._doFragLoad(t).then((function(r){if(!r||e.fragContextChanged(t)||!e.levels)throw new Error("init load aborted");return r})).then((function(r){var i=e.hls,a=r.payload,n=t.decryptdata;if(a&&a.byteLength>0&&n&&n.key&&n.iv&&"AES-128"===n.method){var o=self.performance.now();return e.decrypter.webCryptoDecrypt(new Uint8Array(a),n.key.buffer,n.iv.buffer).then((function(e){var a=self.performance.now();return i.trigger(s.a.FRAG_DECRYPTED,{frag:t,payload:e,stats:{tstart:o,tdecrypt:a}}),r.payload=e,r}))}return r})).then((function(r){var i=e.fragCurrent,a=e.hls,n=e.levels;if(!n)throw new Error("init load aborted, missing levels");var o=n[t.level].details.initSegment,l=t.stats;e.state=ft,e.fragLoadError=0,o.data=new Uint8Array(r.payload),l.parsing.start=l.buffering.start=self.performance.now(),l.parsing.end=l.buffering.end=self.performance.now(),r.frag===i&&a.trigger(s.a.FRAG_BUFFERED,{stats:l,frag:i,part:null,id:t.type}),e.tick()})).catch((function(t){e.warn(t)}))},f.fragContextChanged=function(t){var e=this.fragCurrent;return!t||!e||t.level!==e.level||t.sn!==e.sn||t.urlId!==e.urlId},f.fragBufferedComplete=function(t,e){var r=this.mediaBuffer?this.mediaBuffer:this.media;this.log("Buffered "+t.type+" sn: "+t.sn+(e?" part: "+e.index:"")+" of "+("[stream-controller]"===this.logPrefix?"level":"track")+" "+t.level+" "+ut.toString(U.getBuffered(r))),this.state=ft,this.tick()},f._handleFragmentLoadComplete=function(t){var e=this.transmuxer;if(e){var r=t.frag,i=t.part,a=t.partsLoaded,n=!a||a&&(0===a.length||a.some((function(t){return!t}))),s=new W(r.level,r.sn,r.stats.chunkCount+1,0,i?i.index:-1,!n);e.flush(s)}},f._handleFragmentLoadProgress=function(t){},f._doFragLoad=function(t,e,r,i){var a=this;if(void 0===r&&(r=null),!this.levels)throw new Error("frag load aborted, missing levels");if(r=Math.max(t.start,r||0),this.config.lowLatencyMode&&e){var n=e.partList;if(n&&i){var o=this.getNextPart(n,t,r);if(o>-1){var l=n[o];return this.log("Loading part sn: "+t.sn+" p: "+l.index+" cc: "+t.cc+" of playlist ["+e.startSN+"-"+e.endSN+"] parts [0-"+o+"-"+(n.length-1)+"] "+("[stream-controller]"===this.logPrefix?"level":"track")+": "+t.level+", target: "+parseFloat(r.toFixed(3))),this.state=vt,this.hls.trigger(s.a.FRAG_LOADING,{frag:t,part:n[o],targetBufferTime:r}),this.doFragPartsLoad(t,n,o,i).catch((function(t){return a.handleFragError(t)}))}if(!t.url||this.loadedEndOfParts(n,r))return Promise.resolve(null)}}return this.log("Loading fragment "+t.sn+" cc: "+t.cc+" "+(e?"of ["+e.startSN+"-"+e.endSN+"] ":"")+("[stream-controller]"===this.logPrefix?"level":"track")+": "+t.level+", target: "+parseFloat(r.toFixed(3))),this.state=vt,this.hls.trigger(s.a.FRAG_LOADING,{frag:t,targetBufferTime:r}),this.fragmentLoader.load(t,i).catch((function(t){return a.handleFragError(t)}))},f.doFragPartsLoad=function(t,e,r,i){var a=this;return new Promise((function(n,o){var l=[];!function r(u){var d=e[u];a.fragmentLoader.loadPart(t,d,i).then((function(i){l[d.index]=i;var o=i.part;a.hls.trigger(s.a.FRAG_LOADED,i);var h=e[u+1];if(!h||h.fragment!==t)return n({frag:t,part:o,partsLoaded:l});r(u+1)})).catch(o)}(r)}))},f.handleFragError=function(t){var e=t.data;return e&&e.details===a.a.INTERNAL_ABORTED?this.handleFragLoadAborted(e.frag,e.part):this.hls.trigger(s.a.ERROR,e),null},f._handleTransmuxerFlush=function(t){if(this.state===pt){var e=this.getCurrentContext(t);if(e){var r=e.frag,i=e.part,a=e.level,n=self.performance.now();r.stats.parsing.end=n,i&&(i.stats.parsing.end=n),this.updateLevelTiming(r,a,t.partial),this.state=mt,this.hls.trigger(s.a.FRAG_PARSED,{frag:r,part:i})}}else this.warn("State is expected to be PARSING on transmuxer flush, but is "+this.state+".")},f.getCurrentContext=function(t){var e=this.levels,r=t.level,i=t.sn,a=t.part;if(!e||!e[r])return this.warn("Levels object was unset while buffering fragment "+i+" of level "+r+". The current chunk will not be buffered."),null;var n=e[r],s=a>-1?function(t,e,r){if(!t||!t.details)return null;var i=t.details.partList;if(i)for(var a=i.length;a--;){var n=i[a];if(n.index===r&&n.fragment.sn===e)return n}return null}(n,i,a):null,o=s?s.fragment:function(t,e){if(!t||!t.details)return null;var r=t.details,i=r.fragments[e-r.startSN];return i||((i=r.fragmentHint)&&i.sn===e?i:null)}(n,i);return o?{frag:o,part:s,level:n}:null},f.bufferFragmentData=function(t,e,r,i){if(t&&this.state===pt){var a=t.data1,n=t.data2,o=a;if(a&&n&&(o=Object(l.a)(a,n)),o&&o.length){var u={type:t.type,data:o,frag:e,part:r,chunkMeta:i};this.hls.trigger(s.a.BUFFER_APPENDING,u),t.dropped&&t.independent&&!r&&this.flushMainBuffer(0,e.start)}}},f.getNextFragment=function(t,e){var r=this.config,i=this.startFragRequested,a=e.fragments,n=a.length;if(!n)return null;var s,o=a[0].start;if(e.initSegment&&!e.initSegment.data)s=e.initSegment;else if(e.live){var l=r.initialLiveManifestSize;if(n<l)return this.warn("Not enough fragments to start playback (have: "+n+", need: "+l+")"),null;e.PTSKnown||i||(s=this.getInitialLiveFragment(e,a))}else t<=o&&(s=a[0]);if(!s){var u=r.lowLatencyMode?e.partEnd:e.fragmentEnd;s=this.getFragmentAtPosition(t,u,e)}return s},f.getNextPart=function(t,e,r){for(var i=-1,a=!1,n=0,s=t.length;n<s;n++){var o=t[n];if(i>-1&&r<o.start)break;var l=o.loaded;l||!a&&!o.independent||o.fragment!==e||(i=n),a=l}return i},f.loadedEndOfParts=function(t,e){var r=t[t.length-1];return r&&e>r.start&&r.loaded},f.getInitialLiveFragment=function(t,e){var r=this.config,i=this.fragPrevious,a=null;if(i)if(t.hasProgramDateTime)this.log("Live playlist, switching playlist, load frag with same PDT: "+i.programDateTime),a=function(t,e,r){if(null===e||!Array.isArray(t)||!t.length||!Object(n.a)(e))return null;if(e<(t[0].programDateTime||0))return null;if(e>=(t[t.length-1].endProgramDateTime||0))return null;r=r||0;for(var i=0;i<t.length;++i){var a=t[i];if($(e,r,a))return a}return null}(e,i.endProgramDateTime,r.maxFragLookUpTolerance);else{var s=i.sn+1;if(s>=t.startSN&&s<=t.endSN){var o=e[s-t.startSN];i.cc===o.cc&&(a=o,this.log("Live playlist, switching playlist, load frag with next SN: "+a.sn))}a||(a=function(t,e){return Q.search(t,(function(t){return t.cc<e?1:t.cc>e?-1:0}))}(e,i.cc))&&this.log("Live playlist, switching playlist, load frag with same CC: "+a.sn)}return a},f.getFragmentAtPosition=function(t,e,r){var i,a=this.config,n=this.fragPrevious,s=r.fragments,o=r.endSN,l=r.fragmentHint,u=a.maxFragLookUpTolerance,d=!!(a.lowLatencyMode&&r.partList&&l);(d&&l&&(s=s.concat(l),o=l.sn),t<e)?i=function(t,e,r,i){void 0===r&&(r=0),void 0===i&&(i=0);var a=null;if(t?a=e[t.sn-e[0].sn+1]:0===r&&0===e[0].start&&(a=e[0]),a&&0===Z(r,i,a))return a;var n=Q.search(e,Z.bind(null,r,i));return n||a}(n,s,t,t>e-u?0:u):i=s[s.length-1];if(i){var h=i.sn-r.startSN,f=n&&i.level===n.level,c=s[h+1];if(this.fragmentTracker.getState(i)===w.BACKTRACKED){i=null;for(var v=h;s[v]&&this.fragmentTracker.getState(s[v])===w.BACKTRACKED;)i=n?s[v--]:s[--v];i||(i=c)}else n&&i.sn===n.sn&&!d&&f&&(i.sn<o&&this.fragmentTracker.getState(c)!==w.OK?(this.log("SN "+i.sn+" just loaded, load next one: "+c.sn),i=c):i=null)}return i},f.synchronizeToLiveEdge=function(t){var e=this.config,r=this.media,i=this.hls.liveSyncPosition,a=r.currentTime;if(null!==i&&null!=r&&r.readyState&&r.duration>i&&i>a){var n=void 0!==e.liveMaxLatencyDuration?e.liveMaxLatencyDuration:e.liveMaxLatencyDurationCount*t.targetduration,s=t.fragments[0].start,o=t.edge;if(a<Math.max(s-e.maxFragLookUpTolerance,o-n))return this.warn("Playback: "+a.toFixed(3)+" is located too far from the end of live sliding playlist: "+o+", reset currentTime to : "+i.toFixed(3)),this.loadedmetadata||(this.nextLoadPosition=i),r.currentTime=i,i}return null},f.alignPlaylists=function(t,e){var r=this.levels,i=this.levelLastLoaded,a=null!==i?r[i]:null,s=0;return e&&t.fragments.length>0?(s=t.fragments[0].start,t.alignedSliding&&Object(n.a)(s)?this.log("Live playlist sliding:"+s.toFixed(3)):s||(this.warn("["+this.constructor.name+"] Live playlist - outdated PTS, unknown sliding"),q(this.fragPrevious,a,t))):(this.log("Live playlist - first load, unknown sliding"),q(this.fragPrevious,a,t)),s},f.waitForCdnTuneIn=function(t){return t.live&&t.canBlockReload&&t.tuneInGoal>Math.max(t.partHoldBack,3*t.partTarget)},f.setStartPosition=function(t,e){if(-1===this.startPosition||-1===this.lastCurrentTime){var r=t.startTimeOffset;Object(n.a)(r)?(r<0&&(this.log("Negative start time offset "+r+", count from end of last fragment"),r=e+t.totalduration+r),this.log("Start time offset found in playlist, adjust startPosition to "+r),this.startPosition=r):t.live?(this.startPosition=this.hls.liveSyncPosition||e,this.log("Configure startPosition to "+this.startPosition)):this.startPosition=0,this.lastCurrentTime=this.startPosition}this.nextLoadPosition=this.startPosition},f.getLoadPosition=function(){var t=this.media,e=0;return this.loadedmetadata?e=t.currentTime:this.nextLoadPosition&&(e=this.nextLoadPosition),e},f.handleFragLoadAborted=function(t,e){this.transmuxer&&"initSegment"!==t.sn&&(this.log("Fragment "+t.sn+" of level "+t.level+" was aborted, flushing transmuxer"),this.transmuxer.flush(new W(t.level,t.sn,t.stats.chunkCount+1,0,e?e.index:-1,!0)))},f.updateLevelTiming=function(t,e,r){var i=this,a=e.details;Object.keys(t.elementaryStreams).forEach((function(n){var o=t.elementaryStreams[n];if(o){var l=o.endPTS-o.startPTS;l<=0&&(i.warn("Could not parse fragment "+t.sn+" "+n+" duration reliably ("+l+") resetting transmuxer to fallback to playlist timing"),i.transmuxer&&(i.transmuxer.destroy(),i.transmuxer=null));var u=r?0:H(a,t,o.startPTS,o.endPTS,o.startDTS,o.endDTS);i.hls.trigger(s.a.LEVEL_PTS_UPDATED,{details:a,level:e,drift:u,type:n,frag:t,start:o.startPTS,end:o.endPTS})}}))},u=i,(d=[{key:"state",set:function(t){this._state!==t&&(this._state=t)},get:function(){return this._state}}])&&dt(u.prototype,d),h&&dt(u,h),i}(M);function Lt(){return self.MediaSource||self.WebKitMediaSource}function At(){return self.SourceBuffer||self.WebKitSourceBuffer}var Rt=r(16),Dt=r(8),_t=r(13),kt=Lt()||{isTypeSupported:function(){return!1}},xt=function(){function t(t,e,r,i){var n=this;this.hls=void 0,this.id=void 0,this.observer=void 0,this.frag=null,this.part=null,this.worker=void 0,this.onwmsg=void 0,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0,this.hls=t,this.id=e,this.onTransmuxComplete=r,this.onFlush=i;var l=t.config,u=function(e,r){(r=r||{}).frag=n.frag,r.id=n.id,t.trigger(e,r)};this.observer=new _t.EventEmitter,this.observer.on(s.a.FRAG_DECRYPTED,u),this.observer.on(s.a.ERROR,u);var d={mp4:kt.isTypeSupported("video/mp4"),mpeg:kt.isTypeSupported("audio/mpeg"),mp3:kt.isTypeSupported('audio/mp4; codecs="mp3"')},h=navigator.vendor;if(l.enableWorker&&"undefined"!=typeof Worker){var f;o.b.log("demuxing in webworker");try{f=this.worker=Rt(17),this.onwmsg=this.onWorkerMessage.bind(this),f.addEventListener("message",this.onwmsg),f.onerror=function(e){t.trigger(s.a.ERROR,{type:a.b.OTHER_ERROR,details:a.a.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",err:{message:e.message+" ("+e.filename+":"+e.lineno+")"}})},f.postMessage({cmd:"init",typeSupported:d,vendor:h,id:e,config:JSON.stringify(l)})}catch(t){o.b.warn("Error in worker:",t),o.b.error("Error while initializing DemuxerWorker, fallback to inline"),f&&self.URL.revokeObjectURL(f.objectURL),this.transmuxer=new Dt.c(this.observer,d,l,h),this.worker=null}}else this.transmuxer=new Dt.c(this.observer,d,l,h)}var e=t.prototype;return e.destroy=function(){var t=this.worker;if(t)t.removeEventListener("message",this.onwmsg),t.terminate(),this.worker=null;else{var e=this.transmuxer;e&&(e.destroy(),this.transmuxer=null)}var r=this.observer;r&&r.removeAllListeners(),this.observer=null},e.push=function(t,e,r,i,a,n,s,l,u,d){var h=this;u.transmuxing.start=self.performance.now();var f=this.transmuxer,c=this.worker,v=n?n.start:a.start,g=a.decryptdata,p=this.frag,m=!(p&&a.cc===p.cc),y=!(p&&u.level===p.level),b=p?u.sn-p.sn:-1,T=this.part?u.part-this.part.index:1,E=!y&&(1===b||0===b&&1===T),S=self.performance.now();(y||b||0===a.stats.parsing.start)&&(a.stats.parsing.start=S),!n||!T&&E||(n.stats.parsing.start=S);var L=new Dt.b(m,E,l,y,v);if(!E||m){o.b.log("[transmuxer-interface, "+a.type+"]: Starting new transmux session for sn: "+u.sn+" p: "+u.part+" level: "+u.level+" id: "+u.id+"\n        discontinuity: "+m+"\n        trackSwitch: "+y+"\n        contiguous: "+E+"\n        accurateTimeOffset: "+l+"\n        timeOffset: "+v);var A=new Dt.a(r,i,e,s,d);this.configureTransmuxer(A)}if(this.frag=a,this.part=n,c)c.postMessage({cmd:"demux",data:t,decryptdata:g,chunkMeta:u,state:L},t instanceof ArrayBuffer?[t]:[]);else if(f){var R=f.push(t,g,u,L);Object(Dt.d)(R)?R.then((function(t){h.handleTransmuxComplete(t)})):this.handleTransmuxComplete(R)}},e.flush=function(t){var e=this;t.transmuxing.start=self.performance.now();var r=this.transmuxer,i=this.worker;if(i)i.postMessage({cmd:"flush",chunkMeta:t});else if(r){var a=r.flush(t);Object(Dt.d)(a)?a.then((function(r){e.handleFlushResult(r,t)})):this.handleFlushResult(a,t)}},e.handleFlushResult=function(t,e){var r=this;t.forEach((function(t){r.handleTransmuxComplete(t)})),this.onFlush(e)},e.onWorkerMessage=function(t){var e=t.data,r=this.hls;switch(e.event){case"init":self.URL.revokeObjectURL(this.worker.objectURL);break;case"transmuxComplete":this.handleTransmuxComplete(e.data);break;case"flush":this.onFlush(e.data);break;default:e.data=e.data||{},e.data.frag=this.frag,e.data.id=this.id,r.trigger(e.event,e.data)}},e.configureTransmuxer=function(t){var e=this.worker,r=this.transmuxer;e?e.postMessage({cmd:"configure",config:t}):r&&r.configure(t)},e.handleTransmuxComplete=function(t){t.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(t)},t}(),wt=function(){function t(t,e,r,i){this.config=void 0,this.media=void 0,this.fragmentTracker=void 0,this.hls=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.config=t,this.media=e,this.fragmentTracker=r,this.hls=i}var e=t.prototype;return e.poll=function(t){var e=this.config,r=this.media,i=this.stalled,a=r.currentTime,n=r.seeking,s=this.seeking&&!n,l=!this.seeking&&n;if(this.seeking=n,a===t){if((l||s)&&(this.stalled=null),!r.paused&&!r.ended&&0!==r.playbackRate&&U.getBuffered(r).length){var u=U.bufferInfo(r,a,0),d=u.len>0,h=u.nextStart||0;if(d||h){if(n){var f=u.len>2,c=!h||h-a>2&&!this.fragmentTracker.getPartialFragment(a);if(f||c)return;this.moved=!1}if(!this.moved&&null!==this.stalled){var v,g=Math.max(h,u.start||0)-a,p=this.hls.levels?this.hls.levels[this.hls.currentLevel]:null,m=(null==p||null===(v=p.details)||void 0===v?void 0:v.live)?2*p.details.targetduration:2;if(g>0&&g<=m)return void this._trySkipBufferHole(null)}var y=self.performance.now();if(null!==i){var b=y-i;!n&&b>=250&&this._reportStall(u.len);var T=U.bufferInfo(r,a,e.maxBufferHole);this._tryFixBufferStall(T,b)}else this.stalled=y}}}else if(this.moved=!0,null!==i){if(this.stallReported){var E=self.performance.now()-i;o.b.warn("playback not stuck anymore @"+a+", after "+Math.round(E)+"ms"),this.stallReported=!1}this.stalled=null,this.nudgeRetry=0}},e._tryFixBufferStall=function(t,e){var r=this.config,i=this.fragmentTracker,a=this.media.currentTime,n=i.getPartialFragment(a);if(n&&this._trySkipBufferHole(n))return;t.len>r.maxBufferHole&&e>1e3*r.highBufferWatchdogPeriod&&(o.b.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())},e._reportStall=function(t){var e=this.hls,r=this.media;this.stallReported||(this.stallReported=!0,o.b.warn("Playback stalling at @"+r.currentTime+" due to low buffer (buffer="+t+")"),e.trigger(s.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.BUFFER_STALLED_ERROR,fatal:!1,buffer:t}))},e._trySkipBufferHole=function(t){for(var e=this.config,r=this.hls,i=this.media,n=i.currentTime,l=0,u=U.getBuffered(i),d=0;d<u.length;d++){var h=u.start(d);if(n+e.maxBufferHole>=l&&n<h){var f=Math.max(h+.05,i.currentTime+.1);return o.b.warn("skipping hole, adjusting currentTime from "+n+" to "+f),this.moved=!0,this.stalled=null,i.currentTime=f,t&&r.trigger(s.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.BUFFER_SEEK_OVER_HOLE,fatal:!1,reason:"fragment loaded with buffer holes, seeking from "+n+" to "+f,frag:t}),f}l=u.end(d)}return 0},e._tryNudgeBuffer=function(){var t=this.config,e=this.hls,r=this.media,i=r.currentTime,n=(this.nudgeRetry||0)+1;if(this.nudgeRetry=n,n<t.nudgeMaxRetry){var l=i+n*t.nudgeOffset;o.b.warn("Nudging 'currentTime' from "+i+" to "+l),r.currentTime=l,e.trigger(s.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.BUFFER_NUDGE_ON_STALL,fatal:!1})}else o.b.error("Playhead still not moving while enough data buffered @"+i+" after "+t.nudgeMaxRetry+" nudges"),e.trigger(s.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.BUFFER_STALLED_ERROR,fatal:!0})},t}();function Ct(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Ot,It=function(t){var e,r;function i(e,r){var i;return(i=t.call(this,e,r,"[stream-controller]")||this).audioCodecSwap=!1,i.bitrateTest=!1,i.gapController=null,i.level=-1,i._forceStartLoad=!1,i.retryDate=0,i.altAudio=!1,i.audioOnly=!1,i.fragPlaying=null,i.onvplaying=null,i.onvseeked=null,i.fragLastKbps=0,i.stalled=!1,i.audioCodecSwitch=!1,i.videoBuffer=null,i.fragmentLoader=new nt(e.config),i.state=ht,i._registerListeners(),i}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var l,d,h,f=i.prototype;return f._registerListeners=function(){var t=this.hls;t.on(s.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.on(s.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(s.a.MANIFEST_LOADING,this.onManifestLoading,this),t.on(s.a.MANIFEST_PARSED,this.onManifestParsed,this),t.on(s.a.LEVEL_LOADING,this.onLevelLoading,this),t.on(s.a.LEVEL_LOADED,this.onLevelLoaded,this),t.on(s.a.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),t.on(s.a.ERROR,this.onError,this),t.on(s.a.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),t.on(s.a.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),t.on(s.a.BUFFER_CREATED,this.onBufferCreated,this),t.on(s.a.BUFFER_FLUSHED,this.onBufferFlushed,this),t.on(s.a.LEVELS_UPDATED,this.onLevelsUpdated,this),t.on(s.a.FRAG_BUFFERED,this.onFragBuffered,this)},f._unregisterListeners=function(){var t=this.hls;t.off(s.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.off(s.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(s.a.MANIFEST_LOADING,this.onManifestLoading,this),t.off(s.a.MANIFEST_PARSED,this.onManifestParsed,this),t.off(s.a.LEVEL_LOADED,this.onLevelLoaded,this),t.off(s.a.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),t.off(s.a.ERROR,this.onError,this),t.off(s.a.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),t.off(s.a.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),t.off(s.a.BUFFER_CREATED,this.onBufferCreated,this),t.off(s.a.BUFFER_FLUSHED,this.onBufferFlushed,this),t.off(s.a.LEVELS_UPDATED,this.onLevelsUpdated,this),t.off(s.a.FRAG_BUFFERED,this.onFragBuffered,this)},f.onHandlerDestroying=function(){this._unregisterListeners()},f.startLoad=function(t){if(this.levels){var e=this.lastCurrentTime,r=this.hls;if(this.stopLoad(),this.setInterval(100),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var i=r.startLevel;-1===i&&(r.config.testBandwidth?(i=0,this.bitrateTest=!0):i=r.nextAutoLevel),this.level=r.nextLoadLevel=i,this.loadedmetadata=!1}e>0&&-1===t&&(this.log("Override startPosition with lastCurrentTime @"+e.toFixed(3)),t=e),this.state=ft,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=t,this.tick()}else this._forceStartLoad=!0,this.state=ht},f.stopLoad=function(){this._forceStartLoad=!1,t.prototype.stopLoad.call(this)},f.doTick=function(){switch(this.state){case ft:this.doTickIdle();break;case Et:var t,e=this.levels,r=this.level,i=null==e||null===(t=e[r])||void 0===t?void 0:t.details;if(i&&(!i.live||this.levelLastLoaded===this.level)){if(this.waitForCdnTuneIn(i))break;this.state=ft;break}break;case gt:var a,n=self.performance.now(),s=this.retryDate;(!s||n>=s||null!==(a=this.media)&&void 0!==a&&a.seeking)&&(this.log("retryDate reached, switch back to IDLE state"),this.state=ft)}this.onTickEnd()},f.onTickEnd=function(){t.prototype.onTickEnd.call(this),this.checkBuffer(),this.checkFragmentChanged()},f.doTickIdle=function(){var t,e,r=this.hls,i=this.levelLastLoaded,a=this.levels,o=this.media,l=r.config,u=r.nextLoadLevel;if(null!==i&&(o||!this.startFragRequested&&l.startFragPrefetch)&&(!this.altAudio||!this.audioOnly)&&a&&a[u]){var d=a[u];this.level=r.nextLoadLevel=u;var h=d.details;if(!h||this.state===Et||h.live&&this.levelLastLoaded!==u)this.state=Et;else{var f=this.getLoadPosition();if(Object(n.a)(f)){var c=h.initSegment,v=0;if(!c||c.data){var g,p=d.maxBitrate;g=p?Math.max(8*l.maxBufferSize/p,l.maxBufferLength):l.maxBufferLength,g=Math.min(g,l.maxMaxBufferLength);var m=f<l.maxBufferHole?Math.max(2,l.maxBufferHole):l.maxBufferHole,y=U.bufferInfo(this.mediaBuffer?this.mediaBuffer:o,f,m);if(y.len>=g)return;if(this._streamEnded(y,h)){var b={};return this.altAudio&&(b.type="video"),this.hls.trigger(s.a.BUFFER_EOS,b),void(this.state=bt)}if(v=y.end,(c=this.getNextFragment(v,h))&&this.fragmentTracker.getState(c)===w.OK&&this.nextLoadPosition>v&&(c=this.getNextFragment(this.nextLoadPosition,h)),!c)return}"identity"!==(null===(t=c.decryptdata)||void 0===t?void 0:t.keyFormat)||null!==(e=c.decryptdata)&&void 0!==e&&e.key?this.loadFragment(c,h,v):(this.log("Loading key for "+c.sn+" of ["+h.startSN+"-"+h.endSN+"], level "+u),this.loadKey(c))}}}},f.loadKey=function(t){this.state=ct,this.hls.trigger(s.a.KEY_LOADING,{frag:t})},f.loadFragment=function(e,r,i){var a,s=this.fragmentTracker.getState(e);if(this.fragCurrent=e,Object(n.a)(e.sn)&&!this.bitrateTest&&(this.nextLoadPosition=e.start+e.duration),s===w.BACKTRACKED){var o=this.fragmentTracker.getBacktrackData(e);if(o)return this._handleFragmentLoadProgress(o),void this._handleFragmentLoadComplete(o);s=w.NOT_LOADED}s===w.NOT_LOADED||s===w.PARTIAL?"initSegment"===e.sn?this._loadInitSegment(e):this.bitrateTest?(e.bitrateTest=!0,this.log("Fragment "+e.sn+" of level "+e.level+" is being downloaded to test bitrate and will not be buffered"),this._loadBitrateTestFrag(e)):(this.startFragRequested=!0,t.prototype.loadFragment.call(this,e,r,i)):s===w.APPENDING?this._reduceMaxBufferLength(e.duration)&&this.fragmentTracker.removeFragment(e):0===(null===(a=this.media)||void 0===a?void 0:a.buffered.length)&&this.fragmentTracker.removeAllFragments()},f.getAppendedFrag=function(t){return this.fragmentTracker.getAppendedFrag(t,b.MAIN)},f.getBufferedFrag=function(t){return this.fragmentTracker.getBufferedFrag(t,b.MAIN)},f.followingBufferedFrag=function(t){return t?this.getBufferedFrag(t.end+.5):null},f.immediateLevelSwitch=function(){this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)},f.nextLevelSwitch=function(){var t=this.levels,e=this.media;if(null!=e&&e.readyState){var r,i=this.getAppendedFrag(e.currentTime);if(i&&i.start>1&&this.flushMainBuffer(0,i.start-1),!e.paused&&t){var a=t[this.hls.nextLoadLevel],n=this.fragLastKbps;r=n&&this.fragCurrent?this.fragCurrent.duration*a.maxBitrate/(1e3*n)+1:0}else r=0;var s=this.getBufferedFrag(e.currentTime+r);if(s){var o=this.followingBufferedFrag(s);if(o){this.abortCurrentFrag();var l=o.maxStartPTS?o.maxStartPTS:o.start,u=Math.max(s.end,l+Math.min(this.config.maxFragLookUpTolerance,o.duration));this.flushMainBuffer(u,Number.POSITIVE_INFINITY)}}}},f.abortCurrentFrag=function(){var t=this.fragCurrent;null!=t&&t.loader&&t.loader.abort(),this.fragCurrent=null},f.flushMainBuffer=function(e,r){t.prototype.flushMainBuffer.call(this,e,r,this.altAudio?"video":null)},f.onMediaAttached=function(e,r){t.prototype.onMediaAttached.call(this,e,r);var i=r.media;this.onvplaying=this.onMediaPlaying.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),i.addEventListener("playing",this.onvplaying),i.addEventListener("seeked",this.onvseeked),this.gapController=new wt(this.config,i,this.fragmentTracker,this.hls)},f.onMediaDetaching=function(){var e=this.media;e&&(e.removeEventListener("playing",this.onvplaying),e.removeEventListener("seeked",this.onvseeked),this.onvplaying=this.onvseeked=null),t.prototype.onMediaDetaching.call(this)},f.onMediaPlaying=function(){this.tick()},f.onMediaSeeked=function(){var t=this.media,e=t?t.currentTime:null;Object(n.a)(e)&&this.log("Media seeked to "+e.toFixed(3)),this.tick()},f.onManifestLoading=function(){this.log("Trigger BUFFER_RESET"),this.hls.trigger(s.a.BUFFER_RESET,void 0),this.fragmentTracker.removeAllFragments(),this.stalled=!1,this.startPosition=this.lastCurrentTime=0,this.fragPlaying=null},f.onManifestParsed=function(t,e){var r,i,a,n=!1,s=!1;e.levels.forEach((function(t){(r=t.audioCodec)&&(-1!==r.indexOf("mp4a.40.2")&&(n=!0),-1!==r.indexOf("mp4a.40.5")&&(s=!0))})),this.audioCodecSwitch=n&&s&&!("function"==typeof(null==(a=At())||null===(i=a.prototype)||void 0===i?void 0:i.changeType)),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=e.levels,this.startFragRequested=!1},f.onLevelLoading=function(t,e){var r=this.levels;if(r&&this.state===ft){var i=r[e.level];(!i.details||i.details.live&&this.levelLastLoaded!==e.level||this.waitForCdnTuneIn(i.details))&&(this.state=Et)}},f.onLevelLoaded=function(t,e){var r,i=this.levels,a=e.level,n=e.details,o=n.totalduration;if(i){this.log("Level "+a+" loaded ["+n.startSN+","+n.endSN+"], cc ["+n.startCC+", "+n.endCC+"] duration:"+o);var l=this.fragCurrent;!l||this.state!==vt&&this.state!==gt||l.level!==e.level&&l.loader&&(this.state=ft,l.loader.abort());var u=i[a],d=0;if(n.live||null!==(r=u.details)&&void 0!==r&&r.live){if(n.fragments[0]||(n.deltaUpdateFailed=!0),n.deltaUpdateFailed)return;d=this.alignPlaylists(n,u.details)}if(u.details=n,this.levelLastLoaded=a,this.hls.trigger(s.a.LEVEL_UPDATED,{details:n,level:a}),this.state===Et){if(this.waitForCdnTuneIn(n))return;this.state=ft}this.startFragRequested?n.live&&this.synchronizeToLiveEdge(n):this.setStartPosition(n,d),this.tick()}else this.warn("Levels were reset while loading level "+a)},f._handleFragmentLoadProgress=function(t){var e,r=t.frag,i=t.part,a=t.payload,n=this.levels;if(n){var s=n[r.level],o=s.details;if(o){var l=s.videoCodec,u=o.PTSKnown||!o.live,d=null===(e=o.initSegment)||void 0===e?void 0:e.data,h=this._getAudioCodec(s),f=this.transmuxer=this.transmuxer||new xt(this.hls,b.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),c=i?i.index:-1,v=-1!==c,g=new W(r.level,r.sn,r.stats.chunkCount,a.byteLength,c,v),p=this.initPTS[r.cc];f.push(a,d,h,l,r,i,o.totalduration,u,g,p)}else this.warn("Dropping fragment "+r.sn+" of level "+r.level+" after level details were reset")}else this.warn("Levels were reset while fragment load was in progress. Fragment "+r.sn+" of level "+r.level+" will not be buffered")},f.resetTransmuxer=function(){this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null)},f.onAudioTrackSwitching=function(t,e){var r=this.altAudio,i=!!e.url,a=e.id;if(!i){if(this.mediaBuffer!==this.media){this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var n=this.fragCurrent;null!=n&&n.loader&&(this.log("Switching to main audio track, cancel main fragment load"),n.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.resetTransmuxer(),this.state=ft}else this.audioOnly&&this.resetTransmuxer();var o=this.hls;r&&o.trigger(s.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),o.trigger(s.a.AUDIO_TRACK_SWITCHED,{id:a})}},f.onAudioTrackSwitched=function(t,e){var r=e.id,i=!!this.hls.audioTracks[r].url;if(i){var a=this.videoBuffer;a&&this.mediaBuffer!==a&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=a)}this.altAudio=i,this.tick()},f.onBufferCreated=function(t,e){var r,i,a=e.tracks,n=!1;for(var s in a){var o=a[s];if("main"===o.id){if(i=s,r=o,"video"===s){var l=a[s];l&&(this.videoBuffer=l.buffer)}}else n=!0}n&&r?(this.log("Alternate track found, use "+i+".buffered to schedule main fragment loading"),this.mediaBuffer=r.buffer):this.mediaBuffer=this.media},f.onFragBuffered=function(t,e){var r=e.frag,i=e.part;if(!r||"main"===r.type)if(this.fragContextChanged(r))this.warn("Fragment "+r.sn+(i?" p: "+i.index:"")+" of level "+r.level+" finished buffering, but was aborted. state: "+this.state);else{var a=i?i.stats:r.stats;this.fragLastKbps=Math.round(8*a.total/(a.buffering.end-a.loading.first)),this.fragPrevious=r,this.fragBufferedComplete(r,i)}},f.onError=function(t,e){var r=e.frag||this.fragCurrent;if(!r||"main"===r.type){var i=!!this.media&&U.isBuffered(this.media,this.media.currentTime)&&U.isBuffered(this.media,this.media.currentTime+.5);switch(e.details){case a.a.FRAG_LOAD_ERROR:case a.a.FRAG_LOAD_TIMEOUT:case a.a.KEY_LOAD_ERROR:case a.a.KEY_LOAD_TIMEOUT:if(!e.fatal)if(this.fragLoadError+1<=this.config.fragLoadingMaxRetry){var n=Math.min(Math.pow(2,this.fragLoadError)*this.config.fragLoadingRetryDelay,this.config.fragLoadingMaxRetryTimeout);this.warn("Fragment "+(null==r?void 0:r.sn)+" of level "+(null==r?void 0:r.level)+" failed to load, retrying in "+n+"ms"),this.retryDate=self.performance.now()+n,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.fragLoadError++,this.state=gt}else o.b.error("[stream-controller]: "+e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.state=Tt;break;case a.a.LEVEL_LOAD_ERROR:case a.a.LEVEL_LOAD_TIMEOUT:this.state!==Tt&&(e.fatal?(this.warn(""+e.details),this.state=Tt):e.levelRetry||this.state!==Et||(this.state=ft));break;case a.a.BUFFER_FULL_ERROR:"main"!==e.parent||this.state!==pt&&this.state!==mt||(i?(this._reduceMaxBufferLength(this.config.maxBufferLength),this.state=ft):(this.warn("buffer full error also media.currentTime is not buffered, flush everything"),this.immediateLevelSwitch()))}}},f._reduceMaxBufferLength=function(t){var e=this.config;return e.maxMaxBufferLength>=t&&(e.maxMaxBufferLength/=2,this.warn("Reduce max buffer length to "+e.maxMaxBufferLength+"s"),!0)},f.checkBuffer=function(){var t=this.media,e=this.gapController;if(t&&e&&t.readyState){var r=U.getBuffered(t);!this.loadedmetadata&&r.length?(this.loadedmetadata=!0,this._seekToStartPos()):e.poll(this.lastCurrentTime),this.lastCurrentTime=t.currentTime}},f.onFragLoadEmergencyAborted=function(){this.state=ft,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tick()},f.onBufferFlushed=function(t,e){var r=e.type,i=(r===u.a.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;i&&r!==u.a.AUDIO&&this.fragmentTracker.detectEvictedFragments(r,U.getBuffered(i)),this.fragPrevious=null,this.state=ft},f.onLevelsUpdated=function(t,e){this.levels=e.levels},f.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},f._seekToStartPos=function(){var t=this.media,e=t.currentTime,r=this.startPosition;if(r>=0&&e<r){if(t.seeking)return void o.b.log("could not seek to "+r+", already seeking at "+e);var i=U.getBuffered(t),a=(i.length?i.start(0):0)-r;a>0&&a<this.config.maxBufferHole&&(o.b.log("adjusting start position by "+a+" to match buffer start"),r+=a,this.startPosition=r),this.log("seek to target start position "+r+" from current time "+e),t.currentTime=r}},f._getAudioCodec=function(t){var e=this.config.defaultAudioCodec||t.audioCodec;return this.audioCodecSwap&&e&&(this.log("Swapping audio codec"),e=-1!==e.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),e},f._loadBitrateTestFrag=function(t){var e=this;this._doFragLoad(t).then((function(r){var i=e.hls;if(r&&!i.nextLoadLevel&&!e.fragContextChanged(t)){e.fragLoadError=0,e.state=ft,e.startFragRequested=!1,e.bitrateTest=!1,t.bitrateTest=!1;var a=t.stats;a.parsing.start=a.parsing.end=a.buffering.start=a.buffering.end=self.performance.now(),i.trigger(s.a.FRAG_BUFFERED,{stats:a,frag:t,part:null,id:"main"}),e.tick()}}))},f._handleTransmuxComplete=function(t){var e,r="main",i=this.hls,a=t.remuxResult,o=t.chunkMeta,l=this.getCurrentContext(o);if(l){var d=l.frag,h=l.part,f=l.level,c=a.video,v=a.text,g=a.id3,p=a.initSegment,m=this.altAudio?void 0:a.audio;if(!this.fragContextChanged(d)){if(this.state=pt,p){p.tracks&&(this._bufferInitSegment(f,p.tracks,d,o),i.trigger(s.a.FRAG_PARSING_INIT_SEGMENT,{frag:d,id:r,tracks:p.tracks}));var y=p.initPTS,b=p.timescale;Object(n.a)(y)&&(this.initPTS[d.cc]=y,i.trigger(s.a.INIT_PTS_FOUND,{frag:d,id:r,initPTS:y,timescale:b}))}if(c&&!1!==a.independent){if(f.details){var T=c.startPTS,E=c.endPTS,S=c.startDTS,L=c.endDTS;if(h)h.elementaryStreams[c.type]={startPTS:T,endPTS:E,startDTS:S,endDTS:L};else if(c.dropped&&c.independent){var A=this.getLoadPosition()+this.config.maxBufferHole;if(A>d.start&&A<T)return void this.backtrack(d);d.setElementaryStreamInfo(c.type,d.start,E,d.start,L,!0)}d.setElementaryStreamInfo(c.type,T,E,S,L),this.bufferFragmentData(c,d,h,o)}}else if(!1===a.independent)return void this.backtrack(d);if(m){var R=m.startPTS,D=m.endPTS,_=m.startDTS,k=m.endDTS;h&&(h.elementaryStreams[u.a.AUDIO]={startPTS:R,endPTS:D,startDTS:_,endDTS:k}),d.setElementaryStreamInfo(u.a.AUDIO,R,D,_,k),this.bufferFragmentData(m,d,h,o)}if(null!=g&&null!==(e=g.samples)&&void 0!==e&&e.length){var x={frag:d,id:r,samples:g.samples};i.trigger(s.a.FRAG_PARSING_METADATA,x)}if(v){var w={frag:d,id:r,samples:v.samples};i.trigger(s.a.FRAG_PARSING_USERDATA,w)}}}else this.warn("The loading context changed while buffering fragment "+o.sn+" of level "+o.level+". This chunk will not be buffered.")},f._bufferInitSegment=function(t,e,r,i){var a=this;if(this.state===pt){this.audioOnly=!!e.audio&&!e.video,this.altAudio&&!this.audioOnly&&delete e.audio;var n=e.audio,o=e.video,l=e.audiovideo;if(n){var u=t.audioCodec,d=navigator.userAgent.toLowerCase();this.audioCodecSwitch&&(u&&(u=-1!==u.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),1!==n.metadata.channelCount&&-1===d.indexOf("firefox")&&(u="mp4a.40.5")),-1!==d.indexOf("android")&&"audio/mpeg"!==n.container&&(u="mp4a.40.2",this.log("Android: force audio codec to "+u)),t.audioCodec&&t.audioCodec!==u&&this.log('Swapping manifest audio codec "'+t.audioCodec+'" for "'+u+'"'),n.levelCodec=u,n.id="main",this.log("Init audio buffer, container:"+n.container+", codecs[selected/level/parsed]=["+(u||"")+"/"+(t.audioCodec||"")+"/"+n.codec+"]")}o&&(o.levelCodec=t.videoCodec,o.id="main",this.log("Init video buffer, container:"+o.container+", codecs[level/parsed]=["+(t.videoCodec||"")+"/"+o.codec+"]")),l&&this.log("Init audiovideo buffer, container:"+l.container+", codecs[level/parsed]=["+(t.attrs.CODECS||"")+"/"+l.codec+"]"),this.hls.trigger(s.a.BUFFER_CODECS,e),Object.keys(e).forEach((function(t){var n=e[t].initSegment;null!=n&&n.byteLength&&a.hls.trigger(s.a.BUFFER_APPENDING,{type:t,data:n,frag:r,part:null,chunkMeta:i})})),this.tick()}},f.backtrack=function(t){this.resetTransmuxer(),this.flushMainBuffer(0,t.start),this.fragmentTracker.backtrack(t),this.fragPrevious=null,this.nextLoadPosition=t.start,this.state=yt},f.checkFragmentChanged=function(){var t=this.media,e=null;if(t&&t.readyState>1&&!1===t.seeking){var r=t.currentTime;if(U.isBuffered(t,r)?e=this.getAppendedFrag(r):U.isBuffered(t,r+.1)&&(e=this.getAppendedFrag(r+.1)),e){var i=this.fragPlaying,a=e.level;i&&e.sn===i.sn&&i.level===a&&e.urlId===i.urlId||(this.hls.trigger(s.a.FRAG_CHANGED,{frag:e}),i&&i.level===a||this.hls.trigger(s.a.LEVEL_SWITCHED,{level:a}),this.fragPlaying=e)}}},l=i,(d=[{key:"nextLevel",get:function(){var t=this.nextBufferedFrag;return t?t.level:-1}},{key:"currentLevel",get:function(){var t=this.media;if(t){var e=this.getAppendedFrag(t.currentTime);if(e)return e.level}return-1}},{key:"nextBufferedFrag",get:function(){var t=this.media;if(t){var e=this.getAppendedFrag(t.currentTime);return this.followingBufferedFrag(e)}return null}},{key:"forceStartLoad",get:function(){return this._forceStartLoad}}])&&Ct(l.prototype,d),h&&Ct(l,h),i}(St);function Pt(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}!function(t){t.No="",t.Yes="YES",t.v2="v2"}(Ot||(Ot={}));var Ft=function(){function t(t,e,r){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=t,this.part=e,this.skip=r}return t.prototype.addDirectives=function(t){var e=new self.URL(t),r=e.searchParams;return r.set("_HLS_msn",this.msn.toString()),void 0!==this.part&&r.set("_HLS_part",this.part.toString()),this.skip&&r.set("_HLS_skip",this.skip),r.sort(),e.search=r.toString(),e.toString()},t}(),Mt=function(){function t(t){this.attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.videoCodec=void 0,this.width=void 0,this.unknownCodecs=void 0,this.audioGroupIds=void 0,this.details=void 0,this.fragmentError=!1,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.textGroupIds=void 0,this.url=void 0,this._urlId=0,this.url=[t.url],this.attrs=t.attrs,this.bitrate=t.bitrate,t.details&&(this.details=t.details),this.id=t.id||0,this.name=t.name,this.width=t.width||0,this.height=t.height||0,this.audioCodec=t.audioCodec,this.videoCodec=t.videoCodec,this.unknownCodecs=t.unknownCodecs,this.codecSet=[t.videoCodec,t.audioCodec].filter((function(t){return t})).join(",").replace(/\.[^.,]+/g,"")}var e,r,i;return e=t,(r=[{key:"maxBitrate",get:function(){return Math.max(this.realBitrate,this.bitrate)}},{key:"uri",get:function(){return this.url[this._urlId]||""}},{key:"urlId",get:function(){return this._urlId},set:function(t){var e=t%this.url.length;this._urlId!==e&&(this.details=void 0,this._urlId=e)}}])&&Pt(e.prototype,r),i&&Pt(e,i),t}(),Nt=function(){function t(t,e){this.hls=void 0,this.timer=-1,this.canLoad=!1,this.retryCount=0,this.log=void 0,this.warn=void 0,this.log=o.b.log.bind(o.b,e+":"),this.warn=o.b.warn.bind(o.b,e+":"),this.hls=t}var e=t.prototype;return e.destroy=function(){this.clearTimer()},e.onError=function(t,e){e.fatal&&e.type===a.b.NETWORK_ERROR&&this.clearTimer()},e.clearTimer=function(){clearTimeout(this.timer),this.timer=-1},e.startLoad=function(){this.canLoad=!0,this.retryCount=0,this.loadPlaylist()},e.stopLoad=function(){this.canLoad=!1,this.clearTimer()},e.switchParams=function(t,e){var r=null==e?void 0:e.renditionReports;if(r)for(var i=0;i<r.length;i++){var a=r[i],s=""+a.URI;if(s===t.substr(-s.length)){var o=parseInt(a["LAST-MSN"]),l=parseInt(a["LAST-PART"]);if(e&&this.hls.config.lowLatencyMode){var u=Math.min(e.age-e.partTarget,e.targetduration);void 0!==l&&u>e.partTarget&&(l+=1)}if(Object(n.a)(o))return new Ft(o,Object(n.a)(l)?l:void 0,Ot.No)}}},e.loadPlaylist=function(t){},e.shouldLoadTrack=function(t){return this.canLoad&&t&&!!t.url&&(!t.details||t.details.live)},e.playlistLoaded=function(t,e,r){var i=this,a=e.details,n=e.stats,s=n.loading.end?Math.max(0,self.performance.now()-n.loading.end):0;if(a.advancedDateTime=Date.now()-s,a.live||null!=r&&r.live){if(a.reloaded(r),r&&this.log("live playlist "+t+" "+(a.advanced?"REFRESHED "+a.lastPartSn+"-"+a.lastPartIndex:"MISSED")),r&&a.fragments.length>0&&(K(r,a),a.advanced||(a.advancedDateTime=r.advancedDateTime)),!this.canLoad||!a.live)return;if(a.canBlockReload&&a.endSN&&a.advanced){var o,l,u,d=this.hls.config.lowLatencyMode,h=a.lastPartIndex;d?(l=-1!==h?a.lastPartSn:a.endSN+1,u=-1!==h?h+1:void 0):(l=-1!==h?a.lastPartSn+1:a.endSN+1,u=-1!==h?0:void 0);var f=a.age,c=f+a.ageHeader,v=Math.min(c-a.partTarget,1.5*a.targetduration);if(v>0){if(r&&v>r.tuneInGoal)this.warn("CDN Tune-in goal increased from: "+r.tuneInGoal+" to: "+v+" with playlist age: "+a.age),v=0;else{var g=Math.floor(v/a.targetduration);if(l+=g,void 0!==u)u+=Math.round(v%a.targetduration/a.partTarget);this.log("CDN Tune-in age: "+a.ageHeader+"s last advanced "+f.toFixed(2)+"s goal: "+v+" skip sn "+g+" to part "+u)}a.tuneInGoal=v}var p=function(t,e){var r=t.canSkipUntil,i=t.canSkipDateRanges,a=t.endSN;return r&&e-a<r?i?Ot.v2:Ot.Yes:Ot.No}(a,l);return null!==(o=e.deliveryDirectives)&&void 0!==o&&o.skip&&a.deltaUpdateFailed&&(l=e.deliveryDirectives.msn,u=e.deliveryDirectives.part,p=Ot.No),void this.loadPlaylist(new Ft(l,u,p))}var m=function(t,e){var r=1e3*t.levelTargetDuration,i=r/2,a=t.age,n=a>0&&a<3*r,s=e.loading.end-e.loading.start,o=r,l=t.availabilityDelay;if(!1===t.updated)if(n){var u=333*t.misses;o=Math.max(Math.min(i,2*s),u),t.availabilityDelay=(t.availabilityDelay||0)+o}else o=i;else n?(l=Math.min(l||r/2,a),t.availabilityDelay=l,o=l+r-a):o=r-s;return Math.round(o)}(a,n);this.log("reload live playlist "+t+" in "+Math.round(m)+" ms"),this.timer=self.setTimeout((function(){return i.loadPlaylist()}),m)}else this.clearTimer()},e.retryLoadingOrFail=function(t){var e,r=this,i=this.hls.config,a=this.retryCount<i.levelLoadingMaxRetry;if(a)if(this.retryCount++,t.details.indexOf("LoadTimeOut")>-1&&null!==(e=t.context)&&void 0!==e&&e.deliveryDirectives)this.warn("retry playlist loading #"+this.retryCount+' after "'+t.details+'"'),this.loadPlaylist();else{var n=Math.min(Math.pow(2,this.retryCount)*i.levelLoadingRetryDelay,i.levelLoadingMaxRetryTimeout);this.timer=self.setTimeout((function(){return r.loadPlaylist()}),n),this.warn("retry playlist loading #"+this.retryCount+" in "+n+' ms after "'+t.details+'"')}else this.warn('cannot recover from error "'+t.details+'"'),this.clearTimer(),t.fatal=!0;return a},t}();function Ut(){return(Ut=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}function Bt(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Gt=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),jt=function(t){var e,r;function i(e){var r;return(r=t.call(this,e,"[level-controller]")||this)._levels=[],r._firstLevel=-1,r._startLevel=void 0,r.currentLevelIndex=-1,r.manualLevelIndex=-1,r.onParsedComplete=void 0,r._registerListeners(),r}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var n,o,l,u=i.prototype;return u._registerListeners=function(){var t=this.hls;t.on(s.a.MANIFEST_LOADED,this.onManifestLoaded,this),t.on(s.a.LEVEL_LOADED,this.onLevelLoaded,this),t.on(s.a.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),t.on(s.a.FRAG_LOADED,this.onFragLoaded,this),t.on(s.a.ERROR,this.onError,this)},u._unregisterListeners=function(){var t=this.hls;t.off(s.a.MANIFEST_LOADED,this.onManifestLoaded,this),t.off(s.a.LEVEL_LOADED,this.onLevelLoaded,this),t.off(s.a.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),t.off(s.a.FRAG_LOADED,this.onFragLoaded,this),t.off(s.a.ERROR,this.onError,this)},u.destroy=function(){t.prototype.destroy.call(this),this._unregisterListeners(),this.manualLevelIndex=-1},u.startLoad=function(){this._levels.forEach((function(t){t.loadError=0})),t.prototype.startLoad.call(this)},u.onManifestLoaded=function(t,e){var r,i,n=[],o=[],l=[],u={},d=!1,h=!1;if(e.levels.forEach((function(t){var e=t.attrs;d=d||!!t.videoCodec,h=h||!!t.audioCodec,Gt&&t.audioCodec&&-1!==t.audioCodec.indexOf("mp4a.40.34")&&(t.audioCodec=void 0),(i=u[t.bitrate])?i.url.push(t.url):(i=new Mt(t),u[t.bitrate]=i,n.push(i)),e&&(e.AUDIO&&B(i,"audio",e.AUDIO),e.SUBTITLES&&B(i,"text",e.SUBTITLES))})),d&&h&&(n=n.filter((function(t){return!!t.videoCodec}))),n=n.filter((function(t){var e=t.audioCodec,r=t.videoCodec;return(!e||m(e,"audio"))&&(!r||m(r,"video"))})),e.audioTracks&&G(o=e.audioTracks.filter((function(t){return!t.audioCodec||m(t.audioCodec,"audio")}))),e.subtitles&&G(l=e.subtitles),n.length>0){r=n[0].bitrate,n.sort((function(t,e){return t.bitrate-e.bitrate})),this._levels=n;for(var f=0;f<n.length;f++)if(n[f].bitrate===r){this._firstLevel=f,this.log("manifest loaded, "+n.length+" level(s) found, first bitrate: "+r);break}var c=h&&!d,v={levels:n,audioTracks:o,subtitleTracks:l,firstLevel:this._firstLevel,stats:e.stats,audio:h,video:d,altAudio:!c&&o.some((function(t){return!!t.url}))};this.hls.trigger(s.a.MANIFEST_PARSED,v),this.onParsedComplete()}else this.hls.trigger(s.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:e.url,reason:"no level with compatible codecs found in manifest"})},u.onError=function(e,r){if(t.prototype.onError.call(this,e,r),!r.fatal){var i=r.context,n=this._levels[this.currentLevelIndex];if(i&&(i.type===y.AUDIO_TRACK&&n.audioGroupIds&&i.groupId===n.audioGroupIds[n.urlId]||i.type===y.SUBTITLE_TRACK&&n.textGroupIds&&i.groupId===n.textGroupIds[n.urlId]))this.redundantFailover(this.currentLevelIndex);else{var s,o=!1,l=!1,u=!0;switch(r.details){case a.a.FRAG_LOAD_ERROR:case a.a.FRAG_LOAD_TIMEOUT:case a.a.KEY_LOAD_ERROR:case a.a.KEY_LOAD_TIMEOUT:s=r.frag.level,l=!0;break;case a.a.LEVEL_LOAD_ERROR:case a.a.LEVEL_LOAD_TIMEOUT:i&&(i.deliveryDirectives&&(u=!1),s=i.level),o=!0;break;case a.a.REMUX_ALLOC_ERROR:s=r.level,o=!0}void 0!==s&&this.recoverLevel(r,s,o,l,u)}}},u.recoverLevel=function(t,e,r,i,a){var n=t.details,s=this._levels[e];if(s.loadError++,s.fragmentError=i,r){if(!this.retryLoadingOrFail(t))return void(this.currentLevelIndex=-1);t.levelRetry=!0}if(a&&(r||i)){var o=s.url.length;if(o>1&&s.loadError<o)this.redundantFailover(e);else{if(-1===this.manualLevelIndex){var l=0===e?this._levels.length-1:e-1;this.currentLevelIndex!==l&&(i=!1,this.warn(n+": switch to "+l),this.hls.nextAutoLevel=this.currentLevelIndex=l)}i&&(this.warn(n+": reload a fragment"),this.currentLevelIndex=-1)}}},u.redundantFailover=function(t){var e=this._levels[t],r=e.url.length;if(r>1){var i=(e.urlId+1)%r;this.warn("Switching to redundant URL-id "+i),this._levels.forEach((function(t){t.urlId=i})),this.level=t}},u.onFragLoaded=function(t,e){var r=e.frag;if(void 0!==r&&"main"===r.type){var i=this._levels[r.level];void 0!==i&&(i.fragmentError=!1,i.loadError=0)}},u.onLevelLoaded=function(t,e){var r,i,a=e.level,n=e.details,s=this._levels[a];if(!s)return this.warn("Invalid level index "+a),void(null!==(i=e.deliveryDirectives)&&void 0!==i&&i.skip&&(n.deltaUpdateFailed=!0));a===this.currentLevelIndex?(s.fragmentError||(s.loadError=0,this.retryCount=0),this.playlistLoaded(a,e,s.details)):null!==(r=e.deliveryDirectives)&&void 0!==r&&r.skip&&(n.deltaUpdateFailed=!0)},u.onAudioTrackSwitched=function(t,e){var r=this.hls.levels[this.currentLevelIndex];if(r&&r.audioGroupIds){for(var i=-1,a=this.hls.audioTracks[e.id].groupId,n=0;n<r.audioGroupIds.length;n++)if(r.audioGroupIds[n]===a){i=n;break}i!==r.urlId&&(r.urlId=i,this.startLoad())}},u.loadPlaylist=function(t){var e=this.currentLevelIndex,r=this._levels[e];if(this.canLoad&&r&&r.url.length>0){var i=r.urlId,a=r.url[i];if(t)try{a=t.addDirectives(a)}catch(t){this.warn("Could not construct new URL with HLS Delivery Directives: "+t)}this.log("Attempt loading level index "+e+(t?" at sn "+t.msn+" part "+t.part:"")+" with URL-id "+i+" "+a),this.clearTimer(),this.hls.trigger(s.a.LEVEL_LOADING,{url:a,level:e,id:i,deliveryDirectives:t||null})}},u.removeLevel=function(t,e){var r=function(t,r){return r!==e},i=this._levels.filter((function(i,a){return a!==t||i.url.length>1&&void 0!==e&&(i.url=i.url.filter(r),i.audioGroupIds&&(i.audioGroupIds=i.audioGroupIds.filter(r)),i.textGroupIds&&(i.textGroupIds=i.textGroupIds.filter(r)),i.urlId=0,!0)})).map((function(t,e){var r=t.details;return null!=r&&r.fragments&&r.fragments.forEach((function(t){t.level=e})),t}));this._levels=i,this.hls.trigger(s.a.LEVELS_UPDATED,{levels:i})},n=i,(o=[{key:"levels",get:function(){return 0===this._levels.length?null:this._levels}},{key:"level",get:function(){return this.currentLevelIndex},set:function(t){var e,r=this._levels;if(this.currentLevelIndex!==t||null===(e=r[t])||void 0===e||!e.details)if(t<0||t>=r.length)this.hls.trigger(s.a.ERROR,{type:a.b.OTHER_ERROR,details:a.a.LEVEL_SWITCH_ERROR,level:t,fatal:!1,reason:"invalid level idx"});else{this.clearTimer();var i=this.currentLevelIndex,n=r[i],o=r[t];this.log("switching to level "+t+" from "+i),this.currentLevelIndex=t;var l=Ut({},o,{level:t,maxBitrate:o.maxBitrate,uri:o.uri,urlId:o.urlId});delete l._urlId,this.hls.trigger(s.a.LEVEL_SWITCHING,l);var u=o.details;if(!u||u.live){var d=this.switchParams(o.uri,null==n?void 0:n.details);this.loadPlaylist(d)}}}},{key:"manualLevel",get:function(){return this.manualLevelIndex},set:function(t){this.manualLevelIndex=t,void 0===this._startLevel&&(this._startLevel=t),-1!==t&&(this.level=t)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(t){this._firstLevel=t}},{key:"startLevel",get:function(){if(void 0===this._startLevel){var t=this.hls.config.startLevel;return void 0!==t?t:this._firstLevel}return this._startLevel},set:function(t){this._startLevel=t}},{key:"nextLoadLevel",get:function(){return-1!==this.manualLevelIndex?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(t){this.level=t,-1===this.manualLevelIndex&&(this.hls.nextAutoLevel=t)}}])&&Bt(n.prototype,o),l&&Bt(n,l),i}(Nt),Ht=function(){function t(t,e,r){void 0===e&&(e=0),void 0===r&&(r=0),this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=t,this.alpha_=t?Math.exp(Math.log(.5)/t):0,this.estimate_=e,this.totalWeight_=r}var e=t.prototype;return e.sample=function(t,e){var r=Math.pow(this.alpha_,t);this.estimate_=e*(1-r)+r*this.estimate_,this.totalWeight_+=t},e.getTotalWeight=function(){return this.totalWeight_},e.getEstimate=function(){if(this.alpha_){var t=1-Math.pow(this.alpha_,this.totalWeight_);if(t)return this.estimate_/t}return this.estimate_},t}(),Kt=function(){function t(t,e,r){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultEstimate_=r,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new Ht(t),this.fast_=new Ht(e)}var e=t.prototype;return e.update=function(t,e){var r=this.slow_,i=this.fast_;this.slow_.halfLife!==t&&(this.slow_=new Ht(t,r.getEstimate(),r.getTotalWeight())),this.fast_.halfLife!==e&&(this.fast_=new Ht(e,i.getEstimate(),i.getTotalWeight()))},e.sample=function(t,e){var r=(t=Math.max(t,this.minDelayMs_))/1e3,i=8*e/r;this.fast_.sample(r,i),this.slow_.sample(r,i)},e.canEstimate=function(){var t=this.fast_;return t&&t.getTotalWeight()>=this.minWeight_},e.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},e.destroy=function(){},t}();function Vt(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Wt=function(){function t(t){this.hls=void 0,this.lastLoadedFragLevel=0,this._nextAutoLevel=-1,this.timer=void 0,this.onCheck=this._abandonRulesCheck.bind(this),this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.bwEstimator=void 0,this.hls=t;var e=t.config;this.bwEstimator=new Kt(e.abrEwmaSlowVoD,e.abrEwmaFastVoD,e.abrEwmaDefaultEstimate),this.registerListeners()}var e,r,i,l=t.prototype;return l.registerListeners=function(){var t=this.hls;t.on(s.a.FRAG_LOADING,this.onFragLoading,this),t.on(s.a.FRAG_LOADED,this.onFragLoaded,this),t.on(s.a.FRAG_BUFFERED,this.onFragBuffered,this),t.on(s.a.LEVEL_LOADED,this.onLevelLoaded,this),t.on(s.a.ERROR,this.onError,this)},l.unregisterListeners=function(){var t=this.hls;t.off(s.a.FRAG_LOADING,this.onFragLoading,this),t.off(s.a.FRAG_LOADED,this.onFragLoaded,this),t.off(s.a.FRAG_BUFFERED,this.onFragBuffered,this),t.off(s.a.LEVEL_LOADED,this.onLevelLoaded,this),t.off(s.a.ERROR,this.onError,this)},l.destroy=function(){this.unregisterListeners(),this.clearTimer()},l.onFragLoading=function(t,e){var r,i=e.frag;"main"===i.type&&(this.timer||(this.fragCurrent=i,this.partCurrent=null!=(r=e.part)?r:null,this.timer=self.setInterval(this.onCheck,100)))},l.onLevelLoaded=function(t,e){var r=this.hls.config;e.details.live?this.bwEstimator.update(r.abrEwmaSlowLive,r.abrEwmaFastLive):this.bwEstimator.update(r.abrEwmaSlowVoD,r.abrEwmaFastVoD)},l._abandonRulesCheck=function(){var t=this.fragCurrent,e=this.partCurrent,r=this.hls,i=r.autoLevelEnabled,a=r.config,l=r.media;if(t&&l){var u=e?e.stats:t.stats,d=e?e.duration:t.duration;if(u.aborted)return o.b.warn("frag loader destroy or aborted, disarm abandonRules"),this.clearTimer(),void(this._nextAutoLevel=-1);if(i&&!l.paused&&l.playbackRate&&l.readyState){var h=performance.now()-u.loading.start,f=Math.abs(l.playbackRate);if(!(h<=500*d/f)){var c=r.levels,v=r.minAutoLevel,g=c[t.level],p=u.total||Math.max(u.loaded,Math.round(d*g.maxBitrate/8)),m=Math.max(1,u.bwEstimate?u.bwEstimate/8:1e3*u.loaded/h),y=(p-u.loaded)/m,b=l.currentTime,T=(U.bufferInfo(l,b,a.maxBufferHole).end-b)/f;if(!(T>=2*d/f||y<=T)){var E,S=Number.POSITIVE_INFINITY;for(E=t.level-1;E>v;E--){if((S=d*c[E].maxBitrate/(6.4*m))<T)break}if(!(S>=y)){var L=this.bwEstimator.getEstimate();o.b.warn("Fragment "+t.sn+(e?" part "+e.index:"")+" of level "+t.level+" is loading too slowly and will cause an underbuffer; aborting and switching to level "+E+"\n      Current BW estimate: "+(Object(n.a)(L)?(L/1024).toFixed(3):"Unknown")+" Kb/s\n      Estimated load time for current fragment: "+y.toFixed(3)+" s\n      Estimated load time for the next fragment: "+S.toFixed(3)+" s\n      Time to underbuffer: "+T.toFixed(3)+" s"),r.nextLoadLevel=E,this.bwEstimator.sample(h,u.loaded),this.clearTimer(),t.loader&&(this.fragCurrent=this.partCurrent=null,t.loader.abort()),r.trigger(s.a.FRAG_LOAD_EMERGENCY_ABORTED,{frag:t,part:e,stats:u})}}}}}},l.onFragLoaded=function(t,e){var r=e.frag,i=e.part;if("main"===r.type&&Object(n.a)(r.sn)){var a=i?i.stats:r.stats,o=i?i.duration:r.duration;if(this.clearTimer(),this.lastLoadedFragLevel=r.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var l=this.hls.levels[r.level],u=(l.loaded?l.loaded.bytes:0)+a.loaded,d=(l.loaded?l.loaded.duration:0)+o;l.loaded={bytes:u,duration:d},l.realBitrate=Math.round(8*u/d)}if(r.bitrateTest){var h={stats:a,frag:r,part:i,id:r.type};this.onFragBuffered(s.a.FRAG_BUFFERED,h)}}},l.onFragBuffered=function(t,e){var r=e.frag,i=e.part,a=i?i.stats:r.stats;if(!a.aborted&&"main"===r.type&&"initSegment"!==r.sn&&!r.bitrateTest){var n=a.parsing.end-a.loading.start;this.bwEstimator.sample(n,a.loaded),a.bwEstimate=this.bwEstimator.getEstimate(),r.bitrateTest?this.bitrateTestDelay=n/1e3:this.bitrateTestDelay=0}},l.onError=function(t,e){switch(e.details){case a.a.FRAG_LOAD_ERROR:case a.a.FRAG_LOAD_TIMEOUT:this.clearTimer()}},l.clearTimer=function(){self.clearInterval(this.timer),this.timer=void 0},l.getNextABRAutoLevel=function(){var t=this.fragCurrent,e=this.partCurrent,r=this.hls,i=r.maxAutoLevel,a=r.config,n=r.minAutoLevel,s=r.media,l=e?e.duration:t?t.duration:0,u=s?s.currentTime:0,d=s&&0!==s.playbackRate?Math.abs(s.playbackRate):1,h=this.bwEstimator?this.bwEstimator.getEstimate():a.abrEwmaDefaultEstimate,f=(U.bufferInfo(s,u,a.maxBufferHole).end-u)/d,c=this.findBestLevel(h,n,i,f,a.abrBandWidthFactor,a.abrBandWidthUpFactor);if(c>=0)return c;o.b.trace((f?"rebuffering expected":"buffer is empty")+", finding optimal quality level");var v=l?Math.min(l,a.maxStarvationDelay):a.maxStarvationDelay,g=a.abrBandWidthFactor,p=a.abrBandWidthUpFactor;if(!f){var m=this.bitrateTestDelay;if(m)v=(l?Math.min(l,a.maxLoadingDelay):a.maxLoadingDelay)-m,o.b.trace("bitrate test took "+Math.round(1e3*m)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*v)+" ms"),g=p=1}return c=this.findBestLevel(h,n,i,f+v,g,p),Math.max(c,0)},l.findBestLevel=function(t,e,r,i,a,n){for(var s,l=this.fragCurrent,u=this.partCurrent,d=this.lastLoadedFragLevel,h=this.hls.levels,f=h[d],c=!(null==f||null===(s=f.details)||void 0===s||!s.live),v=null==f?void 0:f.codecSet,g=u?u.duration:l?l.duration:0,p=r;p>=e;p--){var m=h[p];if(m&&(!v||m.codecSet===v)){var y=m.details,b=(u?null==y?void 0:y.partTarget:null==y?void 0:y.averagetargetduration)||g,T=void 0;T=p<=d?a*t:n*t;var E=h[p].maxBitrate,S=E*b/T;if(o.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+p+"/"+Math.round(T)+"/"+E+"/"+b+"/"+i+"/"+S),T>E&&(!S||c&&!this.bitrateTestDelay||S<i))return p}}return-1},e=t,(r=[{key:"nextAutoLevel",get:function(){var t=this._nextAutoLevel,e=this.bwEstimator;if(!(-1===t||e&&e.canEstimate()))return t;var r=this.getNextABRAutoLevel();return-1!==t&&(r=Math.min(t,r)),r},set:function(t){this._nextAutoLevel=t}}])&&Vt(e.prototype,r),i&&Vt(e,i),t}(),Yt=r(12);var Xt=r(11),qt=function(){function t(t){this.buffers=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.buffers=t}var e=t.prototype;return e.append=function(t,e){var r=this.queues[e];r.push(t),1===r.length&&this.buffers[e]&&this.executeNext(e)},e.insertAbort=function(t,e){this.queues[e].unshift(t),this.executeNext(e)},e.appendBlocker=function(t){var e,r=new Promise((function(t){e=t})),i={execute:e,onStart:function(){},onComplete:function(){},onError:function(){}};return this.append(i,t),r},e.executeNext=function(t){var e=this.buffers,r=this.queues,i=e[t],a=r[t];if(a.length){var n=a[0];try{n.execute()}catch(t){o.b.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"),n.onError(t),i&&i.updating||a.shift()}}},e.shiftAndExecuteNext=function(t){this.queues[t].shift(),this.executeNext(t)},e.current=function(t){return this.queues[t][0]},t}(),zt=Lt(),Qt=/([ha]vc.)(?:\.[^.,]+)+/,Zt=function(){function t(t){var e=this;this.details=null,this._objectUrl=null,this.operationQueue=void 0,this.listeners=void 0,this.hls=void 0,this.bufferCodecEventsExpected=0,this._bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.appendError=0,this.tracks={},this.pendingTracks={},this.sourceBuffer=void 0,this._onMediaSourceOpen=function(){var t=e.hls,r=e.media,i=e.mediaSource;o.b.log("[buffer-controller]: Media source opened"),r&&(e.updateMediaElementDuration(),t.trigger(s.a.MEDIA_ATTACHED,{media:r})),i&&i.removeEventListener("sourceopen",e._onMediaSourceOpen),e.checkPendingTracks()},this._onMediaSourceClose=function(){o.b.log("[buffer-controller]: Media source closed")},this._onMediaSourceEnded=function(){o.b.log("[buffer-controller]: Media source ended")},this.hls=t,this._initSourceBuffer(),this.registerListeners()}var e=t.prototype;return e.destroy=function(){this.unregisterListeners(),this.details=null},e.registerListeners=function(){var t=this.hls;t.on(s.a.MEDIA_ATTACHING,this.onMediaAttaching,this),t.on(s.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(s.a.MANIFEST_PARSED,this.onManifestParsed,this),t.on(s.a.BUFFER_RESET,this.onBufferReset,this),t.on(s.a.BUFFER_APPENDING,this.onBufferAppending,this),t.on(s.a.BUFFER_CODECS,this.onBufferCodecs,this),t.on(s.a.BUFFER_EOS,this.onBufferEos,this),t.on(s.a.BUFFER_FLUSHING,this.onBufferFlushing,this),t.on(s.a.LEVEL_UPDATED,this.onLevelUpdated,this),t.on(s.a.FRAG_PARSED,this.onFragParsed,this)},e.unregisterListeners=function(){var t=this.hls;t.off(s.a.MEDIA_ATTACHING,this.onMediaAttaching,this),t.off(s.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(s.a.MANIFEST_PARSED,this.onManifestParsed,this),t.off(s.a.BUFFER_RESET,this.onBufferReset,this),t.off(s.a.BUFFER_APPENDING,this.onBufferAppending,this),t.off(s.a.BUFFER_CODECS,this.onBufferCodecs,this),t.off(s.a.BUFFER_EOS,this.onBufferEos,this),t.off(s.a.BUFFER_FLUSHING,this.onBufferFlushing,this),t.off(s.a.LEVEL_UPDATED,this.onLevelUpdated,this),t.off(s.a.FRAG_PARSED,this.onFragParsed,this)},e._initSourceBuffer=function(){this.sourceBuffer={},this.operationQueue=new qt(this.sourceBuffer),this.listeners={audio:[],video:[],audiovideo:[]}},e.onManifestParsed=function(t,e){var r=2;(e.audio&&!e.video||!e.altAudio)&&(r=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=r,this.details=null,o.b.log(this.bufferCodecEventsExpected+" bufferCodec event(s) expected")},e.onMediaAttaching=function(t,e){var r=this.media=e.media;if(r&&zt){var i=this.mediaSource=new zt;i.addEventListener("sourceopen",this._onMediaSourceOpen),i.addEventListener("sourceended",this._onMediaSourceEnded),i.addEventListener("sourceclose",this._onMediaSourceClose),r.src=self.URL.createObjectURL(i),this._objectUrl=r.src}},e.onMediaDetaching=function(){o.b.log("[buffer-controller]: media source detaching");var t=this.media,e=this.mediaSource,r=this._objectUrl;if(e){if("open"===e.readyState)try{e.endOfStream()}catch(t){o.b.warn("[buffer-controller]: onMediaDetaching: "+t.message+" while calling endOfStream")}this.onBufferReset(),e.removeEventListener("sourceopen",this._onMediaSourceOpen),e.removeEventListener("sourceended",this._onMediaSourceEnded),e.removeEventListener("sourceclose",this._onMediaSourceClose),t&&(r&&self.URL.revokeObjectURL(r),t.src===r?(t.removeAttribute("src"),t.load()):o.b.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={}}this.hls.trigger(s.a.MEDIA_DETACHED,void 0)},e.onBufferReset=function(){var t=this,e=this.sourceBuffer;this.getSourceBufferTypes().forEach((function(r){var i=e[r];try{i&&(t.removeBufferListeners(r),t.mediaSource&&t.mediaSource.removeSourceBuffer(i),e[r]=void 0)}catch(t){o.b.warn("[buffer-controller]: Failed to reset the "+r+" buffer",t)}})),this._initSourceBuffer()},e.onBufferCodecs=function(t,e){var r=this,i=Object.keys(this.sourceBuffer).length;Object.keys(e).forEach((function(t){if(i){var a=r.tracks[t];if(a&&"function"==typeof a.buffer.changeType){var n=e[t],s=n.codec,o=n.levelCodec,l=n.container;if((a.levelCodec||a.codec).replace(Qt,"$1")!==(o||s).replace(Qt,"$1")){var u=l+";codecs="+(o||s);r.appendChangeType(t,u)}}}else r.pendingTracks[t]=e[t]})),i||(this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,0),this.mediaSource&&"open"===this.mediaSource.readyState&&this.checkPendingTracks())},e.appendChangeType=function(t,e){var r=this,i=this.operationQueue,a={execute:function(){var a=r.sourceBuffer[t];a&&(o.b.log("[buffer-controller]: changing "+t+" sourceBuffer type to "+e),a.changeType(e)),i.shiftAndExecuteNext(t)},onStart:function(){},onComplete:function(){},onError:function(e){o.b.warn("[buffer-controller]: Failed to change "+t+" SourceBuffer type",e)}};i.append(a,t)},e.onBufferAppending=function(t,e){var r=this,i=this.hls,n=this.operationQueue,l=this.tracks,u=e.data,d=e.type,h=e.frag,f=e.part,c=e.chunkMeta,v=c.buffering[d],g=self.performance.now();v.start=g;var p=h.stats.buffering,m=f?f.stats.buffering:null;0===p.start&&(p.start=g),m&&0===m.start&&(m.start=g);var y=l.audio,b="audio"===d&&1===c.id&&"audio/mpeg"===(null==y?void 0:y.container),T={execute:function(){if(v.executeStart=self.performance.now(),b){var t=r.sourceBuffer[d];if(t){var e=h.start-t.timestampOffset;Math.abs(e)>=.1&&(o.b.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to "+h.start+" (delta: "+e+") sn: "+h.sn+")"),t.timestampOffset=h.start)}}r.appendExecutor(u,d)},onStart:function(){},onComplete:function(){var t=self.performance.now();v.executeEnd=v.end=t,0===p.first&&(p.first=t),m&&0===m.first&&(m.first=t);var e=r.sourceBuffer,i={};for(var a in e)i[a]=U.getBuffered(e[a]);r.appendError=0,r.hls.trigger(s.a.BUFFER_APPENDED,{parent:h.type,timeRanges:i,frag:h,part:f,chunkMeta:c})},onError:function(t){o.b.error("[buffer-controller]: Error encountered while trying to append to the "+d+" SourceBuffer",t);var e={type:a.b.MEDIA_ERROR,parent:h.type,details:a.a.BUFFER_APPEND_ERROR,err:t,fatal:!1};t.code===DOMException.QUOTA_EXCEEDED_ERR?e.details=a.a.BUFFER_FULL_ERROR:(r.appendError++,e.details=a.a.BUFFER_APPEND_ERROR,r.appendError>i.config.appendErrorMaxRetry&&(o.b.log("[buffer-controller]: Failed "+i.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),e.fatal=!0)),i.trigger(s.a.ERROR,e)}};n.append(T,d)},e.onBufferFlushing=function(t,e){var r=this,i=this.operationQueue,a=function(t){return{execute:r.removeExecutor.bind(r,t,e.startOffset,e.endOffset),onStart:function(){},onComplete:function(){r.hls.trigger(s.a.BUFFER_FLUSHED,{type:t})},onError:function(e){o.b.warn("[buffer-controller]: Failed to remove from "+t+" SourceBuffer",e)}}};e.type?i.append(a(e.type),e.type):(i.append(a("audio"),"audio"),i.append(a("video"),"video"))},e.onFragParsed=function(t,e){var r=this,i=e.frag,a=e.part,n=[],l=a?a.elementaryStreams:i.elementaryStreams;l[u.a.AUDIOVIDEO]?n.push("audiovideo"):(l[u.a.AUDIO]&&n.push("audio"),l[u.a.VIDEO]&&n.push("video"));var d=function(){var t=self.performance.now();i.stats.buffering.end=t,a&&(a.stats.buffering.end=t);var e=a?a.stats:i.stats;r.hls.trigger(s.a.FRAG_BUFFERED,{frag:i,part:a,stats:e,id:i.type})};if(0===n.length)return o.b.warn("Fragments must have at least one ElementaryStreamType set. type: "+i.type+" level: "+i.level+" sn: "+i.sn),void Promise.resolve(d);this.blockBuffers(d,n),this.flushLiveBackBuffer()},e.onBufferEos=function(t,e){var r=this;for(var i in this.sourceBuffer)if(!e.type||e.type===i){var a=this.sourceBuffer[i];a&&!a.ended&&(a.ended=!0,o.b.log("[buffer-controller]: "+i+" sourceBuffer now EOS"))}this.blockBuffers((function(){var t=r.mediaSource;t&&"open"===t.readyState&&t.endOfStream()}))},e.onLevelUpdated=function(t,e){var r=e.details;r.fragments.length&&(this.details=r,this.getSourceBufferTypes().length?this.blockBuffers(this.updateMediaElementDuration.bind(this)):this.updateMediaElementDuration())},e.flushLiveBackBuffer=function(){var t=this.hls,e=this.details,r=this.media,i=this.sourceBuffer;if(r&&null!==e&&!1!==e.live){var a=t.config.liveBackBufferLength;if(Object(n.a)(a)&&!(a<0)){var o=r.currentTime-Math.max(a,e.levelTargetDuration);this.getSourceBufferTypes().forEach((function(e){var r=i[e];if(r){var a=U.getBuffered(r);a.length>0&&o>a.start(0)&&(t.trigger(s.a.LIVE_BACK_BUFFER_REACHED,{bufferEnd:o}),t.trigger(s.a.BUFFER_FLUSHING,{startOffset:0,endOffset:o,type:e}))}}))}}},e.updateMediaElementDuration=function(){if(this.details&&this.media&&this.mediaSource&&"open"===this.mediaSource.readyState){var t=this.details,e=this.hls,r=this.media,i=this.mediaSource,a=t.fragments[0].start+t.totalduration,s=r.duration,l=Object(n.a)(i.duration)?i.duration:0;t.live&&e.config.liveDurationInfinity?(o.b.log("[buffer-controller]: Media Source duration is set to Infinity"),i.duration=1/0,this.updateSeekableRange(t)):(a>l&&a>s||!Object(n.a)(s))&&(o.b.log("[buffer-controller]: Updating Media Source duration to "+a.toFixed(3)),i.duration=a)}},e.updateSeekableRange=function(t){var e=this.mediaSource,r=t.fragments;if(r.length&&t.live&&null!=e&&e.setLiveSeekableRange){var i=Math.max(0,r[0].start),a=Math.max(i,i+t.totalduration);e.setLiveSeekableRange(i,a)}},e.checkPendingTracks=function(){var t=this.bufferCodecEventsExpected,e=this.operationQueue,r=this.pendingTracks,i=Object.keys(r).length;(i&&!t||2===i)&&(this.createSourceBuffers(r),this.pendingTracks={},Object.keys(this.sourceBuffer).forEach((function(t){e.executeNext(t)})))},e.createSourceBuffers=function(t){var e=this.sourceBuffer,r=this.mediaSource;if(!r)throw Error("createSourceBuffers called when mediaSource was null");for(var i in t)if(!e[i]){var n=t[i];if(!n)throw Error("source buffer exists for track "+i+", however track does not");var l=n.levelCodec||n.codec,u=n.container+";codecs="+l;o.b.log("[buffer-controller]: creating sourceBuffer("+u+")");try{var d=e[i]=r.addSourceBuffer(u),h=i;this.addBufferListener(h,"updatestart",this._onSBUpdateStart),this.addBufferListener(h,"updateend",this._onSBUpdateEnd),this.addBufferListener(h,"error",this._onSBUpdateError),this.tracks[i]={buffer:d,codec:l,container:n.container,levelCodec:n.levelCodec,id:n.id}}catch(t){o.b.error("[buffer-controller]: error while trying to add sourceBuffer: "+t.message),this.hls.trigger(s.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:t,mimeType:u})}}this.hls.trigger(s.a.BUFFER_CREATED,{tracks:this.tracks})},e._onSBUpdateStart=function(t){this.operationQueue.current(t).onStart()},e._onSBUpdateEnd=function(t){var e=this.operationQueue;e.current(t).onComplete(),e.shiftAndExecuteNext(t)},e._onSBUpdateError=function(t,e){o.b.error("[buffer-controller]: "+t+" SourceBuffer error",e),this.hls.trigger(s.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.BUFFER_APPENDING_ERROR,fatal:!1});var r=this.operationQueue.current(t);r&&r.onError(e)},e.removeExecutor=function(t,e,r){var i=this.media,a=this.mediaSource,s=this.operationQueue,l=this.sourceBuffer[t];if(!i||!a||!l)return o.b.warn("[buffer-controller]: Attempting to remove from the "+t+" SourceBuffer, but it does not exist"),void s.shiftAndExecuteNext(t);var u=Object(n.a)(i.duration)?i.duration:1/0,d=Object(n.a)(a.duration)?a.duration:1/0,h=Math.max(0,e),f=Math.min(r,u,d);f>h?(o.b.log("[buffer-controller]: Removing ["+h+","+f+"] from the "+t+" SourceBuffer"),l.remove(h,f)):s.shiftAndExecuteNext(t)},e.appendExecutor=function(t,e){var r=this.operationQueue,i=this.sourceBuffer[e];if(!i)return o.b.warn("[buffer-controller]: Attempting to append to the "+e+" SourceBuffer, but it does not exist"),void r.shiftAndExecuteNext(e);i.ended=!1,i.appendBuffer(t)},e.blockBuffers=function(t,e){var r=this;if(void 0===e&&(e=this.getSourceBufferTypes()),!e.length)return o.b.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"),void Promise.resolve(t);var i=this.operationQueue,a=e.map((function(t){return i.appendBlocker(t)}));Promise.all(a).then((function(){t(),e.forEach((function(t){var e=r.sourceBuffer[t];e&&e.updating||i.shiftAndExecuteNext(t)}))}))},e.getSourceBufferTypes=function(){return Object.keys(this.sourceBuffer)},e.addBufferListener=function(t,e,r){var i=this.sourceBuffer[t];if(i){var a=r.bind(this,t);this.listeners[t].push({event:e,listener:a}),i.addEventListener(e,a)}},e.removeBufferListeners=function(t){var e=this.sourceBuffer[t];e&&this.listeners[t].forEach((function(t){e.removeEventListener(t.event,t.listener)}))},t}();function $t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Jt=function(){function t(t){this.autoLevelCapping=void 0,this.firstLevel=void 0,this.levels=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.hls=void 0,this.streamController=void 0,this.clientRect=void 0,this.hls=t,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.levels=[],this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}var e,r,i,a=t.prototype;return a.setStreamController=function(t){this.streamController=t},a.destroy=function(){this.unregisterListener(),this.hls.config.capLevelToPlayerSize&&(this.media=null,this.clientRect=null,this.stopCapping())},a.registerListeners=function(){var t=this.hls;t.on(s.a.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),t.on(s.a.MEDIA_ATTACHING,this.onMediaAttaching,this),t.on(s.a.MANIFEST_PARSED,this.onManifestParsed,this),t.on(s.a.LEVELS_UPDATED,this.onLevelsUpdated,this),t.on(s.a.BUFFER_CODECS,this.onBufferCodecs,this),t.on(s.a.MEDIA_DETACHING,this.onMediaDetaching,this)},a.unregisterListener=function(){var t=this.hls;t.off(s.a.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),t.off(s.a.MEDIA_ATTACHING,this.onMediaAttaching,this),t.off(s.a.MANIFEST_PARSED,this.onManifestParsed,this),t.off(s.a.LEVELS_UPDATED,this.onLevelsUpdated,this),t.off(s.a.BUFFER_CODECS,this.onBufferCodecs,this),t.off(s.a.MEDIA_DETACHING,this.onMediaDetaching,this)},a.onFpsDropLevelCapping=function(e,r){t.isLevelAllowed(r.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(r.droppedLevel)},a.onMediaAttaching=function(t,e){this.media=e.media instanceof HTMLVideoElement?e.media:null},a.onManifestParsed=function(t,e){var r=this.hls;this.restrictedLevels=[],this.levels=e.levels,this.firstLevel=e.firstLevel,r.config.capLevelToPlayerSize&&e.video&&this.startCapping()},a.onBufferCodecs=function(t,e){this.hls.config.capLevelToPlayerSize&&e.video&&this.startCapping()},a.onLevelsUpdated=function(t,e){this.levels=e.levels},a.onMediaDetaching=function(){this.stopCapping()},a.detectPlayerSize=function(){if(this.media&&this.mediaHeight>0&&this.mediaWidth>0){var t=this.levels?this.levels.length:0;if(t){var e=this.hls;e.autoLevelCapping=this.getMaxLevel(t-1),e.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=e.autoLevelCapping}}},a.getMaxLevel=function(e){var r=this;if(!this.levels)return-1;var i=this.levels.filter((function(i,a){return t.isLevelAllowed(a,r.restrictedLevels)&&a<=e}));return this.clientRect=null,t.getMaxLevelByMediaSize(i,this.mediaWidth,this.mediaHeight)},a.startCapping=function(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},a.stopCapping=function(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)},a.getDimensions=function(){if(this.clientRect)return this.clientRect;var t=this.media,e={width:0,height:0};if(t){var r=t.getBoundingClientRect();e.width=r.width,e.height=r.height,e.width||e.height||(e.width=r.right-r.left||t.width||0,e.height=r.bottom-r.top||t.height||0)}return this.clientRect=e,e},t.isLevelAllowed=function(t,e){return void 0===e&&(e=[]),-1===e.indexOf(t)},t.getMaxLevelByMediaSize=function(t,e,r){if(!t||t&&!t.length)return-1;for(var i,a,n=t.length-1,s=0;s<t.length;s+=1){var o=t[s];if((o.width>=e||o.height>=r)&&(i=o,!(a=t[s+1])||i.width!==a.width||i.height!==a.height)){n=s;break}}return n},e=t,i=[{key:"contentScaleFactor",get:function(){var t=1;try{t=self.devicePixelRatio}catch(t){}return t}}],(r=[{key:"mediaWidth",get:function(){return this.getDimensions().width*t.contentScaleFactor}},{key:"mediaHeight",get:function(){return this.getDimensions().height*t.contentScaleFactor}}])&&$t(e.prototype,r),i&&$t(e,i),t}(),te=function(){function t(t){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=t,this.registerListeners()}var e=t.prototype;return e.setStreamController=function(t){this.streamController=t},e.registerListeners=function(){this.hls.on(s.a.MEDIA_ATTACHING,this.onMediaAttaching,this)},e.unregisterListeners=function(){this.hls.off(s.a.MEDIA_ATTACHING,this.onMediaAttaching)},e.destroy=function(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null},e.onMediaAttaching=function(t,e){var r=this.hls.config;if(r.capLevelOnFPSDrop){var i=e.media instanceof self.HTMLVideoElement?e.media:null;this.media=i,i&&"function"==typeof i.getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setTimeout(this.checkFPSInterval.bind(this),r.fpsDroppedMonitoringPeriod)}},e.checkFPS=function(t,e,r){var i=performance.now();if(e){if(this.lastTime){var a=i-this.lastTime,n=r-this.lastDroppedFrames,l=e-this.lastDecodedFrames,u=1e3*n/a,d=this.hls;if(d.trigger(s.a.FPS_DROP,{currentDropped:n,currentDecoded:l,totalDroppedFrames:r}),u>0&&n>d.config.fpsDroppedMonitoringThreshold*l){var h=d.currentLevel;o.b.warn("drop FPS ratio greater than max allowed value for currentLevel: "+h),h>0&&(-1===d.autoLevelCapping||d.autoLevelCapping>=h)&&(h-=1,d.trigger(s.a.FPS_DROP_LEVEL_CAPPING,{level:h,droppedLevel:d.currentLevel}),d.autoLevelCapping=h,this.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=e}},e.checkFPSInterval=function(){var t=this.media;if(t)if(this.isVideoPlaybackQualityAvailable){var e=t.getVideoPlaybackQuality();this.checkFPS(t,e.totalVideoFrames,e.droppedVideoFrames)}else this.checkFPS(t,t.webkitDecodedFrameCount,t.webkitDroppedFrameCount)},t}(),ee=r(10),re=function(){function t(t){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=void 0,this.loader=null,this.stats=void 0,this.xhrSetup=t?t.xhrSetup:null,this.stats=new ee.a,this.retryDelay=0}var e=t.prototype;return e.destroy=function(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null},e.abortInternal=function(){var t=this.loader;t&&4!==t.readyState&&(this.stats.aborted=!0,t.abort()),self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout)},e.abort=function(){var t;this.abortInternal(),null!==(t=this.callbacks)&&void 0!==t&&t.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)},e.load=function(t,e,r){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=t,this.config=e,this.callbacks=r,this.retryDelay=e.retryDelay,this.loadInternal()},e.loadInternal=function(){var t=this.config,e=this.context;if(t){var r=this.loader=new self.XMLHttpRequest,i=this.stats;i.loading.first=0,i.loaded=0;var a=this.xhrSetup;try{if(a)try{a(r,e.url)}catch(t){r.open("GET",e.url,!0),a(r,e.url)}r.readyState||r.open("GET",e.url,!0)}catch(t){return void this.callbacks.onError({code:r.status,text:t.message},e,r)}e.rangeEnd&&r.setRequestHeader("Range","bytes="+e.rangeStart+"-"+(e.rangeEnd-1)),r.onreadystatechange=this.readystatechange.bind(this),r.onprogress=this.loadprogress.bind(this),r.responseType=e.responseType,self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),t.timeout),r.send()}},e.readystatechange=function(){var t=this.context,e=this.loader,r=this.stats;if(t&&e){var i=e.readyState,a=this.config;if(!r.aborted&&i>=2)if(self.clearTimeout(this.requestTimeout),0===r.loading.first&&(r.loading.first=Math.max(self.performance.now(),r.loading.start)),4===i){var n=e.status;if(n>=200&&n<300){var s,l;r.loading.end=Math.max(self.performance.now(),r.loading.first),l="arraybuffer"===t.responseType?(s=e.response).byteLength:(s=e.responseText).length,r.loaded=r.total=l;var u=this.callbacks.onProgress;u&&u(r,t,s,e);var d={url:e.responseURL,data:s};this.callbacks.onSuccess(d,r,t,e)}else r.retry>=a.maxRetry||n>=400&&n<499?(o.b.error(n+" while loading "+t.url),this.callbacks.onError({code:n,text:e.statusText},t,e)):(o.b.warn(n+" while loading "+t.url+", retrying in "+this.retryDelay+"..."),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,a.maxRetryDelay),r.retry++)}else self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),a.timeout)}},e.loadtimeout=function(){o.b.warn("timeout while loading "+this.context.url);var t=this.callbacks;t&&(this.abortInternal(),t.onTimeout(this.stats,this.context,this.loader))},e.loadprogress=function(t){var e=this.stats;e.loaded=t.loaded,t.lengthComputable&&(e.total=t.total)},e.getResponseHeader=function(t){if(this.loader)try{return this.loader.getResponseHeader(t)}catch(t){}return null},t}();function ie(t){var e="function"==typeof Map?new Map:void 0;return(ie=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return ae(t,arguments,oe(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),se(i,t)})(t)}function ae(t,e,r){return(ae=ne()?Reflect.construct:function(t,e,r){var i=[null];i.push.apply(i,e);var a=new(Function.bind.apply(t,i));return r&&se(a,r.prototype),a}).apply(null,arguments)}function ne(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function se(t,e){return(se=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function oe(t){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var le=function(){function t(t){this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=void 0,this.response=void 0,this.controller=void 0,this.context=void 0,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=t.fetchSetup||ue,this.controller=new self.AbortController,this.stats=new ee.a}var e=t.prototype;return e.destroy=function(){this.loader=this.callbacks=null,this.abortInternal()},e.abortInternal=function(){this.stats.aborted=!0,this.controller.abort()},e.abort=function(){var t;this.abortInternal(),null!==(t=this.callbacks)&&void 0!==t&&t.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)},e.load=function(t,e,r){var i=this,a=this.stats;if(a.loading.start)throw new Error("Loader can only be used once.");a.loading.start=self.performance.now();var s=function(t,e){var r={method:"GET",mode:"cors",credentials:"same-origin",signal:e};t.rangeEnd&&(r.headers=new self.Headers({Range:"bytes="+t.rangeStart+"-"+String(t.rangeEnd-1)}));return r}(t,this.controller.signal),o=r.onProgress,l="arraybuffer"===t.responseType,u=l?"byteLength":"length";this.context=t,this.config=e,this.callbacks=r,this.request=this.fetchSetup(t,s),self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout((function(){i.abortInternal(),r.onTimeout(a,t,i.response)}),e.timeout),self.fetch(this.request).then((function(r){if(i.response=i.loader=r,!r.ok){var s=r.status,u=r.statusText;throw new he(u||"fetch, bad network response",s,r)}return a.loading.first=Math.max(self.performance.now(),a.loading.start),a.total=parseInt(r.headers.get("Content-Length")||"0"),o&&Object(n.a)(e.highWaterMark)&&i.loadProgressively(r,a,t,e.highWaterMark,o),l?r.arrayBuffer():r.text()})).then((function(s){var l=i.response;self.clearTimeout(i.requestTimeout),a.loading.end=Math.max(self.performance.now(),a.loading.first),a.loaded=a.total=s[u];var d={url:l.url,data:s};o&&!Object(n.a)(e.highWaterMark)&&o(a,t,s,l),r.onSuccess(d,a,t,l)})).catch((function(e){if(self.clearTimeout(i.requestTimeout),!a.aborted){var n=e.code||0;r.onError({code:n,text:e.message},t,e.details)}}))},e.getResponseHeader=function(t){if(this.response)try{return this.response.headers.get(t)}catch(t){}return null},e.loadProgressively=function(t,e,r,i,a){void 0===i&&(i=0);var n=new Yt.a,s=t.clone().body.getReader();!function o(){s.read().then((function(s){if(s.done)n.dataLength&&a(e,r,n.flush(),t);else{var l=s.value,u=l.length;e.loaded+=u,u<i||n.dataLength?(n.push(l),n.dataLength>=i&&a(e,r,n.flush(),t)):a(e,r,l,t),o()}})).catch((function(){}))}()},t}();function ue(t,e){return new self.Request(t.url,e)}var de,he=function(t){var e,r;function i(e,r,i){var a;return(a=t.call(this,e)||this).code=void 0,a.details=void 0,a.code=r,a.details=i,a}return r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,i}(ie(Error)),fe=le;!function(t){t.WIDEVINE="com.widevine.alpha",t.PLAYREADY="com.microsoft.playready"}(de||(de={}));var ce="undefined"!=typeof self&&self.navigator&&self.navigator.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null;function ve(){return(ve=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}function ge(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function pe(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ge(Object(r),!0).forEach((function(e){me(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function me(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var ye=pe(pe({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,initialLiveManifestSize:1,maxBufferLength:30,maxBufferSize:6e7,maxBufferHole:.1,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1.25,liveDurationInfinity:!1,liveBackBufferLength:1/0,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:re,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,abrController:Wt,bufferController:Zt,capLevelController:Jt,fpsController:te,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystemOptions:{},requestMediaKeySystemAccessFunc:ce,testBandwidth:!0,progressive:!1,lowLatencyMode:!0},{cueHandler:Xt,enableCEA708Captions:!1,enableWebVTT:!1,enableIMSC1:!1,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}),{},{subtitleStreamController:void 0,subtitleTrackController:void 0,timelineController:void 0,audioStreamController:void 0,audioTrackController:void 0,emeController:void 0});function be(t){var e=t.loader;e!==fe&&e!==re?(o.b.log("[config]: Custom loader detected, cannot enable progressive streaming"),t.progressive=!1):function(){if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{return new self.ReadableStream({}),!0}catch(t){}return!1}()&&(t.loader=fe,t.progressive=!0,t.enableSoftwareAES=!0,o.b.log("[config]: Progressive streaming enabled, using FetchLoader"))}function Te(t,e){var r;try{r=new Event("addtrack")}catch(t){(r=document.createEvent("Event")).initEvent("addtrack",!1,!1)}r.track=t,e.dispatchEvent(r)}function Ee(t,e,r){var i=[],a=function(t,e){if(e<t[0].startTime)return 0;if(e>t[t.length-1].endTime)return-1;for(var r=0,i=t.length-1;r<=i;){var a=Math.floor((i+r)/2);if(e<t[a].startTime)i=a-1;else{if(!(e>t[a].startTime))return a;r=a+1}}return t[r].startTime-e<e-t[i].startTime?r:i}(t,e);if(a>-1)for(var n=a,s=t.length;n<s;n++){var o=t[n];if(o.startTime>=e&&o.endTime<=r)i.push(o);else if(o.startTime>r)return i}return i}var Se=r(6),Le=function(){function t(t){this.hls=void 0,this.id3Track=null,this.media=null,this.hls=t,this._registerListeners()}var e=t.prototype;return e.destroy=function(){this._unregisterListeners()},e._registerListeners=function(){var t=this.hls;t.on(s.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.on(s.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.on(s.a.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),t.on(s.a.BUFFER_FLUSHING,this.onBufferFlushing,this)},e._unregisterListeners=function(){var t=this.hls;t.off(s.a.MEDIA_ATTACHED,this.onMediaAttached,this),t.off(s.a.MEDIA_DETACHING,this.onMediaDetaching,this),t.off(s.a.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),t.off(s.a.BUFFER_FLUSHING,this.onBufferFlushing,this)},e.onMediaAttached=function(t,e){this.media=e.media},e.onMediaDetaching=function(){this.id3Track&&(!function(t){if(null!=t&&t.cues)for("disabled"===t.mode&&(t.mode="hidden");t.cues.length>0;)t.removeCue(t.cues[0])}(this.id3Track),this.id3Track=null,this.media=null)},e.getID3Track=function(t){if(this.media){for(var e=0;e<t.length;e++){var r=t[e];if("metadata"===r.kind&&"id3"===r.label)return Te(r,this.media),r}return this.media.addTextTrack("metadata","id3")}},e.onFragParsingMetadata=function(t,e){if(this.media){var r=e.frag,i=e.samples;this.id3Track||(this.id3Track=this.getID3Track(this.media.textTracks),this.id3Track.mode="hidden");for(var a=self.WebKitDataCue||self.VTTCue||self.TextTrackCue,n=0;n<i.length;n++){var s=Se.c(i[n].data);if(s){var o=i[n].pts,l=n<i.length-1?i[n+1].pts:r.end;l-o<=0&&(l=o+.25);for(var u=0;u<s.length;u++){var d=s[u];if(!Se.e(d)){var h=new a(o,l,"");h.value=d,this.id3Track.addCue(h)}}}}}},e.onBufferFlushing=function(t,e){var r=e.startOffset,i=e.endOffset,a=e.type;if(!a||"audio"===a){var n=this.id3Track;if(!n||!n.cues||!n.cues.length)return;for(var s=Ee(n.cues,r,i),o=0;o<s.length;o++)n.removeCue(s[o])}},t}();function Ae(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Re=function(){function t(t){var e=this;this.hls=void 0,this.config=void 0,this.media=null,this.levelDetails=null,this.currentTime=0,this.stallCount=0,this._latency=null,this.timeupdateHandler=function(){return e.timeupdate()},this.hls=t,this.config=t.config,this.registerListeners()}var e,r,i,n=t.prototype;return n.destroy=function(){this.unregisterListeners(),this.onMediaDetaching()},n.registerListeners=function(){this.hls.on(s.a.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(s.a.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.on(s.a.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(s.a.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.on(s.a.ERROR,this.onError,this)},n.unregisterListeners=function(){this.hls.off(s.a.MEDIA_ATTACHED,this.onMediaAttached),this.hls.off(s.a.MEDIA_DETACHING,this.onMediaDetaching),this.hls.off(s.a.MANIFEST_LOADING,this.onManifestLoading),this.hls.off(s.a.LEVEL_UPDATED,this.onLevelUpdated),this.hls.off(s.a.ERROR,this.onError)},n.onMediaAttached=function(t,e){this.media=e.media,this.media.addEventListener("timeupdate",this.timeupdateHandler)},n.onMediaDetaching=function(){this.media&&(this.media.removeEventListener("timeupdate",this.timeupdateHandler),this.media=null)},n.onManifestLoading=function(){this.levelDetails=null,this._latency=null,this.stallCount=0},n.onLevelUpdated=function(t,e){var r=e.details;this.levelDetails=r,r.advanced&&this.timeupdate(),!r.live&&this.media&&this.media.removeEventListener("timeupdate",this.timeupdateHandler)},n.onError=function(t,e){e.details===a.a.BUFFER_STALLED_ERROR&&(this.stallCount++,o.b.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))},n.timeupdate=function(){var t=this.media,e=this.levelDetails;if(t&&e){this.currentTime=t.currentTime;var r=this.computeLatency();if(null!==r){this._latency=r;var i=this.config,a=i.lowLatencyMode,n=i.maxLiveSyncPlaybackRate;if(a&&1!==n){var s=this.targetLatency;if(null!==s){var o=r-s,l=o<Math.min(this.maxLatency,s+e.targetduration);if(e.live&&l&&o>.05&&this.forwardBufferLength>1){var u=Math.min(2,Math.max(1,n)),d=Math.round(2/(1+Math.exp(-.75*o-this.edgeStalled))*20)/20;t.playbackRate=Math.min(u,Math.max(1,d))}else 1!==t.playbackRate&&0!==t.playbackRate&&(t.playbackRate=1)}}}}},n.estimateLiveEdge=function(){var t=this.levelDetails;return null===t?null:t.edge+t.age},n.computeLatency=function(){var t=this.estimateLiveEdge();return null===t?null:t-this.currentTime},e=t,(r=[{key:"latency",get:function(){return this._latency||0}},{key:"maxLatency",get:function(){var t=this.config,e=this.levelDetails;return void 0!==t.liveMaxLatencyDuration?t.liveMaxLatencyDuration:e?t.liveMaxLatencyDurationCount*e.targetduration:0}},{key:"targetLatency",get:function(){var t=this.levelDetails;if(null===t)return null;var e=t.holdBack,r=t.partHoldBack,i=t.targetduration,a=this.config,n=a.liveSyncDuration,s=a.liveSyncDurationCount,o=a.lowLatencyMode,l=this.hls.userConfig,u=o&&r||e;(l.liveSyncDuration||l.liveSyncDurationCount||0===u)&&(u=void 0!==n?n:s*i);var d=t.targetduration;return u+Math.min(1*this.stallCount,d)}},{key:"liveSyncPosition",get:function(){var t=this.estimateLiveEdge(),e=this.targetLatency;return null===t||null===e||null===this.levelDetails?null:Math.min(this.levelDetails.edge,t-e-this.edgeStalled)}},{key:"edgeStalled",get:function(){var t=this.levelDetails;if(null===t)return 0;var e=3*(this.config.lowLatencyMode&&t.partTarget||t.targetduration);return Math.max(t.age-e,0)}},{key:"forwardBufferLength",get:function(){var t=this.media,e=this.levelDetails;if(!t||!e)return 0;var r=t.buffered.length;return r?t.buffered.end(r-1):e.edge-this.currentTime}}])&&Ae(e.prototype,r),i&&Ae(e,i),t}();function De(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _e(t,e,r){return e&&De(t.prototype,e),r&&De(t,r),t}var ke=function(){function t(e){var r=this;void 0===e&&(e={}),this.config=void 0,this.userConfig=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this._emitter=new _t.EventEmitter,this._autoLevelCapping=void 0,this.abrController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.emeController=void 0,this._media=null,this.url=null;var i=this.config=function(t,e){if((e.liveSyncDurationCount||e.liveMaxLatencyDurationCount)&&(e.liveSyncDuration||e.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");if(void 0!==e.liveMaxLatencyDurationCount&&(void 0===e.liveSyncDurationCount||e.liveMaxLatencyDurationCount<=e.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');if(void 0!==e.liveMaxLatencyDuration&&(void 0===e.liveSyncDuration||e.liveMaxLatencyDuration<=e.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');return ve({},t,e)}(t.DefaultConfig,e);this.userConfig=e,Object(o.a)(i.debug),this._autoLevelCapping=-1,i.progressive&&be(i);var a=this.abrController=new i.abrController(this),n=new i.bufferController(this),s=this.capLevelController=new i.capLevelController(this),l=new i.fpsController(this),u=new C(this),d=new O(this),h=new Le(this),f=this.levelController=new jt(this),c=new I(this),v=this.streamController=new It(this,c);f.onParsedComplete=function(){(i.autoStartLoad||v.forceStartLoad)&&r.startLoad(i.startPosition)},s.setStreamController(v),l.setStreamController(v);var g=[f,v];this.networkControllers=g;var p=[u,d,a,n,s,l,h,c];this.audioTrackController=this.createController(i.audioTrackController,null,g),this.createController(i.audioStreamController,c,g),this.subtitleTrackController=this.createController(i.subtitleTrackController,null,g),this.createController(i.subtitleStreamController,c,g),this.createController(i.timelineController,null,p),this.emeController=this.createController(i.emeController,null,p),this.latencyController=this.createController(Re,null,p),this.coreComponents=p}t.isSupported=function(){return function(){var t=Lt();if(!t)return!1;var e=At(),r=t&&"function"==typeof t.isTypeSupported&&t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),i=!e||e.prototype&&"function"==typeof e.prototype.appendBuffer&&"function"==typeof e.prototype.remove;return!!r&&!!i}()},_e(t,null,[{key:"version",get:function(){}},{key:"Events",get:function(){return s.a}},{key:"ErrorTypes",get:function(){return a.b}},{key:"ErrorDetails",get:function(){return a.a}},{key:"DefaultConfig",get:function(){return t.defaultConfig?t.defaultConfig:ye},set:function(e){t.defaultConfig=e}}]);var e=t.prototype;return e.createController=function(t,e,r){if(t){var i=e?new t(this,e):new t(this);return r&&r.push(i),i}return null},e.on=function(t,e,r){var i=this;this._emitter.on(t,(function(){for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];if(i.config.debug)e.apply(this,n);else try{e.apply(this,n)}catch(e){o.b.error("An internal error happened while handling event "+t+'. Error message: "'+e.message+'". Here is a stacktrace:',e),i.trigger(s.a.ERROR,{type:a.b.OTHER_ERROR,details:a.a.INTERNAL_EXCEPTION,fatal:!1,event:t,error:e})}}),r)},e.once=function(t,e,r){var i=this;this._emitter.once(t,(function(){for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];if(i.config.debug)e.apply(this,n);else try{e.apply(this,n)}catch(e){o.b.error("An internal error happened while handling event "+t+'. Error message: "'+e.message+'". Here is a stacktrace:',e),i.trigger(s.a.ERROR,{type:a.b.OTHER_ERROR,details:a.a.INTERNAL_EXCEPTION,fatal:!1,event:t,error:e})}}),r)},e.removeAllListeners=function(t){this._emitter.removeAllListeners(t)},e.off=function(t,e,r,i){this._emitter.off(t,e,r,i)},e.listeners=function(t){return this._emitter.listeners(t)},e.emit=function(t,e,r){return this._emitter.emit(t,e,r)},e.trigger=function(t,e){return this._emitter.emit(t,t,e)},e.listenerCount=function(t){return this._emitter.listenerCount(t)},e.destroy=function(){o.b.log("destroy"),this.trigger(s.a.DESTROYING,void 0),this.detachMedia(),this.networkControllers.forEach((function(t){return t.destroy()})),this.coreComponents.forEach((function(t){return t.destroy()})),this.url=null,this.removeAllListeners(),this._autoLevelCapping=-1},e.attachMedia=function(t){o.b.log("attachMedia"),this._media=t,this.trigger(s.a.MEDIA_ATTACHING,{media:t})},e.detachMedia=function(){o.b.log("detachMedia"),this.trigger(s.a.MEDIA_DETACHING,void 0),this._media=null},e.loadSource=function(t){this.stopLoad();var e=this.media;e&&this.url&&(this.detachMedia(),this.attachMedia(e)),t=i.buildAbsoluteURL(self.location.href,t,{alwaysNormalize:!0}),o.b.log("loadSource:"+t),this.url=t,this.trigger(s.a.MANIFEST_LOADING,{url:t})},e.startLoad=function(t){void 0===t&&(t=-1),o.b.log("startLoad("+t+")"),this.networkControllers.forEach((function(e){e.startLoad(t)}))},e.stopLoad=function(){o.b.log("stopLoad"),this.networkControllers.forEach((function(t){t.stopLoad()}))},e.swapAudioCodec=function(){o.b.log("swapAudioCodec"),this.streamController.swapAudioCodec()},e.recoverMediaError=function(){o.b.log("recoverMediaError");var t=this._media;this.detachMedia(),t&&this.attachMedia(t)},e.removeLevel=function(t,e){void 0===e&&(e=0),this.levelController.removeLevel(t,e)},_e(t,[{key:"levels",get:function(){return this.levelController.levels?this.levelController.levels:[]}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(t){o.b.log("set currentLevel:"+t),this.loadLevel=t,this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(t){o.b.log("set nextLevel:"+t),this.levelController.manualLevel=t,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(t){o.b.log("set loadLevel:"+t),this.levelController.manualLevel=t}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(t){this.levelController.nextLoadLevel=t}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(t){o.b.log("set firstLevel:"+t),this.levelController.firstLevel=t}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(t){o.b.log("set startLevel:"+t),-1!==t&&(t=Math.max(t,this.minAutoLevel)),this.levelController.startLevel=t}},{key:"capLevelToPlayerSize",get:function(){return this.config.capLevelToPlayerSize},set:function(t){var e=!!t;e!==this.config.capLevelToPlayerSize&&(e?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=e)}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(t){this._autoLevelCapping!==t&&(o.b.log("set autoLevelCapping:"+t),this._autoLevelCapping=t)}},{key:"bandwidthEstimate",get:function(){return this.abrController.bwEstimator.getEstimate()}},{key:"autoLevelEnabled",get:function(){return-1===this.levelController.manualLevel}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){var t=this.levels,e=this.config.minAutoBitrate;if(!t)return 0;for(var r=t.length,i=0;i<r;i++)if(t[i].maxBitrate>e)return i;return 0}},{key:"maxAutoLevel",get:function(){var t=this.levels,e=this.autoLevelCapping;return-1===e&&t&&t.length?t.length-1:e}},{key:"nextAutoLevel",get:function(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)},set:function(t){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,t)}},{key:"audioTracks",get:function(){var t=this.audioTrackController;return t?t.audioTracks:[]}},{key:"audioTrack",get:function(){var t=this.audioTrackController;return t?t.audioTrack:-1},set:function(t){var e=this.audioTrackController;e&&(e.audioTrack=t)}},{key:"subtitleTracks",get:function(){var t=this.subtitleTrackController;return t?t.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var t=this.subtitleTrackController;return t?t.subtitleTrack:-1},set:function(t){var e=this.subtitleTrackController;e&&(e.subtitleTrack=t)}},{key:"media",get:function(){return this._media}},{key:"subtitleDisplay",get:function(){var t=this.subtitleTrackController;return!!t&&t.subtitleDisplay},set:function(t){var e=this.subtitleTrackController;e&&(e.subtitleDisplay=t)}},{key:"lowLatencyMode",get:function(){return this.config.lowLatencyMode},set:function(t){this.config.lowLatencyMode=t}},{key:"liveSyncPosition",get:function(){return this.latencyController.liveSyncPosition}},{key:"latency",get:function(){return this.latencyController.latency}},{key:"maxLatency",get:function(){return this.latencyController.maxLatency}},{key:"targetLatency",get:function(){return this.latencyController.targetLatency}}]),t}();ke.defaultConfig=void 0}]).default}));
//# sourceMappingURL=hls.light.min.js.map

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/base/base_object.js":
/*!*********************************!*\
  !*** ./src/base/base_object.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ./utils */ "./src/base/utils.js");

var _events = __webpack_require__(/*! ./events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class BaseObject
 * @constructor
 * @extends Events
 * @module base
 */
// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var BaseObject = function (_Events) {
  (0, _inherits3.default)(BaseObject, _Events);
  (0, _createClass3.default)(BaseObject, [{
    key: 'options',

    /**
     * returns the object options
     * @property options
     * @type Object
     */
    get: function get() {
      return this._options;
    }

    /**
     * @method constructor
     * @param {Object} options
     */

  }]);

  function BaseObject() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, BaseObject);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Events.call(this, options));

    _this._options = options;
    _this.uniqueId = (0, _utils.uniqueId)('o');
    return _this;
  }
  /**
  * a unique id prefixed with `'o'`, `o1, o232`
  *
  * @property uniqueId
  * @type String
  */


  return BaseObject;
}(_events2.default);

exports.default = BaseObject;
module.exports = exports['default'];

/***/ }),

/***/ "./src/base/container_plugin.js":
/*!**************************************!*\
  !*** ./src/base/container_plugin.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _base_object = __webpack_require__(/*! ./base_object */ "./src/base/base_object.js");

var _base_object2 = _interopRequireDefault(_base_object);

var _utils = __webpack_require__(/*! ./utils */ "./src/base/utils.js");

var _error_mixin = __webpack_require__(/*! ./error_mixin */ "./src/base/error_mixin.js");

var _error_mixin2 = _interopRequireDefault(_error_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base class for a container plugin
 * @class ContainerPlugin
 * @constructor
 * @extends BaseObject
 * @module base
 */
var ContainerPlugin = function (_BaseObject) {
  (0, _inherits3.default)(ContainerPlugin, _BaseObject);
  (0, _createClass3.default)(ContainerPlugin, [{
    key: 'playerError',
    get: function get() {
      return this.container.playerError;
    }
  }]);

  function ContainerPlugin(container) {
    (0, _classCallCheck3.default)(this, ContainerPlugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this, container.options));

    _this.container = container;
    _this.enabled = true;
    _this.bindEvents();
    return _this;
  }

  ContainerPlugin.prototype.enable = function enable() {
    if (!this.enabled) {
      this.bindEvents();
      this.enabled = true;
    }
  };

  ContainerPlugin.prototype.disable = function disable() {
    if (this.enabled) {
      this.stopListening();
      this.enabled = false;
    }
  };

  ContainerPlugin.prototype.bindEvents = function bindEvents() {};

  ContainerPlugin.prototype.destroy = function destroy() {
    this.stopListening();
  };

  return ContainerPlugin;
}(_base_object2.default);

exports.default = ContainerPlugin;


(0, _assign2.default)(ContainerPlugin.prototype, _error_mixin2.default);

ContainerPlugin.extend = function (properties) {
  return (0, _utils.extend)(ContainerPlugin, properties);
};

ContainerPlugin.type = 'container';
module.exports = exports['default'];

/***/ }),

/***/ "./src/base/core_plugin.js":
/*!*********************************!*\
  !*** ./src/base/core_plugin.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ./utils */ "./src/base/utils.js");

var _base_object = __webpack_require__(/*! ./base_object */ "./src/base/base_object.js");

var _base_object2 = _interopRequireDefault(_base_object);

var _error_mixin = __webpack_require__(/*! ./error_mixin */ "./src/base/error_mixin.js");

var _error_mixin2 = _interopRequireDefault(_error_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CorePlugin = function (_BaseObject) {
  (0, _inherits3.default)(CorePlugin, _BaseObject);
  (0, _createClass3.default)(CorePlugin, [{
    key: 'playerError',
    get: function get() {
      return this.core.playerError;
    }
  }]);

  function CorePlugin(core) {
    (0, _classCallCheck3.default)(this, CorePlugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this, core.options));

    _this.core = core;
    _this.enabled = true;
    _this.bindEvents();
    return _this;
  }

  CorePlugin.prototype.bindEvents = function bindEvents() {};

  CorePlugin.prototype.enable = function enable() {
    if (!this.enabled) {
      this.bindEvents();
      this.enabled = true;
    }
  };

  CorePlugin.prototype.disable = function disable() {
    if (this.enabled) {
      this.stopListening();
      this.enabled = false;
    }
  };

  CorePlugin.prototype.getExternalInterface = function getExternalInterface() {
    return {};
  };

  CorePlugin.prototype.destroy = function destroy() {
    this.stopListening();
  };

  return CorePlugin;
}(_base_object2.default);

exports.default = CorePlugin;


(0, _assign2.default)(CorePlugin.prototype, _error_mixin2.default);

CorePlugin.extend = function (properties) {
  return (0, _utils.extend)(CorePlugin, properties);
};

CorePlugin.type = 'core';
module.exports = exports['default'];

/***/ }),

/***/ "./src/base/error_mixin.js":
/*!*********************************!*\
  !*** ./src/base/error_mixin.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _log = __webpack_require__(/*! ../plugins/log */ "./src/plugins/log/index.js");

var _log2 = _interopRequireDefault(_log);

var _error = __webpack_require__(/*! ../components/error */ "./src/components/error/index.js");

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMixin = {
  /**
   * creates an error.
   * @method createError
   * @param {Object} error should be an object with code, description, level and raw error.
   * @return {Object} Object with formatted error data including origin and scope
   */
  createError: function createError(error) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { useCodePrefix: true };

    var scope = this.constructor && this.constructor.type || '';
    var origin = this.name || scope;
    var i18n = this.i18n || this.core && this.core.i18n || this.container && this.container.i18n;

    var prefixedCode = origin + ':' + (error && error.code || 'unknown');
    var defaultError = {
      description: '',
      level: _error2.default.Levels.FATAL,
      origin: origin,
      scope: scope,
      raw: {}
    };

    var errorData = (0, _assign2.default)({}, defaultError, error, {
      code: options.useCodePrefix ? prefixedCode : error.code
    });

    if (i18n && errorData.level == _error2.default.Levels.FATAL && !errorData.UI) {
      var defaultUI = {
        title: i18n.t('default_error_title'),
        message: i18n.t('default_error_message')
      };
      errorData.UI = defaultUI;
    }

    if (this.playerError) this.playerError.createError(errorData);else _log2.default.warn(origin, 'PlayerError is not defined. Error: ', errorData);

    return errorData;
  }
};

exports.default = ErrorMixin;
module.exports = exports['default'];

/***/ }),

/***/ "./src/base/events.js":
/*!****************************!*\
  !*** ./src/base/events.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _log = __webpack_require__(/*! ../plugins/log */ "./src/plugins/log/index.js");

var _log2 = _interopRequireDefault(_log);

var _utils = __webpack_require__(/*! ./utils */ "./src/base/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var slice = Array.prototype.slice;

var eventSplitter = /\s+/;

var eventsApi = function eventsApi(obj, action, name, rest) {
  if (!name) return true;

  // Handle event maps.
  if ((typeof name === 'undefined' ? 'undefined' : (0, _typeof3.default)(name)) === 'object') {
    for (var key in name) {
      obj[action].apply(obj, [key, name[key]].concat(rest));
    }return false;
  }

  // Handle space separated event names.
  if (eventSplitter.test(name)) {
    var names = name.split(eventSplitter);
    for (var i = 0, l = names.length; i < l; i++) {
      obj[action].apply(obj, [names[i]].concat(rest));
    }return false;
  }

  return true;
};

var triggerEvents = function triggerEvents(events, args, klass, name) {
  var ev = void 0,
      i = -1;
  var l = events.length,
      a1 = args[0],
      a2 = args[1],
      a3 = args[2];
  run();

  function run() {
    try {
      switch (args.length) {
        /* eslint-disable curly */
        case 0:
          while (++i < l) {
            (ev = events[i]).callback.call(ev.ctx);
          }return;
        case 1:
          while (++i < l) {
            (ev = events[i]).callback.call(ev.ctx, a1);
          }return;
        case 2:
          while (++i < l) {
            (ev = events[i]).callback.call(ev.ctx, a1, a2);
          }return;
        case 3:
          while (++i < l) {
            (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
          }return;
        default:
          while (++i < l) {
            (ev = events[i]).callback.apply(ev.ctx, args);
          }return;
      }
    } catch (exception) {
      _log2.default.error.apply(_log2.default, [klass, 'error on event', name, 'trigger', '-', exception]);
      run();
    }
  }
};

/**
 * @class Events
 * @constructor
 * @module base
 */

var Events = function () {
  function Events() {
    (0, _classCallCheck3.default)(this, Events);
  }

  /**
   * listen to an event indefinitely, if you want to stop you need to call `off`
   * @method on
   * @param {String} name
   * @param {Function} callback
   * @param {Object} context
   */
  Events.prototype.on = function on(name, callback, context) {
    if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
    this._events || (this._events = {});
    var events = this._events[name] || (this._events[name] = []);
    events.push({ callback: callback, context: context, ctx: context || this });
    return this;
  };

  /**
   * listen to an event only once
   * @method once
   * @param {String} name
   * @param {Function} callback
   * @param {Object} context
   */


  Events.prototype.once = function once(name, callback, context) {
    var _this = this;

    var _once = void 0;
    if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
    var off = function off() {
      return _this.off(name, _once);
    };
    _once = function once() {
      off(name, _once);
      callback.apply(this, arguments);
    };
    return this.on(name, _once, context);
  };

  /**
   * stop listening to an event
   * @method off
   * @param {String} name
   * @param {Function} callback
   * @param {Object} context
   */


  Events.prototype.off = function off(name, callback, context) {
    var retain = void 0,
        ev = void 0,
        events = void 0,
        names = void 0,
        i = void 0,
        l = void 0,
        j = void 0,
        k = void 0;
    if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
    if (!name && !callback && !context) {
      this._events = void 0;
      return this;
    }
    names = name ? [name] : (0, _keys2.default)(this._events);
    // jshint maxdepth:5
    for (i = 0, l = names.length; i < l; i++) {
      name = names[i];
      events = this._events[name];
      if (events) {
        this._events[name] = retain = [];
        if (callback || context) {
          for (j = 0, k = events.length; j < k; j++) {
            ev = events[j];
            if (callback && callback !== ev.callback && callback !== ev.callback._callback || context && context !== ev.context) retain.push(ev);
          }
        }
        if (!retain.length) delete this._events[name];
      }
    }
    return this;
  };

  /**
   * triggers an event given its `name`
   * @method trigger
   * @param {String} name
   */


  Events.prototype.trigger = function trigger(name) {
    var klass = this.name || this.constructor.name;
    _log2.default.debug.apply(_log2.default, [klass].concat(Array.prototype.slice.call(arguments)));
    if (!this._events) return this;
    var args = slice.call(arguments, 1);
    if (!eventsApi(this, 'trigger', name, args)) return this;
    var events = this._events[name];
    var allEvents = this._events.all;
    if (events) triggerEvents(events, args, klass, name);
    if (allEvents) triggerEvents(allEvents, arguments, klass, name);
    return this;
  };

  /**
   * stop listening an event for a given object
   * @method stopListening
   * @param {Object} obj
   * @param {String} name
   * @param {Function} callback
   */


  Events.prototype.stopListening = function stopListening(obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;
    var remove = !name && !callback;
    if (!callback && (typeof name === 'undefined' ? 'undefined' : (0, _typeof3.default)(name)) === 'object') callback = this;
    if (obj) (listeningTo = {})[obj._listenId] = obj;
    for (var id in listeningTo) {
      obj = listeningTo[id];
      obj.off(name, callback, this);
      if (remove || (0, _keys2.default)(obj._events).length === 0) delete this._listeningTo[id];
    }
    return this;
  };

  Events.register = function register(eventName) {
    Events.Custom || (Events.Custom = {});
    var property = typeof eventName === 'string' && eventName.toUpperCase().trim();

    if (property && !Events.Custom[property]) {
      Events.Custom[property] = property.toLowerCase().split('_').map(function (value, index) {
        return index === 0 ? value : value = value[0].toUpperCase() + value.slice(1);
      }).join('');
    } else _log2.default.error('Events', 'Error when register event: ' + eventName);
  };

  Events.listAvailableCustomEvents = function listAvailableCustomEvents() {
    Events.Custom || (Events.Custom = {});
    return (0, _keys2.default)(Events.Custom).filter(function (property) {
      return typeof Events.Custom[property] === 'string';
    });
  };

  return Events;
}();

/**
 * listen to an event indefinitely for a given `obj`
 * @method listenTo
 * @param {Object} obj
 * @param {String} name
 * @param {Function} callback
 * @param {Object} context
 * @example
 * ```javascript
 * this.listenTo(this.core.playback, Events.PLAYBACK_PAUSE, this.callback)
 * ```
 */
/**
 * listen to an event once for a given `obj`
 * @method listenToOnce
 * @param {Object} obj
 * @param {String} name
 * @param {Function} callback
 * @param {Object} context
 * @example
 * ```javascript
 * this.listenToOnce(this.core.playback, Events.PLAYBACK_PAUSE, this.callback)
 * ```
 */


exports.default = Events;
var listenMethods = { listenTo: 'on', listenToOnce: 'once' };

(0, _keys2.default)(listenMethods).forEach(function (method) {
  Events.prototype[method] = function (obj, name, callback) {
    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var id = obj._listenId || (obj._listenId = (0, _utils.uniqueId)('l'));
    listeningTo[id] = obj;
    if (!callback && (typeof name === 'undefined' ? 'undefined' : (0, _typeof3.default)(name)) === 'object') callback = this;
    obj[listenMethods[method]](name, callback, this);
    return this;
  };
});

// PLAYER EVENTS
/**
 * Fired when the player is ready on startup
 *
 * @event PLAYER_READY
 */
Events.PLAYER_READY = 'ready';
/**
 * Fired when player resizes
 *
 * @event PLAYER_RESIZE
 * @param {Object} currentSize an object with the current size
 */
Events.PLAYER_RESIZE = 'resize';
/**
 * Fired when player changes its fullscreen state
 *
 * @event PLAYER_FULLSCREEN
 * @param {Boolean} whether or not the player is on fullscreen mode
 */
Events.PLAYER_FULLSCREEN = 'fullscreen';
/**
 * Fired when player starts to play
 *
 * @event PLAYER_PLAY
 */
Events.PLAYER_PLAY = 'play';
/**
 * Fired when player pauses
 *
 * @event PLAYER_PAUSE
 */
Events.PLAYER_PAUSE = 'pause';
/**
 * Fired when player stops
 *
 * @event PLAYER_STOP
 */
Events.PLAYER_STOP = 'stop';
/**
 * Fired when player ends the video
 *
 * @event PLAYER_ENDED
 */
Events.PLAYER_ENDED = 'ended';
/**
 * Fired when player seeks the video
 *
 * @event PLAYER_SEEK
 * @param {Number} time the current time in seconds
 */
Events.PLAYER_SEEK = 'seek';
/**
 * Fired when player receives an error
 *
 * @event PLAYER_ERROR
 * @param {Object} error the error
 */
Events.PLAYER_ERROR = 'playererror';
/**
 * Fired when there is an error
 *
 * @event ERROR
 * @param {Object} error
 * the error with the following format `{code, description, level, raw, origin, scope}`
 * @param {String} [options.code]
 * error's code: code to identify error in the following format: origin:code
 * @param {String} [options.description]
 * error's description: description of the error
 * @param {String} [options.level]
 * error's level: FATAL or WARN.
 * @param {String} [options.origin]
 * error's origin. Example: hls, html5, etc
 * @param {String} [options.scope]
 * error's scope. Example: playback, container, etc
 * @param {String} [options.raw]
 * raw error: the initial error received
 */
Events.ERROR = 'error';
/**
 * Fired when the time is updated on player
 *
 * @event PLAYER_TIMEUPDATE
 * @param {Object} progress Data
 * progress object
 * @param {Number} [progress.current]
 * current time (in seconds)
 * @param {Number} [progress.total]
 * total time (in seconds)
 */
Events.PLAYER_TIMEUPDATE = 'timeupdate';
/**
 * Fired when player updates its volume
 *
 * @event PLAYER_VOLUMEUPDATE
 * @param {Number} volume the current volume
 */
Events.PLAYER_VOLUMEUPDATE = 'volumeupdate';

/**
 * Fired when subtitle is available
 *
 * @event PLAYER_SUBTITLE_AVAILABLE
 */
Events.PLAYER_SUBTITLE_AVAILABLE = 'subtitleavailable';

// Playback Events
/**
 * Fired when the playback is downloading the media
 *
 * @event PLAYBACK_PROGRESS
 * @param progress {Object}
 * Data progress object
 * @param [progress.start] {Number}
 * start position of buffered content at current position
 * @param [progress.current] {Number}
 * end position of buffered content at current position
 * @param [progress.total] {Number}
 * total content to be downloaded
 * @param buffered {Array}
 * array of buffered segments ({start, end}). [Only for supported playbacks]
 */
Events.PLAYBACK_PROGRESS = 'playback:progress';
/**
 * Fired when the time is updated on playback
 *
 * @event PLAYBACK_TIMEUPDATE
 * @param {Object} progress Data
 * progress object
 * @param {Number} [progress.current]
 * current time (in seconds)
 * @param {Number} [progress.total]
 * total time (in seconds)
 */
Events.PLAYBACK_TIMEUPDATE = 'playback:timeupdate';
/**
 * Fired when playback is ready
 *
 * @event PLAYBACK_READY
 */
Events.PLAYBACK_READY = 'playback:ready';
/**
 * Fired when the playback starts having to buffer because
 * playback can currently not be smooth.
 *
 * This corresponds to the playback `buffering` property being
 * `true`.
 *
 * @event PLAYBACK_BUFFERING
 */
Events.PLAYBACK_BUFFERING = 'playback:buffering';
/**
 * Fired when the playback has enough in the buffer to be
 * able to play smoothly, after previously being unable to
 * do this.
 *
 * This corresponds to the playback `buffering` property being
 * `false`.
 *
 * @event PLAYBACK_BUFFERFULL
 */
Events.PLAYBACK_BUFFERFULL = 'playback:bufferfull';
/**
 * Fired when playback changes any settings (volume, seek and etc)
 *
 * @event PLAYBACK_SETTINGSUPDATE
 */
Events.PLAYBACK_SETTINGSUPDATE = 'playback:settingsupdate';
/**
 * Fired when playback loaded its metadata
 *
 * @event PLAYBACK_LOADEDMETADATA
 * @param {Object} metadata Data
 * settings object
 * @param {Number} [metadata.duration]
 * the playback duration
 * @param {Object} [metadata.data]
 * extra meta data
 */
Events.PLAYBACK_LOADEDMETADATA = 'playback:loadedmetadata';
/**
 * Fired when playback updates its video quality
 *
 * @event PLAYBACK_HIGHDEFINITIONUPDATE
 * @param {Boolean} isHD
 * true when is on HD, false otherwise
 */
Events.PLAYBACK_HIGHDEFINITIONUPDATE = 'playback:highdefinitionupdate';
/**
 * Fired when playback updates its bitrate
 *
 * @event PLAYBACK_BITRATE
 * @param {Object} bitrate Data
 * bitrate object
 * @param {Number} [bitrate.bandwidth]
 * bitrate bandwidth when it's available
 * @param {Number} [bitrate.width]
 * playback width (ex: 720, 640, 1080)
 * @param {Number} [bitrate.height]
 * playback height (ex: 240, 480, 720)
 * @param {Number} [bitrate.level]
 * playback level when it's available, it could be just a map for width (0 => 240, 1 => 480, 2 => 720)
 */
Events.PLAYBACK_BITRATE = 'playback:bitrate';
/**
 * Fired when the playback has its levels
 *
 * @event PLAYBACK_LEVELS_AVAILABLE
 * @param {Array} levels
 * the ordered levels, each one with the following format `{id: 1, label: '500kbps'}` ps: id should be a number >= 0
 * @param {Number} initial
 * the initial level otherwise -1 (AUTO)
 */
Events.PLAYBACK_LEVELS_AVAILABLE = 'playback:levels:available';
/**
 * Fired first level, which play right now
 *
 * @event PLAYBACK_FIRST_LEVEL
 *
 */
Events.PLAYBACK_FIRST_LEVEL = 'playback:first:level';
/**
 * Fired when the playback starts to switch level
 *
 * @event PLAYBACK_LEVEL_SWITCH_START
 *
 */
Events.PLAYBACK_LEVEL_SWITCH_START = 'playback:levels:switch:start';
/**
 * Fired when the playback ends the level switch
 *
 * @event PLAYBACK_LEVEL_SWITCH_END
 *
 */
Events.PLAYBACK_LEVEL_SWITCH_END = 'playback:levels:switch:end';

/**
 * Fired when playback internal state changes
 *
 * @event PLAYBACK_PLAYBACKSTATE
 * @param {Object} state Data
 * state object
 * @param {String} [state.type]
 * the playback type
 */
Events.PLAYBACK_PLAYBACKSTATE = 'playback:playbackstate';
/**
 * Fired when DVR becomes enabled/disabled.
 *
 * @event PLAYBACK_DVR
 * @param {boolean} state true if dvr enabled
 */
Events.PLAYBACK_DVR = 'playback:dvr';
// TODO doc
Events.PLAYBACK_MEDIACONTROL_DISABLE = 'playback:mediacontrol:disable';
// TODO doc
Events.PLAYBACK_MEDIACONTROL_ENABLE = 'playback:mediacontrol:enable';
/**
 * Fired when the media for a playback ends.
 *
 * @event PLAYBACK_ENDED
 * @param {String} name the name of the playback
 */
Events.PLAYBACK_ENDED = 'playback:ended';
/**
 * Fired when user requests `play()`
 *
 * @event PLAYBACK_PLAY_INTENT
 */
Events.PLAYBACK_PLAY_INTENT = 'playback:play:intent';
/**
 * Fired when user requests `play()`, but firstly we gotta request preroll. it's advisable if user use iframeAPI
 *
 * @event PLAYBACK_PREROLL_REQUEST
 */
Events.PLAYBACK_PREROLL_REQUEST = 'playback:preroll:request';
/**
 * Fired when the media for a playback starts playing.
 * This is not necessarily when the user requests `play()`
 * The media may have to buffer first.
 * I.e. `isPlaying()` might return `true` before this event is fired,
 * because `isPlaying()` represents the intended state.
 *
 * @event PLAYBACK_PLAY
 */
Events.PLAYBACK_PLAY = 'playback:play';
/**
 * Fired when the media for a playback pauses.
 *
 * @event PLAYBACK_PAUSE
 */
Events.PLAYBACK_PAUSE = 'playback:pause';
/**
 * Fired when the media for a playback is seeking.
 *
 * @event PLAYBACK_SEEK
 */
Events.PLAYBACK_SEEK = 'playback:seek';
/**
 * Fired when the media for a playback is seeked.
 *
 * @event PLAYBACK_SEEKED
 */
Events.PLAYBACK_SEEKED = 'playback:seeked';
/**
 * Fired when the media for a playback is stopped.
 *
 * @event PLAYBACK_STOP
 */
Events.PLAYBACK_STOP = 'playback:stop';
/**
 * Fired if an error occurs in the playback.
 *
 * @event PLAYBACK_ERROR
 * @param {Object} error An object containing the error details
 * @param {String} name Playback name
 */
Events.PLAYBACK_ERROR = 'playback:error';
// TODO doc
Events.PLAYBACK_STATS_ADD = 'playback:stats:add';
// TODO doc
Events.PLAYBACK_FRAGMENT_LOADED = 'playback:fragment:loaded';
// TODO doc
Events.PLAYBACK_LEVEL_SWITCH = 'playback:level:switch';
/**
 * Fired when subtitle is available on playback for display
 *
 * @event PLAYBACK_SUBTITLE_AVAILABLE
 */
Events.PLAYBACK_SUBTITLE_AVAILABLE = 'playback:subtitle:available';
/**
 * Fired when playback subtitle track has changed
 *
 * @event CONTAINER_SUBTITLE_CHANGED
 * @param {Object} track Data
 * track object
 * @param {Number} [track.id]
 * selected track id
 */
Events.PLAYBACK_SUBTITLE_CHANGED = 'playback:subtitle:changed';

// Core Events
/**
 * Fired when the containers are created
 *
 * @event CORE_CONTAINERS_CREATED
 */
Events.CORE_CONTAINERS_CREATED = 'core:containers:created';
/**
 * Fired when the active container changed
 *
 * @event CORE_ACTIVE_CONTAINER_CHANGED
 */
Events.CORE_ACTIVE_CONTAINER_CHANGED = 'core:active:container:changed';
/**
 * Fired when the options were changed for the core
 *
 * @event CORE_OPTIONS_CHANGE
 * @param {Object} new options provided to configure() method
 */
Events.CORE_OPTIONS_CHANGE = 'core:options:change';
/**
 * Fired after creating containers, when the core is ready
 *
 * @event CORE_READY
 */
Events.CORE_READY = 'core:ready';
/**
 * Fired when the fullscreen state change
 *
 * @event CORE_FULLSCREEN
 * @param {Boolean} whether or not the player is on fullscreen mode
 */
Events.CORE_FULLSCREEN = 'core:fullscreen';
/**
 * Fired when core updates size
 *
 * @event CORE_RESIZE
 * @param {Object} currentSize an object with the current size
 */
Events.CORE_RESIZE = 'core:resize';
/**
 * Fired when the screen orientation has changed.
 * This event is trigger only for mobile devices.
 *
 * @event CORE_SCREEN_ORIENTATION_CHANGED
 * @param {Object} screen An object with screen orientation
 * screen object
 * @param {Object} [screen.event]
 * window resize event object
 * @param {String} [screen.orientation]
 * screen orientation (ie: 'landscape' or 'portrait')
 */
Events.CORE_SCREEN_ORIENTATION_CHANGED = 'core:screen:orientation:changed';
/**
 * Fired when occurs mouse move event on core element
 *
 * @event CORE_MOUSE_MOVE
 * @param {Object} event a DOM event
 */
Events.CORE_MOUSE_MOVE = 'core:mousemove';
/**
 * Fired when occurs mouse leave event on core element
 *
 * @event CORE_MOUSE_LEAVE
 * @param {Object} event a DOM event
 */
Events.CORE_MOUSE_LEAVE = 'core:mouseleave';

// Container Events
/**
 * Fired when the container internal state changes
 *
 * @event CONTAINER_PLAYBACKSTATE
 * @param {Object} state Data
 * state object
 * @param {String} [state.type]
 * the playback type
 */
Events.CONTAINER_PLAYBACKSTATE = 'container:playbackstate';
Events.CONTAINER_PLAYBACKDVRSTATECHANGED = 'container:dvr';
/**
 * Fired when the container updates its bitrate
 *
 * @event CONTAINER_BITRATE
 * @param {Object} bitrate Data
 * bitrate object
 * @param {Number} [bitrate.bandwidth]
 * bitrate bandwidth when it's available
 * @param {Number} [bitrate.width]
 * playback width (ex: 720, 640, 1080)
 * @param {Number} [bitrate.height]
 * playback height (ex: 240, 480, 720)
 * @param {Number} [bitrate.level]
 * playback level when it's available, it could be just a map for width (0 => 240, 1 => 480, 2 => 720)
 */
Events.CONTAINER_BITRATE = 'container:bitrate';
Events.CONTAINER_STATS_REPORT = 'container:stats:report';
Events.CONTAINER_DESTROYED = 'container:destroyed';
/**
 * Fired when the container is ready
 *
 * @event CONTAINER_READY
 */
Events.CONTAINER_READY = 'container:ready';
Events.CONTAINER_ERROR = 'container:error';
/**
 * Fired when the container loaded its metadata
 *
 * @event CONTAINER_LOADEDMETADATA
 * @param {Object} metadata Data
 * settings object
 * @param {Number} [metadata.duration]
 * the playback duration
 * @param {Object} [metadata.data]
 * extra meta data
 */
Events.CONTAINER_LOADEDMETADATA = 'container:loadedmetadata';

/**
 * Fired when subtitle is available on container for display
 *
 * @event CONTAINER_SUBTITLE_AVAILABLE
 */
Events.CONTAINER_SUBTITLE_AVAILABLE = 'container:subtitle:available';
/**
 * Fired when subtitle track has changed
 *
 * @event CONTAINER_SUBTITLE_CHANGED
 * @param {Object} track Data
 * track object
 * @param {Number} [track.id]
 * selected track id
 */
Events.CONTAINER_SUBTITLE_CHANGED = 'container:subtitle:changed';

/**
 * Fired when the time is updated on container
 *
 * @event CONTAINER_TIMEUPDATE
 * @param {Object} progress Data
 * progress object
 * @param {Number} [progress.current]
 * current time (in seconds)
 * @param {Number} [progress.total]
 * total time (in seconds)
 */
Events.CONTAINER_TIMEUPDATE = 'container:timeupdate';
/**
 * Fired when the container is downloading the media
 *
 * @event CONTAINER_PROGRESS
 * @param {Object} progress Data
 * progress object
 * @param {Number} [progress.start]
 * initial downloaded content
 * @param {Number} [progress.current]
 * current dowloaded content
 * @param {Number} [progress.total]
 * total content to be downloaded
 */
Events.CONTAINER_PROGRESS = 'container:progress';
Events.CONTAINER_PLAY = 'container:play';
Events.CONTAINER_STOP = 'container:stop';
Events.CONTAINER_PAUSE = 'container:pause';
Events.CONTAINER_ENDED = 'container:ended';
Events.CONTAINER_CLICK = 'container:click';
Events.CONTAINER_DBLCLICK = 'container:dblclick';
Events.CONTAINER_CONTEXTMENU = 'container:contextmenu';
Events.CONTAINER_MOUSE_ENTER = 'container:mouseenter';
Events.CONTAINER_MOUSE_LEAVE = 'container:mouseleave';
/**
 * Fired when the container seeks the video
 *
 * @event CONTAINER_SEEK
 * @param {Number} time the current time in seconds
 */
Events.CONTAINER_SEEK = 'container:seek';
/**
 * Fired when the container was finished the seek video
 *
 * @event CONTAINER_SEEKED
 * @param {Number} time the current time in seconds
 */
Events.CONTAINER_SEEKED = 'container:seeked';
Events.CONTAINER_VOLUME = 'container:volume';
Events.CONTAINER_FULLSCREEN = 'container:fullscreen';
/**
 * Fired when container is buffering
 *
 * @event CONTAINER_STATE_BUFFERING
 */
Events.CONTAINER_STATE_BUFFERING = 'container:state:buffering';
/**
 * Fired when the container filled the buffer
 *
 * @event CONTAINER_STATE_BUFFERFULL
 */
Events.CONTAINER_STATE_BUFFERFULL = 'container:state:bufferfull';
/**
 * Fired when the container changes any settings (volume, seek and etc)
 *
 * @event CONTAINER_SETTINGSUPDATE
 */
Events.CONTAINER_SETTINGSUPDATE = 'container:settingsupdate';
/**
 * Fired when container updates its video quality
 *
 * @event CONTAINER_HIGHDEFINITIONUPDATE
 * @param {Boolean} isHD
 * true when is on HD, false otherwise
 */
Events.CONTAINER_HIGHDEFINITIONUPDATE = 'container:highdefinitionupdate';

/**
 * Fired when the media control shows
 *
 * @event CONTAINER_MEDIACONTROL_SHOW
 */
Events.CONTAINER_MEDIACONTROL_SHOW = 'container:mediacontrol:show';
/**
 * Fired when the media control hides
 *
 * @event CONTAINER_MEDIACONTROL_HIDE
 */
Events.CONTAINER_MEDIACONTROL_HIDE = 'container:mediacontrol:hide';

Events.CONTAINER_MEDIACONTROL_DISABLE = 'container:mediacontrol:disable';
Events.CONTAINER_MEDIACONTROL_ENABLE = 'container:mediacontrol:enable';
Events.CONTAINER_STATS_ADD = 'container:stats:add';
/**
 * Fired when the options were changed for the container
 *
 * @event CONTAINER_OPTIONS_CHANGE
 */
Events.CONTAINER_OPTIONS_CHANGE = 'container:options:change';

// MediaControl Events
Events.MEDIACONTROL_RENDERED = 'mediacontrol:rendered';
/**
 * Fired when the player enters/exit on fullscreen
 *
 * @event MEDIACONTROL_FULLSCREEN
 */
Events.MEDIACONTROL_FULLSCREEN = 'mediacontrol:fullscreen';
/**
 * Fired when the media control shows
 *
 * @event MEDIACONTROL_SHOW
 */
Events.MEDIACONTROL_SHOW = 'mediacontrol:show';
/**
 * Fired when the media control hides
 *
 * @event MEDIACONTROL_HIDE
 */
Events.MEDIACONTROL_HIDE = 'mediacontrol:hide';
/**
 * Fired when mouse enters on the seekbar
 *
 * @event MEDIACONTROL_MOUSEMOVE_SEEKBAR
 * @param {Object} event
 * the javascript event
 */
Events.MEDIACONTROL_MOUSEMOVE_SEEKBAR = 'mediacontrol:mousemove:seekbar';
/**
 * Fired when mouse leaves the seekbar
 *
 * @event MEDIACONTROL_MOUSELEAVE_SEEKBAR
 * @param {Object} event
 * the javascript event
 */
Events.MEDIACONTROL_MOUSELEAVE_SEEKBAR = 'mediacontrol:mouseleave:seekbar';
/**
 * Fired when the media is being played
 *
 * @event MEDIACONTROL_PLAYING
 */
Events.MEDIACONTROL_PLAYING = 'mediacontrol:playing';
/**
 * Fired when the media is not being played
 *
 * @event MEDIACONTROL_NOTPLAYING
 */
Events.MEDIACONTROL_NOTPLAYING = 'mediacontrol:notplaying';
/**
 * Fired when the container was changed
 *
 * @event MEDIACONTROL_CONTAINERCHANGED
 */
Events.MEDIACONTROL_CONTAINERCHANGED = 'mediacontrol:containerchanged';
/**
 * Fired when the options were changed for the mediacontrol
 *
 * @event MEDIACONTROL_OPTIONS_CHANGE
 */
Events.MEDIACONTROL_OPTIONS_CHANGE = 'mediacontrol:options:change';
module.exports = exports['default'];

/***/ }),

/***/ "./src/base/media.js":
/*!***************************!*\
  !*** ./src/base/media.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/mathiasbynens/small
var mp4 = exports.mp4 = 'data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAC721kYXQhEAUgpBv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcCEQBSCkG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAsJtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAALwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAB7HRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAIAAAAAAAAALwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAC8AAAAAAAEAAAAAAWRtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAKxEAAAIAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAEPbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAADTc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAKxEAAAAAAAzZXNkcwAAAAADgICAIgACAASAgIAUQBUAAAAAAfQAAAHz+QWAgIACEhAGgICAAQIAAAAYc3R0cwAAAAAAAAABAAAAAgAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAIAAAABAAAAHHN0c3oAAAAAAAAAAAAAAAIAAAFzAAABdAAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ni40MC4xMDE=';

exports.default = {
  mp4: mp4
};

/***/ }),

/***/ "./src/base/playback.js":
/*!******************************!*\
  !*** ./src/base/playback.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ./utils */ "./src/base/utils.js");

var _ui_object = __webpack_require__(/*! ./ui_object */ "./src/base/ui_object.js");

var _ui_object2 = _interopRequireDefault(_ui_object);

var _error_mixin = __webpack_require__(/*! ./error_mixin */ "./src/base/error_mixin.js");

var _error_mixin2 = _interopRequireDefault(_error_mixin);

var _clapprZepto = __webpack_require__(/*! clappr-zepto */ "./node_modules/clappr-zepto/zepto.js");

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An abstraction to represent a generic playback, it's like an interface to be implemented by subclasses.
 * @class Playback
 * @constructor
 * @extends UIObject
 * @module base
 */
var Playback = function (_UIObject) {
  (0, _inherits3.default)(Playback, _UIObject);
  (0, _createClass3.default)(Playback, [{
    key: 'isAudioOnly',

    /**
    * Determine if the playback does not contain video/has video but video should be ignored.
    * @property isAudioOnly
    * @type Boolean
    */
    get: function get() {
      return false;
    }
  }, {
    key: 'isAdaptive',
    get: function get() {
      return false;
    }

    /**
     * Determine if the playback has ended.
     * @property ended
     * @type Boolean
     */

  }, {
    key: 'ended',
    get: function get() {
      return false;
    }

    /**
     * The internationalization plugin.
     * @property i18n
     * @type {Strings}
     */

  }, {
    key: 'i18n',
    get: function get() {
      return this._i18n;
    }

    /**
     * Determine if the playback is having to buffer in order for
     * playback to be smooth.
     * (i.e if a live stream is playing smoothly, this will be false)
     * @property buffering
     * @type Boolean
     */

  }, {
    key: 'buffering',
    get: function get() {
      return false;
    }

    /**
     * Determine if the playback has user consent.
     * @property consented
     * @type Boolean
     */

  }, {
    key: 'consented',
    get: function get() {
      return this._consented;
    }

    /**
     * @method constructor
     * @param {Object} options the options object
     * @param {Strings} i18n the internationalization component
     */

  }]);

  function Playback(options, i18n, playerError) {
    (0, _classCallCheck3.default)(this, Playback);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UIObject.call(this, options));

    _this.settings = {};
    _this._i18n = i18n;
    _this.playerError = playerError;
    _this._consented = false;
    return _this;
  }

  /**
   * Gives user consent to playback (mobile devices).
   * @method consent
   */


  Playback.prototype.consent = function consent() {
    this._consented = true;
  };

  /**
   * plays the playback.
   * @method play
   */


  Playback.prototype.play = function play() {};

  /**
   * pauses the playback.
   * @method pause
   */


  Playback.prototype.pause = function pause() {};

  /**
   * stops the playback.
   * @method stop
   */


  Playback.prototype.stop = function stop() {};

  /**
   * seeks the playback to a given `time` in seconds
   * @method seek
   * @param {Number} time should be a number between 0 and the video duration
   */


  Playback.prototype.seek = function seek(time) {}; // eslint-disable-line no-unused-vars

  /**
   * seeks the playback to a given `percentage` in percentage
   * @method seekPercentage
   * @param {Number} time should be a number between 0 and 100
   */


  Playback.prototype.seekPercentage = function seekPercentage(percentage) {}; // eslint-disable-line no-unused-vars

  /**
   * The time that "0" now represents relative to when playback started.
   * For a stream with a sliding window this will increase as content is
   * removed from the beginning.
   * @method getStartTimeOffset
   * @return {Number} time (in seconds) that time "0" represents.
   */


  Playback.prototype.getStartTimeOffset = function getStartTimeOffset() {
    return 0;
  };

  /**
   * gets the duration in seconds
   * @method getDuration
   * @return {Number} duration (in seconds) of the current source
   */


  Playback.prototype.getDuration = function getDuration() {
    return 0;
  };

  /**
   * checks if the playback is playing.
   * @method isPlaying
   * @return {Boolean} `true` if the current playback is playing, otherwise `false`
   */


  Playback.prototype.isPlaying = function isPlaying() {
    return false;
  };

  /**
   * checks if the playback is ready.
   * @property isReady
   * @type {Boolean} `true` if the current playback is ready, otherwise `false`
   */


  // eslint-disable-line no-unused-vars

  /**
   * gets the playback type (`'vod', 'live', 'aod'`)
   * @method getPlaybackType
   * @return {String} you should write the playback type otherwise it'll assume `'no_op'`
   * @example
   * ```javascript
   * html5VideoPlayback.getPlaybackType() //vod
   * html5AudioPlayback.getPlaybackType() //aod
   * html5VideoPlayback.getPlaybackType() //live
   * flashHlsPlayback.getPlaybackType() //live
   * ```
   */
  Playback.prototype.getPlaybackType = function getPlaybackType() {
    return Playback.NO_OP;
  };

  /**
   * checks if the playback is in HD.
   * @method isHighDefinitionInUse
   * @return {Boolean} `true` if the playback is playing in HD, otherwise `false`
   */


  Playback.prototype.isHighDefinitionInUse = function isHighDefinitionInUse() {
    return false;
  };

  /**
   * sets the volume for the playback
   * @method volume
   * @param {Number} value a number between 0 (`muted`) to 100 (`max`)
   */


  Playback.prototype.volume = function volume(value) {}; // eslint-disable-line no-unused-vars

  /**
   * enables to configure the playback after its creation
   * @method configure
   * @param {Object} options all the options to change in form of a javascript object
   */


  Playback.prototype.configure = function configure(options) {
    this._options = _clapprZepto2.default.extend(this._options, options);
  };

  /**
   * attempt to autoplays the playback.
   * @method attemptAutoPlay
   */


  Playback.prototype.attemptAutoPlay = function attemptAutoPlay() {
    var _this2 = this;

    this.canAutoPlay(function (result, error) {
      // eslint-disable-line no-unused-vars
      result && _this2.play();
    });
  };

  /**
   * checks if the playback can autoplay.
   * @method canAutoPlay
   * @param {Function} callback function where first param is Boolean and second param is playback Error or null
   */


  Playback.prototype.canAutoPlay = function canAutoPlay(cb) {
    cb(true, null); // Assume playback can autoplay by default
  };

  (0, _createClass3.default)(Playback, [{
    key: 'isReady',
    get: function get() {
      return false;
    }

    /**
     * checks if the playback has closed caption tracks.
     * @property hasClosedCaptionsTracks
     * @type {Boolean}
     */

  }, {
    key: 'hasClosedCaptionsTracks',
    get: function get() {
      return this.closedCaptionsTracks.length > 0;
    }

    /**
     * gets the playback available closed caption tracks.
     * @property closedCaptionsTracks
     * @type {Array} an array of objects with at least 'id' and 'name' properties
     */

  }, {
    key: 'closedCaptionsTracks',
    get: function get() {
      return [];
    }

    /**
     * gets the selected closed caption track index. (-1 is disabled)
     * @property closedCaptionsTrackId
     * @type {Number}
     */

  }, {
    key: 'closedCaptionsTrackId',
    get: function get() {
      return -1;
    }

    /**
     * sets the selected closed caption track index. (-1 is disabled)
     * @property closedCaptionsTrackId
     * @type {Number}
     */
    ,
    set: function set(trackId) {}
  }]);
  return Playback;
}(_ui_object2.default);

exports.default = Playback;


(0, _assign2.default)(Playback.prototype, _error_mixin2.default);

Playback.extend = function (properties) {
  return (0, _utils.extend)(Playback, properties);
};

/**
 * checks if the playback can play a given `source`
 * If a mimeType is provided then this will be used instead of inferring the mimetype
 * from the source extension.
 * @method canPlay
 * @static
 * @param {String} source the given source ex: `http://example.com/play.mp4`
 * @param {String} [mimeType] the given mime type, ex: `'application/vnd.apple.mpegurl'`
 * @return {Boolean} `true` if the playback is playable, otherwise `false`
 */
Playback.canPlay = function (source, mimeType) {
  // eslint-disable-line no-unused-vars
  return false;
};

/**
 * a playback type for video on demand
 *
 * @property VOD
 * @static
 * @type String
 */
Playback.VOD = 'vod';
/**
 * a playback type for audio on demand
 *
 * @property AOD
 * @static
 * @type String
 */
Playback.AOD = 'aod';
/**
 * a playback type for live video
 *
 * @property LIVE
 * @static
 * @type String
 */
Playback.LIVE = 'live';
/**
 * a default playback type
 *
 * @property NO_OP
 * @static
 * @type String
 */
Playback.NO_OP = 'no_op';
/**
 * the plugin type
 *
 * @property type
 * @static
 * @type String
 */
Playback.type = 'playback';
module.exports = exports['default'];

/***/ }),

/***/ "./src/base/polyfills.js":
/*!*******************************!*\
  !*** ./src/base/polyfills.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

/**
 * Array.prototype.find
 *
 * Original source : https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * See also : https://tc39.github.io/ecma262/#sec-array.prototype.find
 */
if (!Array.prototype.find) {
  // eslint-disable-next-line
  Object.defineProperty(Array.prototype, 'find', {
    // Note: ES6 arrow function syntax is not used on purpose to avoid this to be undefined
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) throw new TypeError('"this" is null or not defined');

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) return kValue;

        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}

/***/ }),

/***/ "./src/base/styler.js":
/*!****************************!*\
  !*** ./src/base/styler.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clapprZepto = __webpack_require__(/*! clappr-zepto */ "./node_modules/clappr-zepto/zepto.js");

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

var _template = __webpack_require__(/*! ./template */ "./src/base/template.js");

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var Styler = {
  getStyleFor: function getStyleFor(style) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { baseUrl: '' };

    return (0, _clapprZepto2.default)('<style class="clappr-style"></style>').html((0, _template2.default)(style.toString())(options));
  }
};

exports.default = Styler;
module.exports = exports['default'];

/***/ }),

/***/ "./src/base/svg_icons.js":
/*!*******************************!*\
  !*** ./src/base/svg_icons.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.volumeMute = exports.volume = exports.stop = exports.reload = exports.play = exports.pause = exports.hd = exports.fullscreen = exports.exitFullscreen = exports.cc = undefined;

var _play = __webpack_require__(/*! ../icons/01-play.svg */ "./src/icons/01-play.svg");

var _play2 = _interopRequireDefault(_play);

var _pause = __webpack_require__(/*! ../icons/02-pause.svg */ "./src/icons/02-pause.svg");

var _pause2 = _interopRequireDefault(_pause);

var _stop = __webpack_require__(/*! ../icons/03-stop.svg */ "./src/icons/03-stop.svg");

var _stop2 = _interopRequireDefault(_stop);

var _volume = __webpack_require__(/*! ../icons/04-volume.svg */ "./src/icons/04-volume.svg");

var _volume2 = _interopRequireDefault(_volume);

var _mute = __webpack_require__(/*! ../icons/05-mute.svg */ "./src/icons/05-mute.svg");

var _mute2 = _interopRequireDefault(_mute);

var _expand = __webpack_require__(/*! ../icons/06-expand.svg */ "./src/icons/06-expand.svg");

var _expand2 = _interopRequireDefault(_expand);

var _shrink = __webpack_require__(/*! ../icons/07-shrink.svg */ "./src/icons/07-shrink.svg");

var _shrink2 = _interopRequireDefault(_shrink);

var _hd = __webpack_require__(/*! ../icons/08-hd.svg */ "./src/icons/08-hd.svg");

var _hd2 = _interopRequireDefault(_hd);

var _cc = __webpack_require__(/*! ../icons/09-cc.svg */ "./src/icons/09-cc.svg");

var _cc2 = _interopRequireDefault(_cc);

var _reload = __webpack_require__(/*! ../icons/10-reload.svg */ "./src/icons/10-reload.svg");

var _reload2 = _interopRequireDefault(_reload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var cc = exports.cc = _cc2.default;
var exitFullscreen = exports.exitFullscreen = _shrink2.default;
var fullscreen = exports.fullscreen = _expand2.default;
var hd = exports.hd = _hd2.default;
var pause = exports.pause = _pause2.default;
var play = exports.play = _play2.default;
var reload = exports.reload = _reload2.default;
var stop = exports.stop = _stop2.default;
var volume = exports.volume = _volume2.default;
var volumeMute = exports.volumeMute = _mute2.default;

exports.default = {
  cc: _cc2.default,
  exitFullscreen: _shrink2.default,
  fullscreen: _expand2.default,
  hd: _hd2.default,
  pause: _pause2.default,
  play: _play2.default,
  reload: _reload2.default,
  stop: _stop2.default,
  volume: _volume2.default,
  volumeMute: _mute2.default
};

/***/ }),

/***/ "./src/base/template.js":
/*!******************************!*\
  !*** ./src/base/template.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-var */
// Simple JavaScript Templating
// Paul Miller (http://paulmillr.com)
// http://underscorejs.org
// (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors

// By default, Underscore uses ERB-style template delimiters, change the
// following template settings to use alternative delimiters.
var settings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
};var noMatch = /(.)^/;

// Certain characters need to be escaped so that they can be put into a
// string literal.
var escapes = {
  '\'': '\'',
  '\\': '\\',
  '\r': 'r',
  '\n': 'n',
  '\t': 't',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};

var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

// List of HTML entities for escaping.
var htmlEntities = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#x27;'
};

var entityRe = new RegExp('[&<>"\']', 'g');

var escapeExpr = function escapeExpr(string) {
  if (string === null) return '';
  return ('' + string).replace(entityRe, function (match) {
    return htmlEntities[match];
  });
};

var counter = 0;

// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
var tmpl = function tmpl(text, data) {
  var render;

  // Combine delimiters into one regular expression via alternation.
  var matcher = new RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');

  // Compile the template source, escaping string literals appropriately.
  var index = 0;
  var source = '__p+=\'';
  text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escaper, function (match) {
      return '\\' + escapes[match];
    });

    if (escape) source += '\'+\n((__t=(' + escape + '))==null?\'\':escapeExpr(__t))+\n\'';

    if (interpolate) source += '\'+\n((__t=(' + interpolate + '))==null?\'\':__t)+\n\'';

    if (evaluate) source += '\';\n' + evaluate + '\n__p+=\'';

    index = offset + match.length;
    return match;
  });
  source += '\';\n';

  // If a variable is not specified, place data values in local scope.
  if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

  source = 'var __t,__p=\'\',__j=Array.prototype.join,' + 'print=function(){__p+=__j.call(arguments,\'\');};\n' + source + 'return __p;\n//# sourceURL=/microtemplates/source[' + counter++ + ']';

  try {
    /*jshint -W054 */
    // TODO: find a way to avoid eval
    render = new Function(settings.variable || 'obj', 'escapeExpr', source);
  } catch (e) {
    e.source = source;
    throw e;
  }

  if (data) return render(data, escapeExpr);
  var template = function template(data) {
    return render.call(this, data, escapeExpr);
  };

  // Provide the compiled function source as a convenience for precompilation.
  template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

  return template;
};
tmpl.settings = settings;

exports.default = tmpl;
module.exports = exports['default'];

/***/ }),

/***/ "./src/base/ui_container_plugin.js":
/*!*****************************************!*\
  !*** ./src/base/ui_container_plugin.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ./utils */ "./src/base/utils.js");

var _ui_object = __webpack_require__(/*! ./ui_object */ "./src/base/ui_object.js");

var _ui_object2 = _interopRequireDefault(_ui_object);

var _error_mixin = __webpack_require__(/*! ./error_mixin */ "./src/base/error_mixin.js");

var _error_mixin2 = _interopRequireDefault(_error_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base class for an ui container plugin
 * @class UIContainerPlugin
 * @constructor
 * @extends UIObject
 * @module base
 */
var UIContainerPlugin = function (_UIObject) {
  (0, _inherits3.default)(UIContainerPlugin, _UIObject);
  (0, _createClass3.default)(UIContainerPlugin, [{
    key: 'playerError',
    get: function get() {
      return this.container.playerError;
    }
  }]);

  function UIContainerPlugin(container) {
    (0, _classCallCheck3.default)(this, UIContainerPlugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UIObject.call(this, container.options));

    _this.container = container;
    _this.enabled = true;
    _this.bindEvents();
    return _this;
  }

  UIContainerPlugin.prototype.enable = function enable() {
    if (!this.enabled) {
      this.bindEvents();
      this.$el.show();
      this.enabled = true;
    }
  };

  UIContainerPlugin.prototype.disable = function disable() {
    this.stopListening();
    this.$el.hide();
    this.enabled = false;
  };

  UIContainerPlugin.prototype.bindEvents = function bindEvents() {};

  return UIContainerPlugin;
}(_ui_object2.default); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = UIContainerPlugin;


(0, _assign2.default)(UIContainerPlugin.prototype, _error_mixin2.default);

UIContainerPlugin.extend = function (properties) {
  return (0, _utils.extend)(UIContainerPlugin, properties);
};

UIContainerPlugin.type = 'container';
module.exports = exports['default'];

/***/ }),

/***/ "./src/base/ui_core_plugin.js":
/*!************************************!*\
  !*** ./src/base/ui_core_plugin.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ./utils */ "./src/base/utils.js");

var _ui_object = __webpack_require__(/*! ./ui_object */ "./src/base/ui_object.js");

var _ui_object2 = _interopRequireDefault(_ui_object);

var _error_mixin = __webpack_require__(/*! ./error_mixin */ "./src/base/error_mixin.js");

var _error_mixin2 = _interopRequireDefault(_error_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UICorePlugin = function (_UIObject) {
  (0, _inherits3.default)(UICorePlugin, _UIObject);
  (0, _createClass3.default)(UICorePlugin, [{
    key: 'playerError',
    get: function get() {
      return this.core.playerError;
    }
  }]);

  function UICorePlugin(core) {
    (0, _classCallCheck3.default)(this, UICorePlugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UIObject.call(this, core.options));

    _this.core = core;
    _this.enabled = true;
    _this.bindEvents();
    _this.render();
    return _this;
  }

  UICorePlugin.prototype.bindEvents = function bindEvents() {};

  UICorePlugin.prototype.getExternalInterface = function getExternalInterface() {
    return {};
  };

  UICorePlugin.prototype.enable = function enable() {
    if (!this.enabled) {
      this.bindEvents();
      this.$el.show();
      this.enabled = true;
    }
  };

  UICorePlugin.prototype.disable = function disable() {
    this.stopListening();
    this.$el.hide();
    this.enabled = false;
  };

  UICorePlugin.prototype.render = function render() {
    return this;
  };

  return UICorePlugin;
}(_ui_object2.default);

exports.default = UICorePlugin;


(0, _assign2.default)(UICorePlugin.prototype, _error_mixin2.default);

UICorePlugin.extend = function (properties) {
  return (0, _utils.extend)(UICorePlugin, properties);
};

UICorePlugin.type = 'core';
module.exports = exports['default'];

/***/ }),

/***/ "./src/base/ui_object.js":
/*!*******************************!*\
  !*** ./src/base/ui_object.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _clapprZepto = __webpack_require__(/*! clappr-zepto */ "./node_modules/clappr-zepto/zepto.js");

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

var _utils = __webpack_require__(/*! ./utils */ "./src/base/utils.js");

var _base_object = __webpack_require__(/*! ./base_object */ "./src/base/base_object.js");

var _base_object2 = _interopRequireDefault(_base_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var delegateEventSplitter = /^(\S+)\s*(.*)$/;

/**
 * A base class to create ui object.
 * @class UIObject
 * @constructor
 * @extends BaseObject
 * @module base
 */
// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var UIObject = function (_BaseObject) {
  (0, _inherits3.default)(UIObject, _BaseObject);
  (0, _createClass3.default)(UIObject, [{
    key: 'tagName',

    /**
     * a unique id prefixed with `'c'`, `c1, c232`
     *
     * @property cid
     * @type String
     */
    /**
     * the dom element itself
     *
     * @property el
     * @type HTMLElement
     */
    /**
     * the dom element wrapped by `$`
     *
     * @property $el
     * @type HTMLElement
     */

    /**
     * gets the tag name for the ui component
     * @method tagName
     * @default div
     * @return {String} tag's name
     */
    get: function get() {
      return 'div';
    }
    /**
     * a literal object mapping element's events to methods
     * @property events
     * @type Object
     * @example
     *
     *```javascript
     *
     * class MyButton extends UIObject {
     *   constructor(options) {
     *     super(options)
     *     this.myId = 0
     *   }
     *   get events() { return { 'click': 'myClick' } }
     *   myClick(){ this.myId = 42 }
     * }
     *
     * // when you click on MyButton the method `myClick` will be called
     *```
     */

  }, {
    key: 'events',
    get: function get() {
      return {};
    }
    /**
     * a literal object mapping attributes and values to the element
     * element's attribute name and the value the attribute value
     * @property attributes
     * @type Object
     * @example
     *
     *```javascript
     *
     * class MyButton extends UIObject {
     *    constructor(options) { super(options) }
     *    get attributes() { return { class: 'my-button'} }
     * }
     *
     * // MyButton.el.className will be 'my-button'
     * ```
     */

  }, {
    key: 'attributes',
    get: function get() {
      return {};
    }

    /**
     * it builds an ui component by:
     *  * creating an id for the component `cid`
     *  * making sure the element is created `$el`
     *  * delegating all `events` to the element
     * @method constructor
     * @param {Object} options the options object
     */

  }]);

  function UIObject(options) {
    (0, _classCallCheck3.default)(this, UIObject);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this, options));

    _this.cid = (0, _utils.uniqueId)('c');
    _this._ensureElement();
    _this.delegateEvents();
    return _this;
  }

  /**
   * selects within the component.
   * @method $
   * @param {String} selector a selector to find within the component.
   * @return {HTMLElement} an element, if it exists.
   * @example
   * ```javascript
   * fullScreenBarUIComponent.$('.button-full') //will return only `.button-full` within the component
   * ```
   */


  UIObject.prototype.$ = function $(selector) {
    return this.$el.find(selector);
  };

  /**
   * render the component, usually attach it to a real existent `element`
   * @method render
   * @return {UIObject} itself
   */


  UIObject.prototype.render = function render() {
    return this;
  };

  /**
   * removes the ui component from DOM
   * @method destroy
   * @return {UIObject} itself
   */


  UIObject.prototype.destroy = function destroy() {
    this.$el.remove();
    this.stopListening();
    this.undelegateEvents();
    return this;
  };

  /**
   * set element to `el` and `$el`
   * @method setElement
   * @param {HTMLElement} element
   * @param {Boolean} delegate whether is delegate or not
   * @return {UIObject} itself
   */


  UIObject.prototype.setElement = function setElement(element, delegate) {
    if (this.$el) this.undelegateEvents();
    this.$el = _clapprZepto2.default.zepto.isZ(element) ? element : (0, _clapprZepto2.default)(element);
    this.el = this.$el[0];
    if (delegate !== false) this.delegateEvents();
    return this;
  };

  /**
   * delegates all the original `events` on `element` to its callbacks
   * @method delegateEvents
   * @param {Object} events
   * @return {UIObject} itself
   */


  UIObject.prototype.delegateEvents = function delegateEvents(events) {
    if (!(events || (events = this.events))) return this;
    this.undelegateEvents();
    for (var key in events) {
      var method = events[key];
      if (method && method.constructor !== Function) method = this[events[key]];
      if (!method) continue;

      var match = key.match(delegateEventSplitter);
      var eventName = match[1],
          selector = match[2];
      eventName += '.delegateEvents' + this.cid;
      if (selector === '') this.$el.on(eventName, method.bind(this));else this.$el.on(eventName, selector, method.bind(this));
    }
    return this;
  };

  /**
   * undelegats all the `events`
   * @method undelegateEvents
   * @return {UIObject} itself
   */


  UIObject.prototype.undelegateEvents = function undelegateEvents() {
    this.$el.off('.delegateEvents' + this.cid);
    return this;
  };

  /**
   * ensures the creation of this ui component
   * @method _ensureElement
   * @private
   */


  UIObject.prototype._ensureElement = function _ensureElement() {
    if (!this.el) {
      var attrs = _clapprZepto2.default.extend({}, this.attributes);
      if (this.id) attrs.id = this.id;
      if (this.className) attrs['class'] = this.className;
      var $el = _utils.DomRecycler.create(this.tagName).attr(attrs);
      this.setElement($el, false);
    } else {
      this.setElement(this.el, false);
    }
  };

  return UIObject;
}(_base_object2.default);

exports.default = UIObject;
module.exports = exports['default'];

/***/ }),

/***/ "./src/base/utils.js":
/*!***************************!*\
  !*** ./src/base/utils.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgIcons = exports.DoubleEventHandler = exports.DomRecycler = exports.cancelAnimationFrame = exports.requestAnimationFrame = exports.QueryString = exports.Config = exports.Fullscreen = undefined;

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ "./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

exports.assign = assign;
exports.extend = extend;
exports.formatTime = formatTime;
exports.seekStringToSeconds = seekStringToSeconds;
exports.uniqueId = uniqueId;
exports.isNumber = isNumber;
exports.currentScriptUrl = currentScriptUrl;
exports.getBrowserLanguage = getBrowserLanguage;
exports.now = now;
exports.removeArrayItem = removeArrayItem;
exports.listContainsIgnoreCase = listContainsIgnoreCase;
exports.canAutoPlayMedia = canAutoPlayMedia;

__webpack_require__(/*! ./polyfills */ "./src/base/polyfills.js");

var _browser = __webpack_require__(/*! ../components/browser */ "./src/components/browser/index.js");

var _browser2 = _interopRequireDefault(_browser);

var _clapprZepto = __webpack_require__(/*! clappr-zepto */ "./node_modules/clappr-zepto/zepto.js");

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

var _media = __webpack_require__(/*! ./media */ "./src/base/media.js");

var _media2 = _interopRequireDefault(_media);

var _svg_icons = __webpack_require__(/*! ./svg_icons */ "./src/base/svg_icons.js");

var _svg_icons2 = _interopRequireDefault(_svg_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assign(obj, source) {
  if (source) {
    for (var prop in source) {
      var propDescriptor = (0, _getOwnPropertyDescriptor2.default)(source, prop);
      propDescriptor ? (0, _defineProperty2.default)(obj, prop, propDescriptor) : obj[prop] = source[prop];
    }
  }
  return obj;
} // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.
/*jshint -W079 */

function extend(parent, properties) {
  var Surrogate = function (_parent) {
    (0, _inherits3.default)(Surrogate, _parent);

    function Surrogate() {
      (0, _classCallCheck3.default)(this, Surrogate);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = (0, _possibleConstructorReturn3.default)(this, _parent.call.apply(_parent, [this].concat(args)));

      if (properties.initialize) properties.initialize.apply(_this, args);

      return _this;
    }

    return Surrogate;
  }(parent);

  assign(Surrogate.prototype, properties);
  return Surrogate;
}

function formatTime(time, paddedHours) {
  if (!isFinite(time)) return '--:--';

  time = time * 1000;
  time = parseInt(time / 1000);
  var seconds = time % 60;
  time = parseInt(time / 60);
  var minutes = time % 60;
  time = parseInt(time / 60);
  var hours = time % 24;
  var days = parseInt(time / 24);
  var out = '';
  if (days && days > 0) {
    out += days + ':';
    if (hours < 1) out += '00:';
  }
  if (hours && hours > 0 || paddedHours) out += ('0' + hours).slice(-2) + ':';
  out += ('0' + minutes).slice(-2) + ':';
  out += ('0' + seconds).slice(-2);
  return out.trim();
}

var Fullscreen = exports.Fullscreen = {
  fullscreenElement: function fullscreenElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
  },
  requestFullscreen: function requestFullscreen(el) {
    if (el.requestFullscreen) el.requestFullscreen();else if (el.webkitEnterFullScreen) el.webkitEnterFullScreen();else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();else if (el.mozRequestFullScreen) el.mozRequestFullScreen();else if (el.msRequestFullscreen) el.msRequestFullscreen();else if (el.querySelector && el.querySelector('video') && el.querySelector('video').webkitEnterFullScreen) el.querySelector('video').webkitEnterFullScreen();
  },
  cancelFullscreen: function cancelFullscreen() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

    if (el.exitFullscreen) el.exitFullscreen();else if (el.webkitCancelFullScreen) el.webkitCancelFullScreen();else if (el.webkitExitFullscreen) el.webkitExitFullscreen();else if (el.mozCancelFullScreen) el.mozCancelFullScreen();else if (el.msExitFullscreen) el.msExitFullscreen();
  },
  fullscreenEnabled: function fullscreenEnabled() {
    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
  }
};

var Config = exports.Config = function () {
  function Config() {
    (0, _classCallCheck3.default)(this, Config);
  }

  Config._defaultConfig = function _defaultConfig() {
    return {
      volume: {
        value: 100,
        parse: parseInt
      }
    };
  };

  Config._defaultValueFor = function _defaultValueFor(key) {
    try {
      return this._defaultConfig()[key].parse(this._defaultConfig()[key].value);
    } catch (e) {
      return undefined;
    }
  };

  Config._createKeyspace = function _createKeyspace(key) {
    return 'clappr.' + document.domain + '.' + key;
  };

  Config.restore = function restore(key) {
    if (_browser2.default.hasLocalstorage && localStorage[this._createKeyspace(key)]) return this._defaultConfig()[key].parse(localStorage[this._createKeyspace(key)]);

    return this._defaultValueFor(key);
  };

  Config.persist = function persist(key, value) {
    if (_browser2.default.hasLocalstorage) {
      try {
        localStorage[this._createKeyspace(key)] = value;
        return true;
      } catch (e) {
        return false;
      }
    }
  };

  return Config;
}();

var QueryString = exports.QueryString = function () {
  function QueryString() {
    (0, _classCallCheck3.default)(this, QueryString);
  }

  QueryString.parse = function parse(paramsString) {
    var match = void 0;
    var pl = /\+/g,
        // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
        decode = function decode(s) {
      return decodeURIComponent(s.replace(pl, ' '));
    },
        params = {};
    while (match = search.exec(paramsString)) {
      // eslint-disable-line no-cond-assign
      params[decode(match[1]).toLowerCase()] = decode(match[2]);
    }
    return params;
  };

  (0, _createClass3.default)(QueryString, null, [{
    key: 'params',
    get: function get() {
      var query = window.location.search.substring(1);
      if (query !== this.query) {
        this._urlParams = this.parse(query);
        this.query = query;
      }
      return this._urlParams;
    }
  }, {
    key: 'hashParams',
    get: function get() {
      var hash = window.location.hash.substring(1);
      if (hash !== this.hash) {
        this._hashParams = this.parse(hash);
        this.hash = hash;
      }
      return this._hashParams;
    }
  }]);
  return QueryString;
}();

function seekStringToSeconds() {
  var paramName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 't';

  var seconds = 0;
  var seekString = QueryString.params[paramName] || QueryString.hashParams[paramName] || '';
  var parts = seekString.match(/[0-9]+[hms]+/g) || [];
  if (parts.length > 0) {
    var factor = { 'h': 3600, 'm': 60, 's': 1 };
    parts.forEach(function (el) {
      if (el) {
        var suffix = el[el.length - 1];
        var time = parseInt(el.slice(0, el.length - 1), 10);
        seconds += time * factor[suffix];
      }
    });
  } else if (seekString) {
    seconds = parseInt(seekString, 10);
  }

  return seconds;
}

var idsCounter = {};

function uniqueId(prefix) {
  idsCounter[prefix] || (idsCounter[prefix] = 0);
  var id = ++idsCounter[prefix];
  return prefix + id;
}

function isNumber(value) {
  return value - parseFloat(value) + 1 >= 0;
}

function currentScriptUrl() {
  var scripts = document.getElementsByTagName('script');
  return scripts.length ? scripts[scripts.length - 1].src : '';
}

var requestAnimationFrame = exports.requestAnimationFrame = (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
  window.setTimeout(fn, 1000 / 60);
}).bind(window);

var cancelAnimationFrame = exports.cancelAnimationFrame = (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout).bind(window);

function getBrowserLanguage() {
  return window.navigator && window.navigator.language;
}

function now() {
  if (window.performance && window.performance.now) return performance.now();

  return Date.now();
}

// remove the item from the array if it exists in the array
function removeArrayItem(arr, item) {
  var i = arr.indexOf(item);
  if (i >= 0) arr.splice(i, 1);
}

// find an item regardless of its letter case
function listContainsIgnoreCase(item, items) {
  if (item === undefined || items === undefined) return false;
  return items.find(function (itemEach) {
    return item.toLowerCase() === itemEach.toLowerCase();
  }) !== undefined;
}

// https://github.com/video-dev/can-autoplay
function canAutoPlayMedia(cb, options) {
  options = (0, _assign2.default)({
    inline: false,
    muted: false,
    timeout: 250,
    type: 'video',
    source: _media2.default.mp4,
    element: null
  }, options);

  var element = options.element ? options.element : document.createElement(options.type);

  element.muted = options.muted;
  if (options.muted === true) element.setAttribute('muted', 'muted');

  if (options.inline === true) element.setAttribute('playsinline', 'playsinline');

  element.src = options.source;

  var promise = element.play();

  var timeoutId = setTimeout(function () {
    setResult(false, new Error('Timeout ' + options.timeout + ' ms has been reached'));
  }, options.timeout);

  var setResult = function setResult(result) {
    var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    clearTimeout(timeoutId);
    cb(result, error);
  };

  if (promise !== undefined) {
    promise.then(function () {
      return setResult(true);
    }).catch(function (err) {
      return setResult(false, err);
    });
  } else {
    setResult(true);
  }
}

// Simple Zepto element factory with video recycle feature.
var videoStack = [];

var DomRecycler = exports.DomRecycler = function () {
  function DomRecycler() {
    (0, _classCallCheck3.default)(this, DomRecycler);
  }

  DomRecycler.configure = function configure(options) {
    this.options = _clapprZepto2.default.extend(this.options, options);
  };

  DomRecycler.create = function create(name) {
    if (this.options.recycleVideo && name === 'video' && videoStack.length > 0) return videoStack.shift();

    return (0, _clapprZepto2.default)('<' + name + '>');
  };

  DomRecycler.garbage = function garbage($el) {
    // Expect Zepto collection with single element (does not iterate!)
    if (!this.options.recycleVideo || $el[0].tagName.toUpperCase() !== 'VIDEO') return;
    $el.children().remove();
    videoStack.push($el);
  };

  return DomRecycler;
}();

DomRecycler.options = { recycleVideo: false };

var DoubleEventHandler = exports.DoubleEventHandler = function () {
  function DoubleEventHandler() {
    var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
    (0, _classCallCheck3.default)(this, DoubleEventHandler);

    this.delay = delay;
    this.lastTime = 0;
  }

  DoubleEventHandler.prototype.handle = function handle(event, cb) {
    var prevented = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    // Based on http://jsfiddle.net/brettwp/J4djY/
    var currentTime = new Date().getTime();
    var diffTime = currentTime - this.lastTime;

    if (diffTime < this.delay && diffTime > 0) {
      cb();
      prevented && event.preventDefault();
    }

    this.lastTime = currentTime;
  };

  return DoubleEventHandler;
}();

var SvgIcons = exports.SvgIcons = _svg_icons2.default;

exports.default = {
  Config: Config,
  Fullscreen: Fullscreen,
  QueryString: QueryString,
  DomRecycler: DomRecycler,
  extend: extend,
  formatTime: formatTime,
  seekStringToSeconds: seekStringToSeconds,
  uniqueId: uniqueId,
  currentScriptUrl: currentScriptUrl,
  isNumber: isNumber,
  requestAnimationFrame: requestAnimationFrame,
  cancelAnimationFrame: cancelAnimationFrame,
  getBrowserLanguage: getBrowserLanguage,
  now: now,
  removeArrayItem: removeArrayItem,
  canAutoPlayMedia: canAutoPlayMedia,
  Media: _media2.default,
  DoubleEventHandler: DoubleEventHandler,
  SvgIcons: _svg_icons2.default
};

/***/ }),

/***/ "./src/components/browser/browser.js":
/*!*******************************************!*\
  !*** ./src/components/browser/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDevice = exports.getViewportSize = exports.getOsData = exports.getBrowserData = exports.getBrowserInfo = undefined;

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _clapprZepto = __webpack_require__(/*! clappr-zepto */ "./node_modules/clappr-zepto/zepto.js");

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

var _browser_data = __webpack_require__(/*! ./browser_data */ "./src/components/browser/browser_data.js");

var _browser_data2 = _interopRequireDefault(_browser_data);

var _os_data = __webpack_require__(/*! ./os_data */ "./src/components/browser/os_data.js");

var _os_data2 = _interopRequireDefault(_os_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Browser = {};

var hasLocalstorage = function hasLocalstorage() {
  try {
    localStorage.setItem('clappr', 'clappr');
    localStorage.removeItem('clappr');
    return true;
  } catch (e) {
    return false;
  }
};

var hasFlash = function hasFlash() {
  try {
    var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
    return !!fo;
  } catch (e) {
    return !!(navigator.mimeTypes && navigator.mimeTypes['application/x-shockwave-flash'] !== undefined && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin);
  }
};

var getBrowserInfo = exports.getBrowserInfo = function getBrowserInfo(ua) {
  var parts = ua.match(/\b(playstation 4|nx|opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
      extra = void 0;
  if (/trident/i.test(parts[1])) {
    extra = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return {
      name: 'IE',
      version: parseInt(extra[1] || '')
    };
  } else if (parts[1] === 'Chrome') {
    extra = ua.match(/\bOPR\/(\d+)/);
    if (extra != null) return { name: 'Opera', version: parseInt(extra[1]) };

    extra = ua.match(/\bEdge\/(\d+)/);
    if (extra != null) return { name: 'Edge', version: parseInt(extra[1]) };
  } else if (/android/i.test(ua) && (extra = ua.match(/version\/(\d+)/i))) {
    parts.splice(1, 1, 'Android WebView');
    parts.splice(2, 1, extra[1]);
  }
  parts = parts[2] ? [parts[1], parts[2]] : [navigator.appName, navigator.appVersion, '-?'];

  return {
    name: parts[0],
    version: parseInt(parts[1])
  };
};

//  Get browser data
var getBrowserData = exports.getBrowserData = function getBrowserData() {
  var browserObject = {};
  var userAgent = Browser.userAgent.toLowerCase();

  // Check browser type
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(_browser_data2.default), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var browser = _step.value;

      var browserRegExp = new RegExp(browser.identifier.toLowerCase());
      var browserRegExpResult = browserRegExp.exec(userAgent);

      if (browserRegExpResult != null && browserRegExpResult[1]) {
        browserObject.name = browser.name;
        browserObject.group = browser.group;

        // Check version
        if (browser.versionIdentifier) {
          var versionRegExp = new RegExp(browser.versionIdentifier.toLowerCase());
          var versionRegExpResult = versionRegExp.exec(userAgent);

          if (versionRegExpResult != null && versionRegExpResult[1]) setBrowserVersion(versionRegExpResult[1], browserObject);
        } else {
          setBrowserVersion(browserRegExpResult[1], browserObject);
        }
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return browserObject;
};

// Set browser version
var setBrowserVersion = function setBrowserVersion(version, browserObject) {
  var splitVersion = version.split('.', 2);
  browserObject.fullVersion = version;

  // Major version
  if (splitVersion[0]) browserObject.majorVersion = parseInt(splitVersion[0]);

  // Minor version
  if (splitVersion[1]) browserObject.minorVersion = parseInt(splitVersion[1]);
};

//  Get OS data
var getOsData = exports.getOsData = function getOsData() {
  var osObject = {};
  var userAgent = Browser.userAgent.toLowerCase();

  // Check browser type
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = (0, _getIterator3.default)(_os_data2.default), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var os = _step2.value;

      var osRegExp = new RegExp(os.identifier.toLowerCase());
      var osRegExpResult = osRegExp.exec(userAgent);

      if (osRegExpResult != null) {
        osObject.name = os.name;
        osObject.group = os.group;

        // Version defined
        if (os.version) {
          setOsVersion(os.version, os.versionSeparator ? os.versionSeparator : '.', osObject);

          // Version detected
        } else if (osRegExpResult[1]) {
          setOsVersion(osRegExpResult[1], os.versionSeparator ? os.versionSeparator : '.', osObject);

          // Version identifier
        } else if (os.versionIdentifier) {
          var versionRegExp = new RegExp(os.versionIdentifier.toLowerCase());
          var versionRegExpResult = versionRegExp.exec(userAgent);

          if (versionRegExpResult != null && versionRegExpResult[1]) setOsVersion(versionRegExpResult[1], os.versionSeparator ? os.versionSeparator : '.', osObject);
        }
        break;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return osObject;
};

// Set OS version
var setOsVersion = function setOsVersion(version, separator, osObject) {
  var finalSeparator = separator.substr(0, 1) == '[' ? new RegExp(separator, 'g') : separator;
  var splitVersion = version.split(finalSeparator, 2);

  if (separator != '.') version = version.replace(new RegExp(separator, 'g'), '.');

  osObject.fullVersion = version;

  // Major version
  if (splitVersion && splitVersion[0]) osObject.majorVersion = parseInt(splitVersion[0]);

  // Minor version
  if (splitVersion && splitVersion[1]) osObject.minorVersion = parseInt(splitVersion[1]);
};

// Set viewport size
var getViewportSize = exports.getViewportSize = function getViewportSize() {
  var viewportObject = {};

  viewportObject.width = (0, _clapprZepto2.default)(window).width();
  viewportObject.height = (0, _clapprZepto2.default)(window).height();

  return viewportObject;
};

// Set viewport orientation
var setViewportOrientation = function setViewportOrientation() {
  switch (window.orientation) {
    case -90:
    case 90:
      Browser.viewport.orientation = 'landscape';
      break;
    default:
      Browser.viewport.orientation = 'portrait';
      break;
  }
};

var getDevice = exports.getDevice = function getDevice(ua) {
  var platformRegExp = /\((iP(?:hone|ad|od))?(?:[^;]*; ){0,2}([^)]+(?=\)))/;
  var matches = platformRegExp.exec(ua);
  var device = matches && (matches[1] || matches[2]) || '';
  return device;
};

var browserInfo = getBrowserInfo(navigator.userAgent);

Browser.isEdge = /edge/i.test(navigator.userAgent);
Browser.isChrome = /chrome|CriOS/i.test(navigator.userAgent) && !Browser.isEdge;
Browser.isSafari = /safari/i.test(navigator.userAgent) && !Browser.isChrome && !Browser.isEdge;
Browser.isFirefox = /firefox/i.test(navigator.userAgent);
Browser.isLegacyIE = !!window.ActiveXObject;
Browser.isIE = Browser.isLegacyIE || /trident.*rv:1\d/i.test(navigator.userAgent);
Browser.isIE11 = /trident.*rv:11/i.test(navigator.userAgent);
Browser.isChromecast = Browser.isChrome && /CrKey/i.test(navigator.userAgent);
Browser.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Mobile Safari|Opera Mini/i.test(navigator.userAgent);
Browser.isiOS = /iPad|iPhone|iPod/i.test(navigator.userAgent);
Browser.isAndroid = /Android/i.test(navigator.userAgent);
Browser.isWindowsPhone = /Windows Phone/i.test(navigator.userAgent);
Browser.isWin8App = /MSAppHost/i.test(navigator.userAgent);
Browser.isWiiU = /WiiU/i.test(navigator.userAgent);
Browser.isPS4 = /PlayStation 4/i.test(navigator.userAgent);
Browser.hasLocalstorage = hasLocalstorage();
Browser.hasFlash = hasFlash();

/**
* @deprecated
* This parameter currently exists for retrocompatibility reasons.
* Use Browser.data.name instead.
*/
Browser.name = browserInfo.name;

/**
* @deprecated
* This parameter currently exists for retrocompatibility reasons.
* Use Browser.data.fullVersion instead.
*/
Browser.version = browserInfo.version;

Browser.userAgent = navigator.userAgent;
Browser.data = getBrowserData();
Browser.os = getOsData();
Browser.viewport = getViewportSize();
Browser.device = getDevice(Browser.userAgent);
typeof window.orientation !== 'undefined' && setViewportOrientation();

exports.default = Browser;

/***/ }),

/***/ "./src/components/browser/browser_data.js":
/*!************************************************!*\
  !*** ./src/components/browser/browser_data.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-useless-escape */
// The order of the following arrays is important, be careful if you change it.

var BROWSER_DATA = [{
  name: 'Chromium',
  group: 'Chrome',
  identifier: 'Chromium/([0-9\.]*)'
}, {
  name: 'Chrome Mobile',
  group: 'Chrome',
  identifier: 'Chrome/([0-9\.]*) Mobile',
  versionIdentifier: 'Chrome/([0-9\.]*)'
}, {
  name: 'Chrome',
  group: 'Chrome',
  identifier: 'Chrome/([0-9\.]*)'
}, {
  name: 'Chrome for iOS',
  group: 'Chrome',
  identifier: 'CriOS/([0-9\.]*)'
}, {
  name: 'Android Browser',
  group: 'Chrome',
  identifier: 'CrMo/([0-9\.]*)'
}, {
  name: 'Firefox',
  group: 'Firefox',
  identifier: 'Firefox/([0-9\.]*)'
}, {
  name: 'Opera Mini',
  group: 'Opera',
  identifier: 'Opera Mini/([0-9\.]*)'
}, {
  name: 'Opera',
  group: 'Opera',
  identifier: 'Opera ([0-9\.]*)'
}, {
  name: 'Opera',
  group: 'Opera',
  identifier: 'Opera/([0-9\.]*)',
  versionIdentifier: 'Version/([0-9\.]*)'
}, {
  name: 'IEMobile',
  group: 'Explorer',
  identifier: 'IEMobile/([0-9\.]*)'
}, {
  name: 'Internet Explorer',
  group: 'Explorer',
  identifier: 'MSIE ([a-zA-Z0-9\.]*)'
}, {
  name: 'Internet Explorer',
  group: 'Explorer',
  identifier: 'Trident/([0-9\.]*)',
  versionIdentifier: 'rv:([0-9\.]*)'
}, {
  name: 'Spartan',
  group: 'Spartan',
  identifier: 'Edge/([0-9\.]*)',
  versionIdentifier: 'Edge/([0-9\.]*)'
}, {
  name: 'Safari',
  group: 'Safari',
  identifier: 'Safari/([0-9\.]*)',
  versionIdentifier: 'Version/([0-9\.]*)'
}];

exports.default = BROWSER_DATA;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/browser/index.js":
/*!*****************************************!*\
  !*** ./src/components/browser/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = __webpack_require__(/*! ./browser */ "./src/components/browser/browser.js");

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _browser2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/browser/os_data.js":
/*!*******************************************!*\
  !*** ./src/components/browser/os_data.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-useless-escape */
// The order of the following arrays is important, be careful if you change it.

var OS_DATA = [{
  name: 'Windows 2000',
  group: 'Windows',
  identifier: 'Windows NT 5.0',
  version: '5.0'
}, {
  name: 'Windows XP',
  group: 'Windows',
  identifier: 'Windows NT 5.1',
  version: '5.1'
}, {
  name: 'Windows Vista',
  group: 'Windows',
  identifier: 'Windows NT 6.0',
  version: '6.0'
}, {
  name: 'Windows 7',
  group: 'Windows',
  identifier: 'Windows NT 6.1',
  version: '7.0'
}, {
  name: 'Windows 8',
  group: 'Windows',
  identifier: 'Windows NT 6.2',
  version: '8.0'
}, {
  name: 'Windows 8.1',
  group: 'Windows',
  identifier: 'Windows NT 6.3',
  version: '8.1'
}, {
  name: 'Windows 10',
  group: 'Windows',
  identifier: 'Windows NT 10.0',
  version: '10.0'
}, {
  name: 'Windows Phone',
  group: 'Windows Phone',
  identifier: 'Windows Phone ([0-9\.]*)'
}, {
  name: 'Windows Phone',
  group: 'Windows Phone',
  identifier: 'Windows Phone OS ([0-9\.]*)'
}, {
  name: 'Windows',
  group: 'Windows',
  identifier: 'Windows'
}, {
  name: 'Chrome OS',
  group: 'Chrome OS',
  identifier: 'CrOS'
}, {
  name: 'Android',
  group: 'Android',
  identifier: 'Android',
  versionIdentifier: 'Android ([a-zA-Z0-9\.-]*)'
}, {
  name: 'iPad',
  group: 'iOS',
  identifier: 'iPad',
  versionIdentifier: 'OS ([0-9_]*)',
  versionSeparator: '[_|\.]'
}, {
  name: 'iPod',
  group: 'iOS',
  identifier: 'iPod',
  versionIdentifier: 'OS ([0-9_]*)',
  versionSeparator: '[_|\.]'
}, {
  name: 'iPhone',
  group: 'iOS',
  identifier: 'iPhone OS',
  versionIdentifier: 'OS ([0-9_]*)',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X High Sierra',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])13([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Sierra',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])12([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X El Capitan',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])11([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Yosemite',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])10([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Mavericks',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])9([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Mountain Lion',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])8([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Lion',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])7([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Snow Leopard',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])6([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Leopard',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])5([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Tiger',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])4([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Panther',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])3([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Jaguar',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])2([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Puma',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])1([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS X Cheetah',
  group: 'Mac OS',
  identifier: 'Mac OS X (10([_|\.])0([0-9_\.]*))',
  versionSeparator: '[_|\.]'
}, {
  name: 'Mac OS',
  group: 'Mac OS',
  identifier: 'Mac OS'
}, {
  name: 'Ubuntu',
  group: 'Linux',
  identifier: 'Ubuntu',
  versionIdentifier: 'Ubuntu/([0-9\.]*)'
}, {
  name: 'Debian',
  group: 'Linux',
  identifier: 'Debian'
}, {
  name: 'Gentoo',
  group: 'Linux',
  identifier: 'Gentoo'
}, {
  name: 'Linux',
  group: 'Linux',
  identifier: 'Linux'
}, {
  name: 'BlackBerry',
  group: 'BlackBerry',
  identifier: 'BlackBerry'
}];

exports.default = OS_DATA;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/container/container.js":
/*!***********************************************!*\
  !*** ./src/components/container/container.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _ui_object = __webpack_require__(/*! ../../base/ui_object */ "./src/base/ui_object.js");

var _ui_object2 = _interopRequireDefault(_ui_object);

var _error_mixin = __webpack_require__(/*! ../../base/error_mixin */ "./src/base/error_mixin.js");

var _error_mixin2 = _interopRequireDefault(_error_mixin);

var _utils = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js");

__webpack_require__(/*! ./public/style.scss */ "./src/components/container/public/style.scss");

var _clapprZepto = __webpack_require__(/*! clappr-zepto */ "./node_modules/clappr-zepto/zepto.js");

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An abstraction to represent a container for a given playback
 * TODO: describe its responsabilities
 * @class Container
 * @constructor
 * @extends UIObject
 * @module base
 */
// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

/**
 * Container is responsible for the video rendering and state
 */

var Container = function (_UIObject) {
  (0, _inherits3.default)(Container, _UIObject);
  (0, _createClass3.default)(Container, [{
    key: 'name',

    /**
     * container's name
     * @method name
     * @default Container
     * @return {String} container's name
     */
    get: function get() {
      return 'Container';
    }
  }, {
    key: 'attributes',
    get: function get() {
      return { class: 'container', 'data-container': '' };
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'click': 'clicked',
        'dblclick': 'dblClicked',
        'touchend': 'dblTap',
        'contextmenu': 'onContextMenu',
        'mouseenter': 'mouseEnter',
        'mouseleave': 'mouseLeave'
      };
    }

    /**
     * Determine if the playback has ended.
     * @property ended
     * @type Boolean
     */

  }, {
    key: 'ended',
    get: function get() {
      return this.playback.ended;
    }

    /**
     * Determine if the playback is having to buffer in order for
     * playback to be smooth.
     * (i.e if a live stream is playing smoothly, this will be false)
     * @property buffering
     * @type Boolean
     */

  }, {
    key: 'buffering',
    get: function get() {
      return this.playback.buffering;
    }

    /**
     * The internationalization plugin.
     * @property i18n
     * @type {Strings}
     */

  }, {
    key: 'i18n',
    get: function get() {
      return this._i18n;
    }

    /**
     * checks if has closed caption tracks.
     * @property hasClosedCaptionsTracks
     * @type {Boolean}
     */

  }, {
    key: 'hasClosedCaptionsTracks',
    get: function get() {
      return this.playback.hasClosedCaptionsTracks;
    }

    /**
     * gets the available closed caption tracks.
     * @property closedCaptionsTracks
     * @type {Array} an array of objects with at least 'id' and 'name' properties
     */

  }, {
    key: 'closedCaptionsTracks',
    get: function get() {
      return this.playback.closedCaptionsTracks;
    }

    /**
     * gets the selected closed caption track index. (-1 is disabled)
     * @property closedCaptionsTrackId
     * @type {Number}
     */

  }, {
    key: 'closedCaptionsTrackId',
    get: function get() {
      return this.playback.closedCaptionsTrackId;
    }

    /**
     * sets the selected closed caption track index. (-1 is disabled)
     * @property closedCaptionsTrackId
     * @type {Number}
     */
    ,
    set: function set(trackId) {
      this.playback.closedCaptionsTrackId = trackId;
    }

    /**
     * it builds a container
     * @method constructor
     * @param {Object} options the options object
     * @param {Strings} i18n the internationalization component
     */

  }]);

  function Container(options, i18n, playerError) {
    (0, _classCallCheck3.default)(this, Container);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UIObject.call(this, options));

    _this._i18n = i18n;
    _this.currentTime = 0;
    _this.volume = 100;
    _this.playback = options.playback;
    _this.playerError = playerError;
    _this.settings = _clapprZepto2.default.extend({}, _this.playback.settings);
    _this.isReady = false;
    _this.mediaControlDisabled = false;
    _this.plugins = [_this.playback];
    _this.dblTapHandler = new _utils.DoubleEventHandler(500);
    _this.clickTimer = null;
    _this.clickDelay = 200; // FIXME: could be a player option
    _this.bindEvents();
    return _this;
  }

  /**
   * binds playback events to the methods of the container.
   * it listens to playback's events and triggers them as container events.
   *
   * | Playback |
   * |----------|
   * | progress |
   * | timeupdate |
   * | ready |
   * | buffering |
   * | bufferfull |
   * | settingsupdate |
   * | loadedmetadata |
   * | highdefinitionupdate |
   * | bitrate |
   * | playbackstate |
   * | dvr |
   * | mediacontrol_disable |
   * | mediacontrol_enable |
   * | ended |
   * | play |
   * | pause |
   * | error |
   *
   * ps: the events usually translate from PLABACK_x to CONTAINER_x, you can check all the events at `Event` class.
   *
   * @method bindEvents
   */


  Container.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.playback, _events2.default.PLAYBACK_PROGRESS, this.onProgress);
    this.listenTo(this.playback, _events2.default.PLAYBACK_TIMEUPDATE, this.timeUpdated);
    this.listenTo(this.playback, _events2.default.PLAYBACK_READY, this.ready);
    this.listenTo(this.playback, _events2.default.PLAYBACK_BUFFERING, this.onBuffering);
    this.listenTo(this.playback, _events2.default.PLAYBACK_BUFFERFULL, this.bufferfull);
    this.listenTo(this.playback, _events2.default.PLAYBACK_SETTINGSUPDATE, this.settingsUpdate);
    this.listenTo(this.playback, _events2.default.PLAYBACK_LOADEDMETADATA, this.loadedMetadata);
    this.listenTo(this.playback, _events2.default.PLAYBACK_HIGHDEFINITIONUPDATE, this.highDefinitionUpdate);
    this.listenTo(this.playback, _events2.default.PLAYBACK_BITRATE, this.updateBitrate);
    this.listenTo(this.playback, _events2.default.PLAYBACK_PLAYBACKSTATE, this.playbackStateChanged);
    this.listenTo(this.playback, _events2.default.PLAYBACK_DVR, this.playbackDvrStateChanged);
    this.listenTo(this.playback, _events2.default.PLAYBACK_MEDIACONTROL_DISABLE, this.disableMediaControl);
    this.listenTo(this.playback, _events2.default.PLAYBACK_MEDIACONTROL_ENABLE, this.enableMediaControl);
    this.listenTo(this.playback, _events2.default.PLAYBACK_SEEKED, this.onSeeked);
    this.listenTo(this.playback, _events2.default.PLAYBACK_ENDED, this.onEnded);
    this.listenTo(this.playback, _events2.default.PLAYBACK_PLAY, this.playing);
    this.listenTo(this.playback, _events2.default.PLAYBACK_PAUSE, this.paused);
    this.listenTo(this.playback, _events2.default.PLAYBACK_STOP, this.stopped);
    this.listenTo(this.playback, _events2.default.PLAYBACK_ERROR, this.error);
    this.listenTo(this.playback, _events2.default.PLAYBACK_SUBTITLE_AVAILABLE, this.subtitleAvailable);
    this.listenTo(this.playback, _events2.default.PLAYBACK_SUBTITLE_CHANGED, this.subtitleChanged);
  };

  Container.prototype.subtitleAvailable = function subtitleAvailable() {
    this.trigger(_events2.default.CONTAINER_SUBTITLE_AVAILABLE);
  };

  Container.prototype.subtitleChanged = function subtitleChanged(track) {
    this.trigger(_events2.default.CONTAINER_SUBTITLE_CHANGED, track);
  };

  Container.prototype.playbackStateChanged = function playbackStateChanged(state) {
    this.trigger(_events2.default.CONTAINER_PLAYBACKSTATE, state);
  };

  Container.prototype.playbackDvrStateChanged = function playbackDvrStateChanged(dvrInUse) {
    this.settings = this.playback.settings;
    this.dvrInUse = dvrInUse;
    this.trigger(_events2.default.CONTAINER_PLAYBACKDVRSTATECHANGED, dvrInUse);
  };

  Container.prototype.updateBitrate = function updateBitrate(newBitrate) {
    this.trigger(_events2.default.CONTAINER_BITRATE, newBitrate);
  };

  Container.prototype.statsReport = function statsReport(metrics) {
    this.trigger(_events2.default.CONTAINER_STATS_REPORT, metrics);
  };

  Container.prototype.getPlaybackType = function getPlaybackType() {
    return this.playback.getPlaybackType();
  };

  /**
   * returns `true` if DVR is enable otherwise `false`.
   * @method isDvrEnabled
   * @return {Boolean}
   */


  Container.prototype.isDvrEnabled = function isDvrEnabled() {
    return !!this.playback.dvrEnabled;
  };

  /**
   * returns `true` if DVR is in use otherwise `false`.
   * @method isDvrInUse
   * @return {Boolean}
   */


  Container.prototype.isDvrInUse = function isDvrInUse() {
    return !!this.dvrInUse;
  };

  /**
   * destroys the container
   * @method destroy
   */


  Container.prototype.destroy = function destroy() {
    this.trigger(_events2.default.CONTAINER_DESTROYED, this, this.name);
    this.stopListening();
    this.plugins.forEach(function (plugin) {
      return plugin.destroy();
    });
    this.$el.remove();
  };

  Container.prototype.setStyle = function setStyle(style) {
    this.$el.css(style);
  };

  Container.prototype.animate = function animate(style, duration) {
    return this.$el.animate(style, duration).promise();
  };

  Container.prototype.ready = function ready() {
    this.isReady = true;
    this.trigger(_events2.default.CONTAINER_READY, this.name);
  };

  Container.prototype.isPlaying = function isPlaying() {
    return this.playback.isPlaying();
  };

  Container.prototype.getStartTimeOffset = function getStartTimeOffset() {
    return this.playback.getStartTimeOffset();
  };

  Container.prototype.getCurrentTime = function getCurrentTime() {
    return this.currentTime;
  };

  Container.prototype.getDuration = function getDuration() {
    return this.playback.getDuration();
  };

  Container.prototype.error = function error(_error) {
    if (!this.isReady) this.ready();

    this.trigger(_events2.default.CONTAINER_ERROR, _error, this.name);
  };

  Container.prototype.loadedMetadata = function loadedMetadata(metadata) {
    this.trigger(_events2.default.CONTAINER_LOADEDMETADATA, metadata);
  };

  Container.prototype.timeUpdated = function timeUpdated(timeProgress) {
    this.currentTime = timeProgress.current;
    this.trigger(_events2.default.CONTAINER_TIMEUPDATE, timeProgress, this.name);
  };

  Container.prototype.onProgress = function onProgress() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.trigger.apply(this, [_events2.default.CONTAINER_PROGRESS].concat(args, [this.name]));
  };

  Container.prototype.playing = function playing() {
    this.trigger(_events2.default.CONTAINER_PLAY, this.name);
  };

  Container.prototype.paused = function paused() {
    this.trigger(_events2.default.CONTAINER_PAUSE, this.name);
  };

  /**
   * plays the playback
   * @method play
   */


  Container.prototype.play = function play() {
    this.playback.play();
  };

  /**
   * stops the playback
   * @method stop
   */


  Container.prototype.stop = function stop() {
    this.playback.stop();
    this.currentTime = 0;
  };

  /**
   * pauses the playback
   * @method pause
   */


  Container.prototype.pause = function pause() {
    this.playback.pause();
  };

  Container.prototype.onEnded = function onEnded() {
    this.trigger(_events2.default.CONTAINER_ENDED, this, this.name);
    this.currentTime = 0;
  };

  Container.prototype.stopped = function stopped() {
    this.trigger(_events2.default.CONTAINER_STOP);
  };

  Container.prototype.clicked = function clicked() {
    var _this2 = this;

    if (!this.options.chromeless || this.options.allowUserInteraction) {
      // The event is delayed because it can be canceled by a double-click event
      // An example of use is to prevent playback from pausing when switching to full screen
      this.clickTimer = setTimeout(function () {
        _this2.clickTimer && _this2.trigger(_events2.default.CONTAINER_CLICK, _this2, _this2.name);
      }, this.clickDelay);
    }
  };

  Container.prototype.cancelClicked = function cancelClicked() {
    clearTimeout(this.clickTimer);
    this.clickTimer = null;
  };

  Container.prototype.dblClicked = function dblClicked() {
    if (!this.options.chromeless || this.options.allowUserInteraction) {
      this.cancelClicked();
      this.trigger(_events2.default.CONTAINER_DBLCLICK, this, this.name);
    }
  };

  Container.prototype.dblTap = function dblTap(evt) {
    var _this3 = this;

    if (!this.options.chromeless || this.options.allowUserInteraction) {
      this.dblTapHandler.handle(evt, function () {
        _this3.cancelClicked();
        _this3.trigger(_events2.default.CONTAINER_DBLCLICK, _this3, _this3.name);
      });
    }
  };

  Container.prototype.onContextMenu = function onContextMenu(event) {
    if (!this.options.chromeless || this.options.allowUserInteraction) this.trigger(_events2.default.CONTAINER_CONTEXTMENU, event, this.name);
  };

  Container.prototype.seek = function seek(time) {
    this.trigger(_events2.default.CONTAINER_SEEK, time, this.name);
    this.playback.seek(time);
  };

  Container.prototype.onSeeked = function onSeeked() {
    this.trigger(_events2.default.CONTAINER_SEEKED, this.name);
  };

  Container.prototype.seekPercentage = function seekPercentage(percentage) {
    var duration = this.getDuration();
    if (percentage >= 0 && percentage <= 100) {
      var time = duration * (percentage / 100);
      this.seek(time);
    }
  };

  Container.prototype.setVolume = function setVolume(value) {
    this.volume = parseFloat(value);
    this.trigger(_events2.default.CONTAINER_VOLUME, this.volume, this.name);
    this.playback.volume(this.volume);
  };

  Container.prototype.fullscreen = function fullscreen() {
    this.trigger(_events2.default.CONTAINER_FULLSCREEN, this.name);
  };

  Container.prototype.onBuffering = function onBuffering() {
    this.trigger(_events2.default.CONTAINER_STATE_BUFFERING, this.name);
  };

  Container.prototype.bufferfull = function bufferfull() {
    this.trigger(_events2.default.CONTAINER_STATE_BUFFERFULL, this.name);
  };

  /**
   * adds plugin to the container
   * @method addPlugin
   * @param {Object} plugin
   */


  Container.prototype.addPlugin = function addPlugin(plugin) {
    this.plugins.push(plugin);
  };

  /**
   * checks if a plugin, given its name, exist
   * @method hasPlugin
   * @param {String} name
   * @return {Boolean}
   */


  Container.prototype.hasPlugin = function hasPlugin(name) {
    return !!this.getPlugin(name);
  };

  /**
   * get the plugin given its name
   * @method getPlugin
   * @param {String} name
   */


  Container.prototype.getPlugin = function getPlugin(name) {
    return this.plugins.filter(function (plugin) {
      return plugin.name === name;
    })[0];
  };

  Container.prototype.mouseEnter = function mouseEnter() {
    if (!this.options.chromeless || this.options.allowUserInteraction) this.trigger(_events2.default.CONTAINER_MOUSE_ENTER);
  };

  Container.prototype.mouseLeave = function mouseLeave() {
    if (!this.options.chromeless || this.options.allowUserInteraction) this.trigger(_events2.default.CONTAINER_MOUSE_LEAVE);
  };

  Container.prototype.settingsUpdate = function settingsUpdate() {
    this.settings = this.playback.settings;
    this.trigger(_events2.default.CONTAINER_SETTINGSUPDATE);
  };

  Container.prototype.highDefinitionUpdate = function highDefinitionUpdate(isHD) {
    this.trigger(_events2.default.CONTAINER_HIGHDEFINITIONUPDATE, isHD);
  };

  Container.prototype.isHighDefinitionInUse = function isHighDefinitionInUse() {
    return this.playback.isHighDefinitionInUse();
  };

  Container.prototype.disableMediaControl = function disableMediaControl() {
    if (!this.mediaControlDisabled) {
      this.mediaControlDisabled = true;
      this.trigger(_events2.default.CONTAINER_MEDIACONTROL_DISABLE);
    }
  };

  Container.prototype.enableMediaControl = function enableMediaControl() {
    if (this.mediaControlDisabled) {
      this.mediaControlDisabled = false;
      this.trigger(_events2.default.CONTAINER_MEDIACONTROL_ENABLE);
    }
  };

  Container.prototype.updateStyle = function updateStyle() {
    if (!this.options.chromeless || this.options.allowUserInteraction) this.$el.removeClass('chromeless');else this.$el.addClass('chromeless');
  };

  /**
   * enables to configure the container after its creation
   * @method configure
   * @param {Object} options all the options to change in form of a javascript object
   */


  Container.prototype.configure = function configure(options) {
    this._options = _clapprZepto2.default.extend(this._options, options);
    this.updateStyle();
    this.playback.configure(this.options);
    this.trigger(_events2.default.CONTAINER_OPTIONS_CHANGE);
  };

  Container.prototype.render = function render() {
    this.$el.append(this.playback.render().el);
    this.updateStyle();
    return this;
  };

  return Container;
}(_ui_object2.default);

exports.default = Container;


(0, _assign2.default)(Container.prototype, _error_mixin2.default);
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/container/index.js":
/*!*******************************************!*\
  !*** ./src/components/container/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _container = __webpack_require__(/*! ./container */ "./src/components/container/container.js");

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _container2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/container/public/style.scss":
/*!****************************************************!*\
  !*** ./src/components/container/public/style.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/components/container/public/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/container_factory/container_factory.js":
/*!***************************************************************!*\
  !*** ./src/components/container_factory/container_factory.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _base_object = __webpack_require__(/*! ../../base/base_object */ "./src/base/base_object.js");

var _base_object2 = _interopRequireDefault(_base_object);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _container = __webpack_require__(/*! ../../components/container */ "./src/components/container/index.js");

var _container2 = _interopRequireDefault(_container);

var _clapprZepto = __webpack_require__(/*! clappr-zepto */ "./node_modules/clappr-zepto/zepto.js");

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

/**
 * The ContainerFactory is responsible for manage playback bootstrap and create containers.
 */

var ContainerFactory = function (_BaseObject) {
  (0, _inherits3.default)(ContainerFactory, _BaseObject);
  (0, _createClass3.default)(ContainerFactory, [{
    key: 'options',
    get: function get() {
      return this._options;
    },
    set: function set(options) {
      this._options = options;
    }
  }]);

  function ContainerFactory(options, loader, i18n, playerError) {
    (0, _classCallCheck3.default)(this, ContainerFactory);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this, options));

    _this._i18n = i18n;
    _this.loader = loader;
    _this.playerError = playerError;
    return _this;
  }

  ContainerFactory.prototype.createContainers = function createContainers() {
    var _this2 = this;

    return _clapprZepto2.default.Deferred(function (promise) {
      promise.resolve(_this2.options.sources.map(function (source) {
        return _this2.createContainer(source);
      }));
    });
  };

  ContainerFactory.prototype.findPlaybackPlugin = function findPlaybackPlugin(source, mimeType) {
    return this.loader.playbackPlugins.filter(function (p) {
      return p.canPlay(source, mimeType);
    })[0];
  };

  ContainerFactory.prototype.createContainer = function createContainer(source) {
    var resolvedSource = null,
        mimeType = this.options.mimeType;
    if ((typeof source === 'undefined' ? 'undefined' : (0, _typeof3.default)(source)) === 'object') {
      resolvedSource = source.source.toString();
      if (source.mimeType) mimeType = source.mimeType;
    } else {
      resolvedSource = source.toString();
    }

    if (resolvedSource.match(/^\/\//)) resolvedSource = window.location.protocol + resolvedSource;

    var options = _clapprZepto2.default.extend({}, this.options, {
      src: resolvedSource,
      mimeType: mimeType
    });
    var playbackPlugin = this.findPlaybackPlugin(resolvedSource, mimeType);
    var playback = new playbackPlugin(options, this._i18n, this.playerError);

    options = _clapprZepto2.default.extend({}, options, { playback: playback });

    var container = new _container2.default(options, this._i18n, this.playerError);
    var defer = _clapprZepto2.default.Deferred();
    defer.promise(container);
    this.addContainerPlugins(container);
    this.listenToOnce(container, _events2.default.CONTAINER_READY, function () {
      return defer.resolve(container);
    });
    return container;
  };

  ContainerFactory.prototype.addContainerPlugins = function addContainerPlugins(container) {
    this.loader.containerPlugins.forEach(function (Plugin) {
      container.addPlugin(new Plugin(container));
    });
  };

  return ContainerFactory;
}(_base_object2.default);

exports.default = ContainerFactory;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/container_factory/index.js":
/*!***************************************************!*\
  !*** ./src/components/container_factory/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _container_factory = __webpack_require__(/*! ./container_factory */ "./src/components/container_factory/container_factory.js");

var _container_factory2 = _interopRequireDefault(_container_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _container_factory2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/core/core.js":
/*!*************************************!*\
  !*** ./src/components/core/core.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js");

var _styler = __webpack_require__(/*! ../../base/styler */ "./src/base/styler.js");

var _styler2 = _interopRequireDefault(_styler);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _ui_object = __webpack_require__(/*! ../../base/ui_object */ "./src/base/ui_object.js");

var _ui_object2 = _interopRequireDefault(_ui_object);

var _ui_core_plugin = __webpack_require__(/*! ../../base/ui_core_plugin */ "./src/base/ui_core_plugin.js");

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _browser = __webpack_require__(/*! ../../components/browser */ "./src/components/browser/index.js");

var _browser2 = _interopRequireDefault(_browser);

var _container_factory = __webpack_require__(/*! ../../components/container_factory */ "./src/components/container_factory/index.js");

var _container_factory2 = _interopRequireDefault(_container_factory);

var _mediator = __webpack_require__(/*! ../../components/mediator */ "./src/components/mediator.js");

var _mediator2 = _interopRequireDefault(_mediator);

var _player_info = __webpack_require__(/*! ../../components/player_info */ "./src/components/player_info.js");

var _player_info2 = _interopRequireDefault(_player_info);

var _error = __webpack_require__(/*! ../../components/error */ "./src/components/error/index.js");

var _error2 = _interopRequireDefault(_error);

var _error_mixin = __webpack_require__(/*! ../../base/error_mixin */ "./src/base/error_mixin.js");

var _error_mixin2 = _interopRequireDefault(_error_mixin);

var _clapprZepto = __webpack_require__(/*! clappr-zepto */ "./node_modules/clappr-zepto/zepto.js");

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

__webpack_require__(/*! ./public/style.scss */ "./src/components/core/public/style.scss");

var _fonts = __webpack_require__(/*! ./public/fonts.css */ "./src/components/core/public/fonts.css");

var _fonts2 = _interopRequireDefault(_fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var style = void 0;

/**
 * The Core is responsible to manage Containers, the mediator, MediaControl
 * and the player state.
 * @class Core
 * @constructor
 * @extends UIObject
 * @module components
 */

var Core = function (_UIObject) {
  (0, _inherits3.default)(Core, _UIObject);
  (0, _createClass3.default)(Core, [{
    key: 'events',
    get: function get() {
      return {
        'webkitfullscreenchange': 'handleFullscreenChange',
        'mousemove': 'onMouseMove',
        'mouseleave': 'onMouseLeave'
      };
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'data-player': '',
        tabindex: 9999
      };
    }

    /**
     * checks if the core is ready.
     * @property isReady
     * @type {Boolean} `true` if the core is ready, otherwise `false`
     */

  }, {
    key: 'isReady',
    get: function get() {
      return !!this.ready;
    }

    /**
     * The internationalization plugin.
     * @property i18n
     * @type {Strings}
     */

  }, {
    key: 'i18n',
    get: function get() {
      return this.getPlugin('strings') || { t: function t(key) {
          return key;
        } };
    }

    /**
     * @deprecated
     * This property currently exists for retrocompatibility reasons.
     * If you want to access the media control instance, use the method getPlugin('media_control').
     */

  }, {
    key: 'mediaControl',
    get: function get() {
      return this.getPlugin('media_control') || this.dummyMediaControl;
    }
  }, {
    key: 'dummyMediaControl',
    get: function get() {
      if (this._dummyMediaControl) return this._dummyMediaControl;
      this._dummyMediaControl = new _ui_core_plugin2.default(this);
      return this._dummyMediaControl;
    }

    /**
     * gets the active container reference.
     * @property activeContainer
     * @type {Object}
     */

  }, {
    key: 'activeContainer',
    get: function get() {
      return this._activeContainer;
    }

    /**
     * sets the active container reference and trigger a event with the new reference.
     * @property activeContainer
     * @type {Object}
     */
    ,
    set: function set(container) {
      this._activeContainer = container;
      this.trigger(_events2.default.CORE_ACTIVE_CONTAINER_CHANGED, this._activeContainer);
    }

    /**
     * gets the active playback reference.
     * @property activePlayback
     * @type {Object}
     */

  }, {
    key: 'activePlayback',
    get: function get() {
      return this.activeContainer && this.activeContainer.playback;
    }
  }]);

  function Core(options) {
    (0, _classCallCheck3.default)(this, Core);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UIObject.call(this, options));

    _this.playerError = new _error2.default(options, _this);
    _this.configureDomRecycler();
    _this.playerInfo = _player_info2.default.getInstance(options.playerId);
    _this.firstResize = true;
    _this.plugins = [];
    _this.containers = [];
    //FIXME fullscreen api sucks
    _this._boundFullscreenHandler = function () {
      return _this.handleFullscreenChange();
    };
    (0, _clapprZepto2.default)(document).bind('fullscreenchange', _this._boundFullscreenHandler);
    (0, _clapprZepto2.default)(document).bind('MSFullscreenChange', _this._boundFullscreenHandler);
    (0, _clapprZepto2.default)(document).bind('mozfullscreenchange', _this._boundFullscreenHandler);
    _browser2.default.isMobile && (0, _clapprZepto2.default)(window).bind('resize', function (o) {
      _this.handleWindowResize(o);
    });
    return _this;
  }

  Core.prototype.configureDomRecycler = function configureDomRecycler() {
    var recycleVideo = this.options && this.options.playback && this.options.playback.recycleVideo;
    _utils.DomRecycler.configure({ recycleVideo: recycleVideo });
  };

  Core.prototype.createContainers = function createContainers(options) {
    this.defer = _clapprZepto2.default.Deferred();
    this.defer.promise(this);
    this.containerFactory = new _container_factory2.default(options, options.loader, this.i18n, this.playerError);
    this.prepareContainers();
  };

  Core.prototype.prepareContainers = function prepareContainers() {
    var _this2 = this;

    this.containerFactory.createContainers().then(function (containers) {
      return _this2.setupContainers(containers);
    }).then(function (containers) {
      return _this2.resolveOnContainersReady(containers);
    });
  };

  Core.prototype.updateSize = function updateSize() {
    this.isFullscreen() ? this.setFullscreen() : this.setPlayerSize();
  };

  Core.prototype.setFullscreen = function setFullscreen() {
    if (!_browser2.default.isiOS) {
      this.$el.addClass('fullscreen');
      this.$el.removeAttr('style');
      this.playerInfo.previousSize = { width: this.options.width, height: this.options.height };
      this.playerInfo.currentSize = { width: (0, _clapprZepto2.default)(window).width(), height: (0, _clapprZepto2.default)(window).height() };
    }
  };

  Core.prototype.setPlayerSize = function setPlayerSize() {
    this.$el.removeClass('fullscreen');
    this.playerInfo.currentSize = this.playerInfo.previousSize;
    this.playerInfo.previousSize = { width: (0, _clapprZepto2.default)(window).width(), height: (0, _clapprZepto2.default)(window).height() };
    this.resize(this.playerInfo.currentSize);
  };

  Core.prototype.resize = function resize(options) {
    if (!(0, _utils.isNumber)(options.height) && !(0, _utils.isNumber)(options.width)) {
      this.el.style.height = '' + options.height;
      this.el.style.width = '' + options.width;
    } else {
      this.el.style.height = options.height + 'px';
      this.el.style.width = options.width + 'px';
    }
    this.playerInfo.previousSize = { width: this.options.width, height: this.options.height };
    this.options.width = options.width;
    this.options.height = options.height;
    this.playerInfo.currentSize = options;
    this.triggerResize(this.playerInfo.currentSize);
  };

  Core.prototype.enableResizeObserver = function enableResizeObserver() {
    var _this3 = this;

    var checkSizeCallback = function checkSizeCallback() {
      _this3.triggerResize({ width: _this3.el.clientWidth, height: _this3.el.clientHeight });
    };
    this.resizeObserverInterval = setInterval(checkSizeCallback, 500);
  };

  Core.prototype.triggerResize = function triggerResize(newSize) {
    var thereWasChange = this.firstResize || this.oldHeight !== newSize.height || this.oldWidth !== newSize.width;
    if (thereWasChange) {
      this.oldHeight = newSize.height;
      this.oldWidth = newSize.width;
      this.playerInfo.computedSize = newSize;
      this.firstResize = false;
      _mediator2.default.trigger(this.options.playerId + ':' + _events2.default.PLAYER_RESIZE, newSize);
      this.trigger(_events2.default.CORE_RESIZE, newSize);
    }
  };

  Core.prototype.disableResizeObserver = function disableResizeObserver() {
    this.resizeObserverInterval && clearInterval(this.resizeObserverInterval);
  };

  Core.prototype.resolveOnContainersReady = function resolveOnContainersReady(containers) {
    var _this4 = this;

    _clapprZepto2.default.when.apply(_clapprZepto2.default, containers).done(function () {
      _this4.defer.resolve(_this4);
      _this4.ready = true;
      _this4.trigger(_events2.default.CORE_READY);
    });
  };

  Core.prototype.addPlugin = function addPlugin(plugin) {
    this.plugins.push(plugin);
  };

  Core.prototype.hasPlugin = function hasPlugin(name) {
    return !!this.getPlugin(name);
  };

  Core.prototype.getPlugin = function getPlugin(name) {
    return this.plugins.filter(function (plugin) {
      return plugin.name === name;
    })[0];
  };

  Core.prototype.load = function load(sources, mimeType) {
    this.options.mimeType = mimeType;
    sources = sources && sources.constructor === Array ? sources : [sources];
    this.options.sources = sources;
    this.containers.forEach(function (container) {
      return container.destroy();
    });
    this.containerFactory.options = _clapprZepto2.default.extend(this.options, { sources: sources });
    this.prepareContainers();
  };

  Core.prototype.destroy = function destroy() {
    this.disableResizeObserver();
    this.containers.forEach(function (container) {
      return container.destroy();
    });
    this.plugins.forEach(function (plugin) {
      return plugin.destroy();
    });
    this.$el.remove();
    (0, _clapprZepto2.default)(document).unbind('fullscreenchange', this._boundFullscreenHandler);
    (0, _clapprZepto2.default)(document).unbind('MSFullscreenChange', this._boundFullscreenHandler);
    (0, _clapprZepto2.default)(document).unbind('mozfullscreenchange', this._boundFullscreenHandler);
    this.stopListening();
  };

  Core.prototype.handleFullscreenChange = function handleFullscreenChange() {
    this.trigger(_events2.default.CORE_FULLSCREEN, this.isFullscreen());
    this.updateSize();
  };

  Core.prototype.handleWindowResize = function handleWindowResize(event) {
    var orientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
    if (this._screenOrientation === orientation) return;
    this._screenOrientation = orientation;
    this.triggerResize({ width: this.el.clientWidth, height: this.el.clientHeight });
    this.trigger(_events2.default.CORE_SCREEN_ORIENTATION_CHANGED, {
      event: event,
      orientation: this._screenOrientation
    });
  };

  Core.prototype.removeContainer = function removeContainer(container) {
    this.stopListening(container);
    this.containers = this.containers.filter(function (c) {
      return c !== container;
    });
  };

  Core.prototype.setupContainer = function setupContainer(container) {
    this.listenTo(container, _events2.default.CONTAINER_DESTROYED, this.removeContainer);
    this.containers.push(container);
  };

  Core.prototype.setupContainers = function setupContainers(containers) {
    containers.forEach(this.setupContainer.bind(this));
    this.trigger(_events2.default.CORE_CONTAINERS_CREATED);
    this.renderContainers();
    this.activeContainer = containers[0];
    this.render();
    this.appendToParent();
    return this.containers;
  };

  Core.prototype.renderContainers = function renderContainers() {
    var _this5 = this;

    this.containers.forEach(function (container) {
      return _this5.el.appendChild(container.render().el);
    });
  };

  Core.prototype.createContainer = function createContainer(source, options) {
    var container = this.containerFactory.createContainer(source, options);
    this.setupContainer(container);
    this.el.appendChild(container.render().el);
    return container;
  };

  /**
   * @deprecated
   * This method currently exists for retrocompatibility reasons.
   * If you want the current container reference, use the activeContainer getter.
   */


  Core.prototype.getCurrentContainer = function getCurrentContainer() {
    return this.activeContainer;
  };

  /**
   * @deprecated
   * This method currently exists for retrocompatibility reasons.
   * If you want the current playback reference, use the activePlayback getter.
   */


  Core.prototype.getCurrentPlayback = function getCurrentPlayback() {
    return this.activePlayback;
  };

  Core.prototype.getPlaybackType = function getPlaybackType() {
    return this.activeContainer && this.activeContainer.getPlaybackType();
  };

  Core.prototype.isFullscreen = function isFullscreen() {
    // Ensure current instance is in fullscreen mode by checking fullscreen element
    var el = _browser2.default.isiOS ? this.activeContainer && this.activeContainer.el || this.el : this.el;
    return _utils.Fullscreen.fullscreenElement() === el;
  };

  Core.prototype.toggleFullscreen = function toggleFullscreen() {
    if (this.isFullscreen()) {
      _utils.Fullscreen.cancelFullscreen();
      !_browser2.default.isiOS && this.$el.removeClass('fullscreen nocursor');
    } else {
      _utils.Fullscreen.requestFullscreen(_browser2.default.isiOS ? this.activeContainer.el : this.el);
      !_browser2.default.isiOS && this.$el.addClass('fullscreen');
    }
  };

  Core.prototype.onMouseMove = function onMouseMove(event) {
    this.trigger(_events2.default.CORE_MOUSE_MOVE, event);
  };

  Core.prototype.onMouseLeave = function onMouseLeave(event) {
    this.trigger(_events2.default.CORE_MOUSE_LEAVE, event);
  };

  /**
   * enables to configure the container after its creation
   * @method configure
   * @param {Object} options all the options to change in form of a javascript object
   */


  Core.prototype.configure = function configure(options) {
    var _this6 = this;

    this._options = _clapprZepto2.default.extend(this._options, options);
    this.configureDomRecycler();

    var sources = options.source || options.sources;
    sources && this.load(sources, options.mimeType || this.options.mimeType);

    this.trigger(_events2.default.CORE_OPTIONS_CHANGE, options); // Trigger with newly provided options
    this.containers.forEach(function (container) {
      return container.configure(_this6.options);
    });
  };

  Core.prototype.appendToParent = function appendToParent() {
    var hasCoreParent = this.$el.parent() && this.$el.parent().length;
    !hasCoreParent && this.$el.appendTo(this.options.parentElement);
  };

  Core.prototype.render = function render() {
    if (!style) style = _styler2.default.getStyleFor(_fonts2.default, { baseUrl: this.options.baseUrl });

    (0, _clapprZepto2.default)('head').append(style);

    this.options.width = this.options.width || this.$el.width();
    this.options.height = this.options.height || this.$el.height();
    var size = { width: this.options.width, height: this.options.height };
    this.playerInfo.previousSize = this.playerInfo.currentSize = this.playerInfo.computedSize = size;
    this.updateSize();

    this.previousSize = { width: this.$el.width(), height: this.$el.height() };

    this.enableResizeObserver();

    return this;
  };

  return Core;
}(_ui_object2.default);

exports.default = Core;


(0, _assign2.default)(Core.prototype, _error_mixin2.default);
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/core/index.js":
/*!**************************************!*\
  !*** ./src/components/core/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __webpack_require__(/*! ./core */ "./src/components/core/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/core/public/Roboto.ttf":
/*!***********************************************!*\
  !*** ./src/components/core/public/Roboto.ttf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<%=baseUrl%>/38861cba61c66739c1452c3a71e39852.ttf";

/***/ }),

/***/ "./src/components/core/public/fonts.css":
/*!**********************************************!*\
  !*** ./src/components/core/public/fonts.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(" + escape(__webpack_require__(/*! ./Roboto.ttf */ "./src/components/core/public/Roboto.ttf")) + ") format(\"truetype\");\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/components/core/public/style.scss":
/*!***********************************************!*\
  !*** ./src/components/core/public/style.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/components/core/public/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/core_factory/core_factory.js":
/*!*****************************************************!*\
  !*** ./src/components/core_factory/core_factory.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _base_object = __webpack_require__(/*! ../../base/base_object */ "./src/base/base_object.js");

var _base_object2 = _interopRequireDefault(_base_object);

var _core = __webpack_require__(/*! ../core */ "./src/components/core/index.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The Core Factory is responsible for instantiate the core and it's plugins.
 * @class CoreFactory
 * @constructor
 * @extends BaseObject
 * @module components
 */
// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var CoreFactory = function (_BaseObject) {
  (0, _inherits3.default)(CoreFactory, _BaseObject);
  (0, _createClass3.default)(CoreFactory, [{
    key: 'loader',
    get: function get() {
      return this.player.loader;
    }

    /**
     * it builds the core factory
     * @method constructor
     * @param {Player} player the player object
     */

  }]);

  function CoreFactory(player) {
    (0, _classCallCheck3.default)(this, CoreFactory);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this));

    _this.player = player;
    _this._options = player.options;
    return _this;
  }

  /**
   * creates a core and its plugins
   * @method create
   * @return {Core} created core
   */


  CoreFactory.prototype.create = function create() {
    this.options.loader = this.loader;
    this.core = new _core2.default(this.options);
    this.addCorePlugins();
    this.core.createContainers(this.options);
    return this.core;
  };

  /**
   * given the core plugins (`loader.corePlugins`) it builds each one
   * @method addCorePlugins
   * @return {Core} the core with all plugins
   */


  CoreFactory.prototype.addCorePlugins = function addCorePlugins() {
    var _this2 = this;

    this.loader.corePlugins.forEach(function (Plugin) {
      var plugin = new Plugin(_this2.core);
      _this2.core.addPlugin(plugin);
      _this2.setupExternalInterface(plugin);
    });
    return this.core;
  };

  CoreFactory.prototype.setupExternalInterface = function setupExternalInterface(plugin) {
    var externalFunctions = plugin.getExternalInterface();
    for (var key in externalFunctions) {
      this.player[key] = externalFunctions[key].bind(plugin);
      this.core[key] = externalFunctions[key].bind(plugin);
    }
  };

  return CoreFactory;
}(_base_object2.default);

exports.default = CoreFactory;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/core_factory/index.js":
/*!**********************************************!*\
  !*** ./src/components/core_factory/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core_factory = __webpack_require__(/*! ./core_factory */ "./src/components/core_factory/core_factory.js");

var _core_factory2 = _interopRequireDefault(_core_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core_factory2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/error/error.js":
/*!***************************************!*\
  !*** ./src/components/error/error.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _base_object = __webpack_require__(/*! ../../base/base_object */ "./src/base/base_object.js");

var _base_object2 = _interopRequireDefault(_base_object);

var _log = __webpack_require__(/*! ../../plugins/log */ "./src/plugins/log/index.js");

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The PlayerError is responsible to receive and propagate errors.
 * @class PlayerError
 * @constructor
 * @extends BaseObject
 * @module components
 */
var PlayerError = function (_BaseObject) {
  (0, _inherits3.default)(PlayerError, _BaseObject);
  (0, _createClass3.default)(PlayerError, [{
    key: 'name',
    get: function get() {
      return 'error';
    }

    /**
     * @property Levels
     * @type {Object} object with error levels
     */

  }], [{
    key: 'Levels',
    get: function get() {
      return {
        FATAL: 'FATAL',
        WARN: 'WARN',
        INFO: 'INFO'
      };
    }
  }]);

  function PlayerError() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var core = arguments[1];
    (0, _classCallCheck3.default)(this, PlayerError);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this, options));

    _this.core = core;
    return _this;
  }

  /**
   * creates and trigger an error.
   * @method createError
   * @param {Object} err should be an object with code, description, level, origin, scope and raw error.
   */


  PlayerError.prototype.createError = function createError(err) {
    if (!this.core) {
      _log2.default.warn(this.name, 'Core is not set. Error: ', err);
      return;
    }
    this.core.trigger(_events2.default.ERROR, err);
  };

  return PlayerError;
}(_base_object2.default);

exports.default = PlayerError;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/error/index.js":
/*!***************************************!*\
  !*** ./src/components/error/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error = __webpack_require__(/*! ./error */ "./src/components/error/error.js");

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _error2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/loader/index.js":
/*!****************************************!*\
  !*** ./src/components/loader/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loader = __webpack_require__(/*! ./loader */ "./src/components/loader/loader.js");

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _loader2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/loader/loader.js":
/*!*****************************************!*\
  !*** ./src/components/loader/loader.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = __webpack_require__(/*! babel-runtime/core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _base_object = __webpack_require__(/*! ../../base/base_object */ "./src/base/base_object.js");

var _base_object2 = _interopRequireDefault(_base_object);

var _player_info = __webpack_require__(/*! ../player_info */ "./src/components/player_info.js");

var _player_info2 = _interopRequireDefault(_player_info);

var _html5_video = __webpack_require__(/*! ../../playbacks/html5_video */ "./src/playbacks/html5_video/index.js");

var _html5_video2 = _interopRequireDefault(_html5_video);

var _html5_audio = __webpack_require__(/*! ../../playbacks/html5_audio */ "./src/playbacks/html5_audio/index.js");

var _html5_audio2 = _interopRequireDefault(_html5_audio);

var _hls = __webpack_require__(/*! ../../playbacks/hls */ "./src/playbacks/hls/index.js");

var _hls2 = _interopRequireDefault(_hls);

var _html_img = __webpack_require__(/*! ../../playbacks/html_img */ "./src/playbacks/html_img/index.js");

var _html_img2 = _interopRequireDefault(_html_img);

var _no_op = __webpack_require__(/*! ../../playbacks/no_op */ "./src/playbacks/no_op/index.js");

var _no_op2 = _interopRequireDefault(_no_op);

var _spinner_three_bounce = __webpack_require__(/*! ../../plugins/spinner_three_bounce */ "./src/plugins/spinner_three_bounce/index.js");

var _spinner_three_bounce2 = _interopRequireDefault(_spinner_three_bounce);

var _stats = __webpack_require__(/*! ../../plugins/stats */ "./src/plugins/stats/index.js");

var _stats2 = _interopRequireDefault(_stats);

var _watermark = __webpack_require__(/*! ../../plugins/watermark */ "./src/plugins/watermark/index.js");

var _watermark2 = _interopRequireDefault(_watermark);

var _poster = __webpack_require__(/*! ../../plugins/poster */ "./src/plugins/poster/index.js");

var _poster2 = _interopRequireDefault(_poster);

var _google_analytics = __webpack_require__(/*! ../../plugins/google_analytics */ "./src/plugins/google_analytics/index.js");

var _google_analytics2 = _interopRequireDefault(_google_analytics);

var _click_to_pause = __webpack_require__(/*! ../../plugins/click_to_pause */ "./src/plugins/click_to_pause/index.js");

var _click_to_pause2 = _interopRequireDefault(_click_to_pause);

var _media_control = __webpack_require__(/*! ../../plugins/media_control */ "./src/plugins/media_control/index.js");

var _media_control2 = _interopRequireDefault(_media_control);

var _dvr_controls = __webpack_require__(/*! ../../plugins/dvr_controls */ "./src/plugins/dvr_controls/index.js");

var _dvr_controls2 = _interopRequireDefault(_dvr_controls);

var _closed_captions = __webpack_require__(/*! ../../plugins/closed_captions */ "./src/plugins/closed_captions/index.js");

var _closed_captions2 = _interopRequireDefault(_closed_captions);

var _favicon = __webpack_require__(/*! ../../plugins/favicon */ "./src/plugins/favicon/index.js");

var _favicon2 = _interopRequireDefault(_favicon);

var _seek_time = __webpack_require__(/*! ../../plugins/seek_time */ "./src/plugins/seek_time/index.js");

var _seek_time2 = _interopRequireDefault(_seek_time);

var _sources = __webpack_require__(/*! ../../plugins/sources */ "./src/plugins/sources.js");

var _sources2 = _interopRequireDefault(_sources);

var _end_video = __webpack_require__(/*! ../../plugins/end_video */ "./src/plugins/end_video.js");

var _end_video2 = _interopRequireDefault(_end_video);

var _strings = __webpack_require__(/*! ../../plugins/strings */ "./src/plugins/strings.js");

var _strings2 = _interopRequireDefault(_strings);

var _error_screen = __webpack_require__(/*! ../../plugins/error_screen */ "./src/plugins/error_screen/index.js");

var _error_screen2 = _interopRequireDefault(_error_screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * It keeps a list of the default plugins (playback, container, core) and it merges external plugins with its internals.
 * @class Loader
 * @constructor
 * @extends BaseObject
 * @module components
 */


/* Playback Plugins */
// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var Loader = function (_BaseObject) {
  (0, _inherits3.default)(Loader, _BaseObject);

  /**
   * builds the loader
   * @method constructor
   * @param {Object} externalPlugins the external plugins
   * @param {Number} playerId you can embed multiple instances of clappr, therefore this is the unique id of each one.
   */
  function Loader() {
    var externalPlugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var playerId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var useOnlyPlainHtml5Plugins = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    (0, _classCallCheck3.default)(this, Loader);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this));

    _this.playerId = playerId;
    _this.playbackPlugins = [];

    if (!useOnlyPlainHtml5Plugins) {
      _this.playbackPlugins = [].concat((0, _toConsumableArray3.default)(_this.playbackPlugins), [_hls2.default]);
    }

    _this.playbackPlugins = [].concat((0, _toConsumableArray3.default)(_this.playbackPlugins), [_html5_video2.default, _html5_audio2.default]);

    _this.playbackPlugins = [].concat((0, _toConsumableArray3.default)(_this.playbackPlugins), [_html_img2.default, _no_op2.default]);

    _this.containerPlugins = [_spinner_three_bounce2.default, _watermark2.default, _poster2.default, _stats2.default, _google_analytics2.default, _click_to_pause2.default];
    _this.corePlugins = [_media_control2.default, _dvr_controls2.default, _closed_captions2.default, _favicon2.default, _seek_time2.default, _sources2.default, _end_video2.default, _error_screen2.default, _strings2.default];

    if (!Array.isArray(externalPlugins)) _this.validateExternalPluginsType(externalPlugins);

    _this.addExternalPlugins(externalPlugins);
    return _this;
  }

  /**
   * groups by type the external plugins that were passed through `options.plugins` it they're on a flat array
   * @method addExternalPlugins
   * @private
   * @param {Object} an config object or an array of plugins
   * @return {Object} plugins the config object with the plugins separated by type
   */


  Loader.prototype.groupPluginsByType = function groupPluginsByType(plugins) {
    if (Array.isArray(plugins)) {
      plugins = plugins.reduce(function (memo, plugin) {
        memo[plugin.type] || (memo[plugin.type] = []);
        memo[plugin.type].push(plugin);
        return memo;
      }, {});
    }
    return plugins;
  };

  Loader.prototype.removeDups = function removeDups(list) {
    var groupUp = function groupUp(plugins, plugin) {
      plugins[plugin.prototype.name] && delete plugins[plugin.prototype.name];
      plugins[plugin.prototype.name] = plugin;
      return plugins;
    };
    var pluginsMap = list.reduceRight(groupUp, (0, _create2.default)(null));

    var plugins = [];
    for (var key in pluginsMap) {
      plugins.unshift(pluginsMap[key]);
    }return plugins;
  };

  /**
   * adds all the external plugins that were passed through `options.plugins`
   * @method addExternalPlugins
   * @private
   * @param {Object} plugins the config object with all plugins
   */


  Loader.prototype.addExternalPlugins = function addExternalPlugins(plugins) {
    plugins = this.groupPluginsByType(plugins);
    if (plugins.playback) this.playbackPlugins = this.removeDups(plugins.playback.concat(this.playbackPlugins));

    if (plugins.container) this.containerPlugins = this.removeDups(plugins.container.concat(this.containerPlugins));

    if (plugins.core) this.corePlugins = this.removeDups(plugins.core.concat(this.corePlugins));

    _player_info2.default.getInstance(this.playerId).playbackPlugins = this.playbackPlugins;
  };

  /**
   * validate if the external plugins that were passed through `options.plugins` are associated to the correct type
   * @method validateExternalPluginsType
   * @private
   * @param {Object} plugins the config object with all plugins
   */


  Loader.prototype.validateExternalPluginsType = function validateExternalPluginsType(plugins) {
    var plugintypes = ['playback', 'container', 'core'];
    plugintypes.forEach(function (type) {
      (plugins[type] || []).forEach(function (el) {
        var errorMessage = 'external ' + el.type + ' plugin on ' + type + ' array';
        if (el.type !== type) throw new ReferenceError(errorMessage);
      });
    });
  };

  return Loader;
}(_base_object2.default);

/* Core Plugins */


/* Container Plugins */


exports.default = Loader;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/mediator.js":
/*!************************************!*\
  !*** ./src/components/mediator.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _events = __webpack_require__(/*! ../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var events = new _events2.default(); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

/**
 * The mediator is a singleton for handling global events.
 */

var Mediator = function Mediator() {
  (0, _classCallCheck3.default)(this, Mediator);
};

exports.default = Mediator;


Mediator.on = function (name, callback, context) {
  events.on(name, callback, context);
  return;
};

Mediator.once = function (name, callback, context) {
  events.once(name, callback, context);
  return;
};

Mediator.off = function (name, callback, context) {
  events.off(name, callback, context);
  return;
};

Mediator.trigger = function (name) {
  for (var _len = arguments.length, opts = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }

  events.trigger.apply(events, [name].concat(opts));
  return;
};

Mediator.stopListening = function (obj, name, callback) {
  events.stopListening(obj, name, callback);
  return;
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/player.js":
/*!**********************************!*\
  !*** ./src/components/player.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ../base/utils */ "./src/base/utils.js");

var _base_object = __webpack_require__(/*! ../base/base_object */ "./src/base/base_object.js");

var _base_object2 = _interopRequireDefault(_base_object);

var _events = __webpack_require__(/*! ../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _browser = __webpack_require__(/*! ./browser */ "./src/components/browser/index.js");

var _browser2 = _interopRequireDefault(_browser);

var _core_factory = __webpack_require__(/*! ./core_factory */ "./src/components/core_factory/index.js");

var _core_factory2 = _interopRequireDefault(_core_factory);

var _loader = __webpack_require__(/*! ./loader */ "./src/components/loader/index.js");

var _loader2 = _interopRequireDefault(_loader);

var _player_info = __webpack_require__(/*! ./player_info */ "./src/components/player_info.js");

var _player_info2 = _interopRequireDefault(_player_info);

var _error_mixin = __webpack_require__(/*! ../base/error_mixin */ "./src/base/error_mixin.js");

var _error_mixin2 = _interopRequireDefault(_error_mixin);

var _clapprZepto = __webpack_require__(/*! clappr-zepto */ "./node_modules/clappr-zepto/zepto.js");

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = (0, _utils.currentScriptUrl)().replace(/\/[^/]+$/, '');

/**
 * @class Player
 * @constructor
 * @extends BaseObject
 * @module components
 * @example
 * ### Using the Player
 *
 * Add the following script on your HTML:
 * ```html
 * <head>
 *   <script type="text/javascript" src="http://cdn.clappr.io/latest/clappr.min.js"></script>
 * </head>
 * ```
 * Now, create the player:
 * ```html
 * <body>
 *   <div id="player"></div>
 *   <script>
 *     var player = new Clappr.Player({source: "http://your.video/here.mp4", parentId: "#player"});
 *   </script>
 * </body>
 * ```
 */
// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var Player = function (_BaseObject) {
  (0, _inherits3.default)(Player, _BaseObject);
  (0, _createClass3.default)(Player, [{
    key: 'loader',
    set: function set(loader) {
      this._loader = loader;
    },
    get: function get() {
      if (!this._loader) this._loader = new _loader2.default(this.options.plugins || {}, this.options.playerId);

      return this._loader;
    }

    /**
     * Determine if the playback has ended.
     * @property ended
     * @type Boolean
     */

  }, {
    key: 'ended',
    get: function get() {
      return this.core.activeContainer.ended;
    }

    /**
     * Determine if the playback is having to buffer in order for
     * playback to be smooth.
     * (i.e if a live stream is playing smoothly, this will be false)
     * @property buffering
     * @type Boolean
     */

  }, {
    key: 'buffering',
    get: function get() {
      return this.core.activeContainer.buffering;
    }

    /*
     * determine if the player is ready.
     * @property isReady
     * @type {Boolean} `true` if the player is ready. ie PLAYER_READY event has fired
     */

  }, {
    key: 'isReady',
    get: function get() {
      return !!this._ready;
    }

    /**
     * An events map that allows the user to add custom callbacks in player's options.
     * @property eventsMapping
     * @type {Object}
     */

  }, {
    key: 'eventsMapping',
    get: function get() {
      return {
        onReady: _events2.default.PLAYER_READY,
        onResize: _events2.default.PLAYER_RESIZE,
        onPlay: _events2.default.PLAYER_PLAY,
        onPause: _events2.default.PLAYER_PAUSE,
        onStop: _events2.default.PLAYER_STOP,
        onEnded: _events2.default.PLAYER_ENDED,
        onSeek: _events2.default.PLAYER_SEEK,
        onError: _events2.default.PLAYER_ERROR,
        onTimeUpdate: _events2.default.PLAYER_TIMEUPDATE,
        onVolumeUpdate: _events2.default.PLAYER_VOLUMEUPDATE,
        onSubtitleAvailable: _events2.default.PLAYER_SUBTITLE_AVAILABLE
      };
    }

    /**
     * @typedef {Object} PlaybackConfig
     * @prop {boolean} disableContextMenu
     * disables the context menu (right click) on the video element if a HTML5Video playback is used.
     * @prop {boolean} preload
     * video will be preloaded according to `preload` attribute options **default**: `'metadata'`
     * @prop {boolean} controls
     * enabled/disables displaying controls
     * @prop {boolean} crossOrigin
     * enables cross-origin capability for media-resources
     * @prop {boolean} playInline
     * enables in-line video elements
     * @prop {boolean} audioOnly
     * enforce audio-only playback (when possible)
     * @prop {Object} externalTracks
     * pass externaly loaded track to playback
     * @prop {Number} [maxBufferLength]
     * The default behavior for the **HLS playback** is to keep buffering indefinitely, even on VoD.
     * This replicates the behavior for progressive download, which continues buffering when pausing the video, thus making the video available for playback even on slow networks.
     * To change this behavior use `maxBufferLength` where **value is in seconds**.
     * @prop {Number} [maxBackBufferLength]
     * After how much distance of the playhead data should be pruned from the buffer (influences memory consumption
     * of adaptive media-engines like Hls.js or Shaka)
     * @prop {Number} [minBufferLength]
     * After how much data in the buffer at least we attempt to consume it (influences QoS-related behavior
     * of adaptive media-engines like Hls.js or Shaka). If this is too low, and the available bandwidth is varying a lot
     * and too close to the streamed bitrate, we may continuously hit under-runs.
     * @prop {Number} [initialBandwidthEstimate]
     * define an initial bandwidth "guess" (or previously stored/established value) for underlying adaptive-bitreate engines
     * of adaptive playback implementations, like Hls.js or Shaka
     * @prop {Number} [maxAdaptiveBitrate]
     * Limits the streamed bitrate (for adaptive media-engines in underlying playback implementations)
     * @prop {Object} [maxAdaptiveVideoDimensions]
     * Limits the video dimensions in adaptive media-engines. Should be a literal object with `height` and `width`.
     * @prop {Boolean}[enableAutomaticABR] **default**: `true`
     * Allows to enable/disable automatic bitrate switching in adaptive media-engines
     * @prop {String} [preferredTextLanguage] **default**: `'pt-BR'`
     * Allows to set a preferred text language, that may be enabled by the media-engine if available.
     * @prop {String} [preferredAudioLanguage] **default**: `'pt-BR'`
     * Allows to set a preferred audio language, that may be enabled by the media-engine if available.
     */

    /**
     * ## Player's constructor
     *
     * You might pass the options object to build the player.
     * ```javascript
     * var options = {source: "http://example.com/video.mp4", param1: "val1"};
     * var player = new Clappr.Player(options);
     * ```
     *
     * @method constructor
     * @param {Object} options Data
     * options to build a player instance
     * @param {Number} [options.width]
     * player's width **default**: `640`
     * @param {Number} [options.height]
     * player's height **default**: `360`
     * @param {String} [options.parentId]
     * the id of the element on the page that the player should be inserted into
     * @param {Object} [options.parent]
     * a reference to a dom element that the player should be inserted into
     * @param {String} [options.source]
     * The media source URL, or {source: <<source URL>>, mimeType: <<source mime type>>}
     * @param {Object} [options.sources]
     * An array of media source URL's, or an array of {source: <<source URL>>, mimeType: <<source mime type>>}
     * @param {Boolean} [options.autoPlay]
     * automatically play after page load **default**: `false`
     * @param {Boolean} [options.loop]
     * automatically replay after it ends **default**: `false`
     * @param {Boolean} [options.chromeless]
     * player acts in chromeless mode **default**: `false`
     * @param {Boolean} [options.allowUserInteraction]
     * whether or not the player should handle click events when in chromeless mode **default**: `false` on desktops browsers, `true` on mobile.
     * @param {Boolean} [options.disableKeyboardShortcuts]
     * disable keyboard shortcuts. **default**: `false`. `true` if `allowUserInteraction` is `false`.
     * @param {Boolean} [options.mute]
     * start the video muted **default**: `false`
     * @param {String} [options.mimeType]
     * add `mimeType: "application/vnd.apple.mpegurl"` if you need to use a url without extension.
     * @param {Boolean} [options.actualLiveTime]
     * show duration and seek time relative to actual time.
     * @param {String} [options.actualLiveServerTime]
     * specify server time as a string, format: "2015/11/26 06:01:03". This option is meant to be used with actualLiveTime.
     * @param {Boolean} [options.persistConfig]
     * persist player's settings (volume) through the same domain **default**: `true`
     * @param {String} [options.preload] @deprecated
     * video will be preloaded according to `preload` attribute options **default**: `'metadata'`
     * @param {Number} [options.maxBufferLength] @deprecated
     * the default behavior for the **HLS playback** is to keep buffering indefinitely, even on VoD.
     * This replicates the behavior for progressive download, which continues buffering when pausing the video, thus making the video available for playback even on slow networks.
     * To change this behavior use `maxBufferLength` where **value is in seconds**.
     * @param {String} [options.gaAccount]
     * enable Google Analytics events dispatch **(play/pause/stop/buffering/etc)** by adding your `gaAccount`
     * @param {String} [options.gaTrackerName]
     * besides `gaAccount` you can optionally, pass your favorite trackerName as `gaTrackerName`
     * @param {Object} [options.mediacontrol]
     * customize control bar colors, example: `mediacontrol: {seekbar: "#E113D3", buttons: "#66B2FF"}`
     * @param {Boolean} [options.hideMediaControl]
     * control media control auto hide **default**: `true`
     * @param {Boolean} [options.hideVolumeBar]
     * when embedded with width less than 320, volume bar will hide. You can force this behavior for all sizes by adding `true` **default**: `false`
     * @param {String} [options.watermark]
     * put `watermark: 'http://url/img.png'` on your embed parameters to automatically add watermark on your video.
     * You can customize corner position by defining position parameter. Positions can be `bottom-left`, `bottom-right`, `top-left` and `top-right`.
     * @param {String} [options.watermarkLink]
     * `watermarkLink: 'http://example.net/'` - define URL to open when the watermark is clicked. If not provided watermark will not be clickable.
     * @param {Boolean} [options.disableVideoTagContextMenu] @deprecated
     * disables the context menu (right click) on the video element if a HTML5Video playback is used.
     * @param {Boolean} [options.autoSeekFromUrl]
     * Automatically seek to the seconds provided in the url (e.g example.com?t=100) **default**: `true`
     * @param {Boolean} [options.exitFullscreenOnEnd]
     * Automatically exit full screen when the media finishes. **default**: `true`
     * @param {String} [options.poster]
     * define a poster by adding its address `poster: 'http://url/img.png'`. It will appear after video embed, disappear on play and go back when user stops the video.
     * @param {String} [options.playbackNotSupportedMessage]
     * define a custom message to be displayed when a playback is not supported.
     * @param {Object} [options.events]
     * Specify listeners which will be registered with their corresponding player events.
     * E.g. onReady -> "PLAYER_READY", onTimeUpdate -> "PLAYER_TIMEUPDATE"
     * @param {PlaybackConfig} [options.playback]
     * Generic `Playback` component related configuration
     * @param {Boolean} [options.disableErrorScreen]
     * disables the error screen plugin.
     * @param {Number} [options.autoPlayTimeout]
     * autoplay check timeout.
     */

  }]);

  function Player(options) {
    (0, _classCallCheck3.default)(this, Player);

    var _this = (0, _possibleConstructorReturn3.default)(this, _BaseObject.call(this, options));

    var playbackDefaultOptions = { recycleVideo: true };
    var defaultOptions = {
      playerId: (0, _utils.uniqueId)(''),
      persistConfig: true,
      width: 640,
      height: 360,
      baseUrl: baseUrl,
      allowUserInteraction: _browser2.default.isMobile,
      playback: playbackDefaultOptions
    };
    _this._options = _clapprZepto2.default.extend(defaultOptions, options);
    _this.options.sources = _this._normalizeSources(options);
    if (!_this.options.chromeless) {
      // "allowUserInteraction" cannot be false if not in chromeless mode.
      _this.options.allowUserInteraction = true;
    }
    if (!_this.options.allowUserInteraction) {
      // if user iteraction is not allowed ensure keyboard shortcuts are disabled
      _this.options.disableKeyboardShortcuts = true;
    }
    _this._registerOptionEventListeners(_this.options.events);
    _this._coreFactory = new _core_factory2.default(_this);
    _this.playerInfo = _player_info2.default.getInstance(_this.options.playerId);
    _this.playerInfo.currentSize = { width: options.width, height: options.height };
    _this.playerInfo.options = _this.options;
    if (_this.options.parentId) _this.setParentId(_this.options.parentId);else if (_this.options.parent) _this.attachTo(_this.options.parent);

    return _this;
  }

  /**
   * Specify a `parentId` to the player.
   * @method setParentId
   * @param {String} parentId the element parent id.
   * @return {Player} itself
   */


  Player.prototype.setParentId = function setParentId(parentId) {
    var el = document.querySelector(parentId);
    if (el) this.attachTo(el);

    return this;
  };

  /**
   * You can use this method to attach the player to a given element. You don't need to do this when you specify it during the player instantiation passing the `parentId` param.
   * @method attachTo
   * @param {Object} element a given element.
   * @return {Player} itself
   */


  Player.prototype.attachTo = function attachTo(element) {
    this.options.parentElement = element;
    this.core = this._coreFactory.create();
    this._addEventListeners();
    return this;
  };

  Player.prototype._addEventListeners = function _addEventListeners() {
    if (!this.core.isReady) this.listenToOnce(this.core, _events2.default.CORE_READY, this._onReady);else this._onReady();

    this.listenTo(this.core, _events2.default.CORE_ACTIVE_CONTAINER_CHANGED, this._containerChanged);
    this.listenTo(this.core, _events2.default.CORE_FULLSCREEN, this._onFullscreenChange);
    this.listenTo(this.core, _events2.default.CORE_RESIZE, this._onResize);
    return this;
  };

  Player.prototype._addContainerEventListeners = function _addContainerEventListeners() {
    var container = this.core.activeContainer;
    if (container) {
      this.listenTo(container, _events2.default.CONTAINER_PLAY, this._onPlay);
      this.listenTo(container, _events2.default.CONTAINER_PAUSE, this._onPause);
      this.listenTo(container, _events2.default.CONTAINER_STOP, this._onStop);
      this.listenTo(container, _events2.default.CONTAINER_ENDED, this._onEnded);
      this.listenTo(container, _events2.default.CONTAINER_SEEK, this._onSeek);
      this.listenTo(container, _events2.default.CONTAINER_ERROR, this._onError);
      this.listenTo(container, _events2.default.CONTAINER_TIMEUPDATE, this._onTimeUpdate);
      this.listenTo(container, _events2.default.CONTAINER_VOLUME, this._onVolumeUpdate);
      this.listenTo(container, _events2.default.CONTAINER_SUBTITLE_AVAILABLE, this._onSubtitleAvailable);
    }
    return this;
  };

  Player.prototype._registerOptionEventListeners = function _registerOptionEventListeners() {
    var _this2 = this;

    var newEvents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var hasNewEvents = (0, _keys2.default)(newEvents).length > 0;
    hasNewEvents && (0, _keys2.default)(events).forEach(function (userEvent) {
      var eventType = _this2.eventsMapping[userEvent];
      eventType && _this2.off(eventType, events[userEvent]);
    });

    (0, _keys2.default)(newEvents).forEach(function (userEvent) {
      var eventType = _this2.eventsMapping[userEvent];
      if (eventType) {
        var eventFunction = newEvents[userEvent];
        eventFunction = typeof eventFunction === 'function' && eventFunction;
        eventFunction && _this2.on(eventType, eventFunction);
      }
    });
    return this;
  };

  Player.prototype._containerChanged = function _containerChanged() {
    this.stopListening();
    this._addEventListeners();
  };

  Player.prototype._onReady = function _onReady() {
    this._ready = true;
    this._addContainerEventListeners();
    this.trigger(_events2.default.PLAYER_READY);
  };

  Player.prototype._onFullscreenChange = function _onFullscreenChange(fullscreen) {
    this.trigger(_events2.default.PLAYER_FULLSCREEN, fullscreen);
  };

  Player.prototype._onVolumeUpdate = function _onVolumeUpdate(volume) {
    this.trigger(_events2.default.PLAYER_VOLUMEUPDATE, volume);
  };

  Player.prototype._onSubtitleAvailable = function _onSubtitleAvailable() {
    this.trigger(_events2.default.PLAYER_SUBTITLE_AVAILABLE);
  };

  Player.prototype._onResize = function _onResize(size) {
    this.trigger(_events2.default.PLAYER_RESIZE, size);
  };

  Player.prototype._onPlay = function _onPlay() {
    this.trigger(_events2.default.PLAYER_PLAY);
  };

  Player.prototype._onPause = function _onPause() {
    this.trigger(_events2.default.PLAYER_PAUSE);
  };

  Player.prototype._onStop = function _onStop() {
    this.trigger(_events2.default.PLAYER_STOP, this.getCurrentTime());
  };

  Player.prototype._onEnded = function _onEnded() {
    this.trigger(_events2.default.PLAYER_ENDED);
  };

  Player.prototype._onSeek = function _onSeek(time) {
    this.trigger(_events2.default.PLAYER_SEEK, time);
  };

  Player.prototype._onTimeUpdate = function _onTimeUpdate(timeProgress) {
    this.trigger(_events2.default.PLAYER_TIMEUPDATE, timeProgress);
  };

  Player.prototype._onError = function _onError(error) {
    this.trigger(_events2.default.PLAYER_ERROR, error);
  };

  Player.prototype._normalizeSources = function _normalizeSources(options) {
    var sources = options.sources || (options.source !== undefined ? [options.source] : []);
    return sources.length === 0 ? [{ source: '', mimeType: '' }] : sources;
  };

  /**
   * resizes the current player canvas.
   * @method resize
   * @param {Object} size should be a literal object with `height` and `width`.
   * @return {Player} itself
   * @example
   * ```javascript
   * player.resize({height: 360, width: 640})
   * ```
   */


  Player.prototype.resize = function resize(size) {
    this.core.resize(size);
    return this;
  };

  /**
   * loads a new source.
   * @method load
   * @param {Array|String} sources source or sources of video.
   * An array item can be a string or {source: <<source URL>>, mimeType: <<source mime type>>}
   * @param {String} mimeType a mime type, example: `'application/vnd.apple.mpegurl'`
   * @param {Boolean} [autoPlay=false] whether playing should be started immediately
   * @return {Player} itself
   */


  Player.prototype.load = function load(sources, mimeType, autoPlay) {
    if (autoPlay !== undefined) this.configure({ autoPlay: !!autoPlay });

    this.core.load(sources, mimeType);
    return this;
  };

  /**
   * destroys the current player and removes it from the DOM.
   * @method destroy
   * @return {Player} itself
   */


  Player.prototype.destroy = function destroy() {
    this.stopListening();
    this.core.destroy();
    return this;
  };

  /**
   * Gives user consent to playback. Required by mobile device after a click event before Player.load().
   * @method consent
   * @return {Player} itself
   */


  Player.prototype.consent = function consent() {
    this.core.getCurrentPlayback().consent();
    return this;
  };

  /**
   * plays the current video (`source`).
   * @method play
   * @return {Player} itself
   */


  Player.prototype.play = function play() {
    this.core.activeContainer.play();
    return this;
  };

  /**
   * pauses the current video (`source`).
   * @method pause
   * @return {Player} itself
   */


  Player.prototype.pause = function pause() {
    this.core.activeContainer.pause();
    return this;
  };

  /**
   * stops the current video (`source`).
   * @method stop
   * @return {Player} itself
   */


  Player.prototype.stop = function stop() {
    this.core.activeContainer.stop();
    return this;
  };

  /**
   * seeks the current video (`source`). For example, `player.seek(120)` will seek to second 120 (2minutes) of the current video.
   * @method seek
   * @param {Number} time should be a number between 0 and the video duration.
   * @return {Player} itself
   */


  Player.prototype.seek = function seek(time) {
    this.core.activeContainer.seek(time);
    return this;
  };

  /**
   * seeks the current video (`source`). For example, `player.seek(50)` will seek to the middle of the current video.
   * @method seekPercentage
   * @param {Number} time should be a number between 0 and 100.
   * @return {Player} itself
   */


  Player.prototype.seekPercentage = function seekPercentage(percentage) {
    this.core.activeContainer.seekPercentage(percentage);
    return this;
  };

  /**
   * mutes the current video (`source`).
   * @method mute
   * @return {Player} itself
   */


  Player.prototype.mute = function mute() {
    this._mutedVolume = this.getVolume();
    this.setVolume(0);
    return this;
  };

  /**
   * unmutes the current video (`source`).
   * @method unmute
   * @return {Player} itself
   */


  Player.prototype.unmute = function unmute() {
    this.setVolume(typeof this._mutedVolume === 'number' ? this._mutedVolume : 100);
    this._mutedVolume = null;
    return this;
  };

  /**
   * checks if the player is playing.
   * @method isPlaying
   * @return {Boolean} `true` if the current source is playing, otherwise `false`
   */


  Player.prototype.isPlaying = function isPlaying() {
    return this.core.activeContainer.isPlaying();
  };

  /**
   * returns `true` if DVR is enable otherwise `false`.
   * @method isDvrEnabled
   * @return {Boolean}
   */


  Player.prototype.isDvrEnabled = function isDvrEnabled() {
    return this.core.activeContainer.isDvrEnabled();
  };

  /**
   * returns `true` if DVR is in use otherwise `false`.
   * @method isDvrInUse
   * @return {Boolean}
   */


  Player.prototype.isDvrInUse = function isDvrInUse() {
    return this.core.activeContainer.isDvrInUse();
  };

  /**
   * enables to configure a player after its creation
   * @method configure
   * @param {Object} options all the options to change in form of a javascript object
   * @return {Player} itself
   */


  Player.prototype.configure = function configure() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this._registerOptionEventListeners(options.events, this.options.events);
    this.core.configure(options);
    return this;
  };

  /**
   * get a plugin by its name.
   * @method getPlugin
   * @param {String} name of the plugin.
   * @return {Object} the plugin instance
   * @example
   * ```javascript
   * var poster = player.getPlugin('poster');
   * poster.hidePlayButton();
   * ```
   */


  Player.prototype.getPlugin = function getPlugin(name) {
    var plugins = this.core.plugins.concat(this.core.activeContainer.plugins);
    return plugins.filter(function (plugin) {
      return plugin.name === name;
    })[0];
  };

  /**
   * the current time in seconds.
   * @method getCurrentTime
   * @return {Number} current time (in seconds) of the current source
   */


  Player.prototype.getCurrentTime = function getCurrentTime() {
    return this.core.activeContainer.getCurrentTime();
  };

  /**
   * The time that "0" now represents relative to when playback started.
   * For a stream with a sliding window this will increase as content is
   * removed from the beginning.
   * @method getStartTimeOffset
   * @return {Number} time (in seconds) that time "0" represents.
   */


  Player.prototype.getStartTimeOffset = function getStartTimeOffset() {
    return this.core.activeContainer.getStartTimeOffset();
  };

  /**
   * the duration time in seconds.
   * @method getDuration
   * @return {Number} duration time (in seconds) of the current source
   */


  Player.prototype.getDuration = function getDuration() {
    return this.core.activeContainer.getDuration();
  };

  return Player;
}(_base_object2.default);

exports.default = Player;


(0, _assign2.default)(Player.prototype, _error_mixin2.default);
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/player_info.js":
/*!***************************************!*\
  !*** ./src/components/player_info.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var PlayerInfo = function PlayerInfo() {
  (0, _classCallCheck3.default)(this, PlayerInfo);

  this.options = {};
  this.playbackPlugins = [];
  this.currentSize = { width: 0, height: 0 };
};

PlayerInfo._players = {};

PlayerInfo.getInstance = function (playerId) {
  return PlayerInfo._players[playerId] || (PlayerInfo._players[playerId] = new PlayerInfo());
};

exports.default = PlayerInfo;
module.exports = exports["default"];

/***/ }),

/***/ "./src/icons/01-play.svg":
/*!*******************************!*\
  !*** ./src/icons/01-play.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/icons/02-pause.svg":
/*!********************************!*\
  !*** ./src/icons/02-pause.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/icons/03-stop.svg":
/*!*******************************!*\
  !*** ./src/icons/03-stop.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/icons/04-volume.svg":
/*!*********************************!*\
  !*** ./src/icons/04-volume.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/icons/05-mute.svg":
/*!*******************************!*\
  !*** ./src/icons/05-mute.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/icons/06-expand.svg":
/*!*********************************!*\
  !*** ./src/icons/06-expand.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/icons/07-shrink.svg":
/*!*********************************!*\
  !*** ./src/icons/07-shrink.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/icons/08-hd.svg":
/*!*****************************!*\
  !*** ./src/icons/08-hd.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/icons/09-cc.svg":
/*!*****************************!*\
  !*** ./src/icons/09-cc.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/icons/10-reload.svg":
/*!*********************************!*\
  !*** ./src/icons/10-reload.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _player = __webpack_require__(/*! ./components/player */ "./src/components/player.js");

var _player2 = _interopRequireDefault(_player);

var _utils = __webpack_require__(/*! ./base/utils */ "./src/base/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _events = __webpack_require__(/*! ./base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _playback = __webpack_require__(/*! ./base/playback */ "./src/base/playback.js");

var _playback2 = _interopRequireDefault(_playback);

var _container_plugin = __webpack_require__(/*! ./base/container_plugin */ "./src/base/container_plugin.js");

var _container_plugin2 = _interopRequireDefault(_container_plugin);

var _core_plugin = __webpack_require__(/*! ./base/core_plugin */ "./src/base/core_plugin.js");

var _core_plugin2 = _interopRequireDefault(_core_plugin);

var _ui_core_plugin = __webpack_require__(/*! ./base/ui_core_plugin */ "./src/base/ui_core_plugin.js");

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _ui_container_plugin = __webpack_require__(/*! ./base/ui_container_plugin */ "./src/base/ui_container_plugin.js");

var _ui_container_plugin2 = _interopRequireDefault(_ui_container_plugin);

var _base_object = __webpack_require__(/*! ./base/base_object */ "./src/base/base_object.js");

var _base_object2 = _interopRequireDefault(_base_object);

var _ui_object = __webpack_require__(/*! ./base/ui_object */ "./src/base/ui_object.js");

var _ui_object2 = _interopRequireDefault(_ui_object);

var _browser = __webpack_require__(/*! ./components/browser */ "./src/components/browser/index.js");

var _browser2 = _interopRequireDefault(_browser);

var _container = __webpack_require__(/*! ./components/container */ "./src/components/container/index.js");

var _container2 = _interopRequireDefault(_container);

var _core = __webpack_require__(/*! ./components/core */ "./src/components/core/index.js");

var _core2 = _interopRequireDefault(_core);

var _error = __webpack_require__(/*! ./components/error */ "./src/components/error/index.js");

var _error2 = _interopRequireDefault(_error);

var _loader = __webpack_require__(/*! ./components/loader */ "./src/components/loader/index.js");

var _loader2 = _interopRequireDefault(_loader);

var _mediator = __webpack_require__(/*! ./components/mediator */ "./src/components/mediator.js");

var _mediator2 = _interopRequireDefault(_mediator);

var _player_info = __webpack_require__(/*! ./components/player_info */ "./src/components/player_info.js");

var _player_info2 = _interopRequireDefault(_player_info);

var _hls = __webpack_require__(/*! ./playbacks/hls */ "./src/playbacks/hls/index.js");

var _hls2 = _interopRequireDefault(_hls);

var _html5_audio = __webpack_require__(/*! ./playbacks/html5_audio */ "./src/playbacks/html5_audio/index.js");

var _html5_audio2 = _interopRequireDefault(_html5_audio);

var _html5_video = __webpack_require__(/*! ./playbacks/html5_video */ "./src/playbacks/html5_video/index.js");

var _html5_video2 = _interopRequireDefault(_html5_video);

var _html_img = __webpack_require__(/*! ./playbacks/html_img */ "./src/playbacks/html_img/index.js");

var _html_img2 = _interopRequireDefault(_html_img);

var _no_op = __webpack_require__(/*! ./playbacks/no_op */ "./src/playbacks/no_op/index.js");

var _no_op2 = _interopRequireDefault(_no_op);

var _media_control = __webpack_require__(/*! ./plugins/media_control */ "./src/plugins/media_control/index.js");

var _media_control2 = _interopRequireDefault(_media_control);

var _click_to_pause = __webpack_require__(/*! ./plugins/click_to_pause */ "./src/plugins/click_to_pause/index.js");

var _click_to_pause2 = _interopRequireDefault(_click_to_pause);

var _dvr_controls = __webpack_require__(/*! ./plugins/dvr_controls */ "./src/plugins/dvr_controls/index.js");

var _dvr_controls2 = _interopRequireDefault(_dvr_controls);

var _favicon = __webpack_require__(/*! ./plugins/favicon */ "./src/plugins/favicon/index.js");

var _favicon2 = _interopRequireDefault(_favicon);

var _log = __webpack_require__(/*! ./plugins/log */ "./src/plugins/log/index.js");

var _log2 = _interopRequireDefault(_log);

var _poster = __webpack_require__(/*! ./plugins/poster */ "./src/plugins/poster/index.js");

var _poster2 = _interopRequireDefault(_poster);

var _spinner_three_bounce = __webpack_require__(/*! ./plugins/spinner_three_bounce */ "./src/plugins/spinner_three_bounce/index.js");

var _spinner_three_bounce2 = _interopRequireDefault(_spinner_three_bounce);

var _watermark = __webpack_require__(/*! ./plugins/watermark */ "./src/plugins/watermark/index.js");

var _watermark2 = _interopRequireDefault(_watermark);

var _styler = __webpack_require__(/*! ./base/styler */ "./src/base/styler.js");

var _styler2 = _interopRequireDefault(_styler);

var _vendor = __webpack_require__(/*! ./vendor */ "./src/vendor/index.js");

var _vendor2 = _interopRequireDefault(_vendor);

var _template = __webpack_require__(/*! ./base/template */ "./src/base/template.js");

var _template2 = _interopRequireDefault(_template);

var _clapprZepto = __webpack_require__(/*! clappr-zepto */ "./node_modules/clappr-zepto/zepto.js");

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var version = "0.3.12";

exports.default = {
  Player: _player2.default,
  Mediator: _mediator2.default,
  Events: _events2.default,
  Browser: _browser2.default,
  PlayerInfo: _player_info2.default,
  MediaControl: _media_control2.default,
  ContainerPlugin: _container_plugin2.default,
  UIContainerPlugin: _ui_container_plugin2.default,
  CorePlugin: _core_plugin2.default,
  UICorePlugin: _ui_core_plugin2.default,
  Playback: _playback2.default,
  Container: _container2.default,
  Core: _core2.default,
  PlayerError: _error2.default,
  Loader: _loader2.default,
  BaseObject: _base_object2.default,
  UIObject: _ui_object2.default,
  Utils: _utils2.default,
  HLS: _hls2.default,
  HTML5Audio: _html5_audio2.default,
  HTML5Video: _html5_video2.default,
  HTMLImg: _html_img2.default,
  NoOp: _no_op2.default,
  ClickToPausePlugin: _click_to_pause2.default,
  DVRControls: _dvr_controls2.default,
  Favicon: _favicon2.default,
  Log: _log2.default,
  Poster: _poster2.default,
  SpinnerThreeBouncePlugin: _spinner_three_bounce2.default,
  WaterMarkPlugin: _watermark2.default,
  Styler: _styler2.default,
  Vendor: _vendor2.default,
  version: version,
  template: _template2.default,
  $: _clapprZepto2.default
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/playbacks/hls/hls.js":
/*!**********************************!*\
  !*** ./src/playbacks/hls/hls.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _html5_video = __webpack_require__(/*! ../../playbacks/html5_video */ "./src/playbacks/html5_video/index.js");

var _html5_video2 = _interopRequireDefault(_html5_video);

var _hlsLightMin = __webpack_require__(/*! ../../../node_modules/hls.js/dist/hls.light.min.js */ "./node_modules/hls.js/dist/hls.light.min.js");

var _hlsLightMin2 = _interopRequireDefault(_hlsLightMin);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _playback = __webpack_require__(/*! ../../base/playback */ "./src/base/playback.js");

var _playback2 = _interopRequireDefault(_playback);

var _utils = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js");

var _log = __webpack_require__(/*! ../../plugins/log */ "./src/plugins/log/index.js");

var _log2 = _interopRequireDefault(_log);

var _error = __webpack_require__(/*! ../../components/error */ "./src/components/error/index.js");

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AUTO = -1;
// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var HLS = function (_HTML5VideoPlayback) {
  (0, _inherits3.default)(HLS, _HTML5VideoPlayback);
  (0, _createClass3.default)(HLS, [{
    key: 'name',
    get: function get() {
      return 'hls';
    }
  }, {
    key: 'levels',
    get: function get() {
      return this._levels || [];
    }
  }, {
    key: 'currentLevel',
    get: function get() {
      if (this._currentLevel === null || this._currentLevel === undefined) return AUTO;else return this._currentLevel; //0 is a valid level ID
    },
    set: function set(id) {
      this._currentLevel = id;
      this.trigger(_events2.default.PLAYBACK_LEVEL_SWITCH_START);
      if (this.options.playback.hlsUseNextLevel) this._hls.nextLevel = this._currentLevel;else this._hls.currentLevel = this._currentLevel;
    }
  }, {
    key: 'isReady',
    get: function get() {
      return this._isReadyState;
    }
  }, {
    key: '_startTime',
    get: function get() {
      if (this._playbackType === _playback2.default.LIVE && this._playlistType !== 'EVENT') return this._extrapolatedStartTime;

      return this._playableRegionStartTime;
    }
  }, {
    key: '_now',
    get: function get() {
      return (0, _utils.now)();
    }

    // the time in the video element which should represent the start of the sliding window
    // extrapolated to increase in real time (instead of jumping as the early segments are removed)

  }, {
    key: '_extrapolatedStartTime',
    get: function get() {
      if (!this._localStartTimeCorrelation) return this._playableRegionStartTime;

      var corr = this._localStartTimeCorrelation;
      var timePassed = this._now - corr.local;
      var extrapolatedWindowStartTime = (corr.remote + timePassed) / 1000;
      // cap at the end of the extrapolated window duration
      return Math.min(extrapolatedWindowStartTime, this._playableRegionStartTime + this._extrapolatedWindowDuration);
    }

    // the time in the video element which should represent the end of the content
    // extrapolated to increase in real time (instead of jumping as segments are added)

  }, {
    key: '_extrapolatedEndTime',
    get: function get() {
      var actualEndTime = this._playableRegionStartTime + this._playableRegionDuration;
      if (!this._localEndTimeCorrelation) return actualEndTime;

      var corr = this._localEndTimeCorrelation;
      var timePassed = this._now - corr.local;
      var extrapolatedEndTime = (corr.remote + timePassed) / 1000;
      return Math.max(actualEndTime - this._extrapolatedWindowDuration, Math.min(extrapolatedEndTime, actualEndTime));
    }
  }, {
    key: '_duration',
    get: function get() {
      return this._extrapolatedEndTime - this._startTime;
    }

    // Returns the duration (seconds) of the window that the extrapolated start time is allowed
    // to move in before being capped.
    // The extrapolated start time should never reach the cap at the end of the window as the
    // window should slide as chunks are removed from the start.
    // This also applies to the extrapolated end time in the same way.
    //
    // If chunks aren't being removed for some reason that the start time will reach and remain fixed at
    // playableRegionStartTime + extrapolatedWindowDuration
    //
    //                                <-- window duration -->
    // I.e   playableRegionStartTime |-----------------------|
    //                               | -->   .       .       .
    //                               .   --> | -->   .       .
    //                               .       .   --> | -->   .
    //                               .       .       .   --> |
    //                               .       .       .       .
    //                                 extrapolatedStartTime

  }, {
    key: '_extrapolatedWindowDuration',
    get: function get() {
      if (this._segmentTargetDuration === null) return 0;

      return this._extrapolatedWindowNumSegments * this._segmentTargetDuration;
    }
  }], [{
    key: 'HLSJS',
    get: function get() {
      return _hlsLightMin2.default;
    }
  }]);

  function HLS() {
    (0, _classCallCheck3.default)(this, HLS);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // backwards compatibility (TODO: remove on 0.3.0)
    var _this = (0, _possibleConstructorReturn3.default)(this, _HTML5VideoPlayback.call.apply(_HTML5VideoPlayback, [this].concat(args)));

    _this.options.playback = (0, _extends3.default)({}, _this.options, _this.options.playback);
    _this._minDvrSize = typeof _this.options.hlsMinimumDvrSize === 'undefined' ? 60 : _this.options.hlsMinimumDvrSize;
    // The size of the start time extrapolation window measured as a multiple of segments.
    // Should be 2 or higher, or 0 to disable. Should only need to be increased above 2 if more than one segment is
    // removed from the start of the playlist at a time. E.g if the playlist is cached for 10 seconds and new chunks are
    // added/removed every 5.
    _this._extrapolatedWindowNumSegments = !_this.options.playback || typeof _this.options.playback.extrapolatedWindowNumSegments === 'undefined' ? 2 : _this.options.playback.extrapolatedWindowNumSegments;

    _this._playbackType = _this.options.playbackType || _playback2.default.VOD;
    _this._lastTimeUpdate = { current: 0, total: 0 };
    _this._lastDuration = null;
    // for hls streams which have dvr with a sliding window,
    // the content at the start of the playlist is removed as new
    // content is appended at the end.
    // this means the actual playable start time will increase as the
    // start content is deleted
    // For streams with dvr where the entire recording is kept from the
    // beginning this should stay as 0
    _this._playableRegionStartTime = 0;
    // {local, remote} remote is the time in the video element that should represent 0
    //                 local is the system time when the 'remote' measurment took place
    _this._localStartTimeCorrelation = null;
    // {local, remote} remote is the time in the video element that should represents the end
    //                 local is the system time when the 'remote' measurment took place
    _this._localEndTimeCorrelation = null;
    // if content is removed from the beginning then this empty area should
    // be ignored. "playableRegionDuration" excludes the empty area
    _this._playableRegionDuration = 0;
    // #EXT-X-PROGRAM-DATE-TIME
    _this._programDateTime = 0;
    // true when the actual duration is longer than hlsjs's live sync point
    // when this is false playableRegionDuration will be the actual duration
    // when this is true playableRegionDuration will exclude the time after the sync point
    _this._durationExcludesAfterLiveSyncPoint = false;
    // #EXT-X-TARGETDURATION
    _this._segmentTargetDuration = null;
    // #EXT-X-PLAYLIST-TYPE
    _this._playlistType = null;
    _this._recoverAttemptsRemaining = _this.options.hlsRecoverAttempts || 16;
    return _this;
  }

  HLS.prototype._setup = function _setup() {
    var _this2 = this;

    this._ccIsSetup = false;
    this._ccTracksUpdated = false;
    this._hls = new _hlsLightMin2.default((0, _utils.assign)({}, this.options.playback.hlsjsConfig));
    this._hls.on(_hlsLightMin2.default.Events.MEDIA_ATTACHED, function () {
      return _this2._hls.loadSource(_this2.options.src);
    });
    this._hls.on(_hlsLightMin2.default.Events.LEVEL_LOADED, function (evt, data) {
      return _this2._updatePlaybackType(evt, data);
    });
    this._hls.on(_hlsLightMin2.default.Events.LEVEL_UPDATED, function (evt, data) {
      return _this2._onLevelUpdated(evt, data);
    });
    this._hls.on(_hlsLightMin2.default.Events.LEVEL_SWITCHING, function (evt, data) {
      return _this2._onLevelSwitch(evt, data);
    });
    this._hls.on(_hlsLightMin2.default.Events.FRAG_LOADED, function (evt, data) {
      return _this2._onFragmentLoaded(evt, data);
    });
    this._hls.on(_hlsLightMin2.default.Events.ERROR, function (evt, data) {
      return _this2._onHLSJSError(evt, data);
    });
    this._hls.on(_hlsLightMin2.default.Events.SUBTITLE_TRACK_LOADED, function (evt, data) {
      return _this2._onSubtitleLoaded(evt, data);
    });
    this._hls.on(_hlsLightMin2.default.Events.SUBTITLE_TRACKS_UPDATED, function () {
      return _this2._ccTracksUpdated = true;
    });
    this._hls.attachMedia(this.el);
  };

  HLS.prototype.render = function render() {
    this._ready();
    return _HTML5VideoPlayback.prototype.render.call(this);
  };

  HLS.prototype._ready = function _ready() {
    this._isReadyState = true;
    this.trigger(_events2.default.PLAYBACK_READY, this.name);
  };

  HLS.prototype._recover = function _recover(evt, data, error) {
    if (!this._recoveredDecodingError) {
      this._recoveredDecodingError = true;
      this._hls.recoverMediaError();
    } else if (!this._recoveredAudioCodecError) {
      this._recoveredAudioCodecError = true;
      this._hls.swapAudioCodec();
      this._hls.recoverMediaError();
    } else {
      _log2.default.error('hlsjs: failed to recover', { evt: evt, data: data });
      error.level = _error2.default.Levels.FATAL;
      var formattedError = this.createError(error);
      this.trigger(_events2.default.PLAYBACK_ERROR, formattedError);
      this.stop();
    }
  };

  // override


  HLS.prototype._setupSrc = function _setupSrc(srcUrl) {// eslint-disable-line no-unused-vars
    // this playback manages the src on the video element itself
  };

  HLS.prototype._startTimeUpdateTimer = function _startTimeUpdateTimer() {
    var _this3 = this;

    if (this._timeUpdateTimer) return;

    this._timeUpdateTimer = setInterval(function () {
      _this3._onDurationChange();
      _this3._onTimeUpdate();
    }, 100);
  };

  HLS.prototype._stopTimeUpdateTimer = function _stopTimeUpdateTimer() {
    if (!this._timeUpdateTimer) return;

    clearInterval(this._timeUpdateTimer);
    this._timeUpdateTimer = null;
  };

  HLS.prototype.getProgramDateTime = function getProgramDateTime() {
    return this._programDateTime;
  };
  // the duration on the video element itself should not be used
  // as this does not necesarily represent the duration of the stream
  // https://github.com/clappr/clappr/issues/668#issuecomment-157036678


  HLS.prototype.getDuration = function getDuration() {
    return this._duration;
  };

  HLS.prototype.getCurrentTime = function getCurrentTime() {
    // e.g. can be < 0 if user pauses near the start
    // eventually they will then be kicked to the end by hlsjs if they run out of buffer
    // before the official start time
    return Math.max(0, this.el.currentTime - this._startTime);
  };

  // the time that "0" now represents relative to when playback started
  // for a stream with a sliding window this will increase as content is
  // removed from the beginning


  HLS.prototype.getStartTimeOffset = function getStartTimeOffset() {
    return this._startTime;
  };

  HLS.prototype.seekPercentage = function seekPercentage(percentage) {
    var seekTo = this._duration;
    if (percentage > 0) seekTo = this._duration * (percentage / 100);

    this.seek(seekTo);
  };

  HLS.prototype.seek = function seek(time) {
    if (time < 0) {
      _log2.default.warn('Attempt to seek to a negative time. Resetting to live point. Use seekToLivePoint() to seek to the live point.');
      time = this.getDuration();
    }
    // assume live if time within 3 seconds of end of stream
    this.dvrEnabled && this._updateDvr(time < this.getDuration() - 3);
    time += this._startTime;
    _HTML5VideoPlayback.prototype.seek.call(this, time);
  };

  HLS.prototype.seekToLivePoint = function seekToLivePoint() {
    this.seek(this.getDuration());
  };

  HLS.prototype._updateDvr = function _updateDvr(status) {
    this.trigger(_events2.default.PLAYBACK_DVR, status);
    this.trigger(_events2.default.PLAYBACK_STATS_ADD, { 'dvr': status });
  };

  HLS.prototype._updateSettings = function _updateSettings() {
    if (this._playbackType === _playback2.default.VOD) this.settings.left = ['playpause', 'position', 'duration'];else if (this.dvrEnabled) this.settings.left = ['playpause'];else this.settings.left = ['playstop'];

    this.settings.seekEnabled = this.isSeekEnabled();
    this.trigger(_events2.default.PLAYBACK_SETTINGSUPDATE);
  };

  HLS.prototype._onHLSJSError = function _onHLSJSError(evt, data) {
    var error = {
      code: data.type + '_' + data.details,
      description: this.name + ' error: type: ' + data.type + ', details: ' + data.details,
      raw: data
    };
    var formattedError = void 0;
    if (data.response) error.description += ', response: ' + (0, _stringify2.default)(data.response);
    // only report/handle errors if they are fatal
    // hlsjs should automatically handle non fatal errors
    if (data.fatal) {
      if (this._recoverAttemptsRemaining > 0) {
        this._recoverAttemptsRemaining -= 1;
        switch (data.type) {
          case _hlsLightMin2.default.ErrorTypes.NETWORK_ERROR:
            switch (data.details) {
              // The following network errors cannot be recovered with HLS.startLoad()
              // For more details, see https://github.com/video-dev/hls.js/blob/master/doc/design.md#error-detection-and-handling
              // For "level load" fatal errors, see https://github.com/video-dev/hls.js/issues/1138
              case _hlsLightMin2.default.ErrorDetails.MANIFEST_LOAD_ERROR:
              case _hlsLightMin2.default.ErrorDetails.MANIFEST_LOAD_TIMEOUT:
              case _hlsLightMin2.default.ErrorDetails.MANIFEST_PARSING_ERROR:
              case _hlsLightMin2.default.ErrorDetails.LEVEL_LOAD_ERROR:
              case _hlsLightMin2.default.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                _log2.default.error('hlsjs: unrecoverable network fatal error.', { evt: evt, data: data });
                formattedError = this.createError(error);
                this.trigger(_events2.default.PLAYBACK_ERROR, formattedError);
                this.stop();
                break;
              default:
                _log2.default.warn('hlsjs: trying to recover from network error.', { evt: evt, data: data });
                error.level = _error2.default.Levels.WARN;
                this.createError(error);
                this._hls.startLoad();
                break;
            }
            break;
          case _hlsLightMin2.default.ErrorTypes.MEDIA_ERROR:
            _log2.default.warn('hlsjs: trying to recover from media error.', { evt: evt, data: data });
            error.level = _error2.default.Levels.WARN;
            this.createError(error);
            this._recover(evt, data, error);
            break;
          default:
            _log2.default.error('hlsjs: could not recover from error.', { evt: evt, data: data });
            formattedError = this.createError(error);
            this.trigger(_events2.default.PLAYBACK_ERROR, formattedError);
            this.stop();
            break;
        }
      } else {
        _log2.default.error('hlsjs: could not recover from error after maximum number of attempts.', { evt: evt, data: data });
        formattedError = this.createError(error);
        this.trigger(_events2.default.PLAYBACK_ERROR, formattedError);
        this.stop();
      }
    } else {
      // Transforms HLSJS.ErrorDetails.KEY_LOAD_ERROR non-fatal error to
      // playback fatal error if triggerFatalErrorOnResourceDenied playback
      // option is set. HLSJS.ErrorTypes.KEY_SYSTEM_ERROR are fatal errors
      // and therefore already handled.
      if (this.options.playback.triggerFatalErrorOnResourceDenied && this._keyIsDenied(data)) {
        _log2.default.error('hlsjs: could not load decrypt key.', { evt: evt, data: data });
        formattedError = this.createError(error);
        this.trigger(_events2.default.PLAYBACK_ERROR, formattedError);
        this.stop();
        return;
      }

      error.level = _error2.default.Levels.WARN;
      this.createError(error);
      _log2.default.warn('hlsjs: non-fatal error occurred', { evt: evt, data: data });
    }
  };

  HLS.prototype._keyIsDenied = function _keyIsDenied(data) {
    return data.type === _hlsLightMin2.default.ErrorTypes.NETWORK_ERROR && data.details === _hlsLightMin2.default.ErrorDetails.KEY_LOAD_ERROR && data.response && data.response.code >= 400;
  };

  HLS.prototype._onTimeUpdate = function _onTimeUpdate() {
    var update = { current: this.getCurrentTime(), total: this.getDuration(), firstFragDateTime: this.getProgramDateTime() };
    var isSame = this._lastTimeUpdate && update.current === this._lastTimeUpdate.current && update.total === this._lastTimeUpdate.total;
    if (isSame) return;

    this._lastTimeUpdate = update;
    this.trigger(_events2.default.PLAYBACK_TIMEUPDATE, update, this.name);
  };

  HLS.prototype._onDurationChange = function _onDurationChange() {
    var duration = this.getDuration();
    if (this._lastDuration === duration) return;

    this._lastDuration = duration;
    _HTML5VideoPlayback.prototype._onDurationChange.call(this);
  };

  HLS.prototype._onProgress = function _onProgress() {
    if (!this.el.buffered.length) return;

    var buffered = [];
    var bufferedPos = 0;
    for (var i = 0; i < this.el.buffered.length; i++) {
      buffered = [].concat((0, _toConsumableArray3.default)(buffered), [{
        // for a stream with sliding window dvr something that is buffered my slide off the start of the timeline
        start: Math.max(0, this.el.buffered.start(i) - this._playableRegionStartTime),
        end: Math.max(0, this.el.buffered.end(i) - this._playableRegionStartTime)
      }]);
      if (this.el.currentTime >= buffered[i].start && this.el.currentTime <= buffered[i].end) bufferedPos = i;
    }
    var progress = {
      start: buffered[bufferedPos].start,
      current: buffered[bufferedPos].end,
      total: this.getDuration()
    };
    this.trigger(_events2.default.PLAYBACK_PROGRESS, progress, buffered);
  };

  HLS.prototype.play = function play() {
    try {
      // && JSON.stringify(this.options.plugins).indexOf('VastAds') > -1
      var lib = !!(window.google && window.google.ima) || !!(window.ya && window.ya.videoAd);
      if (lib && this.options.plugins && this.options.VastAds.preroll && this.options.VastAds.preroll.data.length > 0) {
        this.trigger(_events2.default.PLAYBACK_PREROLL_REQUEST);
        return;
      }
    } catch (e) {}

    if (!this._hls) this._setup();

    _HTML5VideoPlayback.prototype.play.call(this);
    this._startTimeUpdateTimer();
  };

  HLS.prototype.pause = function pause() {
    if (!this._hls) return;

    _HTML5VideoPlayback.prototype.pause.call(this);
    if (this.dvrEnabled) this._updateDvr(true);
  };

  HLS.prototype.stop = function stop() {
    this._stopTimeUpdateTimer();
    if (this._hls) {
      _HTML5VideoPlayback.prototype.stop.call(this);
      this._hls.destroy();
      delete this._hls;
    }
  };

  HLS.prototype.destroy = function destroy() {
    this._stopTimeUpdateTimer();
    if (this._hls) {
      this._hls.destroy();
      delete this._hls;
    }
    _HTML5VideoPlayback.prototype.destroy.call(this);
  };

  HLS.prototype._updatePlaybackType = function _updatePlaybackType(evt, data) {
    this._playbackType = data.details.live ? _playback2.default.LIVE : _playback2.default.VOD;
    this._onLevelUpdated(evt, data);

    // Live stream subtitle tracks detection hack (may not immediately available)
    if (this._ccTracksUpdated && this._playbackType === _playback2.default.LIVE && this.hasClosedCaptionsTracks) this._onSubtitleLoaded();
  };

  HLS.prototype._fillLevels = function _fillLevels() {
    this._levels = this._hls.levels.map(function (level, index) {
      return { id: index, level: level, label: level.bitrate / 1000 + 'Kbps' };
    });
    this.trigger(_events2.default.PLAYBACK_LEVELS_AVAILABLE, this._levels);
  };

  HLS.prototype._onLevelUpdated = function _onLevelUpdated(evt, data) {
    this._segmentTargetDuration = data.details.targetduration;
    this._playlistType = data.details.type || null;

    var startTimeChanged = false;
    var durationChanged = false;
    var fragments = data.details.fragments;
    var previousPlayableRegionStartTime = this._playableRegionStartTime;
    var previousPlayableRegionDuration = this._playableRegionDuration;

    if (fragments.length === 0) return;

    // #EXT-X-PROGRAM-DATE-TIME
    if (fragments[0].rawProgramDateTime) this._programDateTime = fragments[0].rawProgramDateTime;

    if (this._playableRegionStartTime !== fragments[0].start) {
      startTimeChanged = true;
      this._playableRegionStartTime = fragments[0].start;
    }

    if (startTimeChanged) {
      if (!this._localStartTimeCorrelation) {
        // set the correlation to map to middle of the extrapolation window
        this._localStartTimeCorrelation = {
          local: this._now,
          remote: (fragments[0].start + this._extrapolatedWindowDuration / 2) * 1000
        };
      } else {
        // check if the correlation still works
        var corr = this._localStartTimeCorrelation;
        var timePassed = this._now - corr.local;
        // this should point to a time within the extrapolation window
        var startTime = (corr.remote + timePassed) / 1000;
        if (startTime < fragments[0].start) {
          // our start time is now earlier than the first chunk
          // (maybe the chunk was removed early)
          // reset correlation so that it sits at the beginning of the first available chunk
          this._localStartTimeCorrelation = {
            local: this._now,
            remote: fragments[0].start * 1000
          };
        } else if (startTime > previousPlayableRegionStartTime + this._extrapolatedWindowDuration) {
          // start time was past the end of the old extrapolation window (so would have been capped)
          // see if now that time would be inside the window, and if it would be set the correlation
          // so that it resumes from the time it was at at the end of the old window
          // update the correlation so that the time starts counting again from the value it's on now
          this._localStartTimeCorrelation = {
            local: this._now,
            remote: Math.max(fragments[0].start, previousPlayableRegionStartTime + this._extrapolatedWindowDuration) * 1000
          };
        }
      }
    }

    var newDuration = data.details.totalduration;
    // if it's a live stream then shorten the duration to remove access
    // to the area after hlsjs's live sync point
    // seeks to areas after this point sometimes have issues
    if (this._playbackType === _playback2.default.LIVE) {
      var fragmentTargetDuration = data.details.targetduration;
      var hlsjsConfig = this.options.playback.hlsjsConfig || {};
      var liveSyncDurationCount = hlsjsConfig.liveSyncDurationCount || _hlsLightMin2.default.DefaultConfig.liveSyncDurationCount;
      var hiddenAreaDuration = fragmentTargetDuration * liveSyncDurationCount;
      if (hiddenAreaDuration <= newDuration) {
        newDuration -= hiddenAreaDuration;
        this._durationExcludesAfterLiveSyncPoint = true;
      } else {
        this._durationExcludesAfterLiveSyncPoint = false;
      }
    }

    if (newDuration !== this._playableRegionDuration) {
      durationChanged = true;
      this._playableRegionDuration = newDuration;
    }

    // Note the end time is not the playableRegionDuration
    // The end time will always increase even if content is removed from the beginning
    var endTime = fragments[0].start + newDuration;
    var previousEndTime = previousPlayableRegionStartTime + previousPlayableRegionDuration;
    var endTimeChanged = endTime !== previousEndTime;
    if (endTimeChanged) {
      if (!this._localEndTimeCorrelation) {
        // set the correlation to map to the end
        this._localEndTimeCorrelation = {
          local: this._now,
          remote: endTime * 1000
        };
      } else {
        // check if the correlation still works
        var _corr = this._localEndTimeCorrelation;
        var _timePassed = this._now - _corr.local;
        // this should point to a time within the extrapolation window from the end
        var extrapolatedEndTime = (_corr.remote + _timePassed) / 1000;
        if (extrapolatedEndTime > endTime) {
          this._localEndTimeCorrelation = {
            local: this._now,
            remote: endTime * 1000
          };
        } else if (extrapolatedEndTime < endTime - this._extrapolatedWindowDuration) {
          // our extrapolated end time is now earlier than the extrapolation window from the actual end time
          // (maybe a chunk became available early)
          // reset correlation so that it sits at the beginning of the extrapolation window from the end time
          this._localEndTimeCorrelation = {
            local: this._now,
            remote: (endTime - this._extrapolatedWindowDuration) * 1000
          };
        } else if (extrapolatedEndTime > previousEndTime) {
          // end time was past the old end time (so would have been capped)
          // set the correlation so that it resumes from the time it was at at the end of the old window
          this._localEndTimeCorrelation = {
            local: this._now,
            remote: previousEndTime * 1000
          };
        }
      }
    }

    // now that the values have been updated call any methods that use on them so they get the updated values
    // immediately
    durationChanged && this._onDurationChange();
    startTimeChanged && this._onProgress();
  };

  HLS.prototype._onFragmentLoaded = function _onFragmentLoaded(evt, data) {
    this.trigger(_events2.default.PLAYBACK_FRAGMENT_LOADED, data);
  };

  HLS.prototype._onSubtitleLoaded = function _onSubtitleLoaded() {
    // This event may be triggered multiple times
    // Setup CC only once (disable CC by default)
    if (!this._ccIsSetup) {
      this.trigger(_events2.default.PLAYBACK_SUBTITLE_AVAILABLE);
      var trackId = this._playbackType === _playback2.default.LIVE ? -1 : this.closedCaptionsTrackId;
      this.closedCaptionsTrackId = trackId;
      this._ccIsSetup = true;
    }
  };

  HLS.prototype._onLevelSwitch = function _onLevelSwitch(evt, data) {
    if (!this.levels.length) this._fillLevels();

    this.trigger(_events2.default.PLAYBACK_LEVEL_SWITCH_END);
    this.trigger(_events2.default.PLAYBACK_LEVEL_SWITCH, data);
    var currentLevel = this._hls.levels[data.level];
    if (currentLevel) {
      // TODO should highDefinition be private and maybe have a read only accessor if it's used somewhere
      this.highDefinition = currentLevel.height >= 720 || currentLevel.bitrate / 1000 >= 2000;
      this.trigger(_events2.default.PLAYBACK_HIGHDEFINITIONUPDATE, this.highDefinition);
      this.trigger(_events2.default.PLAYBACK_BITRATE, {
        height: currentLevel.height,
        width: currentLevel.width,
        bandwidth: currentLevel.bitrate,
        bitrate: currentLevel.bitrate,
        level: data.level
      });
    }
  };

  HLS.prototype.getPlaybackType = function getPlaybackType() {
    return this._playbackType;
  };

  HLS.prototype.isSeekEnabled = function isSeekEnabled() {
    return this._playbackType === _playback2.default.VOD || this.dvrEnabled;
  };

  (0, _createClass3.default)(HLS, [{
    key: 'dvrEnabled',
    get: function get() {
      // enabled when:
      // - the duration does not include content after hlsjs's live sync point
      // - the playable region duration is longer than the configured duration to enable dvr after
      // - the playback type is LIVE.
      return this._durationExcludesAfterLiveSyncPoint && this._duration >= this._minDvrSize && this.getPlaybackType() === _playback2.default.LIVE;
    }
  }]);
  return HLS;
}(_html5_video2.default);

exports.default = HLS;


HLS.canPlay = function (resource, mimeType) {
  var resourceParts = resource.split('?')[0].match(/.*\.(.*)$/) || [];
  var isHls = resourceParts.length > 1 && resourceParts[1].toLowerCase() === 'm3u8' || (0, _utils.listContainsIgnoreCase)(mimeType, ['application/vnd.apple.mpegurl', 'application/x-mpegURL']);

  return !!(_hlsLightMin2.default.isSupported() && isHls);
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/playbacks/hls/index.js":
/*!************************************!*\
  !*** ./src/playbacks/hls/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hls = __webpack_require__(/*! ./hls */ "./src/playbacks/hls/hls.js");

var _hls2 = _interopRequireDefault(_hls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _hls2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/playbacks/html5_audio/html5_audio.js":
/*!**************************************************!*\
  !*** ./src/playbacks/html5_audio/html5_audio.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _playback = __webpack_require__(/*! ../../base/playback */ "./src/base/playback.js");

var _playback2 = _interopRequireDefault(_playback);

var _html5_video = __webpack_require__(/*! ../../playbacks/html5_video */ "./src/playbacks/html5_video/index.js");

var _html5_video2 = _interopRequireDefault(_html5_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: remove this playback and change HTML5Video to HTML5Playback (breaking change, only after 0.3.0)
var HTML5Audio = function (_HTML5Video) {
  (0, _inherits3.default)(HTML5Audio, _HTML5Video);

  function HTML5Audio() {
    (0, _classCallCheck3.default)(this, HTML5Audio);
    return (0, _possibleConstructorReturn3.default)(this, _HTML5Video.apply(this, arguments));
  }

  HTML5Audio.prototype.updateSettings = function updateSettings() {
    this.settings.left = ['playpause', 'position', 'duration'];
    this.settings.seekEnabled = this.isSeekEnabled();
    this.trigger(_events2.default.PLAYBACK_SETTINGSUPDATE);
  };

  HTML5Audio.prototype.getPlaybackType = function getPlaybackType() {
    return _playback2.default.AOD;
  };

  (0, _createClass3.default)(HTML5Audio, [{
    key: 'name',
    get: function get() {
      return 'html5_audio';
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'audio';
    }
  }, {
    key: 'isAudioOnly',
    get: function get() {
      return true;
    }
  }]);
  return HTML5Audio;
}(_html5_video2.default); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = HTML5Audio;


HTML5Audio.canPlay = function (resourceUrl, mimeType) {
  var mimetypes = {
    'wav': ['audio/wav'],
    'mp3': ['audio/mp3', 'audio/mpeg;codecs="mp3"'],
    'aac': ['audio/mp4;codecs="mp4a.40.5"'],
    'oga': ['audio/ogg']
  };
  return _html5_video2.default._canPlay('audio', mimetypes, resourceUrl, mimeType);
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/playbacks/html5_audio/index.js":
/*!********************************************!*\
  !*** ./src/playbacks/html5_audio/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _html5_audio = __webpack_require__(/*! ./html5_audio */ "./src/playbacks/html5_audio/html5_audio.js");

var _html5_audio2 = _interopRequireDefault(_html5_audio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _html5_audio2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/playbacks/html5_video/html5_video.js":
/*!**************************************************!*\
  !*** ./src/playbacks/html5_video/html5_video.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(/*! babel-runtime/core-js/array/from */ "./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _utils = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js");

var _playback = __webpack_require__(/*! ../../base/playback */ "./src/base/playback.js");

var _playback2 = _interopRequireDefault(_playback);

var _browser = __webpack_require__(/*! ../../components/browser */ "./src/components/browser/index.js");

var _browser2 = _interopRequireDefault(_browser);

var _error = __webpack_require__(/*! ../../components/error */ "./src/components/error/index.js");

var _error2 = _interopRequireDefault(_error);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _log = __webpack_require__(/*! ../../plugins/log */ "./src/plugins/log/index.js");

var _log2 = _interopRequireDefault(_log);

var _clapprZepto = __webpack_require__(/*! clappr-zepto */ "./node_modules/clappr-zepto/zepto.js");

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

var _template = __webpack_require__(/*! ../../base/template */ "./src/base/template.js");

var _template2 = _interopRequireDefault(_template);

var _tracks = __webpack_require__(/*! ./public/tracks.html */ "./src/playbacks/html5_video/public/tracks.html");

var _tracks2 = _interopRequireDefault(_tracks);

__webpack_require__(/*! ./public/style.scss */ "./src/playbacks/html5_video/public/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var MIMETYPES = {
  'mp4': ['avc1.42E01E', 'avc1.58A01E', 'avc1.4D401E', 'avc1.64001E', 'mp4v.20.8', 'mp4v.20.240', 'mp4a.40.2'].map(function (codec) {
    return 'video/mp4; codecs="' + codec + ', mp4a.40.2"';
  }),
  'ogg': ['video/ogg; codecs="theora, vorbis"', 'video/ogg; codecs="dirac"', 'video/ogg; codecs="theora, speex"'],
  '3gpp': ['video/3gpp; codecs="mp4v.20.8, samr"'],
  'webm': ['video/webm; codecs="vp8, vorbis"'],
  'mkv': ['video/x-matroska; codecs="theora, vorbis"'],
  'm3u8': ['application/x-mpegurl']
};
MIMETYPES['ogv'] = MIMETYPES['ogg'];
MIMETYPES['3gp'] = MIMETYPES['3gpp'];

var AUDIO_MIMETYPES = {
  'wav': ['audio/wav'],
  'mp3': ['audio/mp3', 'audio/mpeg;codecs="mp3"'],
  'aac': ['audio/mp4;codecs="mp4a.40.5"'],
  'oga': ['audio/ogg']
};

var KNOWN_AUDIO_MIMETYPES = (0, _keys2.default)(AUDIO_MIMETYPES).reduce(function (acc, k) {
  return [].concat((0, _toConsumableArray3.default)(acc), (0, _toConsumableArray3.default)(AUDIO_MIMETYPES[k]));
}, []);

var UNKNOWN_ERROR = { code: 'unknown', message: 'unknown'

  // TODO: rename this Playback to HTML5Playback (breaking change, only after 0.3.0)
};
var HTML5Video = function (_Playback) {
  (0, _inherits3.default)(HTML5Video, _Playback);
  (0, _createClass3.default)(HTML5Video, [{
    key: 'name',
    get: function get() {
      return 'html5_video';
    }
  }, {
    key: 'tagName',
    get: function get() {
      return this.isAudioOnly ? 'audio' : 'video';
    }
  }, {
    key: 'isAudioOnly',
    get: function get() {
      var resourceUrl = this.options.src;
      var mimeTypes = HTML5Video._mimeTypesForUrl(resourceUrl, AUDIO_MIMETYPES, this.options.mimeType);
      return this.options.playback && this.options.playback.audioOnly || this.options.audioOnly || KNOWN_AUDIO_MIMETYPES.indexOf(mimeTypes[0]) >= 0;
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'data-html5-video': ''
      };
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'canplay': '_onCanPlay',
        'canplaythrough': '_handleBufferingEvents',
        'durationchange': '_onDurationChange',
        'ended': '_onEnded',
        'error': '_onError',
        'loadeddata': '_onLoadedData',
        'loadedmetadata': '_onLoadedMetadata',
        'pause': '_onPause',
        'playing': '_onPlaying',
        'progress': '_onProgress',
        'seeking': '_onSeeking',
        'seeked': '_onSeeked',
        'stalled': '_handleBufferingEvents',
        'timeupdate': '_onTimeUpdate',
        'waiting': '_onWaiting'
      };
    }

    /**
     * Determine if the playback has ended.
     * @property ended
     * @type Boolean
     */

  }, {
    key: 'ended',
    get: function get() {
      return this.el.ended;
    }

    /**
     * Determine if the playback is having to buffer in order for
     * playback to be smooth.
     * This is related to the PLAYBACK_BUFFERING and PLAYBACK_BUFFERFULL events
     * @property buffering
     * @type Boolean
     */

  }, {
    key: 'buffering',
    get: function get() {
      return this._isBuffering;
    }
  }]);

  function HTML5Video() {
    (0, _classCallCheck3.default)(this, HTML5Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Playback.call.apply(_Playback, [this].concat(args)));

    _this._destroyed = false;
    _this._loadStarted = false;
    _this._isBuffering = false;
    _this._playheadMoving = false;
    _this._playheadMovingTimer = null;
    _this._stopped = false;
    _this._ccTrackId = -1;
    _this._setupSrc(_this.options.src);
    // backwards compatibility (TODO: remove on 0.3.0)
    _this.options.playback || (_this.options.playback = _this.options || {});
    _this.options.playback.disableContextMenu = _this.options.playback.disableContextMenu || _this.options.disableVideoTagContextMenu;

    var playbackConfig = _this.options.playback;
    var preload = playbackConfig.preload || (_browser2.default.isSafari ? 'auto' : _this.options.preload);

    var posterUrl = void 0; // FIXME: poster plugin should always convert poster to object with expected properties ?
    if (_this.options.poster) {
      if (typeof _this.options.poster === 'string') posterUrl = _this.options.poster;else if (typeof _this.options.poster.url === 'string') posterUrl = _this.options.poster.url;
    }

    _clapprZepto2.default.extend(_this.el, {
      muted: _this.options.mute,
      defaultMuted: _this.options.mute,
      loop: _this.options.loop,
      poster: posterUrl,
      preload: preload || 'metadata',
      controls: (playbackConfig.controls || _this.options.useVideoTagDefaultControls) && 'controls',
      crossOrigin: playbackConfig.crossOrigin,
      'x-webkit-playsinline': playbackConfig.playInline
    });

    playbackConfig.playInline && _this.$el.attr({ playsinline: 'playsinline' });
    playbackConfig.crossOrigin && _this.$el.attr({ crossorigin: playbackConfig.crossOrigin });

    // TODO should settings be private?
    _this.settings = { default: ['seekbar'] };
    _this.settings.left = ['playpause', 'position', 'duration'];
    _this.settings.right = ['fullscreen', 'volume', 'hd-indicator'];

    playbackConfig.externalTracks && _this._setupExternalTracks(playbackConfig.externalTracks);

    _this.options.autoPlay && _this.attemptAutoPlay();
    return _this;
  }

  HTML5Video.prototype.configure = function configure(options) {
    _Playback.prototype.configure.call(this, options);
    this.el.loop = !!options.loop;
  };

  // See Playback.attemptAutoPlay()


  HTML5Video.prototype.attemptAutoPlay = function attemptAutoPlay() {
    var _this2 = this;

    this.canAutoPlay(function (result, error) {
      error && _log2.default.warn(_this2.name, 'autoplay error.', { result: result, error: error });

      // https://github.com/clappr/clappr/issues/1076
      result && process.nextTick(function () {
        return !_this2._destroyed && _this2.play();
      });
    });
  };

  // See Playback.canAutoPlay()


  HTML5Video.prototype.canAutoPlay = function canAutoPlay(cb) {
    if (this.options.disableCanAutoPlay) {
      cb(true, null);
      return;
    }

    var opts = {
      timeout: this.options.autoPlayTimeout || 500,
      inline: this.options.playback.playInline || false,
      muted: this.options.mute || false // Known issue: mediacontrols may asynchronously mute video


      // Use current video element if recycling feature enabled with mobile devices
    };if (_browser2.default.isMobile && _utils.DomRecycler.options.recycleVideo) opts.element = this.el;

    // Desktop browser autoplay policy may require user action
    // Mobile browser autoplay require user consent and video recycling feature enabled
    // It may returns a false positive with source-less player consent
    (0, _utils.canAutoPlayMedia)(cb, opts);
  };

  HTML5Video.prototype._setupExternalTracks = function _setupExternalTracks(tracks) {
    this._externalTracks = tracks.map(function (track) {
      return {
        kind: track.kind || 'subtitles', // Default is 'subtitles'
        label: track.label,
        lang: track.lang,
        src: track.src
      };
    });
  };

  /**
   * Sets the source url on the <video> element, and also the 'src' property.
   * @method setupSrc
   * @private
   * @param {String} srcUrl The source URL.
   */


  HTML5Video.prototype._setupSrc = function _setupSrc(srcUrl) {
    if (this.el.src === srcUrl) return;

    this._ccIsSetup = false;
    this.el.src = srcUrl;
    this._src = this.el.src;
  };

  HTML5Video.prototype._onLoadedMetadata = function _onLoadedMetadata(e) {
    this._handleBufferingEvents();
    this.trigger(_events2.default.PLAYBACK_LOADEDMETADATA, { duration: e.target.duration, data: e });
    this._updateSettings();
    var autoSeekFromUrl = typeof this._options.autoSeekFromUrl === 'undefined' || this._options.autoSeekFromUrl;
    if (this.getPlaybackType() !== _playback2.default.LIVE && autoSeekFromUrl) this._checkInitialSeek();
  };

  HTML5Video.prototype._onDurationChange = function _onDurationChange() {
    this._updateSettings();
    this._onTimeUpdate();
    // onProgress uses the duration
    this._onProgress();
  };

  HTML5Video.prototype._updateSettings = function _updateSettings() {
    // we can't figure out if hls resource is VoD or not until it is being loaded or duration has changed.
    // that's why we check it again and update media control accordingly.
    if (this.getPlaybackType() === _playback2.default.VOD || this.getPlaybackType() === _playback2.default.AOD) this.settings.left = ['playpause', 'position', 'duration'];else this.settings.left = ['playstop'];

    this.settings.seekEnabled = this.isSeekEnabled();
    this.trigger(_events2.default.PLAYBACK_SETTINGSUPDATE);
  };

  HTML5Video.prototype.isSeekEnabled = function isSeekEnabled() {
    return isFinite(this.getDuration());
  };

  HTML5Video.prototype.getPlaybackType = function getPlaybackType() {
    var onDemandType = this.tagName === 'audio' ? _playback2.default.AOD : _playback2.default.VOD;
    return [0, undefined, Infinity].indexOf(this.el.duration) >= 0 ? _playback2.default.LIVE : onDemandType;
  };

  HTML5Video.prototype.isHighDefinitionInUse = function isHighDefinitionInUse() {
    return false;
  };

  // On mobile device, HTML5 video element "retains" user action consent if
  // load() method is called. See Player.consent().


  HTML5Video.prototype.consent = function consent() {
    if (!this.isPlaying()) {
      _Playback.prototype.consent.call(this);
      this.el.load();
    }
  };

  HTML5Video.prototype.play = function play() {
    try {
      // && JSON.stringify(this.options.plugins).indexOf('VastAds') > -1
      var lib = !!(window.google && window.google.ima) || !!(window.ya && window.ya.videoAd);
      if (lib && this.options.plugins && this.options.VastAds.preroll && this.options.VastAds.preroll.data.length > 0) {
        this.trigger(_events2.default.PLAYBACK_PREROLL_REQUEST);
        return;
      }
    } catch (e) {}

    this.trigger(_events2.default.PLAYBACK_PLAY_INTENT);
    this._stopped = false;
    this._setupSrc(this._src);
    this._handleBufferingEvents();
    var promise = this.el.play();
    // For more details, see https://developers.google.com/web/updates/2016/03/play-returns-promise
    if (promise && promise.catch) promise.catch(function () {});
  };

  HTML5Video.prototype.pause = function pause() {
    this.el.pause();
  };

  HTML5Video.prototype.stop = function stop() {
    this.pause();
    this._stopped = true;
    // src will be added again in play()
    this.el.removeAttribute('src');
    this.el.load(); // load with no src to stop loading of the previous source and avoid leaks
    this._stopPlayheadMovingChecks();
    this._handleBufferingEvents();
    this.trigger(_events2.default.PLAYBACK_STOP);
  };

  HTML5Video.prototype.volume = function volume(value) {
    if (value === 0) {
      this.$el.attr({ muted: 'true' });
      this.el.muted = true;
    } else {
      this.$el.attr({ muted: null });
      this.el.muted = false;
      this.el.volume = value / 100;
    }
  };

  /**
   * @deprecated
   * @private
   */


  HTML5Video.prototype.mute = function mute() {
    this.el.muted = true;
  };

  /**
   * @deprecated
   * @private
   */


  HTML5Video.prototype.unmute = function unmute() {
    this.el.muted = false;
  };

  HTML5Video.prototype.isMuted = function isMuted() {
    return this.el.muted === true || this.el.volume === 0;
  };

  HTML5Video.prototype.isPlaying = function isPlaying() {
    return !this.el.paused && !this.el.ended;
  };

  HTML5Video.prototype._startPlayheadMovingChecks = function _startPlayheadMovingChecks() {
    if (this._playheadMovingTimer !== null) return;

    this._playheadMovingTimeOnCheck = null;
    this._determineIfPlayheadMoving();
    this._playheadMovingTimer = setInterval(this._determineIfPlayheadMoving.bind(this), 500);
  };

  HTML5Video.prototype._stopPlayheadMovingChecks = function _stopPlayheadMovingChecks() {
    if (this._playheadMovingTimer === null) return;

    clearInterval(this._playheadMovingTimer);
    this._playheadMovingTimer = null;
    this._playheadMoving = false;
  };

  HTML5Video.prototype._determineIfPlayheadMoving = function _determineIfPlayheadMoving() {
    var before = this._playheadMovingTimeOnCheck;
    var now = this.el.currentTime;
    this._playheadMoving = before !== now;
    this._playheadMovingTimeOnCheck = now;
    this._handleBufferingEvents();
  };

  // this seems to happen when the user is having to wait
  // for something to happen AFTER A USER INTERACTION
  // e.g the player might be buffering, but when `play()` is called
  // only at this point will this be called.
  // Or the user may seek somewhere but the new area requires buffering,
  // so it will fire then as well.
  // On devices where playing is blocked until requested with a user action,
  // buffering may start, but never finish until the user initiates a play,
  // but this only happens when play is actually requested


  HTML5Video.prototype._onWaiting = function _onWaiting() {
    this._loadStarted = true;
    this._handleBufferingEvents();
  };

  // called after the first frame has loaded
  // note this doesn't fire on ios before the user has requested play
  // ideally the "loadstart" event would be used instead, but this fires
  // before a user has requested play on iOS, and also this is always fired
  // even if the preload setting is "none". In both these cases this causes
  // infinite buffering until the user does something which isn't great.


  HTML5Video.prototype._onLoadedData = function _onLoadedData() {
    this._loadStarted = true;
    this._handleBufferingEvents();
  };

  // note this doesn't fire on ios before user has requested play


  HTML5Video.prototype._onCanPlay = function _onCanPlay() {
    this._handleBufferingEvents();
  };

  HTML5Video.prototype._onPlaying = function _onPlaying() {
    this._checkForClosedCaptions();
    this._startPlayheadMovingChecks();
    this._handleBufferingEvents();
    this.trigger(_events2.default.PLAYBACK_PLAY);
  };

  HTML5Video.prototype._onPause = function _onPause() {
    this._stopPlayheadMovingChecks();
    this._handleBufferingEvents();
    this.trigger(_events2.default.PLAYBACK_PAUSE);
  };

  HTML5Video.prototype._onSeeking = function _onSeeking() {
    this._handleBufferingEvents();
    this.trigger(_events2.default.PLAYBACK_SEEK);
  };

  HTML5Video.prototype._onSeeked = function _onSeeked() {
    this._handleBufferingEvents();
    this.trigger(_events2.default.PLAYBACK_SEEKED);
  };

  HTML5Video.prototype._onEnded = function _onEnded() {
    this._handleBufferingEvents();
    this.trigger(_events2.default.PLAYBACK_ENDED, this.name);
  };

  // The playback should be classed as buffering if the following are true:
  // - the ready state is less then HAVE_FUTURE_DATA or the playhead isn't moving and it should be
  // - the media hasn't "ended",
  // - the media hasn't been stopped
  // - loading has started


  HTML5Video.prototype._handleBufferingEvents = function _handleBufferingEvents() {
    var playheadShouldBeMoving = !this.el.ended && !this.el.paused;
    var buffering = this._loadStarted && !this.el.ended && !this._stopped && (playheadShouldBeMoving && !this._playheadMoving || this.el.readyState < this.el.HAVE_FUTURE_DATA);
    if (this._isBuffering !== buffering) {
      this._isBuffering = buffering;
      if (buffering) this.trigger(_events2.default.PLAYBACK_BUFFERING, this.name);else this.trigger(_events2.default.PLAYBACK_BUFFERFULL, this.name);
    }
  };

  HTML5Video.prototype._onError = function _onError() {
    var _ref = this.el.error || UNKNOWN_ERROR,
        code = _ref.code,
        message = _ref.message;

    var isUnknownError = code === UNKNOWN_ERROR.code;

    var formattedError = this.createError({
      code: code,
      description: message,
      raw: this.el.error,
      level: isUnknownError ? _error2.default.Levels.WARN : _error2.default.Levels.FATAL
    });

    if (isUnknownError) _log2.default.warn(this.name, 'HTML5 unknown error: ', formattedError);else this.trigger(_events2.default.PLAYBACK_ERROR, formattedError);
  };

  HTML5Video.prototype.destroy = function destroy() {
    this._destroyed = true;
    this.handleTextTrackChange && this.el.textTracks.removeEventListener('change', this.handleTextTrackChange);
    _Playback.prototype.destroy.call(this);
    this.el.removeAttribute('src');
    this.el.load(); // load with no src to stop loading of the previous source and avoid leaks
    this._src = null;
    _utils.DomRecycler.garbage(this.$el);
  };

  HTML5Video.prototype.seek = function seek(time) {
    this.el.currentTime = time;
  };

  HTML5Video.prototype.seekPercentage = function seekPercentage(percentage) {
    var time = this.el.duration * (percentage / 100);
    this.seek(time);
  };

  HTML5Video.prototype._checkInitialSeek = function _checkInitialSeek() {
    var seekTime = (0, _utils.seekStringToSeconds)();
    if (seekTime !== 0) this.seek(seekTime);
  };

  HTML5Video.prototype.getCurrentTime = function getCurrentTime() {
    return this.el.currentTime;
  };

  HTML5Video.prototype.getDuration = function getDuration() {
    return this.el.duration;
  };

  HTML5Video.prototype._onTimeUpdate = function _onTimeUpdate() {
    if (this.getPlaybackType() === _playback2.default.LIVE) this.trigger(_events2.default.PLAYBACK_TIMEUPDATE, { current: 1, total: 1 }, this.name);else this.trigger(_events2.default.PLAYBACK_TIMEUPDATE, { current: this.el.currentTime, total: this.el.duration }, this.name);
  };

  HTML5Video.prototype._onProgress = function _onProgress() {
    if (!this.el.buffered.length) return;

    var buffered = [];
    var bufferedPos = 0;
    for (var i = 0; i < this.el.buffered.length; i++) {
      buffered = [].concat((0, _toConsumableArray3.default)(buffered), [{ start: this.el.buffered.start(i), end: this.el.buffered.end(i) }]);
      if (this.el.currentTime >= buffered[i].start && this.el.currentTime <= buffered[i].end) bufferedPos = i;
    }
    var progress = {
      start: buffered[bufferedPos].start,
      current: buffered[bufferedPos].end,
      total: this.el.duration
    };
    this.trigger(_events2.default.PLAYBACK_PROGRESS, progress, buffered);
  };

  HTML5Video.prototype._typeFor = function _typeFor(src) {
    var mimeTypes = HTML5Video._mimeTypesForUrl(src, MIMETYPES, this.options.mimeType);
    if (mimeTypes.length === 0) mimeTypes = HTML5Video._mimeTypesForUrl(src, AUDIO_MIMETYPES, this.options.mimeType);

    var mimeType = mimeTypes[0] || '';
    return mimeType.split(';')[0];
  };

  HTML5Video.prototype._ready = function _ready() {
    if (this._isReadyState) return;

    this._isReadyState = true;
    this.trigger(_events2.default.PLAYBACK_READY, this.name);
  };

  HTML5Video.prototype._checkForClosedCaptions = function _checkForClosedCaptions() {
    // Check if CC available only if current playback is HTML5Video
    if (this.isHTML5Video && !this._ccIsSetup) {
      if (this.hasClosedCaptionsTracks) {
        this.trigger(_events2.default.PLAYBACK_SUBTITLE_AVAILABLE);
        var trackId = this.closedCaptionsTrackId;
        this.closedCaptionsTrackId = trackId;
        this.handleTextTrackChange = this._handleTextTrackChange.bind(this);
        this.el.textTracks.addEventListener('change', this.handleTextTrackChange);
      }
      this._ccIsSetup = true;
    }
  };

  HTML5Video.prototype._handleTextTrackChange = function _handleTextTrackChange() {
    var tracks = this.closedCaptionsTracks;
    var track = tracks.find(function (track) {
      return track.track.mode === 'showing';
    }) || { id: -1 };

    if (this._ccTrackId !== track.id) {
      this._ccTrackId = track.id;
      this.trigger(_events2.default.PLAYBACK_SUBTITLE_CHANGED, {
        id: track.id
      });
    }
  };

  HTML5Video.prototype.render = function render() {
    if (this.options.playback.disableContextMenu) {
      this.$el.on('contextmenu', function () {
        return false;
      });
    }

    if (this._externalTracks && this._externalTracks.length > 0) {
      this.$el.html(this.template({
        tracks: this._externalTracks
      }));
    }

    this._ready();
    return this;
  };

  (0, _createClass3.default)(HTML5Video, [{
    key: 'isReady',
    get: function get() {
      return this._isReadyState;
    }
  }, {
    key: 'isHTML5Video',
    get: function get() {
      return this.name === HTML5Video.prototype.name;
    }
  }, {
    key: 'closedCaptionsTracks',
    get: function get() {
      var id = 0;
      var trackId = function trackId() {
        return id++;
      };
      var textTracks = this.el.textTracks ? (0, _from2.default)(this.el.textTracks) : [];

      return textTracks.filter(function (track) {
        return track.kind === 'subtitles' || track.kind === 'captions';
      }).map(function (track) {
        return { id: trackId(), name: track.label, track: track };
      });
    }
  }, {
    key: 'closedCaptionsTrackId',
    get: function get() {
      return this._ccTrackId;
    },
    set: function set(trackId) {
      if (!(0, _utils.isNumber)(trackId)) return;

      var tracks = this.closedCaptionsTracks;
      var showingTrack = void 0;

      // Note: -1 is for hide all tracks
      if (trackId !== -1) {
        showingTrack = tracks.find(function (track) {
          return track.id === trackId;
        });
        if (!showingTrack) return; // Track id not found

        if (showingTrack.track.mode === 'showing') return; // Track already showing
      }

      // Since it is possible to display multiple tracks,
      // ensure that all tracks are hidden.
      tracks.filter(function (track) {
        return track.track.mode !== 'hidden';
      }).forEach(function (track) {
        return track.track.mode = 'hidden';
      });

      showingTrack && (showingTrack.track.mode = 'showing');

      this._ccTrackId = trackId;
      this.trigger(_events2.default.PLAYBACK_SUBTITLE_CHANGED, {
        id: trackId
      });
    }
  }, {
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_tracks2.default);
    }
  }]);
  return HTML5Video;
}(_playback2.default);

exports.default = HTML5Video;


HTML5Video._mimeTypesForUrl = function (resourceUrl, mimeTypesByExtension, mimeType) {
  var extension = (resourceUrl.split('?')[0].match(/.*\.(.*)$/) || [])[1];
  var mimeTypes = mimeType || extension && mimeTypesByExtension[extension.toLowerCase()] || [];
  return mimeTypes.constructor === Array ? mimeTypes : [mimeTypes];
};

HTML5Video._canPlay = function (type, mimeTypesByExtension, resourceUrl, mimeType) {
  var mimeTypes = HTML5Video._mimeTypesForUrl(resourceUrl, mimeTypesByExtension, mimeType);
  var media = document.createElement(type);
  return !!mimeTypes.filter(function (mediaType) {
    return !!media.canPlayType(mediaType).replace(/no/, '');
  })[0];
};

HTML5Video.canPlay = function (resourceUrl, mimeType) {
  return HTML5Video._canPlay('audio', AUDIO_MIMETYPES, resourceUrl, mimeType) || HTML5Video._canPlay('video', MIMETYPES, resourceUrl, mimeType);
};
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/playbacks/html5_video/index.js":
/*!********************************************!*\
  !*** ./src/playbacks/html5_video/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _html5_video = __webpack_require__(/*! ./html5_video */ "./src/playbacks/html5_video/html5_video.js");

var _html5_video2 = _interopRequireDefault(_html5_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _html5_video2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/playbacks/html5_video/public/style.scss":
/*!*****************************************************!*\
  !*** ./src/playbacks/html5_video/public/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/playbacks/html5_video/public/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playbacks/html5_video/public/tracks.html":
/*!******************************************************!*\
  !*** ./src/playbacks/html5_video/public/tracks.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<% for (var i = 0; i < tracks.length; i++) { %>\n  <track data-html5-video-track=\"<%= i %>\" kind=\"<%= tracks[i].kind %>\" label=\"<%= tracks[i].label %>\" srclang=\"<%= tracks[i].lang %>\" src=\"<%= tracks[i].src %>\" />\n<% }; %>\n";

/***/ }),

/***/ "./src/playbacks/html_img/html_img.js":
/*!********************************************!*\
  !*** ./src/playbacks/html_img/html_img.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _playback = __webpack_require__(/*! ../../base/playback */ "./src/base/playback.js");

var _playback2 = _interopRequireDefault(_playback);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

__webpack_require__(/*! ./public/style.scss */ "./src/playbacks/html_img/public/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTMLImg = function (_Playback) {
  (0, _inherits3.default)(HTMLImg, _Playback);

  HTMLImg.prototype.getPlaybackType = function getPlaybackType() {
    return _playback2.default.NO_OP;
  };

  (0, _createClass3.default)(HTMLImg, [{
    key: 'name',
    get: function get() {
      return 'html_img';
    }
  }, {
    key: 'tagName',
    get: function get() {
      return 'img';
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'data-html-img': ''
      };
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'load': '_onLoad',
        'abort': '_onError',
        'error': '_onError'
      };
    }
  }]);

  function HTMLImg(params) {
    (0, _classCallCheck3.default)(this, HTMLImg);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Playback.call(this, params));

    _this.el.src = params.src;
    return _this;
  }

  HTMLImg.prototype.render = function render() {
    this.trigger(_events2.default.PLAYBACK_READY, this.name);
    return this;
  };

  HTMLImg.prototype._onLoad = function _onLoad() {
    this.trigger(_events2.default.PLAYBACK_ENDED, this.name);
  };

  HTMLImg.prototype._onError = function _onError(evt) {
    var m = evt.type === 'error' ? 'load error' : 'loading aborted';
    this.trigger(_events2.default.PLAYBACK_ERROR, { message: m }, this.name);
  };

  return HTMLImg;
}(_playback2.default); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = HTMLImg;


HTMLImg.canPlay = function (resource) {
  return (/\.(png|jpg|jpeg|gif|bmp|tiff|pgm|pnm|webp)(|\?.*)$/i.test(resource)
  );
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/playbacks/html_img/index.js":
/*!*****************************************!*\
  !*** ./src/playbacks/html_img/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _html_img = __webpack_require__(/*! ./html_img */ "./src/playbacks/html_img/html_img.js");

var _html_img2 = _interopRequireDefault(_html_img);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _html_img2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/playbacks/html_img/public/style.scss":
/*!**************************************************!*\
  !*** ./src/playbacks/html_img/public/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/playbacks/html_img/public/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playbacks/no_op/index.js":
/*!**************************************!*\
  !*** ./src/playbacks/no_op/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _no_op = __webpack_require__(/*! ./no_op */ "./src/playbacks/no_op/no_op.js");

var _no_op2 = _interopRequireDefault(_no_op);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _no_op2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/playbacks/no_op/no_op.js":
/*!**************************************!*\
  !*** ./src/playbacks/no_op/no_op.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js");

var _playback = __webpack_require__(/*! ../../base/playback */ "./src/base/playback.js");

var _playback2 = _interopRequireDefault(_playback);

var _template = __webpack_require__(/*! ../../base/template */ "./src/base/template.js");

var _template2 = _interopRequireDefault(_template);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _error = __webpack_require__(/*! ./public/error.html */ "./src/playbacks/no_op/public/error.html");

var _error2 = _interopRequireDefault(_error);

__webpack_require__(/*! ./public/style.scss */ "./src/playbacks/no_op/public/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoOp = function (_Playback) {
  (0, _inherits3.default)(NoOp, _Playback);
  (0, _createClass3.default)(NoOp, [{
    key: 'name',
    get: function get() {
      return 'no_op';
    }
  }, {
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_error2.default);
    }
  }, {
    key: 'attributes',
    get: function get() {
      return { 'data-no-op': '' };
    }
  }]);

  function NoOp() {
    (0, _classCallCheck3.default)(this, NoOp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Playback.call.apply(_Playback, [this].concat(args)));

    _this._noiseFrameNum = -1;
    return _this;
  }

  NoOp.prototype.render = function render() {
    var playbackNotSupported = this.options.playbackNotSupportedMessage || this.i18n.t('playback_not_supported');
    this.$el.html(this.template({ message: playbackNotSupported }));
    this.trigger(_events2.default.PLAYBACK_READY, this.name);
    var showForNoOp = !!(this.options.poster && this.options.poster.showForNoOp);
    if (this.options.autoPlay || !showForNoOp) this._animate();

    return this;
  };

  NoOp.prototype._noise = function _noise() {
    this._noiseFrameNum = (this._noiseFrameNum + 1) % 5;
    if (this._noiseFrameNum) {
      // only update noise every 5 frames to save cpu
      return;
    }

    var idata = this.context.createImageData(this.context.canvas.width, this.context.canvas.height);
    var buffer32 = void 0;
    try {
      buffer32 = new Uint32Array(idata.data.buffer);
    } catch (err) {
      buffer32 = new Uint32Array(this.context.canvas.width * this.context.canvas.height * 4);
      var data = idata.data;
      for (var i = 0; i < data.length; i++) {
        buffer32[i] = data[i];
      }
    }

    var len = buffer32.length,
        m = Math.random() * 6 + 4;
    var run = 0,
        color = 0;
    for (var _i = 0; _i < len;) {
      if (run < 0) {
        run = m * Math.random();
        var p = Math.pow(Math.random(), 0.4);
        color = 255 * p << 24;
      }
      run -= 1;
      buffer32[_i++] = color;
    }
    this.context.putImageData(idata, 0, 0);
  };

  NoOp.prototype._loop = function _loop() {
    var _this2 = this;

    if (this._stop) return;

    this._noise();
    this._animationHandle = (0, _utils.requestAnimationFrame)(function () {
      return _this2._loop();
    });
  };

  NoOp.prototype.destroy = function destroy() {
    if (this._animationHandle) {
      (0, _utils.cancelAnimationFrame)(this._animationHandle);
      this._stop = true;
    }
  };

  NoOp.prototype._animate = function _animate() {
    this.canvas = this.$el.find('canvas[data-no-op-canvas]')[0];
    this.context = this.canvas.getContext('2d');
    this._loop();
  };

  return NoOp;
}(_playback2.default);

exports.default = NoOp;


NoOp.canPlay = function (source) {
  // eslint-disable-line no-unused-vars
  return true;
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/playbacks/no_op/public/error.html":
/*!***********************************************!*\
  !*** ./src/playbacks/no_op/public/error.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas data-no-op-canvas></canvas>\n<p data-no-op-msg><%=message%><p>\n";

/***/ }),

/***/ "./src/playbacks/no_op/public/style.scss":
/*!***********************************************!*\
  !*** ./src/playbacks/no_op/public/style.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/playbacks/no_op/public/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/plugins/click_to_pause/click_to_pause.js":
/*!******************************************************!*\
  !*** ./src/plugins/click_to_pause/click_to_pause.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _container_plugin = __webpack_require__(/*! ../../base/container_plugin */ "./src/base/container_plugin.js");

var _container_plugin2 = _interopRequireDefault(_container_plugin);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _playback = __webpack_require__(/*! ../../base/playback */ "./src/base/playback.js");

var _playback2 = _interopRequireDefault(_playback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClickToPausePlugin = function (_ContainerPlugin) {
  (0, _inherits3.default)(ClickToPausePlugin, _ContainerPlugin);
  (0, _createClass3.default)(ClickToPausePlugin, [{
    key: 'name',
    get: function get() {
      return 'click_to_pause';
    }
  }]);

  function ClickToPausePlugin(container) {
    (0, _classCallCheck3.default)(this, ClickToPausePlugin);
    return (0, _possibleConstructorReturn3.default)(this, _ContainerPlugin.call(this, container));
  }

  ClickToPausePlugin.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.container, _events2.default.CONTAINER_CLICK, this.click);
    this.listenTo(this.container, _events2.default.CONTAINER_SETTINGSUPDATE, this.settingsUpdate);
  };

  ClickToPausePlugin.prototype.click = function click() {
    var _this2 = this;

    if (this.container.getPlaybackType() !== _playback2.default.LIVE || this.container.isDvrEnabled()) {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
        return;
      }
      this.timer = setTimeout(function () {
        clearTimeout(_this2.timer);
        _this2.timer = null;
        if (_this2.container.isPlaying()) _this2.container.pause();else _this2.container.play();
      }, 300);
    }
  };

  ClickToPausePlugin.prototype.settingsUpdate = function settingsUpdate() {
    var pointerEnabled = this.container.getPlaybackType() !== _playback2.default.LIVE || this.container.isDvrEnabled();
    if (pointerEnabled === this.pointerEnabled) return;

    var method = pointerEnabled ? 'addClass' : 'removeClass';
    this.container.$el[method]('pointer-enabled');
    this.pointerEnabled = pointerEnabled;
  };

  return ClickToPausePlugin;
}(_container_plugin2.default); //Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = ClickToPausePlugin;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/click_to_pause/index.js":
/*!*********************************************!*\
  !*** ./src/plugins/click_to_pause/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _click_to_pause = __webpack_require__(/*! ./click_to_pause */ "./src/plugins/click_to_pause/click_to_pause.js");

var _click_to_pause2 = _interopRequireDefault(_click_to_pause);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _click_to_pause2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/closed_captions/closed_captions.js":
/*!********************************************************!*\
  !*** ./src/plugins/closed_captions/closed_captions.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _ui_core_plugin = __webpack_require__(/*! ../../base/ui_core_plugin */ "./src/base/ui_core_plugin.js");

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _template = __webpack_require__(/*! ../../base/template */ "./src/base/template.js");

var _template2 = _interopRequireDefault(_template);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _utils = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js");

var _closed_captions = __webpack_require__(/*! ./public/closed_captions.html */ "./src/plugins/closed_captions/public/closed_captions.html");

var _closed_captions2 = _interopRequireDefault(_closed_captions);

__webpack_require__(/*! ./public/closed_captions.scss */ "./src/plugins/closed_captions/public/closed_captions.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClosedCaptions = function (_UICorePlugin) {
  (0, _inherits3.default)(ClosedCaptions, _UICorePlugin);
  (0, _createClass3.default)(ClosedCaptions, [{
    key: 'name',
    get: function get() {
      return 'closed_captions';
    }
  }, {
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_closed_captions2.default);
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'click [data-cc-button]': 'toggleContextMenu',
        'click [data-cc-select]': 'onTrackSelect'
      };
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'class': 'cc-controls',
        'data-cc-controls': ''
      };
    }
  }]);

  function ClosedCaptions(core) {
    (0, _classCallCheck3.default)(this, ClosedCaptions);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UICorePlugin.call(this, core));

    var config = core.options.closedCaptionsConfig;
    _this._title = config && config.title ? config.title : null;
    _this._ariaLabel = config && config.ariaLabel ? config.ariaLabel : 'cc-button';
    _this._labelCb = config && config.labelCallback && typeof config.labelCallback === 'function' ? config.labelCallback : function (track) {
      return track.name;
    };
    return _this;
  }

  ClosedCaptions.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.core, _events2.default.CORE_ACTIVE_CONTAINER_CHANGED, this.containerChanged);
    this.listenTo(this.core.mediaControl, _events2.default.MEDIACONTROL_RENDERED, this.render);
    this.listenTo(this.core.mediaControl, _events2.default.MEDIACONTROL_HIDE, this.hideContextMenu);
    this.container = this.core.getCurrentContainer();
    if (this.container) {
      this.listenTo(this.container, _events2.default.CONTAINER_SUBTITLE_AVAILABLE, this.onSubtitleAvailable);
      this.listenTo(this.container, _events2.default.CONTAINER_SUBTITLE_CHANGED, this.onSubtitleChanged);
      this.listenTo(this.container, _events2.default.CONTAINER_STOP, this.onContainerStop);
    }
  };

  ClosedCaptions.prototype.onContainerStop = function onContainerStop() {
    this.ccAvailable(false);
  };

  ClosedCaptions.prototype.containerChanged = function containerChanged() {
    this.ccAvailable(false);
    this.stopListening();
    this.bindEvents();
  };

  ClosedCaptions.prototype.onSubtitleAvailable = function onSubtitleAvailable() {
    this.renderCcButton();
    this.ccAvailable(true);
  };

  ClosedCaptions.prototype.onSubtitleChanged = function onSubtitleChanged(track) {
    this.setCurrentContextMenuElement(track.id);
  };

  ClosedCaptions.prototype.onTrackSelect = function onTrackSelect(event) {
    var trackId = parseInt(event.target.dataset.ccSelect, 10);
    this.container.closedCaptionsTrackId = trackId;
    this.hideContextMenu();
    event.stopPropagation();
    return false;
  };

  ClosedCaptions.prototype.ccAvailable = function ccAvailable(hasCC) {
    var method = hasCC ? 'addClass' : 'removeClass';
    this.$el[method]('available');
  };

  ClosedCaptions.prototype.toggleContextMenu = function toggleContextMenu() {
    this.$el.find('ul').toggle();
  };

  ClosedCaptions.prototype.hideContextMenu = function hideContextMenu() {
    this.$el.find('ul').hide();
  };

  ClosedCaptions.prototype.contextMenuElement = function contextMenuElement(id) {
    return this.$el.find('ul a' + (!isNaN(id) ? '[data-cc-select="' + id + '"]' : '')).parent();
  };

  ClosedCaptions.prototype.setCurrentContextMenuElement = function setCurrentContextMenuElement(trackId) {
    if (this._trackId !== trackId) {
      this.contextMenuElement().removeClass('current');
      this.contextMenuElement(trackId).addClass('current');
      var method = trackId > -1 ? 'addClass' : 'removeClass';
      this.$ccButton[method]('enabled');
      this._trackId = trackId;
    }
  };

  ClosedCaptions.prototype.renderCcButton = function renderCcButton() {
    var tracks = this.container ? this.container.closedCaptionsTracks : [];
    for (var i = 0; i < tracks.length; i++) {
      tracks[i].label = this._labelCb(tracks[i]);
    }this.$el.html(this.template({
      ariaLabel: this._ariaLabel,
      disabledLabel: this.core.i18n.t('disabled'),
      title: this._title,
      tracks: tracks
    }));

    this.$ccButton = this.$el.find('button.cc-button[data-cc-button]');
    this.$ccButton.append(_utils.SvgIcons.cc);
    this.$el.append(this.style);
  };

  ClosedCaptions.prototype.render = function render() {
    this.renderCcButton();

    var $fullscreen = this.core.mediaControl.$el.find('button[data-fullscreen]');
    if ($fullscreen[0]) this.$el.insertAfter($fullscreen);else this.core.mediaControl.$el.find('.media-control-right-panel[data-media-control]').prepend(this.$el);

    return this;
  };

  return ClosedCaptions;
}(_ui_core_plugin2.default);

exports.default = ClosedCaptions;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/closed_captions/index.js":
/*!**********************************************!*\
  !*** ./src/plugins/closed_captions/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _closed_captions = __webpack_require__(/*! ./closed_captions */ "./src/plugins/closed_captions/closed_captions.js");

var _closed_captions2 = _interopRequireDefault(_closed_captions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _closed_captions2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/closed_captions/public/closed_captions.html":
/*!*****************************************************************!*\
  !*** ./src/plugins/closed_captions/public/closed_captions.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"cc-button media-control-button media-control-icon\" data-cc-button aria-label=\"<%= ariaLabel %>\"></button>\n<ul>\n  <% if (title) { %>\n  <li data-title><%= title %></li>\n  <% }; %>\n  <li><a href=\"#\" data-cc-select=\"-1\"><%= disabledLabel %></a></li>\n  <% for (var i = 0; i < tracks.length; i++) { %>\n    <li><a href=\"#\" data-cc-select=\"<%= tracks[i].id %>\"><%= tracks[i].label %></a></li>\n  <% }; %>\n</ul>\n";

/***/ }),

/***/ "./src/plugins/closed_captions/public/closed_captions.scss":
/*!*****************************************************************!*\
  !*** ./src/plugins/closed_captions/public/closed_captions.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./closed_captions.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/closed_captions/public/closed_captions.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/plugins/dvr_controls/dvr_controls.js":
/*!**************************************************!*\
  !*** ./src/plugins/dvr_controls/dvr_controls.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _ui_core_plugin = __webpack_require__(/*! ../../base/ui_core_plugin */ "./src/base/ui_core_plugin.js");

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _template = __webpack_require__(/*! ../../base/template */ "./src/base/template.js");

var _template2 = _interopRequireDefault(_template);

var _playback = __webpack_require__(/*! ../../base/playback */ "./src/base/playback.js");

var _playback2 = _interopRequireDefault(_playback);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _index = __webpack_require__(/*! ./public/index.html */ "./src/plugins/dvr_controls/public/index.html");

var _index2 = _interopRequireDefault(_index);

__webpack_require__(/*! ./public/dvr_controls.scss */ "./src/plugins/dvr_controls/public/dvr_controls.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DVRControls = function (_UICorePlugin) {
  (0, _inherits3.default)(DVRControls, _UICorePlugin);
  (0, _createClass3.default)(DVRControls, [{
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_index2.default);
    }
  }, {
    key: 'name',
    get: function get() {
      return 'dvr_controls';
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'click .live-button': 'click'
      };
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'class': 'dvr-controls',
        'data-dvr-controls': ''
      };
    }
  }]);

  function DVRControls(core) {
    (0, _classCallCheck3.default)(this, DVRControls);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UICorePlugin.call(this, core));

    _this.settingsUpdate();
    return _this;
  }

  DVRControls.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.core.mediaControl, _events2.default.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged);
    this.listenTo(this.core.mediaControl, _events2.default.MEDIACONTROL_RENDERED, this.settingsUpdate);
    this.listenTo(this.core, _events2.default.CORE_OPTIONS_CHANGE, this.render);
    if (this.core.getCurrentContainer()) {
      this.listenToOnce(this.core.getCurrentContainer(), _events2.default.CONTAINER_TIMEUPDATE, this.render);
      this.listenTo(this.core.getCurrentContainer(), _events2.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.dvrChanged);
    }
  };

  DVRControls.prototype.containerChanged = function containerChanged() {
    this.stopListening();
    this.bindEvents();
  };

  DVRControls.prototype.dvrChanged = function dvrChanged(dvrEnabled) {
    if (this.core.getPlaybackType() !== _playback2.default.LIVE) return;
    this.settingsUpdate();
    this.core.mediaControl.$el.addClass('live');
    if (dvrEnabled) {
      this.core.mediaControl.$el.addClass('dvr');
      this.core.mediaControl.$el.find('.media-control-indicator[data-position], .media-control-indicator[data-duration]').hide();
    } else {
      this.core.mediaControl.$el.removeClass('dvr');
    }
  };

  DVRControls.prototype.click = function click() {
    var mediaControl = this.core.mediaControl;
    var container = mediaControl.container;
    if (!container.isPlaying()) container.play();

    if (mediaControl.$el.hasClass('dvr')) container.seek(container.getDuration());
  };

  DVRControls.prototype.settingsUpdate = function settingsUpdate() {
    var _this2 = this;

    this.stopListening();
    this.core.mediaControl.$el.removeClass('live');
    if (this.shouldRender()) {
      this.render();
      this.$el.click(function () {
        return _this2.click();
      });
    }
    this.bindEvents();
  };

  DVRControls.prototype.shouldRender = function shouldRender() {
    var useDvrControls = this.core.options.useDvrControls === undefined || !!this.core.options.useDvrControls;
    return useDvrControls && this.core.getPlaybackType() === _playback2.default.LIVE;
  };

  DVRControls.prototype.render = function render() {
    this.$el.html(this.template({
      live: this.core.i18n.t('live'),
      backToLive: this.core.i18n.t('back_to_live')
    }));
    if (this.shouldRender()) {
      this.core.mediaControl.$el.addClass('live');
      this.core.mediaControl.$('.media-control-left-panel[data-media-control]').append(this.$el);
    }
    return this;
  };

  return DVRControls;
}(_ui_core_plugin2.default);

exports.default = DVRControls;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/dvr_controls/index.js":
/*!*******************************************!*\
  !*** ./src/plugins/dvr_controls/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dvr_controls = __webpack_require__(/*! ./dvr_controls */ "./src/plugins/dvr_controls/dvr_controls.js");

var _dvr_controls2 = _interopRequireDefault(_dvr_controls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dvr_controls2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/dvr_controls/public/dvr_controls.scss":
/*!***********************************************************!*\
  !*** ./src/plugins/dvr_controls/public/dvr_controls.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./dvr_controls.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/dvr_controls/public/dvr_controls.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/plugins/dvr_controls/public/index.html":
/*!****************************************************!*\
  !*** ./src/plugins/dvr_controls/public/index.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"live-info\"><%= live %></div>\n<button type=\"button\" class=\"live-button\" aria-label=\"<%= backToLive %>\"><%= backToLive %></button>\n";

/***/ }),

/***/ "./src/plugins/end_video.js":
/*!**********************************!*\
  !*** ./src/plugins/end_video.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = __webpack_require__(/*! ../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _core_plugin = __webpack_require__(/*! ../base/core_plugin */ "./src/base/core_plugin.js");

var _core_plugin2 = _interopRequireDefault(_core_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EndVideo = function (_CorePlugin) {
  (0, _inherits3.default)(EndVideo, _CorePlugin);

  function EndVideo() {
    (0, _classCallCheck3.default)(this, EndVideo);
    return (0, _possibleConstructorReturn3.default)(this, _CorePlugin.apply(this, arguments));
  }

  EndVideo.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.core, _events2.default.CORE_ACTIVE_CONTAINER_CHANGED, this.containerChanged);
    var container = this.core.activeContainer;
    if (container) {
      this.listenTo(container, _events2.default.CONTAINER_ENDED, this.ended);
      this.listenTo(container, _events2.default.CONTAINER_STOP, this.ended);
    }
  };

  EndVideo.prototype.containerChanged = function containerChanged() {
    this.stopListening();
    this.bindEvents();
  };

  EndVideo.prototype.ended = function ended() {
    var exitOnEnd = typeof this.core.options.exitFullscreenOnEnd === 'undefined' || this.core.options.exitFullscreenOnEnd;
    if (exitOnEnd && this.core.isFullscreen()) this.core.toggleFullscreen();
  };

  (0, _createClass3.default)(EndVideo, [{
    key: 'name',
    get: function get() {
      return 'end_video';
    }
  }]);
  return EndVideo;
}(_core_plugin2.default);

exports.default = EndVideo;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/error_screen/error_screen.js":
/*!**************************************************!*\
  !*** ./src/plugins/error_screen/error_screen.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _ui_core_plugin = __webpack_require__(/*! ../../base/ui_core_plugin */ "./src/base/ui_core_plugin.js");

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _template = __webpack_require__(/*! ../../base/template */ "./src/base/template.js");

var _template2 = _interopRequireDefault(_template);

var _error = __webpack_require__(/*! ../../components/error/ */ "./src/components/error/index.js");

var _error2 = _interopRequireDefault(_error);

var _utils = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js");

var _error_screen = __webpack_require__(/*! ./public/error_screen.html */ "./src/plugins/error_screen/public/error_screen.html");

var _error_screen2 = _interopRequireDefault(_error_screen);

__webpack_require__(/*! ./public/error_screen.scss */ "./src/plugins/error_screen/public/error_screen.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorScreen = function (_UICorePlugin) {
  (0, _inherits3.default)(ErrorScreen, _UICorePlugin);
  (0, _createClass3.default)(ErrorScreen, [{
    key: 'name',
    get: function get() {
      return 'error_screen';
    }
  }, {
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_error_screen2.default);
    }
  }, {
    key: 'container',
    get: function get() {
      return this.core.getCurrentContainer();
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'class': 'player-error-screen',
        'data-error-screen': ''
      };
    }
  }]);

  function ErrorScreen(core) {
    var _ret;

    (0, _classCallCheck3.default)(this, ErrorScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UICorePlugin.call(this, core));

    if (_this.options.disableErrorScreen) return _ret = _this.disable(), (0, _possibleConstructorReturn3.default)(_this, _ret);
    return _this;
  }

  ErrorScreen.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.core, _events2.default.ERROR, this.onError);
    this.listenTo(this.core, _events2.default.CORE_ACTIVE_CONTAINER_CHANGED, this.onContainerChanged);
  };

  ErrorScreen.prototype.bindReload = function bindReload() {
    this.reloadButton = this.$el.find('.player-error-screen__reload');
    this.reloadButton && this.reloadButton.on('click', this.reload.bind(this));
  };

  ErrorScreen.prototype.reload = function reload() {
    var _this2 = this;

    this.listenToOnce(this.core, _events2.default.CORE_READY, function () {
      return _this2.container.play();
    });
    this.core.load(this.options.sources, this.options.mimeType);
    this.unbindReload();
  };

  ErrorScreen.prototype.unbindReload = function unbindReload() {
    this.reloadButton && this.reloadButton.off('click');
  };

  ErrorScreen.prototype.onContainerChanged = function onContainerChanged() {
    this.err = null;
    this.unbindReload();
    this.hide();
  };

  ErrorScreen.prototype.onError = function onError() {
    var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (err.level === _error2.default.Levels.FATAL) {
      this.err = err;
      this.container.disableMediaControl();
      this.container.stop();
      this.show();
    }
  };

  ErrorScreen.prototype.show = function show() {
    this.render();
    this.$el.show();
  };

  ErrorScreen.prototype.hide = function hide() {
    this.$el.hide();
  };

  ErrorScreen.prototype.render = function render() {
    if (!this.err) return;

    this.$el.html(this.template({
      title: this.err.UI.title,
      message: this.err.UI.message,
      code: this.err.code,
      icon: this.err.UI.icon || '',
      reloadIcon: _utils.SvgIcons.reload
    }));

    this.core.$el.append(this.el);

    this.bindReload();

    return this;
  };

  return ErrorScreen;
}(_ui_core_plugin2.default);

exports.default = ErrorScreen;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/error_screen/index.js":
/*!*******************************************!*\
  !*** ./src/plugins/error_screen/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error_screen = __webpack_require__(/*! ./error_screen */ "./src/plugins/error_screen/error_screen.js");

var _error_screen2 = _interopRequireDefault(_error_screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _error_screen2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/error_screen/public/error_screen.html":
/*!***********************************************************!*\
  !*** ./src/plugins/error_screen/public/error_screen.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"player-error-screen__content\" data-error-screen>\n  <% if (icon) { %>\n  <div class=\"player-error-screen__icon\" data-error-screen><%= icon %></div>\n  <% } %>\n  <div class=\"player-error-screen__title\" data-error-screen><%= title %></div>\n  <div class=\"player-error-screen__message\" data-error-screen><%= message %></div>\n  <div class=\"player-error-screen__code\" data-error-screen>Error code: <%= code %></div>\n  <div class=\"player-error-screen__reload\" data-error-screen><%= reloadIcon %></div>\n</div>\n";

/***/ }),

/***/ "./src/plugins/error_screen/public/error_screen.scss":
/*!***********************************************************!*\
  !*** ./src/plugins/error_screen/public/error_screen.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./error_screen.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/error_screen/public/error_screen.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/plugins/favicon/favicon.js":
/*!****************************************!*\
  !*** ./src/plugins/favicon/favicon.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _core_plugin = __webpack_require__(/*! ../../base/core_plugin */ "./src/base/core_plugin.js");

var _core_plugin2 = _interopRequireDefault(_core_plugin);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _clapprZepto = __webpack_require__(/*! clappr-zepto */ "./node_modules/clappr-zepto/zepto.js");

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

var _utils = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oldIcon = (0, _clapprZepto2.default)('link[rel="shortcut icon"]');

var Favicon = function (_CorePlugin) {
  (0, _inherits3.default)(Favicon, _CorePlugin);
  (0, _createClass3.default)(Favicon, [{
    key: 'name',
    get: function get() {
      return 'favicon';
    }
  }, {
    key: 'oldIcon',
    get: function get() {
      return oldIcon;
    }
  }]);

  function Favicon(core) {
    (0, _classCallCheck3.default)(this, Favicon);

    var _this = (0, _possibleConstructorReturn3.default)(this, _CorePlugin.call(this, core));

    _this._container = null;
    _this.configure();
    return _this;
  }

  Favicon.prototype.configure = function configure() {
    if (this.core.options.changeFavicon) {
      if (!this.enabled) {
        this.stopListening(this.core, _events2.default.CORE_OPTIONS_CHANGE);
        this.enable();
      }
    } else if (this.enabled) {
      this.disable();
      this.listenTo(this.core, _events2.default.CORE_OPTIONS_CHANGE, this.configure);
    }
  };

  Favicon.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.core, _events2.default.CORE_OPTIONS_CHANGE, this.configure);
    this.listenTo(this.core, _events2.default.CORE_ACTIVE_CONTAINER_CHANGED, this.containerChanged);
    this.core.activeContainer && this.containerChanged();
  };

  Favicon.prototype.containerChanged = function containerChanged() {
    this._container && this.stopListening(this._container);
    this._container = this.core.activeContainer;
    this.listenTo(this._container, _events2.default.CONTAINER_PLAY, this.setPlayIcon);
    this.listenTo(this._container, _events2.default.CONTAINER_PAUSE, this.setPauseIcon);
    this.listenTo(this._container, _events2.default.CONTAINER_STOP, this.resetIcon);
    this.listenTo(this._container, _events2.default.CONTAINER_ENDED, this.resetIcon);
    this.listenTo(this._container, _events2.default.CONTAINER_ERROR, this.resetIcon);
    this.resetIcon();
  };

  Favicon.prototype.disable = function disable() {
    _CorePlugin.prototype.disable.call(this);
    this.resetIcon();
  };

  Favicon.prototype.destroy = function destroy() {
    _CorePlugin.prototype.destroy.call(this);
    this.resetIcon();
  };

  Favicon.prototype.createIcon = function createIcon(svg) {
    var canvas = (0, _clapprZepto2.default)('<canvas/>');
    canvas[0].width = 16;
    canvas[0].height = 16;
    var ctx = canvas[0].getContext('2d');
    ctx.fillStyle = '#000';
    var d = (0, _clapprZepto2.default)(svg).find('path').attr('d');
    var path = new Path2D(d);
    ctx.fill(path);
    var icon = (0, _clapprZepto2.default)('<link rel="shortcut icon" type="image/png"/>');
    icon.attr('href', canvas[0].toDataURL('image/png'));
    return icon;
  };

  Favicon.prototype.setPlayIcon = function setPlayIcon() {
    if (!this.playIcon) this.playIcon = this.createIcon(_utils.SvgIcons.play);

    this.changeIcon(this.playIcon);
  };

  Favicon.prototype.setPauseIcon = function setPauseIcon() {
    if (!this.pauseIcon) this.pauseIcon = this.createIcon(_utils.SvgIcons.pause);

    this.changeIcon(this.pauseIcon);
  };

  Favicon.prototype.resetIcon = function resetIcon() {
    (0, _clapprZepto2.default)('link[rel="shortcut icon"]').remove();
    (0, _clapprZepto2.default)('head').append(this.oldIcon);
  };

  Favicon.prototype.changeIcon = function changeIcon(icon) {
    if (icon) {
      (0, _clapprZepto2.default)('link[rel="shortcut icon"]').remove();
      (0, _clapprZepto2.default)('head').append(icon);
    }
  };

  return Favicon;
}(_core_plugin2.default);

exports.default = Favicon;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/favicon/index.js":
/*!**************************************!*\
  !*** ./src/plugins/favicon/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _favicon = __webpack_require__(/*! ./favicon.js */ "./src/plugins/favicon/favicon.js");

var _favicon2 = _interopRequireDefault(_favicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _favicon2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/google_analytics/google_analytics.js":
/*!**********************************************************!*\
  !*** ./src/plugins/google_analytics/google_analytics.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _container_plugin = __webpack_require__(/*! ../../base/container_plugin */ "./src/base/container_plugin.js");

var _container_plugin2 = _interopRequireDefault(_container_plugin);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var GoogleAnalytics = function (_ContainerPlugin) {
  (0, _inherits3.default)(GoogleAnalytics, _ContainerPlugin);
  (0, _createClass3.default)(GoogleAnalytics, [{
    key: 'name',
    get: function get() {
      return 'google_analytics';
    }
  }]);

  function GoogleAnalytics(container) {
    (0, _classCallCheck3.default)(this, GoogleAnalytics);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ContainerPlugin.call(this, container));

    if (_this.container.options.gaAccount) {
      _this.account = _this.container.options.gaAccount;
      _this.trackerName = _this.container.options.gaTrackerName ? _this.container.options.gaTrackerName + '.' : 'Clappr.';
      _this.domainName = _this.container.options.gaDomainName;
      _this.currentHDState = undefined;
      _this.embedScript();
    }
    return _this;
  }

  GoogleAnalytics.prototype.embedScript = function embedScript() {
    var _this2 = this;

    if (!window._gat) {
      var script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('async', 'async');
      script.setAttribute('src', '//www.google-analytics.com/ga.js');
      script.onload = function () {
        return _this2.addEventListeners();
      };
      document.body.appendChild(script);
    } else {
      this.addEventListeners();
    }
  };

  GoogleAnalytics.prototype.addEventListeners = function addEventListeners() {
    var _this3 = this;

    if (this.container) {
      this.listenTo(this.container, _events2.default.CONTAINER_READY, this.onReady);
      this.listenTo(this.container, _events2.default.CONTAINER_PLAY, this.onPlay);
      this.listenTo(this.container, _events2.default.CONTAINER_STOP, this.onStop);
      this.listenTo(this.container, _events2.default.CONTAINER_PAUSE, this.onPause);
      this.listenTo(this.container, _events2.default.CONTAINER_ENDED, this.onEnded);
      this.listenTo(this.container, _events2.default.CONTAINER_STATE_BUFFERING, this.onBuffering);
      this.listenTo(this.container, _events2.default.CONTAINER_STATE_BUFFERFULL, this.onBufferFull);
      this.listenTo(this.container, _events2.default.CONTAINER_ERROR, this.onError);
      this.listenTo(this.container, _events2.default.CONTAINER_PLAYBACKSTATE, this.onPlaybackChanged);
      this.listenTo(this.container, _events2.default.CONTAINER_VOLUME, function (event) {
        return _this3.onVolumeChanged(event);
      });
      this.listenTo(this.container, _events2.default.CONTAINER_SEEK, function (event) {
        return _this3.onSeek(event);
      });
      this.listenTo(this.container, _events2.default.CONTAINER_FULL_SCREEN, this.onFullscreen);
      this.listenTo(this.container, _events2.default.CONTAINER_HIGHDEFINITIONUPDATE, this.onHD);
      this.listenTo(this.container, _events2.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.onDVR);
    }
    _gaq.push([this.trackerName + '_setAccount', this.account]);
    if (this.domainName) _gaq.push([this.trackerName + '_setDomainName', this.domainName]);
  };

  GoogleAnalytics.prototype.onReady = function onReady() {
    this.push(['Video', 'Playback', this.container.playback.name]);
  };

  GoogleAnalytics.prototype.onPlay = function onPlay() {
    this.push(['Video', 'Play', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onStop = function onStop() {
    this.push(['Video', 'Stop', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onEnded = function onEnded() {
    this.push(['Video', 'Ended', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onBuffering = function onBuffering() {
    this.push(['Video', 'Buffering', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onBufferFull = function onBufferFull() {
    this.push(['Video', 'Bufferfull', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onError = function onError() {
    this.push(['Video', 'Error', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onHD = function onHD(isHD) {
    var status = isHD ? 'ON' : 'OFF';
    if (status !== this.currentHDState) {
      this.currentHDState = status;
      this.push(['Video', 'HD - ' + status, this.container.playback.src]);
    }
  };

  GoogleAnalytics.prototype.onPlaybackChanged = function onPlaybackChanged(playbackState) {
    if (playbackState.type !== null) this.push(['Video', 'Playback Type - ' + playbackState.type, this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onDVR = function onDVR(dvrInUse) {
    var status = dvrInUse ? 'ON' : 'OFF';
    this.push(['Interaction', 'DVR - ' + status, this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onPause = function onPause() {
    this.push(['Video', 'Pause', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onSeek = function onSeek() {
    this.push(['Video', 'Seek', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onVolumeChanged = function onVolumeChanged() {
    this.push(['Interaction', 'Volume', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.onFullscreen = function onFullscreen() {
    this.push(['Interaction', 'Fullscreen', this.container.playback.src]);
  };

  GoogleAnalytics.prototype.push = function push(array) {
    var res = [this.trackerName + '_trackEvent'].concat(array);
    _gaq.push(res);
  };

  return GoogleAnalytics;
}(_container_plugin2.default);

exports.default = GoogleAnalytics;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/google_analytics/index.js":
/*!***********************************************!*\
  !*** ./src/plugins/google_analytics/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _google_analytics = __webpack_require__(/*! ./google_analytics */ "./src/plugins/google_analytics/google_analytics.js");

var _google_analytics2 = _interopRequireDefault(_google_analytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _google_analytics2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/log/index.js":
/*!**********************************!*\
  !*** ./src/plugins/log/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log = __webpack_require__(/*! ./log */ "./src/plugins/log/log.js");

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _log2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/log/log.js":
/*!********************************!*\
  !*** ./src/plugins/log/log.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _vendor = __webpack_require__(/*! ../../vendor */ "./src/vendor/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BOLD = 'font-weight: bold; font-size: 13px;';
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var INFO = 'color: #006600;' + BOLD;
var DEBUG = 'color: #0000ff;' + BOLD;
var WARN = 'color: #ff8000;' + BOLD;
var ERROR = 'color: #ff0000;' + BOLD;

var LEVEL_DEBUG = 0;
var LEVEL_INFO = 1;
var LEVEL_WARN = 2;
var LEVEL_ERROR = 3;
var LEVEL_DISABLED = LEVEL_ERROR;

var COLORS = [DEBUG, INFO, WARN, ERROR, ERROR];
var DESCRIPTIONS = ['debug', 'info', 'warn', 'error', 'disabled'];

var Log = function () {
  function Log() {
    var _this = this;

    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : LEVEL_INFO;
    var offLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LEVEL_DISABLED;
    (0, _classCallCheck3.default)(this, Log);

    this.kibo = new _vendor.Kibo();
    this.kibo.down(['ctrl shift d'], function () {
      return _this.onOff();
    });
    this.BLACKLIST = ['timeupdate', 'playback:timeupdate', 'playback:progress', 'container:hover', 'container:timeupdate', 'container:progress'];
    this.level = level;
    this.offLevel = offLevel;
  }

  Log.prototype.debug = function debug(klass) {
    this.log(klass, LEVEL_DEBUG, Array.prototype.slice.call(arguments, 1));
  };

  Log.prototype.info = function info(klass) {
    this.log(klass, LEVEL_INFO, Array.prototype.slice.call(arguments, 1));
  };

  Log.prototype.warn = function warn(klass) {
    this.log(klass, LEVEL_WARN, Array.prototype.slice.call(arguments, 1));
  };

  Log.prototype.error = function error(klass) {
    this.log(klass, LEVEL_ERROR, Array.prototype.slice.call(arguments, 1));
  };

  Log.prototype.onOff = function onOff() {
    if (this.level === this.offLevel) {
      this.level = this.previousLevel;
    } else {
      this.previousLevel = this.level;
      this.level = this.offLevel;
    }
    // handle instances where console.log is unavailable
    if (window.console && window.console.log) window.console.log('%c[Clappr.Log] set log level to ' + DESCRIPTIONS[this.level], WARN);
  };

  Log.prototype.level = function level(newLevel) {
    this.level = newLevel;
  };

  Log.prototype.log = function log(klass, level, message) {
    if (this.BLACKLIST.indexOf(message[0]) >= 0) return;
    if (level < this.level) return;

    if (!message) {
      message = klass;
      klass = null;
    }
    var color = COLORS[level];
    var klassDescription = '';
    if (klass) klassDescription = '[' + klass + ']';

    if (window.console && window.console.log) window.console.log.apply(console, ['%c[' + DESCRIPTIONS[level] + ']' + klassDescription, color].concat(message));
  };

  return Log;
}();

exports.default = Log;


Log.LEVEL_DEBUG = LEVEL_DEBUG;
Log.LEVEL_INFO = LEVEL_INFO;
Log.LEVEL_WARN = LEVEL_WARN;
Log.LEVEL_ERROR = LEVEL_ERROR;

Log.getInstance = function () {
  if (this._instance === undefined) {
    this._instance = new this();
    this._instance.previousLevel = this._instance.level;
    this._instance.level = this._instance.offLevel;
  }
  return this._instance;
};

Log.setLevel = function (level) {
  this.getInstance().level = level;
};

Log.debug = function () {
  this.getInstance().debug.apply(this.getInstance(), arguments);
};
Log.info = function () {
  this.getInstance().info.apply(this.getInstance(), arguments);
};
Log.warn = function () {
  this.getInstance().warn.apply(this.getInstance(), arguments);
};
Log.error = function () {
  this.getInstance().error.apply(this.getInstance(), arguments);
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/media_control/index.js":
/*!********************************************!*\
  !*** ./src/plugins/media_control/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _media_control = __webpack_require__(/*! ./media_control */ "./src/plugins/media_control/media_control.js");

var _media_control2 = _interopRequireDefault(_media_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _media_control2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/media_control/media_control.js":
/*!****************************************************!*\
  !*** ./src/plugins/media_control/media_control.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js");

var _vendor = __webpack_require__(/*! ../../vendor */ "./src/vendor/index.js");

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _ui_core_plugin = __webpack_require__(/*! ../../base/ui_core_plugin */ "./src/base/ui_core_plugin.js");

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _browser = __webpack_require__(/*! ../../components/browser */ "./src/components/browser/index.js");

var _browser2 = _interopRequireDefault(_browser);

var _mediator = __webpack_require__(/*! ../../components/mediator */ "./src/components/mediator.js");

var _mediator2 = _interopRequireDefault(_mediator);

var _template = __webpack_require__(/*! ../../base/template */ "./src/base/template.js");

var _template2 = _interopRequireDefault(_template);

var _playback = __webpack_require__(/*! ../../base/playback */ "./src/base/playback.js");

var _playback2 = _interopRequireDefault(_playback);

var _clapprZepto = __webpack_require__(/*! clappr-zepto */ "./node_modules/clappr-zepto/zepto.js");

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

__webpack_require__(/*! ./public/media-control.scss */ "./src/plugins/media_control/public/media-control.scss");

var _mediaControl = __webpack_require__(/*! ./public/media-control.html */ "./src/plugins/media_control/public/media-control.html");

var _mediaControl2 = _interopRequireDefault(_mediaControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

/**
 * The MediaControl is responsible for displaying the Player controls.
 */

var MediaControl = function (_UICorePlugin) {
  (0, _inherits3.default)(MediaControl, _UICorePlugin);
  (0, _createClass3.default)(MediaControl, [{
    key: 'name',
    get: function get() {
      return 'media_control';
    }
  }, {
    key: 'disabled',
    get: function get() {
      var playbackIsNOOP = this.container && this.container.getPlaybackType() === _playback2.default.NO_OP;
      return this.userDisabled || playbackIsNOOP;
    }
  }, {
    key: 'container',
    get: function get() {
      return this.core && this.core.activeContainer;
    }
  }, {
    key: 'playback',
    get: function get() {
      return this.core && this.core.activePlayback;
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'class': 'media-control',
        'data-media-control': ''
      };
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'click [data-play]': 'play',
        'click [data-pause]': 'pause',
        'click [data-playpause]': 'togglePlayPause',
        'click [data-stop]': 'stop',
        'click [data-playstop]': 'togglePlayStop',
        'click [data-fullscreen]': 'toggleFullscreen',
        'click .bar-container[data-seekbar]': 'seek',
        'click .bar-container[data-volume]': 'onVolumeClick',
        'click .drawer-icon[data-volume]': 'toggleMute',
        'mouseenter .drawer-container[data-volume]': 'showVolumeBar',
        'mouseleave .drawer-container[data-volume]': 'hideVolumeBar',
        'mousedown .bar-container[data-volume]': 'startVolumeDrag',
        'touchend .bar-container[data-volume]': 'startVolumeDrag',
        'mousemove .bar-container[data-volume]': 'mousemoveOnVolumeBar',
        'touchmove .bar-container[data-volume]': 'mousemoveOnVolumeBar',
        'mousedown .bar-scrubber[data-seekbar]': 'startSeekDrag',
        'touchstart .bar-scrubber[data-seekbar]': 'startSeekDrag',
        'mousemove .bar-container[data-seekbar]': 'mousemoveOnSeekBar',
        'touchmove .bar-container[data-seekbar]': 'mousemoveOnSeekBar',
        'mouseleave .bar-container[data-seekbar]': 'mouseleaveOnSeekBar',
        'mouseenter .media-control-layer[data-controls]': 'setUserKeepVisible',
        'mouseleave .media-control-layer[data-controls]': 'resetUserKeepVisible'
      };
    }
  }, {
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_mediaControl2.default);
    }
  }, {
    key: 'volume',
    get: function get() {
      return this.container && this.container.isReady ? this.container.volume : this.intendedVolume;
    }
  }, {
    key: 'muted',
    get: function get() {
      return this.volume === 0;
    }
  }]);

  function MediaControl(core) {
    (0, _classCallCheck3.default)(this, MediaControl);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UICorePlugin.call(this, core));

    _this.persistConfig = _this.options.persistConfig;
    _this.currentPositionValue = null;
    _this.currentDurationValue = null;
    _this.keepVisible = false;
    _this.fullScreenOnVideoTagSupported = null; // unknown
    _this.setInitialVolume();
    _this.settings = {
      left: ['play', 'stop', 'pause'],
      right: ['volume'],
      default: ['position', 'seekbar', 'duration']
    };
    _this.kibo = new _vendor.Kibo(_this.options.focusElement);
    _this.bindKeyEvents();

    if (_this.container) {
      if (!_clapprZepto2.default.isEmptyObject(_this.container.settings)) _this.settings = _clapprZepto2.default.extend({}, _this.container.settings);
    } else {
      _this.settings = {};
    }

    _this.userDisabled = false;
    if (_this.container && _this.container.mediaControlDisabled || _this.options.chromeless) _this.disable();

    _this.stopDragHandler = function (event) {
      return _this.stopDrag(event);
    };
    _this.updateDragHandler = function (event) {
      return _this.updateDrag(event);
    };
    (0, _clapprZepto2.default)(document).bind('mouseup', _this.stopDragHandler);
    (0, _clapprZepto2.default)(document).bind('mousemove', _this.updateDragHandler);
    return _this;
  }

  MediaControl.prototype.getExternalInterface = function getExternalInterface() {
    var _this2 = this;

    return {
      setVolume: this.setVolume,
      getVolume: function getVolume() {
        return _this2.volume;
      }
    };
  };

  MediaControl.prototype.bindEvents = function bindEvents() {
    var _this3 = this;

    this.stopListening();
    this.listenTo(this.core, _events2.default.CORE_ACTIVE_CONTAINER_CHANGED, this.onActiveContainerChanged);
    this.listenTo(this.core, _events2.default.CORE_MOUSE_MOVE, this.show);
    this.listenTo(this.core, _events2.default.CORE_MOUSE_LEAVE, function () {
      return _this3.hide(_this3.options.hideMediaControlDelay);
    });
    this.listenTo(this.core, _events2.default.CORE_FULLSCREEN, this.show);
    this.listenTo(this.core, _events2.default.CORE_OPTIONS_CHANGE, this.configure);
    _mediator2.default.on(this.options.playerId + ':' + _events2.default.PLAYER_RESIZE, this.playerResize, this);
    this.bindContainerEvents();
  };

  MediaControl.prototype.bindContainerEvents = function bindContainerEvents() {
    if (!this.container) return;
    this.listenTo(this.container, _events2.default.CONTAINER_PLAY, this.changeTogglePlay);
    this.listenTo(this.container, _events2.default.CONTAINER_PAUSE, this.changeTogglePlay);
    this.listenTo(this.container, _events2.default.CONTAINER_STOP, this.changeTogglePlay);
    this.listenTo(this.container, _events2.default.CONTAINER_DBLCLICK, this.toggleFullscreen);
    this.listenTo(this.container, _events2.default.CONTAINER_TIMEUPDATE, this.onTimeUpdate);
    this.listenTo(this.container, _events2.default.CONTAINER_PROGRESS, this.updateProgressBar);
    this.listenTo(this.container, _events2.default.CONTAINER_SETTINGSUPDATE, this.settingsUpdate);
    this.listenTo(this.container, _events2.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.settingsUpdate);
    this.listenTo(this.container, _events2.default.CONTAINER_HIGHDEFINITIONUPDATE, this.highDefinitionUpdate);
    this.listenTo(this.container, _events2.default.CONTAINER_MEDIACONTROL_DISABLE, this.disable);
    this.listenTo(this.container, _events2.default.CONTAINER_MEDIACONTROL_ENABLE, this.enable);
    this.listenTo(this.container, _events2.default.CONTAINER_ENDED, this.ended);
    this.listenTo(this.container, _events2.default.CONTAINER_VOLUME, this.onVolumeChanged);
    this.listenTo(this.container, _events2.default.CONTAINER_OPTIONS_CHANGE, this.setInitialVolume);
    if (this.container.playback.el.nodeName.toLowerCase() === 'video') {
      // wait until the metadata has loaded and then check if fullscreen on video tag is supported
      this.listenToOnce(this.container, _events2.default.CONTAINER_LOADEDMETADATA, this.onLoadedMetadataOnVideoTag);
    }
  };

  MediaControl.prototype.disable = function disable() {
    this.userDisabled = true;
    this.hide();
    this.unbindKeyEvents();
    this.$el.hide();
  };

  MediaControl.prototype.enable = function enable() {
    if (this.options.chromeless) return;
    this.userDisabled = false;
    this.bindKeyEvents();
    this.show();
  };

  MediaControl.prototype.play = function play() {
    this.container && this.container.play();
  };

  MediaControl.prototype.pause = function pause() {
    this.container && this.container.pause();
  };

  MediaControl.prototype.stop = function stop() {
    this.container && this.container.stop();
  };

  MediaControl.prototype.setInitialVolume = function setInitialVolume() {
    var initialVolume = this.persistConfig ? _utils.Config.restore('volume') : 100;
    var options = this.container && this.container.options || this.options;
    this.setVolume(options.mute ? 0 : initialVolume, true);
  };

  MediaControl.prototype.onVolumeChanged = function onVolumeChanged() {
    this.updateVolumeUI();
  };

  MediaControl.prototype.onLoadedMetadataOnVideoTag = function onLoadedMetadataOnVideoTag() {
    var video = this.playback && this.playback.el;
    // video.webkitSupportsFullscreen is deprecated but iOS appears to only use this
    // see https://github.com/clappr/clappr/issues/1127
    if (!_utils.Fullscreen.fullscreenEnabled() && video.webkitSupportsFullscreen) {
      this.fullScreenOnVideoTagSupported = true;
      this.settingsUpdate();
    }
  };

  MediaControl.prototype.updateVolumeUI = function updateVolumeUI() {
    // this will be called after a render
    if (!this.rendered) return;

    // update volume bar scrubber/fill on bar mode
    this.$volumeBarContainer.find('.bar-fill-2').css({});
    var containerWidth = this.$volumeBarContainer.width();
    var barWidth = this.$volumeBarBackground.width();
    var offset = (containerWidth - barWidth) / 2.0;
    var pos = barWidth * this.volume / 100.0 + offset;
    this.$volumeBarFill.css({ width: this.volume + '%' });
    this.$volumeBarScrubber.css({ left: pos });

    // update volume bar segments on segmented bar mode
    this.$volumeBarContainer.find('.segmented-bar-element').removeClass('fill');
    var item = Math.ceil(this.volume / 10.0);
    this.$volumeBarContainer.find('.segmented-bar-element').slice(0, item).addClass('fill');
    this.$volumeIcon.html('');
    this.$volumeIcon.removeClass('muted');
    if (!this.muted) {
      this.$volumeIcon.append(_utils.SvgIcons.volume);
    } else {
      this.$volumeIcon.append(_utils.SvgIcons.volumeMute);
      this.$volumeIcon.addClass('muted');
    }
    this.applyButtonStyle(this.$volumeIcon);
  };

  MediaControl.prototype.changeTogglePlay = function changeTogglePlay() {
    this.$playPauseToggle.html('');
    this.$playStopToggle.html('');
    if (this.container && this.container.isPlaying()) {
      this.$playPauseToggle.append(_utils.SvgIcons.pause);
      this.$playStopToggle.append(_utils.SvgIcons.stop);
      this.trigger(_events2.default.MEDIACONTROL_PLAYING);
    } else {
      this.$playPauseToggle.append(_utils.SvgIcons.play);
      this.$playStopToggle.append(_utils.SvgIcons.play);
      this.trigger(_events2.default.MEDIACONTROL_NOTPLAYING);
      _browser2.default.isMobile && this.show();
    }
    this.applyButtonStyle(this.$playPauseToggle);
    this.applyButtonStyle(this.$playStopToggle);
  };

  MediaControl.prototype.mousemoveOnSeekBar = function mousemoveOnSeekBar(event) {
    if (this.settings.seekEnabled) {
      var offsetX = event.pageX - this.$seekBarContainer.offset().left - this.$seekBarHover.width() / 2;
      this.$seekBarHover.css({ left: offsetX });
    }
    this.trigger(_events2.default.MEDIACONTROL_MOUSEMOVE_SEEKBAR, event);
  };

  MediaControl.prototype.mouseleaveOnSeekBar = function mouseleaveOnSeekBar(event) {
    this.trigger(_events2.default.MEDIACONTROL_MOUSELEAVE_SEEKBAR, event);
  };

  MediaControl.prototype.onVolumeClick = function onVolumeClick(event) {
    this.setVolume(this.getVolumeFromUIEvent(event));
  };

  MediaControl.prototype.mousemoveOnVolumeBar = function mousemoveOnVolumeBar(event) {
    this.draggingVolumeBar && this.setVolume(this.getVolumeFromUIEvent(event));
  };

  MediaControl.prototype.playerResize = function playerResize(size) {
    this.$fullscreenToggle.html('');
    var icon = this.core.isFullscreen() ? _utils.SvgIcons.exitFullscreen : _utils.SvgIcons.fullscreen;
    this.$fullscreenToggle.append(icon);
    this.applyButtonStyle(this.$fullscreenToggle);
    this.$el.find('.media-control').length !== 0 && this.$el.removeClass('w320');
    if (size.width <= 320 || this.options.hideVolumeBar) this.$el.addClass('w320');
  };

  MediaControl.prototype.togglePlayPause = function togglePlayPause() {
    this.container.isPlaying() ? this.container.pause() : this.container.play();
    return false;
  };

  MediaControl.prototype.togglePlayStop = function togglePlayStop() {
    this.container.isPlaying() ? this.container.stop() : this.container.play();
  };

  MediaControl.prototype.startSeekDrag = function startSeekDrag(event) {
    if (!this.settings.seekEnabled) return;
    this.draggingSeekBar = true;
    this.$el.addClass('dragging');
    this.$seekBarLoaded.addClass('media-control-notransition');
    this.$seekBarPosition.addClass('media-control-notransition');
    this.$seekBarScrubber.addClass('media-control-notransition');
    event && event.preventDefault();
  };

  MediaControl.prototype.startVolumeDrag = function startVolumeDrag(event) {
    this.draggingVolumeBar = true;
    this.$el.addClass('dragging');
    event && event.preventDefault();
  };

  MediaControl.prototype.stopDrag = function stopDrag(event) {
    this.draggingSeekBar && this.seek(event);
    this.$el.removeClass('dragging');
    this.$seekBarLoaded.removeClass('media-control-notransition');
    this.$seekBarPosition.removeClass('media-control-notransition');
    this.$seekBarScrubber.removeClass('media-control-notransition dragging');
    this.draggingSeekBar = false;
    this.draggingVolumeBar = false;
  };

  MediaControl.prototype.updateDrag = function updateDrag(event) {
    if (this.draggingSeekBar) {
      event.preventDefault();
      var offsetX = event.pageX - this.$seekBarContainer.offset().left;
      var pos = offsetX / this.$seekBarContainer.width() * 100;
      pos = Math.min(100, Math.max(pos, 0));
      this.setSeekPercentage(pos);
    } else if (this.draggingVolumeBar) {
      event.preventDefault();
      this.setVolume(this.getVolumeFromUIEvent(event));
    }
  };

  MediaControl.prototype.getVolumeFromUIEvent = function getVolumeFromUIEvent(event) {
    var offsetY = event.pageX - this.$volumeBarContainer.offset().left;
    var volumeFromUI = offsetY / this.$volumeBarContainer.width() * 100;
    return volumeFromUI;
  };

  MediaControl.prototype.toggleMute = function toggleMute() {
    if (this.muted) {
      this.setVolume(this._mutedVolume || 100);
      this._mutedVolume = null;
      return;
    }

    this._mutedVolume = this.volume;
    this.setVolume(0);
  };

  MediaControl.prototype.setVolume = function setVolume(value) {
    var _this4 = this;

    var isInitialVolume = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    value = Math.min(100, Math.max(value, 0));
    // this will hold the intended volume
    // it may not actually get set to this straight away
    // if the container is not ready etc
    this.intendedVolume = value;
    this.persistConfig && !isInitialVolume && _utils.Config.persist('volume', value);
    var setWhenContainerReady = function setWhenContainerReady() {
      if (_this4.container && _this4.container.isReady) {
        _this4.container.setVolume(value);
      } else {
        _this4.listenToOnce(_this4.container, _events2.default.CONTAINER_READY, function () {
          _this4.container.setVolume(value);
        });
      }
    };

    if (!this.container) this.listenToOnce(this, _events2.default.MEDIACONTROL_CONTAINERCHANGED, function () {
      return setWhenContainerReady();
    });else setWhenContainerReady();
  };

  MediaControl.prototype.toggleFullscreen = function toggleFullscreen() {
    this.trigger(_events2.default.MEDIACONTROL_FULLSCREEN, this.name);
    this.container.fullscreen();
    this.core.toggleFullscreen();
    this.resetUserKeepVisible();
  };

  MediaControl.prototype.onActiveContainerChanged = function onActiveContainerChanged() {
    this.fullScreenOnVideoTagSupported = null;
    _mediator2.default.off(this.options.playerId + ':' + _events2.default.PLAYER_RESIZE, this.playerResize, this);
    this.bindEvents();
    // set the new container to match the volume of the last one
    this.setInitialVolume();
    this.changeTogglePlay();
    this.bindContainerEvents();
    this.settingsUpdate();
    this.container && this.container.trigger(_events2.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.container.isDvrInUse());
    this.container && this.container.mediaControlDisabled && this.disable();
    this.trigger(_events2.default.MEDIACONTROL_CONTAINERCHANGED);
  };

  MediaControl.prototype.showVolumeBar = function showVolumeBar() {
    this.hideVolumeId && clearTimeout(this.hideVolumeId);
    this.$volumeBarContainer.removeClass('volume-bar-hide');
  };

  MediaControl.prototype.hideVolumeBar = function hideVolumeBar() {
    var _this5 = this;

    var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 400;

    if (!this.$volumeBarContainer) return;
    if (this.draggingVolumeBar) {
      this.hideVolumeId = setTimeout(function () {
        return _this5.hideVolumeBar();
      }, timeout);
    } else {
      this.hideVolumeId && clearTimeout(this.hideVolumeId);
      this.hideVolumeId = setTimeout(function () {
        return _this5.$volumeBarContainer.addClass('volume-bar-hide');
      }, timeout);
    }
  };

  MediaControl.prototype.ended = function ended() {
    this.changeTogglePlay();
  };

  MediaControl.prototype.updateProgressBar = function updateProgressBar(progress) {
    var loadedStart = progress.start / progress.total * 100;
    var loadedEnd = progress.current / progress.total * 100;
    this.$seekBarLoaded.css({ left: loadedStart + '%', width: loadedEnd - loadedStart + '%' });
  };

  MediaControl.prototype.onTimeUpdate = function onTimeUpdate(timeProgress) {
    if (this.draggingSeekBar) return;
    // TODO why should current time ever be negative?
    var position = timeProgress.current < 0 ? timeProgress.total : timeProgress.current;

    this.currentPositionValue = position;
    this.currentDurationValue = timeProgress.total;
    this.renderSeekBar();
  };

  MediaControl.prototype.renderSeekBar = function renderSeekBar() {
    // this will be triggered as soon as these become available
    if (this.currentPositionValue === null || this.currentDurationValue === null) return;

    // default to 100%
    this.currentSeekBarPercentage = 100;
    if (this.container && (this.container.getPlaybackType() !== _playback2.default.LIVE || this.container.isDvrInUse())) this.currentSeekBarPercentage = this.currentPositionValue / this.currentDurationValue * 100;

    this.setSeekPercentage(this.currentSeekBarPercentage);

    var newPosition = (0, _utils.formatTime)(this.currentPositionValue);
    var newDuration = (0, _utils.formatTime)(this.currentDurationValue);
    if (newPosition !== this.displayedPosition) {
      this.$position.text(newPosition);
      this.displayedPosition = newPosition;
    }
    if (newDuration !== this.displayedDuration) {
      this.$duration.text(newDuration);
      this.displayedDuration = newDuration;
    }
  };

  MediaControl.prototype.seek = function seek(event) {
    if (!this.settings.seekEnabled) return;
    var offsetX = event.pageX - this.$seekBarContainer.offset().left;
    var pos = offsetX / this.$seekBarContainer.width() * 100;
    pos = Math.min(100, Math.max(pos, 0));
    this.container && this.container.seekPercentage(pos);
    this.setSeekPercentage(pos);
    return false;
  };

  MediaControl.prototype.setKeepVisible = function setKeepVisible() {
    this.keepVisible = true;
  };

  MediaControl.prototype.resetKeepVisible = function resetKeepVisible() {
    this.keepVisible = false;
  };

  MediaControl.prototype.setUserKeepVisible = function setUserKeepVisible() {
    this.userKeepVisible = true;
  };

  MediaControl.prototype.resetUserKeepVisible = function resetUserKeepVisible() {
    this.userKeepVisible = false;
  };

  MediaControl.prototype.isVisible = function isVisible() {
    return !this.$el.hasClass('media-control-hide');
  };

  MediaControl.prototype.show = function show(event) {
    var _this6 = this;

    if (this.disabled) return;

    var timeout = 2000;
    var mousePointerMoved = event && event.clientX !== this.lastMouseX && event.clientY !== this.lastMouseY;
    if (!event || mousePointerMoved || navigator.userAgent.match(/firefox/i)) {
      clearTimeout(this.hideId);
      this.$el.show();
      this.trigger(_events2.default.MEDIACONTROL_SHOW, this.name);
      this.container && this.container.trigger(_events2.default.CONTAINER_MEDIACONTROL_SHOW, this.name);
      this.$el.removeClass('media-control-hide');
      this.hideId = setTimeout(function () {
        return _this6.hide();
      }, timeout);
      if (event) {
        this.lastMouseX = event.clientX;
        this.lastMouseY = event.clientY;
      }
    }
    var showing = true;
    this.updateCursorStyle(showing);
  };

  MediaControl.prototype.hide = function hide() {
    var _this7 = this;

    var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (!this.isVisible()) return;

    var timeout = delay || 2000;
    clearTimeout(this.hideId);
    if (!this.disabled && this.options.hideMediaControl === false) return;

    var hasKeepVisibleRequested = this.userKeepVisible || this.keepVisible;
    var hasDraggingAction = this.draggingSeekBar || this.draggingVolumeBar;

    if (!this.disabled && (delay || hasKeepVisibleRequested || hasDraggingAction)) {
      this.hideId = setTimeout(function () {
        return _this7.hide();
      }, timeout);
    } else {
      this.trigger(_events2.default.MEDIACONTROL_HIDE, this.name);
      this.container && this.container.trigger(_events2.default.CONTAINER_MEDIACONTROL_HIDE, this.name);
      this.$el.addClass('media-control-hide');
      this.hideVolumeBar(0);
      var showing = false;
      this.updateCursorStyle(showing);
    }
  };

  MediaControl.prototype.updateCursorStyle = function updateCursorStyle(showing) {
    if (showing) this.core.$el.removeClass('nocursor');else if (this.core.isFullscreen()) this.core.$el.addClass('nocursor');
  };

  MediaControl.prototype.settingsUpdate = function settingsUpdate() {
    var newSettings = this.getSettings();
    if (newSettings && !this.fullScreenOnVideoTagSupported && !_utils.Fullscreen.fullscreenEnabled()) {
      // remove fullscreen from settings if it is present
      newSettings.default && (0, _utils.removeArrayItem)(newSettings.default, 'fullscreen');
      newSettings.left && (0, _utils.removeArrayItem)(newSettings.left, 'fullscreen');
      newSettings.right && (0, _utils.removeArrayItem)(newSettings.right, 'fullscreen');
    }
    var settingsChanged = (0, _stringify2.default)(this.settings) !== (0, _stringify2.default)(newSettings);
    if (settingsChanged) {
      this.settings = newSettings;
      this.render();
    }
  };

  MediaControl.prototype.getSettings = function getSettings() {
    return _clapprZepto2.default.extend(true, {}, this.container && this.container.settings);
  };

  MediaControl.prototype.highDefinitionUpdate = function highDefinitionUpdate(isHD) {
    this.isHD = isHD;
    var method = isHD ? 'addClass' : 'removeClass';
    this.$hdIndicator[method]('enabled');
  };

  MediaControl.prototype.createCachedElements = function createCachedElements() {
    var $layer = this.$el.find('.media-control-layer');
    this.$duration = $layer.find('.media-control-indicator[data-duration]');
    this.$fullscreenToggle = $layer.find('button.media-control-button[data-fullscreen]');
    this.$playPauseToggle = $layer.find('button.media-control-button[data-playpause]');
    this.$playStopToggle = $layer.find('button.media-control-button[data-playstop]');
    this.$position = $layer.find('.media-control-indicator[data-position]');
    this.$seekBarContainer = $layer.find('.bar-container[data-seekbar]');
    this.$seekBarHover = $layer.find('.bar-hover[data-seekbar]');
    this.$seekBarLoaded = $layer.find('.bar-fill-1[data-seekbar]');
    this.$seekBarPosition = $layer.find('.bar-fill-2[data-seekbar]');
    this.$seekBarScrubber = $layer.find('.bar-scrubber[data-seekbar]');
    this.$volumeBarContainer = $layer.find('.bar-container[data-volume]');
    this.$volumeContainer = $layer.find('.drawer-container[data-volume]');
    this.$volumeIcon = $layer.find('.drawer-icon[data-volume]');
    this.$volumeBarBackground = this.$el.find('.bar-background[data-volume]');
    this.$volumeBarFill = this.$el.find('.bar-fill-1[data-volume]');
    this.$volumeBarScrubber = this.$el.find('.bar-scrubber[data-volume]');
    this.$hdIndicator = this.$el.find('button.media-control-button[data-hd-indicator]');
    this.resetIndicators();
    this.initializeIcons();
  };

  MediaControl.prototype.resetIndicators = function resetIndicators() {
    this.displayedPosition = this.$position.text();
    this.displayedDuration = this.$duration.text();
  };

  MediaControl.prototype.initializeIcons = function initializeIcons() {
    var $layer = this.$el.find('.media-control-layer');
    $layer.find('button.media-control-button[data-play]').append(_utils.SvgIcons.play);
    $layer.find('button.media-control-button[data-pause]').append(_utils.SvgIcons.pause);
    $layer.find('button.media-control-button[data-stop]').append(_utils.SvgIcons.stop);
    this.$playPauseToggle.append(_utils.SvgIcons.play);
    this.$playStopToggle.append(_utils.SvgIcons.play);
    this.$volumeIcon.append(_utils.SvgIcons.volume);
    this.$fullscreenToggle.append(_utils.SvgIcons.fullscreen);
    this.$hdIndicator.append(_utils.SvgIcons.hd);
  };

  MediaControl.prototype.setSeekPercentage = function setSeekPercentage(value) {
    value = Math.max(Math.min(value, 100.0), 0);
    // not changed since last update
    if (this.displayedSeekBarPercentage === value) return;

    this.displayedSeekBarPercentage = value;
    this.$seekBarPosition.removeClass('media-control-notransition');
    this.$seekBarScrubber.removeClass('media-control-notransition');
    this.$seekBarPosition.css({ width: value + '%' });
    this.$seekBarScrubber.css({ left: value + '%' });
  };

  MediaControl.prototype.seekRelative = function seekRelative(delta) {
    if (!this.settings.seekEnabled) return;

    var currentTime = this.container.getCurrentTime();
    var duration = this.container.getDuration();
    var position = Math.min(Math.max(currentTime + delta, 0), duration);
    position = Math.min(position * 100 / duration, 100);
    this.container.seekPercentage(position);
  };

  MediaControl.prototype.bindKeyAndShow = function bindKeyAndShow(key, callback) {
    var _this8 = this;

    this.kibo.down(key, function () {
      _this8.show();
      return callback();
    });
  };

  MediaControl.prototype.bindKeyEvents = function bindKeyEvents() {
    var _this9 = this;

    if (_browser2.default.isMobile || this.options.disableKeyboardShortcuts) return;

    this.unbindKeyEvents();
    this.kibo = new _vendor.Kibo(this.options.focusElement || this.options.parentElement);
    this.bindKeyAndShow('space', function () {
      return _this9.togglePlayPause();
    });
    this.bindKeyAndShow('left', function () {
      return _this9.seekRelative(-5);
    });
    this.bindKeyAndShow('right', function () {
      return _this9.seekRelative(5);
    });
    this.bindKeyAndShow('shift left', function () {
      return _this9.seekRelative(-10);
    });
    this.bindKeyAndShow('shift right', function () {
      return _this9.seekRelative(10);
    });
    this.bindKeyAndShow('shift ctrl left', function () {
      return _this9.seekRelative(-15);
    });
    this.bindKeyAndShow('shift ctrl right', function () {
      return _this9.seekRelative(15);
    });
    var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    keys.forEach(function (i) {
      _this9.bindKeyAndShow(i, function () {
        _this9.settings.seekEnabled && _this9.container && _this9.container.seekPercentage(i * 10);
      });
    });
  };

  MediaControl.prototype.unbindKeyEvents = function unbindKeyEvents() {
    if (this.kibo) {
      this.kibo.off('space');
      this.kibo.off('left');
      this.kibo.off('right');
      this.kibo.off('shift left');
      this.kibo.off('shift right');
      this.kibo.off('shift ctrl left');
      this.kibo.off('shift ctrl right');
      this.kibo.off(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
    }
  };

  MediaControl.prototype.parseColors = function parseColors() {
    if (this.options.mediacontrol) {
      this.buttonsColor = this.options.mediacontrol.buttons;
      var seekbarColor = this.options.mediacontrol.seekbar;
      this.$el.find('.bar-fill-2[data-seekbar]').css('background-color', seekbarColor);
      this.$el.find('.media-control-icon svg path').css('fill', this.buttonsColor);
      this.$el.find('.segmented-bar-element[data-volume]').css('boxShadow', 'inset 2px 0 0 ' + this.buttonsColor);
    }
  };

  MediaControl.prototype.applyButtonStyle = function applyButtonStyle(element) {
    this.buttonsColor && element && (0, _clapprZepto2.default)(element).find('svg path').css('fill', this.buttonsColor);
  };

  MediaControl.prototype.destroy = function destroy() {
    (0, _clapprZepto2.default)(document).unbind('mouseup', this.stopDragHandler);
    (0, _clapprZepto2.default)(document).unbind('mousemove', this.updateDragHandler);
    this.unbindKeyEvents();
    this.stopListening();
    _UICorePlugin.prototype.destroy.call(this);
  };

  /**
   * enables to configure the media control after its creation
   * @method configure
   * @param {Object} options all the options to change in form of a javascript object
   */


  MediaControl.prototype.configure = function configure(options) {
    // Check if chromeless mode or if configure is called with new source(s)
    if (this.options.chromeless || options.source || options.sources) this.disable();else this.enable();

    this.trigger(_events2.default.MEDIACONTROL_OPTIONS_CHANGE);
  };

  MediaControl.prototype.render = function render() {
    var _this10 = this;

    var timeout = this.options.hideMediaControlDelay || 2000;
    this.settings && this.$el.html(this.template({ settings: this.settings }));
    this.createCachedElements();
    this.$playPauseToggle.addClass('paused');
    this.$playStopToggle.addClass('stopped');

    this.changeTogglePlay();

    if (this.container) {
      this.hideId = setTimeout(function () {
        return _this10.hide();
      }, timeout);
      this.disabled && this.hide();
    }

    // Video volume cannot be changed with Safari on mobile devices
    // Display mute/unmute icon only if Safari version >= 10
    if (_browser2.default.isSafari && _browser2.default.isMobile) {
      if (_browser2.default.version < 10) this.$volumeContainer.css('display', 'none');else this.$volumeBarContainer.css('display', 'none');
    }

    this.$seekBarPosition.addClass('media-control-notransition');
    this.$seekBarScrubber.addClass('media-control-notransition');

    var previousSeekPercentage = 0;
    if (this.displayedSeekBarPercentage) previousSeekPercentage = this.displayedSeekBarPercentage;

    this.displayedSeekBarPercentage = null;
    this.setSeekPercentage(previousSeekPercentage);

    process.nextTick(function () {
      !_this10.settings.seekEnabled && _this10.$seekBarContainer.addClass('seek-disabled');
      !_browser2.default.isMobile && !_this10.options.disableKeyboardShortcuts && _this10.bindKeyEvents();
      _this10.playerResize({ width: _this10.options.width, height: _this10.options.height });
      _this10.hideVolumeBar(0);
    });

    this.parseColors();
    this.highDefinitionUpdate(this.isHD);

    this.core.$el.append(this.el);

    this.rendered = true;
    this.updateVolumeUI();
    this.trigger(_events2.default.MEDIACONTROL_RENDERED);
    return this;
  };

  return MediaControl;
}(_ui_core_plugin2.default);

exports.default = MediaControl;


MediaControl.extend = function (properties) {
  return (0, _utils.extend)(MediaControl, properties);
};
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/plugins/media_control/public/media-control.html":
/*!*************************************************************!*\
  !*** ./src/plugins/media_control/public/media-control.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"media-control-background\" data-background></div>\n<div class=\"media-control-layer\" data-controls>\n  <%  var renderBar = function(name) { %>\n      <div class=\"bar-container\" data-<%= name %>>\n        <div class=\"bar-background\" data-<%= name %>>\n          <div class=\"bar-fill-1\" data-<%= name %>></div>\n          <div class=\"bar-fill-2\" data-<%= name %>></div>\n          <div class=\"bar-hover\" data-<%= name %>></div>\n        </div>\n        <div class=\"bar-scrubber\" data-<%= name %>>\n          <div class=\"bar-scrubber-icon\" data-<%= name %>></div>\n        </div>\n      </div>\n  <%  }; %>\n  <%  var renderSegmentedBar = function(name, segments) {\n      segments = segments || 10; %>\n    <div class=\"bar-container\" data-<%= name %>>\n    <% for (var i = 0; i < segments; i++) { %>\n      <div class=\"segmented-bar-element\" data-<%= name %>></div>\n    <% } %>\n    </div>\n  <% }; %>\n  <% var renderDrawer = function(name, renderContent) { %>\n      <div class=\"drawer-container\" data-<%= name %>>\n        <div class=\"drawer-icon-container\" data-<%= name %>>\n          <div class=\"drawer-icon media-control-icon\" data-<%= name %>></div>\n          <span class=\"drawer-text\" data-<%= name %>></span>\n        </div>\n        <% renderContent(name); %>\n      </div>\n  <% }; %>\n  <% var renderIndicator = function(name) { %>\n      <div class=\"media-control-indicator\" data-<%= name %>></div>\n  <% }; %>\n  <% var renderButton = function(name) { %>\n    <button type=\"button\" class=\"media-control-button media-control-icon\" data-<%= name %> aria-label=\"<%= name %>\"></button>\n  <% }; %>\n  <%  var templates = {\n        bar: renderBar,\n        segmentedBar: renderSegmentedBar,\n      };\n      var render = function(settingsList) {\n        settingsList.forEach(function(setting) {\n          if(setting === \"seekbar\") {\n            renderBar(setting);\n          } else if (setting === \"volume\") {\n            renderDrawer(setting, settings.volumeBarTemplate ? templates[settings.volumeBarTemplate] : function(name) { return renderSegmentedBar(name); });\n          } else if (setting === \"duration\" || setting === \"position\") {\n            renderIndicator(setting);\n          } else {\n            renderButton(setting);\n          }\n        });\n      }; %>\n  <% if (settings.default && settings.default.length) { %>\n  <div class=\"media-control-center-panel\" data-media-control>\n    <% render(settings.default); %>\n  </div>\n  <% } %>\n  <% if (settings.left && settings.left.length) { %>\n  <div class=\"media-control-left-panel\" data-media-control>\n    <% render(settings.left); %>\n  </div>\n  <% } %>\n  <% if (settings.right && settings.right.length) { %>\n  <div class=\"media-control-right-panel\" data-media-control>\n    <% render(settings.right); %>\n  </div>\n  <% } %>\n</div>\n";

/***/ }),

/***/ "./src/plugins/media_control/public/media-control.scss":
/*!*************************************************************!*\
  !*** ./src/plugins/media_control/public/media-control.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./media-control.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/media_control/public/media-control.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/plugins/poster/index.js":
/*!*************************************!*\
  !*** ./src/plugins/poster/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _poster = __webpack_require__(/*! ./poster */ "./src/plugins/poster/poster.js");

var _poster2 = _interopRequireDefault(_poster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _poster2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/poster/poster.js":
/*!**************************************!*\
  !*** ./src/plugins/poster/poster.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _ui_container_plugin = __webpack_require__(/*! ../../base/ui_container_plugin */ "./src/base/ui_container_plugin.js");

var _ui_container_plugin2 = _interopRequireDefault(_ui_container_plugin);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _template = __webpack_require__(/*! ../../base/template */ "./src/base/template.js");

var _template2 = _interopRequireDefault(_template);

var _playback = __webpack_require__(/*! ../../base/playback */ "./src/base/playback.js");

var _playback2 = _interopRequireDefault(_playback);

var _error = __webpack_require__(/*! ../../components/error/error */ "./src/components/error/error.js");

var _error2 = _interopRequireDefault(_error);

var _poster = __webpack_require__(/*! ./public/poster.html */ "./src/plugins/poster/public/poster.html");

var _poster2 = _interopRequireDefault(_poster);

var _utils = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js");

__webpack_require__(/*! ./public/poster.scss */ "./src/plugins/poster/public/poster.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var PosterPlugin = function (_UIContainerPlugin) {
  (0, _inherits3.default)(PosterPlugin, _UIContainerPlugin);
  (0, _createClass3.default)(PosterPlugin, [{
    key: 'name',
    get: function get() {
      return 'poster';
    }
  }, {
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_poster2.default);
    }
  }, {
    key: 'shouldRender',
    get: function get() {
      var showForNoOp = !!(this.options.poster && this.options.poster.showForNoOp);
      return this.container.playback.name !== 'html_img' && (this.container.playback.getPlaybackType() !== _playback2.default.NO_OP || showForNoOp);
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'class': 'player-poster',
        'data-poster': ''
      };
    }
  }, {
    key: 'events',
    get: function get() {
      return {
        'click': 'clicked'
      };
    }
  }, {
    key: 'showOnVideoEnd',
    get: function get() {
      return !this.options.poster || this.options.poster.showOnVideoEnd || this.options.poster.showOnVideoEnd === undefined;
    }
  }]);

  function PosterPlugin(container) {
    (0, _classCallCheck3.default)(this, PosterPlugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UIContainerPlugin.call(this, container));

    _this.hasStartedPlaying = false;
    _this.playRequested = false;
    _this.render();
    process.nextTick(function () {
      return _this.update();
    });
    return _this;
  }

  PosterPlugin.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.container, _events2.default.CONTAINER_STOP, this.onStop);
    this.listenTo(this.container, _events2.default.CONTAINER_PLAY, this.onPlay);
    this.listenTo(this.container, _events2.default.CONTAINER_STATE_BUFFERING, this.update);
    this.listenTo(this.container, _events2.default.CONTAINER_STATE_BUFFERFULL, this.update);
    this.listenTo(this.container, _events2.default.CONTAINER_OPTIONS_CHANGE, this.render);
    this.listenTo(this.container, _events2.default.CONTAINER_ERROR, this.onError);
    this.showOnVideoEnd && this.listenTo(this.container, _events2.default.CONTAINER_ENDED, this.onStop);
  };

  PosterPlugin.prototype.onError = function onError(error) {
    this.hasFatalError = error.level === _error2.default.Levels.FATAL;

    if (this.hasFatalError) {
      this.hasStartedPlaying = false;
      this.playRequested = false;
      this.showPlayButton();
    }
  };

  PosterPlugin.prototype.onPlay = function onPlay() {
    this.hasStartedPlaying = true;
    this.update();
  };

  PosterPlugin.prototype.onStop = function onStop() {
    this.hasStartedPlaying = false;
    this.playRequested = false;
    this.update();
  };

  PosterPlugin.prototype.updatePlayButton = function updatePlayButton(show) {
    if (show && (!this.options.chromeless || this.options.allowUserInteraction)) this.showPlayButton();else this.hidePlayButton();
  };

  PosterPlugin.prototype.showPlayButton = function showPlayButton() {
    if (this.hasFatalError && !this.options.disableErrorScreen) return;

    this.$playButton.show();
    this.$el.addClass('clickable');
  };

  PosterPlugin.prototype.hidePlayButton = function hidePlayButton() {
    this.$playButton.hide();
    this.$el.removeClass('clickable');
  };

  PosterPlugin.prototype.clicked = function clicked() {
    // Let "click_to_pause" plugin handle click event if media has started playing
    if (!this.hasStartedPlaying) {
      if (!this.options.chromeless || this.options.allowUserInteraction) {
        this.playRequested = true;
        this.update();
        this.container.play();
      }
      return false;
    }
  };

  PosterPlugin.prototype.shouldHideOnPlay = function shouldHideOnPlay() {
    // Audio broadcasts should keep the poster up; video should hide poster while playing.
    return !this.container.playback.isAudioOnly;
  };

  PosterPlugin.prototype.update = function update() {
    if (!this.shouldRender) return;

    var showPlayButton = !this.playRequested && !this.hasStartedPlaying && !this.container.buffering;
    this.updatePlayButton(showPlayButton);
    this.updatePoster();
  };

  PosterPlugin.prototype.updatePoster = function updatePoster() {
    if (!this.hasStartedPlaying) this.showPoster();else this.hidePoster();
  };

  PosterPlugin.prototype.showPoster = function showPoster() {
    this.container.disableMediaControl();
    this.$el.show();
  };

  PosterPlugin.prototype.hidePoster = function hidePoster() {
    this.container.enableMediaControl();
    if (this.shouldHideOnPlay()) this.$el.hide();
  };

  PosterPlugin.prototype.render = function render() {
    if (!this.shouldRender) return;

    this.$el.html(this.template());

    var isRegularPoster = this.options.poster && this.options.poster.custom === undefined;

    if (isRegularPoster) {
      var posterUrl = this.options.poster.url || this.options.poster;
      this.$el.css({ 'background-image': 'url(' + posterUrl + ')' });
    } else if (this.options.poster) {
      this.$el.css({ 'background': this.options.poster.custom });
    }

    this.container.$el.append(this.el);
    this.$playWrapper = this.$el.find('.play-wrapper');
    this.$playWrapper.append(_utils.SvgIcons.play);
    this.$playButton = this.$playWrapper.find('svg');
    this.$playButton.addClass('poster-icon');
    this.$playButton.attr('data-poster', '');

    var buttonsColor = this.options.mediacontrol && this.options.mediacontrol.buttons;
    if (buttonsColor) this.$el.find('svg path').css('fill', buttonsColor);

    if (this.options.mediacontrol && this.options.mediacontrol.buttons) {
      buttonsColor = this.options.mediacontrol.buttons;
      this.$playButton.css('color', buttonsColor);
    }
    this.update();
    return this;
  };

  return PosterPlugin;
}(_ui_container_plugin2.default);

exports.default = PosterPlugin;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/plugins/poster/public/poster.html":
/*!***********************************************!*\
  !*** ./src/plugins/poster/public/poster.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"play-wrapper\" data-poster></div>\n";

/***/ }),

/***/ "./src/plugins/poster/public/poster.scss":
/*!***********************************************!*\
  !*** ./src/plugins/poster/public/poster.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./poster.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/poster/public/poster.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/plugins/seek_time/index.js":
/*!****************************************!*\
  !*** ./src/plugins/seek_time/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _seek_time = __webpack_require__(/*! ./seek_time */ "./src/plugins/seek_time/seek_time.js");

var _seek_time2 = _interopRequireDefault(_seek_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _seek_time2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/seek_time/public/seek_time.html":
/*!*****************************************************!*\
  !*** ./src/plugins/seek_time/public/seek_time.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span data-seek-time></span>\n<span data-duration></span>\n";

/***/ }),

/***/ "./src/plugins/seek_time/public/seek_time.scss":
/*!*****************************************************!*\
  !*** ./src/plugins/seek_time/public/seek_time.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./seek_time.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/seek_time/public/seek_time.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/plugins/seek_time/seek_time.js":
/*!********************************************!*\
  !*** ./src/plugins/seek_time/seek_time.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js");

var _ui_core_plugin = __webpack_require__(/*! ../../base/ui_core_plugin */ "./src/base/ui_core_plugin.js");

var _ui_core_plugin2 = _interopRequireDefault(_ui_core_plugin);

var _template = __webpack_require__(/*! ../../base/template */ "./src/base/template.js");

var _template2 = _interopRequireDefault(_template);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _playback = __webpack_require__(/*! ../../base/playback */ "./src/base/playback.js");

var _playback2 = _interopRequireDefault(_playback);

var _seek_time = __webpack_require__(/*! ./public/seek_time.html */ "./src/plugins/seek_time/public/seek_time.html");

var _seek_time2 = _interopRequireDefault(_seek_time);

__webpack_require__(/*! ./public/seek_time.scss */ "./src/plugins/seek_time/public/seek_time.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SeekTime = function (_UICorePlugin) {
  (0, _inherits3.default)(SeekTime, _UICorePlugin);
  (0, _createClass3.default)(SeekTime, [{
    key: 'name',
    get: function get() {
      return 'seek_time';
    }
  }, {
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_seek_time2.default);
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'class': 'seek-time',
        'data-seek-time': ''
      };
    }
  }, {
    key: 'mediaControl',
    get: function get() {
      return this.core.mediaControl;
    }
  }, {
    key: 'mediaControlContainer',
    get: function get() {
      return this.mediaControl.container;
    }
  }, {
    key: 'isLiveStreamWithDvr',
    get: function get() {
      return this.mediaControlContainer && this.mediaControlContainer.getPlaybackType() === _playback2.default.LIVE && this.mediaControlContainer.isDvrEnabled();
    }
  }, {
    key: 'durationShown',
    get: function get() {
      return this.isLiveStreamWithDvr && !this.actualLiveTime;
    }
  }, {
    key: 'useActualLiveTime',
    get: function get() {
      return this.actualLiveTime && this.isLiveStreamWithDvr;
    }
  }]);

  function SeekTime(core) {
    (0, _classCallCheck3.default)(this, SeekTime);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UICorePlugin.call(this, core));

    _this.hoveringOverSeekBar = false;
    _this.hoverPosition = null;
    _this.duration = null;
    _this.firstFragDateTime = null;
    _this.actualLiveTime = !!_this.mediaControl.options.actualLiveTime;
    if (_this.actualLiveTime) {
      if (_this.mediaControl.options.actualLiveServerTime) _this.actualLiveServerTimeDiff = new Date().getTime() - new Date(_this.mediaControl.options.actualLiveServerTime).getTime();else _this.actualLiveServerTimeDiff = 0;
    }
    return _this;
  }

  SeekTime.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.mediaControl, _events2.default.MEDIACONTROL_RENDERED, this.render);
    this.listenTo(this.mediaControl, _events2.default.MEDIACONTROL_MOUSEMOVE_SEEKBAR, this.showTime);
    this.listenTo(this.mediaControl, _events2.default.MEDIACONTROL_MOUSELEAVE_SEEKBAR, this.hideTime);
    this.listenTo(this.mediaControl, _events2.default.MEDIACONTROL_CONTAINERCHANGED, this.onContainerChanged);
    if (this.mediaControlContainer) {
      this.listenTo(this.mediaControlContainer, _events2.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.update);
      this.listenTo(this.mediaControlContainer, _events2.default.CONTAINER_TIMEUPDATE, this.updateDuration);
    }
  };

  SeekTime.prototype.onContainerChanged = function onContainerChanged() {
    this.stopListening();
    this.bindEvents();
  };

  SeekTime.prototype.updateDuration = function updateDuration(timeProgress) {
    this.duration = timeProgress.total;
    this.firstFragDateTime = timeProgress.firstFragDateTime;
    this.update();
  };

  SeekTime.prototype.showTime = function showTime(event) {
    this.hoveringOverSeekBar = true;
    this.calculateHoverPosition(event);
    this.update();
  };

  SeekTime.prototype.hideTime = function hideTime() {
    this.hoveringOverSeekBar = false;
    this.update();
  };

  SeekTime.prototype.calculateHoverPosition = function calculateHoverPosition(event) {
    var offset = event.pageX - this.mediaControl.$seekBarContainer.offset().left;
    // proportion into the seek bar that the mouse is hovered over 0-1
    this.hoverPosition = Math.min(1, Math.max(offset / this.mediaControl.$seekBarContainer.width(), 0));
  };

  SeekTime.prototype.getSeekTime = function getSeekTime() {
    var seekTime = void 0,
        secondsSinceMidnight = void 0,
        d = void 0,
        e = void 0;
    if (this.useActualLiveTime) {
      if (this.firstFragDateTime) {
        e = new Date(this.firstFragDateTime);
        d = new Date(this.firstFragDateTime);
        d.setHours(0, 0, 0, 0);
        secondsSinceMidnight = (e.getTime() - d.getTime()) / 1000 + this.duration;
      } else {
        d = new Date(new Date().getTime() - this.actualLiveServerTimeDiff);
        e = new Date(d);
        secondsSinceMidnight = (e - d.setHours(0, 0, 0, 0)) / 1000;
      }
      seekTime = secondsSinceMidnight - this.duration + this.hoverPosition * this.duration;
      if (seekTime < 0) seekTime += 86400;
    } else {
      seekTime = this.hoverPosition * this.duration;
    }

    return { seekTime: seekTime, secondsSinceMidnight: secondsSinceMidnight };
  };

  SeekTime.prototype.update = function update() {
    if (!this.rendered) {
      // update() is always called after a render
      return;
    }
    if (!this.shouldBeVisible()) {
      this.$el.hide();
      this.$el.css('left', '-100%');
    } else {
      var seekTime = this.getSeekTime();
      var currentSeekTime = (0, _utils.formatTime)(seekTime.seekTime, this.useActualLiveTime);
      // only update dom if necessary, ie time actually changed
      if (currentSeekTime !== this.displayedSeekTime) {
        this.$seekTimeEl.text(currentSeekTime);
        this.displayedSeekTime = currentSeekTime;
      }

      if (this.durationShown) {
        this.$durationEl.show();
        var currentDuration = (0, _utils.formatTime)(this.actualLiveTime ? seekTime.secondsSinceMidnight : this.duration, this.actualLiveTime);
        if (currentDuration !== this.displayedDuration) {
          this.$durationEl.text(currentDuration);
          this.displayedDuration = currentDuration;
        }
      } else {
        this.$durationEl.hide();
      }

      // the element must be unhidden before its width is requested, otherwise it's width will be reported as 0
      this.$el.show();
      var containerWidth = this.mediaControl.$seekBarContainer.width();
      var elWidth = this.$el.width();
      var elLeftPos = this.hoverPosition * containerWidth;
      elLeftPos -= elWidth / 2;
      elLeftPos = Math.max(0, Math.min(elLeftPos, containerWidth - elWidth));
      this.$el.css('left', elLeftPos);
    }
  };

  SeekTime.prototype.shouldBeVisible = function shouldBeVisible() {
    return this.mediaControlContainer && this.mediaControlContainer.settings.seekEnabled && this.hoveringOverSeekBar && this.hoverPosition !== null && this.duration !== null;
  };

  SeekTime.prototype.render = function render() {
    this.rendered = true;
    this.displayedDuration = null;
    this.displayedSeekTime = null;
    this.$el.html(this.template());
    this.$el.hide();
    this.mediaControl.$el.append(this.el);
    this.$seekTimeEl = this.$el.find('[data-seek-time]');
    this.$durationEl = this.$el.find('[data-duration]');
    this.$durationEl.hide();
    this.update();
  };

  return SeekTime;
}(_ui_core_plugin2.default); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = SeekTime;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/sources.js":
/*!********************************!*\
  !*** ./src/plugins/sources.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _core_plugin = __webpack_require__(/*! ../base/core_plugin */ "./src/base/core_plugin.js");

var _core_plugin2 = _interopRequireDefault(_core_plugin);

var _events = __webpack_require__(/*! ../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SourcesPlugin = function (_CorePlugin) {
  (0, _inherits3.default)(SourcesPlugin, _CorePlugin);

  function SourcesPlugin() {
    (0, _classCallCheck3.default)(this, SourcesPlugin);
    return (0, _possibleConstructorReturn3.default)(this, _CorePlugin.apply(this, arguments));
  }

  SourcesPlugin.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.core, _events2.default.CORE_CONTAINERS_CREATED, this.onContainersCreated);
  };

  SourcesPlugin.prototype.onContainersCreated = function onContainersCreated() {
    var firstValidSource = this.core.containers.filter(function (container) {
      return container.playback.name !== 'no_op';
    })[0] || this.core.containers[0];
    if (firstValidSource) {
      this.core.containers.forEach(function (container) {
        if (container !== firstValidSource) container.destroy();
      });
    }
  };

  (0, _createClass3.default)(SourcesPlugin, [{
    key: 'name',
    get: function get() {
      return 'sources';
    }
  }]);
  return SourcesPlugin;
}(_core_plugin2.default);

exports.default = SourcesPlugin;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/spinner_three_bounce/index.js":
/*!***************************************************!*\
  !*** ./src/plugins/spinner_three_bounce/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spinner_three_bounce = __webpack_require__(/*! ./spinner_three_bounce */ "./src/plugins/spinner_three_bounce/spinner_three_bounce.js");

var _spinner_three_bounce2 = _interopRequireDefault(_spinner_three_bounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _spinner_three_bounce2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/spinner_three_bounce/public/spinner.html":
/*!**************************************************************!*\
  !*** ./src/plugins/spinner_three_bounce/public/spinner.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-bounce1></div><div data-bounce2></div><div data-bounce3></div>\n";

/***/ }),

/***/ "./src/plugins/spinner_three_bounce/public/spinner.scss":
/*!**************************************************************!*\
  !*** ./src/plugins/spinner_three_bounce/public/spinner.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./spinner.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/spinner_three_bounce/public/spinner.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/plugins/spinner_three_bounce/spinner_three_bounce.js":
/*!******************************************************************!*\
  !*** ./src/plugins/spinner_three_bounce/spinner_three_bounce.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _ui_container_plugin = __webpack_require__(/*! ../../base/ui_container_plugin */ "./src/base/ui_container_plugin.js");

var _ui_container_plugin2 = _interopRequireDefault(_ui_container_plugin);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _template = __webpack_require__(/*! ../../base/template */ "./src/base/template.js");

var _template2 = _interopRequireDefault(_template);

var _spinner = __webpack_require__(/*! ./public/spinner.html */ "./src/plugins/spinner_three_bounce/public/spinner.html");

var _spinner2 = _interopRequireDefault(_spinner);

__webpack_require__(/*! ./public/spinner.scss */ "./src/plugins/spinner_three_bounce/public/spinner.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpinnerThreeBouncePlugin = function (_UIContainerPlugin) {
  (0, _inherits3.default)(SpinnerThreeBouncePlugin, _UIContainerPlugin);
  (0, _createClass3.default)(SpinnerThreeBouncePlugin, [{
    key: 'name',
    get: function get() {
      return 'spinner';
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'data-spinner': '',
        'class': 'spinner-three-bounce'
      };
    }
  }]);

  function SpinnerThreeBouncePlugin(container) {
    (0, _classCallCheck3.default)(this, SpinnerThreeBouncePlugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UIContainerPlugin.call(this, container));

    _this.template = (0, _template2.default)(_spinner2.default);
    _this.showTimeout = null;
    _this.listenTo(_this.container, _events2.default.CONTAINER_STATE_BUFFERING, _this.onBuffering);
    _this.listenTo(_this.container, _events2.default.CONTAINER_STATE_BUFFERFULL, _this.onBufferFull);
    _this.listenTo(_this.container, _events2.default.CONTAINER_STOP, _this.onStop);
    _this.listenTo(_this.container, _events2.default.CONTAINER_ENDED, _this.onStop);
    _this.listenTo(_this.container, _events2.default.CONTAINER_ERROR, _this.onStop);
    _this.render();
    return _this;
  }

  SpinnerThreeBouncePlugin.prototype.onBuffering = function onBuffering() {
    this.show();
  };

  SpinnerThreeBouncePlugin.prototype.onBufferFull = function onBufferFull() {
    this.hide();
  };

  SpinnerThreeBouncePlugin.prototype.onStop = function onStop() {
    this.hide();
  };

  SpinnerThreeBouncePlugin.prototype.show = function show() {
    var _this2 = this;

    if (this.showTimeout === null) this.showTimeout = setTimeout(function () {
      return _this2.$el.show();
    }, 300);
  };

  SpinnerThreeBouncePlugin.prototype.hide = function hide() {
    if (this.showTimeout !== null) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
    this.$el.hide();
  };

  SpinnerThreeBouncePlugin.prototype.render = function render() {
    this.$el.html(this.template());
    this.container.$el.append(this.$el);
    this.$el.hide();
    if (this.container.buffering) this.onBuffering();

    return this;
  };

  return SpinnerThreeBouncePlugin;
}(_ui_container_plugin2.default); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = SpinnerThreeBouncePlugin;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/stats/index.js":
/*!************************************!*\
  !*** ./src/plugins/stats/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stats = __webpack_require__(/*! ./stats */ "./src/plugins/stats/stats.js");

var _stats2 = _interopRequireDefault(_stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _stats2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/stats/stats.js":
/*!************************************!*\
  !*** ./src/plugins/stats/stats.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _container_plugin = __webpack_require__(/*! ../../base/container_plugin */ "./src/base/container_plugin.js");

var _container_plugin2 = _interopRequireDefault(_container_plugin);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _clapprZepto = __webpack_require__(/*! clappr-zepto */ "./node_modules/clappr-zepto/zepto.js");

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatsPlugin = function (_ContainerPlugin) {
  (0, _inherits3.default)(StatsPlugin, _ContainerPlugin);
  (0, _createClass3.default)(StatsPlugin, [{
    key: 'name',
    get: function get() {
      return 'stats';
    }
  }]);

  function StatsPlugin(container) {
    (0, _classCallCheck3.default)(this, StatsPlugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ContainerPlugin.call(this, container));

    _this.setInitialAttrs();
    _this.reportInterval = _this.options.reportInterval || 5000;
    _this.state = 'IDLE';
    return _this;
  }

  StatsPlugin.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.container.playback, _events2.default.PLAYBACK_PLAY, this.onPlay);
    this.listenTo(this.container, _events2.default.CONTAINER_STOP, this.onStop);
    this.listenTo(this.container, _events2.default.CONTAINER_ENDED, this.onStop);
    this.listenTo(this.container, _events2.default.CONTAINER_DESTROYED, this.onStop);
    this.listenTo(this.container, _events2.default.CONTAINER_STATE_BUFFERING, this.onBuffering);
    this.listenTo(this.container, _events2.default.CONTAINER_STATE_BUFFERFULL, this.onBufferFull);
    this.listenTo(this.container, _events2.default.CONTAINER_STATS_ADD, this.onStatsAdd);
    this.listenTo(this.container, _events2.default.CONTAINER_BITRATE, this.onStatsAdd);
    this.listenTo(this.container.playback, _events2.default.PLAYBACK_STATS_ADD, this.onStatsAdd);
  };

  StatsPlugin.prototype.setInitialAttrs = function setInitialAttrs() {
    this.firstPlay = true;
    this.startupTime = 0;
    this.rebufferingTime = 0;
    this.watchingTime = 0;
    this.rebuffers = 0;
    this.externalMetrics = {};
  };

  StatsPlugin.prototype.onPlay = function onPlay() {
    this.state = 'PLAYING';
    this.watchingTimeInit = Date.now();
    if (!this.intervalId) this.intervalId = setInterval(this.report.bind(this), this.reportInterval);
  };

  StatsPlugin.prototype.onStop = function onStop() {
    clearInterval(this.intervalId);
    this.report();
    this.intervalId = undefined;
    this.state = 'STOPPED';
  };

  StatsPlugin.prototype.onBuffering = function onBuffering() {
    if (this.firstPlay) this.startupTimeInit = Date.now();else this.rebufferingTimeInit = Date.now();

    this.state = 'BUFFERING';
    this.rebuffers++;
  };

  StatsPlugin.prototype.onBufferFull = function onBufferFull() {
    if (this.firstPlay && this.startupTimeInit) {
      this.firstPlay = false;
      this.startupTime = Date.now() - this.startupTimeInit;
      this.watchingTimeInit = Date.now();
    } else if (this.rebufferingTimeInit) {
      this.rebufferingTime += this.getRebufferingTime();
    }

    this.rebufferingTimeInit = undefined;
    this.state = 'PLAYING';
  };

  StatsPlugin.prototype.getRebufferingTime = function getRebufferingTime() {
    return Date.now() - this.rebufferingTimeInit;
  };

  StatsPlugin.prototype.getWatchingTime = function getWatchingTime() {
    var totalTime = Date.now() - this.watchingTimeInit;
    return totalTime - this.rebufferingTime;
  };

  StatsPlugin.prototype.isRebuffering = function isRebuffering() {
    return !!this.rebufferingTimeInit;
  };

  StatsPlugin.prototype.onStatsAdd = function onStatsAdd(metric) {
    _clapprZepto2.default.extend(this.externalMetrics, metric);
  };

  StatsPlugin.prototype.getStats = function getStats() {
    var metrics = {
      startupTime: this.startupTime,
      rebuffers: this.rebuffers,
      rebufferingTime: this.isRebuffering() ? this.rebufferingTime + this.getRebufferingTime() : this.rebufferingTime,
      watchingTime: this.isRebuffering() ? this.getWatchingTime() - this.getRebufferingTime() : this.getWatchingTime()
    };
    _clapprZepto2.default.extend(metrics, this.externalMetrics);
    return metrics;
  };

  StatsPlugin.prototype.report = function report() {
    this.container.statsReport(this.getStats());
  };

  return StatsPlugin;
}(_container_plugin2.default); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = StatsPlugin;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/strings.js":
/*!********************************!*\
  !*** ./src/plugins/strings.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ../base/utils */ "./src/base/utils.js");

var _clapprZepto = __webpack_require__(/*! clappr-zepto */ "./node_modules/clappr-zepto/zepto.js");

var _clapprZepto2 = _interopRequireDefault(_clapprZepto);

var _core_plugin = __webpack_require__(/*! ../base/core_plugin */ "./src/base/core_plugin.js");

var _core_plugin2 = _interopRequireDefault(_core_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internationalization (i18n) plugin
 * @class Strings
 * @constructor
 * @extends CorePlugin
 * @module plugins
 */
var Strings = function (_CorePlugin) {
  (0, _inherits3.default)(Strings, _CorePlugin);
  (0, _createClass3.default)(Strings, [{
    key: 'name',
    get: function get() {
      return 'strings';
    }
  }]);

  function Strings(core) {
    (0, _classCallCheck3.default)(this, Strings);

    var _this = (0, _possibleConstructorReturn3.default)(this, _CorePlugin.call(this, core));

    _this._initializeMessages();
    return _this;
  }
  /**
   * Gets a translated string for the given key.
   * @method t
   * @param {String} key the key to all messages
   * @return {String} translated label
   */


  Strings.prototype.t = function t(key) {
    var lang = this._language();
    var fallbackLang = this._messages['en'];
    var i18n = lang && this._messages[lang] || fallbackLang;
    return i18n[key] || fallbackLang[key] || key;
  };

  Strings.prototype._language = function _language() {
    return this.core.options.language || (0, _utils.getBrowserLanguage)();
  };

  Strings.prototype._initializeMessages = function _initializeMessages() {
    var defaultMessages = {
      'en': {
        'live': 'live',
        'back_to_live': 'back to live',
        'disabled': 'Disabled',
        'playback_not_supported': 'Your browser does not support the playback of this video. Please try using a different browser.',
        'default_error_title': 'Could not play video.',
        'default_error_message': 'There was a problem trying to load the video.'
      },
      'pt': {
        'live': 'ao vivo',
        'back_to_live': 'voltar para o ao vivo',
        'disabled': 'Desativado',
        'playback_not_supported': 'Seu navegador não supporta a reprodução deste video. Por favor, tente usar um navegador diferente.',
        'default_error_title': 'Não foi possível reproduzir o vídeo.',
        'default_error_message': 'Ocorreu um problema ao tentar carregar o vídeo.'
      },
      'es': {
        'live': 'vivo',
        'back_to_live': 'volver en vivo',
        'disabled': 'Discapacitado',
        'playback_not_supported': 'Su navegador no soporta la reproducción de un video. Por favor, trate de usar un navegador diferente.'
      },
      'ru': {
        'live': 'прямой эфир',
        'back_to_live': 'к прямому эфиру',
        'disabled': 'Отключено',
        'playback_not_supported': 'Ваш браузер не поддерживает воспроизведение этого видео. Пожалуйста, попробуйте другой браузер.'
      },
      'fr': {
        'live': 'en direct',
        'back_to_live': 'retour au direct',
        'disabled': 'Désactivé',
        'playback_not_supported': 'Votre navigateur ne supporte pas la lecture de cette vidéo. Merci de tenter sur un autre navigateur.',
        'default_error_title': 'Impossible de lire la vidéo.',
        'default_error_message': 'Un problème est survenu lors du chargement de la vidéo.'
      },
      'tr': {
        'live': 'canlı',
        'back_to_live': 'canlı yayına dön',
        'disabled': 'Engelli',
        'playback_not_supported': 'Tarayıcınız bu videoyu oynatma desteğine sahip değil. Lütfen farklı bir tarayıcı ile deneyin.'
      },
      'et': {
        'live': 'Otseülekanne',
        'back_to_live': 'Tagasi otseülekande juurde',
        'disabled': 'Keelatud',
        'playback_not_supported': 'Teie brauser ei toeta selle video taasesitust. Proovige kasutada muud brauserit.'
      },
      'ar': {
        'live': 'مباشر',
        'back_to_live': 'الرجوع إلى المباشر',
        'disabled': 'معطّل',
        'playback_not_supported': 'المتصفح الذي تستخدمه لا يدعم تشغيل هذا الفيديو. الرجاء إستخدام متصفح آخر.',
        'default_error_title': 'غير قادر الى التشغيل.',
        'default_error_message': 'حدثت مشكلة أثناء تحميل الفيديو.'
      }
    };

    this._messages = _clapprZepto2.default.extend(true, defaultMessages, this.core.options.strings || {});
    this._messages['pt-BR'] = this._messages['pt'];
    this._messages['en-US'] = this._messages['en'];
    this._messages['es-419'] = this._messages['es'];
    this._messages['fr-FR'] = this._messages['fr'];
    this._messages['tr-TR'] = this._messages['tr'];
    this._messages['et-EE'] = this._messages['et'];
    this._messages['ar-IQ'] = this._messages['ar'];
  };

  return Strings;
}(_core_plugin2.default);

exports.default = Strings;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/watermark/index.js":
/*!****************************************!*\
  !*** ./src/plugins/watermark/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _watermark = __webpack_require__(/*! ./watermark */ "./src/plugins/watermark/watermark.js");

var _watermark2 = _interopRequireDefault(_watermark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _watermark2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./src/plugins/watermark/public/watermark.html":
/*!*****************************************************!*\
  !*** ./src/plugins/watermark/public/watermark.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clappr-watermark\" data-watermark data-watermark-<%=position %>>\n<% if(typeof imageLink !== 'undefined') { %>\n<a target=_blank href=\"<%= imageLink %>\">\n<% } %>\n<img src=\"<%= imageUrl %>\">\n<% if(typeof imageLink !== 'undefined') { %>\n</a>\n<% } %>\n</div>\n";

/***/ }),

/***/ "./src/plugins/watermark/public/watermark.scss":
/*!*****************************************************!*\
  !*** ./src/plugins/watermark/public/watermark.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/lib!../../../../node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./watermark.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js?includePaths[]=/Users/artemmyznikov/projects/clappr/src/base/scss!./src/plugins/watermark/public/watermark.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/plugins/watermark/watermark.js":
/*!********************************************!*\
  !*** ./src/plugins/watermark/watermark.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _ui_container_plugin = __webpack_require__(/*! ../../base/ui_container_plugin */ "./src/base/ui_container_plugin.js");

var _ui_container_plugin2 = _interopRequireDefault(_ui_container_plugin);

var _events = __webpack_require__(/*! ../../base/events */ "./src/base/events.js");

var _events2 = _interopRequireDefault(_events);

var _template = __webpack_require__(/*! ../../base/template */ "./src/base/template.js");

var _template2 = _interopRequireDefault(_template);

var _watermark = __webpack_require__(/*! ./public/watermark.html */ "./src/plugins/watermark/public/watermark.html");

var _watermark2 = _interopRequireDefault(_watermark);

__webpack_require__(/*! ./public/watermark.scss */ "./src/plugins/watermark/public/watermark.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WaterMarkPlugin = function (_UIContainerPlugin) {
  (0, _inherits3.default)(WaterMarkPlugin, _UIContainerPlugin);
  (0, _createClass3.default)(WaterMarkPlugin, [{
    key: 'name',
    get: function get() {
      return 'watermark';
    }
  }, {
    key: 'template',
    get: function get() {
      return (0, _template2.default)(_watermark2.default);
    }
  }]);

  function WaterMarkPlugin(container) {
    (0, _classCallCheck3.default)(this, WaterMarkPlugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _UIContainerPlugin.call(this, container));

    _this.configure();
    return _this;
  }

  WaterMarkPlugin.prototype.bindEvents = function bindEvents() {
    this.listenTo(this.container, _events2.default.CONTAINER_PLAY, this.onPlay);
    this.listenTo(this.container, _events2.default.CONTAINER_STOP, this.onStop);
    this.listenTo(this.container, _events2.default.CONTAINER_OPTIONS_CHANGE, this.configure);
  };

  WaterMarkPlugin.prototype.configure = function configure() {
    this.position = this.options.position || 'bottom-right';
    if (this.options.watermark) {
      this.imageUrl = this.options.watermark;
      this.imageLink = this.options.watermarkLink;
      this.render();
    } else {
      this.$el.remove();
    }
  };

  WaterMarkPlugin.prototype.onPlay = function onPlay() {
    if (!this.hidden) this.$el.show();
  };

  WaterMarkPlugin.prototype.onStop = function onStop() {
    this.$el.hide();
  };

  WaterMarkPlugin.prototype.render = function render() {
    this.$el.hide();
    var templateOptions = { position: this.position, imageUrl: this.imageUrl, imageLink: this.imageLink };
    this.$el.html(this.template(templateOptions));
    this.container.$el.append(this.$el);
    return this;
  };

  return WaterMarkPlugin;
}(_ui_container_plugin2.default); // Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

exports.default = WaterMarkPlugin;
module.exports = exports['default'];

/***/ }),

/***/ "./src/vendor/index.js":
/*!*****************************!*\
  !*** ./src/vendor/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _kibo = __webpack_require__(/*! ./kibo */ "./src/vendor/kibo.js");

var _kibo2 = _interopRequireDefault(_kibo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { Kibo: _kibo2.default };
module.exports = exports['default'];

/***/ }),

/***/ "./src/vendor/kibo.js":
/*!****************************!*\
  !*** ./src/vendor/kibo.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */
// Kibo is released under the MIT License. Copyright (c) 2013 marquete.
// see https://github.com/marquete/kibo

var Kibo = function Kibo(element) {
  this.element = element || window.document;
  this.initialize();
};

Kibo.KEY_NAMES_BY_CODE = {
  8: 'backspace', 9: 'tab', 13: 'enter',
  16: 'shift', 17: 'ctrl', 18: 'alt',
  20: 'caps_lock',
  27: 'esc',
  32: 'space',
  37: 'left', 38: 'up', 39: 'right', 40: 'down',
  48: '0', 49: '1', 50: '2', 51: '3', 52: '4', 53: '5', 54: '6', 55: '7', 56: '8', 57: '9',
  65: 'a', 66: 'b', 67: 'c', 68: 'd', 69: 'e', 70: 'f', 71: 'g', 72: 'h', 73: 'i', 74: 'j',
  75: 'k', 76: 'l', 77: 'm', 78: 'n', 79: 'o', 80: 'p', 81: 'q', 82: 'r', 83: 's', 84: 't',
  85: 'u', 86: 'v', 87: 'w', 88: 'x', 89: 'y', 90: 'z', 112: 'f1', 113: 'f2', 114: 'f3',
  115: 'f4', 116: 'f5', 117: 'f6', 118: 'f7', 119: 'f8', 120: 'f9', 121: 'f10', 122: 'f11', 123: 'f12'
};

Kibo.KEY_CODES_BY_NAME = {};
(function () {
  for (var key in Kibo.KEY_NAMES_BY_CODE) {
    if (Object.prototype.hasOwnProperty.call(Kibo.KEY_NAMES_BY_CODE, key)) {
      Kibo.KEY_CODES_BY_NAME[Kibo.KEY_NAMES_BY_CODE[key]] = +key;
    }
  }
})();

Kibo.MODIFIERS = ['shift', 'ctrl', 'alt'];

Kibo.registerEvent = function () {
  if (document.addEventListener) {
    return function (element, eventName, func) {
      element.addEventListener(eventName, func, false);
    };
  } else if (document.attachEvent) {
    return function (element, eventName, func) {
      element.attachEvent('on' + eventName, func);
    };
  }
}();

Kibo.unregisterEvent = function () {
  if (document.removeEventListener) {
    return function (element, eventName, func) {
      element.removeEventListener(eventName, func, false);
    };
  } else if (document.detachEvent) {
    return function (element, eventName, func) {
      element.detachEvent('on' + eventName, func);
    };
  }
}();

Kibo.stringContains = function (string, substring) {
  return string.indexOf(substring) !== -1;
};

Kibo.neatString = function (string) {
  return string.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
};

Kibo.capitalize = function (string) {
  return string.toLowerCase().replace(/^./, function (match) {
    return match.toUpperCase();
  });
};

Kibo.isString = function (what) {
  return Kibo.stringContains(Object.prototype.toString.call(what), 'String');
};

Kibo.arrayIncludes = function () {
  if (Array.prototype.indexOf) {
    return function (haystack, needle) {
      return haystack.indexOf(needle) !== -1;
    };
  } else {
    return function (haystack, needle) {
      for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
          return true;
        }
      }
      return false;
    };
  }
}();

Kibo.extractModifiers = function (keyCombination) {
  var modifiers, i;
  modifiers = [];
  for (i = 0; i < Kibo.MODIFIERS.length; i++) {
    if (Kibo.stringContains(keyCombination, Kibo.MODIFIERS[i])) {
      modifiers.push(Kibo.MODIFIERS[i]);
    }
  }
  return modifiers;
};

Kibo.extractKey = function (keyCombination) {
  var keys, i;
  keys = Kibo.neatString(keyCombination).split(' ');
  for (i = 0; i < keys.length; i++) {
    if (!Kibo.arrayIncludes(Kibo.MODIFIERS, keys[i])) {
      return keys[i];
    }
  }
};

Kibo.modifiersAndKey = function (keyCombination) {
  var result, key;

  if (Kibo.stringContains(keyCombination, 'any')) {
    return Kibo.neatString(keyCombination).split(' ').slice(0, 2).join(' ');
  }

  result = Kibo.extractModifiers(keyCombination);

  key = Kibo.extractKey(keyCombination);
  if (key && !Kibo.arrayIncludes(Kibo.MODIFIERS, key)) {
    result.push(key);
  }

  return result.join(' ');
};

Kibo.keyName = function (keyCode) {
  return Kibo.KEY_NAMES_BY_CODE[keyCode + ''];
};

Kibo.keyCode = function (keyName) {
  return +Kibo.KEY_CODES_BY_NAME[keyName];
};

Kibo.prototype.initialize = function () {
  var i,
      that = this;

  this.lastKeyCode = -1;
  this.lastModifiers = {};
  for (i = 0; i < Kibo.MODIFIERS.length; i++) {
    this.lastModifiers[Kibo.MODIFIERS[i]] = false;
  }

  this.keysDown = { any: [] };
  this.keysUp = { any: [] };
  this.downHandler = this.handler('down');
  this.upHandler = this.handler('up');

  Kibo.registerEvent(this.element, 'keydown', this.downHandler);
  Kibo.registerEvent(this.element, 'keyup', this.upHandler);
  Kibo.registerEvent(window, 'unload', function unloader() {
    Kibo.unregisterEvent(that.element, 'keydown', that.downHandler);
    Kibo.unregisterEvent(that.element, 'keyup', that.upHandler);
    Kibo.unregisterEvent(window, 'unload', unloader);
  });
};

Kibo.prototype.handler = function (upOrDown) {
  var that = this;
  return function (e) {
    var i, registeredKeys, lastModifiersAndKey;

    e = e || window.event;

    that.lastKeyCode = e.keyCode;
    for (i = 0; i < Kibo.MODIFIERS.length; i++) {
      that.lastModifiers[Kibo.MODIFIERS[i]] = e[Kibo.MODIFIERS[i] + 'Key'];
    }
    if (Kibo.arrayIncludes(Kibo.MODIFIERS, Kibo.keyName(that.lastKeyCode))) {
      that.lastModifiers[Kibo.keyName(that.lastKeyCode)] = true;
    }

    registeredKeys = that['keys' + Kibo.capitalize(upOrDown)];

    for (i = 0; i < registeredKeys.any.length; i++) {
      if (registeredKeys.any[i](e) === false && e.preventDefault) {
        e.preventDefault();
      }
    }

    lastModifiersAndKey = that.lastModifiersAndKey();
    if (registeredKeys[lastModifiersAndKey]) {
      for (i = 0; i < registeredKeys[lastModifiersAndKey].length; i++) {
        if (registeredKeys[lastModifiersAndKey][i](e) === false && e.preventDefault) {
          e.preventDefault();
        }
      }
    }
  };
};

Kibo.prototype.registerKeys = function (upOrDown, newKeys, func) {
  var i,
      keys,
      registeredKeys = this['keys' + Kibo.capitalize(upOrDown)];

  if (Kibo.isString(newKeys)) {
    newKeys = [newKeys];
  }

  for (i = 0; i < newKeys.length; i++) {
    keys = newKeys[i];
    keys = Kibo.modifiersAndKey(keys + '');

    if (registeredKeys[keys]) {
      registeredKeys[keys].push(func);
    } else {
      registeredKeys[keys] = [func];
    }
  }

  return this;
};

// jshint maxdepth:5
Kibo.prototype.unregisterKeys = function (upOrDown, newKeys, func) {
  var i,
      j,
      keys,
      registeredKeys = this['keys' + Kibo.capitalize(upOrDown)];

  if (Kibo.isString(newKeys)) {
    newKeys = [newKeys];
  }

  for (i = 0; i < newKeys.length; i++) {
    keys = newKeys[i];
    keys = Kibo.modifiersAndKey(keys + '');

    if (func === null) {
      delete registeredKeys[keys];
    } else {
      if (registeredKeys[keys]) {
        for (j = 0; j < registeredKeys[keys].length; j++) {
          if (String(registeredKeys[keys][j]) === String(func)) {
            registeredKeys[keys].splice(j, 1);
            break;
          }
        }
      }
    }
  }

  return this;
};

Kibo.prototype.off = function (keys) {
  return this.unregisterKeys('down', keys, null);
};

Kibo.prototype.delegate = function (upOrDown, keys, func) {
  return func !== null || func !== undefined ? this.registerKeys(upOrDown, keys, func) : this.unregisterKeys(upOrDown, keys, func);
};

Kibo.prototype.down = function (keys, func) {
  return this.delegate('down', keys, func);
};

Kibo.prototype.up = function (keys, func) {
  return this.delegate('up', keys, func);
};

Kibo.prototype.lastKey = function (modifier) {
  if (!modifier) {
    return Kibo.keyName(this.lastKeyCode);
  }

  return this.lastModifiers[modifier];
};

Kibo.prototype.lastModifiersAndKey = function () {
  var result, i;

  result = [];
  for (i = 0; i < Kibo.MODIFIERS.length; i++) {
    if (this.lastKey(Kibo.MODIFIERS[i])) {
      result.push(Kibo.MODIFIERS[i]);
    }
  }

  if (!Kibo.arrayIncludes(result, this.lastKey())) {
    result.push(this.lastKey());
  }

  return result.join(' ');
};

exports.default = Kibo;
module.exports = exports['default'];

/***/ })

/******/ });
});
//# sourceMappingURL=clappr.js.map