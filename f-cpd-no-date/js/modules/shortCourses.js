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
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
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

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

var defer = __webpack_require__(2),

    init = function() {

        // console.log('test');

        function initShortCourses() {
            var dropdownBlock = $('#shortcourse-dropdown');
            var dropdown = $('#shortcourse-dropdown select');
            var dropdownOptions = $('#shortcourse-dropdown option');
            var isCPD = ($('.shortcourse--cpd')[0]);

            updateStaticData();
            updateDynamicData();
            checkEmptyTestimonials();
            initTutorSlider();
    
            dropdown.change(function() {
                updateDynamicData();
            });
    
            function updateStaticData() {
                var selectedOption = dropdown.find(':selected');
    
                // remove dropdownBlock if dropdown is empty or if it only contains hidden dummy
                if (dropdownOptions.length == 0) {
                    dropdownBlock.remove();
                }
                else if (dropdownOptions.length == 1) {
                    if (selectedOption.data('startdatevis') == 'hide-date') {
                        dropdownBlock.remove();
                    }
                }
            }
    
            function updateDynamicData() {
                var selectedOption = dropdown.find(':selected');
                var deadlineFurther = 'No deadline, subject to availability';

                // console.log(selectedOption.data());
                // console.log(selectedOption.data().register);

                // Use Moment.js package to format date
                // var bookingDeadlineFormatted = moment(selectedOption.data('bookingdeadline')).format('ddd D MMM YYYY');
    
                $('#dynamic-subtext').html(selectedOption.data('startdatesubtext'));

                // If no presentation listings at all
                if (!(selectedOption.data()) || selectedOption.data().register) {
                    $('.start-date').css('display', 'none');
                    $('#dynamic-deadline-further').hide();
                    $("span[id^='dynamic-']").html('<span>To be confirmed</span>');
                    $('.shortcourse-keyinfo h2').css('border-bottom', '1px solid');
                    $('#not-set').html('<p>Dates and fees to be confirmed</p>');
                } else if (selectedOption.data('register') == 'yes') {
                    $('#dynamic-deadline-further').hide();
                    $("span[id^='dynamic-']").html('<span>To be confirmed</span>');
                    $('.shortcourse-keyinfo h2').css('border-bottom', '1px solid');
                    $('#not-set').html('<p>Dates and fees to be confirmed</p>');
                } else {
                    // $('#dynamic-deadline').hide().html(deadlineFurther).fadeIn();
                }
    
                // if storelink exists, display appropriate action button
                if (selectedOption.data('storelink') != null && selectedOption.data('storelink').trim() != '') {
                    var linkText = (selectedOption.data('register') == 'yes' ? 'Register interest <span><i class="fa fa-chevron-circle-right" /></span>' : 'Book now <span><i class="fa fa-chevron-circle-right" /></span>');
    
                    var storelink = selectedOption.data('storelink');
                    if (storelink.slice(-1) == '/') {
                        storelink = storelink.slice(0, -1);
                    }
                    $('#dynamic-action').html('<p class="cta hard-cta"><a href=' + storelink + '>' + linkText + '</a></p>');
                }
                else {
                    $('#dynamic-action').empty();
                }
    
                if (isCPD) { // key info - cpd courses
                    if (selectedOption.data('duration') == null || selectedOption.data('duration') == '') {
                       $('#cpd-duration-row').hide();
                    }
                    else {
                        $('#dynamic-duration').html(selectedOption.data('duration'));
                        $('#cpd-duration-row').show();
                    }
    
                    if (selectedOption.data('time') == null || selectedOption.data('time') == '') {
                       $('#cpd-time-row').hide();
                    }
                    else {
                        $('#dynamic-time').html(selectedOption.data('time'));
                        $('#cpd-time-row').show();
                    }
    
                    if (selectedOption.data('location') == null || selectedOption.data('location') == '') {
                       $('#cpd-location-row').hide();
                    }
                    else {
                        $('#dynamic-location').html(selectedOption.data('location'));
                        $('#cpd-location-row').show();
                    }
    
                    if (selectedOption.data('applyuntil') != null && selectedOption.data('applyuntil') != '') {
                       $('#dynamic-applyuntil').hide().html(selectedOption.data('applyuntil')).fadeIn();
                    }

                } else { // key info - short courses
                    $('#dynamic-duration').hide().html(selectedOption.data('duration')).fadeIn();
                    $('#dynamic-time').hide().html(selectedOption.data('time')).fadeIn();
                }

                // If days exist, print. If not, hide row
                if (selectedOption.data('days')) {
                    $('#days').show();
                    $('#dynamic-days').hide().html(selectedOption.data('days')).fadeIn();
                } else {
                    $('#days').hide();
                }
                $('#dynamic-code').hide().html(selectedOption.data('code')).fadeIn();
                $('#dynamic-fees').hide().html(selectedOption.data('fees')).fadeIn();
                $('#dynamic-location').hide().html(selectedOption.data('location')).fadeIn();

                // If deadline override metadata exists, print this data value instead of other fields
                if (selectedOption.data('bookingdeadlineoverride')) {
                    $('.row#booking-deadline').show();
                    $('#dynamic-deadline-further').hide();
                    $('#dynamic-deadline').hide().html(selectedOption.data('bookingdeadlineoverride')).fadeIn();
                } else {
                    $('.row#booking-deadline').hide();
                }
    
            }
    
            function checkEmptyTestimonials() {
                var thing = $('.shortcourse-testimonials').find('.course__profiles__item');
                if (thing.length == 0) {
                    $('.shortcourse-testimonials').addClass('shortcourse-testimonials--empty').removeClass('shortcourse-testimonials');
                }
                $('.shortcourse-testimonials-block').show();
                // Bug fix: define initial carousel dimensions otherwise won't load correctly
                $('.bx-viewport').css('height','auto');
                $('.course__profiles__item.course__profiles__item').css({
                    'width': '100vw',
                    'max-width': '1200px'
                });
            }
    
            function initTutorSlider() {
                var w = $('.shortcourse-tutor-profiles').width();
                var n = $('.shortcourse-tutor').length;
    
                if (n > 1) {
                    var fitAllWidth = w / n,
                        controls = n > 1,
                        minWidth = Math.max(300, fitAllWidth),
                        maxSlides = Math.max(1, Math.floor(w / minWidth)),
                        width = w / maxSlides;
    
                    $('.shortcourse-tutor-items').bxSlider({
                        pager: false,
                        controls: controls,
                        nextText: '<i class="fa fa-chevron-right"></i>',
                        prevText: '<i class="fa fa-chevron-left"></i>',
                        adaptiveHeight: true,
                        slideMargin: 0
                    });
    
                    $('.shortcourse-tutor-wrapper').addClass('shortcourse-tutor-selection');
                }
            }
    
        }
    
        initShortCourses()
    }

defer(init);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzE0ZTdmMTQ3MTliNjY2ODkyM2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvc2hvcnRDb3Vyc2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0EsMEI7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBLFlBQVksbUJBQU8sQ0FBQyxDQUFnQjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUNBQXVDO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7O0FDakJELFlBQVksbUJBQU8sQ0FBQyxDQUFlOztBQUVuQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxZIiwiZmlsZSI6Im1vZHVsZXMvc2hvcnRDb3Vyc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGMxNGU3ZjE0NzE5YjY2Njg5MjNkIiwiLyoqXG4gKiBleHBlY3RzIGpRdWVyeSB0byBiZSBwcm92aWRlZCBieSBDSVRZX1IuanNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuJDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL2xpYnMvanF1ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJCA9IHJlcXVpcmUoJy4uL2xpYnMvanF1ZXJ5Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRlZmVycmVkRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBDSVRZICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgJChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LkNJVFlfT1BUSU9OUykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMgPSB7ZGVmZXI6IFtdfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDSVRZX09QVElPTlMuZGVmZXIucHVzaChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy91dGlscy9kZWZlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNiA3IDggOSAxMCIsInZhciBkZWZlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmZXInKSxcblxuICAgIGluaXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGVzdCcpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGluaXRTaG9ydENvdXJzZXMoKSB7XG4gICAgICAgICAgICB2YXIgZHJvcGRvd25CbG9jayA9ICQoJyNzaG9ydGNvdXJzZS1kcm9wZG93bicpO1xuICAgICAgICAgICAgdmFyIGRyb3Bkb3duID0gJCgnI3Nob3J0Y291cnNlLWRyb3Bkb3duIHNlbGVjdCcpO1xuICAgICAgICAgICAgdmFyIGRyb3Bkb3duT3B0aW9ucyA9ICQoJyNzaG9ydGNvdXJzZS1kcm9wZG93biBvcHRpb24nKTtcbiAgICAgICAgICAgIHZhciBpc0NQRCA9ICgkKCcuc2hvcnRjb3Vyc2UtLWNwZCcpWzBdKTtcblxuICAgICAgICAgICAgdXBkYXRlU3RhdGljRGF0YSgpO1xuICAgICAgICAgICAgdXBkYXRlRHluYW1pY0RhdGEoKTtcbiAgICAgICAgICAgIGNoZWNrRW1wdHlUZXN0aW1vbmlhbHMoKTtcbiAgICAgICAgICAgIGluaXRUdXRvclNsaWRlcigpO1xuICAgIFxuICAgICAgICAgICAgZHJvcGRvd24uY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUR5bmFtaWNEYXRhKCk7XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVN0YXRpY0RhdGEoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gZHJvcGRvd24uZmluZCgnOnNlbGVjdGVkJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGRyb3Bkb3duQmxvY2sgaWYgZHJvcGRvd24gaXMgZW1wdHkgb3IgaWYgaXQgb25seSBjb250YWlucyBoaWRkZW4gZHVtbXlcbiAgICAgICAgICAgICAgICBpZiAoZHJvcGRvd25PcHRpb25zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQmxvY2sucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRyb3Bkb3duT3B0aW9ucy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRPcHRpb24uZGF0YSgnc3RhcnRkYXRldmlzJykgPT0gJ2hpZGUtZGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQmxvY2sucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVEeW5hbWljRGF0YSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBkcm9wZG93bi5maW5kKCc6c2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB2YXIgZGVhZGxpbmVGdXJ0aGVyID0gJ05vIGRlYWRsaW5lLCBzdWJqZWN0IHRvIGF2YWlsYWJpbGl0eSc7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZE9wdGlvbi5kYXRhKCkpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkT3B0aW9uLmRhdGEoKS5yZWdpc3Rlcik7XG5cbiAgICAgICAgICAgICAgICAvLyBVc2UgTW9tZW50LmpzIHBhY2thZ2UgdG8gZm9ybWF0IGRhdGVcbiAgICAgICAgICAgICAgICAvLyB2YXIgYm9va2luZ0RlYWRsaW5lRm9ybWF0dGVkID0gbW9tZW50KHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2Jvb2tpbmdkZWFkbGluZScpKS5mb3JtYXQoJ2RkZCBEIE1NTSBZWVlZJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtc3VidGV4dCcpLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnc3RhcnRkYXRlc3VidGV4dCcpKTtcblxuICAgICAgICAgICAgICAgIC8vIElmIG5vIHByZXNlbnRhdGlvbiBsaXN0aW5ncyBhdCBhbGxcbiAgICAgICAgICAgICAgICBpZiAoIShzZWxlY3RlZE9wdGlvbi5kYXRhKCkpIHx8IHNlbGVjdGVkT3B0aW9uLmRhdGEoKS5yZWdpc3Rlcikge1xuICAgICAgICAgICAgICAgICAgICAkKCcuc3RhcnQtZGF0ZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWRlYWRsaW5lLWZ1cnRoZXInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoXCJzcGFuW2lkXj0nZHluYW1pYy0nXVwiKS5odG1sKCc8c3Bhbj5UbyBiZSBjb25maXJtZWQ8L3NwYW4+Jyk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5zaG9ydGNvdXJzZS1rZXlpbmZvIGgyJykuY3NzKCdib3JkZXItYm90dG9tJywgJzFweCBzb2xpZCcpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjbm90LXNldCcpLmh0bWwoJzxwPkRhdGVzIGFuZCBmZWVzIHRvIGJlIGNvbmZpcm1lZDwvcD4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3JlZ2lzdGVyJykgPT0gJ3llcycpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtZGVhZGxpbmUtZnVydGhlcicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJChcInNwYW5baWRePSdkeW5hbWljLSddXCIpLmh0bWwoJzxzcGFuPlRvIGJlIGNvbmZpcm1lZDwvc3Bhbj4nKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNob3J0Y291cnNlLWtleWluZm8gaDInKS5jc3MoJ2JvcmRlci1ib3R0b20nLCAnMXB4IHNvbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNub3Qtc2V0JykuaHRtbCgnPHA+RGF0ZXMgYW5kIGZlZXMgdG8gYmUgY29uZmlybWVkPC9wPicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICQoJyNkeW5hbWljLWRlYWRsaW5lJykuaGlkZSgpLmh0bWwoZGVhZGxpbmVGdXJ0aGVyKS5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gaWYgc3RvcmVsaW5rIGV4aXN0cywgZGlzcGxheSBhcHByb3ByaWF0ZSBhY3Rpb24gYnV0dG9uXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3N0b3JlbGluaycpICE9IG51bGwgJiYgc2VsZWN0ZWRPcHRpb24uZGF0YSgnc3RvcmVsaW5rJykudHJpbSgpICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaW5rVGV4dCA9IChzZWxlY3RlZE9wdGlvbi5kYXRhKCdyZWdpc3RlcicpID09ICd5ZXMnID8gJ1JlZ2lzdGVyIGludGVyZXN0IDxzcGFuPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1jaXJjbGUtcmlnaHRcIiAvPjwvc3Bhbj4nIDogJ0Jvb2sgbm93IDxzcGFuPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1jaXJjbGUtcmlnaHRcIiAvPjwvc3Bhbj4nKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlbGluayA9IHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3N0b3JlbGluaycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcmVsaW5rLnNsaWNlKC0xKSA9PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlbGluayA9IHN0b3JlbGluay5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtYWN0aW9uJykuaHRtbCgnPHAgY2xhc3M9XCJjdGEgaGFyZC1jdGFcIj48YSBocmVmPScgKyBzdG9yZWxpbmsgKyAnPicgKyBsaW5rVGV4dCArICc8L2E+PC9wPicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtYWN0aW9uJykuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzQ1BEKSB7IC8vIGtleSBpbmZvIC0gY3BkIGNvdXJzZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2R1cmF0aW9uJykgPT0gbnVsbCB8fCBzZWxlY3RlZE9wdGlvbi5kYXRhKCdkdXJhdGlvbicpID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICQoJyNjcGQtZHVyYXRpb24tcm93JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtZHVyYXRpb24nKS5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2R1cmF0aW9uJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NwZC1kdXJhdGlvbi1yb3cnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3RpbWUnKSA9PSBudWxsIHx8IHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3RpbWUnKSA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAkKCcjY3BkLXRpbWUtcm93JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtdGltZScpLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgndGltZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjcGQtdGltZS1yb3cnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2xvY2F0aW9uJykgPT0gbnVsbCB8fCBzZWxlY3RlZE9wdGlvbi5kYXRhKCdsb2NhdGlvbicpID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICQoJyNjcGQtbG9jYXRpb24tcm93JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtbG9jYXRpb24nKS5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2xvY2F0aW9uJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NwZC1sb2NhdGlvbi1yb3cnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2FwcGx5dW50aWwnKSAhPSBudWxsICYmIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2FwcGx5dW50aWwnKSAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1hcHBseXVudGlsJykuaGlkZSgpLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnYXBwbHl1bnRpbCcpKS5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8ga2V5IGluZm8gLSBzaG9ydCBjb3Vyc2VzXG4gICAgICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWR1cmF0aW9uJykuaGlkZSgpLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnZHVyYXRpb24nKSkuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLXRpbWUnKS5oaWRlKCkuaHRtbChzZWxlY3RlZE9wdGlvbi5kYXRhKCd0aW1lJykpLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIGRheXMgZXhpc3QsIHByaW50LiBJZiBub3QsIGhpZGUgcm93XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2RheXMnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjZGF5cycpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtZGF5cycpLmhpZGUoKS5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2RheXMnKSkuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2RheXMnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWNvZGUnKS5oaWRlKCkuaHRtbChzZWxlY3RlZE9wdGlvbi5kYXRhKCdjb2RlJykpLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWZlZXMnKS5oaWRlKCkuaHRtbChzZWxlY3RlZE9wdGlvbi5kYXRhKCdmZWVzJykpLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWxvY2F0aW9uJykuaGlkZSgpLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnbG9jYXRpb24nKSkuZmFkZUluKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBkZWFkbGluZSBvdmVycmlkZSBtZXRhZGF0YSBleGlzdHMsIHByaW50IHRoaXMgZGF0YSB2YWx1ZSBpbnN0ZWFkIG9mIG90aGVyIGZpZWxkc1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbi5kYXRhKCdib29raW5nZGVhZGxpbmVvdmVycmlkZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5yb3cjYm9va2luZy1kZWFkbGluZScpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtZGVhZGxpbmUtZnVydGhlcicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtZGVhZGxpbmUnKS5oaWRlKCkuaHRtbChzZWxlY3RlZE9wdGlvbi5kYXRhKCdib29raW5nZGVhZGxpbmVvdmVycmlkZScpKS5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCcucm93I2Jvb2tpbmctZGVhZGxpbmUnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tFbXB0eVRlc3RpbW9uaWFscygpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpbmcgPSAkKCcuc2hvcnRjb3Vyc2UtdGVzdGltb25pYWxzJykuZmluZCgnLmNvdXJzZV9fcHJvZmlsZXNfX2l0ZW0nKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpbmcubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNob3J0Y291cnNlLXRlc3RpbW9uaWFscycpLmFkZENsYXNzKCdzaG9ydGNvdXJzZS10ZXN0aW1vbmlhbHMtLWVtcHR5JykucmVtb3ZlQ2xhc3MoJ3Nob3J0Y291cnNlLXRlc3RpbW9uaWFscycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKCcuc2hvcnRjb3Vyc2UtdGVzdGltb25pYWxzLWJsb2NrJykuc2hvdygpO1xuICAgICAgICAgICAgICAgIC8vIEJ1ZyBmaXg6IGRlZmluZSBpbml0aWFsIGNhcm91c2VsIGRpbWVuc2lvbnMgb3RoZXJ3aXNlIHdvbid0IGxvYWQgY29ycmVjdGx5XG4gICAgICAgICAgICAgICAgJCgnLmJ4LXZpZXdwb3J0JykuY3NzKCdoZWlnaHQnLCdhdXRvJyk7XG4gICAgICAgICAgICAgICAgJCgnLmNvdXJzZV9fcHJvZmlsZXNfX2l0ZW0uY291cnNlX19wcm9maWxlc19faXRlbScpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6ICcxMDB2dycsXG4gICAgICAgICAgICAgICAgICAgICdtYXgtd2lkdGgnOiAnMTIwMHB4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gaW5pdFR1dG9yU2xpZGVyKCkge1xuICAgICAgICAgICAgICAgIHZhciB3ID0gJCgnLnNob3J0Y291cnNlLXR1dG9yLXByb2ZpbGVzJykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICB2YXIgbiA9ICQoJy5zaG9ydGNvdXJzZS10dXRvcicpLmxlbmd0aDtcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAobiA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpdEFsbFdpZHRoID0gdyAvIG4sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9scyA9IG4gPiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGggPSBNYXRoLm1heCgzMDAsIGZpdEFsbFdpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFNsaWRlcyA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodyAvIG1pbldpZHRoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHcgLyBtYXhTbGlkZXM7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICQoJy5zaG9ydGNvdXJzZS10dXRvci1pdGVtcycpLmJ4U2xpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBjb250cm9scyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlTWFyZ2luOiAwXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAkKCcuc2hvcnRjb3Vyc2UtdHV0b3Itd3JhcHBlcicpLmFkZENsYXNzKCdzaG9ydGNvdXJzZS10dXRvci1zZWxlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaW5pdFNob3J0Q291cnNlcygpXG4gICAgfVxuXG5kZWZlcihpbml0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL3Nob3J0Q291cnNlcy5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==