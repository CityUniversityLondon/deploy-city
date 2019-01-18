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
/******/ 	return __webpack_require__(__webpack_require__.s = 191);
/******/ })
/************************************************************************/
/******/ ({

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(2),
    defer = __webpack_require__(3),

    initExpertsIE7 = function () {
        var section = $('.election-microsite__experts--wrapper'),
            experts = $(':not([class*="iwd-listing"]) > .election-microsite__academics__item'),
            info = $('<div class="election-microsite__academics__item__info--ie7"></div>').appendTo(section),

            openInfo = function (expert) {
                var content = expert.find('.info-content').clone();

                info.html('').append(content).addClass('open');
            },

            close = function () {
                info.removeClass('open');
            },


            select = function (expert) {
                var makeSelected = expert && !expert.hasClass('selected');
                close();
                if (makeSelected) {
                    openInfo(expert);
                }
            };

        experts.click(function (evt) {
            evt.preventDefault();
            select($(this));
        });
    },

    initExperts = function () {

        var experts = $(':not([class*="iwd-listing"]) > .election-microsite__academics__item'),
            infoWrapper = $('.election-microsite__experts--info-wrapper'),
            infoImgContainer = $('.election-microsite__experts--info__img'),
            infoTxtContainer = $('.election-microsite__experts--info__txt'),


            close = function () {
                experts.removeClass('selected');
                infoWrapper.removeClass('election-microsite__experts--info-wrapper--open');
            },
            select = function (expert) {
                if (expert.hasClass('selected')) {
                    close();
                } else {
                    experts.removeClass('selected');
                    expert.addClass('selected');
                    infoImgContainer.empty();
                    infoTxtContainer.empty();
                    infoImgContainer.append(expert.find('.image img').clone());
                    var info = expert.find('.info').clone();
                    infoTxtContainer.append(info);
                    infoWrapper.addClass('election-microsite__experts--info-wrapper--open');
                    $('html, body').animate({
                        scrollTop: infoWrapper.offset().top
                    }, 200);
                }
            };

        $('.election-microsite__experts--info__close').click(function (e) {
            e.preventDefault();
            close();
        });

        experts.click(function (evt) {
            evt.preventDefault();
            select($(this));
        });

        //$(window).resize(close);
    },

    init = function () {
        if (!$('html').hasClass('lt-ie8')) {
            initExperts();
        } else {
            initExpertsIE7();
        }
    };

defer(init);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/**
 * expects jQuery to be provided by CITY_R.js
 */
module.exports = window.$;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
    'use strict';

    var $ = __webpack_require__(2);

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGJmMzUxNGZlYmIyMzE0MzU4ZDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvZWxlY3Rpb24tbWljcm9zaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL2xpYnMvanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL3V0aWxzL2RlZmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0RBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3RGQTtBQUNBO0FBQ0E7QUFDQSwwQjs7Ozs7OztBQ0hBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUNBQXVDO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHIiwiZmlsZSI6Im1vZHVsZXMvZWxlY3Rpb24tbWljcm9zaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTkxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwYmYzNTE0ZmViYjIzMTQzNThkMyIsIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCcuL2xpYnMvanF1ZXJ5JyksXG4gICAgZGVmZXIgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmVyJyksXG5cbiAgICBpbml0RXhwZXJ0c0lFNyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlY3Rpb24gPSAkKCcuZWxlY3Rpb24tbWljcm9zaXRlX19leHBlcnRzLS13cmFwcGVyJyksXG4gICAgICAgICAgICBleHBlcnRzID0gJCgnOm5vdChbY2xhc3MqPVwiaXdkLWxpc3RpbmdcIl0pID4gLmVsZWN0aW9uLW1pY3Jvc2l0ZV9fYWNhZGVtaWNzX19pdGVtJyksXG4gICAgICAgICAgICBpbmZvID0gJCgnPGRpdiBjbGFzcz1cImVsZWN0aW9uLW1pY3Jvc2l0ZV9fYWNhZGVtaWNzX19pdGVtX19pbmZvLS1pZTdcIj48L2Rpdj4nKS5hcHBlbmRUbyhzZWN0aW9uKSxcblxuICAgICAgICAgICAgb3BlbkluZm8gPSBmdW5jdGlvbiAoZXhwZXJ0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBleHBlcnQuZmluZCgnLmluZm8tY29udGVudCcpLmNsb25lKCk7XG5cbiAgICAgICAgICAgICAgICBpbmZvLmh0bWwoJycpLmFwcGVuZChjb250ZW50KS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5mby5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfSxcblxuXG4gICAgICAgICAgICBzZWxlY3QgPSBmdW5jdGlvbiAoZXhwZXJ0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG1ha2VTZWxlY3RlZCA9IGV4cGVydCAmJiAhZXhwZXJ0Lmhhc0NsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgICAgICAgaWYgKG1ha2VTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBvcGVuSW5mbyhleHBlcnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgZXhwZXJ0cy5jbGljayhmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNlbGVjdCgkKHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGluaXRFeHBlcnRzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBleHBlcnRzID0gJCgnOm5vdChbY2xhc3MqPVwiaXdkLWxpc3RpbmdcIl0pID4gLmVsZWN0aW9uLW1pY3Jvc2l0ZV9fYWNhZGVtaWNzX19pdGVtJyksXG4gICAgICAgICAgICBpbmZvV3JhcHBlciA9ICQoJy5lbGVjdGlvbi1taWNyb3NpdGVfX2V4cGVydHMtLWluZm8td3JhcHBlcicpLFxuICAgICAgICAgICAgaW5mb0ltZ0NvbnRhaW5lciA9ICQoJy5lbGVjdGlvbi1taWNyb3NpdGVfX2V4cGVydHMtLWluZm9fX2ltZycpLFxuICAgICAgICAgICAgaW5mb1R4dENvbnRhaW5lciA9ICQoJy5lbGVjdGlvbi1taWNyb3NpdGVfX2V4cGVydHMtLWluZm9fX3R4dCcpLFxuXG5cbiAgICAgICAgICAgIGNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGV4cGVydHMucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgaW5mb1dyYXBwZXIucmVtb3ZlQ2xhc3MoJ2VsZWN0aW9uLW1pY3Jvc2l0ZV9fZXhwZXJ0cy0taW5mby13cmFwcGVyLS1vcGVuJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ID0gZnVuY3Rpb24gKGV4cGVydCkge1xuICAgICAgICAgICAgICAgIGlmIChleHBlcnQuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleHBlcnRzLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICBleHBlcnQuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGluZm9JbWdDb250YWluZXIuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgaW5mb1R4dENvbnRhaW5lci5lbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICBpbmZvSW1nQ29udGFpbmVyLmFwcGVuZChleHBlcnQuZmluZCgnLmltYWdlIGltZycpLmNsb25lKCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IGV4cGVydC5maW5kKCcuaW5mbycpLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgIGluZm9UeHRDb250YWluZXIuYXBwZW5kKGluZm8pO1xuICAgICAgICAgICAgICAgICAgICBpbmZvV3JhcHBlci5hZGRDbGFzcygnZWxlY3Rpb24tbWljcm9zaXRlX19leHBlcnRzLS1pbmZvLXdyYXBwZXItLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBpbmZvV3JhcHBlci5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICQoJy5lbGVjdGlvbi1taWNyb3NpdGVfX2V4cGVydHMtLWluZm9fX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV4cGVydHMuY2xpY2soZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZWxlY3QoJCh0aGlzKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vJCh3aW5kb3cpLnJlc2l6ZShjbG9zZSk7XG4gICAgfSxcblxuICAgIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghJCgnaHRtbCcpLmhhc0NsYXNzKCdsdC1pZTgnKSkge1xuICAgICAgICAgICAgaW5pdEV4cGVydHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluaXRFeHBlcnRzSUU3KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5kZWZlcihpbml0KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvZWxlY3Rpb24tbWljcm9zaXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTFcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiLyoqXG4gKiBleHBlY3RzIGpRdWVyeSB0byBiZSBwcm92aWRlZCBieSBDSVRZX1IuanNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuJDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL2xpYnMvanF1ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJCA9IHJlcXVpcmUoJy4uL2xpYnMvanF1ZXJ5Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRlZmVycmVkRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBDSVRZICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgJChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LkNJVFlfT1BUSU9OUykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMgPSB7ZGVmZXI6IFtdfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDSVRZX09QVElPTlMuZGVmZXIucHVzaChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy91dGlscy9kZWZlci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDQgNSA3IDggOSJdLCJzb3VyY2VSb290IjoiIn0=