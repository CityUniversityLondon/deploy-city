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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

/**
 * expects jQuery to be provided by CITY_R.js
 */
module.exports = window.$;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
    'use strict';

    var $ = __webpack_require__(1);

    return function (deferredFunction) {
        if (typeof CITY !== 'undefined') {
            $(deferredFunction);
        } else {
            if (!window.CITY_OPTIONS) {
                window.CITY_OPTIONS = {defer: []};
            } else if (!window.CITY_OPTIONS.defer) {
                window.CITY_OPTIONS.defer = [];
            }
            CITY_OPTIONS.defer.push(deferredFunction);
        }
    };
}();

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

//
// This is to override the touch issues experienced with the node mudule: Box slider. The box slider's carousels
// found on the homepage have issue with the text links found on each of the slides. When clicked / touching these links
// on mobile phones or tablets nothing happens. I suspect the carousel was designed to only contain picture slides
// without text. The module be detault disables some touch events. This code re-instate touch events on the links.
// This code targets two carousels, namely the one at the very top of the home page and a news one at the bottom.
// The latter only loads as a carousel on small view ports
//

var $ = __webpack_require__(1),
    defer = __webpack_require__(2),
    init = function() {
        var strTouchX;
        var endTouchX;

        // records touch coordinates for determining swipe or touch
        document.addEventListener('touchstart', function(e) {
            strTouchX = e.touches[0].clientX;

            // re-instates controls after being deactivated by bxslider node module
            $('.bx-controls, .bx-has-controls-direction').removeClass(
                'disabled'
            );
        });

        // determines if touch is click or swipe by comparing start touch and end values
        isTouchClick = function (endTouchX) {
            if (endTouchX == strTouchX) {
                true
            } else {
                false
            }
        }

        /**** Home page top slider ****/

        var i;
        for (i = 0; i < $('.banner-content a').length; i++) {
            document
                .getElementsByClassName('banner-content')
                [i].getElementsByTagName('a')[0]
                .addEventListener('touchend', function(e) {
                    e.preventDefault();
                    $('.bx-controls').removeClass('disabled');
                    endTouchX = e.changedTouches[0].pageX;

                    if (isTouchClick(endTouchX)) {
                        // calls isTouchClick function to determine if click or swipe to place
                        location.href = this.href;
                    }
                });
        } // end for loop

        /**** Home page news slider (only on mobiles) ****/

        for (i = 0; i < $('.news-card-content__title').length; i++) {
            document
                .getElementsByClassName('news-card-content__title')
                [i].addEventListener('touchend', function(e) {
                    $('.bx-controls').removeClass('disabled');
                    endTouchX = e.changedTouches[0].pageX;

                    if (isTouchClick(endTouchX)) {
                        // calls isTouchClick function to determine if click or swipe to place
                        location.href = this.parentNode.href;
                    }
                });
        } // end for loop
    }; // end init func

defer(init);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTcyNGNiOTBkNDFlNjVkZmY3YWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvYm94c2xpZGVyLW92ZXJyaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0EsMEI7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBLFlBQVksbUJBQU8sQ0FBQyxDQUFnQjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUNBQXVDO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7O0FDakJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxtQkFBTyxDQUFDLENBQWU7QUFDL0IsWUFBWSxtQkFBTyxDQUFDLENBQWU7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixTQUFTOztBQUVUOztBQUVBLG1CQUFtQiwyQ0FBMkM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1QsTUFBTTs7QUFFTiIsImZpbGUiOiJtb2R1bGVzL2JveHNsaWRlci1vdmVycmlkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NzI0Y2I5MGQ0MWU2NWRmZjdhYSIsIi8qKlxuICogZXhwZWN0cyBqUXVlcnkgdG8gYmUgcHJvdmlkZWQgYnkgQ0lUWV9SLmpzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LiQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy9saWJzL2pxdWVyeS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICQgPSByZXF1aXJlKCcuLi9saWJzL2pxdWVyeScpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkZWZlcnJlZEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgQ0lUWSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICQoZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TID0ge2RlZmVyOiBbXX07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlciA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ0lUWV9PUFRJT05TLmRlZmVyLnB1c2goZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDYgNyA4IDkiLCIvL1xuLy8gVGhpcyBpcyB0byBvdmVycmlkZSB0aGUgdG91Y2ggaXNzdWVzIGV4cGVyaWVuY2VkIHdpdGggdGhlIG5vZGUgbXVkdWxlOiBCb3ggc2xpZGVyLiBUaGUgYm94IHNsaWRlcidzIGNhcm91c2Vsc1xuLy8gZm91bmQgb24gdGhlIGhvbWVwYWdlIGhhdmUgaXNzdWUgd2l0aCB0aGUgdGV4dCBsaW5rcyBmb3VuZCBvbiBlYWNoIG9mIHRoZSBzbGlkZXMuIFdoZW4gY2xpY2tlZCAvIHRvdWNoaW5nIHRoZXNlIGxpbmtzXG4vLyBvbiBtb2JpbGUgcGhvbmVzIG9yIHRhYmxldHMgbm90aGluZyBoYXBwZW5zLiBJIHN1c3BlY3QgdGhlIGNhcm91c2VsIHdhcyBkZXNpZ25lZCB0byBvbmx5IGNvbnRhaW4gcGljdHVyZSBzbGlkZXNcbi8vIHdpdGhvdXQgdGV4dC4gVGhlIG1vZHVsZSBiZSBkZXRhdWx0IGRpc2FibGVzIHNvbWUgdG91Y2ggZXZlbnRzLiBUaGlzIGNvZGUgcmUtaW5zdGF0ZSB0b3VjaCBldmVudHMgb24gdGhlIGxpbmtzLlxuLy8gVGhpcyBjb2RlIHRhcmdldHMgdHdvIGNhcm91c2VscywgbmFtZWx5IHRoZSBvbmUgYXQgdGhlIHZlcnkgdG9wIG9mIHRoZSBob21lIHBhZ2UgYW5kIGEgbmV3cyBvbmUgYXQgdGhlIGJvdHRvbS5cbi8vIFRoZSBsYXR0ZXIgb25seSBsb2FkcyBhcyBhIGNhcm91c2VsIG9uIHNtYWxsIHZpZXcgcG9ydHNcbi8vXG5cbnZhciAkID0gcmVxdWlyZSgnLi9saWJzL2pxdWVyeScpLFxuICAgIGRlZmVyID0gcmVxdWlyZSgnLi91dGlscy9kZWZlcicpLFxuICAgIGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHN0clRvdWNoWDtcbiAgICAgICAgdmFyIGVuZFRvdWNoWDtcblxuICAgICAgICAvLyByZWNvcmRzIHRvdWNoIGNvb3JkaW5hdGVzIGZvciBkZXRlcm1pbmluZyBzd2lwZSBvciB0b3VjaFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgc3RyVG91Y2hYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG5cbiAgICAgICAgICAgIC8vIHJlLWluc3RhdGVzIGNvbnRyb2xzIGFmdGVyIGJlaW5nIGRlYWN0aXZhdGVkIGJ5IGJ4c2xpZGVyIG5vZGUgbW9kdWxlXG4gICAgICAgICAgICAkKCcuYngtY29udHJvbHMsIC5ieC1oYXMtY29udHJvbHMtZGlyZWN0aW9uJykucmVtb3ZlQ2xhc3MoXG4gICAgICAgICAgICAgICAgJ2Rpc2FibGVkJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZGV0ZXJtaW5lcyBpZiB0b3VjaCBpcyBjbGljayBvciBzd2lwZSBieSBjb21wYXJpbmcgc3RhcnQgdG91Y2ggYW5kIGVuZCB2YWx1ZXNcbiAgICAgICAgaXNUb3VjaENsaWNrID0gZnVuY3Rpb24gKGVuZFRvdWNoWCkge1xuICAgICAgICAgICAgaWYgKGVuZFRvdWNoWCA9PSBzdHJUb3VjaFgpIHtcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKioqKiBIb21lIHBhZ2UgdG9wIHNsaWRlciAqKioqL1xuXG4gICAgICAgIHZhciBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgJCgnLmJhbm5lci1jb250ZW50IGEnKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYmFubmVyLWNvbnRlbnQnKVxuICAgICAgICAgICAgICAgIFtpXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpWzBdXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5ieC1jb250cm9scycpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICBlbmRUb3VjaFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RvdWNoQ2xpY2soZW5kVG91Y2hYKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FsbHMgaXNUb3VjaENsaWNrIGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBjbGljayBvciBzd2lwZSB0byBwbGFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IHRoaXMuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IC8vIGVuZCBmb3IgbG9vcFxuXG4gICAgICAgIC8qKioqIEhvbWUgcGFnZSBuZXdzIHNsaWRlciAob25seSBvbiBtb2JpbGVzKSAqKioqL1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAkKCcubmV3cy1jYXJkLWNvbnRlbnRfX3RpdGxlJykubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25ld3MtY2FyZC1jb250ZW50X190aXRsZScpXG4gICAgICAgICAgICAgICAgW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcuYngtY29udHJvbHMnKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZW5kVG91Y2hYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUb3VjaENsaWNrKGVuZFRvdWNoWCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbGxzIGlzVG91Y2hDbGljayBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgY2xpY2sgb3Igc3dpcGUgdG8gcGxhY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSB0aGlzLnBhcmVudE5vZGUuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IC8vIGVuZCBmb3IgbG9vcFxuICAgIH07IC8vIGVuZCBpbml0IGZ1bmNcblxuZGVmZXIoaW5pdCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL2JveHNsaWRlci1vdmVycmlkZS5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSA5Il0sInNvdXJjZVJvb3QiOiIifQ==