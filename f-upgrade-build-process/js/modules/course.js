/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/mods/course.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
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

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
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

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
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

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
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

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
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

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "./src/js/mods/course.js":
/*!*******************************!*\
  !*** ./src/js/mods/course.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__);






// $ = require('./libs/jquery');
var onResize = __webpack_require__(/*! ./utils/on-resize */ "./src/js/mods/utils/on-resize.js"),
    composeFunctions = __webpack_require__(/*! ../utils/compose-functions */ "./src/js/utils/compose-functions.js"),
    defer = __webpack_require__(/*! ./utils/defer */ "./src/js/mods/utils/defer.js"),
    charts = __webpack_require__(/*! ../utils/charts */ "./src/js/utils/charts.js"),
    initAccordions = function initAccordions() {
  $('.course__accordion').accordion({
    heightStyle: 'content',
    collapsible: true,
    active: false,
    animate: false,
    activate: function activate(event, ui) {
      if (!$.isEmptyObject(ui.newHeader.offset())) {
        $('html:not(:animated), body:not(:animated)').animate({
          scrollTop: ui.newHeader.offset().top
        }, 'slow');
      }
    }
  });
},
    initApplyDialog = function initApplyDialog() {
  $('a[href="#apply-dialog"]').click(function (e) {
    e.preventDefault();
    $('#apply-dialog').dialog({
      modal: true,
      autoOpen: true,
      dialogClass: 'apply-dialog',
      title: 'How to Apply',
      width: '60%',
      height: 500,
      draggable: false,
      resizable: false
    });
  });
},
    initEntries = function initEntries() {
  $('.course__entries select').change(function (e) {
    location.href = $(this).find('option:selected').attr('data-url');
  });
},
    initTestimonials = function initTestimonials() {
  var w = $('.course__profiles').width(),
      n = $('.course__profiles__item').length;

  if (n > 0) {
    var fitAllWidth = w / n,
        controls = n > 1,
        minWidth = Math.max(300, fitAllWidth),
        maxSlides = Math.max(1, Math.floor(w / minWidth)),
        width = w / maxSlides;
    $('.course__profiles .items').bxSlider({
      pager: false,
      controls: controls,
      nextText: '<i class="fa fa-chevron-right"></i>',
      prevText: '<i class="fa fa-chevron-left"></i>',
      adaptiveHeight: true,
      slideMargin: 0,
      touchEnabled: false
    });
  }
},
    testimonialsBackgroundColor = function testimonialsBackgroundColor() {
  // Get title text colour of selected list item, i.e. nested in aria-hidden="false"
  var selectedItemColor = $('li.course__profiles__item:not([aria-hidden*="true"]) .course__profiles__item__text__title').css('color'); // Apply selected text colour to testimonials wrapper background

  $('.course__testimonials__wrapper').css('background', selectedItemColor);
},
    initAssessment = function initAssessment() {
  var container = document.getElementById('course-assessment-chart');

  if (container) {
    var data = new google.visualization.DataTable(),
        options = {
      chartArea: {
        top: 10,
        bottom: 30,
        width: 300,
        height: 300
      },
      animation: {
        duration: 1000,
        startup: true
      },
      tooltip: {
        text: 'percentage'
      },
      title: 'Assessment',
      pieHole: 0.5,
      colors: ['#253e52', '#3f1561', '#e3a02d', '#3986ac']
    },
        chart = new google.visualization.PieChart(container);
    data.addColumn('string', 'Type');
    data.addColumn('number', '%');
    $('.course__assessment__list li').each(function () {
      var li = $(this);
      data.addRow([li.attr('data-label'), parseFloat(li.attr('data-value'))]);
    });
    return function () {
      chart.draw(data, options);
    };
  } else {
    return false;
  }
},
    initMenu = function initMenu() {
  var menu = $('.course__menu'),
      toggle = menu.find('.course__menu__title a'),
      content = menu.find('.course__menu__content');
  toggle.click(function (e) {
    e.preventDefault();
    $(this).text(function (i, v) {
      return v == 'Hide' ? 'Show' : 'Hide';
    });
    content.slideToggle();
  });
},
    initEmployment = function initEmployment() {
  var wrapper = $('.course__employment');

  if (wrapper.length) {
    var valuesStr = wrapper.attr('data-values') || wrapper.attr('data-value') + ';0;0',
        values = valuesStr.split(';').map(function (v) {
      return parseFloat(v || '0');
    }),
        total = values.reduce(function (acc, v) {
      return acc + v;
    }),
        valueOther = Math.max(0, 100 - total),
        data = new google.visualization.DataTable(),
        options = {
      backgroundColor: 'transparent',
      height: '100%',
      chartArea: {
        backgroundColor: 'transparent',
        top: '5%',
        height: '90%',
        width: '90%'
      },
      animation: {
        duration: 1000,
        startup: true
      },
      legend: 'none',
      pieSliceText: 'none',
      tooltip: {
        text: 'percentage'
      },
      pieHole: 0.85,
      slices: {
        0: {
          color: '#a22833'
        },
        1: {
          color: '#db6363'
        },
        2: {
          color: '#d99898'
        },
        3: {
          color: '#d9d9d9'
        }
      }
    },
        chart = new google.visualization.PieChart(document.getElementById('course-destinations-employment-chart'));
    data.addColumn('string', 'Type');
    data.addColumn('number', '%');
    data.addRow(['In employment', values[0]]);
    data.addRow(['Work and study', values[1]]);
    data.addRow(['Further study', values[2]]);
    data.addRow(['Unemployed', valueOther]);
    return function () {
      chart.draw(data, options);
    };
  } else {
    return false;
  }
},
    initDestinations = function initDestinations() {
  return initEmployment();
},
    initCharts = function initCharts() {
  charts.onInit(function () {
    onResize(composeFunctions(initAssessment(), initDestinations()), true);
  });
},
    initReadMore = function initReadMore() {
  if ($(window).width() < 600) {
    $('.course__white-box').each(function () {
      var box = $(this),
          content = box.find('.course__white-box__content');

      if (content.height() > 100) {
        content.addClass('course__white-box__content--read-more');
        var button = $('<div class="course__white-box__read-more">' + '<div class="course__white-box__read-more__bg"></div>' + '<a  href="#"><span>read more</span></a>' + '</div>').click(function (e) {
          content.removeClass('course__white-box__content--read-more');
          button.remove();
          e.preventDefault();
        }).appendTo(box);
      }
    });
  }
},
    initKisWidget = function initKisWidget() {
  var widget = $('#unistats-widget-frame');

  if (widget.length > 0) {
    var wrapper = $('.course__kis'),
        update = function update() {
      var src = widget.attr('src'),
          currentHorizontal = src.indexOf('horizontal') >= 0,
          neededHorizontal = $(window).width() > 635;

      if (currentHorizontal !== neededHorizontal) {
        var nextSrc = neededHorizontal ? src.replace(/vertical/, 'horizontal') : src.replace(/horizontal/, 'vertical'),
            nextStyle = neededHorizontal ? {
          width: '615px',
          height: '150px'
        } : {
          width: '190px',
          height: '500px'
        };
        widget.attr('src', nextSrc);
        widget.css(nextStyle);
        wrapper.toggleClass('course__kis--vertical', !neededHorizontal);
      }
    };

    onResize(update, true);
  }
},
    init = function init() {
  initKisWidget();
  initAccordions();
  initEntries();
  initTestimonials();
  initCharts();
  initReadMore();
  initApplyDialog();
  initMenu();
  testimonialsBackgroundColor();
};

defer(init); // Change testimonial wrapper background colour when user scrolls through items

$('.course__testimonials__wrapper').click(function () {
  testimonialsBackgroundColor();
});

/***/ }),

/***/ "./src/js/mods/libs/jquery.js":
/*!************************************!*\
  !*** ./src/js/mods/libs/jquery.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * expects jQuery to be provided by CITY_R.js
 */
module.exports = window.$;

/***/ }),

/***/ "./src/js/mods/utils/defer.js":
/*!************************************!*\
  !*** ./src/js/mods/utils/defer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  'use strict';

  var $ = __webpack_require__(/*! ../libs/jquery */ "./src/js/mods/libs/jquery.js");

  return function (deferredFunction) {
    if (typeof CITY !== 'undefined') {
      $(deferredFunction);
    } else {
      if (!window.CITY_OPTIONS) {
        window.CITY_OPTIONS = {
          defer: []
        };
      } else if (!window.CITY_OPTIONS.defer) {
        window.CITY_OPTIONS.defer = [];
      }

      CITY_OPTIONS.defer.push(deferredFunction);
    }
  };
}();

/***/ }),

/***/ "./src/js/mods/utils/on-resize.js":
/*!****************************************!*\
  !*** ./src/js/mods/utils/on-resize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var $ = __webpack_require__(/*! ../libs/jquery */ "./src/js/mods/libs/jquery.js");

  return function (f, runNow) {
    $(window).resize(f);

    if (runNow) {
      f();
    }
  };
}();

/***/ }),

/***/ "./src/js/utils/charts.js":
/*!********************************!*\
  !*** ./src/js/utils/charts.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var state = 'not-loaded',
      callbacks = [],
      loadComplete = function loadComplete() {
    state = 'loaded';

    for (var i = 0; i < callbacks.length; i++) {
      callbacks[i]();
    }
  },
      checkLoadComplete = function checkLoadComplete() {
    if (google.visualization && google.visualization.DataTable) {
      loadComplete();
    } else {
      setTimeout(checkLoadComplete, 100);
    }
  },
      load = function load() {
    state = 'loading';
    google.load('visualization', '1.0', {
      packages: ['corechart'],
      callback: function callback() {}
    });
    google.setOnLoadCallback(checkLoadComplete);
  },
      onInit = function onInit(f) {
    if (state === 'loaded') {
      f();
    } else {
      callbacks.push(f);

      if (state === 'not-loaded') {
        load();
      }
    }
  };

  return {
    onInit: onInit
  };
}();

/***/ }),

/***/ "./src/js/utils/compose-functions.js":
/*!*******************************************!*\
  !*** ./src/js/utils/compose-functions.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var expand = function expand(expanded, list) {
    for (var i = 0; i < list.length; i++) {
      var item = list[i];

      if (typeof item === 'function') {
        expanded.push(item);
      } else if (item && item.constructor === Array) {
        expand(expanded, item);
      }
    }
  },
      compose = function compose() {
    var expanded = [];
    expand(expanded, arguments);
    return function () {
      for (var i = 0; i < expanded.length; i++) {
        expanded[i]();
      }
    };
  };

  return compose;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19maXgtcmUtd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL2NvdXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kcy9saWJzL2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kcy91dGlscy9kZWZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kcy91dGlscy9vbi1yZXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2NoYXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvY29tcG9zZS1mdW5jdGlvbnMuanMiXSwibmFtZXMiOlsib25SZXNpemUiLCJyZXF1aXJlIiwiY29tcG9zZUZ1bmN0aW9ucyIsImRlZmVyIiwiY2hhcnRzIiwiaW5pdEFjY29yZGlvbnMiLCIkIiwiYWNjb3JkaW9uIiwiaGVpZ2h0U3R5bGUiLCJjb2xsYXBzaWJsZSIsImFjdGl2ZSIsImFuaW1hdGUiLCJhY3RpdmF0ZSIsImV2ZW50IiwidWkiLCJpc0VtcHR5T2JqZWN0IiwibmV3SGVhZGVyIiwib2Zmc2V0Iiwic2Nyb2xsVG9wIiwidG9wIiwiaW5pdEFwcGx5RGlhbG9nIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJkaWFsb2ciLCJtb2RhbCIsImF1dG9PcGVuIiwiZGlhbG9nQ2xhc3MiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhZ2dhYmxlIiwicmVzaXphYmxlIiwiaW5pdEVudHJpZXMiLCJjaGFuZ2UiLCJsb2NhdGlvbiIsImhyZWYiLCJmaW5kIiwiYXR0ciIsImluaXRUZXN0aW1vbmlhbHMiLCJ3IiwibiIsImxlbmd0aCIsImZpdEFsbFdpZHRoIiwiY29udHJvbHMiLCJtaW5XaWR0aCIsIk1hdGgiLCJtYXgiLCJtYXhTbGlkZXMiLCJmbG9vciIsImJ4U2xpZGVyIiwicGFnZXIiLCJuZXh0VGV4dCIsInByZXZUZXh0IiwiYWRhcHRpdmVIZWlnaHQiLCJzbGlkZU1hcmdpbiIsInRvdWNoRW5hYmxlZCIsInRlc3RpbW9uaWFsc0JhY2tncm91bmRDb2xvciIsInNlbGVjdGVkSXRlbUNvbG9yIiwiY3NzIiwiaW5pdEFzc2Vzc21lbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YSIsImdvb2dsZSIsInZpc3VhbGl6YXRpb24iLCJEYXRhVGFibGUiLCJvcHRpb25zIiwiY2hhcnRBcmVhIiwiYm90dG9tIiwiYW5pbWF0aW9uIiwiZHVyYXRpb24iLCJzdGFydHVwIiwidG9vbHRpcCIsInRleHQiLCJwaWVIb2xlIiwiY29sb3JzIiwiY2hhcnQiLCJQaWVDaGFydCIsImFkZENvbHVtbiIsImVhY2giLCJsaSIsImFkZFJvdyIsInBhcnNlRmxvYXQiLCJkcmF3IiwiaW5pdE1lbnUiLCJtZW51IiwidG9nZ2xlIiwiY29udGVudCIsImkiLCJ2Iiwic2xpZGVUb2dnbGUiLCJpbml0RW1wbG95bWVudCIsIndyYXBwZXIiLCJ2YWx1ZXNTdHIiLCJ2YWx1ZXMiLCJzcGxpdCIsIm1hcCIsInRvdGFsIiwicmVkdWNlIiwiYWNjIiwidmFsdWVPdGhlciIsImJhY2tncm91bmRDb2xvciIsImxlZ2VuZCIsInBpZVNsaWNlVGV4dCIsInNsaWNlcyIsImNvbG9yIiwiaW5pdERlc3RpbmF0aW9ucyIsImluaXRDaGFydHMiLCJvbkluaXQiLCJpbml0UmVhZE1vcmUiLCJ3aW5kb3ciLCJib3giLCJhZGRDbGFzcyIsImJ1dHRvbiIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwiYXBwZW5kVG8iLCJpbml0S2lzV2lkZ2V0Iiwid2lkZ2V0IiwidXBkYXRlIiwic3JjIiwiY3VycmVudEhvcml6b250YWwiLCJpbmRleE9mIiwibmVlZGVkSG9yaXpvbnRhbCIsIm5leHRTcmMiLCJyZXBsYWNlIiwibmV4dFN0eWxlIiwidG9nZ2xlQ2xhc3MiLCJpbml0IiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmVycmVkRnVuY3Rpb24iLCJDSVRZIiwiQ0lUWV9PUFRJT05TIiwicHVzaCIsImYiLCJydW5Ob3ciLCJyZXNpemUiLCJzdGF0ZSIsImNhbGxiYWNrcyIsImxvYWRDb21wbGV0ZSIsImNoZWNrTG9hZENvbXBsZXRlIiwic2V0VGltZW91dCIsImxvYWQiLCJwYWNrYWdlcyIsImNhbGxiYWNrIiwic2V0T25Mb2FkQ2FsbGJhY2siLCJleHBhbmQiLCJleHBhbmRlZCIsImxpc3QiLCJpdGVtIiwiY29uc3RydWN0b3IiLCJBcnJheSIsImNvbXBvc2UiLCJhcmd1bWVudHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5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SUFBSUEsSUFBSSxJQUFJQSxJQUFJLENBQUNDLFdBQUwsS0FBcUJDLEtBQWpDLEVBQXdDO0FBQzNDTCxjQUFNLENBQUNDLFFBQUQsRUFBV0UsSUFBWCxDQUFOO0FBQ0g7QUFDSjtBQUNKLEdBVkw7QUFBQSxNQVdJRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFXO0FBQ2pCLFFBQUlMLFFBQVEsR0FBRyxFQUFmO0FBQ0FELFVBQU0sQ0FBQ0MsUUFBRCxFQUFXTSxTQUFYLENBQU47QUFDQSxXQUFPLFlBQVc7QUFDZCxXQUFLLElBQUlsRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNEQsUUFBUSxDQUFDNUcsTUFBN0IsRUFBcUNnRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDNEQsZ0JBQVEsQ0FBQzVELENBQUQsQ0FBUjtBQUNIO0FBQ0osS0FKRDtBQUtILEdBbkJMOztBQXFCQSxTQUFPaUUsT0FBUDtBQUNILENBdkJnQixFQUFqQixDIiwiZmlsZSI6Im1vZHVsZXMvY291cnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvbW9kcy9jb3Vyc2UuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFzYyA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsKSkge1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcbiIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjcnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gIHZhciBTWU1CT0wgPSB3a3MoS0VZKTtcbiAgdmFyIGZucyA9IGV4ZWMoZGVmaW5lZCwgU1lNQk9MLCAnJ1tLRVldKTtcbiAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICB2YXIgcnhmbiA9IGZuc1sxXTtcbiAgaWYgKGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSkpIHtcbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmZuKTtcbiAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxufTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSg1KTtcbnZhciBLRVkgPSAnZmluZCc7XG52YXIgZm9yY2VkID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoS0VZIGluIFtdKSBBcnJheSgxKVtLRVldKGZ1bmN0aW9uICgpIHsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcbiIsIi8vIEBAcmVwbGFjZSBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFJFUExBQ0UsICRyZXBsYWNlKSB7XG4gIC8vIDIxLjEuMy4xNCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSlcbiAgcmV0dXJuIFtmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgIHZhciBmbiA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGZuLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgIDogJHJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICB9LCAkcmVwbGFjZV07XG59KTtcbiIsIi8vIEBAc3BsaXQgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgU1BMSVQsICRzcGxpdCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpO1xuICB2YXIgX3NwbGl0ID0gJHNwbGl0O1xuICB2YXIgJHB1c2ggPSBbXS5wdXNoO1xuICB2YXIgJFNQTElUID0gJ3NwbGl0JztcbiAgdmFyIExFTkdUSCA9ICdsZW5ndGgnO1xuICB2YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuICBpZiAoXG4gICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnYWInWyRTUExJVF0oLyg/OmFiKSovKVtMRU5HVEhdICE9IDIgfHxcbiAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG4gICAgJydbJFNQTElUXSgvLj8vKVtMRU5HVEhdXG4gICkge1xuICAgIHZhciBOUENHID0gLygpPz8vLmV4ZWMoJycpWzFdID09PSB1bmRlZmluZWQ7IC8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwXG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDApIHJldHVybiBbXTtcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICBpZiAoIWlzUmVnRXhwKHNlcGFyYXRvcikpIHJldHVybiBfc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IDQyOTQ5NjcyOTUgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIHNlcGFyYXRvcjIsIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGgsIGk7XG4gICAgICAvLyBEb2Vzbid0IG5lZWQgZmxhZ3MgZ3ksIGJ1dCB0aGV5IGRvbid0IGh1cnRcbiAgICAgIGlmICghTlBDRykgc2VwYXJhdG9yMiA9IG5ldyBSZWdFeHAoJ14nICsgc2VwYXJhdG9yQ29weS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIGZsYWdzKTtcbiAgICAgIHdoaWxlIChtYXRjaCA9IHNlcGFyYXRvckNvcHkuZXhlYyhzdHJpbmcpKSB7XG4gICAgICAgIC8vIGBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleGAgaXMgbm90IHJlbGlhYmxlIGNyb3NzLWJyb3dzZXJcbiAgICAgICAgbGFzdEluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICBpZiAobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCkge1xuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgIGZvciBOUENHXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgICAgICAgIGlmICghTlBDRyAmJiBtYXRjaFtMRU5HVEhdID4gMSkgbWF0Y2hbMF0ucmVwbGFjZShzZXBhcmF0b3IyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzW0xFTkdUSF0gLSAyOyBpKyspIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pICRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pIHtcbiAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZiAoJzAnWyRTUExJVF0odW5kZWZpbmVkLCAwKVtMRU5HVEhdKSB7XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogX3NwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfTtcbiAgfVxuICAvLyAyMS4xLjMuMTcgU3RyaW5nLnByb3RvdHlwZS5zcGxpdChzZXBhcmF0b3IsIGxpbWl0KVxuICByZXR1cm4gW2Z1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgdmFyIGZuID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpIDogJHNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgfSwgJHNwbGl0XTtcbn0pO1xuIiwiLy8gJCA9IHJlcXVpcmUoJy4vbGlicy9qcXVlcnknKTtcbnZhciBvblJlc2l6ZSA9IHJlcXVpcmUoJy4vdXRpbHMvb24tcmVzaXplJyksXG4gICAgY29tcG9zZUZ1bmN0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbXBvc2UtZnVuY3Rpb25zJyksXG4gICAgZGVmZXIgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmVyJyksXG4gICAgY2hhcnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvY2hhcnRzJyksXG4gICAgaW5pdEFjY29yZGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLmNvdXJzZV9fYWNjb3JkaW9uJykuYWNjb3JkaW9uKHtcbiAgICAgICAgICAgIGhlaWdodFN0eWxlOiAnY29udGVudCcsXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQuaXNFbXB0eU9iamVjdCh1aS5uZXdIZWFkZXIub2Zmc2V0KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWw6bm90KDphbmltYXRlZCksIGJvZHk6bm90KDphbmltYXRlZCknKS5hbmltYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzY3JvbGxUb3A6IHVpLm5ld0hlYWRlci5vZmZzZXQoKS50b3AgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzbG93J1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaW5pdEFwcGx5RGlhbG9nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJ2FbaHJlZj1cIiNhcHBseS1kaWFsb2dcIl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoJyNhcHBseS1kaWFsb2cnKS5kaWFsb2coe1xuICAgICAgICAgICAgICAgIG1vZGFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9PcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRpYWxvZ0NsYXNzOiAnYXBwbHktZGlhbG9nJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0hvdyB0byBBcHBseScsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc2MCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAwLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGluaXRFbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5jb3Vyc2VfX2VudHJpZXMgc2VsZWN0JykuY2hhbmdlKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtdXJsJyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaW5pdFRlc3RpbW9uaWFscyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdyA9ICQoJy5jb3Vyc2VfX3Byb2ZpbGVzJykud2lkdGgoKSxcbiAgICAgICAgICAgIG4gPSAkKCcuY291cnNlX19wcm9maWxlc19faXRlbScpLmxlbmd0aDtcblxuICAgICAgICBpZiAobiA+IDApIHtcbiAgICAgICAgICAgIHZhciBmaXRBbGxXaWR0aCA9IHcgLyBuLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xzID0gbiA+IDEsXG4gICAgICAgICAgICAgICAgbWluV2lkdGggPSBNYXRoLm1heCgzMDAsIGZpdEFsbFdpZHRoKSxcbiAgICAgICAgICAgICAgICBtYXhTbGlkZXMgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHcgLyBtaW5XaWR0aCkpLFxuICAgICAgICAgICAgICAgIHdpZHRoID0gdyAvIG1heFNsaWRlcztcblxuICAgICAgICAgICAgJCgnLmNvdXJzZV9fcHJvZmlsZXMgLml0ZW1zJykuYnhTbGlkZXIoe1xuICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb250cm9sczogY29udHJvbHMsXG4gICAgICAgICAgICAgICAgbmV4dFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+JyxcbiAgICAgICAgICAgICAgICBwcmV2VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVNYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgdG91Y2hFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZXN0aW1vbmlhbHNCYWNrZ3JvdW5kQ29sb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gR2V0IHRpdGxlIHRleHQgY29sb3VyIG9mIHNlbGVjdGVkIGxpc3QgaXRlbSwgaS5lLiBuZXN0ZWQgaW4gYXJpYS1oaWRkZW49XCJmYWxzZVwiXG4gICAgICAgIHZhciBzZWxlY3RlZEl0ZW1Db2xvciA9ICQoXG4gICAgICAgICAgICAnbGkuY291cnNlX19wcm9maWxlc19faXRlbTpub3QoW2FyaWEtaGlkZGVuKj1cInRydWVcIl0pIC5jb3Vyc2VfX3Byb2ZpbGVzX19pdGVtX190ZXh0X190aXRsZSdcbiAgICAgICAgKS5jc3MoJ2NvbG9yJyk7XG5cbiAgICAgICAgLy8gQXBwbHkgc2VsZWN0ZWQgdGV4dCBjb2xvdXIgdG8gdGVzdGltb25pYWxzIHdyYXBwZXIgYmFja2dyb3VuZFxuICAgICAgICAkKCcuY291cnNlX190ZXN0aW1vbmlhbHNfX3dyYXBwZXInKS5jc3MoXG4gICAgICAgICAgICAnYmFja2dyb3VuZCcsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1Db2xvclxuICAgICAgICApO1xuICAgIH0sXG4gICAgaW5pdEFzc2Vzc21lbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3Vyc2UtYXNzZXNzbWVudC1jaGFydCcpO1xuXG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0QXJlYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogeyBkdXJhdGlvbjogMTAwMCwgc3RhcnR1cDogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7IHRleHQ6ICdwZXJjZW50YWdlJyB9LFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Fzc2Vzc21lbnQnLFxuICAgICAgICAgICAgICAgICAgICBwaWVIb2xlOiAwLjUsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogWycjMjUzZTUyJywgJyMzZjE1NjEnLCAnI2UzYTAyZCcsICcjMzk4NmFjJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5QaWVDaGFydChjb250YWluZXIpO1xuXG4gICAgICAgICAgICBkYXRhLmFkZENvbHVtbignc3RyaW5nJywgJ1R5cGUnKTtcbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCAnJScpO1xuXG4gICAgICAgICAgICAkKCcuY291cnNlX19hc3Nlc3NtZW50X19saXN0IGxpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGkgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGRhdGEuYWRkUm93KFtcbiAgICAgICAgICAgICAgICAgICAgbGkuYXR0cignZGF0YS1sYWJlbCcpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGxpLmF0dHIoJ2RhdGEtdmFsdWUnKSksXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNoYXJ0LmRyYXcoZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBpbml0TWVudSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWVudSA9ICQoJy5jb3Vyc2VfX21lbnUnKSxcbiAgICAgICAgICAgIHRvZ2dsZSA9IG1lbnUuZmluZCgnLmNvdXJzZV9fbWVudV9fdGl0bGUgYScpLFxuICAgICAgICAgICAgY29udGVudCA9IG1lbnUuZmluZCgnLmNvdXJzZV9fbWVudV9fY29udGVudCcpO1xuXG4gICAgICAgIHRvZ2dsZS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoZnVuY3Rpb24oaSwgdikge1xuICAgICAgICAgICAgICAgIHJldHVybiB2ID09ICdIaWRlJyA/ICdTaG93JyA6ICdIaWRlJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGVudC5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGluaXRFbXBsb3ltZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0gJCgnLmNvdXJzZV9fZW1wbG95bWVudCcpO1xuICAgICAgICBpZiAod3JhcHBlci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZXNTdHIgPVxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmF0dHIoJ2RhdGEtdmFsdWVzJykgfHxcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5hdHRyKCdkYXRhLXZhbHVlJykgKyAnOzA7MCcsXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzU3RyLnNwbGl0KCc7JykubWFwKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodiB8fCAnMCcpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRvdGFsID0gdmFsdWVzLnJlZHVjZShmdW5jdGlvbihhY2MsIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYyArIHY7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdmFsdWVPdGhlciA9IE1hdGgubWF4KDAsIDEwMCAtIHRvdGFsKSxcbiAgICAgICAgICAgICAgICBkYXRhID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0QXJlYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAnNSUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnOTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnOTAlJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7IGR1cmF0aW9uOiAxMDAwLCBzdGFydHVwOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBwaWVTbGljZVRleHQ6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogeyB0ZXh0OiAncGVyY2VudGFnZScgfSxcbiAgICAgICAgICAgICAgICAgICAgcGllSG9sZTogMC44NSxcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAwOiB7IGNvbG9yOiAnI2EyMjgzMycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDE6IHsgY29sb3I6ICcjZGI2MzYzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgMjogeyBjb2xvcjogJyNkOTk4OTgnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAzOiB7IGNvbG9yOiAnI2Q5ZDlkOScgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoYXJ0ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLlBpZUNoYXJ0KFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb3Vyc2UtZGVzdGluYXRpb25zLWVtcGxveW1lbnQtY2hhcnQnXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBkYXRhLmFkZENvbHVtbignc3RyaW5nJywgJ1R5cGUnKTtcbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCAnJScpO1xuICAgICAgICAgICAgZGF0YS5hZGRSb3coWydJbiBlbXBsb3ltZW50JywgdmFsdWVzWzBdXSk7XG4gICAgICAgICAgICBkYXRhLmFkZFJvdyhbJ1dvcmsgYW5kIHN0dWR5JywgdmFsdWVzWzFdXSk7XG4gICAgICAgICAgICBkYXRhLmFkZFJvdyhbJ0Z1cnRoZXIgc3R1ZHknLCB2YWx1ZXNbMl1dKTtcbiAgICAgICAgICAgIGRhdGEuYWRkUm93KFsnVW5lbXBsb3llZCcsIHZhbHVlT3RoZXJdKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNoYXJ0LmRyYXcoZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBpbml0RGVzdGluYXRpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpbml0RW1wbG95bWVudCgpO1xuICAgIH0sXG4gICAgaW5pdENoYXJ0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjaGFydHMub25Jbml0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgb25SZXNpemUoXG4gICAgICAgICAgICAgICAgY29tcG9zZUZ1bmN0aW9ucyhpbml0QXNzZXNzbWVudCgpLCBpbml0RGVzdGluYXRpb25zKCkpLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaW5pdFJlYWRNb3JlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDYwMCkge1xuICAgICAgICAgICAgJCgnLmNvdXJzZV9fd2hpdGUtYm94JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgYm94ID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGJveC5maW5kKCcuY291cnNlX193aGl0ZS1ib3hfX2NvbnRlbnQnKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50LmhlaWdodCgpID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2xhc3MoJ2NvdXJzZV9fd2hpdGUtYm94X19jb250ZW50LS1yZWFkLW1vcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ1dHRvbiA9ICQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNvdXJzZV9fd2hpdGUtYm94X19yZWFkLW1vcmVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNvdXJzZV9fd2hpdGUtYm94X19yZWFkLW1vcmVfX2JnXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxhICBocmVmPVwiI1wiPjxzcGFuPnJlYWQgbW9yZTwvc3Bhbj48L2E+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZUNsYXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY291cnNlX193aGl0ZS1ib3hfX2NvbnRlbnQtLXJlYWQtbW9yZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGJveCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluaXRLaXNXaWRnZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHdpZGdldCA9ICQoJyN1bmlzdGF0cy13aWRnZXQtZnJhbWUnKTtcblxuICAgICAgICBpZiAod2lkZ2V0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gJCgnLmNvdXJzZV9fa2lzJyksXG4gICAgICAgICAgICAgICAgdXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzcmMgPSB3aWRnZXQuYXR0cignc3JjJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SG9yaXpvbnRhbCA9IHNyYy5pbmRleE9mKCdob3Jpem9udGFsJykgPj0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRlZEhvcml6b250YWwgPSAkKHdpbmRvdykud2lkdGgoKSA+IDYzNTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEhvcml6b250YWwgIT09IG5lZWRlZEhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXh0U3JjID0gbmVlZGVkSG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNyYy5yZXBsYWNlKC92ZXJ0aWNhbC8sICdob3Jpem9udGFsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzcmMucmVwbGFjZSgvaG9yaXpvbnRhbC8sICd2ZXJ0aWNhbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTdHlsZSA9IG5lZWRlZEhvcml6b250YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IHdpZHRoOiAnNjE1cHgnLCBoZWlnaHQ6ICcxNTBweCcgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxOTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzUwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuYXR0cignc3JjJywgbmV4dFNyYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuY3NzKG5leHRTdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnRvZ2dsZUNsYXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb3Vyc2VfX2tpcy0tdmVydGljYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFuZWVkZWRIb3Jpem9udGFsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9uUmVzaXplKHVwZGF0ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5pdEtpc1dpZGdldCgpO1xuICAgICAgICBpbml0QWNjb3JkaW9ucygpO1xuICAgICAgICBpbml0RW50cmllcygpO1xuICAgICAgICBpbml0VGVzdGltb25pYWxzKCk7XG4gICAgICAgIGluaXRDaGFydHMoKTtcbiAgICAgICAgaW5pdFJlYWRNb3JlKCk7XG4gICAgICAgIGluaXRBcHBseURpYWxvZygpO1xuICAgICAgICBpbml0TWVudSgpO1xuICAgICAgICB0ZXN0aW1vbmlhbHNCYWNrZ3JvdW5kQ29sb3IoKTtcbiAgICB9O1xuXG5kZWZlcihpbml0KTtcblxuLy8gQ2hhbmdlIHRlc3RpbW9uaWFsIHdyYXBwZXIgYmFja2dyb3VuZCBjb2xvdXIgd2hlbiB1c2VyIHNjcm9sbHMgdGhyb3VnaCBpdGVtc1xuJCgnLmNvdXJzZV9fdGVzdGltb25pYWxzX193cmFwcGVyJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgdGVzdGltb25pYWxzQmFja2dyb3VuZENvbG9yKCk7XG59KTtcbiIsIi8qKlxuICogZXhwZWN0cyBqUXVlcnkgdG8gYmUgcHJvdmlkZWQgYnkgQ0lUWV9SLmpzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LiQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJCA9IHJlcXVpcmUoJy4uL2xpYnMvanF1ZXJ5Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oZGVmZXJyZWRGdW5jdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIENJVFkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAkKGRlZmVycmVkRnVuY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUyA9IHsgZGVmZXI6IFtdIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlciA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ0lUWV9PUFRJT05TLmRlZmVyLnB1c2goZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSkoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciAkID0gcmVxdWlyZSgnLi4vbGlicy9qcXVlcnknKTtcblxuICAgIHJldHVybiBmdW5jdGlvbihmLCBydW5Ob3cpIHtcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmKTtcbiAgICAgICAgaWYgKHJ1bk5vdykge1xuICAgICAgICAgICAgZigpO1xuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhdGUgPSAnbm90LWxvYWRlZCcsXG4gICAgICAgIGNhbGxiYWNrcyA9IFtdLFxuICAgICAgICBsb2FkQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHN0YXRlID0gJ2xvYWRlZCc7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjaGVja0xvYWRDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGdvb2dsZS52aXN1YWxpemF0aW9uICYmIGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSkge1xuICAgICAgICAgICAgICAgIGxvYWRDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNoZWNrTG9hZENvbXBsZXRlLCAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzdGF0ZSA9ICdsb2FkaW5nJztcblxuICAgICAgICAgICAgZ29vZ2xlLmxvYWQoJ3Zpc3VhbGl6YXRpb24nLCAnMS4wJywge1xuICAgICAgICAgICAgICAgIHBhY2thZ2VzOiBbJ2NvcmVjaGFydCddLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHt9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnb29nbGUuc2V0T25Mb2FkQ2FsbGJhY2soY2hlY2tMb2FkQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkluaXQgPSBmdW5jdGlvbihmKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09ICdsb2FkZWQnKSB7XG4gICAgICAgICAgICAgICAgZigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MucHVzaChmKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09ICdub3QtbG9hZGVkJykge1xuICAgICAgICAgICAgICAgICAgICBsb2FkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb25Jbml0OiBvbkluaXQsXG4gICAgfTtcbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgZXhwYW5kID0gZnVuY3Rpb24oZXhwYW5kZWQsIGxpc3QpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gbGlzdFtpXTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbSAmJiBpdGVtLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmQoZXhwYW5kZWQsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGV4cGFuZGVkID0gW107XG4gICAgICAgICAgICBleHBhbmQoZXhwYW5kZWQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBhbmRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZFtpXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICByZXR1cm4gY29tcG9zZTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9