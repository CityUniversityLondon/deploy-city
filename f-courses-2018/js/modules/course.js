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

// $ = require('./libs/jquery');
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
            console.log("I hate JavaScript");
            $(this).text(function(i, v){
               return v == 'Hide' ? 'Show' : 'Hide'
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGE4OWQ3MjY5ZWU2MjZkM2JjODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvY291cnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL3V0aWxzL29uLXJlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvY29tcG9zZS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2NoYXJ0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBLDBCOzs7Ozs7O0FDSEE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx1Q0FBdUM7QUFDdkMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEc7Ozs7Ozs7QUNqQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLHFDQUFxQztBQUNoSDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGdDQUFnQyxnQ0FBZ0M7QUFDaEUsOEJBQThCLG1CQUFtQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLEVBQUU7QUFDN0YsMkNBQTJDO0FBQzNDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1RUFBdUU7QUFDdkcsZ0NBQWdDLGdDQUFnQztBQUNoRTtBQUNBO0FBQ0EsOEJBQThCLG1CQUFtQjtBQUNqRDtBQUNBO0FBQ0EsNEJBQTRCLGlCQUFpQjtBQUM3Qyw0QkFBNEIsaUJBQWlCO0FBQzdDLDRCQUE0QixpQkFBaUI7QUFDN0MsNEJBQTRCO0FBQzVCO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxhQUFhOztBQUViO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTRELGdDQUFnQztBQUM1RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3pPQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxHOzs7Ozs7O0FDWEQ7O0FBRUE7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxQkFBcUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLEc7Ozs7Ozs7QUN6QkQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoibW9kdWxlcy9jb3Vyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1Nyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGE4OWQ3MjY5ZWU2MjZkM2JjODgiLCIvKipcbiAqIGV4cGVjdHMgalF1ZXJ5IHRvIGJlIHByb3ZpZGVkIGJ5IENJVFlfUi5qc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy4kO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICQgPSByZXF1aXJlKCcuLi9saWJzL2pxdWVyeScpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkZWZlcnJlZEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgQ0lUWSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICQoZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TID0ge2RlZmVyOiBbXX07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlciA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ0lUWV9PUFRJT05TLmRlZmVyLnB1c2goZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDYgNyIsIi8vICQgPSByZXF1aXJlKCcuL2xpYnMvanF1ZXJ5Jyk7XG52YXIgb25SZXNpemUgPSByZXF1aXJlKCcuL3V0aWxzL29uLXJlc2l6ZScpLFxuICAgIGNvbXBvc2VGdW5jdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy9jb21wb3NlLWZ1bmN0aW9ucycpLFxuICAgIGRlZmVyID0gcmVxdWlyZSgnLi91dGlscy9kZWZlcicpLFxuICAgIGNoYXJ0cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NoYXJ0cycpLFxuXG4gICAgaW5pdEFjY29yZGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5jb3Vyc2VfX2FjY29yZGlvbicpLmFjY29yZGlvbih7XG4gICAgICAgICAgICBoZWlnaHRTdHlsZTogXCJjb250ZW50XCIsXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkLmlzRW1wdHlPYmplY3QodWkubmV3SGVhZGVyLm9mZnNldCgpKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdodG1sOm5vdCg6YW5pbWF0ZWQpLCBib2R5Om5vdCg6YW5pbWF0ZWQpJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB1aS5uZXdIZWFkZXIub2Zmc2V0KCkudG9wfSwgJ3Nsb3cnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbml0QXBwbHlEaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ2FbaHJlZj1cIiNhcHBseS1kaWFsb2dcIl0nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKCcjYXBwbHktZGlhbG9nJykuZGlhbG9nKHtcbiAgICAgICAgICAgICAgICBtb2RhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvT3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaWFsb2dDbGFzczogXCJhcHBseS1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJIb3cgdG8gQXBwbHlcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI2MCVcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc2l6YWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdEVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5jb3Vyc2VfX2VudHJpZXMgc2VsZWN0JykuY2hhbmdlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLXVybCcpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdFRlc3RpbW9uaWFscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHcgPSAkKCcuY291cnNlX19wcm9maWxlcycpLndpZHRoKCksXG4gICAgICAgICAgICBuID0gJCgnLmNvdXJzZV9fcHJvZmlsZXNfX2l0ZW0nKS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgICAgICB2YXIgZml0QWxsV2lkdGggPSB3IC8gbixcbiAgICAgICAgICAgICAgICBjb250cm9scyA9IG4gPiAxLFxuICAgICAgICAgICAgICAgIG1pbldpZHRoID0gTWF0aC5tYXgoMzAwLCBmaXRBbGxXaWR0aCksXG4gICAgICAgICAgICAgICAgbWF4U2xpZGVzID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih3IC8gbWluV2lkdGgpKSxcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHcgLyBtYXhTbGlkZXM7XG5cbiAgICAgICAgICAgICQoJy5jb3Vyc2VfX3Byb2ZpbGVzIC5pdGVtcycpLmJ4U2xpZGVyKHtcbiAgICAgICAgICAgICAgICBwYWdlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IGNvbnRyb2xzLFxuICAgICAgICAgICAgICAgIG5leHRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgcHJldlRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4nLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlTWFyZ2luOiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIGluaXRBc3Nlc3NtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdXJzZS1hc3Nlc3NtZW50LWNoYXJ0Jyk7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCksXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRBcmVhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHtkdXJhdGlvbjogMTAwMCwgXCJzdGFydHVwXCI6IHRydWV9LFxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7dGV4dDogJ3BlcmNlbnRhZ2UnfSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdBc3Nlc3NtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgcGllSG9sZTogMC41LFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnIzI1M2U1MicsICcjM2YxNTYxJywgJyNlM2EwMmQnLCAnIzM5ODZhYyddXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5QaWVDaGFydChjb250YWluZXIpO1xuXG4gICAgICAgICAgICBkYXRhLmFkZENvbHVtbignc3RyaW5nJywgJ1R5cGUnKTtcbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCAnJScpO1xuXG4gICAgICAgICAgICAkKCcuY291cnNlX19hc3Nlc3NtZW50X19saXN0IGxpJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFkZFJvdyhbbGkuYXR0cignZGF0YS1sYWJlbCcpLCBwYXJzZUZsb2F0KGxpLmF0dHIoJ2RhdGEtdmFsdWUnKSldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNoYXJ0LmRyYXcoZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluaXRNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWVudSA9ICQoJy5jb3Vyc2VfX21lbnUnKSxcbiAgICAgICAgICAgIHRvZ2dsZSA9IG1lbnUuZmluZCgnLmNvdXJzZV9fbWVudV9fdGl0bGUgYScpLFxuICAgICAgICAgICAgY29udGVudCA9IG1lbnUuZmluZCgnLmNvdXJzZV9fbWVudV9fY29udGVudCcpO1xuXG4gICAgICAgIHRvZ2dsZS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGhhdGUgSmF2YVNjcmlwdFwiKTtcbiAgICAgICAgICAgICQodGhpcykudGV4dChmdW5jdGlvbihpLCB2KXtcbiAgICAgICAgICAgICAgIHJldHVybiB2ID09ICdIaWRlJyA/ICdTaG93JyA6ICdIaWRlJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250ZW50LnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbml0RW1wbG95bWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSAkKCcuY291cnNlX19lbXBsb3ltZW50Jyk7XG4gICAgICAgIGlmICh3cmFwcGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlc1N0ciA9IHdyYXBwZXIuYXR0cignZGF0YS12YWx1ZXMnKSB8fCAod3JhcHBlci5hdHRyKCdkYXRhLXZhbHVlJykgKyBcIjswOzBcIiksXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzU3RyLnNwbGl0KCc7JykubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHYgfHwgJzAnKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB0b3RhbCA9IHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgdikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjICsgdlxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHZhbHVlT3RoZXIgPSBNYXRoLm1heCgwLCAxMDAgLSB0b3RhbCksXG4gICAgICAgICAgICAgICAgZGF0YSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBjaGFydEFyZWE6IHtiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIHRvcDogJzUlJywgaGVpZ2h0OiAnOTAlJywgd2lkdGg6ICc5MCUnfSxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7ZHVyYXRpb246IDEwMDAsIFwic3RhcnR1cFwiOiB0cnVlfSxcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHBpZVNsaWNlVGV4dDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7dGV4dDogJ3BlcmNlbnRhZ2UnfSxcbiAgICAgICAgICAgICAgICAgICAgcGllSG9sZTogMC44NSxcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAwOiB7Y29sb3I6ICcjYTIyODMzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAxOiB7Y29sb3I6ICcjZGI2MzYzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAyOiB7Y29sb3I6ICcjZDk5ODk4J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAzOiB7Y29sb3I6ICcjZDlkOWQ5J31cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hhcnQgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uUGllQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdXJzZS1kZXN0aW5hdGlvbnMtZW1wbG95bWVudC1jaGFydCcpKTtcblxuICAgICAgICAgICAgZGF0YS5hZGRDb2x1bW4oJ3N0cmluZycsICdUeXBlJyk7XG4gICAgICAgICAgICBkYXRhLmFkZENvbHVtbignbnVtYmVyJywgJyUnKTtcbiAgICAgICAgICAgIGRhdGEuYWRkUm93KFsnSW4gZW1wbG95bWVudCcsIHZhbHVlc1swXV0pO1xuICAgICAgICAgICAgZGF0YS5hZGRSb3coWydXb3JrIGFuZCBzdHVkeScsIHZhbHVlc1sxXV0pO1xuICAgICAgICAgICAgZGF0YS5hZGRSb3coWydGdXJ0aGVyIHN0dWR5JywgdmFsdWVzWzJdXSk7XG4gICAgICAgICAgICBkYXRhLmFkZFJvdyhbJ1VuZW1wbG95ZWQnLCB2YWx1ZU90aGVyXSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2hhcnQuZHJhdyhkYXRhLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG5cbiAgICBpbml0RGVzdGluYXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaW5pdEVtcGxveW1lbnQoKTtcbiAgICB9LFxuXG4gICAgaW5pdENoYXJ0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hhcnRzLm9uSW5pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvblJlc2l6ZShjb21wb3NlRnVuY3Rpb25zKGluaXRBc3Nlc3NtZW50KCksIGluaXREZXN0aW5hdGlvbnMoKSksIHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdFJlYWRNb3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA2MDApIHtcbiAgICAgICAgICAgICQoJy5jb3Vyc2VfX3doaXRlLWJveCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBib3ggPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gYm94LmZpbmQoJy5jb3Vyc2VfX3doaXRlLWJveF9fY29udGVudCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQuaGVpZ2h0KCkgPiAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5hZGRDbGFzcygnY291cnNlX193aGl0ZS1ib3hfX2NvbnRlbnQtLXJlYWQtbW9yZScpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYnV0dG9uID0gJCgnPGRpdiBjbGFzcz1cImNvdXJzZV9fd2hpdGUtYm94X19yZWFkLW1vcmVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY291cnNlX193aGl0ZS1ib3hfX3JlYWQtbW9yZV9fYmdcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8YSAgaHJlZj1cIiNcIj48c3Bhbj5yZWFkIG1vcmU8L3NwYW4+PC9hPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZUNsYXNzKCdjb3Vyc2VfX3doaXRlLWJveF9fY29udGVudC0tcmVhZC1tb3JlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmFwcGVuZFRvKGJveCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBpbml0S2lzV2lkZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd2lkZ2V0ID0gJCgnI3VuaXN0YXRzLXdpZGdldC1mcmFtZScpO1xuXG4gICAgICAgIGlmICh3aWRnZXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSAkKCcuY291cnNlX19raXMnKSxcbiAgICAgICAgICAgICAgICB1cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzcmMgPSB3aWRnZXQuYXR0cignc3JjJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SG9yaXpvbnRhbCA9IHNyYy5pbmRleE9mKCdob3Jpem9udGFsJykgPj0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRlZEhvcml6b250YWwgPSAkKHdpbmRvdykud2lkdGgoKSA+IDYzNTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEhvcml6b250YWwgIT09IG5lZWRlZEhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXh0U3JjID0gbmVlZGVkSG9yaXpvbnRhbCA/IHNyYy5yZXBsYWNlKC92ZXJ0aWNhbC8sICdob3Jpem9udGFsJykgOiBzcmMucmVwbGFjZSgvaG9yaXpvbnRhbC8sICd2ZXJ0aWNhbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTdHlsZSA9IG5lZWRlZEhvcml6b250YWwgPyB7d2lkdGg6ICc2MTVweCcsIGhlaWdodDogJzE1MHB4J30gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzE5MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzUwMHB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuYXR0cignc3JjJywgbmV4dFNyYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuY3NzKG5leHRTdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnRvZ2dsZUNsYXNzKCdjb3Vyc2VfX2tpcy0tdmVydGljYWwnLCAhbmVlZGVkSG9yaXpvbnRhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgb25SZXNpemUodXBkYXRlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbml0S2lzV2lkZ2V0KCk7XG4gICAgICAgIGluaXRBY2NvcmRpb25zKCk7XG4gICAgICAgIGluaXRFbnRyaWVzKCk7XG4gICAgICAgIGluaXRUZXN0aW1vbmlhbHMoKTtcbiAgICAgICAgaW5pdENoYXJ0cygpO1xuICAgICAgICBpbml0UmVhZE1vcmUoKTtcbiAgICAgICAgaW5pdEFwcGx5RGlhbG9nKCk7XG4gICAgICAgIGluaXRNZW51KCk7XG4gICAgfTtcblxuZGVmZXIoaW5pdCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL2NvdXJzZS5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgJCA9IHJlcXVpcmUoJy4uL2xpYnMvanF1ZXJ5Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGYsIHJ1bk5vdykge1xuICAgICAgICAkKHdpbmRvdykucmVzaXplKGYpO1xuICAgICAgICBpZiAocnVuTm93KSB7XG4gICAgICAgICAgICBmKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy91dGlscy9vbi1yZXNpemUuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGV4cGFuZCA9IGZ1bmN0aW9uIChleHBhbmRlZCwgbGlzdCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtICYmIGl0ZW0uY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZChleHBhbmRlZCwgaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXBvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZXhwYW5kZWQgPSBbXTtcbiAgICAgICAgICAgIGV4cGFuZChleHBhbmRlZCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBhbmRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZFtpXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICByZXR1cm4gY29tcG9zZVxufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3V0aWxzL2NvbXBvc2UtZnVuY3Rpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBzdGF0ZSA9ICdub3QtbG9hZGVkJyxcblxuICAgICAgICBjYWxsYmFja3MgPSBbXSxcblxuICAgICAgICBsb2FkQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzdGF0ZSA9ICdsb2FkZWQnO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjaGVja0xvYWRDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChnb29nbGUudmlzdWFsaXphdGlvbiAmJiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUpIHtcbiAgICAgICAgICAgICAgICBsb2FkQ29tcGxldGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChjaGVja0xvYWRDb21wbGV0ZSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3RhdGUgPSAnbG9hZGluZyc7XG5cbiAgICAgICAgICAgIGdvb2dsZS5sb2FkKCd2aXN1YWxpemF0aW9uJywgJzEuMCcsIHtcbiAgICAgICAgICAgICAgICAncGFja2FnZXMnOiBbJ2NvcmVjaGFydCddLCBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ29vZ2xlLnNldE9uTG9hZENhbGxiYWNrKGNoZWNrTG9hZENvbXBsZXRlKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbkluaXQgPSBmdW5jdGlvbiAoZikge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAnbG9hZGVkJykge1xuICAgICAgICAgICAgICAgIGYoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLnB1c2goZik7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSAnbm90LWxvYWRlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG9uSW5pdDogb25Jbml0XG4gICAgfTtcbn0oKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3V0aWxzL2NoYXJ0cy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==