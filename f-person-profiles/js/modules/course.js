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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
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

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// var $ = require('./libs/jquery'),
var onResize = __webpack_require__(58),
    composeFunctions = __webpack_require__(59),
    defer = __webpack_require__(2),
    charts = __webpack_require__(60),

    initAccordions = function () {
        $('.course__accordion').accordion({
            heightStyle: "content",
            collapsible: true,
            active: false,
            animate: false,
            activate: function (event, ui) {
                if (!$.isEmptyObject(ui.newHeader.offset())) {
                    $('html:not(:animated), body:not(:animated)').animate({scrollTop: ui.newHeader.offset().top}, 'slow');
                }
            }
        });
    },

    initApplyDialog = function () {
        $('a[href="#apply-dialog"]').click(function (e) {
            e.preventDefault();

            $('#apply-dialog').dialog({
                modal: true,
                autoOpen: true,
                dialogClass: "apply-dialog",
                title: "How to Apply",
                width: "60%",
                height: 500,
                draggable: false,
                resizable: false
            });
        });
    },

    initEntries = function () {
        $('.course__entries select').change(function (e) {
            location.href = $(this).find('option:selected').attr('data-url');
        });
    },

    initTestimonials = function () {

        var w = $('.course__profiles').width(),
            n = $('.course__profiles__item').length;

        if (n > 0) {
            var fitAllWidth = w / n,
                controls = n > 1,
                minWidth = Math.max(300, fitAllWidth),
                maxSlides = Math.max(1, Math.floor(w / minWidth)),
                width = w / maxSlides;

            $('.course__profiles .items').bxSlider({
                pager: false,
                controls: controls,
                nextText: '<i class="fa fa-chevron-right"></i>',
                prevText: '<i class="fa fa-chevron-left"></i>',
                adaptiveHeight: true,
                slideMargin: 0
            });
        }
    },

    testimonialsBackgroundColor = function () {
        // Get title text colour of selected list item, i.e. nested in aria-hidden="false"
        var selectedItemColor = $('li.course__profiles__item:not([aria-hidden*="true"]) .course__profiles__item__text__title').css("color");

        // Apply selected text colour to testimonials wrapper background
        $('.course__testimonials__wrapper').css("background", selectedItemColor);
    },

    initAssessment = function () {
        var container = document.getElementById('course-assessment-chart');

        if (container) {
            var data = new google.visualization.DataTable(),
                options = {
                    chartArea: {
                        top: 10,
                        bottom: 30,
                        width: 300,
                        height: 300
                    },
                    animation: {duration: 1000, "startup": true},
                    tooltip: {text: 'percentage'},
                    title: 'Assessment',
                    pieHole: 0.5,
                    colors: ['#253e52', '#3f1561', '#e3a02d', '#3986ac']
                },
                chart = new google.visualization.PieChart(container);

            data.addColumn('string', 'Type');
            data.addColumn('number', '%');

            $('.course__assessment__list li').each(function () {
                var li = $(this);
                data.addRow([li.attr('data-label'), parseFloat(li.attr('data-value'))]);
            });

            return function () {
                chart.draw(data, options);
            };
        } else {
            return false;
        }
    },

    initMenu = function () {
        var menu = $('.course__menu'),
            toggle = menu.find('.course__menu__title a'),
            content = menu.find('.course__menu__content');

        toggle.click(function (e) {
            e.preventDefault();
            content.slideToggle();
        });
    },

    initEmployment = function () {
        var wrapper = $('.course__employment');
        if (wrapper.length) {
            var valuesStr = wrapper.attr('data-values') || (wrapper.attr('data-value') + ";0;0"),
                values = valuesStr.split(';').map(function (v) {
                    return parseFloat(v || '0');
                }),
                total = values.reduce(function (acc, v) {
                    return acc + v
                }),
                valueOther = Math.max(0, 100 - total),
                data = new google.visualization.DataTable(),
                options = {
                    backgroundColor: 'transparent',
                    height: '100%',
                    chartArea: {backgroundColor: 'transparent', top: '5%', height: '90%', width: '90%'},
                    animation: {duration: 1000, "startup": true},
                    legend: 'none',
                    pieSliceText: 'none',
                    tooltip: {text: 'percentage'},
                    pieHole: 0.85,
                    slices: {
                        0: {color: '#a22833'},
                        1: {color: '#db6363'},
                        2: {color: '#d99898'},
                        3: {color: '#d9d9d9'}
                    }
                },
                chart = new google.visualization.PieChart(document.getElementById('course-destinations-employment-chart'));

            data.addColumn('string', 'Type');
            data.addColumn('number', '%');
            data.addRow(['In employment', values[0]]);
            data.addRow(['Work and study', values[1]]);
            data.addRow(['Further study', values[2]]);
            data.addRow(['Unemployed', valueOther]);

            return function () {
                chart.draw(data, options);
            };
        } else {
            return false;
        }
    },


    initDestinations = function () {
        return initEmployment();
    },

    initCharts = function () {
        charts.onInit(function () {
            onResize(composeFunctions(initAssessment(), initDestinations()), true);
        });
    },

    initReadMore = function () {
        if ($(window).width() < 600) {
            $('.course__white-box').each(function () {
                var box = $(this),
                    content = box.find('.course__white-box__content');

                if (content.height() > 100) {
                    content.addClass('course__white-box__content--read-more');
                    var button = $('<div class="course__white-box__read-more">' +
                        '<div class="course__white-box__read-more__bg"></div>' +
                        '<a  href="#"><span>read more</span></a>' +
                        '</div>')
                        .click(function (e) {
                            content.removeClass('course__white-box__content--read-more');
                            button.remove();
                            e.preventDefault();
                        }).appendTo(box);
                }
            });

        }
    },

    initKisWidget = function () {
        var widget = $('#unistats-widget-frame');

        if (widget.length > 0) {
            var wrapper = $('.course__kis'),
                update = function () {
                    var src = widget.attr('src'),
                        currentHorizontal = src.indexOf('horizontal') >= 0,
                        neededHorizontal = $(window).width() > 635;

                    if (currentHorizontal !== neededHorizontal) {
                        var nextSrc = neededHorizontal ? src.replace(/vertical/, 'horizontal') : src.replace(/horizontal/, 'vertical'),
                            nextStyle = neededHorizontal ? {width: '615px', height: '150px'} : {
                                    width: '190px',
                                    height: '500px'
                                };

                        widget.attr('src', nextSrc);
                        widget.css(nextStyle);
                        wrapper.toggleClass('course__kis--vertical', !neededHorizontal);
                    }
                };
            onResize(update, true);
        }
    },

    init = function () {
        initKisWidget();
        initAccordions();
        initEntries();
        initTestimonials();
        initCharts();
        initReadMore();
        initApplyDialog();
        initMenu();
        testimonialsBackgroundColor();
    };

defer(init);

// Change testimonial wrapper background colour when user scrolls through items
$(".course__testimonials__wrapper").click(function() {
    testimonialsBackgroundColor();
})


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {

    var $ = __webpack_require__(1);

    return function (f, runNow) {
        $(window).resize(f);
        if (runNow) {
            f();
        }
    };

}();

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

module.exports = function () {

    var expand = function (expanded, list) {
            for (var i = 0; i < list.length; i++) {
                var item = list[i];

                if (typeof item === 'function') {
                    expanded.push(item);
                } else if (item && item.constructor === Array) {
                    expand(expanded, item);
                }
            }
        },

        compose = function () {
            var expanded = [];
            expand(expanded, arguments);
            return function () {
                for (var i = 0; i < expanded.length; i++) {
                    expanded[i]();
                }
            };
        };

    return compose
}();

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

module.exports = function () {

    var state = 'not-loaded',

        callbacks = [],

        loadComplete = function () {
            state = 'loaded';
            for (var i = 0; i < callbacks.length; i++) {
                callbacks[i]();
            }
        },

        checkLoadComplete = function () {
            if (google.visualization && google.visualization.DataTable) {
                loadComplete();
            } else {
                setTimeout(checkLoadComplete, 100);
            }
        },

        load = function () {
            state = 'loading';

            google.load('visualization', '1.0', {
                'packages': ['corechart'], callback: function () {
                }
            });
            google.setOnLoadCallback(checkLoadComplete);
        },

        onInit = function (f) {
            if (state === 'loaded') {
                f();
            } else {
                callbacks.push(f);
                if (state === 'not-loaded') {
                    load();
                }
            }
        };

    return {
        onInit: onInit
    };
}();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2E4MTFkZThjNzEyMjFiMWM0MTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvY291cnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL3V0aWxzL29uLXJlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvY29tcG9zZS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2NoYXJ0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBLDBCOzs7Ozs7O0FDSEE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx1Q0FBdUM7QUFDdkMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEc7Ozs7Ozs7QUNqQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLHFDQUFx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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Im1vZHVsZXMvY291cnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNhODExZGU4YzcxMjIxYjFjNDE0IiwiLyoqXG4gKiBleHBlY3RzIGpRdWVyeSB0byBiZSBwcm92aWRlZCBieSBDSVRZX1IuanNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuJDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL2xpYnMvanF1ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICQgPSByZXF1aXJlKCcuLi9saWJzL2pxdWVyeScpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkZWZlcnJlZEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgQ0lUWSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICQoZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TID0ge2RlZmVyOiBbXX07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlciA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ0lUWV9PUFRJT05TLmRlZmVyLnB1c2goZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDYgNyA4IiwiLy8gdmFyICQgPSByZXF1aXJlKCcuL2xpYnMvanF1ZXJ5JyksXG52YXIgb25SZXNpemUgPSByZXF1aXJlKCcuL3V0aWxzL29uLXJlc2l6ZScpLFxuICAgIGNvbXBvc2VGdW5jdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy9jb21wb3NlLWZ1bmN0aW9ucycpLFxuICAgIGRlZmVyID0gcmVxdWlyZSgnLi91dGlscy9kZWZlcicpLFxuICAgIGNoYXJ0cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NoYXJ0cycpLFxuXG4gICAgaW5pdEFjY29yZGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5jb3Vyc2VfX2FjY29yZGlvbicpLmFjY29yZGlvbih7XG4gICAgICAgICAgICBoZWlnaHRTdHlsZTogXCJjb250ZW50XCIsXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkLmlzRW1wdHlPYmplY3QodWkubmV3SGVhZGVyLm9mZnNldCgpKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdodG1sOm5vdCg6YW5pbWF0ZWQpLCBib2R5Om5vdCg6YW5pbWF0ZWQpJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB1aS5uZXdIZWFkZXIub2Zmc2V0KCkudG9wfSwgJ3Nsb3cnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbml0QXBwbHlEaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ2FbaHJlZj1cIiNhcHBseS1kaWFsb2dcIl0nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKCcjYXBwbHktZGlhbG9nJykuZGlhbG9nKHtcbiAgICAgICAgICAgICAgICBtb2RhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvT3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaWFsb2dDbGFzczogXCJhcHBseS1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJIb3cgdG8gQXBwbHlcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI2MCVcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc2l6YWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdEVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5jb3Vyc2VfX2VudHJpZXMgc2VsZWN0JykuY2hhbmdlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLXVybCcpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdFRlc3RpbW9uaWFscyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgdyA9ICQoJy5jb3Vyc2VfX3Byb2ZpbGVzJykud2lkdGgoKSxcbiAgICAgICAgICAgIG4gPSAkKCcuY291cnNlX19wcm9maWxlc19faXRlbScpLmxlbmd0aDtcblxuICAgICAgICBpZiAobiA+IDApIHtcbiAgICAgICAgICAgIHZhciBmaXRBbGxXaWR0aCA9IHcgLyBuLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xzID0gbiA+IDEsXG4gICAgICAgICAgICAgICAgbWluV2lkdGggPSBNYXRoLm1heCgzMDAsIGZpdEFsbFdpZHRoKSxcbiAgICAgICAgICAgICAgICBtYXhTbGlkZXMgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHcgLyBtaW5XaWR0aCkpLFxuICAgICAgICAgICAgICAgIHdpZHRoID0gdyAvIG1heFNsaWRlcztcblxuICAgICAgICAgICAgJCgnLmNvdXJzZV9fcHJvZmlsZXMgLml0ZW1zJykuYnhTbGlkZXIoe1xuICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb250cm9sczogY29udHJvbHMsXG4gICAgICAgICAgICAgICAgbmV4dFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+JyxcbiAgICAgICAgICAgICAgICBwcmV2VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVNYXJnaW46IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHRlc3RpbW9uaWFsc0JhY2tncm91bmRDb2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gR2V0IHRpdGxlIHRleHQgY29sb3VyIG9mIHNlbGVjdGVkIGxpc3QgaXRlbSwgaS5lLiBuZXN0ZWQgaW4gYXJpYS1oaWRkZW49XCJmYWxzZVwiXG4gICAgICAgIHZhciBzZWxlY3RlZEl0ZW1Db2xvciA9ICQoJ2xpLmNvdXJzZV9fcHJvZmlsZXNfX2l0ZW06bm90KFthcmlhLWhpZGRlbio9XCJ0cnVlXCJdKSAuY291cnNlX19wcm9maWxlc19faXRlbV9fdGV4dF9fdGl0bGUnKS5jc3MoXCJjb2xvclwiKTtcblxuICAgICAgICAvLyBBcHBseSBzZWxlY3RlZCB0ZXh0IGNvbG91ciB0byB0ZXN0aW1vbmlhbHMgd3JhcHBlciBiYWNrZ3JvdW5kXG4gICAgICAgICQoJy5jb3Vyc2VfX3Rlc3RpbW9uaWFsc19fd3JhcHBlcicpLmNzcyhcImJhY2tncm91bmRcIiwgc2VsZWN0ZWRJdGVtQ29sb3IpO1xuICAgIH0sXG5cbiAgICBpbml0QXNzZXNzbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3Vyc2UtYXNzZXNzbWVudC1jaGFydCcpO1xuXG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0QXJlYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7ZHVyYXRpb246IDEwMDAsIFwic3RhcnR1cFwiOiB0cnVlfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge3RleHQ6ICdwZXJjZW50YWdlJ30sXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQXNzZXNzbWVudCcsXG4gICAgICAgICAgICAgICAgICAgIHBpZUhvbGU6IDAuNSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyMyNTNlNTInLCAnIzNmMTU2MScsICcjZTNhMDJkJywgJyMzOTg2YWMnXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hhcnQgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uUGllQ2hhcnQoY29udGFpbmVyKTtcblxuICAgICAgICAgICAgZGF0YS5hZGRDb2x1bW4oJ3N0cmluZycsICdUeXBlJyk7XG4gICAgICAgICAgICBkYXRhLmFkZENvbHVtbignbnVtYmVyJywgJyUnKTtcblxuICAgICAgICAgICAgJCgnLmNvdXJzZV9fYXNzZXNzbWVudF9fbGlzdCBsaScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBsaSA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgZGF0YS5hZGRSb3coW2xpLmF0dHIoJ2RhdGEtbGFiZWwnKSwgcGFyc2VGbG9hdChsaS5hdHRyKCdkYXRhLXZhbHVlJykpXSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjaGFydC5kcmF3KGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBpbml0TWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1lbnUgPSAkKCcuY291cnNlX19tZW51JyksXG4gICAgICAgICAgICB0b2dnbGUgPSBtZW51LmZpbmQoJy5jb3Vyc2VfX21lbnVfX3RpdGxlIGEnKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBtZW51LmZpbmQoJy5jb3Vyc2VfX21lbnVfX2NvbnRlbnQnKTtcblxuICAgICAgICB0b2dnbGUuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnRlbnQuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGluaXRFbXBsb3ltZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9ICQoJy5jb3Vyc2VfX2VtcGxveW1lbnQnKTtcbiAgICAgICAgaWYgKHdyYXBwZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVzU3RyID0gd3JhcHBlci5hdHRyKCdkYXRhLXZhbHVlcycpIHx8ICh3cmFwcGVyLmF0dHIoJ2RhdGEtdmFsdWUnKSArIFwiOzA7MFwiKSxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXNTdHIuc3BsaXQoJzsnKS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodiB8fCAnMCcpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRvdGFsID0gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2MgKyB2XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdmFsdWVPdGhlciA9IE1hdGgubWF4KDAsIDEwMCAtIHRvdGFsKSxcbiAgICAgICAgICAgICAgICBkYXRhID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0QXJlYToge2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JywgdG9wOiAnNSUnLCBoZWlnaHQ6ICc5MCUnLCB3aWR0aDogJzkwJSd9LFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHtkdXJhdGlvbjogMTAwMCwgXCJzdGFydHVwXCI6IHRydWV9LFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgcGllU2xpY2VUZXh0OiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHt0ZXh0OiAncGVyY2VudGFnZSd9LFxuICAgICAgICAgICAgICAgICAgICBwaWVIb2xlOiAwLjg1LFxuICAgICAgICAgICAgICAgICAgICBzbGljZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDA6IHtjb2xvcjogJyNhMjI4MzMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDE6IHtjb2xvcjogJyNkYjYzNjMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDI6IHtjb2xvcjogJyNkOTk4OTgnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDM6IHtjb2xvcjogJyNkOWQ5ZDknfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5QaWVDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291cnNlLWRlc3RpbmF0aW9ucy1lbXBsb3ltZW50LWNoYXJ0JykpO1xuXG4gICAgICAgICAgICBkYXRhLmFkZENvbHVtbignc3RyaW5nJywgJ1R5cGUnKTtcbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCAnJScpO1xuICAgICAgICAgICAgZGF0YS5hZGRSb3coWydJbiBlbXBsb3ltZW50JywgdmFsdWVzWzBdXSk7XG4gICAgICAgICAgICBkYXRhLmFkZFJvdyhbJ1dvcmsgYW5kIHN0dWR5JywgdmFsdWVzWzFdXSk7XG4gICAgICAgICAgICBkYXRhLmFkZFJvdyhbJ0Z1cnRoZXIgc3R1ZHknLCB2YWx1ZXNbMl1dKTtcbiAgICAgICAgICAgIGRhdGEuYWRkUm93KFsnVW5lbXBsb3llZCcsIHZhbHVlT3RoZXJdKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjaGFydC5kcmF3KGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIGluaXREZXN0aW5hdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBpbml0RW1wbG95bWVudCgpO1xuICAgIH0sXG5cbiAgICBpbml0Q2hhcnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGFydHMub25Jbml0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9uUmVzaXplKGNvbXBvc2VGdW5jdGlvbnMoaW5pdEFzc2Vzc21lbnQoKSwgaW5pdERlc3RpbmF0aW9ucygpKSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbml0UmVhZE1vcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDYwMCkge1xuICAgICAgICAgICAgJCgnLmNvdXJzZV9fd2hpdGUtYm94JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJveCA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBib3guZmluZCgnLmNvdXJzZV9fd2hpdGUtYm94X19jb250ZW50Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udGVudC5oZWlnaHQoKSA+IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFkZENsYXNzKCdjb3Vyc2VfX3doaXRlLWJveF9fY29udGVudC0tcmVhZC1tb3JlJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBidXR0b24gPSAkKCc8ZGl2IGNsYXNzPVwiY291cnNlX193aGl0ZS1ib3hfX3JlYWQtbW9yZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjb3Vyc2VfX3doaXRlLWJveF9fcmVhZC1tb3JlX19iZ1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxhICBocmVmPVwiI1wiPjxzcGFuPnJlYWQgbW9yZTwvc3Bhbj48L2E+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2xhc3MoJ2NvdXJzZV9fd2hpdGUtYm94X19jb250ZW50LS1yZWFkLW1vcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYXBwZW5kVG8oYm94KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluaXRLaXNXaWRnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3aWRnZXQgPSAkKCcjdW5pc3RhdHMtd2lkZ2V0LWZyYW1lJyk7XG5cbiAgICAgICAgaWYgKHdpZGdldC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9ICQoJy5jb3Vyc2VfX2tpcycpLFxuICAgICAgICAgICAgICAgIHVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNyYyA9IHdpZGdldC5hdHRyKCdzcmMnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIb3Jpem9udGFsID0gc3JjLmluZGV4T2YoJ2hvcml6b250YWwnKSA+PSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVlZGVkSG9yaXpvbnRhbCA9ICQod2luZG93KS53aWR0aCgpID4gNjM1O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SG9yaXpvbnRhbCAhPT0gbmVlZGVkSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRTcmMgPSBuZWVkZWRIb3Jpem9udGFsID8gc3JjLnJlcGxhY2UoL3ZlcnRpY2FsLywgJ2hvcml6b250YWwnKSA6IHNyYy5yZXBsYWNlKC9ob3Jpem9udGFsLywgJ3ZlcnRpY2FsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFN0eWxlID0gbmVlZGVkSG9yaXpvbnRhbCA/IHt3aWR0aDogJzYxNXB4JywgaGVpZ2h0OiAnMTUwcHgnfSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTkwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTAwcHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5hdHRyKCdzcmMnLCBuZXh0U3JjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5jc3MobmV4dFN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIudG9nZ2xlQ2xhc3MoJ2NvdXJzZV9fa2lzLS12ZXJ0aWNhbCcsICFuZWVkZWRIb3Jpem9udGFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvblJlc2l6ZSh1cGRhdGUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluaXRLaXNXaWRnZXQoKTtcbiAgICAgICAgaW5pdEFjY29yZGlvbnMoKTtcbiAgICAgICAgaW5pdEVudHJpZXMoKTtcbiAgICAgICAgaW5pdFRlc3RpbW9uaWFscygpO1xuICAgICAgICBpbml0Q2hhcnRzKCk7XG4gICAgICAgIGluaXRSZWFkTW9yZSgpO1xuICAgICAgICBpbml0QXBwbHlEaWFsb2coKTtcbiAgICAgICAgaW5pdE1lbnUoKTtcbiAgICAgICAgdGVzdGltb25pYWxzQmFja2dyb3VuZENvbG9yKCk7XG4gICAgfTtcblxuZGVmZXIoaW5pdCk7XG5cbi8vIENoYW5nZSB0ZXN0aW1vbmlhbCB3cmFwcGVyIGJhY2tncm91bmQgY29sb3VyIHdoZW4gdXNlciBzY3JvbGxzIHRocm91Z2ggaXRlbXNcbiQoXCIuY291cnNlX190ZXN0aW1vbmlhbHNfX3dyYXBwZXJcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgdGVzdGltb25pYWxzQmFja2dyb3VuZENvbG9yKCk7XG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy9jb3Vyc2UuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyICQgPSByZXF1aXJlKCcuLi9saWJzL2pxdWVyeScpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChmLCBydW5Ob3cpIHtcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmKTtcbiAgICAgICAgaWYgKHJ1bk5vdykge1xuICAgICAgICAgICAgZigpO1xuICAgICAgICB9XG4gICAgfTtcblxufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvdXRpbHMvb24tcmVzaXplLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBleHBhbmQgPSBmdW5jdGlvbiAoZXhwYW5kZWQsIGxpc3QpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gbGlzdFtpXTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbSAmJiBpdGVtLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmQoZXhwYW5kZWQsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGV4cGFuZGVkID0gW107XG4gICAgICAgICAgICBleHBhbmQoZXhwYW5kZWQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwYW5kZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRbaV0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGNvbXBvc2Vcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91dGlscy9jb21wb3NlLWZ1bmN0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgc3RhdGUgPSAnbm90LWxvYWRlZCcsXG5cbiAgICAgICAgY2FsbGJhY2tzID0gW10sXG5cbiAgICAgICAgbG9hZENvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3RhdGUgPSAnbG9hZGVkJztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2hlY2tMb2FkQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZ29vZ2xlLnZpc3VhbGl6YXRpb24gJiYgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKSB7XG4gICAgICAgICAgICAgICAgbG9hZENvbXBsZXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2hlY2tMb2FkQ29tcGxldGUsIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN0YXRlID0gJ2xvYWRpbmcnO1xuXG4gICAgICAgICAgICBnb29nbGUubG9hZCgndmlzdWFsaXphdGlvbicsICcxLjAnLCB7XG4gICAgICAgICAgICAgICAgJ3BhY2thZ2VzJzogWydjb3JlY2hhcnQnXSwgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdvb2dsZS5zZXRPbkxvYWRDYWxsYmFjayhjaGVja0xvYWRDb21wbGV0ZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25Jbml0ID0gZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gJ2xvYWRlZCcpIHtcbiAgICAgICAgICAgICAgICBmKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGYpO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gJ25vdC1sb2FkZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvbkluaXQ6IG9uSW5pdFxuICAgIH07XG59KCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91dGlscy9jaGFydHMuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=