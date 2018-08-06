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
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
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

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(1),
    defer = __webpack_require__(2),

    screenWidth = -1,
    inMd = true,
    slider = null,
    $w = $(window),

    updateNewsSlider = function () {
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
    init = function () {
        $('.home-course-finder .dropdown-select').cityDropdown();
        $('.home-news-events .submenu .dropdown-select').cityDropdown({isMenu: true});
        $('.home-media-ribbon .embed-container').videoPreview({controls: 1, showInfo: 0});

        $w.resize(updateNewsSlider);
        updateNewsSlider();
    }; // end variables


defer(init);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2M3MmRiMmZkNzYzM2QxYjZiN2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBLDBCOzs7Ozs7O0FDSEE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx1Q0FBdUM7QUFDdkMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEc7Ozs7Ozs7QUNqQkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVFQUF1RSxhQUFhO0FBQ3BGLCtEQUErRCx5QkFBeUI7O0FBRXhGO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTiIsImZpbGUiOiJtb2R1bGVzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2NSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2M3MmRiMmZkNzYzM2QxYjZiN2IiLCIvKipcbiAqIGV4cGVjdHMgalF1ZXJ5IHRvIGJlIHByb3ZpZGVkIGJ5IENJVFlfUi5qc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy4kO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICQgPSByZXF1aXJlKCcuLi9saWJzL2pxdWVyeScpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkZWZlcnJlZEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgQ0lUWSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICQoZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TID0ge2RlZmVyOiBbXX07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlciA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ0lUWV9PUFRJT05TLmRlZmVyLnB1c2goZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDYgNyIsInZhciAkID0gcmVxdWlyZSgnLi9saWJzL2pxdWVyeScpLFxuICAgIGRlZmVyID0gcmVxdWlyZSgnLi91dGlscy9kZWZlcicpLFxuXG4gICAgc2NyZWVuV2lkdGggPSAtMSxcbiAgICBpbk1kID0gdHJ1ZSxcbiAgICBzbGlkZXIgPSBudWxsLFxuICAgICR3ID0gJCh3aW5kb3cpLFxuXG4gICAgdXBkYXRlTmV3c1NsaWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRob21lTmV3cyA9ICQoJy5ob21lLW5ld3MnKSxcbiAgICAgICAgICAgIHdpZHRoID0gTWF0aC5yb3VuZCgkdy53aWR0aCgpKTtcblxuICAgICAgICBpZiAod2lkdGggIT09IHNjcmVlbldpZHRoKSB7XG4gICAgICAgICAgICBzY3JlZW5XaWR0aCA9IHdpZHRoO1xuXG4gICAgICAgICAgICB2YXIgbmV3SW5NZCA9IHNjcmVlbldpZHRoID49IDg1MDtcbiAgICAgICAgICAgIGlmIChuZXdJbk1kICE9PSBpbk1kKSB7XG4gICAgICAgICAgICAgICAgaW5NZCA9IG5ld0luTWQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5NZCkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXIuZGVzdHJveVNsaWRlcigpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRob21lTmV3cy5hZGRDbGFzcygncm93JykuYXR0cignc3R5bGUnLCAnJykuY2hpbGRyZW4oKS5hZGRDbGFzcygnY29sLXhzLTI0IGNvbC1tZC04JykuY3NzKCd3aWR0aCcsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyID0gJGhvbWVOZXdzLnJlbW92ZUNsYXNzKCdyb3cnKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdjb2wteHMtMjQgY29sLW1kLTgnKS5lbmQoKS5ieFNsaWRlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvSG92ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaEVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdFN3aXBlWDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0U3dpcGVZOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlRleHQ6ICc8c3BhbiBjbGFzcz1cImJnIGZhIGZhLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cImljIGZhIGZhLWNoZXZyb24tbGVmdFwiIGFyaWEtbGFiZWw9XCJwcmV2aW91cyBzbGlkZVwiPjwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRleHQ6ICc8c3BhbiBjbGFzcz1cImJnIGZhIGZhLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cImljIGZhIGZhLWNoZXZyb24tcmlnaHRcIiBhcmlhLWxhYmVsPVwibmV4dCBzbGlkZVwiPjwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmhvbWUtY291cnNlLWZpbmRlciAuZHJvcGRvd24tc2VsZWN0JykuY2l0eURyb3Bkb3duKCk7XG4gICAgICAgICQoJy5ob21lLW5ld3MtZXZlbnRzIC5zdWJtZW51IC5kcm9wZG93bi1zZWxlY3QnKS5jaXR5RHJvcGRvd24oe2lzTWVudTogdHJ1ZX0pO1xuICAgICAgICAkKCcuaG9tZS1tZWRpYS1yaWJib24gLmVtYmVkLWNvbnRhaW5lcicpLnZpZGVvUHJldmlldyh7Y29udHJvbHM6IDEsIHNob3dJbmZvOiAwfSk7XG5cbiAgICAgICAgJHcucmVzaXplKHVwZGF0ZU5ld3NTbGlkZXIpO1xuICAgICAgICB1cGRhdGVOZXdzU2xpZGVyKCk7XG4gICAgfTsgLy8gZW5kIHZhcmlhYmxlc1xuXG5cbmRlZmVyKGluaXQpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy9ob21lLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiXSwic291cmNlUm9vdCI6IiJ9