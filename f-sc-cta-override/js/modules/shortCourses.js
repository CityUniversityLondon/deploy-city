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

                // Use wMoment.js package to format date
                // var bookingDeadlineFormatted = moment(selectedOption.data('bookingdeadline')).format('ddd D MMM YYYY');
    
                $('#dynamic-subtext').html(selectedOption.data('startdatesubtext'));

                // If no presentation listings at all
                if (!(selectedOption.data()) || selectedOption.data().startdatevis == 'hide-date') {
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
                    // If both CTA override text AND CTA override link is not empty, display CTA with customised override text and link
                } else if (selectedOption.data('ctaoverridelink') !== '' && selectedOption.data('ctaoverridetext') !== '') {
                    var ctaoverridelink = selectedOption.data('ctaoverridelink');
                    var ctaoverridetext = selectedOption.data('ctaoverridetext');
                    $('#dynamic-action').html('<p class="cta hard-cta"><a href=' + ctaoverridelink + '>' + ctaoverridetext + '</a></p>');
                }
    
                // if storelink exists, display appropriate action button
                if (selectedOption.data('storelink') != null && selectedOption.data('storelink').trim() != '' && (selectedOption.data('ctaoverridelink') == '' || selectedOption.data('ctaoverridetext') == '')) {
                    var linkText = (selectedOption.data('register') == 'yes' ? 'Register interest <span><i class="fa fa-chevron-circle-right" /></span>' : 'Book now <span><i class="fa fa-chevron-circle-right" /></span>');
    
                    var storelink = selectedOption.data('storelink');
                    if (storelink.slice(-1) == '/') {
                        storelink = storelink.slice(0, -1);
                    }
                    $('#dynamic-action').html('<p class="cta hard-cta"><a href=' + storelink + '>' + linkText + '</a></p>');
                } 
                else {
                    // $('#dynamic-action').empty();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGI2NGQwZDZmZjgxZmUwNjBiYTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvc2hvcnRDb3Vyc2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0EsMEI7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBLFlBQVksbUJBQU8sQ0FBQyxDQUFnQjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUNBQXVDO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7O0FDakJELFlBQVksbUJBQU8sQ0FBQyxDQUFlOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsWSIsImZpbGUiOiJtb2R1bGVzL3Nob3J0Q291cnNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkYjY0ZDBkNmZmODFmZTA2MGJhMCIsIi8qKlxuICogZXhwZWN0cyBqUXVlcnkgdG8gYmUgcHJvdmlkZWQgYnkgQ0lUWV9SLmpzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LiQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy9saWJzL2pxdWVyeS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICQgPSByZXF1aXJlKCcuLi9saWJzL2pxdWVyeScpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkZWZlcnJlZEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgQ0lUWSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICQoZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TID0ge2RlZmVyOiBbXX07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlciA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ0lUWV9PUFRJT05TLmRlZmVyLnB1c2goZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDYgNyA4IDkgMTAiLCJ2YXIgZGVmZXIgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmVyJyksXG5cbiAgICBpbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdFNob3J0Q291cnNlcygpIHtcbiAgICAgICAgICAgIHZhciBkcm9wZG93bkJsb2NrID0gJCgnI3Nob3J0Y291cnNlLWRyb3Bkb3duJyk7XG4gICAgICAgICAgICB2YXIgZHJvcGRvd24gPSAkKCcjc2hvcnRjb3Vyc2UtZHJvcGRvd24gc2VsZWN0Jyk7XG4gICAgICAgICAgICB2YXIgZHJvcGRvd25PcHRpb25zID0gJCgnI3Nob3J0Y291cnNlLWRyb3Bkb3duIG9wdGlvbicpO1xuICAgICAgICAgICAgdmFyIGlzQ1BEID0gKCQoJy5zaG9ydGNvdXJzZS0tY3BkJylbMF0pO1xuXG4gICAgICAgICAgICB1cGRhdGVTdGF0aWNEYXRhKCk7XG4gICAgICAgICAgICB1cGRhdGVEeW5hbWljRGF0YSgpO1xuICAgICAgICAgICAgY2hlY2tFbXB0eVRlc3RpbW9uaWFscygpO1xuICAgICAgICAgICAgaW5pdFR1dG9yU2xpZGVyKCk7XG4gICAgXG4gICAgICAgICAgICBkcm9wZG93bi5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRHluYW1pY0RhdGEoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlU3RhdGljRGF0YSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBkcm9wZG93bi5maW5kKCc6c2VsZWN0ZWQnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZHJvcGRvd25CbG9jayBpZiBkcm9wZG93biBpcyBlbXB0eSBvciBpZiBpdCBvbmx5IGNvbnRhaW5zIGhpZGRlbiBkdW1teVxuICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bk9wdGlvbnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25CbG9jay5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZHJvcGRvd25PcHRpb25zLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbi5kYXRhKCdzdGFydGRhdGV2aXMnKSA9PSAnaGlkZS1kYXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25CbG9jay5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUR5bmFtaWNEYXRhKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9IGRyb3Bkb3duLmZpbmQoJzpzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHZhciBkZWFkbGluZUZ1cnRoZXIgPSAnTm8gZGVhZGxpbmUsIHN1YmplY3QgdG8gYXZhaWxhYmlsaXR5JztcblxuICAgICAgICAgICAgICAgIC8vIFVzZSB3TW9tZW50LmpzIHBhY2thZ2UgdG8gZm9ybWF0IGRhdGVcbiAgICAgICAgICAgICAgICAvLyB2YXIgYm9va2luZ0RlYWRsaW5lRm9ybWF0dGVkID0gbW9tZW50KHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2Jvb2tpbmdkZWFkbGluZScpKS5mb3JtYXQoJ2RkZCBEIE1NTSBZWVlZJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtc3VidGV4dCcpLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnc3RhcnRkYXRlc3VidGV4dCcpKTtcblxuICAgICAgICAgICAgICAgIC8vIElmIG5vIHByZXNlbnRhdGlvbiBsaXN0aW5ncyBhdCBhbGxcbiAgICAgICAgICAgICAgICBpZiAoIShzZWxlY3RlZE9wdGlvbi5kYXRhKCkpIHx8IHNlbGVjdGVkT3B0aW9uLmRhdGEoKS5zdGFydGRhdGV2aXMgPT0gJ2hpZGUtZGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnN0YXJ0LWRhdGUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1kZWFkbGluZS1mdXJ0aGVyJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKFwic3BhbltpZF49J2R5bmFtaWMtJ11cIikuaHRtbCgnPHNwYW4+VG8gYmUgY29uZmlybWVkPC9zcGFuPicpO1xuICAgICAgICAgICAgICAgICAgICAkKCcuc2hvcnRjb3Vyc2Uta2V5aW5mbyBoMicpLmNzcygnYm9yZGVyLWJvdHRvbScsICcxcHggc29saWQnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI25vdC1zZXQnKS5odG1sKCc8cD5EYXRlcyBhbmQgZmVlcyB0byBiZSBjb25maXJtZWQ8L3A+Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZE9wdGlvbi5kYXRhKCdyZWdpc3RlcicpID09ICd5ZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWRlYWRsaW5lLWZ1cnRoZXInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoXCJzcGFuW2lkXj0nZHluYW1pYy0nXVwiKS5odG1sKCc8c3Bhbj5UbyBiZSBjb25maXJtZWQ8L3NwYW4+Jyk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5zaG9ydGNvdXJzZS1rZXlpbmZvIGgyJykuY3NzKCdib3JkZXItYm90dG9tJywgJzFweCBzb2xpZCcpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjbm90LXNldCcpLmh0bWwoJzxwPkRhdGVzIGFuZCBmZWVzIHRvIGJlIGNvbmZpcm1lZDwvcD4nKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgYm90aCBDVEEgb3ZlcnJpZGUgdGV4dCBBTkQgQ1RBIG92ZXJyaWRlIGxpbmsgaXMgbm90IGVtcHR5LCBkaXNwbGF5IENUQSB3aXRoIGN1c3RvbWlzZWQgb3ZlcnJpZGUgdGV4dCBhbmQgbGlua1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRPcHRpb24uZGF0YSgnY3Rhb3ZlcnJpZGVsaW5rJykgIT09ICcnICYmIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2N0YW92ZXJyaWRldGV4dCcpICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3Rhb3ZlcnJpZGVsaW5rID0gc2VsZWN0ZWRPcHRpb24uZGF0YSgnY3Rhb3ZlcnJpZGVsaW5rJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdGFvdmVycmlkZXRleHQgPSBzZWxlY3RlZE9wdGlvbi5kYXRhKCdjdGFvdmVycmlkZXRleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtYWN0aW9uJykuaHRtbCgnPHAgY2xhc3M9XCJjdGEgaGFyZC1jdGFcIj48YSBocmVmPScgKyBjdGFvdmVycmlkZWxpbmsgKyAnPicgKyBjdGFvdmVycmlkZXRleHQgKyAnPC9hPjwvcD4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gaWYgc3RvcmVsaW5rIGV4aXN0cywgZGlzcGxheSBhcHByb3ByaWF0ZSBhY3Rpb24gYnV0dG9uXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3N0b3JlbGluaycpICE9IG51bGwgJiYgc2VsZWN0ZWRPcHRpb24uZGF0YSgnc3RvcmVsaW5rJykudHJpbSgpICE9ICcnICYmIChzZWxlY3RlZE9wdGlvbi5kYXRhKCdjdGFvdmVycmlkZWxpbmsnKSA9PSAnJyB8fCBzZWxlY3RlZE9wdGlvbi5kYXRhKCdjdGFvdmVycmlkZXRleHQnKSA9PSAnJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmtUZXh0ID0gKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3JlZ2lzdGVyJykgPT0gJ3llcycgPyAnUmVnaXN0ZXIgaW50ZXJlc3QgPHNwYW4+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWNpcmNsZS1yaWdodFwiIC8+PC9zcGFuPicgOiAnQm9vayBub3cgPHNwYW4+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWNpcmNsZS1yaWdodFwiIC8+PC9zcGFuPicpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmVsaW5rID0gc2VsZWN0ZWRPcHRpb24uZGF0YSgnc3RvcmVsaW5rJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9yZWxpbmsuc2xpY2UoLTEpID09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVsaW5rID0gc3RvcmVsaW5rLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1hY3Rpb24nKS5odG1sKCc8cCBjbGFzcz1cImN0YSBoYXJkLWN0YVwiPjxhIGhyZWY9JyArIHN0b3JlbGluayArICc+JyArIGxpbmtUZXh0ICsgJzwvYT48L3A+Jyk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gJCgnI2R5bmFtaWMtYWN0aW9uJykuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzQ1BEKSB7IC8vIGtleSBpbmZvIC0gY3BkIGNvdXJzZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2R1cmF0aW9uJykgPT0gbnVsbCB8fCBzZWxlY3RlZE9wdGlvbi5kYXRhKCdkdXJhdGlvbicpID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICQoJyNjcGQtZHVyYXRpb24tcm93JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtZHVyYXRpb24nKS5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2R1cmF0aW9uJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NwZC1kdXJhdGlvbi1yb3cnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3RpbWUnKSA9PSBudWxsIHx8IHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3RpbWUnKSA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAkKCcjY3BkLXRpbWUtcm93JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtdGltZScpLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgndGltZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjcGQtdGltZS1yb3cnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2xvY2F0aW9uJykgPT0gbnVsbCB8fCBzZWxlY3RlZE9wdGlvbi5kYXRhKCdsb2NhdGlvbicpID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICQoJyNjcGQtbG9jYXRpb24tcm93JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtbG9jYXRpb24nKS5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2xvY2F0aW9uJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NwZC1sb2NhdGlvbi1yb3cnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2FwcGx5dW50aWwnKSAhPSBudWxsICYmIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2FwcGx5dW50aWwnKSAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1hcHBseXVudGlsJykuaGlkZSgpLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnYXBwbHl1bnRpbCcpKS5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8ga2V5IGluZm8gLSBzaG9ydCBjb3Vyc2VzXG4gICAgICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWR1cmF0aW9uJykuaGlkZSgpLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnZHVyYXRpb24nKSkuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLXRpbWUnKS5oaWRlKCkuaHRtbChzZWxlY3RlZE9wdGlvbi5kYXRhKCd0aW1lJykpLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIGRheXMgZXhpc3QsIHByaW50LiBJZiBub3QsIGhpZGUgcm93XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2RheXMnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjZGF5cycpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtZGF5cycpLmhpZGUoKS5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2RheXMnKSkuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2RheXMnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWNvZGUnKS5oaWRlKCkuaHRtbChzZWxlY3RlZE9wdGlvbi5kYXRhKCdjb2RlJykpLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWZlZXMnKS5oaWRlKCkuaHRtbChzZWxlY3RlZE9wdGlvbi5kYXRhKCdmZWVzJykpLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWxvY2F0aW9uJykuaGlkZSgpLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnbG9jYXRpb24nKSkuZmFkZUluKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBkZWFkbGluZSBvdmVycmlkZSBtZXRhZGF0YSBleGlzdHMsIHByaW50IHRoaXMgZGF0YSB2YWx1ZSBpbnN0ZWFkIG9mIG90aGVyIGZpZWxkc1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbi5kYXRhKCdib29raW5nZGVhZGxpbmVvdmVycmlkZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5yb3cjYm9va2luZy1kZWFkbGluZScpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtZGVhZGxpbmUtZnVydGhlcicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtZGVhZGxpbmUnKS5oaWRlKCkuaHRtbChzZWxlY3RlZE9wdGlvbi5kYXRhKCdib29raW5nZGVhZGxpbmVvdmVycmlkZScpKS5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCcucm93I2Jvb2tpbmctZGVhZGxpbmUnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tFbXB0eVRlc3RpbW9uaWFscygpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpbmcgPSAkKCcuc2hvcnRjb3Vyc2UtdGVzdGltb25pYWxzJykuZmluZCgnLmNvdXJzZV9fcHJvZmlsZXNfX2l0ZW0nKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpbmcubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNob3J0Y291cnNlLXRlc3RpbW9uaWFscycpLmFkZENsYXNzKCdzaG9ydGNvdXJzZS10ZXN0aW1vbmlhbHMtLWVtcHR5JykucmVtb3ZlQ2xhc3MoJ3Nob3J0Y291cnNlLXRlc3RpbW9uaWFscycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKCcuc2hvcnRjb3Vyc2UtdGVzdGltb25pYWxzLWJsb2NrJykuc2hvdygpO1xuICAgICAgICAgICAgICAgIC8vIEJ1ZyBmaXg6IGRlZmluZSBpbml0aWFsIGNhcm91c2VsIGRpbWVuc2lvbnMgb3RoZXJ3aXNlIHdvbid0IGxvYWQgY29ycmVjdGx5XG4gICAgICAgICAgICAgICAgJCgnLmJ4LXZpZXdwb3J0JykuY3NzKCdoZWlnaHQnLCdhdXRvJyk7XG4gICAgICAgICAgICAgICAgJCgnLmNvdXJzZV9fcHJvZmlsZXNfX2l0ZW0uY291cnNlX19wcm9maWxlc19faXRlbScpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6ICcxMDB2dycsXG4gICAgICAgICAgICAgICAgICAgICdtYXgtd2lkdGgnOiAnMTIwMHB4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gaW5pdFR1dG9yU2xpZGVyKCkge1xuICAgICAgICAgICAgICAgIHZhciB3ID0gJCgnLnNob3J0Y291cnNlLXR1dG9yLXByb2ZpbGVzJykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICB2YXIgbiA9ICQoJy5zaG9ydGNvdXJzZS10dXRvcicpLmxlbmd0aDtcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAobiA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpdEFsbFdpZHRoID0gdyAvIG4sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9scyA9IG4gPiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGggPSBNYXRoLm1heCgzMDAsIGZpdEFsbFdpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFNsaWRlcyA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodyAvIG1pbldpZHRoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHcgLyBtYXhTbGlkZXM7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICQoJy5zaG9ydGNvdXJzZS10dXRvci1pdGVtcycpLmJ4U2xpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBjb250cm9scyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlTWFyZ2luOiAwXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAkKCcuc2hvcnRjb3Vyc2UtdHV0b3Itd3JhcHBlcicpLmFkZENsYXNzKCdzaG9ydGNvdXJzZS10dXRvci1zZWxlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaW5pdFNob3J0Q291cnNlcygpXG4gICAgfVxuXG5kZWZlcihpbml0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL3Nob3J0Q291cnNlcy5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==