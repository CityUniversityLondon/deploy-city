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

/***/ 0:
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

    var $ = __webpack_require__(0);

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

var $ = __webpack_require__(0),
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
        isTouchClick = endTouchX => (endTouchX == strTouchX ? true : false);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmY3ZTY3OTFmYzgzMjhmZTM3MWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvYm94c2xpZGVyLW92ZXJyaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0EsMEI7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBLFlBQVksbUJBQU8sQ0FBQyxDQUFnQjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUNBQXVDO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7O0FDakJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxtQkFBTyxDQUFDLENBQWU7QUFDL0IsWUFBWSxtQkFBTyxDQUFDLENBQWU7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1CQUFtQixtQ0FBbUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsU0FBUzs7QUFFVDs7QUFFQSxtQkFBbUIsMkNBQTJDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsU0FBUztBQUNULE1BQU07O0FBRU4iLCJmaWxlIjoibW9kdWxlcy9ib3hzbGlkZXItb3ZlcnJpZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3MCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmY3ZTY3OTFmYzgzMjhmZTM3MWQiLCIvKipcbiAqIGV4cGVjdHMgalF1ZXJ5IHRvIGJlIHByb3ZpZGVkIGJ5IENJVFlfUi5qc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy4kO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciAkID0gcmVxdWlyZSgnLi4vbGlicy9qcXVlcnknKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoZGVmZXJyZWRGdW5jdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIENJVFkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAkKGRlZmVycmVkRnVuY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUyA9IHtkZWZlcjogW119O1xuICAgICAgICAgICAgfSBlbHNlIGlmICghd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlcikge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIENJVFlfT1BUSU9OUy5kZWZlci5wdXNoKGRlZmVycmVkRnVuY3Rpb24pO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL3V0aWxzL2RlZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA2IDcgOCA5IDEwIiwiLy9cbi8vIFRoaXMgaXMgdG8gb3ZlcnJpZGUgdGhlIHRvdWNoIGlzc3VlcyBleHBlcmllbmNlZCB3aXRoIHRoZSBub2RlIG11ZHVsZTogQm94IHNsaWRlci4gVGhlIGJveCBzbGlkZXIncyBjYXJvdXNlbHNcbi8vIGZvdW5kIG9uIHRoZSBob21lcGFnZSBoYXZlIGlzc3VlIHdpdGggdGhlIHRleHQgbGlua3MgZm91bmQgb24gZWFjaCBvZiB0aGUgc2xpZGVzLiBXaGVuIGNsaWNrZWQgLyB0b3VjaGluZyB0aGVzZSBsaW5rc1xuLy8gb24gbW9iaWxlIHBob25lcyBvciB0YWJsZXRzIG5vdGhpbmcgaGFwcGVucy4gSSBzdXNwZWN0IHRoZSBjYXJvdXNlbCB3YXMgZGVzaWduZWQgdG8gb25seSBjb250YWluIHBpY3R1cmUgc2xpZGVzXG4vLyB3aXRob3V0IHRleHQuIFRoZSBtb2R1bGUgYmUgZGV0YXVsdCBkaXNhYmxlcyBzb21lIHRvdWNoIGV2ZW50cy4gVGhpcyBjb2RlIHJlLWluc3RhdGUgdG91Y2ggZXZlbnRzIG9uIHRoZSBsaW5rcy5cbi8vIFRoaXMgY29kZSB0YXJnZXRzIHR3byBjYXJvdXNlbHMsIG5hbWVseSB0aGUgb25lIGF0IHRoZSB2ZXJ5IHRvcCBvZiB0aGUgaG9tZSBwYWdlIGFuZCBhIG5ld3Mgb25lIGF0IHRoZSBib3R0b20uXG4vLyBUaGUgbGF0dGVyIG9ubHkgbG9hZHMgYXMgYSBjYXJvdXNlbCBvbiBzbWFsbCB2aWV3IHBvcnRzXG4vL1xuXG52YXIgJCA9IHJlcXVpcmUoJy4vbGlicy9qcXVlcnknKSxcbiAgICBkZWZlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmZXInKSxcbiAgICBpbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzdHJUb3VjaFg7XG4gICAgICAgIHZhciBlbmRUb3VjaFg7XG5cbiAgICAgICAgLy8gcmVjb3JkcyB0b3VjaCBjb29yZGluYXRlcyBmb3IgZGV0ZXJtaW5pbmcgc3dpcGUgb3IgdG91Y2hcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHN0clRvdWNoWCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuXG4gICAgICAgICAgICAvLyByZS1pbnN0YXRlcyBjb250cm9scyBhZnRlciBiZWluZyBkZWFjdGl2YXRlZCBieSBieHNsaWRlciBub2RlIG1vZHVsZVxuICAgICAgICAgICAgJCgnLmJ4LWNvbnRyb2xzLCAuYngtaGFzLWNvbnRyb2xzLWRpcmVjdGlvbicpLnJlbW92ZUNsYXNzKFxuICAgICAgICAgICAgICAgICdkaXNhYmxlZCdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGRldGVybWluZXMgaWYgdG91Y2ggaXMgY2xpY2sgb3Igc3dpcGUgYnkgY29tcGFyaW5nIHN0YXJ0IHRvdWNoIGFuZCBlbmQgdmFsdWVzXG4gICAgICAgIGlzVG91Y2hDbGljayA9IGVuZFRvdWNoWCA9PiAoZW5kVG91Y2hYID09IHN0clRvdWNoWCA/IHRydWUgOiBmYWxzZSk7XG5cbiAgICAgICAgLyoqKiogSG9tZSBwYWdlIHRvcCBzbGlkZXIgKioqKi9cblxuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8ICQoJy5iYW5uZXItY29udGVudCBhJykubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Jhbm5lci1jb250ZW50JylcbiAgICAgICAgICAgICAgICBbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKVswXVxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAkKCcuYngtY29udHJvbHMnKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZW5kVG91Y2hYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUb3VjaENsaWNrKGVuZFRvdWNoWCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbGxzIGlzVG91Y2hDbGljayBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgY2xpY2sgb3Igc3dpcGUgdG8gcGxhY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSB0aGlzLmhyZWY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSAvLyBlbmQgZm9yIGxvb3BcblxuICAgICAgICAvKioqKiBIb21lIHBhZ2UgbmV3cyBzbGlkZXIgKG9ubHkgb24gbW9iaWxlcykgKioqKi9cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgJCgnLm5ld3MtY2FyZC1jb250ZW50X190aXRsZScpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXdzLWNhcmQtY29udGVudF9fdGl0bGUnKVxuICAgICAgICAgICAgICAgIFtpXS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmJ4LWNvbnRyb2xzJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGVuZFRvdWNoWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVG91Y2hDbGljayhlbmRUb3VjaFgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYWxscyBpc1RvdWNoQ2xpY2sgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIGNsaWNrIG9yIHN3aXBlIHRvIHBsYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gdGhpcy5wYXJlbnROb2RlLmhyZWY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSAvLyBlbmQgZm9yIGxvb3BcbiAgICB9OyAvLyBlbmQgaW5pdCBmdW5jXG5cbmRlZmVyKGluaXQpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy9ib3hzbGlkZXItb3ZlcnJpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiXSwic291cmNlUm9vdCI6IiJ9