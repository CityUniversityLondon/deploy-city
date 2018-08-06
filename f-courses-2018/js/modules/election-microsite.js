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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
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

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(1),
    defer = __webpack_require__(2),

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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzgwOTQyNTNjNjgyNzM1MzE3MGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvZWxlY3Rpb24tbWljcm9zaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0EsMEI7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHVDQUF1QztBQUN2QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRzs7Ozs7Ozs7QUNqQkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoibW9kdWxlcy9lbGVjdGlvbi1taWNyb3NpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2Myk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzgwOTQyNTNjNjgyNzM1MzE3MGIiLCIvKipcbiAqIGV4cGVjdHMgalF1ZXJ5IHRvIGJlIHByb3ZpZGVkIGJ5IENJVFlfUi5qc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy4kO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICQgPSByZXF1aXJlKCcuLi9saWJzL2pxdWVyeScpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkZWZlcnJlZEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgQ0lUWSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICQoZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TID0ge2RlZmVyOiBbXX07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlciA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ0lUWV9PUFRJT05TLmRlZmVyLnB1c2goZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCcuL2xpYnMvanF1ZXJ5JyksXG4gICAgZGVmZXIgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmVyJyksXG5cbiAgICBpbml0RXhwZXJ0c0lFNyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlY3Rpb24gPSAkKCcuZWxlY3Rpb24tbWljcm9zaXRlX19leHBlcnRzLS13cmFwcGVyJyksXG4gICAgICAgICAgICBleHBlcnRzID0gJCgnOm5vdChbY2xhc3MqPVwiaXdkLWxpc3RpbmdcIl0pID4gLmVsZWN0aW9uLW1pY3Jvc2l0ZV9fYWNhZGVtaWNzX19pdGVtJyksXG4gICAgICAgICAgICBpbmZvID0gJCgnPGRpdiBjbGFzcz1cImVsZWN0aW9uLW1pY3Jvc2l0ZV9fYWNhZGVtaWNzX19pdGVtX19pbmZvLS1pZTdcIj48L2Rpdj4nKS5hcHBlbmRUbyhzZWN0aW9uKSxcblxuICAgICAgICAgICAgb3BlbkluZm8gPSBmdW5jdGlvbiAoZXhwZXJ0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBleHBlcnQuZmluZCgnLmluZm8tY29udGVudCcpLmNsb25lKCk7XG5cbiAgICAgICAgICAgICAgICBpbmZvLmh0bWwoJycpLmFwcGVuZChjb250ZW50KS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5mby5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfSxcblxuXG4gICAgICAgICAgICBzZWxlY3QgPSBmdW5jdGlvbiAoZXhwZXJ0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG1ha2VTZWxlY3RlZCA9IGV4cGVydCAmJiAhZXhwZXJ0Lmhhc0NsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgICAgICAgaWYgKG1ha2VTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBvcGVuSW5mbyhleHBlcnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgZXhwZXJ0cy5jbGljayhmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNlbGVjdCgkKHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGluaXRFeHBlcnRzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBleHBlcnRzID0gJCgnOm5vdChbY2xhc3MqPVwiaXdkLWxpc3RpbmdcIl0pID4gLmVsZWN0aW9uLW1pY3Jvc2l0ZV9fYWNhZGVtaWNzX19pdGVtJyksXG4gICAgICAgICAgICBpbmZvV3JhcHBlciA9ICQoJy5lbGVjdGlvbi1taWNyb3NpdGVfX2V4cGVydHMtLWluZm8td3JhcHBlcicpLFxuICAgICAgICAgICAgaW5mb0ltZ0NvbnRhaW5lciA9ICQoJy5lbGVjdGlvbi1taWNyb3NpdGVfX2V4cGVydHMtLWluZm9fX2ltZycpLFxuICAgICAgICAgICAgaW5mb1R4dENvbnRhaW5lciA9ICQoJy5lbGVjdGlvbi1taWNyb3NpdGVfX2V4cGVydHMtLWluZm9fX3R4dCcpLFxuXG5cbiAgICAgICAgICAgIGNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGV4cGVydHMucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgaW5mb1dyYXBwZXIucmVtb3ZlQ2xhc3MoJ2VsZWN0aW9uLW1pY3Jvc2l0ZV9fZXhwZXJ0cy0taW5mby13cmFwcGVyLS1vcGVuJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ID0gZnVuY3Rpb24gKGV4cGVydCkge1xuICAgICAgICAgICAgICAgIGlmIChleHBlcnQuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleHBlcnRzLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICBleHBlcnQuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGluZm9JbWdDb250YWluZXIuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgaW5mb1R4dENvbnRhaW5lci5lbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICBpbmZvSW1nQ29udGFpbmVyLmFwcGVuZChleHBlcnQuZmluZCgnLmltYWdlIGltZycpLmNsb25lKCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IGV4cGVydC5maW5kKCcuaW5mbycpLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgIGluZm9UeHRDb250YWluZXIuYXBwZW5kKGluZm8pO1xuICAgICAgICAgICAgICAgICAgICBpbmZvV3JhcHBlci5hZGRDbGFzcygnZWxlY3Rpb24tbWljcm9zaXRlX19leHBlcnRzLS1pbmZvLXdyYXBwZXItLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBpbmZvV3JhcHBlci5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICQoJy5lbGVjdGlvbi1taWNyb3NpdGVfX2V4cGVydHMtLWluZm9fX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV4cGVydHMuY2xpY2soZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZWxlY3QoJCh0aGlzKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vJCh3aW5kb3cpLnJlc2l6ZShjbG9zZSk7XG4gICAgfSxcblxuICAgIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghJCgnaHRtbCcpLmhhc0NsYXNzKCdsdC1pZTgnKSkge1xuICAgICAgICAgICAgaW5pdEV4cGVydHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluaXRFeHBlcnRzSUU3KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5kZWZlcihpbml0KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvZWxlY3Rpb24tbWljcm9zaXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwic291cmNlUm9vdCI6IiJ9