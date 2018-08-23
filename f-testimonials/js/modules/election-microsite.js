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
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
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

/***/ 67:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTNiYjZkZjM5MWJmMmZjOTIxZDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvZWxlY3Rpb24tbWljcm9zaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0EsMEI7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHVDQUF1QztBQUN2QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRzs7Ozs7Ozs7QUNqQkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoibW9kdWxlcy9lbGVjdGlvbi1taWNyb3NpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2Nyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTNiYjZkZjM5MWJmMmZjOTIxZDYiLCIvKipcbiAqIGV4cGVjdHMgalF1ZXJ5IHRvIGJlIHByb3ZpZGVkIGJ5IENJVFlfUi5qc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy4kO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDgiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJCA9IHJlcXVpcmUoJy4uL2xpYnMvanF1ZXJ5Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRlZmVycmVkRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBDSVRZICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgJChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LkNJVFlfT1BUSU9OUykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMgPSB7ZGVmZXI6IFtdfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDSVRZX09QVElPTlMuZGVmZXIucHVzaChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy91dGlscy9kZWZlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNiA3IDgiLCIndXNlIHN0cmljdCc7XG5cbnZhciAkID0gcmVxdWlyZSgnLi9saWJzL2pxdWVyeScpLFxuICAgIGRlZmVyID0gcmVxdWlyZSgnLi91dGlscy9kZWZlcicpLFxuXG4gICAgaW5pdEV4cGVydHNJRTcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWN0aW9uID0gJCgnLmVsZWN0aW9uLW1pY3Jvc2l0ZV9fZXhwZXJ0cy0td3JhcHBlcicpLFxuICAgICAgICAgICAgZXhwZXJ0cyA9ICQoJzpub3QoW2NsYXNzKj1cIml3ZC1saXN0aW5nXCJdKSA+IC5lbGVjdGlvbi1taWNyb3NpdGVfX2FjYWRlbWljc19faXRlbScpLFxuICAgICAgICAgICAgaW5mbyA9ICQoJzxkaXYgY2xhc3M9XCJlbGVjdGlvbi1taWNyb3NpdGVfX2FjYWRlbWljc19faXRlbV9faW5mby0taWU3XCI+PC9kaXY+JykuYXBwZW5kVG8oc2VjdGlvbiksXG5cbiAgICAgICAgICAgIG9wZW5JbmZvID0gZnVuY3Rpb24gKGV4cGVydCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gZXhwZXJ0LmZpbmQoJy5pbmZvLWNvbnRlbnQnKS5jbG9uZSgpO1xuXG4gICAgICAgICAgICAgICAgaW5mby5odG1sKCcnKS5hcHBlbmQoY29udGVudCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGluZm8ucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH0sXG5cblxuICAgICAgICAgICAgc2VsZWN0ID0gZnVuY3Rpb24gKGV4cGVydCkge1xuICAgICAgICAgICAgICAgIHZhciBtYWtlU2VsZWN0ZWQgPSBleHBlcnQgJiYgIWV4cGVydC5oYXNDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgICAgIGlmIChtYWtlU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbkluZm8oZXhwZXJ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGV4cGVydHMuY2xpY2soZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZWxlY3QoJCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbml0RXhwZXJ0cyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgZXhwZXJ0cyA9ICQoJzpub3QoW2NsYXNzKj1cIml3ZC1saXN0aW5nXCJdKSA+IC5lbGVjdGlvbi1taWNyb3NpdGVfX2FjYWRlbWljc19faXRlbScpLFxuICAgICAgICAgICAgaW5mb1dyYXBwZXIgPSAkKCcuZWxlY3Rpb24tbWljcm9zaXRlX19leHBlcnRzLS1pbmZvLXdyYXBwZXInKSxcbiAgICAgICAgICAgIGluZm9JbWdDb250YWluZXIgPSAkKCcuZWxlY3Rpb24tbWljcm9zaXRlX19leHBlcnRzLS1pbmZvX19pbWcnKSxcbiAgICAgICAgICAgIGluZm9UeHRDb250YWluZXIgPSAkKCcuZWxlY3Rpb24tbWljcm9zaXRlX19leHBlcnRzLS1pbmZvX190eHQnKSxcblxuXG4gICAgICAgICAgICBjbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBleHBlcnRzLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIGluZm9XcmFwcGVyLnJlbW92ZUNsYXNzKCdlbGVjdGlvbi1taWNyb3NpdGVfX2V4cGVydHMtLWluZm8td3JhcHBlci0tb3BlbicpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdCA9IGZ1bmN0aW9uIChleHBlcnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwZXJ0Lmhhc0NsYXNzKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwZXJ0cy5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZXhwZXJ0LmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICBpbmZvSW1nQ29udGFpbmVyLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgICAgIGluZm9UeHRDb250YWluZXIuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgaW5mb0ltZ0NvbnRhaW5lci5hcHBlbmQoZXhwZXJ0LmZpbmQoJy5pbWFnZSBpbWcnKS5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZm8gPSBleHBlcnQuZmluZCgnLmluZm8nKS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICBpbmZvVHh0Q29udGFpbmVyLmFwcGVuZChpbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgaW5mb1dyYXBwZXIuYWRkQ2xhc3MoJ2VsZWN0aW9uLW1pY3Jvc2l0ZV9fZXhwZXJ0cy0taW5mby13cmFwcGVyLS1vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogaW5mb1dyYXBwZXIub2Zmc2V0KCkudG9wXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAkKCcuZWxlY3Rpb24tbWljcm9zaXRlX19leHBlcnRzLS1pbmZvX19jbG9zZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBleHBlcnRzLmNsaWNrKGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2VsZWN0KCQodGhpcykpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyQod2luZG93KS5yZXNpemUoY2xvc2UpO1xuICAgIH0sXG5cbiAgICBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISQoJ2h0bWwnKS5oYXNDbGFzcygnbHQtaWU4JykpIHtcbiAgICAgICAgICAgIGluaXRFeHBlcnRzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbml0RXhwZXJ0c0lFNygpO1xuICAgICAgICB9XG4gICAgfTtcblxuZGVmZXIoaW5pdCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL2VsZWN0aW9uLW1pY3Jvc2l0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSA4Il0sInNvdXJjZVJvb3QiOiIifQ==