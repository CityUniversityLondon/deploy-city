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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/mods/video-banner.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


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

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),

/***/ "./node_modules/extend/index.js":
/*!**************************************!*\
  !*** ./node_modules/extend/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


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

/***/ "./src/js/mods/video-banner.js":
/*!*************************************!*\
  !*** ./src/js/mods/video-banner.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1__);





var defer = __webpack_require__(/*! ./utils/defer */ "./src/js/mods/utils/defer.js"),
    loadYoutubeVideo = __webpack_require__(/*! ./video-preview-youtube */ "./src/js/mods/video-preview-youtube.js"),
    getDataAttributes = function getDataAttributes(node) {
  var dataAttrRegex = /^data-(.+)$/;
  var attrs = {};
  $.each(node[0].attributes, function (index, attribute) {
    var match = attribute.name.match(dataAttrRegex);

    if (match) {
      attrs[match[1]] = attribute.value;
    }
  });
  return attrs;
},
    getService = function getService(link) {
  var href = link.attr('href') || '';
  var params = getDataAttributes(link);
  var ytMatch = href.match(/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/);

  if (ytMatch) {
    return {
      type: 'youtube',
      id: ytMatch[1],
      params: params
    };
  }

  return null;
},
    loadVideo = function loadVideo(wrapper, service) {
  switch (service.type) {
    case 'youtube':
      return loadYoutubeVideo(wrapper, service);

    default:
      return false;
  }
},
    init = function init() {
  var link = $('.video-preview__button');

  if (link.length) {
    var service = getService(link);

    if (service) {
      var parent = link.parent();
      var wrapper = null;

      if (parent.hasClass('video-preview')) {
        wrapper = parent;
      } else {
        wrapper = $('<div/>').addClass('video-preview').insertBefore(link);
        wrapper.append(link);
      }

      link.on('click', function (event) {
        event.preventDefault();
        loadVideo(wrapper, service);
      });
    }
  }
};

defer(init);

/***/ }),

/***/ "./src/js/mods/video-preview-youtube.js":
/*!**********************************************!*\
  !*** ./src/js/mods/video-preview-youtube.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(/*! extend */ "./node_modules/extend/index.js"),
    createYoutubePlayer = __webpack_require__(/*! ./youtube-player */ "./src/js/mods/youtube-player.js");

var DEFAULT_PARAMS = {
  frameBorder: '0',
  playerVars: {
    rel: 0
  }
};

function closeDialog() {}

function loadYoutubeVideo(wrapper, services) {
  var id = services.id;
  var params = services.params;
  var iframeId = 'ytev-' + id;
  var link = null;
  var h, w;
  var windowWidth = window.innerWidth;

  if (windowWidth >= 1500) {
    h = 720;
    w = 1280;
  } else if (windowWidth <= 1499 && windowWidth >= 1050) {
    h = 480;
    w = 854;
  } else if (windowWidth <= 1049 && windowWidth >= 800) {
    h = 360;
    w = 640;
  } else if (windowWidth <= 799 && windowWidth >= 580) {
    h = 240;
    w = 426;
  } else {
    h = 160;
    w = 300;
  }

  link = wrapper.children('a');
  var fallbackParams = {
    width: w,
    height: h
  };
  var playerParams = $.extend({}, DEFAULT_PARAMS, fallbackParams, params, {
    videoId: id,
    events: {
      onInit: function onInit() {
        var dlg = $('<div></div>').addClass('dialog').attr('tabindex', '0').appendTo($('body'));
        var buttonwrap = $('<button></button>').attr('type', 'button').appendTo(dlg);
        var box = $('<div></div>').addClass('dialog__box').appendTo(dlg);
        var youtube = $('<div/>').attr('id', iframeId).attr(fallbackParams).appendTo(box);
        dlg.on('click', function (evt) {
          dlg.remove();
          $('html').removeClass('no-scroll');
        });
        dlg.on('keydown', function (evt) {
          if (evt.which === 27) {
            dlg.remove();
            $('html').removeClass('no-scroll');
            evt.preventDefault();
          }
        });
        $('body').append(dlg);
        dlg.focus();
        wrapper.addClass('video-preview--loading');
      },
      onReady: function onReady(event) {
        var player = event.target;
        var iframe = link.siblings('iframe');
        wrapper.removeClass('video-preview--loading');
        wrapper.addClass('media--youtube');
        player.playVideo();
      }
    }
  });
  $('html').addClass('no-scroll');
  createYoutubePlayer(iframeId, playerParams);
}

module.exports = loadYoutubeVideo;

/***/ }),

/***/ "./src/js/mods/youtube-player.js":
/*!***************************************!*\
  !*** ./src/js/mods/youtube-player.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var UNLOADED = 'UNLOADED';
var LOADING = 'LOADING';
var LOADED = 'LOADED';
var apiStatus = UNLOADED;
var pendingPlayers = [];
var players = {};

function createPlayer(id, data) {
  if (apiStatus === LOADED || apiStatus === LOADING) {
    initPlayer(id, data);
  } else {
    pendingPlayers.push({
      id: id,
      data: data
    });

    if (apiStatus === UNLOADED) {
      loadApi();
    }
  }
}

function initPlayer(id, data) {
  if (data && data.events && data.events.onInit) {
    data.events.onInit();
  }

  var player = new YT.Player(id, data);
  players[id] = {
    player: player,
    data: data
  };
}

function loadApi() {
  apiStatus = LOADING;

  window.onYouTubeIframeAPIReady = function () {
    pendingPlayers.forEach(function (pendingPlayers) {
      initPlayer(pendingPlayers.id, pendingPlayers.data);
    });
  };

  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

module.exports = createPlayer;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZpeC1yZS13a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXh0ZW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL2xpYnMvanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL3V0aWxzL2RlZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL3ZpZGVvLWJhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kcy92aWRlby1wcmV2aWV3LXlvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMveW91dHViZS1wbGF5ZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIndpbmRvdyIsIiQiLCJyZXF1aXJlIiwiZGVmZXJyZWRGdW5jdGlvbiIsIkNJVFkiLCJDSVRZX09QVElPTlMiLCJkZWZlciIsInB1c2giLCJsb2FkWW91dHViZVZpZGVvIiwiZ2V0RGF0YUF0dHJpYnV0ZXMiLCJub2RlIiwiZGF0YUF0dHJSZWdleCIsImF0dHJzIiwiZWFjaCIsImF0dHJpYnV0ZXMiLCJpbmRleCIsImF0dHJpYnV0ZSIsIm1hdGNoIiwibmFtZSIsInZhbHVlIiwiZ2V0U2VydmljZSIsImxpbmsiLCJocmVmIiwiYXR0ciIsInBhcmFtcyIsInl0TWF0Y2giLCJ0eXBlIiwiaWQiLCJsb2FkVmlkZW8iLCJ3cmFwcGVyIiwic2VydmljZSIsImluaXQiLCJsZW5ndGgiLCJwYXJlbnQiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXh0ZW5kIiwiY3JlYXRlWW91dHViZVBsYXllciIsIkRFRkFVTFRfUEFSQU1TIiwiZnJhbWVCb3JkZXIiLCJwbGF5ZXJWYXJzIiwicmVsIiwiY2xvc2VEaWFsb2ciLCJzZXJ2aWNlcyIsImlmcmFtZUlkIiwiaCIsInciLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJjaGlsZHJlbiIsImZhbGxiYWNrUGFyYW1zIiwid2lkdGgiLCJoZWlnaHQiLCJwbGF5ZXJQYXJhbXMiLCJ2aWRlb0lkIiwiZXZlbnRzIiwib25Jbml0IiwiZGxnIiwiYXBwZW5kVG8iLCJidXR0b253cmFwIiwiYm94IiwieW91dHViZSIsImV2dCIsInJlbW92ZSIsInJlbW92ZUNsYXNzIiwid2hpY2giLCJmb2N1cyIsIm9uUmVhZHkiLCJwbGF5ZXIiLCJ0YXJnZXQiLCJpZnJhbWUiLCJzaWJsaW5ncyIsInBsYXlWaWRlbyIsIlVOTE9BREVEIiwiTE9BRElORyIsIkxPQURFRCIsImFwaVN0YXR1cyIsInBlbmRpbmdQbGF5ZXJzIiwicGxheWVycyIsImNyZWF0ZVBsYXllciIsImRhdGEiLCJpbml0UGxheWVyIiwibG9hZEFwaSIsIllUIiwiUGxheWVyIiwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkiLCJmb3JFYWNoIiwidGFnIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiZmlyc3RTY3JpcHRUYWciLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxlQUFlLG1CQUFPLENBQUMsa0VBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLDZCQUE2QjtBQUM3Qix1Q0FBdUM7Ozs7Ozs7Ozs7OztBQ0R2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDBEQUFVO0FBQ3BDLGlDQUFpQyxRQUFRLG1CQUFtQixVQUFVLEVBQUUsRUFBRTtBQUMxRSxDQUFDOzs7Ozs7Ozs7Ozs7QUNIRCxlQUFlLG1CQUFPLENBQUMsa0VBQWM7QUFDckMsZUFBZSxtQkFBTyxDQUFDLDREQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLFdBQVcsbUJBQU8sQ0FBQyx3REFBUztBQUM1QixlQUFlLG1CQUFPLENBQUMsZ0VBQWE7QUFDcEMsWUFBWSxtQkFBTyxDQUFDLDBEQUFVO0FBQzlCLGNBQWMsbUJBQU8sQ0FBQyw4REFBWTtBQUNsQyxVQUFVLG1CQUFPLENBQUMsc0RBQVE7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUNBQXFDO0FBQ3JFO0FBQ0E7QUFDQSwyQkFBMkIsZ0NBQWdDO0FBQzNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7Ozs7Ozs7Ozs7OztBQ0x6Qyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQSxTQUFTLG1CQUFPLENBQUMsa0VBQWM7QUFDL0IsaUJBQWlCLG1CQUFPLENBQUMsMEVBQWtCO0FBQzNDLGlCQUFpQixtQkFBTyxDQUFDLHNFQUFnQjtBQUN6QztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBLGtCQUFrQixtQkFBTyxDQUFDLHNFQUFnQixNQUFNLG1CQUFPLENBQUMsMERBQVU7QUFDbEUsK0JBQStCLG1CQUFPLENBQUMsb0VBQWUsZ0JBQWdCLG1CQUFtQixVQUFVLEVBQUUsRUFBRTtBQUN2RyxDQUFDOzs7Ozs7Ozs7Ozs7QUNGRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7Ozs7Ozs7QUNBQSxlQUFlLG1CQUFPLENBQUMsa0VBQWM7QUFDckMscUJBQXFCLG1CQUFPLENBQUMsNEVBQW1CO0FBQ2hELGtCQUFrQixtQkFBTyxDQUFDLHdFQUFpQjtBQUMzQzs7QUFFQSxZQUFZLG1CQUFPLENBQUMsc0VBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFlBQVk7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEEsYUFBYSxtQkFBTyxDQUFDLDREQUFXO0FBQ2hDLFdBQVcsbUJBQU8sQ0FBQyx3REFBUztBQUM1QixVQUFVLG1CQUFPLENBQUMsc0RBQVE7QUFDMUIsVUFBVSxtQkFBTyxDQUFDLHNEQUFRO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQSxtQkFBTyxDQUFDLHdEQUFTO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUM5QkQsV0FBVyxtQkFBTyxDQUFDLHdEQUFTO0FBQzVCLGFBQWEsbUJBQU8sQ0FBQyw0REFBVztBQUNoQztBQUNBLGtEQUFrRDs7QUFFbEQ7QUFDQSxxRUFBcUU7QUFDckUsQ0FBQztBQUNEO0FBQ0EsUUFBUSxtQkFBTyxDQUFDLDhEQUFZO0FBQzVCO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDWEQ7QUFDQSxlQUFlLG1CQUFPLENBQUMsa0VBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLFlBQVksbUJBQU8sQ0FBQyw0REFBVztBQUMvQixVQUFVLG1CQUFPLENBQUMsc0RBQVE7QUFDMUIsYUFBYSxtQkFBTyxDQUFDLDREQUFXO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNWQSxTQUFTLG1CQUFPLENBQUMsa0VBQWM7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsc0VBQWdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQ0EsbUJBQU8sQ0FBQyxvRUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1RZOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sWUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGtEQUFrRDs7QUFFN0U7QUFDQSxNQUFNO0FBQ04sMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBOzs7QUFHQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxNQUFNLENBQUNDLENBQXhCLEM7Ozs7Ozs7Ozs7Ozs7O0FDSEFILE1BQU0sQ0FBQ0MsT0FBUCxHQUFrQixZQUFXO0FBQ3pCOztBQUVBLE1BQUlFLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFmOztBQUVBLFNBQU8sVUFBU0MsZ0JBQVQsRUFBMkI7QUFDOUIsUUFBSSxPQUFPQyxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQzdCSCxPQUFDLENBQUNFLGdCQUFELENBQUQ7QUFDSCxLQUZELE1BRU87QUFDSCxVQUFJLENBQUNILE1BQU0sQ0FBQ0ssWUFBWixFQUEwQjtBQUN0QkwsY0FBTSxDQUFDSyxZQUFQLEdBQXNCO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBQXRCO0FBQ0gsT0FGRCxNQUVPLElBQUksQ0FBQ04sTUFBTSxDQUFDSyxZQUFQLENBQW9CQyxLQUF6QixFQUFnQztBQUNuQ04sY0FBTSxDQUFDSyxZQUFQLENBQW9CQyxLQUFwQixHQUE0QixFQUE1QjtBQUNIOztBQUNERCxrQkFBWSxDQUFDQyxLQUFiLENBQW1CQyxJQUFuQixDQUF3QkosZ0JBQXhCO0FBQ0g7QUFDSixHQVhEO0FBWUgsQ0FqQmdCLEVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFJRyxLQUFLLEdBQUdKLG1CQUFPLENBQUMsbURBQUQsQ0FBbkI7QUFBQSxJQUNJTSxnQkFBZ0IsR0FBR04sbUJBQU8sQ0FBQyx1RUFBRCxDQUQ5QjtBQUFBLElBRUlPLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBU0MsSUFBVCxFQUFlO0FBQy9CLE1BQUlDLGFBQWEsR0FBRyxhQUFwQjtBQUNBLE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0FYLEdBQUMsQ0FBQ1ksSUFBRixDQUFPSCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFJLFVBQWYsRUFBMkIsVUFBU0MsS0FBVCxFQUFnQkMsU0FBaEIsRUFBMkI7QUFDbEQsUUFBSUMsS0FBSyxHQUFHRCxTQUFTLENBQUNFLElBQVYsQ0FBZUQsS0FBZixDQUFxQk4sYUFBckIsQ0FBWjs7QUFDQSxRQUFJTSxLQUFKLEVBQVc7QUFDUEwsV0FBSyxDQUFDSyxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQUwsR0FBa0JELFNBQVMsQ0FBQ0csS0FBNUI7QUFDSDtBQUNKLEdBTEQ7QUFPQSxTQUFPUCxLQUFQO0FBQ0gsQ0FiTDtBQUFBLElBY0lRLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVNDLElBQVQsRUFBZTtBQUN4QixNQUFJQyxJQUFJLEdBQUdELElBQUksQ0FBQ0UsSUFBTCxDQUFVLE1BQVYsS0FBcUIsRUFBaEM7QUFDQSxNQUFJQyxNQUFNLEdBQUdmLGlCQUFpQixDQUFDWSxJQUFELENBQTlCO0FBRUEsTUFBSUksT0FBTyxHQUFHSCxJQUFJLENBQUNMLEtBQUwsQ0FDVixpR0FEVSxDQUFkOztBQUdBLE1BQUlRLE9BQUosRUFBYTtBQUNULFdBQU87QUFBRUMsVUFBSSxFQUFFLFNBQVI7QUFBbUJDLFFBQUUsRUFBRUYsT0FBTyxDQUFDLENBQUQsQ0FBOUI7QUFBbUNELFlBQU0sRUFBRUE7QUFBM0MsS0FBUDtBQUNIOztBQUVELFNBQU8sSUFBUDtBQUNILENBMUJMO0FBQUEsSUEyQklJLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQ25DLFVBQVFBLE9BQU8sQ0FBQ0osSUFBaEI7QUFDSSxTQUFLLFNBQUw7QUFDSSxhQUFPbEIsZ0JBQWdCLENBQUNxQixPQUFELEVBQVVDLE9BQVYsQ0FBdkI7O0FBQ0o7QUFDSSxhQUFPLEtBQVA7QUFKUjtBQU1ILENBbENMO0FBQUEsSUFtQ0lDLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQVc7QUFDZCxNQUFJVixJQUFJLEdBQUdwQixDQUFDLENBQUMsd0JBQUQsQ0FBWjs7QUFFQSxNQUFJb0IsSUFBSSxDQUFDVyxNQUFULEVBQWlCO0FBQ2IsUUFBSUYsT0FBTyxHQUFHVixVQUFVLENBQUNDLElBQUQsQ0FBeEI7O0FBRUEsUUFBSVMsT0FBSixFQUFhO0FBQ1QsVUFBSUcsTUFBTSxHQUFHWixJQUFJLENBQUNZLE1BQUwsRUFBYjtBQUNBLFVBQUlKLE9BQU8sR0FBRyxJQUFkOztBQUVBLFVBQUlJLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQixlQUFoQixDQUFKLEVBQXNDO0FBQ2xDTCxlQUFPLEdBQUdJLE1BQVY7QUFDSCxPQUZELE1BRU87QUFDSEosZUFBTyxHQUFHNUIsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUNMa0MsUUFESyxDQUNJLGVBREosRUFFTEMsWUFGSyxDQUVRZixJQUZSLENBQVY7QUFHQVEsZUFBTyxDQUFDUSxNQUFSLENBQWVoQixJQUFmO0FBQ0g7O0FBRURBLFVBQUksQ0FBQ2lCLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDN0JBLGFBQUssQ0FBQ0MsY0FBTjtBQUNBWixpQkFBUyxDQUFDQyxPQUFELEVBQVVDLE9BQVYsQ0FBVDtBQUNILE9BSEQ7QUFJSDtBQUNKO0FBQ0osQ0E1REw7O0FBNkRBeEIsS0FBSyxDQUFDeUIsSUFBRCxDQUFMLEM7Ozs7Ozs7Ozs7Ozs7O0FDN0RBLElBQUlVLE1BQU0sR0FBR3ZDLG1CQUFPLENBQUMsOENBQUQsQ0FBcEI7QUFBQSxJQUNJd0MsbUJBQW1CLEdBQUd4QyxtQkFBTyxDQUFDLHlEQUFELENBRGpDOztBQUdBLElBQUl5QyxjQUFjLEdBQUc7QUFDakJDLGFBQVcsRUFBRSxHQURJO0FBRWpCQyxZQUFVLEVBQUU7QUFDUkMsT0FBRyxFQUFFO0FBREc7QUFGSyxDQUFyQjs7QUFPQSxTQUFTQyxXQUFULEdBQXVCLENBQUU7O0FBRXpCLFNBQVN2QyxnQkFBVCxDQUEwQnFCLE9BQTFCLEVBQW1DbUIsUUFBbkMsRUFBNkM7QUFDekMsTUFBSXJCLEVBQUUsR0FBR3FCLFFBQVEsQ0FBQ3JCLEVBQWxCO0FBQ0EsTUFBSUgsTUFBTSxHQUFHd0IsUUFBUSxDQUFDeEIsTUFBdEI7QUFDQSxNQUFJeUIsUUFBUSxHQUFHLFVBQVV0QixFQUF6QjtBQUNBLE1BQUlOLElBQUksR0FBRyxJQUFYO0FBQ0EsTUFBSTZCLENBQUosRUFBT0MsQ0FBUDtBQUNBLE1BQUlDLFdBQVcsR0FBR3BELE1BQU0sQ0FBQ3FELFVBQXpCOztBQUVBLE1BQUlELFdBQVcsSUFBSSxJQUFuQixFQUF5QjtBQUNyQkYsS0FBQyxHQUFHLEdBQUo7QUFDQUMsS0FBQyxHQUFHLElBQUo7QUFDSCxHQUhELE1BR08sSUFBSUMsV0FBVyxJQUFJLElBQWYsSUFBdUJBLFdBQVcsSUFBSSxJQUExQyxFQUFnRDtBQUNuREYsS0FBQyxHQUFHLEdBQUo7QUFDQUMsS0FBQyxHQUFHLEdBQUo7QUFDSCxHQUhNLE1BR0EsSUFBSUMsV0FBVyxJQUFJLElBQWYsSUFBdUJBLFdBQVcsSUFBSSxHQUExQyxFQUErQztBQUNsREYsS0FBQyxHQUFHLEdBQUo7QUFDQUMsS0FBQyxHQUFHLEdBQUo7QUFDSCxHQUhNLE1BR0EsSUFBSUMsV0FBVyxJQUFJLEdBQWYsSUFBc0JBLFdBQVcsSUFBSSxHQUF6QyxFQUE4QztBQUNqREYsS0FBQyxHQUFHLEdBQUo7QUFDQUMsS0FBQyxHQUFHLEdBQUo7QUFDSCxHQUhNLE1BR0E7QUFDSEQsS0FBQyxHQUFHLEdBQUo7QUFDQUMsS0FBQyxHQUFHLEdBQUo7QUFDSDs7QUFFRDlCLE1BQUksR0FBR1EsT0FBTyxDQUFDeUIsUUFBUixDQUFpQixHQUFqQixDQUFQO0FBQ0EsTUFBSUMsY0FBYyxHQUFHO0FBQ2pCQyxTQUFLLEVBQUVMLENBRFU7QUFFakJNLFVBQU0sRUFBRVA7QUFGUyxHQUFyQjtBQUtBLE1BQUlRLFlBQVksR0FBR3pELENBQUMsQ0FBQ3dDLE1BQUYsQ0FBUyxFQUFULEVBQWFFLGNBQWIsRUFBNkJZLGNBQTdCLEVBQTZDL0IsTUFBN0MsRUFBcUQ7QUFDcEVtQyxXQUFPLEVBQUVoQyxFQUQyRDtBQUVwRWlDLFVBQU0sRUFBRTtBQUNKQyxZQUFNLEVBQUUsa0JBQVc7QUFDZixZQUFJQyxHQUFHLEdBQUc3RCxDQUFDLENBQUMsYUFBRCxDQUFELENBQ0xrQyxRQURLLENBQ0ksUUFESixFQUVMWixJQUZLLENBRUEsVUFGQSxFQUVZLEdBRlosRUFHTHdDLFFBSEssQ0FHSTlELENBQUMsQ0FBQyxNQUFELENBSEwsQ0FBVjtBQUtBLFlBQUkrRCxVQUFVLEdBQUcvRCxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUNac0IsSUFEWSxDQUNQLE1BRE8sRUFDQyxRQURELEVBRVp3QyxRQUZZLENBRUhELEdBRkcsQ0FBakI7QUFJQSxZQUFJRyxHQUFHLEdBQUdoRSxDQUFDLENBQUMsYUFBRCxDQUFELENBQ0xrQyxRQURLLENBQ0ksYUFESixFQUVMNEIsUUFGSyxDQUVJRCxHQUZKLENBQVY7QUFJQSxZQUFJSSxPQUFPLEdBQUdqRSxDQUFDLENBQUMsUUFBRCxDQUFELENBQ1RzQixJQURTLENBQ0osSUFESSxFQUNFMEIsUUFERixFQUVUMUIsSUFGUyxDQUVKZ0MsY0FGSSxFQUdUUSxRQUhTLENBR0FFLEdBSEEsQ0FBZDtBQUtBSCxXQUFHLENBQUN4QixFQUFKLENBQU8sT0FBUCxFQUFnQixVQUFTNkIsR0FBVCxFQUFjO0FBQzFCTCxhQUFHLENBQUNNLE1BQUo7QUFDQW5FLFdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVW9FLFdBQVYsQ0FBc0IsV0FBdEI7QUFDSCxTQUhEO0FBS0FQLFdBQUcsQ0FBQ3hCLEVBQUosQ0FBTyxTQUFQLEVBQWtCLFVBQVM2QixHQUFULEVBQWM7QUFDNUIsY0FBSUEsR0FBRyxDQUFDRyxLQUFKLEtBQWMsRUFBbEIsRUFBc0I7QUFDbEJSLGVBQUcsQ0FBQ00sTUFBSjtBQUNBbkUsYUFBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVb0UsV0FBVixDQUFzQixXQUF0QjtBQUNBRixlQUFHLENBQUMzQixjQUFKO0FBQ0g7QUFDSixTQU5EO0FBUUF2QyxTQUFDLENBQUMsTUFBRCxDQUFELENBQVVvQyxNQUFWLENBQWlCeUIsR0FBakI7QUFDQUEsV0FBRyxDQUFDUyxLQUFKO0FBQ0ExQyxlQUFPLENBQUNNLFFBQVIsQ0FBaUIsd0JBQWpCO0FBQ0gsT0FwQ0c7QUFxQ0pxQyxhQUFPLEVBQUUsaUJBQVNqQyxLQUFULEVBQWdCO0FBQ3JCLFlBQUlrQyxNQUFNLEdBQUdsQyxLQUFLLENBQUNtQyxNQUFuQjtBQUNBLFlBQUlDLE1BQU0sR0FBR3RELElBQUksQ0FBQ3VELFFBQUwsQ0FBYyxRQUFkLENBQWI7QUFFQS9DLGVBQU8sQ0FBQ3dDLFdBQVIsQ0FBb0Isd0JBQXBCO0FBQ0F4QyxlQUFPLENBQUNNLFFBQVIsQ0FBaUIsZ0JBQWpCO0FBQ0FzQyxjQUFNLENBQUNJLFNBQVA7QUFDSDtBQTVDRztBQUY0RCxHQUFyRCxDQUFuQjtBQWtEQTVFLEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWtDLFFBQVYsQ0FBbUIsV0FBbkI7QUFDQU8scUJBQW1CLENBQUNPLFFBQUQsRUFBV1MsWUFBWCxDQUFuQjtBQUNIOztBQUVENUQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUyxnQkFBakIsQzs7Ozs7Ozs7Ozs7Ozs7QUNqR0EsSUFBSXNFLFFBQVEsR0FBRyxVQUFmO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLFNBQWQ7QUFDQSxJQUFJQyxNQUFNLEdBQUcsUUFBYjtBQUVBLElBQUlDLFNBQVMsR0FBR0gsUUFBaEI7QUFFQSxJQUFJSSxjQUFjLEdBQUcsRUFBckI7QUFFQSxJQUFJQyxPQUFPLEdBQUcsRUFBZDs7QUFFQSxTQUFTQyxZQUFULENBQXNCekQsRUFBdEIsRUFBMEIwRCxJQUExQixFQUFnQztBQUM1QixNQUFJSixTQUFTLEtBQUtELE1BQWQsSUFBd0JDLFNBQVMsS0FBS0YsT0FBMUMsRUFBbUQ7QUFDL0NPLGNBQVUsQ0FBQzNELEVBQUQsRUFBSzBELElBQUwsQ0FBVjtBQUNILEdBRkQsTUFFTztBQUNISCxrQkFBYyxDQUFDM0UsSUFBZixDQUFvQjtBQUFFb0IsUUFBRSxFQUFFQSxFQUFOO0FBQVUwRCxVQUFJLEVBQUVBO0FBQWhCLEtBQXBCOztBQUNBLFFBQUlKLFNBQVMsS0FBS0gsUUFBbEIsRUFBNEI7QUFDeEJTLGFBQU87QUFDVjtBQUNKO0FBQ0o7O0FBRUQsU0FBU0QsVUFBVCxDQUFvQjNELEVBQXBCLEVBQXdCMEQsSUFBeEIsRUFBOEI7QUFDMUIsTUFBSUEsSUFBSSxJQUFJQSxJQUFJLENBQUN6QixNQUFiLElBQXVCeUIsSUFBSSxDQUFDekIsTUFBTCxDQUFZQyxNQUF2QyxFQUErQztBQUMzQ3dCLFFBQUksQ0FBQ3pCLE1BQUwsQ0FBWUMsTUFBWjtBQUNIOztBQUVELE1BQUlZLE1BQU0sR0FBRyxJQUFJZSxFQUFFLENBQUNDLE1BQVAsQ0FBYzlELEVBQWQsRUFBa0IwRCxJQUFsQixDQUFiO0FBQ0FGLFNBQU8sQ0FBQ3hELEVBQUQsQ0FBUCxHQUFjO0FBQUU4QyxVQUFNLEVBQUVBLE1BQVY7QUFBa0JZLFFBQUksRUFBRUE7QUFBeEIsR0FBZDtBQUNIOztBQUVELFNBQVNFLE9BQVQsR0FBbUI7QUFDZk4sV0FBUyxHQUFHRixPQUFaOztBQUNBL0UsUUFBTSxDQUFDMEYsdUJBQVAsR0FBaUMsWUFBVztBQUN4Q1Isa0JBQWMsQ0FBQ1MsT0FBZixDQUF1QixVQUFTVCxjQUFULEVBQXlCO0FBQzVDSSxnQkFBVSxDQUFDSixjQUFjLENBQUN2RCxFQUFoQixFQUFvQnVELGNBQWMsQ0FBQ0csSUFBbkMsQ0FBVjtBQUNILEtBRkQ7QUFHSCxHQUpEOztBQU1BLE1BQUlPLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQVY7QUFDQUYsS0FBRyxDQUFDRyxHQUFKLEdBQVUsb0NBQVY7QUFDQSxNQUFJQyxjQUFjLEdBQUdILFFBQVEsQ0FBQ0ksb0JBQVQsQ0FBOEIsUUFBOUIsRUFBd0MsQ0FBeEMsQ0FBckI7QUFDQUQsZ0JBQWMsQ0FBQ0UsVUFBZixDQUEwQjlELFlBQTFCLENBQXVDd0QsR0FBdkMsRUFBNENJLGNBQTVDO0FBQ0g7O0FBRURsRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJxRixZQUFqQixDIiwiZmlsZSI6Im1vZHVsZXMvdmlkZW8tYmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvbW9kcy92aWRlby1iYW5uZXIuanNcIik7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjcnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gIHZhciBTWU1CT0wgPSB3a3MoS0VZKTtcbiAgdmFyIGZucyA9IGV4ZWMoZGVmaW5lZCwgU1lNQk9MLCAnJ1tLRVldKTtcbiAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICB2YXIgcnhmbiA9IGZuc1sxXTtcbiAgaWYgKGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSkpIHtcbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmZuKTtcbiAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxufTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBGUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoJycgKyB0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiLy8gQEBtYXRjaCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdtYXRjaCcsIDEsIGZ1bmN0aW9uIChkZWZpbmVkLCBNQVRDSCwgJG1hdGNoKSB7XG4gIC8vIDIxLjEuMy4xMSBTdHJpbmcucHJvdG90eXBlLm1hdGNoKHJlZ2V4cClcbiAgcmV0dXJuIFtmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgIHZhciBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICB9LCAkbWF0Y2hdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuXHRpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpO1xuXHR9XG5cblx0cmV0dXJuIHRvU3RyLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcblx0aWYgKCFvYmogfHwgdG9TdHIuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBoYXNPd25Db25zdHJ1Y3RvciA9IGhhc093bi5jYWxsKG9iaiwgJ2NvbnN0cnVjdG9yJyk7XG5cdHZhciBoYXNJc1Byb3RvdHlwZU9mID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgJiYgaGFzT3duLmNhbGwob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcblx0Ly8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuXHRpZiAob2JqLmNvbnN0cnVjdG9yICYmICFoYXNPd25Db25zdHJ1Y3RvciAmJiAhaGFzSXNQcm90b3R5cGVPZikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE93biBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhdGVkIGZpcnN0bHksIHNvIHRvIHNwZWVkIHVwLFxuXHQvLyBpZiBsYXN0IG9uZSBpcyBvd24sIHRoZW4gYWxsIHByb3BlcnRpZXMgYXJlIG93bi5cblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gb2JqKSB7IC8qKi8gfVxuXG5cdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG59O1xuXG4vLyBJZiBuYW1lIGlzICdfX3Byb3RvX18nLCBhbmQgT2JqZWN0LmRlZmluZVByb3BlcnR5IGlzIGF2YWlsYWJsZSwgZGVmaW5lIF9fcHJvdG9fXyBhcyBhbiBvd24gcHJvcGVydHkgb24gdGFyZ2V0XG52YXIgc2V0UHJvcGVydHkgPSBmdW5jdGlvbiBzZXRQcm9wZXJ0eSh0YXJnZXQsIG9wdGlvbnMpIHtcblx0aWYgKGRlZmluZVByb3BlcnR5ICYmIG9wdGlvbnMubmFtZSA9PT0gJ19fcHJvdG9fXycpIHtcblx0XHRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG9wdGlvbnMubmFtZSwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdHZhbHVlOiBvcHRpb25zLm5ld1ZhbHVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR0YXJnZXRbb3B0aW9ucy5uYW1lXSA9IG9wdGlvbnMubmV3VmFsdWU7XG5cdH1cbn07XG5cbi8vIFJldHVybiB1bmRlZmluZWQgaW5zdGVhZCBvZiBfX3Byb3RvX18gaWYgJ19fcHJvdG9fXycgaXMgbm90IGFuIG93biBwcm9wZXJ0eVxudmFyIGdldFByb3BlcnR5ID0gZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBuYW1lKSB7XG5cdGlmIChuYW1lID09PSAnX19wcm90b19fJykge1xuXHRcdGlmICghaGFzT3duLmNhbGwob2JqLCBuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHZvaWQgMDtcblx0XHR9IGVsc2UgaWYgKGdPUEQpIHtcblx0XHRcdC8vIEluIGVhcmx5IHZlcnNpb25zIG9mIG5vZGUsIG9ialsnX19wcm90b19fJ10gaXMgYnVnZ3kgd2hlbiBvYmogaGFzXG5cdFx0XHQvLyBfX3Byb3RvX18gYXMgYW4gb3duIHByb3BlcnR5LiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCkgd29ya3MuXG5cdFx0XHRyZXR1cm4gZ09QRChvYmosIG5hbWUpLnZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvYmpbbmFtZV07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lO1xuXHR2YXIgdGFyZ2V0ID0gYXJndW1lbnRzWzBdO1xuXHR2YXIgaSA9IDE7XG5cdHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHR2YXIgZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKHR5cGVvZiB0YXJnZXQgPT09ICdib29sZWFuJykge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuXHRcdC8vIHNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHRpID0gMjtcblx0fVxuXHRpZiAodGFyZ2V0ID09IG51bGwgfHwgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHRmb3IgKDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0c3JjID0gZ2V0UHJvcGVydHkodGFyZ2V0LCBuYW1lKTtcblx0XHRcdFx0Y29weSA9IGdldFByb3BlcnR5KG9wdGlvbnMsIG5hbWUpO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3Bcblx0XHRcdFx0aWYgKHRhcmdldCAhPT0gY29weSkge1xuXHRcdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRcdGlmIChkZWVwICYmIGNvcHkgJiYgKGlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gaXNBcnJheShjb3B5KSkpKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29weUlzQXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNBcnJheShzcmMpID8gc3JjIDogW107XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc1BsYWluT2JqZWN0KHNyYykgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0XHRzZXRQcm9wZXJ0eSh0YXJnZXQsIHsgbmFtZTogbmFtZSwgbmV3VmFsdWU6IGV4dGVuZChkZWVwLCBjbG9uZSwgY29weSkgfSk7XG5cblx0XHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY29weSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHNldFByb3BlcnR5KHRhcmdldCwgeyBuYW1lOiBuYW1lLCBuZXdWYWx1ZTogY29weSB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcbiIsIi8qKlxuICogZXhwZWN0cyBqUXVlcnkgdG8gYmUgcHJvdmlkZWQgYnkgQ0lUWV9SLmpzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LiQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJCA9IHJlcXVpcmUoJy4uL2xpYnMvanF1ZXJ5Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oZGVmZXJyZWRGdW5jdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIENJVFkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAkKGRlZmVycmVkRnVuY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUyA9IHsgZGVmZXI6IFtdIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlciA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ0lUWV9PUFRJT05TLmRlZmVyLnB1c2goZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSkoKTtcbiIsInZhciBkZWZlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmZXInKSxcbiAgICBsb2FkWW91dHViZVZpZGVvID0gcmVxdWlyZSgnLi92aWRlby1wcmV2aWV3LXlvdXR1YmUnKSxcbiAgICBnZXREYXRhQXR0cmlidXRlcyA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdmFyIGRhdGFBdHRyUmVnZXggPSAvXmRhdGEtKC4rKSQvO1xuICAgICAgICB2YXIgYXR0cnMgPSB7fTtcbiAgICAgICAgJC5lYWNoKG5vZGVbMF0uYXR0cmlidXRlcywgZnVuY3Rpb24oaW5kZXgsIGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgdmFyIG1hdGNoID0gYXR0cmlidXRlLm5hbWUubWF0Y2goZGF0YUF0dHJSZWdleCk7XG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBhdHRyc1ttYXRjaFsxXV0gPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhdHRycztcbiAgICB9LFxuICAgIGdldFNlcnZpY2UgPSBmdW5jdGlvbihsaW5rKSB7XG4gICAgICAgIHZhciBocmVmID0gbGluay5hdHRyKCdocmVmJykgfHwgJyc7XG4gICAgICAgIHZhciBwYXJhbXMgPSBnZXREYXRhQXR0cmlidXRlcyhsaW5rKTtcblxuICAgICAgICB2YXIgeXRNYXRjaCA9IGhyZWYubWF0Y2goXG4gICAgICAgICAgICAvKD86aHR0cHM/OlxcL1xcLyk/KD86d3d3XFwuKT95b3V0dVxcLj9iZSg/OlxcLmNvbSk/XFwvPy4qKD86d2F0Y2h8ZW1iZWQpPyg/Oi4qdj18dlxcL3xcXC8pKFtcXHdcXC1fXSspXFwmPy9cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHl0TWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICd5b3V0dWJlJywgaWQ6IHl0TWF0Y2hbMV0sIHBhcmFtczogcGFyYW1zIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIGxvYWRWaWRlbyA9IGZ1bmN0aW9uKHdyYXBwZXIsIHNlcnZpY2UpIHtcbiAgICAgICAgc3dpdGNoIChzZXJ2aWNlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3lvdXR1YmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkWW91dHViZVZpZGVvKHdyYXBwZXIsIHNlcnZpY2UpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxpbmsgPSAkKCcudmlkZW8tcHJldmlld19fYnV0dG9uJyk7XG5cbiAgICAgICAgaWYgKGxpbmsubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgc2VydmljZSA9IGdldFNlcnZpY2UobGluayk7XG5cbiAgICAgICAgICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGxpbmsucGFyZW50KCk7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5oYXNDbGFzcygndmlkZW8tcHJldmlldycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlciA9ICQoJzxkaXYvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3ZpZGVvLXByZXZpZXcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluc2VydEJlZm9yZShsaW5rKTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmQobGluayk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGluay5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBsb2FkVmlkZW8od3JhcHBlciwgc2VydmljZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuZGVmZXIoaW5pdCk7XG4iLCJ2YXIgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJyksXG4gICAgY3JlYXRlWW91dHViZVBsYXllciA9IHJlcXVpcmUoJy4veW91dHViZS1wbGF5ZXInKTtcblxudmFyIERFRkFVTFRfUEFSQU1TID0ge1xuICAgIGZyYW1lQm9yZGVyOiAnMCcsXG4gICAgcGxheWVyVmFyczoge1xuICAgICAgICByZWw6IDAsXG4gICAgfSxcbn07XG5cbmZ1bmN0aW9uIGNsb3NlRGlhbG9nKCkge31cblxuZnVuY3Rpb24gbG9hZFlvdXR1YmVWaWRlbyh3cmFwcGVyLCBzZXJ2aWNlcykge1xuICAgIHZhciBpZCA9IHNlcnZpY2VzLmlkO1xuICAgIHZhciBwYXJhbXMgPSBzZXJ2aWNlcy5wYXJhbXM7XG4gICAgdmFyIGlmcmFtZUlkID0gJ3l0ZXYtJyArIGlkO1xuICAgIHZhciBsaW5rID0gbnVsbDtcbiAgICB2YXIgaCwgdztcbiAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIGlmICh3aW5kb3dXaWR0aCA+PSAxNTAwKSB7XG4gICAgICAgIGggPSA3MjA7XG4gICAgICAgIHcgPSAxMjgwO1xuICAgIH0gZWxzZSBpZiAod2luZG93V2lkdGggPD0gMTQ5OSAmJiB3aW5kb3dXaWR0aCA+PSAxMDUwKSB7XG4gICAgICAgIGggPSA0ODA7XG4gICAgICAgIHcgPSA4NTQ7XG4gICAgfSBlbHNlIGlmICh3aW5kb3dXaWR0aCA8PSAxMDQ5ICYmIHdpbmRvd1dpZHRoID49IDgwMCkge1xuICAgICAgICBoID0gMzYwO1xuICAgICAgICB3ID0gNjQwO1xuICAgIH0gZWxzZSBpZiAod2luZG93V2lkdGggPD0gNzk5ICYmIHdpbmRvd1dpZHRoID49IDU4MCkge1xuICAgICAgICBoID0gMjQwO1xuICAgICAgICB3ID0gNDI2O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGggPSAxNjA7XG4gICAgICAgIHcgPSAzMDA7XG4gICAgfVxuXG4gICAgbGluayA9IHdyYXBwZXIuY2hpbGRyZW4oJ2EnKTtcbiAgICB2YXIgZmFsbGJhY2tQYXJhbXMgPSB7XG4gICAgICAgIHdpZHRoOiB3LFxuICAgICAgICBoZWlnaHQ6IGgsXG4gICAgfTtcblxuICAgIHZhciBwbGF5ZXJQYXJhbXMgPSAkLmV4dGVuZCh7fSwgREVGQVVMVF9QQVJBTVMsIGZhbGxiYWNrUGFyYW1zLCBwYXJhbXMsIHtcbiAgICAgICAgdmlkZW9JZDogaWQsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgb25Jbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGxnID0gJCgnPGRpdj48L2Rpdj4nKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2RpYWxvZycpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0YWJpbmRleCcsICcwJylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKCQoJ2JvZHknKSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYnV0dG9ud3JhcCA9ICQoJzxidXR0b24+PC9idXR0b24+JylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGRsZyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYm94ID0gJCgnPGRpdj48L2Rpdj4nKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2RpYWxvZ19fYm94JylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGRsZyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgeW91dHViZSA9ICQoJzxkaXYvPicpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdpZCcsIGlmcmFtZUlkKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihmYWxsYmFja1BhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGJveCk7XG5cbiAgICAgICAgICAgICAgICBkbGcub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRsZy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGRsZy5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LndoaWNoID09PSAyNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGxnLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKGRsZyk7XG4gICAgICAgICAgICAgICAgZGxnLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5hZGRDbGFzcygndmlkZW8tcHJldmlldy0tbG9hZGluZycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUmVhZHk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBsYXllciA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgaWZyYW1lID0gbGluay5zaWJsaW5ncygnaWZyYW1lJyk7XG5cbiAgICAgICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNsYXNzKCd2aWRlby1wcmV2aWV3LS1sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5hZGRDbGFzcygnbWVkaWEtLXlvdXR1YmUnKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgJCgnaHRtbCcpLmFkZENsYXNzKCduby1zY3JvbGwnKTtcbiAgICBjcmVhdGVZb3V0dWJlUGxheWVyKGlmcmFtZUlkLCBwbGF5ZXJQYXJhbXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWRZb3V0dWJlVmlkZW87XG4iLCJ2YXIgVU5MT0FERUQgPSAnVU5MT0FERUQnO1xudmFyIExPQURJTkcgPSAnTE9BRElORyc7XG52YXIgTE9BREVEID0gJ0xPQURFRCc7XG5cbnZhciBhcGlTdGF0dXMgPSBVTkxPQURFRDtcblxudmFyIHBlbmRpbmdQbGF5ZXJzID0gW107XG5cbnZhciBwbGF5ZXJzID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllcihpZCwgZGF0YSkge1xuICAgIGlmIChhcGlTdGF0dXMgPT09IExPQURFRCB8fCBhcGlTdGF0dXMgPT09IExPQURJTkcpIHtcbiAgICAgICAgaW5pdFBsYXllcihpZCwgZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGVuZGluZ1BsYXllcnMucHVzaCh7IGlkOiBpZCwgZGF0YTogZGF0YSB9KTtcbiAgICAgICAgaWYgKGFwaVN0YXR1cyA9PT0gVU5MT0FERUQpIHtcbiAgICAgICAgICAgIGxvYWRBcGkoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5pdFBsYXllcihpZCwgZGF0YSkge1xuICAgIGlmIChkYXRhICYmIGRhdGEuZXZlbnRzICYmIGRhdGEuZXZlbnRzLm9uSW5pdCkge1xuICAgICAgICBkYXRhLmV2ZW50cy5vbkluaXQoKTtcbiAgICB9XG5cbiAgICB2YXIgcGxheWVyID0gbmV3IFlULlBsYXllcihpZCwgZGF0YSk7XG4gICAgcGxheWVyc1tpZF0gPSB7IHBsYXllcjogcGxheWVyLCBkYXRhOiBkYXRhIH07XG59XG5cbmZ1bmN0aW9uIGxvYWRBcGkoKSB7XG4gICAgYXBpU3RhdHVzID0gTE9BRElORztcbiAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcGVuZGluZ1BsYXllcnMuZm9yRWFjaChmdW5jdGlvbihwZW5kaW5nUGxheWVycykge1xuICAgICAgICAgICAgaW5pdFBsYXllcihwZW5kaW5nUGxheWVycy5pZCwgcGVuZGluZ1BsYXllcnMuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgdGFnLnNyYyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJztcbiAgICB2YXIgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgZmlyc3RTY3JpcHRUYWcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFnLCBmaXJzdFNjcmlwdFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUGxheWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==