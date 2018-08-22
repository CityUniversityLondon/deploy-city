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
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
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

/***/ 69:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDY2M2ZmZmYyMDdjMTc0NTU5ODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBLDBCOzs7Ozs7O0FDSEE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx1Q0FBdUM7QUFDdkMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEc7Ozs7Ozs7QUNqQkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVFQUF1RSxhQUFhO0FBQ3BGLCtEQUErRCx5QkFBeUI7O0FBRXhGO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTiIsImZpbGUiOiJtb2R1bGVzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2OSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDY2M2ZmZmYyMDdjMTc0NTU5ODgiLCIvKipcbiAqIGV4cGVjdHMgalF1ZXJ5IHRvIGJlIHByb3ZpZGVkIGJ5IENJVFlfUi5qc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy4kO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDgiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJCA9IHJlcXVpcmUoJy4uL2xpYnMvanF1ZXJ5Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRlZmVycmVkRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBDSVRZICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgJChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LkNJVFlfT1BUSU9OUykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMgPSB7ZGVmZXI6IFtdfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDSVRZX09QVElPTlMuZGVmZXIucHVzaChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy91dGlscy9kZWZlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNiA3IDgiLCJ2YXIgJCA9IHJlcXVpcmUoJy4vbGlicy9qcXVlcnknKSxcbiAgICBkZWZlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmZXInKSxcblxuICAgIHNjcmVlbldpZHRoID0gLTEsXG4gICAgaW5NZCA9IHRydWUsXG4gICAgc2xpZGVyID0gbnVsbCxcbiAgICAkdyA9ICQod2luZG93KSxcblxuICAgIHVwZGF0ZU5ld3NTbGlkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkaG9tZU5ld3MgPSAkKCcuaG9tZS1uZXdzJyksXG4gICAgICAgICAgICB3aWR0aCA9IE1hdGgucm91bmQoJHcud2lkdGgoKSk7XG5cbiAgICAgICAgaWYgKHdpZHRoICE9PSBzY3JlZW5XaWR0aCkge1xuICAgICAgICAgICAgc2NyZWVuV2lkdGggPSB3aWR0aDtcblxuICAgICAgICAgICAgdmFyIG5ld0luTWQgPSBzY3JlZW5XaWR0aCA+PSA4NTA7XG4gICAgICAgICAgICBpZiAobmV3SW5NZCAhPT0gaW5NZCkge1xuICAgICAgICAgICAgICAgIGluTWQgPSBuZXdJbk1kO1xuXG4gICAgICAgICAgICAgICAgaWYgKGluTWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLmRlc3Ryb3lTbGlkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaG9tZU5ld3MuYWRkQ2xhc3MoJ3JvdycpLmF0dHIoJ3N0eWxlJywgJycpLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ2NvbC14cy0yNCBjb2wtbWQtOCcpLmNzcygnd2lkdGgnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlciA9ICRob21lTmV3cy5yZW1vdmVDbGFzcygncm93JykuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnY29sLXhzLTI0IGNvbC1tZC04JykuZW5kKCkuYnhTbGlkZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0hvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHRTd2lwZVg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdFN3aXBlWTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db250cm9sczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZUZXh0OiAnPHNwYW4gY2xhc3M9XCJiZyBmYSBmYS1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJpYyBmYSBmYS1jaGV2cm9uLWxlZnRcIiBhcmlhLWxhYmVsPVwicHJldmlvdXMgc2xpZGVcIj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUZXh0OiAnPHNwYW4gY2xhc3M9XCJiZyBmYSBmYS1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJpYyBmYSBmYS1jaGV2cm9uLXJpZ2h0XCIgYXJpYS1sYWJlbD1cIm5leHQgc2xpZGVcIj48L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5ob21lLWNvdXJzZS1maW5kZXIgLmRyb3Bkb3duLXNlbGVjdCcpLmNpdHlEcm9wZG93bigpO1xuICAgICAgICAkKCcuaG9tZS1uZXdzLWV2ZW50cyAuc3VibWVudSAuZHJvcGRvd24tc2VsZWN0JykuY2l0eURyb3Bkb3duKHtpc01lbnU6IHRydWV9KTtcbiAgICAgICAgJCgnLmhvbWUtbWVkaWEtcmliYm9uIC5lbWJlZC1jb250YWluZXInKS52aWRlb1ByZXZpZXcoe2NvbnRyb2xzOiAxLCBzaG93SW5mbzogMH0pO1xuXG4gICAgICAgICR3LnJlc2l6ZSh1cGRhdGVOZXdzU2xpZGVyKTtcbiAgICAgICAgdXBkYXRlTmV3c1NsaWRlcigpO1xuICAgIH07IC8vIGVuZCB2YXJpYWJsZXNcblxuXG5kZWZlcihpbml0KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvaG9tZS5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==