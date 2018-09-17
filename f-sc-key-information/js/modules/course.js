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
                slideMargin: 0,
                touchEnabled: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGNjZTZiNDFhOWYzNTIwNTMzOWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvY291cnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL3V0aWxzL29uLXJlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvY29tcG9zZS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2NoYXJ0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBLDBCOzs7Ozs7O0FDSEE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx1Q0FBdUM7QUFDdkMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEc7Ozs7Ozs7QUNqQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLHFDQUFx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QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoibW9kdWxlcy9jb3Vyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1Nyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGNjZTZiNDFhOWYzNTIwNTMzOWQiLCIvKipcbiAqIGV4cGVjdHMgalF1ZXJ5IHRvIGJlIHByb3ZpZGVkIGJ5IENJVFlfUi5qc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy4kO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDgiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJCA9IHJlcXVpcmUoJy4uL2xpYnMvanF1ZXJ5Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRlZmVycmVkRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBDSVRZICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgJChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LkNJVFlfT1BUSU9OUykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMgPSB7ZGVmZXI6IFtdfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDSVRZX09QVElPTlMuZGVmZXIucHVzaChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy91dGlscy9kZWZlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNiA3IDgiLCIvLyAkID0gcmVxdWlyZSgnLi9saWJzL2pxdWVyeScpO1xudmFyIG9uUmVzaXplID0gcmVxdWlyZSgnLi91dGlscy9vbi1yZXNpemUnKSxcbiAgICBjb21wb3NlRnVuY3Rpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvY29tcG9zZS1mdW5jdGlvbnMnKSxcbiAgICBkZWZlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmZXInKSxcbiAgICBjaGFydHMgPSByZXF1aXJlKCcuLi91dGlscy9jaGFydHMnKSxcblxuICAgIGluaXRBY2NvcmRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuY291cnNlX19hY2NvcmRpb24nKS5hY2NvcmRpb24oe1xuICAgICAgICAgICAgaGVpZ2h0U3R5bGU6IFwiY29udGVudFwiLFxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgYW5pbWF0ZTogZmFsc2UsXG4gICAgICAgICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgIGlmICghJC5pc0VtcHR5T2JqZWN0KHVpLm5ld0hlYWRlci5vZmZzZXQoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbDpub3QoOmFuaW1hdGVkKSwgYm9keTpub3QoOmFuaW1hdGVkKScpLmFuaW1hdGUoe3Njcm9sbFRvcDogdWkubmV3SGVhZGVyLm9mZnNldCgpLnRvcH0sICdzbG93Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdEFwcGx5RGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCdhW2hyZWY9XCIjYXBwbHktZGlhbG9nXCJdJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJCgnI2FwcGx5LWRpYWxvZycpLmRpYWxvZyh7XG4gICAgICAgICAgICAgICAgbW9kYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b09wZW46IHRydWUsXG4gICAgICAgICAgICAgICAgZGlhbG9nQ2xhc3M6IFwiYXBwbHktZGlhbG9nXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSG93IHRvIEFwcGx5XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNjAlXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXNpemFibGU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGluaXRFbnRyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuY291cnNlX19lbnRyaWVzIHNlbGVjdCcpLmNoYW5nZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykuYXR0cignZGF0YS11cmwnKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGluaXRUZXN0aW1vbmlhbHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIHcgPSAkKCcuY291cnNlX19wcm9maWxlcycpLndpZHRoKCksXG4gICAgICAgICAgICBuID0gJCgnLmNvdXJzZV9fcHJvZmlsZXNfX2l0ZW0nKS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgICAgICB2YXIgZml0QWxsV2lkdGggPSB3IC8gbixcbiAgICAgICAgICAgICAgICBjb250cm9scyA9IG4gPiAxLFxuICAgICAgICAgICAgICAgIG1pbldpZHRoID0gTWF0aC5tYXgoMzAwLCBmaXRBbGxXaWR0aCksXG4gICAgICAgICAgICAgICAgbWF4U2xpZGVzID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih3IC8gbWluV2lkdGgpKSxcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHcgLyBtYXhTbGlkZXM7XG5cbiAgICAgICAgICAgICQoJy5jb3Vyc2VfX3Byb2ZpbGVzIC5pdGVtcycpLmJ4U2xpZGVyKHtcbiAgICAgICAgICAgICAgICBwYWdlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IGNvbnRyb2xzLFxuICAgICAgICAgICAgICAgIG5leHRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgcHJldlRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4nLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlTWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIHRvdWNoRW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgdGVzdGltb25pYWxzQmFja2dyb3VuZENvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBHZXQgdGl0bGUgdGV4dCBjb2xvdXIgb2Ygc2VsZWN0ZWQgbGlzdCBpdGVtLCBpLmUuIG5lc3RlZCBpbiBhcmlhLWhpZGRlbj1cImZhbHNlXCJcbiAgICAgICAgdmFyIHNlbGVjdGVkSXRlbUNvbG9yID0gJCgnbGkuY291cnNlX19wcm9maWxlc19faXRlbTpub3QoW2FyaWEtaGlkZGVuKj1cInRydWVcIl0pIC5jb3Vyc2VfX3Byb2ZpbGVzX19pdGVtX190ZXh0X190aXRsZScpLmNzcyhcImNvbG9yXCIpO1xuXG4gICAgICAgIC8vIEFwcGx5IHNlbGVjdGVkIHRleHQgY29sb3VyIHRvIHRlc3RpbW9uaWFscyB3cmFwcGVyIGJhY2tncm91bmRcbiAgICAgICAgJCgnLmNvdXJzZV9fdGVzdGltb25pYWxzX193cmFwcGVyJykuY3NzKFwiYmFja2dyb3VuZFwiLCBzZWxlY3RlZEl0ZW1Db2xvcik7XG4gICAgfSxcblxuICAgIGluaXRBc3Nlc3NtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdXJzZS1hc3Nlc3NtZW50LWNoYXJ0Jyk7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCksXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRBcmVhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHtkdXJhdGlvbjogMTAwMCwgXCJzdGFydHVwXCI6IHRydWV9LFxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7dGV4dDogJ3BlcmNlbnRhZ2UnfSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdBc3Nlc3NtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgcGllSG9sZTogMC41LFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnIzI1M2U1MicsICcjM2YxNTYxJywgJyNlM2EwMmQnLCAnIzM5ODZhYyddXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5QaWVDaGFydChjb250YWluZXIpO1xuXG4gICAgICAgICAgICBkYXRhLmFkZENvbHVtbignc3RyaW5nJywgJ1R5cGUnKTtcbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCAnJScpO1xuXG4gICAgICAgICAgICAkKCcuY291cnNlX19hc3Nlc3NtZW50X19saXN0IGxpJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFkZFJvdyhbbGkuYXR0cignZGF0YS1sYWJlbCcpLCBwYXJzZUZsb2F0KGxpLmF0dHIoJ2RhdGEtdmFsdWUnKSldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNoYXJ0LmRyYXcoZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluaXRNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWVudSA9ICQoJy5jb3Vyc2VfX21lbnUnKSxcbiAgICAgICAgICAgIHRvZ2dsZSA9IG1lbnUuZmluZCgnLmNvdXJzZV9fbWVudV9fdGl0bGUgYScpLFxuICAgICAgICAgICAgY29udGVudCA9IG1lbnUuZmluZCgnLmNvdXJzZV9fbWVudV9fY29udGVudCcpO1xuXG4gICAgICAgIHRvZ2dsZS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KGZ1bmN0aW9uKGksIHYpe1xuICAgICAgICAgICAgICAgcmV0dXJuIHYgPT0gJ0hpZGUnID8gJ1Nob3cnIDogJ0hpZGUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRlbnQuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGluaXRFbXBsb3ltZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9ICQoJy5jb3Vyc2VfX2VtcGxveW1lbnQnKTtcbiAgICAgICAgaWYgKHdyYXBwZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVzU3RyID0gd3JhcHBlci5hdHRyKCdkYXRhLXZhbHVlcycpIHx8ICh3cmFwcGVyLmF0dHIoJ2RhdGEtdmFsdWUnKSArIFwiOzA7MFwiKSxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXNTdHIuc3BsaXQoJzsnKS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodiB8fCAnMCcpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRvdGFsID0gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2MgKyB2XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdmFsdWVPdGhlciA9IE1hdGgubWF4KDAsIDEwMCAtIHRvdGFsKSxcbiAgICAgICAgICAgICAgICBkYXRhID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0QXJlYToge2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JywgdG9wOiAnNSUnLCBoZWlnaHQ6ICc5MCUnLCB3aWR0aDogJzkwJSd9LFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHtkdXJhdGlvbjogMTAwMCwgXCJzdGFydHVwXCI6IHRydWV9LFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgcGllU2xpY2VUZXh0OiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHt0ZXh0OiAncGVyY2VudGFnZSd9LFxuICAgICAgICAgICAgICAgICAgICBwaWVIb2xlOiAwLjg1LFxuICAgICAgICAgICAgICAgICAgICBzbGljZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDA6IHtjb2xvcjogJyNhMjI4MzMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDE6IHtjb2xvcjogJyNkYjYzNjMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDI6IHtjb2xvcjogJyNkOTk4OTgnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDM6IHtjb2xvcjogJyNkOWQ5ZDknfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5QaWVDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291cnNlLWRlc3RpbmF0aW9ucy1lbXBsb3ltZW50LWNoYXJ0JykpO1xuXG4gICAgICAgICAgICBkYXRhLmFkZENvbHVtbignc3RyaW5nJywgJ1R5cGUnKTtcbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCAnJScpO1xuICAgICAgICAgICAgZGF0YS5hZGRSb3coWydJbiBlbXBsb3ltZW50JywgdmFsdWVzWzBdXSk7XG4gICAgICAgICAgICBkYXRhLmFkZFJvdyhbJ1dvcmsgYW5kIHN0dWR5JywgdmFsdWVzWzFdXSk7XG4gICAgICAgICAgICBkYXRhLmFkZFJvdyhbJ0Z1cnRoZXIgc3R1ZHknLCB2YWx1ZXNbMl1dKTtcbiAgICAgICAgICAgIGRhdGEuYWRkUm93KFsnVW5lbXBsb3llZCcsIHZhbHVlT3RoZXJdKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjaGFydC5kcmF3KGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIGluaXREZXN0aW5hdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBpbml0RW1wbG95bWVudCgpO1xuICAgIH0sXG5cbiAgICBpbml0Q2hhcnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGFydHMub25Jbml0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9uUmVzaXplKGNvbXBvc2VGdW5jdGlvbnMoaW5pdEFzc2Vzc21lbnQoKSwgaW5pdERlc3RpbmF0aW9ucygpKSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbml0UmVhZE1vcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDYwMCkge1xuICAgICAgICAgICAgJCgnLmNvdXJzZV9fd2hpdGUtYm94JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJveCA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBib3guZmluZCgnLmNvdXJzZV9fd2hpdGUtYm94X19jb250ZW50Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udGVudC5oZWlnaHQoKSA+IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFkZENsYXNzKCdjb3Vyc2VfX3doaXRlLWJveF9fY29udGVudC0tcmVhZC1tb3JlJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBidXR0b24gPSAkKCc8ZGl2IGNsYXNzPVwiY291cnNlX193aGl0ZS1ib3hfX3JlYWQtbW9yZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjb3Vyc2VfX3doaXRlLWJveF9fcmVhZC1tb3JlX19iZ1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxhICBocmVmPVwiI1wiPjxzcGFuPnJlYWQgbW9yZTwvc3Bhbj48L2E+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2xhc3MoJ2NvdXJzZV9fd2hpdGUtYm94X19jb250ZW50LS1yZWFkLW1vcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuYXBwZW5kVG8oYm94KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluaXRLaXNXaWRnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3aWRnZXQgPSAkKCcjdW5pc3RhdHMtd2lkZ2V0LWZyYW1lJyk7XG5cbiAgICAgICAgaWYgKHdpZGdldC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9ICQoJy5jb3Vyc2VfX2tpcycpLFxuICAgICAgICAgICAgICAgIHVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNyYyA9IHdpZGdldC5hdHRyKCdzcmMnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIb3Jpem9udGFsID0gc3JjLmluZGV4T2YoJ2hvcml6b250YWwnKSA+PSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVlZGVkSG9yaXpvbnRhbCA9ICQod2luZG93KS53aWR0aCgpID4gNjM1O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SG9yaXpvbnRhbCAhPT0gbmVlZGVkSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRTcmMgPSBuZWVkZWRIb3Jpem9udGFsID8gc3JjLnJlcGxhY2UoL3ZlcnRpY2FsLywgJ2hvcml6b250YWwnKSA6IHNyYy5yZXBsYWNlKC9ob3Jpem9udGFsLywgJ3ZlcnRpY2FsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFN0eWxlID0gbmVlZGVkSG9yaXpvbnRhbCA/IHt3aWR0aDogJzYxNXB4JywgaGVpZ2h0OiAnMTUwcHgnfSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTkwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTAwcHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5hdHRyKCdzcmMnLCBuZXh0U3JjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5jc3MobmV4dFN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIudG9nZ2xlQ2xhc3MoJ2NvdXJzZV9fa2lzLS12ZXJ0aWNhbCcsICFuZWVkZWRIb3Jpem9udGFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvblJlc2l6ZSh1cGRhdGUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluaXRLaXNXaWRnZXQoKTtcbiAgICAgICAgaW5pdEFjY29yZGlvbnMoKTtcbiAgICAgICAgaW5pdEVudHJpZXMoKTtcbiAgICAgICAgaW5pdFRlc3RpbW9uaWFscygpO1xuICAgICAgICBpbml0Q2hhcnRzKCk7XG4gICAgICAgIGluaXRSZWFkTW9yZSgpO1xuICAgICAgICBpbml0QXBwbHlEaWFsb2coKTtcbiAgICAgICAgaW5pdE1lbnUoKTtcbiAgICAgICAgdGVzdGltb25pYWxzQmFja2dyb3VuZENvbG9yKCk7XG4gICAgfTtcblxuZGVmZXIoaW5pdCk7XG5cbi8vIENoYW5nZSB0ZXN0aW1vbmlhbCB3cmFwcGVyIGJhY2tncm91bmQgY29sb3VyIHdoZW4gdXNlciBzY3JvbGxzIHRocm91Z2ggaXRlbXNcbiQoXCIuY291cnNlX190ZXN0aW1vbmlhbHNfX3dyYXBwZXJcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgdGVzdGltb25pYWxzQmFja2dyb3VuZENvbG9yKCk7XG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy9jb3Vyc2UuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyICQgPSByZXF1aXJlKCcuLi9saWJzL2pxdWVyeScpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChmLCBydW5Ob3cpIHtcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmKTtcbiAgICAgICAgaWYgKHJ1bk5vdykge1xuICAgICAgICAgICAgZigpO1xuICAgICAgICB9XG4gICAgfTtcblxufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvdXRpbHMvb24tcmVzaXplLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBleHBhbmQgPSBmdW5jdGlvbiAoZXhwYW5kZWQsIGxpc3QpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gbGlzdFtpXTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbSAmJiBpdGVtLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmQoZXhwYW5kZWQsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGV4cGFuZGVkID0gW107XG4gICAgICAgICAgICBleHBhbmQoZXhwYW5kZWQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwYW5kZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRbaV0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGNvbXBvc2Vcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91dGlscy9jb21wb3NlLWZ1bmN0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgc3RhdGUgPSAnbm90LWxvYWRlZCcsXG5cbiAgICAgICAgY2FsbGJhY2tzID0gW10sXG5cbiAgICAgICAgbG9hZENvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3RhdGUgPSAnbG9hZGVkJztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2hlY2tMb2FkQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZ29vZ2xlLnZpc3VhbGl6YXRpb24gJiYgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKSB7XG4gICAgICAgICAgICAgICAgbG9hZENvbXBsZXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2hlY2tMb2FkQ29tcGxldGUsIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN0YXRlID0gJ2xvYWRpbmcnO1xuXG4gICAgICAgICAgICBnb29nbGUubG9hZCgndmlzdWFsaXphdGlvbicsICcxLjAnLCB7XG4gICAgICAgICAgICAgICAgJ3BhY2thZ2VzJzogWydjb3JlY2hhcnQnXSwgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdvb2dsZS5zZXRPbkxvYWRDYWxsYmFjayhjaGVja0xvYWRDb21wbGV0ZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25Jbml0ID0gZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gJ2xvYWRlZCcpIHtcbiAgICAgICAgICAgICAgICBmKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGYpO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gJ25vdC1sb2FkZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvbkluaXQ6IG9uSW5pdFxuICAgIH07XG59KCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91dGlscy9jaGFydHMuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=