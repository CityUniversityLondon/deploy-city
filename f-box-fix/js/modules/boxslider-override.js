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
            console.log('gsdfsdf');
                                   
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzhkMzY4MGRhZTBmOWY5MGMxMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvYm94c2xpZGVyLW92ZXJyaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0EsMEI7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBLFlBQVksbUJBQU8sQ0FBQyxDQUFnQjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUNBQXVDO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7O0FDakJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUJBQU8sQ0FBQyxDQUFlO0FBQy9CLFlBQVksbUJBQU8sQ0FBQyxDQUFlOztBQUVuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsRTs7QUFFYjtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLG1DQUFtQztBQUN4RDtBQUNBO0FBQ0EsOEQ7QUFDQTs7QUFFQSxpREFBaUQ7QUFDakQ7QUFDQSxxQjtBQUNBLGlCQUFpQjtBQUNqQixhQUFhOztBQUViOztBQUVBLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQTtBQUNBOztBQUVBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7O0FBRWIsU0FBUyxFQUFFO0FBQ1gsT0FBTzs7QUFFUCxZQUFZIiwiZmlsZSI6Im1vZHVsZXMvYm94c2xpZGVyLW92ZXJyaWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM4ZDM2ODBkYWUwZjlmOTBjMTJmIiwiLyoqXG4gKiBleHBlY3RzIGpRdWVyeSB0byBiZSBwcm92aWRlZCBieSBDSVRZX1IuanNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuJDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL2xpYnMvanF1ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJCA9IHJlcXVpcmUoJy4uL2xpYnMvanF1ZXJ5Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRlZmVycmVkRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBDSVRZICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgJChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LkNJVFlfT1BUSU9OUykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMgPSB7ZGVmZXI6IFtdfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDSVRZX09QVElPTlMuZGVmZXIucHVzaChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy91dGlscy9kZWZlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNiA3IDggOSIsIi8vXG4vLyBUaGlzIGlzIHRvIG92ZXJyaWRlIHRoZSB0b3VjaCBpc3N1ZXMgZXhwZXJpZW5jZWQgd2l0aCB0aGUgbm9kZSBtdWR1bGU6IEJveCBzbGlkZXIuIFRoZSBib3ggc2xpZGVyJ3MgY2Fyb3VzZWxzIFxuLy8gZm91bmQgb24gdGhlIGhvbWVwYWdlIGhhdmUgaXNzdWUgd2l0aCB0aGUgdGV4dCBsaW5rcyBmb3VuZCBvbiBlYWNoIG9mIHRoZSBzbGlkZXMuIFdoZW4gY2xpY2tlZCAvIHRvdWNoaW5nIHRoZXNlIGxpbmtzIFxuLy8gb24gbW9iaWxlIHBob25lcyBvciB0YWJsZXRzIG5vdGhpbmcgaGFwcGVucy4gSSBzdXNwZWN0IHRoZSBjYXJvdXNlbCB3YXMgZGVzaWduZWQgdG8gb25seSBjb250YWluIHBpY3R1cmUgc2xpZGVzXG4vLyB3aXRob3V0IHRleHQuIFRoZSBtb2R1bGUgYmUgZGV0YXVsdCBkaXNhYmxlcyBzb21lIHRvdWNoIGV2ZW50cy4gVGhpcyBjb2RlIHJlLWluc3RhdGUgdG91Y2ggZXZlbnRzIG9uIHRoZSBsaW5rcy4gXG4vLyBUaGlzIGNvZGUgdGFyZ2V0cyB0d28gY2Fyb3VzZWxzLCBuYW1lbHkgdGhlIG9uZSBhdCB0aGUgdmVyeSB0b3Agb2YgdGhlIGhvbWUgcGFnZSBhbmQgYSBuZXdzIG9uZSBhdCB0aGUgYm90dG9tLlxuLy8gVGhlIGxhdHRlciBvbmx5IGxvYWRzIGFzIGEgY2Fyb3VzZWwgb24gc21hbGwgdmlldyBwb3J0cyBcbi8vXG4vKiovXG52YXIgJCA9IHJlcXVpcmUoJy4vbGlicy9qcXVlcnknKSxcbiAgICBkZWZlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmZXInKSxcbiAgICBcbiAgICBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dzZGZzZGYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgc3RyVG91Y2hYO1xuICAgICAgICAgICAgdmFyIGVuZFRvdWNoWDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gcmVjb3JkcyB0b3VjaCBjb29yZGluYXRlcyBmb3IgZGV0ZXJtaW5pbmcgc3dpcGUgb3IgdG91Y2hcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIHN0clRvdWNoWCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gcmUtaW5zdGF0ZXMgY29udHJvbHMgYWZ0ZXIgYmVpbmcgZGVhY3RpdmF0ZWQgYnkgYnhzbGlkZXIgbm9kZSBtb2R1bGUgXG4gICAgICAgICAgICAgICAgJCgnLmJ4LWNvbnRyb2xzLCAuYngtaGFzLWNvbnRyb2xzLWRpcmVjdGlvbicpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfSk7IFxuXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmVzIGlmIHRvdWNoIGlzIGNsaWNrIG9yIHN3aXBlIGJ5IGNvbXBhcmluZyBzdGFydCB0b3VjaCBhbmQgZW5kIHZhbHVlc1xuICAgICAgICAgICAgaXNUb3VjaENsaWNrID0gZW5kVG91Y2hYID0+IGVuZFRvdWNoWCA9PSBzdHJUb3VjaFggPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qKioqIEhvbWUgcGFnZSB0b3Agc2xpZGVyICoqKiovXG5cbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgZm9yIChpPTA7IGkgPCAkKCcuYmFubmVyLWNvbnRlbnQgYScpLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdiYW5uZXItY29udGVudCcpW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJylbMF0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5ieC1jb250cm9scycpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpOyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGVuZFRvdWNoWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUb3VjaENsaWNrKGVuZFRvdWNoWCkpeyAvLyBjYWxscyBpc1RvdWNoQ2xpY2sgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIGNsaWNrIG9yIHN3aXBlIHRvIHBsYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gdGhpcy5ocmVmO1xuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0vLyBlbmQgZm9yIGxvb3AgIFxuXG4gICAgICAgICAgICAvKioqKiBIb21lIHBhZ2UgbmV3cyBzbGlkZXIgKG9ubHkgb24gbW9iaWxlcykgKioqKi9cblxuICAgICAgICAgICAgZm9yIChpPTA7IGk8ICQoJy5uZXdzLWNhcmQtY29udGVudF9fdGl0bGUnKS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV3cy1jYXJkLWNvbnRlbnRfX3RpdGxlJylbaV0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuYngtY29udHJvbHMnKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZW5kVG91Y2hYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUb3VjaENsaWNrKGVuZFRvdWNoWCkpeyAvLyBjYWxscyBpc1RvdWNoQ2xpY2sgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIGNsaWNrIG9yIHN3aXBlIHRvIHBsYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gdGhpcy5wYXJlbnROb2RlLmhyZWY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0vLyBlbmQgZm9yIGxvb3AgICAgICAgICBcblxuICAgICAgICB9KTsgLy8gZW5kIHBhZ2UgcmVhZHkgZnVuYyBcbiAgICAgfTsgLy8gZW5kIGluaXQgZnVuY1xuXG5kZWZlcihpbml0KTsgLyoqL1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy9ib3hzbGlkZXItb3ZlcnJpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gOSJdLCJzb3VyY2VSb290IjoiIn0=