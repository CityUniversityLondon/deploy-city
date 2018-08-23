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

var $ = __webpack_require__(1),
    onResize = __webpack_require__(58),
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
        initMenu();
        initAccordions();
        initEntries();
        initTestimonials();
        initCharts();
        initReadMore();
        initApplyDialog();
    };

defer(init);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTNiYjZkZjM5MWJmMmZjOTIxZDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvY291cnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL3V0aWxzL29uLXJlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvY29tcG9zZS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2NoYXJ0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBLDBCOzs7Ozs7O0FDSEE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx1Q0FBdUM7QUFDdkMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEc7Ozs7Ozs7QUNqQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLHFDQUFx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InNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDU3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhM2JiNmRmMzkxYmYyZmM5MjFkNiIsIi8qKlxuICogZXhwZWN0cyBqUXVlcnkgdG8gYmUgcHJvdmlkZWQgYnkgQ0lUWV9SLmpzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LiQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy9saWJzL2pxdWVyeS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciAkID0gcmVxdWlyZSgnLi4vbGlicy9qcXVlcnknKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoZGVmZXJyZWRGdW5jdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIENJVFkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAkKGRlZmVycmVkRnVuY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUyA9IHtkZWZlcjogW119O1xuICAgICAgICAgICAgfSBlbHNlIGlmICghd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlcikge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIENJVFlfT1BUSU9OUy5kZWZlci5wdXNoKGRlZmVycmVkRnVuY3Rpb24pO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL3V0aWxzL2RlZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA2IDcgOCIsInZhciAkID0gcmVxdWlyZSgnLi9saWJzL2pxdWVyeScpLFxuICAgIG9uUmVzaXplID0gcmVxdWlyZSgnLi91dGlscy9vbi1yZXNpemUnKSxcbiAgICBjb21wb3NlRnVuY3Rpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvY29tcG9zZS1mdW5jdGlvbnMnKSxcbiAgICBkZWZlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmZXInKSxcbiAgICBjaGFydHMgPSByZXF1aXJlKCcuLi91dGlscy9jaGFydHMnKSxcblxuICAgIGluaXRBY2NvcmRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuY291cnNlX19hY2NvcmRpb24nKS5hY2NvcmRpb24oe1xuICAgICAgICAgICAgaGVpZ2h0U3R5bGU6IFwiY29udGVudFwiLFxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgYW5pbWF0ZTogZmFsc2UsXG4gICAgICAgICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgIGlmICghJC5pc0VtcHR5T2JqZWN0KHVpLm5ld0hlYWRlci5vZmZzZXQoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbDpub3QoOmFuaW1hdGVkKSwgYm9keTpub3QoOmFuaW1hdGVkKScpLmFuaW1hdGUoe3Njcm9sbFRvcDogdWkubmV3SGVhZGVyLm9mZnNldCgpLnRvcH0sICdzbG93Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdEFwcGx5RGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCdhW2hyZWY9XCIjYXBwbHktZGlhbG9nXCJdJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJCgnI2FwcGx5LWRpYWxvZycpLmRpYWxvZyh7XG4gICAgICAgICAgICAgICAgbW9kYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b09wZW46IHRydWUsXG4gICAgICAgICAgICAgICAgZGlhbG9nQ2xhc3M6IFwiYXBwbHktZGlhbG9nXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSG93IHRvIEFwcGx5XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNjAlXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXNpemFibGU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGluaXRFbnRyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuY291cnNlX19lbnRyaWVzIHNlbGVjdCcpLmNoYW5nZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykuYXR0cignZGF0YS11cmwnKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGluaXRUZXN0aW1vbmlhbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3ID0gJCgnLmNvdXJzZV9fcHJvZmlsZXMnKS53aWR0aCgpLFxuICAgICAgICAgICAgbiA9ICQoJy5jb3Vyc2VfX3Byb2ZpbGVzX19pdGVtJykubGVuZ3RoO1xuXG4gICAgICAgIGlmIChuID4gMCkge1xuICAgICAgICAgICAgdmFyIGZpdEFsbFdpZHRoID0gdyAvIG4sXG4gICAgICAgICAgICAgICAgY29udHJvbHMgPSBuID4gMSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aCA9IE1hdGgubWF4KDMwMCwgZml0QWxsV2lkdGgpLFxuICAgICAgICAgICAgICAgIG1heFNsaWRlcyA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodyAvIG1pbldpZHRoKSksXG4gICAgICAgICAgICAgICAgd2lkdGggPSB3IC8gbWF4U2xpZGVzO1xuXG4gICAgICAgICAgICAkKCcuY291cnNlX19wcm9maWxlcyAuaXRlbXMnKS5ieFNsaWRlcih7XG4gICAgICAgICAgICAgICAgcGFnZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBjb250cm9scyxcbiAgICAgICAgICAgICAgICBuZXh0VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT4nLFxuICAgICAgICAgICAgICAgIHByZXZUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L2k+JyxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZU1hcmdpbjogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG5cbiAgICBpbml0QXNzZXNzbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3Vyc2UtYXNzZXNzbWVudC1jaGFydCcpO1xuXG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0QXJlYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7ZHVyYXRpb246IDEwMDAsIFwic3RhcnR1cFwiOiB0cnVlfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge3RleHQ6ICdwZXJjZW50YWdlJ30sXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQXNzZXNzbWVudCcsXG4gICAgICAgICAgICAgICAgICAgIHBpZUhvbGU6IDAuNSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyMyNTNlNTInLCAnIzNmMTU2MScsICcjZTNhMDJkJywgJyMzOTg2YWMnXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hhcnQgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uUGllQ2hhcnQoY29udGFpbmVyKTtcblxuICAgICAgICAgICAgZGF0YS5hZGRDb2x1bW4oJ3N0cmluZycsICdUeXBlJyk7XG4gICAgICAgICAgICBkYXRhLmFkZENvbHVtbignbnVtYmVyJywgJyUnKTtcblxuICAgICAgICAgICAgJCgnLmNvdXJzZV9fYXNzZXNzbWVudF9fbGlzdCBsaScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBsaSA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgZGF0YS5hZGRSb3coW2xpLmF0dHIoJ2RhdGEtbGFiZWwnKSwgcGFyc2VGbG9hdChsaS5hdHRyKCdkYXRhLXZhbHVlJykpXSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjaGFydC5kcmF3KGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBpbml0TWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1lbnUgPSAkKCcuY291cnNlX19tZW51JyksXG4gICAgICAgICAgICB0b2dnbGUgPSBtZW51LmZpbmQoJy5jb3Vyc2VfX21lbnVfX3RpdGxlIGEnKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBtZW51LmZpbmQoJy5jb3Vyc2VfX21lbnVfX2NvbnRlbnQnKTtcblxuICAgICAgICB0b2dnbGUuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnRlbnQuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGluaXRFbXBsb3ltZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9ICQoJy5jb3Vyc2VfX2VtcGxveW1lbnQnKTtcbiAgICAgICAgaWYgKHdyYXBwZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVzU3RyID0gd3JhcHBlci5hdHRyKCdkYXRhLXZhbHVlcycpIHx8ICh3cmFwcGVyLmF0dHIoJ2RhdGEtdmFsdWUnKSArIFwiOzA7MFwiKSxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXNTdHIuc3BsaXQoJzsnKS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodiB8fCAnMCcpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRvdGFsID0gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2MgKyB2XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdmFsdWVPdGhlciA9IE1hdGgubWF4KDAsIDEwMCAtIHRvdGFsKSxcbiAgICAgICAgICAgICAgICBkYXRhID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0QXJlYToge2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JywgdG9wOiAnNSUnLCBoZWlnaHQ6ICc5MCUnLCB3aWR0aDogJzkwJSd9LFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHtkdXJhdGlvbjogMTAwMCwgXCJzdGFydHVwXCI6IHRydWV9LFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgcGllU2xpY2VUZXh0OiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHt0ZXh0OiAncGVyY2VudGFnZSd9LFxuICAgICAgICAgICAgICAgICAgICBwaWVIb2xlOiAwLjg1LFxuICAgICAgICAgICAgICAgICAgICBzbGljZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDA6IHtjb2xvcjogJyNhMjI4MzMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDE6IHtjb2xvcjogJyNkYjYzNjMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDI6IHtjb2xvcjogJyNkOTk4OTgnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDM6IHtjb2xvcjogJyNkOWQ5ZDknfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5QaWVDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291cnNlLWRlc3RpbmF0aW9ucy1lbXBsb3ltZW50LWNoYXJ0JykpO1xuXG4gICAgICAgICAgICBkYXRhLmFkZENvbHVtbignc3RyaW5nJywgJ1R5cGUnKTtcbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCAnJScpO1xuICAgICAgICAgICAgZGF0YS5hZGRSb3coWydJbiBlbXBsb3ltZW50JywgdmFsdWVzWzBdXSk7XG4gICAgICAgICAgICBkYXRhLmFkZFJvdyhbJ1dvcmsgYW5kIHN0dWR5JywgdmFsdWVzWzFdXSk7XG4gICAgICAgICAgICBkYXRhLmFkZFJvdyhbJ0Z1cnRoZXIgc3R1ZHknLCB2YWx1ZXNbMl1dKTtcbiAgICAgICAgICAgIGRhdGEuYWRkUm93KFsnVW5lbXBsb3llZCcsIHZhbHVlT3RoZXJdKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjaGFydC5kcmF3KGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIGluaXREZXN0aW5hdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBpbml0RW1wbG95bWVudCgpO1xuICAgIH0sXG5cbiAgICBpbml0Q2hhcnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGFydHMub25Jbml0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9uUmVzaXplKGNvbXBvc2VGdW5jdGlvbnMoaW5pdEFzc2Vzc21lbnQoKSwgaW5pdERlc3RpbmF0aW9ucygpKSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbml0UmVhZE1vcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDYwMCkge1xuICAgICAgICAgICAgJCgnLmNvdXJzZV9fd2hpdGUtYm94JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJveCA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBib3guZmluZCgnLmNvdXJzZV9fd2hpdGUtYm94X19jb250ZW50Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udGVudC5oZWlnaHQoKSA+IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFkZENsYXNzKCdjb3Vyc2VfX3doaXRlLWJveF9fY29udGVudC0tcmVhZC1tb3JlJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBidXR0b24gPSAkKCc8ZGl2IGNsYXNzPVwiY291cnNlX193aGl0ZS1ib3hfX3JlYWQtbW9yZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjb3Vyc2VfX3doaXRlLWJveF9fcmVhZC1tb3JlX19iZ1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxhICBocmVmPVwiI1wiPjxzcGFuPnJlYWQgbW9yZTwvc3Bhbj48L2E+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2xhc3MoJ2NvdXJzZV9fd2hpdGUtYm94X19jb250ZW50LS1yZWFkLW1vcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYXBwZW5kVG8oYm94KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluaXRLaXNXaWRnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3aWRnZXQgPSAkKCcjdW5pc3RhdHMtd2lkZ2V0LWZyYW1lJyk7XG5cbiAgICAgICAgaWYgKHdpZGdldC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9ICQoJy5jb3Vyc2VfX2tpcycpLFxuICAgICAgICAgICAgICAgIHVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNyYyA9IHdpZGdldC5hdHRyKCdzcmMnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIb3Jpem9udGFsID0gc3JjLmluZGV4T2YoJ2hvcml6b250YWwnKSA+PSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVlZGVkSG9yaXpvbnRhbCA9ICQod2luZG93KS53aWR0aCgpID4gNjM1O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SG9yaXpvbnRhbCAhPT0gbmVlZGVkSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRTcmMgPSBuZWVkZWRIb3Jpem9udGFsID8gc3JjLnJlcGxhY2UoL3ZlcnRpY2FsLywgJ2hvcml6b250YWwnKSA6IHNyYy5yZXBsYWNlKC9ob3Jpem9udGFsLywgJ3ZlcnRpY2FsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFN0eWxlID0gbmVlZGVkSG9yaXpvbnRhbCA/IHt3aWR0aDogJzYxNXB4JywgaGVpZ2h0OiAnMTUwcHgnfSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTkwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTAwcHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5hdHRyKCdzcmMnLCBuZXh0U3JjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5jc3MobmV4dFN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIudG9nZ2xlQ2xhc3MoJ2NvdXJzZV9fa2lzLS12ZXJ0aWNhbCcsICFuZWVkZWRIb3Jpem9udGFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvblJlc2l6ZSh1cGRhdGUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluaXRLaXNXaWRnZXQoKTtcbiAgICAgICAgaW5pdE1lbnUoKTtcbiAgICAgICAgaW5pdEFjY29yZGlvbnMoKTtcbiAgICAgICAgaW5pdEVudHJpZXMoKTtcbiAgICAgICAgaW5pdFRlc3RpbW9uaWFscygpO1xuICAgICAgICBpbml0Q2hhcnRzKCk7XG4gICAgICAgIGluaXRSZWFkTW9yZSgpO1xuICAgICAgICBpbml0QXBwbHlEaWFsb2coKTtcbiAgICB9O1xuXG5kZWZlcihpbml0KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvY291cnNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciAkID0gcmVxdWlyZSgnLi4vbGlicy9qcXVlcnknKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoZiwgcnVuTm93KSB7XG4gICAgICAgICQod2luZG93KS5yZXNpemUoZik7XG4gICAgICAgIGlmIChydW5Ob3cpIHtcbiAgICAgICAgICAgIGYoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL3V0aWxzL29uLXJlc2l6ZS5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgZXhwYW5kID0gZnVuY3Rpb24gKGV4cGFuZGVkLCBsaXN0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0gJiYgaXRlbS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kKGV4cGFuZGVkLCBpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBleHBhbmRlZCA9IFtdO1xuICAgICAgICAgICAgZXhwYW5kKGV4cGFuZGVkLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGFuZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkW2ldKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgIHJldHVybiBjb21wb3NlXG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdXRpbHMvY29tcG9zZS1mdW5jdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIHN0YXRlID0gJ25vdC1sb2FkZWQnLFxuXG4gICAgICAgIGNhbGxiYWNrcyA9IFtdLFxuXG4gICAgICAgIGxvYWRDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN0YXRlID0gJ2xvYWRlZCc7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNoZWNrTG9hZENvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGdvb2dsZS52aXN1YWxpemF0aW9uICYmIGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSkge1xuICAgICAgICAgICAgICAgIGxvYWRDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNoZWNrTG9hZENvbXBsZXRlLCAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzdGF0ZSA9ICdsb2FkaW5nJztcblxuICAgICAgICAgICAgZ29vZ2xlLmxvYWQoJ3Zpc3VhbGl6YXRpb24nLCAnMS4wJywge1xuICAgICAgICAgICAgICAgICdwYWNrYWdlcyc6IFsnY29yZWNoYXJ0J10sIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnb29nbGUuc2V0T25Mb2FkQ2FsbGJhY2soY2hlY2tMb2FkQ29tcGxldGUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uSW5pdCA9IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09ICdsb2FkZWQnKSB7XG4gICAgICAgICAgICAgICAgZigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MucHVzaChmKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09ICdub3QtbG9hZGVkJykge1xuICAgICAgICAgICAgICAgICAgICBsb2FkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb25Jbml0OiBvbkluaXRcbiAgICB9O1xufSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdXRpbHMvY2hhcnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9