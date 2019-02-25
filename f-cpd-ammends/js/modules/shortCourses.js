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
                    $('.start-date').css('display', 'none');
                    $('#dynamic-deadline-further').hide();
                    $("span[id^='dynamic-']").html(
                        '<span>To be confirmed</span>'
                    );
                    $('.shortcourse-keyinfo h2').css(
                        'border-bottom',
                        '1px solid'
                    );
                    $('#not-set').html('<p>Dates and fees to be confirmed</p>');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTEyNzAyN2FlMGQzMjBiZmVhOTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvc2hvcnRDb3Vyc2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0EsMEI7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBLFlBQVksbUJBQU8sQ0FBQyxDQUFnQjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUNBQXVDO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7O0FDakJELFlBQVksbUJBQU8sQ0FBQyxDQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6Im1vZHVsZXMvc2hvcnRDb3Vyc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGExMjcwMjdhZTBkMzIwYmZlYTk3IiwiLyoqXG4gKiBleHBlY3RzIGpRdWVyeSB0byBiZSBwcm92aWRlZCBieSBDSVRZX1IuanNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuJDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL2xpYnMvanF1ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJCA9IHJlcXVpcmUoJy4uL2xpYnMvanF1ZXJ5Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRlZmVycmVkRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBDSVRZICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgJChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LkNJVFlfT1BUSU9OUykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMgPSB7ZGVmZXI6IFtdfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDSVRZX09QVElPTlMuZGVmZXIucHVzaChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy91dGlscy9kZWZlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNiA3IDggOSAxMCIsInZhciBkZWZlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmZXInKSxcbiAgICBpbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZ1bmN0aW9uIGluaXRTaG9ydENvdXJzZXMoKSB7XG4gICAgICAgICAgICB2YXIgZHJvcGRvd25CbG9jayA9ICQoJyNzaG9ydGNvdXJzZS1kcm9wZG93bicpO1xuICAgICAgICAgICAgdmFyIGRyb3Bkb3duID0gJCgnI3Nob3J0Y291cnNlLWRyb3Bkb3duIHNlbGVjdCcpO1xuICAgICAgICAgICAgdmFyIGRyb3Bkb3duT3B0aW9ucyA9ICQoJyNzaG9ydGNvdXJzZS1kcm9wZG93biBvcHRpb24nKTtcbiAgICAgICAgICAgIHZhciBpc0NQRCA9ICQoJy5zaG9ydGNvdXJzZS0tY3BkJylbMF07XG5cbiAgICAgICAgICAgIHVwZGF0ZVN0YXRpY0RhdGEoKTtcbiAgICAgICAgICAgIHVwZGF0ZUR5bmFtaWNEYXRhKCk7XG4gICAgICAgICAgICBjaGVja0VtcHR5VGVzdGltb25pYWxzKCk7XG4gICAgICAgICAgICBpbml0VHV0b3JTbGlkZXIoKTtcblxuICAgICAgICAgICAgZHJvcGRvd24uY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUR5bmFtaWNEYXRhKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlU3RhdGljRGF0YSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBkcm9wZG93bi5maW5kKCc6c2VsZWN0ZWQnKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBkcm9wZG93bkJsb2NrIGlmIGRyb3Bkb3duIGlzIGVtcHR5IG9yIGlmIGl0IG9ubHkgY29udGFpbnMgaGlkZGVuIGR1bW15XG4gICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duT3B0aW9ucy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkJsb2NrLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZHJvcGRvd25PcHRpb25zLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbi5kYXRhKCdzdGFydGRhdGV2aXMnKSA9PSAnaGlkZS1kYXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25CbG9jay5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlRHluYW1pY0RhdGEoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gZHJvcGRvd24uZmluZCgnOnNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdmFyIGRlYWRsaW5lRnVydGhlciA9ICdObyBkZWFkbGluZSwgc3ViamVjdCB0byBhdmFpbGFiaWxpdHknO1xuXG4gICAgICAgICAgICAgICAgLy8gVXNlIE1vbWVudC5qcyBwYWNrYWdlIHRvIGZvcm1hdCBkYXRlXG4gICAgICAgICAgICAgICAgLy8gdmFyIGJvb2tpbmdEZWFkbGluZUZvcm1hdHRlZCA9IG1vbWVudChzZWxlY3RlZE9wdGlvbi5kYXRhKCdib29raW5nZGVhZGxpbmUnKSkuZm9ybWF0KCdkZGQgRCBNTU0gWVlZWScpO1xuXG4gICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtc3VidGV4dCcpLmh0bWwoXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3N0YXJ0ZGF0ZXN1YnRleHQnKVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBubyBwcmVzZW50YXRpb24gbGlzdGluZ3MgYXQgYWxsXG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3RlZE9wdGlvbi5kYXRhKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnN0YXJ0LWRhdGUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1kZWFkbGluZS1mdXJ0aGVyJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKFwic3BhbltpZF49J2R5bmFtaWMtJ11cIikuaHRtbChcbiAgICAgICAgICAgICAgICAgICAgICAgICc8c3Bhbj5UbyBiZSBjb25maXJtZWQ8L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAkKCcuc2hvcnRjb3Vyc2Uta2V5aW5mbyBoMicpLmNzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICdib3JkZXItYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICcxcHggc29saWQnXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNub3Qtc2V0JykuaHRtbCgnPHA+RGF0ZXMgYW5kIGZlZXMgdG8gYmUgY29uZmlybWVkPC9wPicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRPcHRpb24uZGF0YSgpLnN0YXJ0ZGF0ZXZpcyA9PSAnaGlkZS1kYXRlJykge1xuICAgICAgICAgICAgICAgICAgICAkKCcuc3RhcnQtZGF0ZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWRlYWRsaW5lLWZ1cnRoZXInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoXCJzcGFuW2lkXj0nZHluYW1pYy0nXVwiKS5odG1sKFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuPlRvIGJlIGNvbmZpcm1lZDwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5zaG9ydGNvdXJzZS1rZXlpbmZvIGgyJykuY3NzKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1ib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzFweCBzb2xpZCdcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAkKCcjbm90LXNldCcpLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnc3RhcnRkYXRlc3VidGV4dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8kKCcjbm90LXNldCcpLmh0bWwoJzxwPkRhdGVzIHRvIGJlIGNvbmZpcm1lZDwvcD4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3JlZ2lzdGVyJykgPT0gJ3llcycpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtZGVhZGxpbmUtZnVydGhlcicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJChcInNwYW5baWRePSdkeW5hbWljLSddXCIpLmh0bWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4+VG8gYmUgY29uZmlybWVkPC9zcGFuPidcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNob3J0Y291cnNlLWtleWluZm8gaDInKS5jc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAnYm9yZGVyLWJvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnMXB4IHNvbGlkJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAkKCcjbm90LXNldCcpLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnc3RhcnRkYXRlc3VidGV4dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8kKCcjbm90LXNldCcpLmh0bWwoJzxwPkRhdGVzIHRvIGJlIGNvbmZpcm1lZCE8L3A+Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gJCgnI2R5bmFtaWMtZGVhZGxpbmUnKS5oaWRlKCkuaHRtbChkZWFkbGluZUZ1cnRoZXIpLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHN0b3JlbGluayBleGlzdHMsIGRpc3BsYXkgYXBwcm9wcmlhdGUgYWN0aW9uIGJ1dHRvblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uZGF0YSgnc3RvcmVsaW5rJykgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5kYXRhKCdzdG9yZWxpbmsnKS50cmltKCkgIT0gJydcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmtUZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3JlZ2lzdGVyJykgPT0gJ3llcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdSZWdpc3RlciBpbnRlcmVzdCA8c3Bhbj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0XCIgLz48L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ0Jvb2sgbm93IDxzcGFuPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1jaXJjbGUtcmlnaHRcIiAvPjwvc3Bhbj4nO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZWxpbmsgPSBzZWxlY3RlZE9wdGlvbi5kYXRhKCdzdG9yZWxpbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3JlbGluay5zbGljZSgtMSkgPT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZWxpbmsgPSBzdG9yZWxpbmsuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWFjdGlvbicpLmh0bWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHAgY2xhc3M9XCJjdGEgaGFyZC1jdGFcIj48YSBocmVmPScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlbGluayArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJz4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rVGV4dCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvYT48L3A+J1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWFjdGlvbicpLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzQ1BEKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIGtleSBpbmZvIC0gY3BkIGNvdXJzZXNcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uZGF0YSgnZHVyYXRpb24nKSA9PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5kYXRhKCdkdXJhdGlvbicpID09ICcnXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NwZC1kdXJhdGlvbi1yb3cnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1kdXJhdGlvbicpLmh0bWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uZGF0YSgnZHVyYXRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjcGQtZHVyYXRpb24tcm93Jykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uZGF0YSgndGltZScpID09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3RpbWUnKSA9PSAnJ1xuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjcGQtdGltZS1yb3cnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy10aW1lJykuaHRtbChzZWxlY3RlZE9wdGlvbi5kYXRhKCd0aW1lJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NwZC10aW1lLXJvdycpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2xvY2F0aW9uJykgPT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uZGF0YSgnbG9jYXRpb24nKSA9PSAnJ1xuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjcGQtbG9jYXRpb24tcm93JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtbG9jYXRpb24nKS5odG1sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2xvY2F0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjY3BkLWxvY2F0aW9uLXJvdycpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2FwcGx5dW50aWwnKSAhPSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5kYXRhKCdhcHBseXVudGlsJykgIT0gJydcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1hcHBseXVudGlsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnYXBwbHl1bnRpbCcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIGtleSBpbmZvIC0gc2hvcnQgY291cnNlc1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1kdXJhdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChzZWxlY3RlZE9wdGlvbi5kYXRhKCdkdXJhdGlvbicpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy10aW1lJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3RpbWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBkYXlzIGV4aXN0LCBwcmludC4gSWYgbm90LCBoaWRlIHJvd1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbi5kYXRhKCdkYXlzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2RheXMnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWRheXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnZGF5cycpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNkYXlzJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1jb2RlJylcbiAgICAgICAgICAgICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgICAgICAgICAgICAuaHRtbChzZWxlY3RlZE9wdGlvbi5kYXRhKCdjb2RlJykpXG4gICAgICAgICAgICAgICAgICAgIC5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1mZWVzJylcbiAgICAgICAgICAgICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgICAgICAgICAgICAuaHRtbChzZWxlY3RlZE9wdGlvbi5kYXRhKCdmZWVzJykpXG4gICAgICAgICAgICAgICAgICAgIC5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1sb2NhdGlvbicpXG4gICAgICAgICAgICAgICAgICAgIC5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnbG9jYXRpb24nKSlcbiAgICAgICAgICAgICAgICAgICAgLmZhZGVJbigpO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgZGVhZGxpbmUgb3ZlcnJpZGUgbWV0YWRhdGEgZXhpc3RzLCBwcmludCB0aGlzIGRhdGEgdmFsdWUgaW5zdGVhZCBvZiBvdGhlciBmaWVsZHNcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRPcHRpb24uZGF0YSgnYm9va2luZ2RlYWRsaW5lb3ZlcnJpZGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcucm93I2Jvb2tpbmctZGVhZGxpbmUnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWRlYWRsaW5lLWZ1cnRoZXInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWRlYWRsaW5lJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2Jvb2tpbmdkZWFkbGluZW92ZXJyaWRlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnJvdyNib29raW5nLWRlYWRsaW5lJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tFbXB0eVRlc3RpbW9uaWFscygpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpbmcgPSAkKCcuc2hvcnRjb3Vyc2UtdGVzdGltb25pYWxzJykuZmluZChcbiAgICAgICAgICAgICAgICAgICAgJy5jb3Vyc2VfX3Byb2ZpbGVzX19pdGVtJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaW5nLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5zaG9ydGNvdXJzZS10ZXN0aW1vbmlhbHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzaG9ydGNvdXJzZS10ZXN0aW1vbmlhbHMtLWVtcHR5JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2hvcnRjb3Vyc2UtdGVzdGltb25pYWxzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoJy5zaG9ydGNvdXJzZS10ZXN0aW1vbmlhbHMtYmxvY2snKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgLy8gQnVnIGZpeDogZGVmaW5lIGluaXRpYWwgY2Fyb3VzZWwgZGltZW5zaW9ucyBvdGhlcndpc2Ugd29uJ3QgbG9hZCBjb3JyZWN0bHlcbiAgICAgICAgICAgICAgICAkKCcuYngtdmlld3BvcnQnKS5jc3MoJ2hlaWdodCcsICdhdXRvJyk7XG4gICAgICAgICAgICAgICAgJCgnLmNvdXJzZV9fcHJvZmlsZXNfX2l0ZW0uY291cnNlX19wcm9maWxlc19faXRlbScpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwdncnLFxuICAgICAgICAgICAgICAgICAgICAnbWF4LXdpZHRoJzogJzEyMDBweCcsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGluaXRUdXRvclNsaWRlcigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdyA9ICQoJy5zaG9ydGNvdXJzZS10dXRvci1wcm9maWxlcycpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSAkKCcuc2hvcnRjb3Vyc2UtdHV0b3InKS5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBpZiAobiA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpdEFsbFdpZHRoID0gdyAvIG4sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9scyA9IG4gPiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGggPSBNYXRoLm1heCgzMDAsIGZpdEFsbFdpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFNsaWRlcyA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodyAvIG1pbldpZHRoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHcgLyBtYXhTbGlkZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLnNob3J0Y291cnNlLXR1dG9yLWl0ZW1zJykuYnhTbGlkZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHM6IGNvbnRyb2xzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L2k+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVNYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJy5zaG9ydGNvdXJzZS10dXRvci13cmFwcGVyJykuYWRkQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc2hvcnRjb3Vyc2UtdHV0b3Itc2VsZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGluaXRTaG9ydENvdXJzZXMoKTtcbiAgICB9O1xuXG5kZWZlcihpbml0KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvc2hvcnRDb3Vyc2VzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwic291cmNlUm9vdCI6IiJ9