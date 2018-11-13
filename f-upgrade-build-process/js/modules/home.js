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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/mods/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/mods/home.js":
/*!*****************************!*\
  !*** ./src/js/mods/home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ./libs/jquery */ "./src/js/mods/libs/jquery.js"),
    defer = __webpack_require__(/*! ./utils/defer */ "./src/js/mods/utils/defer.js"),
    screenWidth = -1,
    inMd = true,
    slider = null,
    $w = $(window),
    updateNewsSlider = function updateNewsSlider() {
  var $homeNews = $('.home-news'),
      width = Math.round($w.width());

  if (width !== screenWidth) {
    screenWidth = width;
    var newInMd = screenWidth >= 850;

    if (newInMd !== inMd) {
      inMd = newInMd;

      if (inMd) {
        slider.destroySlider();
        setTimeout(function () {
          $homeNews.addClass('row').attr('style', '').children().addClass('col-xs-24 col-md-8').css('width', '');
        }, 0);
        slider = null;
      } else {
        slider = $homeNews.removeClass('row').children().removeClass('col-xs-24 col-md-8').end().bxSlider({
          autoHover: true,
          touchEnabled: true,
          preventDefaultSwipeX: true,
          preventDefaultSwipeY: false,
          adaptiveHeight: true,
          pager: false,
          autoControls: false,
          controls: true,
          prevText: '<span class="bg fa fa-circle" aria-hidden="true"></span><span class="ic fa fa-chevron-left" aria-label="previous slide"></span>',
          nextText: '<span class="bg fa fa-circle" aria-hidden="true"></span><span class="ic fa fa-chevron-right" aria-label="next slide"></span>'
        });
      }
    }
  }
},
    init = function init() {
  $('.home-course-finder .dropdown-select').cityDropdown();
  $('.home-news-events .submenu .dropdown-select').cityDropdown({
    isMenu: true
  });
  $('.home-media-ribbon .embed-container').videoPreview({
    controls: 1,
    showInfo: 0
  });
  $w.resize(updateNewsSlider);
  updateNewsSlider();
}; // end variables


defer(init);

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kcy9saWJzL2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kcy91dGlscy9kZWZlci5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImRlZmVyIiwic2NyZWVuV2lkdGgiLCJpbk1kIiwic2xpZGVyIiwiJHciLCJ3aW5kb3ciLCJ1cGRhdGVOZXdzU2xpZGVyIiwiJGhvbWVOZXdzIiwid2lkdGgiLCJNYXRoIiwicm91bmQiLCJuZXdJbk1kIiwiZGVzdHJveVNsaWRlciIsInNldFRpbWVvdXQiLCJhZGRDbGFzcyIsImF0dHIiLCJjaGlsZHJlbiIsImNzcyIsInJlbW92ZUNsYXNzIiwiZW5kIiwiYnhTbGlkZXIiLCJhdXRvSG92ZXIiLCJ0b3VjaEVuYWJsZWQiLCJwcmV2ZW50RGVmYXVsdFN3aXBlWCIsInByZXZlbnREZWZhdWx0U3dpcGVZIiwiYWRhcHRpdmVIZWlnaHQiLCJwYWdlciIsImF1dG9Db250cm9scyIsImNvbnRyb2xzIiwicHJldlRleHQiLCJuZXh0VGV4dCIsImluaXQiLCJjaXR5RHJvcGRvd24iLCJpc01lbnUiLCJ2aWRlb1ByZXZpZXciLCJzaG93SW5mbyIsInJlc2l6ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZlcnJlZEZ1bmN0aW9uIiwiQ0lUWSIsIkNJVFlfT1BUSU9OUyIsInB1c2giXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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Qzs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7OztBQUdBTSxNQUFNLENBQUNDLE9BQVAsR0FBaUJqQyxNQUFNLENBQUNQLENBQXhCLEM7Ozs7Ozs7Ozs7Ozs7O0FDSEF1QyxNQUFNLENBQUNDLE9BQVAsR0FBa0IsWUFBVztBQUN6Qjs7QUFFQSxNQUFJeEMsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWY7O0FBRUEsU0FBTyxVQUFTd0MsZ0JBQVQsRUFBMkI7QUFDOUIsUUFBSSxPQUFPQyxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQzdCMUMsT0FBQyxDQUFDeUMsZ0JBQUQsQ0FBRDtBQUNILEtBRkQsTUFFTztBQUNILFVBQUksQ0FBQ2xDLE1BQU0sQ0FBQ29DLFlBQVosRUFBMEI7QUFDdEJwQyxjQUFNLENBQUNvQyxZQUFQLEdBQXNCO0FBQUV6QyxlQUFLLEVBQUU7QUFBVCxTQUF0QjtBQUNILE9BRkQsTUFFTyxJQUFJLENBQUNLLE1BQU0sQ0FBQ29DLFlBQVAsQ0FBb0J6QyxLQUF6QixFQUFnQztBQUNuQ0ssY0FBTSxDQUFDb0MsWUFBUCxDQUFvQnpDLEtBQXBCLEdBQTRCLEVBQTVCO0FBQ0g7O0FBQ0R5QyxrQkFBWSxDQUFDekMsS0FBYixDQUFtQjBDLElBQW5CLENBQXdCSCxnQkFBeEI7QUFDSDtBQUNKLEdBWEQ7QUFZSCxDQWpCZ0IsRUFBakIsQyIsImZpbGUiOiJtb2R1bGVzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9tb2RzL2hvbWUuanNcIik7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4vbGlicy9qcXVlcnknKSxcbiAgICBkZWZlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmZXInKSxcbiAgICBzY3JlZW5XaWR0aCA9IC0xLFxuICAgIGluTWQgPSB0cnVlLFxuICAgIHNsaWRlciA9IG51bGwsXG4gICAgJHcgPSAkKHdpbmRvdyksXG4gICAgdXBkYXRlTmV3c1NsaWRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgJGhvbWVOZXdzID0gJCgnLmhvbWUtbmV3cycpLFxuICAgICAgICAgICAgd2lkdGggPSBNYXRoLnJvdW5kKCR3LndpZHRoKCkpO1xuXG4gICAgICAgIGlmICh3aWR0aCAhPT0gc2NyZWVuV2lkdGgpIHtcbiAgICAgICAgICAgIHNjcmVlbldpZHRoID0gd2lkdGg7XG5cbiAgICAgICAgICAgIHZhciBuZXdJbk1kID0gc2NyZWVuV2lkdGggPj0gODUwO1xuICAgICAgICAgICAgaWYgKG5ld0luTWQgIT09IGluTWQpIHtcbiAgICAgICAgICAgICAgICBpbk1kID0gbmV3SW5NZDtcblxuICAgICAgICAgICAgICAgIGlmIChpbk1kKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci5kZXN0cm95U2xpZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaG9tZU5ld3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3JvdycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3N0eWxlJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoaWxkcmVuKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2NvbC14cy0yNCBjb2wtbWQtOCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcygnd2lkdGgnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlciA9ICRob21lTmV3c1xuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdyb3cnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoaWxkcmVuKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnY29sLXhzLTI0IGNvbC1tZC04JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lbmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ4U2xpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvSG92ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0U3dpcGVYOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0U3dpcGVZOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2VGV4dDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiYmcgZmEgZmEtY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwiaWMgZmEgZmEtY2hldnJvbi1sZWZ0XCIgYXJpYS1sYWJlbD1cInByZXZpb3VzIHNsaWRlXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRleHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImJnIGZhIGZhLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cImljIGZhIGZhLWNoZXZyb24tcmlnaHRcIiBhcmlhLWxhYmVsPVwibmV4dCBzbGlkZVwiPjwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBpbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5ob21lLWNvdXJzZS1maW5kZXIgLmRyb3Bkb3duLXNlbGVjdCcpLmNpdHlEcm9wZG93bigpO1xuICAgICAgICAkKCcuaG9tZS1uZXdzLWV2ZW50cyAuc3VibWVudSAuZHJvcGRvd24tc2VsZWN0JykuY2l0eURyb3Bkb3duKHtcbiAgICAgICAgICAgIGlzTWVudTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5ob21lLW1lZGlhLXJpYmJvbiAuZW1iZWQtY29udGFpbmVyJykudmlkZW9QcmV2aWV3KHtcbiAgICAgICAgICAgIGNvbnRyb2xzOiAxLFxuICAgICAgICAgICAgc2hvd0luZm86IDAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgICR3LnJlc2l6ZSh1cGRhdGVOZXdzU2xpZGVyKTtcbiAgICAgICAgdXBkYXRlTmV3c1NsaWRlcigpO1xuICAgIH07IC8vIGVuZCB2YXJpYWJsZXNcblxuZGVmZXIoaW5pdCk7XG4iLCIvKipcbiAqIGV4cGVjdHMgalF1ZXJ5IHRvIGJlIHByb3ZpZGVkIGJ5IENJVFlfUi5qc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy4kO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICQgPSByZXF1aXJlKCcuLi9saWJzL2pxdWVyeScpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGRlZmVycmVkRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBDSVRZICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgJChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LkNJVFlfT1BUSU9OUykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMgPSB7IGRlZmVyOiBbXSB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmICghd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlcikge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIENJVFlfT1BUSU9OUy5kZWZlci5wdXNoKGRlZmVycmVkRnVuY3Rpb24pO1xuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9