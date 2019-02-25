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
                if (
                    !selectedOption.data() ||
                    selectedOption.data().startdatevis == 'hide-date'
                ) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDlmZTU2MDgyODMzNjUyOWQ1ZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvc2hvcnRDb3Vyc2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0EsMEI7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBLFlBQVksbUJBQU8sQ0FBQyxDQUFnQjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUNBQXVDO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7O0FDakJELFlBQVksbUJBQU8sQ0FBQyxDQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6Im1vZHVsZXMvc2hvcnRDb3Vyc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ5ZmU1NjA4MjgzMzY1MjlkNWYyIiwiLyoqXG4gKiBleHBlY3RzIGpRdWVyeSB0byBiZSBwcm92aWRlZCBieSBDSVRZX1IuanNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuJDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL2xpYnMvanF1ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJCA9IHJlcXVpcmUoJy4uL2xpYnMvanF1ZXJ5Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRlZmVycmVkRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBDSVRZICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgJChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LkNJVFlfT1BUSU9OUykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMgPSB7ZGVmZXI6IFtdfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDSVRZX09QVElPTlMuZGVmZXIucHVzaChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy91dGlscy9kZWZlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNiA3IDggOSAxMCIsInZhciBkZWZlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmZXInKSxcbiAgICBpbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZ1bmN0aW9uIGluaXRTaG9ydENvdXJzZXMoKSB7XG4gICAgICAgICAgICB2YXIgZHJvcGRvd25CbG9jayA9ICQoJyNzaG9ydGNvdXJzZS1kcm9wZG93bicpO1xuICAgICAgICAgICAgdmFyIGRyb3Bkb3duID0gJCgnI3Nob3J0Y291cnNlLWRyb3Bkb3duIHNlbGVjdCcpO1xuICAgICAgICAgICAgdmFyIGRyb3Bkb3duT3B0aW9ucyA9ICQoJyNzaG9ydGNvdXJzZS1kcm9wZG93biBvcHRpb24nKTtcbiAgICAgICAgICAgIHZhciBpc0NQRCA9ICQoJy5zaG9ydGNvdXJzZS0tY3BkJylbMF07XG5cbiAgICAgICAgICAgIHVwZGF0ZVN0YXRpY0RhdGEoKTtcbiAgICAgICAgICAgIHVwZGF0ZUR5bmFtaWNEYXRhKCk7XG4gICAgICAgICAgICBjaGVja0VtcHR5VGVzdGltb25pYWxzKCk7XG4gICAgICAgICAgICBpbml0VHV0b3JTbGlkZXIoKTtcblxuICAgICAgICAgICAgZHJvcGRvd24uY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUR5bmFtaWNEYXRhKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlU3RhdGljRGF0YSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBkcm9wZG93bi5maW5kKCc6c2VsZWN0ZWQnKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBkcm9wZG93bkJsb2NrIGlmIGRyb3Bkb3duIGlzIGVtcHR5IG9yIGlmIGl0IG9ubHkgY29udGFpbnMgaGlkZGVuIGR1bW15XG4gICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duT3B0aW9ucy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkJsb2NrLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZHJvcGRvd25PcHRpb25zLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbi5kYXRhKCdzdGFydGRhdGV2aXMnKSA9PSAnaGlkZS1kYXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25CbG9jay5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlRHluYW1pY0RhdGEoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gZHJvcGRvd24uZmluZCgnOnNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdmFyIGRlYWRsaW5lRnVydGhlciA9ICdObyBkZWFkbGluZSwgc3ViamVjdCB0byBhdmFpbGFiaWxpdHknO1xuXG4gICAgICAgICAgICAgICAgLy8gVXNlIE1vbWVudC5qcyBwYWNrYWdlIHRvIGZvcm1hdCBkYXRlXG4gICAgICAgICAgICAgICAgLy8gdmFyIGJvb2tpbmdEZWFkbGluZUZvcm1hdHRlZCA9IG1vbWVudChzZWxlY3RlZE9wdGlvbi5kYXRhKCdib29raW5nZGVhZGxpbmUnKSkuZm9ybWF0KCdkZGQgRCBNTU0gWVlZWScpO1xuXG4gICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtc3VidGV4dCcpLmh0bWwoXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3N0YXJ0ZGF0ZXN1YnRleHQnKVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBubyBwcmVzZW50YXRpb24gbGlzdGluZ3MgYXQgYWxsXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhc2VsZWN0ZWRPcHRpb24uZGF0YSgpIHx8XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoKS5zdGFydGRhdGV2aXMgPT0gJ2hpZGUtZGF0ZSdcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnN0YXJ0LWRhdGUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1kZWFkbGluZS1mdXJ0aGVyJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKFwic3BhbltpZF49J2R5bmFtaWMtJ11cIikuaHRtbChcbiAgICAgICAgICAgICAgICAgICAgICAgICc8c3Bhbj5UbyBiZSBjb25maXJtZWQ8L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAkKCcuc2hvcnRjb3Vyc2Uta2V5aW5mbyBoMicpLmNzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICdib3JkZXItYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICcxcHggc29saWQnXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnI25vdC1zZXQnKS5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3N0YXJ0ZGF0ZXN1YnRleHQnKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vJCgnI25vdC1zZXQnKS5odG1sKCc8cD5EYXRlcyB0byBiZSBjb25maXJtZWQ8L3A+Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZE9wdGlvbi5kYXRhKCdyZWdpc3RlcicpID09ICd5ZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWRlYWRsaW5lLWZ1cnRoZXInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoXCJzcGFuW2lkXj0nZHluYW1pYy0nXVwiKS5odG1sKFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuPlRvIGJlIGNvbmZpcm1lZDwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5zaG9ydGNvdXJzZS1rZXlpbmZvIGgyJykuY3NzKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1ib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzFweCBzb2xpZCdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI25vdC1zZXQnKS5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3N0YXJ0ZGF0ZXN1YnRleHQnKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vJCgnI25vdC1zZXQnKS5odG1sKCc8cD5EYXRlcyB0byBiZSBjb25maXJtZWQhPC9wPicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICQoJyNkeW5hbWljLWRlYWRsaW5lJykuaGlkZSgpLmh0bWwoZGVhZGxpbmVGdXJ0aGVyKS5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiBzdG9yZWxpbmsgZXhpc3RzLCBkaXNwbGF5IGFwcHJvcHJpYXRlIGFjdGlvbiBidXR0b25cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3N0b3JlbGluaycpICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uZGF0YSgnc3RvcmVsaW5rJykudHJpbSgpICE9ICcnXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaW5rVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5kYXRhKCdyZWdpc3RlcicpID09ICd5ZXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnUmVnaXN0ZXIgaW50ZXJlc3QgPHNwYW4+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWNpcmNsZS1yaWdodFwiIC8+PC9zcGFuPidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdCb29rIG5vdyA8c3Bhbj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0XCIgLz48L3NwYW4+JztcblxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmVsaW5rID0gc2VsZWN0ZWRPcHRpb24uZGF0YSgnc3RvcmVsaW5rJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9yZWxpbmsuc2xpY2UoLTEpID09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVsaW5rID0gc3RvcmVsaW5rLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1hY3Rpb24nKS5odG1sKFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxwIGNsYXNzPVwiY3RhIGhhcmQtY3RhXCI+PGEgaHJlZj0nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZWxpbmsgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2E+PC9wPidcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1hY3Rpb24nKS5lbXB0eSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0NQRCkge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBrZXkgaW5mbyAtIGNwZCBjb3Vyc2VzXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2R1cmF0aW9uJykgPT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uZGF0YSgnZHVyYXRpb24nKSA9PSAnJ1xuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjcGQtZHVyYXRpb24tcm93JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtZHVyYXRpb24nKS5odG1sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2R1cmF0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjY3BkLWR1cmF0aW9uLXJvdycpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ3RpbWUnKSA9PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5kYXRhKCd0aW1lJykgPT0gJydcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjY3BkLXRpbWUtcm93JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtdGltZScpLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgndGltZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjcGQtdGltZS1yb3cnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5kYXRhKCdsb2NhdGlvbicpID09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2xvY2F0aW9uJykgPT0gJydcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjY3BkLWxvY2F0aW9uLXJvdycpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNkeW5hbWljLWxvY2F0aW9uJykuaHRtbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5kYXRhKCdsb2NhdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NwZC1sb2NhdGlvbi1yb3cnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5kYXRhKCdhcHBseXVudGlsJykgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uZGF0YSgnYXBwbHl1bnRpbCcpICE9ICcnXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtYXBwbHl1bnRpbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2FwcGx5dW50aWwnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBrZXkgaW5mbyAtIHNob3J0IGNvdXJzZXNcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtZHVyYXRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnZHVyYXRpb24nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtdGltZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChzZWxlY3RlZE9wdGlvbi5kYXRhKCd0aW1lJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgZGF5cyBleGlzdCwgcHJpbnQuIElmIG5vdCwgaGlkZSByb3dcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRPcHRpb24uZGF0YSgnZGF5cycpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNkYXlzJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1kYXlzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2RheXMnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCcjZGF5cycpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtY29kZScpXG4gICAgICAgICAgICAgICAgICAgIC5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnY29kZScpKVxuICAgICAgICAgICAgICAgICAgICAuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtZmVlcycpXG4gICAgICAgICAgICAgICAgICAgIC5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoc2VsZWN0ZWRPcHRpb24uZGF0YSgnZmVlcycpKVxuICAgICAgICAgICAgICAgICAgICAuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgJCgnI2R5bmFtaWMtbG9jYXRpb24nKVxuICAgICAgICAgICAgICAgICAgICAuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2xvY2F0aW9uJykpXG4gICAgICAgICAgICAgICAgICAgIC5mYWRlSW4oKTtcblxuICAgICAgICAgICAgICAgIC8vIElmIGRlYWRsaW5lIG92ZXJyaWRlIG1ldGFkYXRhIGV4aXN0cywgcHJpbnQgdGhpcyBkYXRhIHZhbHVlIGluc3RlYWQgb2Ygb3RoZXIgZmllbGRzXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLmRhdGEoJ2Jvb2tpbmdkZWFkbGluZW92ZXJyaWRlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnJvdyNib29raW5nLWRlYWRsaW5lJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1kZWFkbGluZS1mdXJ0aGVyJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZHluYW1pYy1kZWFkbGluZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChzZWxlY3RlZE9wdGlvbi5kYXRhKCdib29raW5nZGVhZGxpbmVvdmVycmlkZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5yb3cjYm9va2luZy1kZWFkbGluZScpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrRW1wdHlUZXN0aW1vbmlhbHMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaW5nID0gJCgnLnNob3J0Y291cnNlLXRlc3RpbW9uaWFscycpLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICcuY291cnNlX19wcm9maWxlc19faXRlbSdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmICh0aGluZy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcuc2hvcnRjb3Vyc2UtdGVzdGltb25pYWxzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2hvcnRjb3Vyc2UtdGVzdGltb25pYWxzLS1lbXB0eScpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3Nob3J0Y291cnNlLXRlc3RpbW9uaWFscycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKCcuc2hvcnRjb3Vyc2UtdGVzdGltb25pYWxzLWJsb2NrJykuc2hvdygpO1xuICAgICAgICAgICAgICAgIC8vIEJ1ZyBmaXg6IGRlZmluZSBpbml0aWFsIGNhcm91c2VsIGRpbWVuc2lvbnMgb3RoZXJ3aXNlIHdvbid0IGxvYWQgY29ycmVjdGx5XG4gICAgICAgICAgICAgICAgJCgnLmJ4LXZpZXdwb3J0JykuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xuICAgICAgICAgICAgICAgICQoJy5jb3Vyc2VfX3Byb2ZpbGVzX19pdGVtLmNvdXJzZV9fcHJvZmlsZXNfX2l0ZW0nKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICAgICAgICAgICAgICAgICAgJ21heC13aWR0aCc6ICcxMjAwcHgnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBpbml0VHV0b3JTbGlkZXIoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHcgPSAkKCcuc2hvcnRjb3Vyc2UtdHV0b3ItcHJvZmlsZXMnKS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIHZhciBuID0gJCgnLnNob3J0Y291cnNlLXR1dG9yJykubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgaWYgKG4gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaXRBbGxXaWR0aCA9IHcgLyBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHMgPSBuID4gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoID0gTWF0aC5tYXgoMzAwLCBmaXRBbGxXaWR0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhTbGlkZXMgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHcgLyBtaW5XaWR0aCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB3IC8gbWF4U2xpZGVzO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJy5zaG9ydGNvdXJzZS10dXRvci1pdGVtcycpLmJ4U2xpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBjb250cm9scyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlTWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAkKCcuc2hvcnRjb3Vyc2UtdHV0b3Itd3JhcHBlcicpLmFkZENsYXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Nob3J0Y291cnNlLXR1dG9yLXNlbGVjdGlvbidcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbml0U2hvcnRDb3Vyc2VzKCk7XG4gICAgfTtcblxuZGVmZXIoaW5pdCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL3Nob3J0Q291cnNlcy5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==