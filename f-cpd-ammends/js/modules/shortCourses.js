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
            var isCPD = $('.shortcourse--cpd')[0];

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
                } else if (dropdownOptions.length == 1) {
                    if (selectedOption.data('startdatevis') == 'hide-date') {
                        dropdownBlock.remove();
                    }
                }
            }

            function updateDynamicData() {
                var selectedOption = dropdown.find(':selected');
                var deadlineFurther = 'No deadline, subject to availability';

                // Use Moment.js package to format date
                // var bookingDeadlineFormatted = moment(selectedOption.data('bookingdeadline')).format('ddd D MMM YYYY');

                $('#dynamic-subtext').html(
                    selectedOption.data('startdatesubtext')
                );

                // If no presentation listings at all
                if (!selectedOption.data()) {
                    console.log('this!!!!');
                    $('#dynamic-deadline-further').hide();
                    $("span[id^='dynamic-']").html(
                        '<span>To be confirmed</span>'
                    );
                    $('#not-set').html(selectedOption.data('startdatesubtext'));
                } else if (selectedOption.data().startdatevis == 'hide-date') {
                    $('.start-date').css('display', 'none');
                    $('#dynamic-deadline-further').hide();
                    $("span[id^='dynamic-']").html(
                        '<span>To be confirmed</span>'
                    );
                    $('.shortcourse-keyinfo h2').css(
                        'border-bottom',
                        '1px solid'
                    );

                    $('#not-set').html(selectedOption.data('startdatesubtext'));
                    //$('#not-set').html('<p>Dates to be confirmed</p>');
                } else if (selectedOption.data('register') == 'yes') {
                    $('#dynamic-deadline-further').hide();
                    $("span[id^='dynamic-']").html(
                        '<span>To be confirmed</span>'
                    );
                    $('.shortcourse-keyinfo h2').css(
                        'border-bottom',
                        '1px solid'
                    );
                    $('#not-set').html(selectedOption.data('startdatesubtext'));
                    //$('#not-set').html('<p>Dates to be confirmed!</p>');
                } else {
                    // $('#dynamic-deadline').hide().html(deadlineFurther).fadeIn();
                }

                // if storelink exists, display appropriate action button
                if (
                    selectedOption.data('storelink') != null &&
                    selectedOption.data('storelink').trim() != ''
                ) {
                    var linkText =
                        selectedOption.data('register') == 'yes'
                            ? 'Register interest <span><i class="fa fa-chevron-circle-right" /></span>'
                            : 'Book now <span><i class="fa fa-chevron-circle-right" /></span>';

                    var storelink = selectedOption.data('storelink');
                    if (storelink.slice(-1) == '/') {
                        storelink = storelink.slice(0, -1);
                    }
                    $('#dynamic-action').html(
                        '<p class="cta hard-cta"><a href=' +
                            storelink +
                            '>' +
                            linkText +
                            '</a></p>'
                    );
                } else {
                    $('#dynamic-action').empty();
                }

                if (isCPD) {
                    //
                    // key info - cpd courses
                    //
                    if (
                        selectedOption.data('duration') == null ||
                        selectedOption.data('duration') == ''
                    ) {
                        $('#cpd-duration-row').hide();
                    } else {
                        $('#dynamic-duration').html(
                            selectedOption.data('duration')
                        );
                        $('#cpd-duration-row').show();
                    }

                    if (
                        selectedOption.data('time') == null ||
                        selectedOption.data('time') == ''
                    ) {
                        $('#cpd-time-row').hide();
                    } else {
                        $('#dynamic-time').html(selectedOption.data('time'));
                        $('#cpd-time-row').show();
                    }

                    if (
                        selectedOption.data('location') == null ||
                        selectedOption.data('location') == ''
                    ) {
                        $('#cpd-location-row').hide();
                    } else {
                        $('#dynamic-location').html(
                            selectedOption.data('location')
                        );
                        $('#cpd-location-row').show();
                    }

                    if (
                        selectedOption.data('applyuntil') != null &&
                        selectedOption.data('applyuntil') != ''
                    ) {
                        $('#dynamic-applyuntil')
                            .hide()
                            .html(selectedOption.data('applyuntil'))
                            .fadeIn();
                    }
                } else {
                    //
                    // key info - short courses
                    //
                    $('#dynamic-duration')
                        .hide()
                        .html(selectedOption.data('duration'))
                        .fadeIn();
                    $('#dynamic-time')
                        .hide()
                        .html(selectedOption.data('time'))
                        .fadeIn();
                }

                // If days exist, print. If not, hide row
                if (selectedOption.data('days')) {
                    $('#days').show();
                    $('#dynamic-days')
                        .hide()
                        .html(selectedOption.data('days'))
                        .fadeIn();
                } else {
                    $('#days').hide();
                }
                $('#dynamic-code')
                    .hide()
                    .html(selectedOption.data('code'))
                    .fadeIn();
                $('#dynamic-fees')
                    .hide()
                    .html(selectedOption.data('fees'))
                    .fadeIn();
                $('#dynamic-location')
                    .hide()
                    .html(selectedOption.data('location'))
                    .fadeIn();

                // If deadline override metadata exists, print this data value instead of other fields
                if (selectedOption.data('bookingdeadlineoverride')) {
                    $('.row#booking-deadline').show();
                    $('#dynamic-deadline-further').hide();
                    $('#dynamic-deadline')
                        .hide()
                        .html(selectedOption.data('bookingdeadlineoverride'))
                        .fadeIn();
                } else {
                    $('.row#booking-deadline').hide();
                }
            }

            function checkEmptyTestimonials() {
                var thing = $('.shortcourse-testimonials').find(
                    '.course__profiles__item'
                );
                if (thing.length == 0) {
                    $('.shortcourse-testimonials')
                        .addClass('shortcourse-testimonials--empty')
                        .removeClass('shortcourse-testimonials');
                }
                $('.shortcourse-testimonials-block').show();
                // Bug fix: define initial carousel dimensions otherwise won't load correctly
                $('.bx-viewport').css('height', 'auto');
                $('.course__profiles__item.course__profiles__item').css({
                    width: '100vw',
                    'max-width': '1200px',
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
                        slideMargin: 0,
                    });

                    $('.shortcourse-tutor-wrapper').addClass(
                        'shortcourse-tutor-selection'
                    );
                }
            }
        }

        initShortCourses();
    };

defer(init);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2U4M2ZjNzE4MGE2Mzk5Nzk3OWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvc2hvcnRDb3Vyc2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0EsMEI7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBLFlBQVksbUJBQU8sQ0FBQyxDQUFnQjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUNBQXVDO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7O0FDakJELFlBQVksbUJBQU8sQ0FBQyxDQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsImZpbGUiOiJtb2R1bGVzL3Nob3J0Q291cnNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzZTgzZmM3MTgwYTYzOTk3OTc5ZiIsIi8qKlxuICogZXhwZWN0cyBqUXVlcnkgdG8gYmUgcHJvdmlkZWQgYnkgQ0lUWV9SLmpzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LiQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy9saWJzL2pxdWVyeS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICQgPSByZXF1aXJlKCcuLi9saWJzL2pxdWVyeScpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkZWZlcnJlZEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgQ0lUWSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICQoZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TID0ge2RlZmVyOiBbXX07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlciA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ0lUWV9PUFRJT05TLmRlZmVyLnB1c2goZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDYgNyA4IDkgMTAiLCJ2YXIgZGVmZXIgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmVyJyksXG4gICAgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmdW5jdGlvbiBpbml0U2hvcnRDb3Vyc2VzKCkge1xuICAgICAgICAgICAgdmFyIGRyb3Bkb3duQmxvY2sgPSAkKCcjc2hvcnRjb3Vyc2UtZHJvcGRvd24nKTtcbiAgICAgICAgICAgIHZhciBkcm9wZG93biA9ICQoJyNzaG9ydGNvdXJzZS1kcm9wZG93biBzZWxlY3QnKTtcbiAgICAgICAgICAgIHZhciBkcm9wZG93bk9wdGlvbnMgPSAkKCcjc2hvcnRjb3Vyc2UtZHJvcGRvd24gb3B0aW9uJyk7XG4gICAgICAgICAgICB2YXIgaXNDUEQgPSAkKCcuc2hvcnRjb3Vyc2UtLWNwZCcpWzBdO1xuXG4gICAgICAgICAgICB1cGRhdGVTdGF0aWNEYXRhKCk7XG4gICAgICAgICAgICB1cGRhdGVEeW5hbWljRGF0YSgpO1xuICAgICAgICAgICAgY2hlY2tFbXB0eVRlc3RpbW9uaWFscygpO1xuICAgICAgICAgICAgaW5pdFR1dG9yU2xpZGVyKCk7XG5cbiAgICAgICAgICAgIGRyb3Bkb3duLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVEeW5hbWljRGF0YSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVN0YXRpY0RhdGEoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gZHJvcGRvd24uZmluZCgnOnNlbGVjdGVkJyk7XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZHJvcGRvd25CbG9jayBpZiBkcm9wZG93biBpcyBlbXB0eSBvciBpZiBpdCBvbmx5IGNvbnRhaW5zIGhpZGRlbiBkdW1teVxuICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bk9wdGlvbnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25CbG9jay5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRyb3Bkb3duT3B0aW9ucy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRPcHRpb24uZGF0YSgnc3RhcnRkYXRldmlzJykgPT0gJ2hpZGUtZGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQmxvY2sucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUR5bmFtaWNEYXRhKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9IGRyb3Bkb3duLmZpbmQoJzpzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHZhciBkZWFkbGluZUZ1cnRoZXIgPSAnTm8gZGVhZGxpbmUsIHN1YmplY3QgdG8gYXZhaWxhYmlsaXR5JztcblxuICAgICAgICAgICAgICAgIC8vIFVzZSBNb21lbnQuanMgcGFja2FnZSB0byBmb3JtYXQgZGF0ZVxuICAgICAgICAgICAgICAgIC8vIHZhciBib29raW5nRGVhZGxpbmVGb3JtYXR0ZWQgPSBtb21lbnQoc2VsZWN0ZWRPcHRpb24uZGF0YSgnYm9va2luZ2RlYWRsaW5lJykpLmZvcm1hdCgnZGRkIEQgTU1NIFlZWVknKTtcblxuICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLXN1YnRleHQnKS5odG1sKFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5kYXRhKCdzdGFydGRhdGVzdWJ0ZXh0JylcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgbm8gcHJlc2VudGF0aW9uIGxpc3RpbmdzIGF0IGFsbFxuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0ZWRPcHRpb24uZGF0YSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzISEhIScpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1kZWFkbGluZS1mdXJ0aGVyJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKFwic3BhbltpZF49J2R5bmFtaWMtJ11cIikuaHRtbChcbiAgICAgICAgICAgICAgICAgICAgICAgICc8c3Bhbj5UbyBiZSBjb25maXJtZWQ8L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAkKCcjbm90LXNldCcpLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnc3RhcnRkYXRlc3VidGV4dCcpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoKS5zdGFydGRhdGV2aXMgPT0gJ2hpZGUtZGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnN0YXJ0LWRhdGUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1kZWFkbGluZS1mdXJ0aGVyJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKFwic3BhbltpZF49J2R5bmFtaWMtJ11cIikuaHRtbChcbiAgICAgICAgICAgICAgICAgICAgICAgICc8c3Bhbj5UbyBiZSBjb25maXJtZWQ8L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAkKCcuc2hvcnRjb3Vyc2Uta2V5aW5mbyBoMicpLmNzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICdib3JkZXItYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICcxcHggc29saWQnXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnI25vdC1zZXQnKS5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3N0YXJ0ZGF0ZXN1YnRleHQnKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vJCgnI25vdC1zZXQnKS5odG1sKCc8cD5EYXRlcyB0byBiZSBjb25maXJtZWQ8L3A+Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZE9wdGlvbi5kYXRhKCdyZWdpc3RlcicpID09ICd5ZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWRlYWRsaW5lLWZ1cnRoZXInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoXCJzcGFuW2lkXj0nZHluYW1pYy0nXVwiKS5odG1sKFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuPlRvIGJlIGNvbmZpcm1lZDwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5zaG9ydGNvdXJzZS1rZXlpbmZvIGgyJykuY3NzKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1ib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzFweCBzb2xpZCdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI25vdC1zZXQnKS5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3N0YXJ0ZGF0ZXN1YnRleHQnKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vJCgnI25vdC1zZXQnKS5odG1sKCc8cD5EYXRlcyB0byBiZSBjb25maXJtZWQhPC9wPicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICQoJyNkeW5hbWljLWRlYWRsaW5lJykuaGlkZSgpLmh0bWwoZGVhZGxpbmVGdXJ0aGVyKS5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiBzdG9yZWxpbmsgZXhpc3RzLCBkaXNwbGF5IGFwcHJvcHJpYXRlIGFjdGlvbiBidXR0b25cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3N0b3JlbGluaycpICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uZGF0YSgnc3RvcmVsaW5rJykudHJpbSgpICE9ICcnXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaW5rVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5kYXRhKCdyZWdpc3RlcicpID09ICd5ZXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnUmVnaXN0ZXIgaW50ZXJlc3QgPHNwYW4+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWNpcmNsZS1yaWdodFwiIC8+PC9zcGFuPidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdCb29rIG5vdyA8c3Bhbj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0XCIgLz48L3NwYW4+JztcblxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmVsaW5rID0gc2VsZWN0ZWRPcHRpb24uZGF0YSgnc3RvcmVsaW5rJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9yZWxpbmsuc2xpY2UoLTEpID09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVsaW5rID0gc3RvcmVsaW5rLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1hY3Rpb24nKS5odG1sKFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxwIGNsYXNzPVwiY3RhIGhhcmQtY3RhXCI+PGEgaHJlZj0nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZWxpbmsgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2E+PC9wPidcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1hY3Rpb24nKS5lbXB0eSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0NQRCkge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBrZXkgaW5mbyAtIGNwZCBjb3Vyc2VzXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2R1cmF0aW9uJykgPT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uZGF0YSgnZHVyYXRpb24nKSA9PSAnJ1xuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjcGQtZHVyYXRpb24tcm93JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtZHVyYXRpb24nKS5odG1sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2R1cmF0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjY3BkLWR1cmF0aW9uLXJvdycpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3RpbWUnKSA9PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5kYXRhKCd0aW1lJykgPT0gJydcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjY3BkLXRpbWUtcm93JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtdGltZScpLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgndGltZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjcGQtdGltZS1yb3cnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5kYXRhKCdsb2NhdGlvbicpID09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2xvY2F0aW9uJykgPT0gJydcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjY3BkLWxvY2F0aW9uLXJvdycpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWxvY2F0aW9uJykuaHRtbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5kYXRhKCdsb2NhdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NwZC1sb2NhdGlvbi1yb3cnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5kYXRhKCdhcHBseXVudGlsJykgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uZGF0YSgnYXBwbHl1bnRpbCcpICE9ICcnXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtYXBwbHl1bnRpbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2FwcGx5dW50aWwnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBrZXkgaW5mbyAtIHNob3J0IGNvdXJzZXNcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtZHVyYXRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnZHVyYXRpb24nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtdGltZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChzZWxlY3RlZE9wdGlvbi5kYXRhKCd0aW1lJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgZGF5cyBleGlzdCwgcHJpbnQuIElmIG5vdCwgaGlkZSByb3dcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRPcHRpb24uZGF0YSgnZGF5cycpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNkYXlzJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1kYXlzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2RheXMnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCcjZGF5cycpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtY29kZScpXG4gICAgICAgICAgICAgICAgICAgIC5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnY29kZScpKVxuICAgICAgICAgICAgICAgICAgICAuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtZmVlcycpXG4gICAgICAgICAgICAgICAgICAgIC5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnZmVlcycpKVxuICAgICAgICAgICAgICAgICAgICAuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtbG9jYXRpb24nKVxuICAgICAgICAgICAgICAgICAgICAuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2xvY2F0aW9uJykpXG4gICAgICAgICAgICAgICAgICAgIC5mYWRlSW4oKTtcblxuICAgICAgICAgICAgICAgIC8vIElmIGRlYWRsaW5lIG92ZXJyaWRlIG1ldGFkYXRhIGV4aXN0cywgcHJpbnQgdGhpcyBkYXRhIHZhbHVlIGluc3RlYWQgb2Ygb3RoZXIgZmllbGRzXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2Jvb2tpbmdkZWFkbGluZW92ZXJyaWRlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnJvdyNib29raW5nLWRlYWRsaW5lJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1kZWFkbGluZS1mdXJ0aGVyJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1kZWFkbGluZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChzZWxlY3RlZE9wdGlvbi5kYXRhKCdib29raW5nZGVhZGxpbmVvdmVycmlkZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5yb3cjYm9va2luZy1kZWFkbGluZScpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrRW1wdHlUZXN0aW1vbmlhbHMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaW5nID0gJCgnLnNob3J0Y291cnNlLXRlc3RpbW9uaWFscycpLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICcuY291cnNlX19wcm9maWxlc19faXRlbSdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmICh0aGluZy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcuc2hvcnRjb3Vyc2UtdGVzdGltb25pYWxzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2hvcnRjb3Vyc2UtdGVzdGltb25pYWxzLS1lbXB0eScpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3Nob3J0Y291cnNlLXRlc3RpbW9uaWFscycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKCcuc2hvcnRjb3Vyc2UtdGVzdGltb25pYWxzLWJsb2NrJykuc2hvdygpO1xuICAgICAgICAgICAgICAgIC8vIEJ1ZyBmaXg6IGRlZmluZSBpbml0aWFsIGNhcm91c2VsIGRpbWVuc2lvbnMgb3RoZXJ3aXNlIHdvbid0IGxvYWQgY29ycmVjdGx5XG4gICAgICAgICAgICAgICAgJCgnLmJ4LXZpZXdwb3J0JykuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xuICAgICAgICAgICAgICAgICQoJy5jb3Vyc2VfX3Byb2ZpbGVzX19pdGVtLmNvdXJzZV9fcHJvZmlsZXNfX2l0ZW0nKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICAgICAgICAgICAgICAgICAgJ21heC13aWR0aCc6ICcxMjAwcHgnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBpbml0VHV0b3JTbGlkZXIoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHcgPSAkKCcuc2hvcnRjb3Vyc2UtdHV0b3ItcHJvZmlsZXMnKS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIHZhciBuID0gJCgnLnNob3J0Y291cnNlLXR1dG9yJykubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgaWYgKG4gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaXRBbGxXaWR0aCA9IHcgLyBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHMgPSBuID4gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoID0gTWF0aC5tYXgoMzAwLCBmaXRBbGxXaWR0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhTbGlkZXMgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHcgLyBtaW5XaWR0aCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB3IC8gbWF4U2xpZGVzO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJy5zaG9ydGNvdXJzZS10dXRvci1pdGVtcycpLmJ4U2xpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBjb250cm9scyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlTWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAkKCcuc2hvcnRjb3Vyc2UtdHV0b3Itd3JhcHBlcicpLmFkZENsYXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Nob3J0Y291cnNlLXR1dG9yLXNlbGVjdGlvbidcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbml0U2hvcnRDb3Vyc2VzKCk7XG4gICAgfTtcblxuZGVmZXIoaW5pdCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL3Nob3J0Q291cnNlcy5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==