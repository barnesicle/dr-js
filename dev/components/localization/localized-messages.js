(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/filter */ "./node_modules/core-js-pure/stable/instance/filter.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/keys */ "./node_modules/core-js-pure/stable/object/keys.js");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/filter.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/filter.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.filter */ "./node_modules/core-js-pure/modules/es.array.filter.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "./node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').filter;


/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(/*! ../array/virtual/filter */ "./node_modules/core-js-pure/es/array/virtual/filter.js");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.filter) ? filter : own;
};


/***/ }),

/***/ "./node_modules/core-js-pure/es/object/keys.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/keys.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.keys */ "./node_modules/core-js-pure/modules/es.object.keys.js");
var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js-pure/internals/path.js");

module.exports = path.Object.keys;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-function.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-function.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-includes.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-includes.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js-pure/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js-pure/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js-pure/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
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
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-iteration.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-iteration.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js-pure/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js-pure/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js-pure/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js-pure/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js-pure/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-method-has-species-support.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-has-species-support.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js-pure/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-method-uses-to-length.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-uses-to-length.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-species-create.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-species-create.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js-pure/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof-raw.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js-pure/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js-pure/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \***************************************************************************/
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

/***/ "./node_modules/core-js-pure/internals/descriptors.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/descriptors.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/document-create-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-create-element.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-user-agent.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-user-agent.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js-pure/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-v8-version.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-v8-version.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js-pure/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/entry-virtual.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/entry-virtual.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js-pure/internals/path.js");

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/enum-bug-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/enum-bug-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js-pure/internals/export.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/export.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js").f;
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js-pure/internals/is-forced.js");
var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js-pure/internals/path.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js-pure/internals/function-bind-context.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/fails.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/fails.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-bind-context.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind-context.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js-pure/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
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

/***/ "./node_modules/core-js-pure/internals/get-built-in.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-built-in.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js-pure/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/global.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/global.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js-pure/internals/has.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/has.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/hidden-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/hidden-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js-pure/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/indexed-object.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/indexed-object.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js-pure/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-array.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js-pure/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-forced.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-pure.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-pure.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-symbol.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-symbol.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js-pure/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js-pure/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js-pure/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js-pure/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js-pure/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js-pure/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys-internal.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys-internal.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js-pure/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js-pure/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js-pure/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js-pure/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js-pure/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/path.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/require-object-coercible.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-global.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-store.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-store.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js-pure/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js-pure/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js-pure/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-absolute-index.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js-pure/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-indexed-object.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js-pure/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js-pure/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-integer.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-integer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-length.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-length.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js-pure/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js-pure/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/uid.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/uid.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/use-symbol-as-uid.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js-pure/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js-pure/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js-pure/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js-pure/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.filter.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.filter.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js-pure/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js-pure/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js-pure/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.keys.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.keys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js-pure/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js-pure/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/filter.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/filter */ "./node_modules/core-js-pure/es/instance/filter.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/keys */ "./node_modules/core-js-pure/es/object/keys.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app/components/localization/localized-messages.js":
/*!***************************************************************!*\
  !*** ./src/app/components/localization/localized-messages.js ***!
  \***************************************************************/
/*! exports provided: DEFAULT_LOCALE, getLocaleMessage, localeMessagesContainsClientProvidedLocale, forceCasingOfLocale, getMappedLocale, getLocaleFromLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LOCALE", function() { return DEFAULT_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocaleMessage", function() { return getLocaleMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeMessagesContainsClientProvidedLocale", function() { return localeMessagesContainsClientProvidedLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceCasingOfLocale", function() { return forceCasingOfLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMappedLocale", function() { return getMappedLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocaleFromLanguage", function() { return getLocaleFromLanguage; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _messages_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.json */ "./src/app/components/localization/messages.json");
var _messages_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./messages.json */ "./src/app/components/localization/messages.json", 1);
/* harmony import */ var _supported_locales_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supported-locales.json */ "./src/app/components/localization/supported-locales.json");
var _supported_locales_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./supported-locales.json */ "./src/app/components/localization/supported-locales.json", 1);




var DEFAULT_LOCALE = 'en-US';

function getLocaleMessages(locale) {
  return _messages_json__WEBPACK_IMPORTED_MODULE_2__.hasOwnProperty(locale) ? _messages_json__WEBPACK_IMPORTED_MODULE_2__[locale] : undefined;
}

function getLocaleMessage(locale, messageCode) {
  var mappedLocale = getMappedLocale(locale);
  var localizedMessages = getLocaleMessages(mappedLocale);
  return localizedMessages && localizedMessages.hasOwnProperty(messageCode) ? localizedMessages[messageCode] : undefined;
}
function localeMessagesContainsClientProvidedLocale(locale) {
  var _context;

  var mappedLocale = getMappedLocale(locale);
  return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_messages_json__WEBPACK_IMPORTED_MODULE_2__)).call(_context, function (key) {
    return key.toLowerCase() === mappedLocale.toLowerCase();
  }).length > 0;
}
function forceCasingOfLocale(instanceOptions) {
  var locale = instanceOptions.locale;
  var regex = /_|-/;
  var separatorIndex = locale.search(regex);

  if (separatorIndex !== -1) {
    var providedLocaleArray = locale.split(locale.charAt(separatorIndex));
    return providedLocaleArray[0] + '-' + providedLocaleArray[1].toUpperCase();
  } else {
    return DEFAULT_LOCALE;
  }
}
function getMappedLocale(locale) {
  return _supported_locales_json__WEBPACK_IMPORTED_MODULE_3__.hasOwnProperty(locale) ? _supported_locales_json__WEBPACK_IMPORTED_MODULE_3__[locale].messageLocale : locale;
}
function getLocaleFromLanguage(language) {
  var languageMap = {
    ar: 'ar-EG',
    cs: 'cs-CZ',
    da: 'da-DK',
    de: 'de-DE',
    el: 'el-GR',
    en: 'en-IE',
    es: 'es-ES',
    et: 'et-EE',
    fi: 'fi-FI',
    fr: 'fr-FR',
    hu: 'hu-HU',
    it: 'it-IT',
    iw: 'iw-IL',
    ja: 'ja-JP',
    ko: 'ko-KR',
    lt: 'lt-LT',
    lv: 'lv-LV',
    nl: 'nl-NL',
    no: 'no-NO',
    pl: 'pl-PL',
    pt: 'pt-PT',
    ro: 'ro-RO',
    ru: 'ru-RU',
    sk: 'sk-SK',
    sl: 'sl-SL',
    sr: 'sr-YU',
    sv: 'sv-SE',
    th: 'th-TH',
    tr: 'tr-TR',
    zh: 'zh-CN'
  };
  return languageMap.hasOwnProperty(language.toLowerCase()) ? languageMap[language.toLowerCase()] : DEFAULT_LOCALE;
}

/***/ }),

/***/ "./src/app/components/localization/messages.json":
/*!*******************************************************!*\
  !*** ./src/app/components/localization/messages.json ***!
  \*******************************************************/
/*! exports provided: ar-EG, cs-CZ, da-DK, de-DE, el-GR, en-GB, en-IE, en-US, es-ES, es-MX, fi-FI, fr-CA, fr-FR, hu-HU, it-IT, iw-IL, ja-JP, ko-KR, nl-NL, no-NO, pl-PL, pt-BR, pt-PT, ru-RU, sk-SK, sv-SE, th-TH, tr-TR, zh-CN, zh-HK, zh-TW, default */
/***/ (function(module) {

module.exports = {"ar-EG":{"alipay":"نظام Alipay","birthdate":"تاريخ الميلاد","bPay":"BPAY","cardExpirationDate":"تاريخ الانتهاء","cardExpirationMonthInvalid":"برجاء إدخال شهر انتهاء صلاحية صحيح","cardExpirationYearInvalid":"برجاء إدخال سنة انتهاء صلاحية صحيحة","cardExpired":"برجاء كتابة بيانات بطاقة غير منتهية الصلاحية","cardInvalid":"برجاء التحقق من بيانات البطاقة والمحاولة مرة أخرى","cardNumber":"* رقم البطاقة الائتمانية","cardNumberInvalid":"من فضلك أدخل رقم بطاقة ائتمانية صحيح","cardSecurityCode":"كود أمان البطاقة","cardSecurityCodeInvalid":"برجاء إدخال كود أمان صالح للبطاقة","creditCard":"البطاقة الائتمانية","directDebit":"خدمة Direct Debit","directDebitGb":"خدمة Direct Debit","incompleteTaxIdentifier":"من فضلك املأ خانة رقم الإعفاء من ضريبة القيمة المضافة.","invalidTaxIdentifier":"تم إدخال رقم إعفاء من ضريبة القيمة المضافة غير صحيح.","konbini":"الدفع الإلكتروني عن طريق المتجر المريح","konbiniSelectStore":"اختر متجرًا.","koreanCardPasswordHint":"برجاء كتابة أول رقمين من كلمة مرور بطاقتك","month":"الشهر","noBanksAvailable":"يرجى اختيار أحد البنوك أو الشبكات البنكية","noBankSelected":"يرجى اختيار أحد البنوك أو الشبكات البنكية","offlineRefundInsufficientData":"برجاء المحاولة مرة أخرى، بعض المعلومات مفقودة أو غير صحيحة","onlineBanking":"المعاملات البنكية عبر الإنترنت","orderTotal":"إجمالي الطلب","payNow":"ادفع الآن","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"جاري تنفيذ طلبك","selectBank":"من فضلك اختر البنك الخاص بك.","wireTransfer":"تحويل مالي","year":"السنة"},"cs-CZ":{"alipay":"Alipay","birthdate":"Datum narození","bPay":"BPAY","cardExpirationDate":"Termín vypršení platnosti","cardExpirationMonthInvalid":"Zadejte prosím platný měsíc konce platnosti","cardExpirationYearInvalid":"Zadejte prosím platný rok konce platnosti","cardExpired":"Zadejte prosím údaje karty, která je platná","cardInvalid":"Zkontrolujte prosím údaje o platební kartě a zkuste to znovu","cardNumber":"Číslo kreditní karty","cardNumberInvalid":"Zadejte prosím platné číslo platební karty","cardSecurityCode":"Bezpečnostní kód karty","cardSecurityCodeInvalid":"Zadejte prosím platný bezpečnostní kód","creditCard":"Kreditní karta","directDebit":"Přímý debet","directDebitGb":"Přímý debet","incompleteTaxIdentifier":"Prosím, doplňte pole s číslem výjimky z DPH.","invalidTaxIdentifier":"Bylo vloženo neplatné číslo výjimky DPH.","konbini":"Platba ve výhodném obchodě elektronicky","konbiniSelectStore":"Vyberte obchod.","koreanCardPasswordHint":"Zadejte prosím první dvě čísla svého hesla k platební kartě","month":"Měsíc","noBanksAvailable":"Zvolte banku nebo bankovní síť","noBankSelected":"Zvolte banku nebo bankovní síť","offlineRefundInsufficientData":"Zkuste to prosím znovu, některé informace chybí nebo nejsou správné","onlineBanking":"Internetové bankovnictví","orderTotal":"Objednávka celkem","payNow":"Zaplatit nyní","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Váš požadavek se zpracovává","selectBank":"Zvolte banku","wireTransfer":"Telegrafický převod","year":"Rok"},"da-DK":{"alipay":"Alipay","birthdate":"Fødselsdag","bPay":"BPAY","cardExpirationDate":"Udløbsdato","cardExpirationMonthInvalid":"Indtast en gyldig udløbsmåned","cardExpirationYearInvalid":"Indtast et gyldigt udløbsår","cardExpired":"Indtast oplysningerne fra et kort, som ikke er udløbet","cardInvalid":"Kontrollér kortoplysningerne, og prøv igen","cardNumber":"Kreditkortnummer","cardNumberInvalid":"Indtast et gyldigt kortnummer","cardSecurityCode":"Kortsikkerhedskode","cardSecurityCodeInvalid":"Indtast gyldige kreditkortkontrolcifre","creditCard":"Kreditkort","directDebit":"Direkte debitering","directDebitGb":"Direkte debitering","incompleteTaxIdentifier":"Udfyld venligst feltet til momsfritagelsesnummer.","invalidTaxIdentifier":"Et forkert momsfritagelsesnummer blev indtastet.","klarnaCredit":"Køb nu. Betal senere.","klarnaCreditRecurring":"Køb nu. Betal senere.","konbini":"Papirløs døgnbutik betaling","konbiniSelectStore":"Vælg en butik.","koreanCardPasswordHint":"Indtast de første to cifre af adgangskoden til dit kreditkort","month":"Måned","noBanksAvailable":"Vælg en bank eller et banknetværk","noBankSelected":"Vælg en bank eller et banknetværk","offlineRefundInsufficientData":"Prøv igen. Der mangler stadig oplysninger, eller oplysningerne er forkerte","onlineBanking":"Online bankaktiviteter","orderTotal":"Bestilling i alt","payNow":"Betal nu","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Bearbejdning af din henvendelse","selectBank":"Vælg din bank","wireTransfer":"Bankoverførsel","year":"År"},"de-DE":{"alipay":"Alipay","birthdate":"Geburtsdatum","bPay":"BPAY","cardExpirationDate":"Ablaufdatum","cardExpirationMonthInvalid":"Bitte geben Sie einen gültigen Ablaufmonat ein","cardExpirationYearInvalid":"Bitte geben Sie ein gültiges Ablaufjahr ein","cardExpired":"Bitte geben Sie die Daten für eine noch nicht abgelaufene Karte ein","cardInvalid":"Bitte prüfen Sie die Kartendaten und versuchen Sie es erneut","cardNumber":"Kreditkartennummer","cardNumberInvalid":"Bitte geben Sie eine gültige Kartennummer ein","cardSecurityCode":"Kreditkarten-Sicherheitscode","cardSecurityCodeInvalid":"Bitte geben Sie einen gültigen Karten-Sicherheitscode ein","creditCard":"Kreditkarte","directDebit":"Lastschriftverfahren","directDebitGb":"Lastschriftverfahren","incompleteTaxIdentifier":"Bitte füllen Sie das Feld für die Umsatzsteuer-Identifikationsnummer (USt-IdNr.) aus.","invalidTaxIdentifier":"Es wurde eine ungültige USt-IdNr. eingegeben.","klarnaCredit":"Rechnung & Ratenkauf","klarnaCreditRecurring":"Rechnung & Ratenkauf","konbini":"Papierlose Bezahlung im Shop Ihrer Wahl","konbiniSelectStore":"Wählen Sie einen Laden.","koreanCardPasswordHint":"Bitte geben Sie die ersten beiden Stellen Ihres Kartenkennworts ein","month":"Monat","noBanksAvailable":"Bitte wählen Sie eine Bank oder ein Bankennetzwerk aus","noBankSelected":"Bitte wählen Sie eine Bank oder ein Bankennetzwerk aus","offlineRefundInsufficientData":"Bitte versuchen Sie es erneut; erforderliche Informationen sind nicht vorhanden oder falsch","onlineBanking":"Online-Banking","orderTotal":"Gesamtbestellwert","payNow":"Jetzt bezahlen","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Ihre Anfrage wird bearbeitet","selectBank":"Bitte wählen Sie Ihre Bank aus","wireTransfer":"Überweisung","year":"Jahr"},"el-GR":{"alipay":"Alipay","birthdate":"Ημερομηνία γέννησης","bPay":"BPAY","cardExpirationDate":"Ημερομηνία λήξης","cardExpirationMonthInvalid":"Καταχωρίστε έγκυρο μήνα λήξης","cardExpirationYearInvalid":"Καταχωρίστε έγκυρο έτος λήξης","cardExpired":"Καταχωρίστε τα στοιχεία μιας κάρτας που δεν έχει λήξει","cardInvalid":"Ελέγξτε τα στοιχεία της κάρτας και προσπαθήστε ξανά","cardNumber":"Αριθμός Πιστωτικής Κάρτας","cardNumberInvalid":"Καταχωρίστε έγκυρο αριθμό κάρτας","cardSecurityCode":"Κωδικός Ασφαλείας Κάρτας","cardSecurityCodeInvalid":"Καταχωρίστε έγκυρο κωδικό ασφαλείας κάρτας","creditCard":"Πιστωτική Κάρτα","directDebit":"Άμεση Χρέωση","directDebitGb":"Άμεση Χρέωση","incompleteTaxIdentifier":"Συμπληρώστε το πεδίο Αριθμού Απαλλαγής ΦΠΑ.","invalidTaxIdentifier":"Καταχωρήθηκε μη έγκυρος αριθμός απαλλαγής ΦΠΑ.","konbini":"Πληρωμή σε κατάστημα χωρίς χρήση εντύπου","konbiniSelectStore":"Επιλέξτε κατάστημα.","koreanCardPasswordHint":"Καταχωρίστε τα δύο πρώτα ψηφία του κωδικού πρόσβασης της κάρτας σας","month":"Μήνας","noBanksAvailable":"Επιλέξτε τράπεζα ή τραπεζικό δίκτυο","noBankSelected":"Επιλέξτε τράπεζα ή τραπεζικό δίκτυο","offlineRefundInsufficientData":"Προσπαθήστε ξανά, κάποιες πληροφορίες λείπουν ή δεν είναι σωστές","onlineBanking":"Τραπεζικές Υπηρεσίες Online","orderTotal":"Σύνολο Παραγγελίας","payNow":"Πληρωμή τώρα","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Επεξεργασία της Αίτησής σας","selectBank":"Επιλέξτε την τράπεζά σας","wireTransfer":"Έμβασμα","year":"Έτος"},"en-GB":{"alipay":"Alipay","birthdate":"Birthdate","bPay":"BPAY","cardExpirationDate":"Expiration Date","cardExpirationMonthInvalid":"Please enter a valid expiry month","cardExpirationYearInvalid":"Please enter a valid expiry year","cardExpired":"Please enter details for a card that has not expired","cardInvalid":"Please check card details and try again","cardNumber":"Credit Card Number","cardNumberInvalid":"Please enter a valid card number","cardSecurityCode":"Card Security Code","cardSecurityCodeInvalid":"Please enter a valid card security code","creditCard":"Credit Card","directDebit":"Direct Debit","directDebitGb":"Direct Debit","incompleteTaxIdentifier":"Please complete the VAT Exemption Number field.","invalidTaxIdentifier":"An invalid VAT exemption number was entered.","klarnaCredit":"Buy now, pay later","klarnaCreditRecurring":"Buy now, pay later","konbini":"Paperless convenience store payment","konbiniSelectStore":"Select a store.","koreanCardPasswordHint":"Please enter the first two digits of your card password","month":"Month","noBanksAvailable":"Please choose a bank or bank network","noBankSelected":"Please choose a bank or bank network","offlineRefundInsufficientData":"Please try again; some information is missing or incorrect","onlineBanking":"Online Banking","orderTotal":"Order Total","payNow":"Pay now","payPal":"PayPal","payPalBilling":"PayPal","payPalCredit":"PayPal Credit","processingYourRequest":"Processing Your Request","selectBank":"Please select your bank","wireTransfer":"Wire Transfer","year":"Year"},"en-IE":{"alipay":"Alipay","birthdate":"Birthdate","bPay":"BPAY","cardExpirationDate":"Expiration Date","cardExpirationMonthInvalid":"Please enter a valid expiry month","cardExpirationYearInvalid":"Please enter a valid expiry year","cardExpired":"Please enter details for a card that has not expired","cardInvalid":"Please check card details and try again","cardNumber":"Credit Card Number","cardNumberInvalid":"Please enter a valid card number","cardSecurityCode":"Card Security Code","cardSecurityCodeInvalid":"Please enter a valid card security code","creditCard":"Credit Card","directDebit":"Direct Debit","directDebitGb":"Direct Debit","incompleteTaxIdentifier":"Please complete the VAT Exemption Number field.","invalidTaxIdentifier":"An invalid VAT exemption number was entered.","klarnaCredit":"Buy now, pay later","klarnaCreditRecurring":"Buy now, pay later","konbini":"Paperless convenience store payment","konbiniSelectStore":"Select a store.","koreanCardPasswordHint":"Please enter the first two digits of your card password","month":"Month","noBanksAvailable":"Please choose a bank or bank network","noBankSelected":"Please choose a bank or bank network","offlineRefundInsufficientData":"Please try again; some information is missing or incorrect","onlineBanking":"Online Banking","orderTotal":"Order Total","payNow":"Pay now","payPal":"PayPal","payPalBilling":"PayPal","payPalCredit":"PayPal Credit","processingYourRequest":"Processing Your Request","selectBank":"Please select your bank","wireTransfer":"Wire Transfer","year":"Year"},"en-US":{"alipay":"Alipay","birthdate":"Birthdate","bPay":"BPAY","cardExpirationDate":"Expiration Date","cardExpirationMonthInvalid":"Please enter a valid expiration month","cardExpirationYearInvalid":"Please enter a valid expiration year","cardExpired":"Please enter details for a card that is not expired","cardInvalid":"Please check card details and try again","cardNumber":"Credit Card Number","cardNumberInvalid":"Please enter a valid card number","cardSecurityCode":"Card Security Code","cardSecurityCodeInvalid":"Please enter a valid card security code","creditCard":"Credit Card","directDebit":"Direct Debit","directDebitGb":"Direct Debit","incompleteTaxIdentifier":"Please complete the VAT Exemption Number field.","invalidTaxIdentifier":"An invalid VAT exemption number was entered.","klarnaCredit":"Buy now, pay later","klarnaCreditRecurring":"Buy now, pay later","konbini":"Paperless convenience store payment","konbiniSelectStore":"Select a store.","koreanCardPasswordHint":"Please enter the first two digits of your card password","month":"Month","noBanksAvailable":"Please choose a bank or bank network","noBankSelected":"Please choose a bank or bank network","offlineRefundInsufficientData":"Please try again, some information is missing or incorrect","onlineBanking":"Online Banking","orderTotal":"Order Total","payNow":"Pay now","payPal":"PayPal","payPalBilling":"PayPal","payPalCredit":"PayPal Credit","processingYourRequest":"Processing Your Request","selectBank":"Please select your bank","wireTransfer":"Wire Transfer","year":"Year"},"es-ES":{"alipay":"Alipay","birthdate":"Fecha de nacimiento","bPay":"BPAY","cardExpirationDate":"Fecha de caducidad","cardExpirationMonthInvalid":"Introduzca un mes de vencimiento válido","cardExpirationYearInvalid":"Introduzca un año de vencimiento válido","cardExpired":"Introduzca los datos de una tarjeta que no haya caducado","cardInvalid":"Compruebe los datos de la tarjeta e inténtelo de nuevo","cardNumber":"Número de tarjeta de crédito","cardNumberInvalid":"Introduzca un número de tarjeta válido","cardSecurityCode":"Código de seguridad de la tarjeta","cardSecurityCodeInvalid":"Introduzca un código de seguridad de tarjeta válido","creditCard":"Tarjeta de crédito","directDebit":"Cargo directo","directDebitGb":"Cargo directo","incompleteTaxIdentifier":"Por favor, rellene el campo de Número de exención de IVA.","invalidTaxIdentifier":"Se introdujo un número de exención de IVA no válido.","konbini":"Pago en la tienda sin papeleo","konbiniSelectStore":"Selecciona una tienda.","koreanCardPasswordHint":"Introduzca los dos primeros dígitos de la clave de su tarjeta","month":"Mes","noBanksAvailable":"Escoja una entidad o red bancaria","noBankSelected":"Escoja una entidad o red bancaria","offlineRefundInsufficientData":"Faltan datos o algunos datos son incorrectos; inténtelo de nuevo","onlineBanking":"Banca en línea","orderTotal":"Pedido total","payNow":"Pagar ahora","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Procesando su solicitud","selectBank":"Seleccione su entidad bancaria","wireTransfer":"Giro postal","year":"Año"},"es-MX":{"alipay":"Alipay","birthdate":"Fecha de nacimiento","bPay":"BPAY","cardExpirationDate":"Fecha de caducidad","cardExpirationMonthInvalid":"Introduzca un mes de vencimiento válido","cardExpirationYearInvalid":"Introduzca un año de vencimiento válido","cardExpired":"Introduzca los datos de una tarjeta vigente","cardInvalid":"Compruebe los datos de la tarjeta e inténtelo de nuevo","cardNumber":"Número de la tarjeta de crédito","cardNumberInvalid":"Introduzca un número de tarjeta válido","cardSecurityCode":"Código de la tarjeta de seguridad","cardSecurityCodeInvalid":"Introduzca un código de seguridad válido","creditCard":"Tarjeta de crédito","directDebit":"Débito directo","directDebitGb":"Débito directo","incompleteTaxIdentifier":"Por favor, complete el campo Número de exención de IVA.","invalidTaxIdentifier":"Se anotó un número inválido de exención de IVA.","konbiniSelectStore":"Selecciona una tienda.","koreanCardPasswordHint":"Introduzca los dos primeros dígitos de la contraseña de su tarjeta","month":"Mes","noBanksAvailable":"Seleccione un banco o una red bancaria","noBankSelected":"Seleccione un banco o una red bancaria","offlineRefundInsufficientData":"Faltan datos o algunos datos son incorrectos; inténtelo de nuevo","onlineBanking":"Banca en línea","orderTotal":"Total de la orden","payNow":"Pague ahora","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Procesando su solicitud","selectBank":"Seleccione su banco","wireTransfer":"Transferencia electrónica","year":"Año"},"fi-FI":{"alipay":"Alipay","birthdate":"Syntymäaika","bPay":"BPAY","cardExpirationDate":"Voimassaolon päättymispäivä","cardExpirationMonthInvalid":"Syötä kelvollinen viimeinen voimassaolokuukausi","cardExpirationYearInvalid":"Syötä kelvollinen viimeinen voimassaolovuosi","cardExpired":"Syötä voimassa olevan tiedot","cardInvalid":"Tarkasta kortin tiedot ja yritä uudelleen","cardNumber":"Luottokortin numero","cardNumberInvalid":"Syötä kelvollinen kortin numero","cardSecurityCode":"Kortin tarkistusnumero","cardSecurityCodeInvalid":"Syötä kelvollinen kortin turvakoodi","creditCard":"Luottokortti","directDebit":"Suoraveloitus","directDebitGb":"Suoraveloitus","incompleteTaxIdentifier":"Täytä loppuun ALV-vapautusnumerokenttä.","invalidTaxIdentifier":"Kelpaamaton ALV-vapautusnumero syötetty.","klarnaCredit":"Maksa myöhemmin","klarnaCreditRecurring":"Maksa myöhemmin","konbini":"Sähköinen maksu muualta kuin pankin kautta","konbiniSelectStore":"Valitse kauppa.","koreanCardPasswordHint":"Syötä korttisi salasanan kaksi ensimmäistä numeroa","month":"Kuukausi","noBanksAvailable":"Valitse pankki tai pankkiverkko","noBankSelected":"Valitse pankki tai pankkiverkko","offlineRefundInsufficientData":"Yritä uudelleen: tiedot ovat puutteellisia tai virheellisiä","onlineBanking":"Verkkopankkipalvelut","orderTotal":"Kokonaistilaus","payNow":"Maksa nyt","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Pyyntösi käsittely","selectBank":"Valitse pankkisi","wireTransfer":"Tilisiirto","year":"Vuosi"},"fr-CA":{"alipay":"Alipay","birthdate":"Date de naissance","bPay":"BPAY","cardExpirationDate":"Date d’expiration","cardExpirationMonthInvalid":"Veuillez saisir un mois d'expiration valide","cardExpirationYearInvalid":"Veuillez saisir une année d'expiration valide","cardExpired":"Veuillez saisir les renseignements relatifs à une carte non expirée","cardInvalid":"Veuillez vérifier les renseignements relatifs à votre carte, puis réessayez","cardNumber":"Numéro de carte de crédit","cardNumberInvalid":"Veuillez saisir un numéro de carte valide","cardSecurityCode":"Code de sécurité carte","cardSecurityCodeInvalid":"Veuillez saisir un cryptogramme visuel valide","creditCard":"Carte de crédit","directDebit":"Prélèvement automatique","directDebitGb":"Prélèvement automatique","incompleteTaxIdentifier":"Complétez le champ Numéro d'exonération de la TVA.","invalidTaxIdentifier":"Le numéro d'exonération de la TVA saisi n'est pas valide.","konbini":"Règlement pratique au magasin, sans papier","konbiniSelectStore":"Sélectionnez une boutique.","koreanCardPasswordHint":"Veuillez saisir les deux premiers chiffres du mot de passe de votre carte","month":"Mois ","noBanksAvailable":"Veuillez choisir une banque ou un réseau de banques","noBankSelected":"Veuillez choisir une banque ou un réseau de banques","offlineRefundInsufficientData":"Certains renseignements sont manquants ou incorrects, veuillez réessayer","onlineBanking":"Banque en ligne","orderTotal":"Total de la commande","payNow":"Payer maintenant","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Traitement de votre demande","selectBank":"Veuillez sélectionner votre banque","wireTransfer":"Virement bancaire","year":"Année "},"fr-FR":{"alipay":"Alipay","birthdate":"Date de naissance","bPay":"BPAY","cardExpirationDate":"Date d’expiration","cardExpirationMonthInvalid":"Veuillez saisir un mois d'expiration valide","cardExpirationYearInvalid":"Veuillez saisir une année d'expiration valide","cardExpired":"Veuillez saisir les informations d'une carte n'étant pas arrivée à expiration","cardInvalid":"Veuille vérifier les informations de la carte et réessayer","cardNumber":"Numéro de carte de crédit","cardNumberInvalid":"Veuillez saisir un numéro de carte valide","cardSecurityCode":"Code de sécurité carte","cardSecurityCodeInvalid":"Veuillez saisir le code de sécurité d'une carte valide","creditCard":"Carte de crédit","directDebit":"Prélèvement automatique","directDebitGb":"Prélèvement automatique","incompleteTaxIdentifier":"Complétez le champ Numéro d'exonération de la TVA.","invalidTaxIdentifier":"Le numéro d'exonération de la TVA saisi n'est pas valide.","konbini":"Règlement pratique au magasin, sans paperasserie","konbiniSelectStore":"Sélectionnez une boutique.","koreanCardPasswordHint":"Veuillez saisir les deux premiers chiffres du mot de passe de votre carte","month":"Mois ","noBanksAvailable":"Veuillez sélectionner une banque ou un réseau bancaire","noBankSelected":"Veuillez sélectionner une banque ou un réseau bancaire","offlineRefundInsufficientData":"Certaines informations sont manquantes ou incorrectes. Veuillez réessayer","onlineBanking":"Opérations bancaires en ligne","orderTotal":"Total de la commande","payNow":"Payer maintenant","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Traitement de votre demande","selectBank":"Veuillez sélectionner votre banque","wireTransfer":"Virement bancaire","year":"Année "},"hu-HU":{"alipay":"Alipay","birthdate":"Születési idő","bPay":"BPAY","cardExpirationDate":"Lejárat dátuma","cardExpirationMonthInvalid":"Kérjük, adja meg az érvényes lejárati hónapot","cardExpirationYearInvalid":"Kérjük, adja meg az érvényes lejárati évet","cardExpired":"Kérjük, egy olyan kártya adatait adja meg, mely még nem járt le","cardInvalid":"Ellenőrizze a kártyaadatokat, és próbálja meg újra","cardNumber":"Bankkártyaszám","cardNumberInvalid":"Kérjük, adja meg az érvényes kártyaszámot","cardSecurityCode":"Kártya biztonsági kódja","cardSecurityCodeInvalid":"Kérjük, adja meg az érvényes kártya biztonsági adatait","creditCard":"Bankkártya","directDebit":"Közvetlen levonás","directDebitGb":"Közvetlen levonás","incompleteTaxIdentifier":"Töltse ki az áfamentességi szám mezőt.","invalidTaxIdentifier":"Érvénytelen áfamentességi számot adott meg.","konbini":"Papír nélküli kényelmes fizetés","konbiniSelectStore":"Válasszon áruházat!","koreanCardPasswordHint":"Kérjük, adja meg a kártyához tartozó jelszó első két számjegyét","month":"Hónap","noBanksAvailable":"Kérjük, válasszon bankot vagy bankhálózatot","noBankSelected":"Kérjük, válasszon bankot vagy bankhálózatot","offlineRefundInsufficientData":"Bizonyos információk hiányosak vagy helytelenek, próbálja meg ismét","onlineBanking":"Online bankolás","orderTotal":"Rendelés összesen","payNow":"Fizetés most","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Kérés feldolgozás alatt","selectBank":"Kérjük, válassza ki bankját.","wireTransfer":"Távirati utalás","year":"Év"},"it-IT":{"alipay":"Alipay","birthdate":"Data di nascita","bPay":"BPAY","cardExpirationDate":"Data scadenza","cardExpirationMonthInvalid":"Inserisci un mese di scadenza valido","cardExpirationYearInvalid":"Inserisci un anno di scadenza valido","cardExpired":"Inserisci i dati di una carta di credito non scaduta","cardInvalid":"Controlla i dati della carta di credito e riprova","cardNumber":"Numero di carta di credito","cardNumberInvalid":"Inserisci un numero di carta di credito valido","cardSecurityCode":"Codice di sicurezza carta","cardSecurityCodeInvalid":"Inserisci un codice di sicurezza della carta di credito in corso di validità","creditCard":"Carta di credito","directDebit":"Addebito diretto","directDebitGb":"Addebito diretto","incompleteTaxIdentifier":"Compila il campo Codice esenzione IVA.","invalidTaxIdentifier":"Il codice di esenzione IVA immesso non è valido.","konbiniSelectStore":"Seleziona un punto vendita.","koreanCardPasswordHint":"Inserisci le prime due cifre della password della tua carta di credito","month":"Mese","noBanksAvailable":"Scegli una banca o una rete bancaria","noBankSelected":"Scegli una banca o una rete bancaria","offlineRefundInsufficientData":"Riprova, mancano alcune informazioni oppure sono errate","onlineBanking":"Banca online","orderTotal":"Totale ordine","payNow":"Paga adesso","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Stiamo processando la vostra richiesta","selectBank":"Seleziona la tua banca","wireTransfer":"Bonifico","year":"Anno"},"iw-IL":{"alipay":"Alipay","birthdate":"תאריך לידה","bPay":"BPAY","cardExpirationDate":"תאריך פקיעת תוקף","cardExpirationMonthInvalid":"נא להזין חודש פקיעת תוקף חוקי","cardExpirationYearInvalid":"נא להזין שנת פקיעת תוקף חוקית","cardExpired":"נא להזין פרטים של כרטיס אשראי תקף","cardInvalid":"נא לבדוק את פרטי הכרטיס ולנסות שוב","cardNumber":"* מס' כרטיס אשראי","cardNumberInvalid":"נא להזין מספר כרטיס אשראי תקף.","cardSecurityCode":"קוד ביטחון של כרטיס האשראי","cardSecurityCodeInvalid":"נא להזין את קוד האבטחה של כרטיס אשראי תקף","creditCard":"כרטיס אשראי","directDebit":"Direct Debit","directDebitGb":"Direct Debit","incompleteTaxIdentifier":"אנא מלא את מספר אישור הפטור ממע\"מ בשדה המתאים.","invalidTaxIdentifier":"מספר אישור פטור ממע\"מ שהזנת אינו תקף.","konbini":"תשלום ללא מזומנים (בחנויות מכולת או מינימרקט במקומות בהם אפשרות זו זמינה)","konbiniSelectStore":"בחר חנות.","koreanCardPasswordHint":"לא להזין את שתי הספרות הראשונות של סיסמת כרטיס האשראי","month":"חודש","noBanksAvailable":"בחר בנק או רשת בנקים","noBankSelected":"בחר בנק או רשת בנקים","offlineRefundInsufficientData":"נא לנסות שוב, חלק מהמידע חסר או שגוי","onlineBanking":"בנקאות מקוונת","orderTotal":"סה\"כ בהזמנה","payNow":"לתשלום","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"בקשתך בטיפול","selectBank":"בחר את הבנק שלך","wireTransfer":"העברה בנקאית","year":"שנה"},"ja-JP":{"alipay":"Alipay","birthdate":"誕生日","bPay":"BPAY","cardExpirationDate":"有効期限","cardExpirationMonthInvalid":"有効期限（月）を入力してください","cardExpirationYearInvalid":"有効期限（年）を入力してください","cardExpired":"期限切れでないカードの詳細を入力してください","cardInvalid":"カードの詳細を確認し、もう一度お試しください","cardNumber":"クレジットカード番号","cardNumberInvalid":"有効なカード番号を入力してください","cardSecurityCode":"カードセキュリティコード","cardSecurityCodeInvalid":"有効なカードセキュリティコードを入力してください","codJapan":"佐川急便 代金引換","creditCard":"クレジットカード","directDebit":"口座引き落とし","directDebitGb":"口座引き落とし","incompleteTaxIdentifier":"[付加価値税免税番号] フィールドに番号を入力してください。","invalidTaxIdentifier":"入力された付加価値税免税番号が無効です。","konbini":"コンビニ決済","konbiniSelectStore":"コンビニ名を選択してください。 ","koreanCardPasswordHint":"ご使用のカードのパスワードの最初の2桁を入力してください","month":"月","noBanksAvailable":"銀行または銀行ネットワークを選択してください。","noBankSelected":"銀行または銀行ネットワークを選択してください。","offlineRefundInsufficientData":"情報の一部が不足しているか不正確であるため、もう一度お試しください","onlineBanking":"オンラインバンキング","orderTotal":"注文合計額（税込）","payNow":"いますぐ支払う","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"リクエストの処理","selectBank":"銀行を選択してください。","wireTransfer":"電信送金","year":"年"},"ko-KR":{"alipay":"Alipay","birthdate":"생년월일","bPay":"BPAY","cardExpirationDate":"만기일","cardExpirationMonthInvalid":"유효한 만료 월을 입력하십시오.","cardExpirationYearInvalid":"유효한 만료 연도를 입력하십시오.","cardExpired":"만료되지 않은 카드의 정보를 입력하십시오.","cardInvalid":"카드 정보를 확인하고 다시 시도하십시오.","cardNumber":"신용카드 번호","cardNumberInvalid":"유효한 카드 번호를 입력하십시오.","cardSecurityCode":"카드 보안 코드","cardSecurityCodeInvalid":"유효한 카드 보안 코드를 입력하십시오.","cardTypeColon":"카드 종류:","closeWindow":"창 닫기","company":"회사","continue":"계속하기","corporateRegistrationNumber":"사업자 등록 번호","creditCard":"신용카드","day":"일","directDebit":"직불 카드","directDebitGb":"직불 카드","enterAdditionalInformation":"추가 정보 입력","incompleteTaxIdentifier":"VAT 면제 번호 필드에 번호를 입력해 주십시오.","invalidTaxIdentifier":"입력하신 부가가치세(VAT) 면제 번호가 유효하지 않습니다.","konbiniSelectStore":"스토어를 선택하십시오.","koreanCardPasswordHint":"카드 비밀번호의 처음 두 자리를 입력하십시오.","missing_korean_parameter":"존재하지 않는 정보 또는 부정확한 값을 제출하였습니다. 다시 시도하십시오.","month":"월","noBanksAvailable":"은행 또는 은행 네트워크를 선택하십시오.","noBankSelected":"은행 또는 은행 네트워크를 선택하십시오.","offlineRefundInsufficientData":"다시 시도하십시오. 일부 정보가 누락되었거나 올바르지 않습니다.","onlineBanking":"온라인 뱅킹","orderTotal":"주문 총계","password":"암호","payNow":"지금 결제","payPal":"PayPal","payPalBilling":"PayPal","personalNumber":"개인 번호","pleaseCheckYourDateOfBirth":"고객님의 생년월일을 확인하십시오.","pleaseEnterAValidValue":"유효한 값을 입력해 주십시오.","processingYourRequest":"귀하의 요청을 처리중","requiredField":"필수 필드","selectBank":"은행을 선택하십시오.","wireTransfer":"계좌이체","year":"연도"},"nl-NL":{"alipay":"Alipay","birthdate":"Geboortedatum","bPay":"BPAY","cardExpirationDate":"Vervaldatum","cardExpirationMonthInvalid":"Voer een geldige vervalmaand in","cardExpirationYearInvalid":"Voer een geldige vervaljaar in","cardExpired":"Voer gegevens in voor een kaart die niet verstreken is","cardInvalid":"Controleer kaartgegevens en probeer het nog een keer","cardNumber":"Creditcardnummer","cardNumberInvalid":"Voer een geldig kaartnummer in","cardSecurityCode":"Beveiligingscode creditcard","cardSecurityCodeInvalid":"Voer een geldige beveiligingscode van de kaart in","creditCard":"Creditcard","directDebit":"Automatische afschrijving","directDebitGb":"Automatische afschrijving","incompleteTaxIdentifier":"Vul het veld btw-vrijstellingsnummer in.","invalidTaxIdentifier":"U hebt een ongeldig btw-registratienummer ingevoerd.","klarnaCredit":"Betaal later in 14 dage","klarnaCreditRecurring":"Betaal later in 14 dage","konbini":"Niet-contante betaling via dag- en avondwinkel","konbiniSelectStore":"Kies een winkel.","koreanCardPasswordHint":"Voer de eerste twee cijfers van uw kaartwachtwoord in","month":"Maand","noBanksAvailable":"Selecteer een bank of bankennetwerk","noBankSelected":"Selecteer een bank of bankennetwerk","offlineRefundInsufficientData":"Probeer het opnieuw. Sommige informatie ontbreekt of is niet correct","onlineBanking":"Online bankieren","orderTotal":"Totaal bestelling","payNow":"Nu betalen","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Uw verzoek wordt verwerkt","selectBank":"Selecteer uw bank","wireTransfer":"Bankoverschrijving","year":"Jaar"},"no-NO":{"alipay":"Alipay","birthdate":"Fødselsdato","bPay":"BPAY","cardExpirationDate":"Utløpsdato","cardExpirationMonthInvalid":"Oppgi en gyldig utløpsmåned","cardExpirationYearInvalid":"Oppgi et gyldig utløpsår","cardExpired":"Oppgi detaljene for et kort som ikke er utløpt","cardInvalid":"Sjekk kortdetaljene og prøv på nytt","cardNumber":"Kredittkortnummer","cardNumberInvalid":"Oppgi et gyldig kortnummer","cardSecurityCode":"Kortets sikkerhetskode","cardSecurityCodeInvalid":"Oppgi en gyldig sikkerhetskode for kortet","creditCard":"Kredittkort","directDebit":"Direkte debitering","directDebitGb":"Direkte debitering","incompleteTaxIdentifier":"Vennligst fyll ut feltet Org.nr. for fritak av mva.","invalidTaxIdentifier":"Det ble angitt et ugyldig organisasjonsnummer for mva.","klarnaCredit":"Få først. Betal senere.","klarnaCreditRecurring":"Få først. Betal senere.","konbini":"Papirløs nærbutikkbetaling","konbiniSelectStore":"","koreanCardPasswordHint":"Oppgi de to første sifrene på kortpassordet","month":"Måned","noBanksAvailable":"Velg en bank eller et banknettverk","noBankSelected":"Velg en bank eller et banknettverk","offlineRefundInsufficientData":"Prøv på nytt, noen opplysninger mangler eller er feil","onlineBanking":"Nettbank","orderTotal":"Totalbeløp for bestillingen","payNow":"Betal nå","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Din forespørsel behandles","selectBank":"Velg din bank","wireTransfer":"Bankoverføring","year":"År"},"pl-PL":{"alipay":"Alipay","birthdate":"Data urodzenia","bPay":"BPAY","cardExpirationDate":"Data ważności","cardExpirationMonthInvalid":"Wpisz prawidłowy miesiąc ważności","cardExpirationYearInvalid":"Wpisz prawidłowy rok ważności","cardExpired":"Wpisz dane ważnej karty","cardInvalid":"Sprawdź dane karty i spróbuj ponownie","cardNumber":"Numer karty kredytowej","cardNumberInvalid":"Wpisz prawidłowy numer karty kredytowej","cardSecurityCode":"Kod bezpieczeństwa karty","cardSecurityCodeInvalid":"Wpisz prawidłowy kod bezpieczeństwa karty","creditCard":"Karta kredytowa","directDebit":"Polecenie zapłaty","directDebitGb":"Polecenie zapłaty","incompleteTaxIdentifier":"Wypełnij pole numeru zwolnienia z VAT.","invalidTaxIdentifier":"Wprowadzono nieprawidłowy numer zwolnienia z podatku VAT.","konbini":"Wygodna płatność w sklepie","konbiniSelectStore":"Velg en butikk.","koreanCardPasswordHint":"Wpisz dwie pierwsze cyfry hasła karty","month":"Miesiąc","noBanksAvailable":"Wybierz bank lub sieć banków","noBankSelected":"Wybierz bank lub sieć banków","offlineRefundInsufficientData":"Spróbuj ponownie, niektóre informacje nie są poprawne lub ich brakuje","onlineBanking":"Bankowość online","orderTotal":"Suma zamówienia","payNow":"Zapłać teraz","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Przetwarzanie Twojego wniosku","selectBank":"Wybierz swój bank","wireTransfer":"Przelew bankowy","year":"Rok"},"pt-BR":{"alipay":"Alipay","birthdate":"Aniversário","bPay":"BPAY","cardExpirationDate":"Data de validade","cardExpirationMonthInvalid":"Insira o mês de validade válido","cardExpirationYearInvalid":"Insira o ano de validade válido","cardExpired":"Insira os dados de um cartão que não esteja expirado","cardInvalid":"Verifique os detalhes de cartão e tente novamente","cardNumber":"Número do cartão de crédito","cardNumberInvalid":"Insira um número de cartão válido","cardSecurityCode":"Código de segurança do cartão","cardSecurityCodeInvalid":"Insira o código de segurança de um cartão válido","creditCard":"Cartão de crédito","directDebit":"Débito direto","directDebitGb":"Débito direto","incompleteTaxIdentifier":"Preencha o campo referente ao número de isenção fiscal.","invalidTaxIdentifier":"O código de isenção fiscal informado é inválido.","konbiniSelectStore":"Selecione uma loja.","koreanCardPasswordHint":"Insira os dois primeiros dígitos da senha de seu cartão","month":"Mês","noBanksAvailable":"Escolha um banco ou rede bancária","noBankSelected":"Escolha um banco ou rede bancária","offlineRefundInsufficientData":"Tente novamente, algumas informações estão incorretas ou faltando","onlineBanking":"Banco online","orderTotal":"Total do pedido","payNow":"Pagar agora","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Sua solicitação está sendo processada","selectBank":"Selecione seu banco","wireTransfer":"Transferência bancária","year":"Ano"},"pt-PT":{"alipay":"Alipay","birthdate":"Data de nascimento","bPay":"BPAY","cardExpirationDate":"Data de validade","cardExpirationMonthInvalid":"Introduza um mês de expiração válido","cardExpirationYearInvalid":"Introduza um ano de expiração válido","cardExpired":"Introduza dados de um cartão que não tenha expirado","cardInvalid":"Verifique os dados do cartão e tente de novo","cardNumber":"Número do cartão de crédito","cardNumberInvalid":"Introduza um número do cartão válido","cardSecurityCode":"Código de Segurança do Cartão","cardSecurityCodeInvalid":"Introduza o código de segurança de um cartão válido","creditCard":"Cartão de crédito","directDebit":"Débito Direto","directDebitGb":"Débito Direto","incompleteTaxIdentifier":"Preencha o campo do número de isenção de IVA.","invalidTaxIdentifier":"Foi introduzido um número inválido de isenção de IVA.","konbini":"Pagamento numa loja de conveniência sem papel","konbiniSelectStore":"Selecione uma loja.","koreanCardPasswordHint":"Introduza os primeiros dois dígitos da palavra-passe do seu cartão","month":"Mês","noBanksAvailable":"Escolha um banco ou rede bancária","noBankSelected":"Escolha um banco ou rede bancária","offlineRefundInsufficientData":"Tente de novo; algumas informações estão em falta ou incorretas","onlineBanking":"Banco online","orderTotal":"Total da encomenda","payNow":"Pagar agora","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"A Processar O Seu Pedido","selectBank":"Selecione o seu banco","wireTransfer":"Transferência bancária","year":"Ano"},"ru-RU":{"alipay":"Alipay","birthdate":"Дата рождения","bPay":"BPAY","cardExpirationDate":"Дата окончания срока действия","cardExpirationMonthInvalid":"Введите действительный месяц истечения срока действия","cardExpirationYearInvalid":"Введите действительный год истечения срока действия","cardExpired":"Введите реквизиты действующей карты","cardInvalid":"Проверьте реквизиты карты и попробуйте еще раз","cardNumber":"Номер кредитной карты","cardNumberInvalid":"Введите действительный номер карты","cardSecurityCode":"Код безопасности карты","cardSecurityCodeInvalid":"Введите действительный код безопасности карты","creditCard":"Кредитная карта","directDebit":"Прямой дебет","directDebitGb":"Прямой дебет","incompleteTaxIdentifier":"Заполните поле для номера освобождения от НДС.","invalidTaxIdentifier":"Введен недействительный номер освобождения от НДС.","konbini":"Безбумажные расчеты с магазином","konbiniSelectStore":"Выберите магазин.","koreanCardPasswordHint":"Введите первые две цифры пароля вашей карты","month":"Месяц","noBanksAvailable":"Пожалуйста, выберите банк или банковскую сеть","noBankSelected":"Пожалуйста, выберите банк или банковскую сеть","offlineRefundInsufficientData":"Попробуйте еще раз, некоторые данные отсутствуют или являются несоответствующими","onlineBanking":"Банковские операции онлайн","orderTotal":"Общая сумма заказа","payNow":"Оплатить сейчас","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Ваш запрос выполняется","selectBank":"Пожалуйста, выберите свой банк","wireTransfer":"Электронный перевод","year":"Год"},"sk-SK":{"alipay":"Alipay","birthdate":"Dátum narodenia","bPay":"BPAY","cardExpirationDate":"Dátum expirácie","cardExpirationMonthInvalid":"Zadajte, prosím, platný mesiac konca platnosti","cardExpirationYearInvalid":"Zadajte, prosím, platný rok konca platnosti","cardExpired":"Zadajte, prosím, údaje karty, ktorá je platná","cardInvalid":"Skontrolujte, prosím, údaje o platobnej karte a skúste to znova","cardNumber":"Číslo kreditnej karty","cardNumberInvalid":"Zadajte, prosím, platné číslo platobnej karty","cardSecurityCode":"Bezpečnostný kód na karte","cardSecurityCodeInvalid":"Zadajte, prosím, platný bezpečnostný kód","creditCard":"Kreditná karta","directDebit":"Bezhotovostná platba","directDebitGb":"Bezhotovostná platba","incompleteTaxIdentifier":"Vyplňte pole pre číslo oslobodenia od DPH.","invalidTaxIdentifier":"Zadali ste neplatné číslo oslobodenia od DPH.","konbini":"Elektronická platba z večerného obchodu","konbiniSelectStore":"Vyberte obchod.","koreanCardPasswordHint":"Zadajte, prosím, prvé dve čísla svojho hesla k platobnej karte","month":"Mesiac","noBanksAvailable":"Zvoľte banku alebo sieť bánk","noBankSelected":"Zvoľte banku alebo sieť bánk","offlineRefundInsufficientData":"Skúste to, prosím, znova, niektoré informácie chýbajú alebo nie sú správne","onlineBanking":"Online banking","orderTotal":"Objednávka spolu","payNow":"Zaplatiť","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Prebieha spracovanie vašej žiadosti","selectBank":"Vyberte banku","wireTransfer":"Elektronický prevod","year":"Rok"},"sv-SE":{"alipay":"Alipay","birthdate":"Födelsedatum","bPay":"BPAY","cardExpirationDate":"Förfallodatum","cardExpirationMonthInvalid":"Ange giltig utgångsmånad","cardExpirationYearInvalid":"Ange giltigt utgångsår","cardExpired":"Ange information från ett kort som inte har gått ut","cardInvalid":"Kontrollera kortinformationen och prova igen","cardNumber":"Kreditkortsnummer","cardNumberInvalid":"Ange ett giltigt kortnummer","cardSecurityCode":"Kortets säkerhetskod","cardSecurityCodeInvalid":"Ange kortets säkerhetskod","creditCard":"Kreditkort","directDebit":"Direktdebitering","directDebitGb":"Direktdebitering","incompleteTaxIdentifier":"Fyll i fältet för momsbefrielsenummer.","invalidTaxIdentifier":"Ett ogiltigt momsbefrielsenummer har matats in.","klarnaCredit":"Få först. Betala sen","klarnaCreditRecurring":"Få först. Betala sen","konbini":"Papperslös betalning i närbutik","konbiniSelectStore":"Välj en butik.","koreanCardPasswordHint":"Ange de två första siffrorna i din PIN-kod","month":"Månad","noBanksAvailable":"Välj en bank eller ett banknätverk","noBankSelected":"Välj en bank eller ett banknätverk","offlineRefundInsufficientData":"Försök igen, information saknas eller är felaktig","onlineBanking":"Bank online","orderTotal":"Ordersumma","payNow":"Betala nu","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Behandlar din förfrågan","selectBank":"Välj din bank","wireTransfer":"Banköverföring","year":"År"},"th-TH":{"alipay":"Alipay","birthdate":"วันเกิด","bPay":"BPAY","cardExpirationDate":"วันหมดอายุ","cardExpirationMonthInvalid":"กรุณาใส่เดือนหมดอายุที่ถูกต้อง","cardExpirationYearInvalid":"กรุณาใส่ปีหมดอายุที่ถูกต้อง","cardExpired":"กรุณาใส่รายละเอียดของบัตรที่ยังไม่หมดอายุ","cardInvalid":"กรุณาตรวจสอบรายละเอียดของบัตรแล้วลองอีกครั้ง","cardNumber":"หมายเลขบัตรเครดิต","cardNumberInvalid":"กรุณาใส่หมายเลขบัตรที่ถูกต้อง","cardSecurityCode":"รหัสความปลอดภัยบนบัตร (Card Security Code) ","cardSecurityCodeInvalid":"กรุณาใส่รหัสความปลอดภัยบนบัตรที่ถูกต้อง","creditCard":"บัตรเครดิต","directDebit":"เดบิตตรง","directDebitGb":"เดบิตตรง","incompleteTaxIdentifier":"กรุณากรอกข้อมูลในช่องหมายเลขยกเว้น VAT ให้สมบูรณ์","invalidTaxIdentifier":"ใส่หมายเลขยกเว้น VAT ไม่ถูกต้อง","konbini":"การชำระเงินที่ร้านสะดวกซื้อแบบไม่ต้องมีใบรับ","konbiniSelectStore":"เลือกร้านค้า ","koreanCardPasswordHint":"กรุณาใส่เลขรหัสผ่านของบัตรสองตัวแรก","month":"เดือน ","noBanksAvailable":"กรุณาเลือกธนาคารหรือเครือข่ายธนาคาร","noBankSelected":"กรุณาเลือกธนาคารหรือเครือข่ายธนาคาร","offlineRefundInsufficientData":"กรุณาลองอีกครั้ง ข้อมูลบางอย่างไม่ถูกต้องหรือยังไม่ได้ระบุ","onlineBanking":"ธนาคารออนไลน์","orderTotal":"ยอดรวมที่สั่งซื้อ ","payNow":"ชำระเงินทันที","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"กำลังดำเนินการคำร้องของคุณ","selectBank":"กรุณาเลือกธนาคารของคุณ","wireTransfer":"การโอนเงินทางอิเล็กทรอนิกส์","year":"ปี "},"tr-TR":{"alipay":"Alipay","birthdate":"Doğum Tarihi","bPay":"BPAY","cardExpirationDate":"Son Kullanma Tarihi","cardExpirationMonthInvalid":"Lütfen geçerli bir sona erme ayı girin","cardExpirationYearInvalid":"Lütfen geçerli bir sona erme yılı girin","cardExpired":"Lütfen süresi dolmamış bir kart bilgisi girin","cardInvalid":"Lütfen kart bilgilerini kontrol edin ve tekrar deneyin","cardNumber":"Kredi Kartı Numarası","cardNumberInvalid":"Lütfen geçerli bir kart numarası girin","cardSecurityCode":"Kart Güvenlik Kodu","cardSecurityCodeInvalid":"Lütfen geçerli bir kart güvenlik kodu girin","creditCard":"Kredi Kartı","directDebit":"Doğrudan Borç","directDebitGb":"Doğrudan Borç","incompleteTaxIdentifier":"Lütfen, KDV Muafiyet Numarası bölümünü doldurun.","invalidTaxIdentifier":"Geçersiz bir KDV numarası girildi","konbini":"Kağıtsız uygunluk mağaza ödemesi","konbiniSelectStore":"Bir mağaza seçin.","koreanCardPasswordHint":"Lütfen kart şifrenizin ilk iki rakamını girin","month":"Ay","noBanksAvailable":"Lütfen bir banka veya banka ağı seçin","noBankSelected":"Lütfen bir banka veya banka ağı seçin","offlineRefundInsufficientData":"Bazı bilgiler eksik veya hatalı, lütfen tekrar deneyin","onlineBanking":"İnternet Aracılığıyla Bankacılık","orderTotal":"Sipariş Toplamı","payNow":"Hemen öde","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"Talebiniz İşlemde","selectBank":"Lütfen bankanızı seçin","wireTransfer":"Havale","year":"Yıl"},"zh-CN":{"alipay":"支付宝","birthdate":"出生日期","bPay":"BPAY","cardExpirationDate":"到期日","cardExpirationMonthInvalid":"请输入有效的到期月份","cardExpirationYearInvalid":"请输入有效的到期年份","cardExpired":"请输入未过期信用卡的详细信息","cardInvalid":"请检查信用卡的详细信息，然后重试","cardNumber":"信用卡号*","cardNumberInvalid":"请输入有效的信用卡卡号","cardSecurityCode":"信用卡安全代码","cardSecurityCodeInvalid":"请输入有效的信用卡安全代码","creditCard":"信用卡","directDebit":"借记卡","directDebitGb":"借记卡","incompleteTaxIdentifier":"请填写“增值税免税号”字段。","invalidTaxIdentifier":"输入的增值税免税号无效。","konbiniSelectStore":"选择商店。","koreanCardPasswordHint":"请输入信用卡密码的前两位","month":"月份","noBanksAvailable":"请选择一家银行或银行网络","noBankSelected":"请选择一家银行或银行网络","offlineRefundInsufficientData":"请重试，某些信息丢失或不正确","onlineBanking":"网上银行","orderTotal":"订单总金额","payNow":"立即支付","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"正在处理您的请求","selectBank":"请选择您的银行","wireTransfer":"电汇","year":"年份"},"zh-HK":{"alipay":"支付寶 (Alipay)","birthdate":"出生日期","bPay":"BPAY","cardExpirationDate":"到期日","cardExpirationMonthInvalid":"請輸入有效的到期月份","cardExpirationYearInvalid":"請輸入有效的到期年份","cardExpired":"請輸入未過期的信用卡資料","cardInvalid":"請檢查信用卡資料再試一次","cardNumber":"信用卡號碼","cardNumberInvalid":"請輸入有效的信用卡號碼","cardSecurityCode":"信用卡安全碼：","cardSecurityCodeInvalid":"請輸入有效的信用卡安全碼","creditCard":"信用卡","directDebit":"直接扣款","directDebitGb":"直接扣款","incompleteTaxIdentifier":"請填寫「增值稅免除號碼」欄位。","invalidTaxIdentifier":"輸入了無效的增值稅免除號碼。","konbiniSelectStore":"選取商店。","koreanCardPasswordHint":"請輸入信用卡密碼的前2位數字","month":"月份","noBanksAvailable":"請選擇銀行或銀行網路","noBankSelected":"請選擇銀行或銀行網路","offlineRefundInsufficientData":"資料遺失或不正確，請再試一次","onlineBanking":"線上金融","orderTotal":"訂單總計","payNow":"立即付款","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"正在處理您的請求","selectBank":"請選擇您的銀行","wireTransfer":"電匯","year":"年"},"zh-TW":{"alipay":"Alipay（支付寶）","birthdate":"生日","bPay":"BPAY","cardExpirationDate":"到期日","cardExpirationMonthInvalid":"請輸入有效的到期月份","cardExpirationYearInvalid":"請輸入有效的到期年份","cardExpired":"請輸入未到期的信用卡資料","cardInvalid":"請檢查信用卡資料並再試一次","cardNumber":"信用卡號碼","cardNumberInvalid":"請輸入有效的信用卡號碼","cardSecurityCode":"信用卡安全碼：","cardSecurityCodeInvalid":"請輸入有效的信用卡安全碼","creditCard":"信用卡","directDebit":"直接扣款","directDebitGb":"直接扣款","incompleteTaxIdentifier":"請您填妥「VAT 免稅號碼」欄位。","invalidTaxIdentifier":"輸入的 VAT 免稅編號不正確。","konbiniSelectStore":"選擇商店。","koreanCardPasswordHint":"請輸入信用卡密碼前兩碼","month":"月份","noBanksAvailable":"請選擇銀行或銀行網路","noBankSelected":"請選擇銀行或銀行網路","offlineRefundInsufficientData":"部分資訊遺漏或不正確，請再試一次","onlineBanking":"線上銀行","orderTotal":"訂單總計","payNow":"立即付款","payPal":"PayPal","payPalBilling":"PayPal","processingYourRequest":"正在處理您的請求","selectBank":"請選擇您的銀行","wireTransfer":"電匯轉帳","year":"年度"}};

/***/ }),

/***/ "./src/app/components/localization/supported-locales.json":
/*!****************************************************************!*\
  !*** ./src/app/components/localization/supported-locales.json ***!
  \****************************************************************/
/*! exports provided: ar-EG, cs-CZ, da-DK, de-AT, de-CH, de-DE, el-GR, en-AU, en-CA, en-CH, en-GB, en-IE, en-IN, en-MY, en-NL, en-NZ, en-PR, en-SG, en-US, en-ZA, es-AR, es-CL, es-CO, es-EC, es-ES, es-419, es-MX, es-PE, es-VE, fi-FI, fr-BE, fr-CA, fr-CH, fr-FR, hu-HU, it-CH, it-IT, iw-IL, ja-JP, ko-KR, nl-BE, nl-NL, no-NO, pl-PL, pt-BR, pt-PT, ru-RU, sk-SK, sv-SE, th-TH, tr-TR, zh-CN, zh-HK, zh-TW, default */
/***/ (function(module) {

module.exports = {"ar-EG":{"messageLocale":"ar-EG"},"cs-CZ":{"messageLocale":"cs-CZ"},"da-DK":{"messageLocale":"da-DK"},"de-AT":{"messageLocale":"de-DE"},"de-CH":{"messageLocale":"de-DE"},"de-DE":{"messageLocale":"de-DE"},"el-GR":{"messageLocale":"el-GR"},"en-AU":{"messageLocale":"en-IE"},"en-CA":{"messageLocale":"en-IE"},"en-CH":{"messageLocale":"en-IE"},"en-GB":{"messageLocale":"en-GB"},"en-IE":{"messageLocale":"en-IE"},"en-IN":{"messageLocale":"en-IE"},"en-MY":{"messageLocale":"en-IE"},"en-NL":{"messageLocale":"en-IE"},"en-NZ":{"messageLocale":"en-IE"},"en-PR":{"messageLocale":"en-IE"},"en-SG":{"messageLocale":"en-IE"},"en-US":{"messageLocale":"en-US"},"en-ZA":{"messageLocale":"en-IE"},"es-AR":{"messageLocale":"es-MX"},"es-CL":{"messageLocale":"es-MX"},"es-CO":{"messageLocale":"es-MX"},"es-EC":{"messageLocale":"es-MX"},"es-ES":{"messageLocale":"es-ES"},"es-419":{"messageLocale":"es-MX"},"es-MX":{"messageLocale":"es-MX"},"es-PE":{"messageLocale":"es-MX"},"es-VE":{"messageLocale":"es-MX"},"fi-FI":{"messageLocale":"fi-FI"},"fr-BE":{"messageLocale":"fr-FR"},"fr-CA":{"messageLocale":"fr-CA"},"fr-CH":{"messageLocale":"fr-FR"},"fr-FR":{"messageLocale":"fr-FR"},"hu-HU":{"messageLocale":"hu-HU"},"it-CH":{"messageLocale":"it-IT"},"it-IT":{"messageLocale":"it-IT"},"iw-IL":{"messageLocale":"iw-IL"},"ja-JP":{"messageLocale":"ja-JP"},"ko-KR":{"messageLocale":"ko-KR"},"nl-BE":{"messageLocale":"nl-NL"},"nl-NL":{"messageLocale":"nl-NL"},"no-NO":{"messageLocale":"no-NO"},"pl-PL":{"messageLocale":"pl-PL"},"pt-BR":{"messageLocale":"pt-BR"},"pt-PT":{"messageLocale":"pt-PT"},"ru-RU":{"messageLocale":"ru-RU"},"sk-SK":{"messageLocale":"sk-SK"},"sv-SE":{"messageLocale":"sv-SE"},"th-TH":{"messageLocale":"th-TH"},"tr-TR":{"messageLocale":"tr-TR"},"zh-CN":{"messageLocale":"zh-CN"},"zh-HK":{"messageLocale":"zh-HK"},"zh-TW":{"messageLocale":"zh-TW"}};

/***/ }),

/***/ 23:
/*!*********************************************************************!*\
  !*** multi ./src/app/components/localization/localized-messages.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\ui-architecture\digitalriverpayments\src\app\components\localization\localized-messages.js */"./src/app/components/localization/localized-messages.js");


/***/ })

/******/ })));
//# sourceMappingURL=localized-messages.js.map