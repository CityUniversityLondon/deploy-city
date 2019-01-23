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
/**/
var $ = __webpack_require__(1),
    defer = __webpack_require__(2),
    
    init = function () {
        $(document).ready(function(){
                                   
            var strTouchX;
            var endTouchX;
            
            // records touch coordinates for determining swipe or touch
            document.addEventListener("touchstart", function(e){
                strTouchX = e.touches[0].clientX;
                                    
                // re-instates controls after being deactivated by bxslider node module 
                $('.bx-controls, .bx-has-controls-direction').removeClass('disabled');
            }); 

            // determines if touch is click or swipe by comparing start touch and end values
            isTouchClick = endTouchX => endTouchX == strTouchX ? true : false;
            
            /**** Home page top slider ****/

            var i;
            for (i=0; i < $('.banner-content a').length; i++){
                document.getElementsByClassName('banner-content')[i].getElementsByTagName('a')[0].addEventListener("touchend", function(e){
                    e.preventDefault();
                    $('.bx-controls').removeClass('disabled');                       
                    endTouchX = e.changedTouches[0].pageX;
                    
                    if (isTouchClick(endTouchX)){ // calls isTouchClick function to determine if click or swipe to place
                        location.href = this.href;
                    }  
                });
            }// end for loop  

            /**** Home page news slider (only on mobiles) ****/

            for (i=0; i< $('.news-card-content__title').length; i++){
                document.getElementsByClassName('news-card-content__title')[i].addEventListener("touchend", function(e){
                    $('.bx-controls').removeClass('disabled');
                    endTouchX = e.changedTouches[0].pageX;

                    if (isTouchClick(endTouchX)){ // calls isTouchClick function to determine if click or swipe to place
                        location.href = this.parentNode.href;
                    }
                });
            }// end for loop         

        }); // end page ready func 
     }; // end init func

defer(init); /**/


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzdmNGIwMWZmOWU2Nzc4MTI0M2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvYm94c2xpZGVyLW92ZXJyaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0EsMEI7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBLFlBQVksbUJBQU8sQ0FBQyxDQUFnQjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUNBQXVDO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7O0FDakJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUJBQU8sQ0FBQyxDQUFlO0FBQy9CLFlBQVksbUJBQU8sQ0FBQyxDQUFlOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLEU7O0FBRWI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixtQ0FBbUM7QUFDeEQ7QUFDQTtBQUNBLDhEO0FBQ0E7O0FBRUEsaURBQWlEO0FBQ2pEO0FBQ0EscUI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTs7QUFFYjs7QUFFQSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhOztBQUViLFNBQVMsRUFBRTtBQUNYLE9BQU87O0FBRVAsWUFBWSIsImZpbGUiOiJtb2R1bGVzL2JveHNsaWRlci1vdmVycmlkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjN2Y0YjAxZmY5ZTY3NzgxMjQzZiIsIi8qKlxuICogZXhwZWN0cyBqUXVlcnkgdG8gYmUgcHJvdmlkZWQgYnkgQ0lUWV9SLmpzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LiQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy9saWJzL2pxdWVyeS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICQgPSByZXF1aXJlKCcuLi9saWJzL2pxdWVyeScpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkZWZlcnJlZEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgQ0lUWSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICQoZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TID0ge2RlZmVyOiBbXX07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlciA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ0lUWV9PUFRJT05TLmRlZmVyLnB1c2goZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDYgNyA4IDkiLCIvL1xuLy8gVGhpcyBpcyB0byBvdmVycmlkZSB0aGUgdG91Y2ggaXNzdWVzIGV4cGVyaWVuY2VkIHdpdGggdGhlIG5vZGUgbXVkdWxlOiBCb3ggc2xpZGVyLiBUaGUgYm94IHNsaWRlcidzIGNhcm91c2VscyBcbi8vIGZvdW5kIG9uIHRoZSBob21lcGFnZSBoYXZlIGlzc3VlIHdpdGggdGhlIHRleHQgbGlua3MgZm91bmQgb24gZWFjaCBvZiB0aGUgc2xpZGVzLiBXaGVuIGNsaWNrZWQgLyB0b3VjaGluZyB0aGVzZSBsaW5rcyBcbi8vIG9uIG1vYmlsZSBwaG9uZXMgb3IgdGFibGV0cyBub3RoaW5nIGhhcHBlbnMuIEkgc3VzcGVjdCB0aGUgY2Fyb3VzZWwgd2FzIGRlc2lnbmVkIHRvIG9ubHkgY29udGFpbiBwaWN0dXJlIHNsaWRlc1xuLy8gd2l0aG91dCB0ZXh0LiBUaGUgbW9kdWxlIGJlIGRldGF1bHQgZGlzYWJsZXMgc29tZSB0b3VjaCBldmVudHMuIFRoaXMgY29kZSByZS1pbnN0YXRlIHRvdWNoIGV2ZW50cyBvbiB0aGUgbGlua3MuIFxuLy8gVGhpcyBjb2RlIHRhcmdldHMgdHdvIGNhcm91c2VscywgbmFtZWx5IHRoZSBvbmUgYXQgdGhlIHZlcnkgdG9wIG9mIHRoZSBob21lIHBhZ2UgYW5kIGEgbmV3cyBvbmUgYXQgdGhlIGJvdHRvbS5cbi8vIFRoZSBsYXR0ZXIgb25seSBsb2FkcyBhcyBhIGNhcm91c2VsIG9uIHNtYWxsIHZpZXcgcG9ydHMgXG4vL1xuLyoqL1xudmFyICQgPSByZXF1aXJlKCcuL2xpYnMvanF1ZXJ5JyksXG4gICAgZGVmZXIgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmVyJyksXG4gICAgXG4gICAgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgc3RyVG91Y2hYO1xuICAgICAgICAgICAgdmFyIGVuZFRvdWNoWDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gcmVjb3JkcyB0b3VjaCBjb29yZGluYXRlcyBmb3IgZGV0ZXJtaW5pbmcgc3dpcGUgb3IgdG91Y2hcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIHN0clRvdWNoWCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gcmUtaW5zdGF0ZXMgY29udHJvbHMgYWZ0ZXIgYmVpbmcgZGVhY3RpdmF0ZWQgYnkgYnhzbGlkZXIgbm9kZSBtb2R1bGUgXG4gICAgICAgICAgICAgICAgJCgnLmJ4LWNvbnRyb2xzLCAuYngtaGFzLWNvbnRyb2xzLWRpcmVjdGlvbicpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfSk7IFxuXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmVzIGlmIHRvdWNoIGlzIGNsaWNrIG9yIHN3aXBlIGJ5IGNvbXBhcmluZyBzdGFydCB0b3VjaCBhbmQgZW5kIHZhbHVlc1xuICAgICAgICAgICAgaXNUb3VjaENsaWNrID0gZW5kVG91Y2hYID0+IGVuZFRvdWNoWCA9PSBzdHJUb3VjaFggPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qKioqIEhvbWUgcGFnZSB0b3Agc2xpZGVyICoqKiovXG5cbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgZm9yIChpPTA7IGkgPCAkKCcuYmFubmVyLWNvbnRlbnQgYScpLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdiYW5uZXItY29udGVudCcpW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJylbMF0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5ieC1jb250cm9scycpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpOyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGVuZFRvdWNoWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUb3VjaENsaWNrKGVuZFRvdWNoWCkpeyAvLyBjYWxscyBpc1RvdWNoQ2xpY2sgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIGNsaWNrIG9yIHN3aXBlIHRvIHBsYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gdGhpcy5ocmVmO1xuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0vLyBlbmQgZm9yIGxvb3AgIFxuXG4gICAgICAgICAgICAvKioqKiBIb21lIHBhZ2UgbmV3cyBzbGlkZXIgKG9ubHkgb24gbW9iaWxlcykgKioqKi9cblxuICAgICAgICAgICAgZm9yIChpPTA7IGk8ICQoJy5uZXdzLWNhcmQtY29udGVudF9fdGl0bGUnKS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV3cy1jYXJkLWNvbnRlbnRfX3RpdGxlJylbaV0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuYngtY29udHJvbHMnKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZW5kVG91Y2hYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUb3VjaENsaWNrKGVuZFRvdWNoWCkpeyAvLyBjYWxscyBpc1RvdWNoQ2xpY2sgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIGNsaWNrIG9yIHN3aXBlIHRvIHBsYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gdGhpcy5wYXJlbnROb2RlLmhyZWY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0vLyBlbmQgZm9yIGxvb3AgICAgICAgICBcblxuICAgICAgICB9KTsgLy8gZW5kIHBhZ2UgcmVhZHkgZnVuYyBcbiAgICAgfTsgLy8gZW5kIGluaXQgZnVuY1xuXG5kZWZlcihpbml0KTsgLyoqL1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy9ib3hzbGlkZXItb3ZlcnJpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gOSJdLCJzb3VyY2VSb290IjoiIn0=