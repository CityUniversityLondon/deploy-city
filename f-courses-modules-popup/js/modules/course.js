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
    modelBox = __webpack_require__(61),

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

    initModulesPopup = function () {
        var widget = $('.popup-def-list-group');
        var items = [];

        widget.find('li').each(function(i){
            var li = $(this);
            var heading = li.children().first();
            var content = li.children().eq(1);
            let dlgContent = content.clone();
            items.push({
                li,
                heading,
                title: heading.html(),
                content: dlgContent,
            })
        })

        modelBox(widget,items);
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
        initModulesPopup();
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


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(1);
var openModalDialog = __webpack_require__(62);

const className = 'popup-def-list-group';

function dialogModelBox(widget, items){

	function open(i, s){
		var {title, category, content} = items[i];

		var dlgTitle = $('<div></div>')

		$('<div></div>')
            .html(title)
            .appendTo(dlgTitle);

        let prevIndex = (i - 1 + items.length) % items.length;
        let nextIndex = (i + 1 ) % items.length;
        let prev = items[prevIndex];
        let next = items[nextIndex];

        let prevLink = $('<a></a>')
            .attr('href', '#')
            .append(prev.title)
            .on('click', evt => {
                evt.preventDefault();
                open(prevIndex, false);
            });

        let nextLink = $('<a></a>')
            .attr('href', '#')
            .append(next.title)
            .on('click', evt => {
                evt.preventDefault();
                open(nextIndex, false);
            });

        let nextWrapper = $('<div></div>')
            .addClass('popup-def-list-group__prevnext__next')
            .append(nextLink)
            .append('<span class="popup-def-list-group__prevnext__next__icon" aria-hidden="true"></span>');

        let prevWrapper = $('<div></div>')
            .addClass('popup-def-list-group__prevnext__prev')
            .append('<span class="popup-def-list-group__prevnext__prev__icon" aria-hidden="true"></span>')
            .append(prevLink);

        let dlgContent = $('<div></div>')
            .append(content);

        $('<div></div>')
            .addClass('popup-def-list-group__prevnext')
            .append(prevWrapper)
            .append(nextWrapper)
            .appendTo(dlgContent);


            openModalDialog(dlgTitle, dlgContent, {
            s,
            className: `${className}--yellow`
        });

           
	}

	 items.forEach(function({heading},i){
            let anchor = $('<a></a>')
            .attr('href', '#')
            .addClass('popup-def-list-group__anchor')
            .html(heading.html());

            anchor.on('click', evt => {
                evt.preventDefault();
                open(i, true)
            });

            heading.empty().append(anchor);
        })



}


module.exports = dialogModelBox;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(1);
var extend = __webpack_require__(63);
var createFocusTrap = __webpack_require__(64);

function closeDialog(focusBack = true) {
    if (current.dlg) {
        current.focusTrap.deactivate();
        current.dlg.remove();
        current.dlg = null;
    }
    if (focusBack && current.focusBackTo) {
        current.focusBackTo.focus();
        current.focusBackTo = null;
    }

    $('html').removeClass('no-scroll');
}

const DEFAULT_OPTS = {
    closeOnOverlay: true,
    closeButton: true,
    identifyFocusBackTo: true,
    className: null,
};

const current = {
    focusTrap: null,
    dlg: null,
    focusBackTo: null,
};

function openModalDialog(title, content, opts = {}) {
    closeDialog(false);
    let finalOptions = extend({}, DEFAULT_OPTS, opts);

    if (finalOptions.identifyFocusBackTo) {
        current.focusBackTo = $(":focus");
    }

    let dlg = current.dlg = $('<div></div>')
        .addClass('dialog')
        .attr('tabindex', '0')
        .appendTo($('body'));

    if (finalOptions.className) {
        dlg.addClass(finalOptions.className)
    }

    dlg.on('keydown', evt => {
        if (evt.which === 27) {
            closeDialog();
            evt.preventDefault();
        }
    });

    let box = $('<div></div>').addClass('dialog__box')
        .appendTo(dlg);

    let heading = $('<div></div>')
        .addClass('dialog__box__heading')
        .html(title)
        .appendTo(box);

    $('<div></div>').addClass('dialog__box__content').append(content).appendTo(box);

    if (finalOptions.closeOnOverlay) {
        dlg.on('click', evt => {
            if (evt.target === dlg[0]) {
                closeDialog();
            }
        });
    }

    if (finalOptions.closeButton) {
        let button = $('<a></a>')
            .attr('href', '#')
            .attr('aria-label', 'Close')
            .attr('role', 'button')
            .addClass('dialog__box__heading__close')
            .append($('<span></span>').addClass('dialog__box__heading__close__icon'));

        button.on('click', evt => {
            evt.preventDefault();
            closeDialog();
        });

        heading.append(button);
    }

    dlg.focus();

    current.focusTrap = createFocusTrap(dlg[0]).activate();

    $('html').addClass('no-scroll');
}

module.exports = openModalDialog;

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__(65);

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var tabbableNodes = [];
  var firstTabbableNode = null;
  var lastTabbableNode = null;
  var nodeFocusedBeforeActivation = null;
  var active = false;
  var paused = false;
  var tabEvent = null;

  var container = (typeof element === 'string')
    ? document.querySelector(element)
    : element;

  var config = userOptions || {};
  config.returnFocusOnDeactivate = (userOptions && userOptions.returnFocusOnDeactivate !== undefined)
    ? userOptions.returnFocusOnDeactivate
    : true;
  config.escapeDeactivates = (userOptions && userOptions.escapeDeactivates !== undefined)
    ? userOptions.escapeDeactivates
    : true;

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause,
  };

  return trap;

  function activate(activateOptions) {
    if (active) return;

    var defaultedActivateOptions = {
      onActivate: (activateOptions && activateOptions.onActivate !== undefined)
        ? activateOptions.onActivate
        : config.onActivate,
    };

    active = true;
    paused = false;
    nodeFocusedBeforeActivation = document.activeElement;

    if (defaultedActivateOptions.onActivate) {
      defaultedActivateOptions.onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!active) return;

    var defaultedDeactivateOptions = {
      returnFocus: (deactivateOptions && deactivateOptions.returnFocus !== undefined)
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate,
      onDeactivate: (deactivateOptions && deactivateOptions.onDeactivate !== undefined)
        ? deactivateOptions.onDeactivate
        : config.onDeactivate,
    };

    removeListeners();

    if (defaultedDeactivateOptions.onDeactivate) {
      defaultedDeactivateOptions.onDeactivate();
    }

    if (defaultedDeactivateOptions.returnFocus) {
      setTimeout(function () {
        tryFocus(nodeFocusedBeforeActivation);
      }, 0);
    }

    active = false;
    paused = false;
    return this;
  }

  function pause() {
    if (paused || !active) return;
    paused = true;
    removeListeners();
  }

  function unpause() {
    if (!paused || !active) return;
    paused = false;
    addListeners();
  }

  function addListeners() {
    if (!active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();
    // Ensure that the focused element doesn't capture the event that caused the focus trap activation
    setTimeout(function () {
      tryFocus(firstFocusNode());
    }, 0);
    document.addEventListener('focus', checkFocus, true);
    document.addEventListener('click', checkClick, true);
    document.addEventListener('mousedown', checkPointerDown, true);
    document.addEventListener('touchstart', checkPointerDown, true);
    document.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!active || listeningFocusTrap !== trap) return;

    document.removeEventListener('focus', checkFocus, true);
    document.removeEventListener('click', checkClick, true);
    document.removeEventListener('mousedown', checkPointerDown, true);
    document.removeEventListener('touchstart', checkPointerDown, true);
    document.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = document.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function firstFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(document.activeElement)) {
      node = document.activeElement;
    } else {
      node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('You can\'t have a focus-trap without at least one focusable element');
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event
  function checkPointerDown(e) {
    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
      deactivate({ returnFocus: false });
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function checkFocus(e) {
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    // Checking for a blur method here resolves a Firefox issue (#15)
    if (typeof e.target.blur === 'function') e.target.blur();

    if (tabEvent) {
      readjustFocus(tabEvent);
    }
  }

  function checkKey(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
      handleTab(e);
    }

    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      deactivate();
    }
  }

  function handleTab(e) {
    updateTabbableNodes();

    if (e.target.hasAttribute('tabindex') && Number(e.target.getAttribute('tabindex')) < 0) {
      return tabEvent = e;
    }

    e.preventDefault();
    var currentFocusIndex = tabbableNodes.indexOf(e.target);

    if (e.shiftKey) {
      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
        return tryFocus(lastTabbableNode);
      }
      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
    }

    if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);

    tryFocus(tabbableNodes[currentFocusIndex + 1]);
  }

  function updateTabbableNodes() {
    tabbableNodes = tabbable(container);
    firstTabbableNode = tabbableNodes[0];
    lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
  }

  function readjustFocus(e) {
    if (e.shiftKey) return tryFocus(lastTabbableNode);

    tryFocus(firstTabbableNode);
  }
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function tryFocus(node) {
  if (!node || !node.focus) return;
  if (node === document.activeElement)  return;

  node.focus();
  if (node.tagName.toLowerCase() === 'input') {
    node.select();
  }
}

module.exports = focusTrap;


/***/ }),

/***/ 65:
/***/ (function(module, exports) {

module.exports = function(el, options) {
  options = options || {};

  var elementDocument = el.ownerDocument || el;
  var basicTabbables = [];
  var orderedTabbables = [];

  // A node is "available" if
  // - it's computed style
  var isUnavailable = createIsUnavailable(elementDocument);

  var candidateSelectors = [
    'input',
    'select',
    'a[href]',
    'textarea',
    'button',
    '[tabindex]',
  ];

  var candidates = el.querySelectorAll(candidateSelectors.join(','));

  if (options.includeContainer) {
    var matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

    if (
      candidateSelectors.some(function(candidateSelector) {
        return matches.call(el, candidateSelector);
      })
    ) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var candidate, candidateIndexAttr, candidateIndex;
  for (var i = 0, l = candidates.length; i < l; i++) {
    candidate = candidates[i];
    candidateIndexAttr = parseInt(candidate.getAttribute('tabindex'), 10)
    candidateIndex = isNaN(candidateIndexAttr) ? candidate.tabIndex : candidateIndexAttr;

    if (
      candidateIndex < 0
      || (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
      || candidate.disabled
      || isUnavailable(candidate, elementDocument)
    ) {
      continue;
    }

    if (candidateIndex === 0) {
      basicTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        index: i,
        tabIndex: candidateIndex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(function(a, b) {
      return a.tabIndex === b.tabIndex ? a.index - b.index : a.tabIndex - b.tabIndex;
    })
    .map(function(a) {
      return a.node
    });

  Array.prototype.push.apply(tabbableNodes, basicTabbables);

  return tabbableNodes;
}

function createIsUnavailable(elementDocument) {
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed
  var isOffCache = [];

  // "off" means `display: none;`, as opposed to "hidden",
  // which means `visibility: hidden;`. getComputedStyle
  // accurately reflects visiblity in context but not
  // "off" state, so we need to recursively check parents.

  function isOff(node, nodeComputedStyle) {
    if (node === elementDocument.documentElement) return false;

    // Find the cached node (Array.prototype.find not available in IE9)
    for (var i = 0, length = isOffCache.length; i < length; i++) {
      if (isOffCache[i][0] === node) return isOffCache[i][1];
    }

    nodeComputedStyle = nodeComputedStyle || elementDocument.defaultView.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = isOff(node.parentNode);
    }

    isOffCache.push([node, result]);

    return result;
  }

  return function isUnavailable(node) {
    if (node === elementDocument.documentElement) return false;

    var computedStyle = elementDocument.defaultView.getComputedStyle(node);

    if (isOff(node, computedStyle)) return true;

    return computedStyle.visibility === 'hidden';
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjliYTUyY2Y4NmM1ZWY2YTJhODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvY291cnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL3V0aWxzL29uLXJlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvY29tcG9zZS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2NoYXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kcy9kaWFsb2dNb2RlbEJveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kcy9kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V4dGVuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9jdXMtdHJhcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGFiYmFibGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ2pRQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQztBQUNoQyxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJtb2R1bGVzL2NvdXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDU3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiOWJhNTJjZjg2YzVlZjZhMmE4OCIsIi8qKlxuICogZXhwZWN0cyBqUXVlcnkgdG8gYmUgcHJvdmlkZWQgYnkgQ0lUWV9SLmpzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LiQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy9saWJzL2pxdWVyeS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJCA9IHJlcXVpcmUoJy4uL2xpYnMvanF1ZXJ5Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRlZmVycmVkRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBDSVRZICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgJChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LkNJVFlfT1BUSU9OUykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMgPSB7ZGVmZXI6IFtdfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDSVRZX09QVElPTlMuZGVmZXIucHVzaChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy91dGlscy9kZWZlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgNiA3IiwidmFyICQgPSByZXF1aXJlKCcuL2xpYnMvanF1ZXJ5JyksXG4gICAgb25SZXNpemUgPSByZXF1aXJlKCcuL3V0aWxzL29uLXJlc2l6ZScpLFxuICAgIGNvbXBvc2VGdW5jdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy9jb21wb3NlLWZ1bmN0aW9ucycpLFxuICAgIGRlZmVyID0gcmVxdWlyZSgnLi91dGlscy9kZWZlcicpLFxuICAgIGNoYXJ0cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NoYXJ0cycpLFxuICAgIG1vZGVsQm94ID0gcmVxdWlyZSgnLi9kaWFsb2dNb2RlbEJveCcpLFxuXG4gICAgaW5pdEFjY29yZGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5jb3Vyc2VfX2FjY29yZGlvbicpLmFjY29yZGlvbih7XG4gICAgICAgICAgICBoZWlnaHRTdHlsZTogXCJjb250ZW50XCIsXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkLmlzRW1wdHlPYmplY3QodWkubmV3SGVhZGVyLm9mZnNldCgpKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdodG1sOm5vdCg6YW5pbWF0ZWQpLCBib2R5Om5vdCg6YW5pbWF0ZWQpJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB1aS5uZXdIZWFkZXIub2Zmc2V0KCkudG9wfSwgJ3Nsb3cnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbml0QXBwbHlEaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ2FbaHJlZj1cIiNhcHBseS1kaWFsb2dcIl0nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKCcjYXBwbHktZGlhbG9nJykuZGlhbG9nKHtcbiAgICAgICAgICAgICAgICBtb2RhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvT3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaWFsb2dDbGFzczogXCJhcHBseS1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJIb3cgdG8gQXBwbHlcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI2MCVcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc2l6YWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdEVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5jb3Vyc2VfX2VudHJpZXMgc2VsZWN0JykuY2hhbmdlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLXVybCcpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdFRlc3RpbW9uaWFscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHcgPSAkKCcuY291cnNlX19wcm9maWxlcycpLndpZHRoKCksXG4gICAgICAgICAgICBuID0gJCgnLmNvdXJzZV9fcHJvZmlsZXNfX2l0ZW0nKS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgICAgICB2YXIgZml0QWxsV2lkdGggPSB3IC8gbixcbiAgICAgICAgICAgICAgICBjb250cm9scyA9IG4gPiAxLFxuICAgICAgICAgICAgICAgIG1pbldpZHRoID0gTWF0aC5tYXgoMzAwLCBmaXRBbGxXaWR0aCksXG4gICAgICAgICAgICAgICAgbWF4U2xpZGVzID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih3IC8gbWluV2lkdGgpKSxcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHcgLyBtYXhTbGlkZXM7XG5cbiAgICAgICAgICAgICQoJy5jb3Vyc2VfX3Byb2ZpbGVzIC5pdGVtcycpLmJ4U2xpZGVyKHtcbiAgICAgICAgICAgICAgICBwYWdlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IGNvbnRyb2xzLFxuICAgICAgICAgICAgICAgIG5leHRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgcHJldlRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4nLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlTWFyZ2luOiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIGluaXRBc3Nlc3NtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdXJzZS1hc3Nlc3NtZW50LWNoYXJ0Jyk7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCksXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRBcmVhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHtkdXJhdGlvbjogMTAwMCwgXCJzdGFydHVwXCI6IHRydWV9LFxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7dGV4dDogJ3BlcmNlbnRhZ2UnfSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdBc3Nlc3NtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgcGllSG9sZTogMC41LFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnIzI1M2U1MicsICcjM2YxNTYxJywgJyNlM2EwMmQnLCAnIzM5ODZhYyddXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5QaWVDaGFydChjb250YWluZXIpO1xuXG4gICAgICAgICAgICBkYXRhLmFkZENvbHVtbignc3RyaW5nJywgJ1R5cGUnKTtcbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCAnJScpO1xuXG4gICAgICAgICAgICAkKCcuY291cnNlX19hc3Nlc3NtZW50X19saXN0IGxpJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFkZFJvdyhbbGkuYXR0cignZGF0YS1sYWJlbCcpLCBwYXJzZUZsb2F0KGxpLmF0dHIoJ2RhdGEtdmFsdWUnKSldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNoYXJ0LmRyYXcoZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluaXRNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWVudSA9ICQoJy5jb3Vyc2VfX21lbnUnKSxcbiAgICAgICAgICAgIHRvZ2dsZSA9IG1lbnUuZmluZCgnLmNvdXJzZV9fbWVudV9fdGl0bGUgYScpLFxuICAgICAgICAgICAgY29udGVudCA9IG1lbnUuZmluZCgnLmNvdXJzZV9fbWVudV9fY29udGVudCcpO1xuXG4gICAgICAgIHRvZ2dsZS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29udGVudC5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdEVtcGxveW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0gJCgnLmNvdXJzZV9fZW1wbG95bWVudCcpO1xuICAgICAgICBpZiAod3JhcHBlci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZXNTdHIgPSB3cmFwcGVyLmF0dHIoJ2RhdGEtdmFsdWVzJykgfHwgKHdyYXBwZXIuYXR0cignZGF0YS12YWx1ZScpICsgXCI7MDswXCIpLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlc1N0ci5zcGxpdCgnOycpLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2IHx8ICcwJyk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdG90YWwgPSB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYyArIHZcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB2YWx1ZU90aGVyID0gTWF0aC5tYXgoMCwgMTAwIC0gdG90YWwpLFxuICAgICAgICAgICAgICAgIGRhdGEgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCksXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRBcmVhOiB7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLCB0b3A6ICc1JScsIGhlaWdodDogJzkwJScsIHdpZHRoOiAnOTAlJ30sXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoge2R1cmF0aW9uOiAxMDAwLCBcInN0YXJ0dXBcIjogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBwaWVTbGljZVRleHQ6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge3RleHQ6ICdwZXJjZW50YWdlJ30sXG4gICAgICAgICAgICAgICAgICAgIHBpZUhvbGU6IDAuODUsXG4gICAgICAgICAgICAgICAgICAgIHNsaWNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgMDoge2NvbG9yOiAnI2EyMjgzMyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgMToge2NvbG9yOiAnI2RiNjM2Myd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgMjoge2NvbG9yOiAnI2Q5OTg5OCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgMzoge2NvbG9yOiAnI2Q5ZDlkOSd9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoYXJ0ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLlBpZUNoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3Vyc2UtZGVzdGluYXRpb25zLWVtcGxveW1lbnQtY2hhcnQnKSk7XG5cbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCdzdHJpbmcnLCAnVHlwZScpO1xuICAgICAgICAgICAgZGF0YS5hZGRDb2x1bW4oJ251bWJlcicsICclJyk7XG4gICAgICAgICAgICBkYXRhLmFkZFJvdyhbJ0luIGVtcGxveW1lbnQnLCB2YWx1ZXNbMF1dKTtcbiAgICAgICAgICAgIGRhdGEuYWRkUm93KFsnV29yayBhbmQgc3R1ZHknLCB2YWx1ZXNbMV1dKTtcbiAgICAgICAgICAgIGRhdGEuYWRkUm93KFsnRnVydGhlciBzdHVkeScsIHZhbHVlc1syXV0pO1xuICAgICAgICAgICAgZGF0YS5hZGRSb3coWydVbmVtcGxveWVkJywgdmFsdWVPdGhlcl0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNoYXJ0LmRyYXcoZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuXG4gICAgaW5pdERlc3RpbmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGluaXRFbXBsb3ltZW50KCk7XG4gICAgfSxcblxuICAgIGluaXRDaGFydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoYXJ0cy5vbkluaXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb25SZXNpemUoY29tcG9zZUZ1bmN0aW9ucyhpbml0QXNzZXNzbWVudCgpLCBpbml0RGVzdGluYXRpb25zKCkpLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGluaXRSZWFkTW9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNjAwKSB7XG4gICAgICAgICAgICAkKCcuY291cnNlX193aGl0ZS1ib3gnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYm94ID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGJveC5maW5kKCcuY291cnNlX193aGl0ZS1ib3hfX2NvbnRlbnQnKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50LmhlaWdodCgpID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2xhc3MoJ2NvdXJzZV9fd2hpdGUtYm94X19jb250ZW50LS1yZWFkLW1vcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ1dHRvbiA9ICQoJzxkaXYgY2xhc3M9XCJjb3Vyc2VfX3doaXRlLWJveF9fcmVhZC1tb3JlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNvdXJzZV9fd2hpdGUtYm94X19yZWFkLW1vcmVfX2JnXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGEgIGhyZWY9XCIjXCI+PHNwYW4+cmVhZCBtb3JlPC9zcGFuPjwvYT4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5yZW1vdmVDbGFzcygnY291cnNlX193aGl0ZS1ib3hfX2NvbnRlbnQtLXJlYWQtbW9yZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5hcHBlbmRUbyhib3gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5pdEtpc1dpZGdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdpZGdldCA9ICQoJyN1bmlzdGF0cy13aWRnZXQtZnJhbWUnKTtcblxuICAgICAgICBpZiAod2lkZ2V0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gJCgnLmNvdXJzZV9fa2lzJyksXG4gICAgICAgICAgICAgICAgdXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3JjID0gd2lkZ2V0LmF0dHIoJ3NyYycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEhvcml6b250YWwgPSBzcmMuaW5kZXhPZignaG9yaXpvbnRhbCcpID49IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWVkZWRIb3Jpem9udGFsID0gJCh3aW5kb3cpLndpZHRoKCkgPiA2MzU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRIb3Jpem9udGFsICE9PSBuZWVkZWRIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dFNyYyA9IG5lZWRlZEhvcml6b250YWwgPyBzcmMucmVwbGFjZSgvdmVydGljYWwvLCAnaG9yaXpvbnRhbCcpIDogc3JjLnJlcGxhY2UoL2hvcml6b250YWwvLCAndmVydGljYWwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0U3R5bGUgPSBuZWVkZWRIb3Jpem9udGFsID8ge3dpZHRoOiAnNjE1cHgnLCBoZWlnaHQ6ICcxNTBweCd9IDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxOTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1MDBweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmF0dHIoJ3NyYycsIG5leHRTcmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmNzcyhuZXh0U3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci50b2dnbGVDbGFzcygnY291cnNlX19raXMtLXZlcnRpY2FsJywgIW5lZWRlZEhvcml6b250YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9uUmVzaXplKHVwZGF0ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5pdE1vZHVsZXNQb3B1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdpZGdldCA9ICQoJy5wb3B1cC1kZWYtbGlzdC1ncm91cCcpO1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcblxuICAgICAgICB3aWRnZXQuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uKGkpe1xuICAgICAgICAgICAgdmFyIGxpID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBoZWFkaW5nID0gbGkuY2hpbGRyZW4oKS5maXJzdCgpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBsaS5jaGlsZHJlbigpLmVxKDEpO1xuICAgICAgICAgICAgbGV0IGRsZ0NvbnRlbnQgPSBjb250ZW50LmNsb25lKCk7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBsaSxcbiAgICAgICAgICAgICAgICBoZWFkaW5nLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBoZWFkaW5nLmh0bWwoKSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBkbGdDb250ZW50LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBtb2RlbEJveCh3aWRnZXQsaXRlbXMpO1xuICAgIH0sXG5cbiAgICBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbml0S2lzV2lkZ2V0KCk7XG4gICAgICAgIGluaXRNZW51KCk7XG4gICAgICAgIGluaXRBY2NvcmRpb25zKCk7XG4gICAgICAgIGluaXRFbnRyaWVzKCk7XG4gICAgICAgIGluaXRUZXN0aW1vbmlhbHMoKTtcbiAgICAgICAgaW5pdENoYXJ0cygpO1xuICAgICAgICBpbml0UmVhZE1vcmUoKTtcbiAgICAgICAgaW5pdEFwcGx5RGlhbG9nKCk7XG4gICAgICAgIGluaXRNb2R1bGVzUG9wdXAoKTtcbiAgICB9O1xuXG5kZWZlcihpbml0KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvY291cnNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciAkID0gcmVxdWlyZSgnLi4vbGlicy9qcXVlcnknKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoZiwgcnVuTm93KSB7XG4gICAgICAgICQod2luZG93KS5yZXNpemUoZik7XG4gICAgICAgIGlmIChydW5Ob3cpIHtcbiAgICAgICAgICAgIGYoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL3V0aWxzL29uLXJlc2l6ZS5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgZXhwYW5kID0gZnVuY3Rpb24gKGV4cGFuZGVkLCBsaXN0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0gJiYgaXRlbS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kKGV4cGFuZGVkLCBpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBleHBhbmRlZCA9IFtdO1xuICAgICAgICAgICAgZXhwYW5kKGV4cGFuZGVkLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGFuZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkW2ldKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgIHJldHVybiBjb21wb3NlXG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdXRpbHMvY29tcG9zZS1mdW5jdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIHN0YXRlID0gJ25vdC1sb2FkZWQnLFxuXG4gICAgICAgIGNhbGxiYWNrcyA9IFtdLFxuXG4gICAgICAgIGxvYWRDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN0YXRlID0gJ2xvYWRlZCc7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNoZWNrTG9hZENvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGdvb2dsZS52aXN1YWxpemF0aW9uICYmIGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSkge1xuICAgICAgICAgICAgICAgIGxvYWRDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNoZWNrTG9hZENvbXBsZXRlLCAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzdGF0ZSA9ICdsb2FkaW5nJztcblxuICAgICAgICAgICAgZ29vZ2xlLmxvYWQoJ3Zpc3VhbGl6YXRpb24nLCAnMS4wJywge1xuICAgICAgICAgICAgICAgICdwYWNrYWdlcyc6IFsnY29yZWNoYXJ0J10sIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnb29nbGUuc2V0T25Mb2FkQ2FsbGJhY2soY2hlY2tMb2FkQ29tcGxldGUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uSW5pdCA9IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09ICdsb2FkZWQnKSB7XG4gICAgICAgICAgICAgICAgZigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MucHVzaChmKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09ICdub3QtbG9hZGVkJykge1xuICAgICAgICAgICAgICAgICAgICBsb2FkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb25Jbml0OiBvbkluaXRcbiAgICB9O1xufSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdXRpbHMvY2hhcnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgJCA9IHJlcXVpcmUoJy4vbGlicy9qcXVlcnknKTtcbnZhciBvcGVuTW9kYWxEaWFsb2cgPSByZXF1aXJlKCcuL2RpYWxvZycpO1xuXG5jb25zdCBjbGFzc05hbWUgPSAncG9wdXAtZGVmLWxpc3QtZ3JvdXAnO1xuXG5mdW5jdGlvbiBkaWFsb2dNb2RlbEJveCh3aWRnZXQsIGl0ZW1zKXtcblxuXHRmdW5jdGlvbiBvcGVuKGksIHMpe1xuXHRcdHZhciB7dGl0bGUsIGNhdGVnb3J5LCBjb250ZW50fSA9IGl0ZW1zW2ldO1xuXG5cdFx0dmFyIGRsZ1RpdGxlID0gJCgnPGRpdj48L2Rpdj4nKVxuXG5cdFx0JCgnPGRpdj48L2Rpdj4nKVxuICAgICAgICAgICAgLmh0bWwodGl0bGUpXG4gICAgICAgICAgICAuYXBwZW5kVG8oZGxnVGl0bGUpO1xuXG4gICAgICAgIGxldCBwcmV2SW5kZXggPSAoaSAtIDEgKyBpdGVtcy5sZW5ndGgpICUgaXRlbXMubGVuZ3RoO1xuICAgICAgICBsZXQgbmV4dEluZGV4ID0gKGkgKyAxICkgJSBpdGVtcy5sZW5ndGg7XG4gICAgICAgIGxldCBwcmV2ID0gaXRlbXNbcHJldkluZGV4XTtcbiAgICAgICAgbGV0IG5leHQgPSBpdGVtc1tuZXh0SW5kZXhdO1xuXG4gICAgICAgIGxldCBwcmV2TGluayA9ICQoJzxhPjwvYT4nKVxuICAgICAgICAgICAgLmF0dHIoJ2hyZWYnLCAnIycpXG4gICAgICAgICAgICAuYXBwZW5kKHByZXYudGl0bGUpXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBvcGVuKHByZXZJbmRleCwgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG5leHRMaW5rID0gJCgnPGE+PC9hPicpXG4gICAgICAgICAgICAuYXR0cignaHJlZicsICcjJylcbiAgICAgICAgICAgIC5hcHBlbmQobmV4dC50aXRsZSlcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIG9wZW4obmV4dEluZGV4LCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbmV4dFdyYXBwZXIgPSAkKCc8ZGl2PjwvZGl2PicpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3BvcHVwLWRlZi1saXN0LWdyb3VwX19wcmV2bmV4dF9fbmV4dCcpXG4gICAgICAgICAgICAuYXBwZW5kKG5leHRMaW5rKVxuICAgICAgICAgICAgLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJwb3B1cC1kZWYtbGlzdC1ncm91cF9fcHJldm5leHRfX25leHRfX2ljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+Jyk7XG5cbiAgICAgICAgbGV0IHByZXZXcmFwcGVyID0gJCgnPGRpdj48L2Rpdj4nKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdwb3B1cC1kZWYtbGlzdC1ncm91cF9fcHJldm5leHRfX3ByZXYnKVxuICAgICAgICAgICAgLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJwb3B1cC1kZWYtbGlzdC1ncm91cF9fcHJldm5leHRfX3ByZXZfX2ljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+JylcbiAgICAgICAgICAgIC5hcHBlbmQocHJldkxpbmspO1xuXG4gICAgICAgIGxldCBkbGdDb250ZW50ID0gJCgnPGRpdj48L2Rpdj4nKVxuICAgICAgICAgICAgLmFwcGVuZChjb250ZW50KTtcblxuICAgICAgICAkKCc8ZGl2PjwvZGl2PicpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3BvcHVwLWRlZi1saXN0LWdyb3VwX19wcmV2bmV4dCcpXG4gICAgICAgICAgICAuYXBwZW5kKHByZXZXcmFwcGVyKVxuICAgICAgICAgICAgLmFwcGVuZChuZXh0V3JhcHBlcilcbiAgICAgICAgICAgIC5hcHBlbmRUbyhkbGdDb250ZW50KTtcblxuXG4gICAgICAgICAgICBvcGVuTW9kYWxEaWFsb2coZGxnVGl0bGUsIGRsZ0NvbnRlbnQsIHtcbiAgICAgICAgICAgIHMsXG4gICAgICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzTmFtZX0tLXllbGxvd2BcbiAgICAgICAgfSk7XG5cbiAgICAgICAgICAgXG5cdH1cblxuXHQgaXRlbXMuZm9yRWFjaChmdW5jdGlvbih7aGVhZGluZ30saSl7XG4gICAgICAgICAgICBsZXQgYW5jaG9yID0gJCgnPGE+PC9hPicpXG4gICAgICAgICAgICAuYXR0cignaHJlZicsICcjJylcbiAgICAgICAgICAgIC5hZGRDbGFzcygncG9wdXAtZGVmLWxpc3QtZ3JvdXBfX2FuY2hvcicpXG4gICAgICAgICAgICAuaHRtbChoZWFkaW5nLmh0bWwoKSk7XG5cbiAgICAgICAgICAgIGFuY2hvci5vbignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIG9wZW4oaSwgdHJ1ZSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBoZWFkaW5nLmVtcHR5KCkuYXBwZW5kKGFuY2hvcik7XG4gICAgICAgIH0pXG5cblxuXG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBkaWFsb2dNb2RlbEJveDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL2RpYWxvZ01vZGVsQm94LmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgJCA9IHJlcXVpcmUoJy4vbGlicy9qcXVlcnknKTtcbnZhciBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQnKTtcbnZhciBjcmVhdGVGb2N1c1RyYXAgPSByZXF1aXJlKCdmb2N1cy10cmFwJyk7XG5cbmZ1bmN0aW9uIGNsb3NlRGlhbG9nKGZvY3VzQmFjayA9IHRydWUpIHtcbiAgICBpZiAoY3VycmVudC5kbGcpIHtcbiAgICAgICAgY3VycmVudC5mb2N1c1RyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgICBjdXJyZW50LmRsZy5yZW1vdmUoKTtcbiAgICAgICAgY3VycmVudC5kbGcgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoZm9jdXNCYWNrICYmIGN1cnJlbnQuZm9jdXNCYWNrVG8pIHtcbiAgICAgICAgY3VycmVudC5mb2N1c0JhY2tUby5mb2N1cygpO1xuICAgICAgICBjdXJyZW50LmZvY3VzQmFja1RvID0gbnVsbDtcbiAgICB9XG5cbiAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpO1xufVxuXG5jb25zdCBERUZBVUxUX09QVFMgPSB7XG4gICAgY2xvc2VPbk92ZXJsYXk6IHRydWUsXG4gICAgY2xvc2VCdXR0b246IHRydWUsXG4gICAgaWRlbnRpZnlGb2N1c0JhY2tUbzogdHJ1ZSxcbiAgICBjbGFzc05hbWU6IG51bGwsXG59O1xuXG5jb25zdCBjdXJyZW50ID0ge1xuICAgIGZvY3VzVHJhcDogbnVsbCxcbiAgICBkbGc6IG51bGwsXG4gICAgZm9jdXNCYWNrVG86IG51bGwsXG59O1xuXG5mdW5jdGlvbiBvcGVuTW9kYWxEaWFsb2codGl0bGUsIGNvbnRlbnQsIG9wdHMgPSB7fSkge1xuICAgIGNsb3NlRGlhbG9nKGZhbHNlKTtcbiAgICBsZXQgZmluYWxPcHRpb25zID0gZXh0ZW5kKHt9LCBERUZBVUxUX09QVFMsIG9wdHMpO1xuXG4gICAgaWYgKGZpbmFsT3B0aW9ucy5pZGVudGlmeUZvY3VzQmFja1RvKSB7XG4gICAgICAgIGN1cnJlbnQuZm9jdXNCYWNrVG8gPSAkKFwiOmZvY3VzXCIpO1xuICAgIH1cblxuICAgIGxldCBkbGcgPSBjdXJyZW50LmRsZyA9ICQoJzxkaXY+PC9kaXY+JylcbiAgICAgICAgLmFkZENsYXNzKCdkaWFsb2cnKVxuICAgICAgICAuYXR0cigndGFiaW5kZXgnLCAnMCcpXG4gICAgICAgIC5hcHBlbmRUbygkKCdib2R5JykpO1xuXG4gICAgaWYgKGZpbmFsT3B0aW9ucy5jbGFzc05hbWUpIHtcbiAgICAgICAgZGxnLmFkZENsYXNzKGZpbmFsT3B0aW9ucy5jbGFzc05hbWUpXG4gICAgfVxuXG4gICAgZGxnLm9uKCdrZXlkb3duJywgZXZ0ID0+IHtcbiAgICAgICAgaWYgKGV2dC53aGljaCA9PT0gMjcpIHtcbiAgICAgICAgICAgIGNsb3NlRGlhbG9nKCk7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IGJveCA9ICQoJzxkaXY+PC9kaXY+JykuYWRkQ2xhc3MoJ2RpYWxvZ19fYm94JylcbiAgICAgICAgLmFwcGVuZFRvKGRsZyk7XG5cbiAgICBsZXQgaGVhZGluZyA9ICQoJzxkaXY+PC9kaXY+JylcbiAgICAgICAgLmFkZENsYXNzKCdkaWFsb2dfX2JveF9faGVhZGluZycpXG4gICAgICAgIC5odG1sKHRpdGxlKVxuICAgICAgICAuYXBwZW5kVG8oYm94KTtcblxuICAgICQoJzxkaXY+PC9kaXY+JykuYWRkQ2xhc3MoJ2RpYWxvZ19fYm94X19jb250ZW50JykuYXBwZW5kKGNvbnRlbnQpLmFwcGVuZFRvKGJveCk7XG5cbiAgICBpZiAoZmluYWxPcHRpb25zLmNsb3NlT25PdmVybGF5KSB7XG4gICAgICAgIGRsZy5vbignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQgPT09IGRsZ1swXSkge1xuICAgICAgICAgICAgICAgIGNsb3NlRGlhbG9nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChmaW5hbE9wdGlvbnMuY2xvc2VCdXR0b24pIHtcbiAgICAgICAgbGV0IGJ1dHRvbiA9ICQoJzxhPjwvYT4nKVxuICAgICAgICAgICAgLmF0dHIoJ2hyZWYnLCAnIycpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1sYWJlbCcsICdDbG9zZScpXG4gICAgICAgICAgICAuYXR0cigncm9sZScsICdidXR0b24nKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdkaWFsb2dfX2JveF9faGVhZGluZ19fY2xvc2UnKVxuICAgICAgICAgICAgLmFwcGVuZCgkKCc8c3Bhbj48L3NwYW4+JykuYWRkQ2xhc3MoJ2RpYWxvZ19fYm94X19oZWFkaW5nX19jbG9zZV9faWNvbicpKTtcblxuICAgICAgICBidXR0b24ub24oJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VEaWFsb2coKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaGVhZGluZy5hcHBlbmQoYnV0dG9uKTtcbiAgICB9XG5cbiAgICBkbGcuZm9jdXMoKTtcblxuICAgIGN1cnJlbnQuZm9jdXNUcmFwID0gY3JlYXRlRm9jdXNUcmFwKGRsZ1swXSkuYWN0aXZhdGUoKTtcblxuICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnbm8tc2Nyb2xsJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3Blbk1vZGFsRGlhbG9nO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvZGlhbG9nLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuXHRpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpO1xuXHR9XG5cblx0cmV0dXJuIHRvU3RyLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcblx0aWYgKCFvYmogfHwgdG9TdHIuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBoYXNPd25Db25zdHJ1Y3RvciA9IGhhc093bi5jYWxsKG9iaiwgJ2NvbnN0cnVjdG9yJyk7XG5cdHZhciBoYXNJc1Byb3RvdHlwZU9mID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgJiYgaGFzT3duLmNhbGwob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcblx0Ly8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuXHRpZiAob2JqLmNvbnN0cnVjdG9yICYmICFoYXNPd25Db25zdHJ1Y3RvciAmJiAhaGFzSXNQcm90b3R5cGVPZikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE93biBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhdGVkIGZpcnN0bHksIHNvIHRvIHNwZWVkIHVwLFxuXHQvLyBpZiBsYXN0IG9uZSBpcyBvd24sIHRoZW4gYWxsIHByb3BlcnRpZXMgYXJlIG93bi5cblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gb2JqKSB7IC8qKi8gfVxuXG5cdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG59O1xuXG4vLyBJZiBuYW1lIGlzICdfX3Byb3RvX18nLCBhbmQgT2JqZWN0LmRlZmluZVByb3BlcnR5IGlzIGF2YWlsYWJsZSwgZGVmaW5lIF9fcHJvdG9fXyBhcyBhbiBvd24gcHJvcGVydHkgb24gdGFyZ2V0XG52YXIgc2V0UHJvcGVydHkgPSBmdW5jdGlvbiBzZXRQcm9wZXJ0eSh0YXJnZXQsIG9wdGlvbnMpIHtcblx0aWYgKGRlZmluZVByb3BlcnR5ICYmIG9wdGlvbnMubmFtZSA9PT0gJ19fcHJvdG9fXycpIHtcblx0XHRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG9wdGlvbnMubmFtZSwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdHZhbHVlOiBvcHRpb25zLm5ld1ZhbHVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR0YXJnZXRbb3B0aW9ucy5uYW1lXSA9IG9wdGlvbnMubmV3VmFsdWU7XG5cdH1cbn07XG5cbi8vIFJldHVybiB1bmRlZmluZWQgaW5zdGVhZCBvZiBfX3Byb3RvX18gaWYgJ19fcHJvdG9fXycgaXMgbm90IGFuIG93biBwcm9wZXJ0eVxudmFyIGdldFByb3BlcnR5ID0gZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBuYW1lKSB7XG5cdGlmIChuYW1lID09PSAnX19wcm90b19fJykge1xuXHRcdGlmICghaGFzT3duLmNhbGwob2JqLCBuYW1lKSkge1xuXHRcdFx0cmV0dXJuIHZvaWQgMDtcblx0XHR9IGVsc2UgaWYgKGdPUEQpIHtcblx0XHRcdC8vIEluIGVhcmx5IHZlcnNpb25zIG9mIG5vZGUsIG9ialsnX19wcm90b19fJ10gaXMgYnVnZ3kgd2hlbiBvYmogaGFzXG5cdFx0XHQvLyBfX3Byb3RvX18gYXMgYW4gb3duIHByb3BlcnR5LiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCkgd29ya3MuXG5cdFx0XHRyZXR1cm4gZ09QRChvYmosIG5hbWUpLnZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvYmpbbmFtZV07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lO1xuXHR2YXIgdGFyZ2V0ID0gYXJndW1lbnRzWzBdO1xuXHR2YXIgaSA9IDE7XG5cdHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHR2YXIgZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKHR5cGVvZiB0YXJnZXQgPT09ICdib29sZWFuJykge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuXHRcdC8vIHNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHRpID0gMjtcblx0fVxuXHRpZiAodGFyZ2V0ID09IG51bGwgfHwgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHRmb3IgKDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0c3JjID0gZ2V0UHJvcGVydHkodGFyZ2V0LCBuYW1lKTtcblx0XHRcdFx0Y29weSA9IGdldFByb3BlcnR5KG9wdGlvbnMsIG5hbWUpO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3Bcblx0XHRcdFx0aWYgKHRhcmdldCAhPT0gY29weSkge1xuXHRcdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRcdGlmIChkZWVwICYmIGNvcHkgJiYgKGlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gaXNBcnJheShjb3B5KSkpKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29weUlzQXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNBcnJheShzcmMpID8gc3JjIDogW107XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc1BsYWluT2JqZWN0KHNyYykgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0XHRzZXRQcm9wZXJ0eSh0YXJnZXQsIHsgbmFtZTogbmFtZSwgbmV3VmFsdWU6IGV4dGVuZChkZWVwLCBjbG9uZSwgY29weSkgfSk7XG5cblx0XHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY29weSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHNldFByb3BlcnR5KHRhcmdldCwgeyBuYW1lOiBuYW1lLCBuZXdWYWx1ZTogY29weSB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2V4dGVuZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHRhYmJhYmxlID0gcmVxdWlyZSgndGFiYmFibGUnKTtcblxudmFyIGxpc3RlbmluZ0ZvY3VzVHJhcCA9IG51bGw7XG5cbmZ1bmN0aW9uIGZvY3VzVHJhcChlbGVtZW50LCB1c2VyT3B0aW9ucykge1xuICB2YXIgdGFiYmFibGVOb2RlcyA9IFtdO1xuICB2YXIgZmlyc3RUYWJiYWJsZU5vZGUgPSBudWxsO1xuICB2YXIgbGFzdFRhYmJhYmxlTm9kZSA9IG51bGw7XG4gIHZhciBub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24gPSBudWxsO1xuICB2YXIgYWN0aXZlID0gZmFsc2U7XG4gIHZhciBwYXVzZWQgPSBmYWxzZTtcbiAgdmFyIHRhYkV2ZW50ID0gbnVsbDtcblxuICB2YXIgY29udGFpbmVyID0gKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJylcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudClcbiAgICA6IGVsZW1lbnQ7XG5cbiAgdmFyIGNvbmZpZyA9IHVzZXJPcHRpb25zIHx8IHt9O1xuICBjb25maWcucmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUgPSAodXNlck9wdGlvbnMgJiYgdXNlck9wdGlvbnMucmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUgIT09IHVuZGVmaW5lZClcbiAgICA/IHVzZXJPcHRpb25zLnJldHVybkZvY3VzT25EZWFjdGl2YXRlXG4gICAgOiB0cnVlO1xuICBjb25maWcuZXNjYXBlRGVhY3RpdmF0ZXMgPSAodXNlck9wdGlvbnMgJiYgdXNlck9wdGlvbnMuZXNjYXBlRGVhY3RpdmF0ZXMgIT09IHVuZGVmaW5lZClcbiAgICA/IHVzZXJPcHRpb25zLmVzY2FwZURlYWN0aXZhdGVzXG4gICAgOiB0cnVlO1xuXG4gIHZhciB0cmFwID0ge1xuICAgIGFjdGl2YXRlOiBhY3RpdmF0ZSxcbiAgICBkZWFjdGl2YXRlOiBkZWFjdGl2YXRlLFxuICAgIHBhdXNlOiBwYXVzZSxcbiAgICB1bnBhdXNlOiB1bnBhdXNlLFxuICB9O1xuXG4gIHJldHVybiB0cmFwO1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKGFjdGl2YXRlT3B0aW9ucykge1xuICAgIGlmIChhY3RpdmUpIHJldHVybjtcblxuICAgIHZhciBkZWZhdWx0ZWRBY3RpdmF0ZU9wdGlvbnMgPSB7XG4gICAgICBvbkFjdGl2YXRlOiAoYWN0aXZhdGVPcHRpb25zICYmIGFjdGl2YXRlT3B0aW9ucy5vbkFjdGl2YXRlICE9PSB1bmRlZmluZWQpXG4gICAgICAgID8gYWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGVcbiAgICAgICAgOiBjb25maWcub25BY3RpdmF0ZSxcbiAgICB9O1xuXG4gICAgYWN0aXZlID0gdHJ1ZTtcbiAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICBub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgaWYgKGRlZmF1bHRlZEFjdGl2YXRlT3B0aW9ucy5vbkFjdGl2YXRlKSB7XG4gICAgICBkZWZhdWx0ZWRBY3RpdmF0ZU9wdGlvbnMub25BY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycygpO1xuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVhY3RpdmF0ZShkZWFjdGl2YXRlT3B0aW9ucykge1xuICAgIGlmICghYWN0aXZlKSByZXR1cm47XG5cbiAgICB2YXIgZGVmYXVsdGVkRGVhY3RpdmF0ZU9wdGlvbnMgPSB7XG4gICAgICByZXR1cm5Gb2N1czogKGRlYWN0aXZhdGVPcHRpb25zICYmIGRlYWN0aXZhdGVPcHRpb25zLnJldHVybkZvY3VzICE9PSB1bmRlZmluZWQpXG4gICAgICAgID8gZGVhY3RpdmF0ZU9wdGlvbnMucmV0dXJuRm9jdXNcbiAgICAgICAgOiBjb25maWcucmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUsXG4gICAgICBvbkRlYWN0aXZhdGU6IChkZWFjdGl2YXRlT3B0aW9ucyAmJiBkZWFjdGl2YXRlT3B0aW9ucy5vbkRlYWN0aXZhdGUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgPyBkZWFjdGl2YXRlT3B0aW9ucy5vbkRlYWN0aXZhdGVcbiAgICAgICAgOiBjb25maWcub25EZWFjdGl2YXRlLFxuICAgIH07XG5cbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcblxuICAgIGlmIChkZWZhdWx0ZWREZWFjdGl2YXRlT3B0aW9ucy5vbkRlYWN0aXZhdGUpIHtcbiAgICAgIGRlZmF1bHRlZERlYWN0aXZhdGVPcHRpb25zLm9uRGVhY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIGlmIChkZWZhdWx0ZWREZWFjdGl2YXRlT3B0aW9ucy5yZXR1cm5Gb2N1cykge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeUZvY3VzKG5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbik7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIGlmIChwYXVzZWQgfHwgIWFjdGl2ZSkgcmV0dXJuO1xuICAgIHBhdXNlZCA9IHRydWU7XG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1bnBhdXNlKCkge1xuICAgIGlmICghcGF1c2VkIHx8ICFhY3RpdmUpIHJldHVybjtcbiAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICBpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgLy8gVGhlcmUgY2FuIGJlIG9ubHkgb25lIGxpc3RlbmluZyBmb2N1cyB0cmFwIGF0IGEgdGltZVxuICAgIGlmIChsaXN0ZW5pbmdGb2N1c1RyYXApIHtcbiAgICAgIGxpc3RlbmluZ0ZvY3VzVHJhcC5wYXVzZSgpO1xuICAgIH1cbiAgICBsaXN0ZW5pbmdGb2N1c1RyYXAgPSB0cmFwO1xuXG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBmb2N1c2VkIGVsZW1lbnQgZG9lc24ndCBjYXB0dXJlIHRoZSBldmVudCB0aGF0IGNhdXNlZCB0aGUgZm9jdXMgdHJhcCBhY3RpdmF0aW9uXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0cnlGb2N1cyhmaXJzdEZvY3VzTm9kZSgpKTtcbiAgICB9LCAwKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGNoZWNrRm9jdXMsIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBpZiAoIWFjdGl2ZSB8fCBsaXN0ZW5pbmdGb2N1c1RyYXAgIT09IHRyYXApIHJldHVybjtcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgY2hlY2tGb2N1cywgdHJ1ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcblxuICAgIGxpc3RlbmluZ0ZvY3VzVHJhcCA9IG51bGw7XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5vZGVGb3JPcHRpb24ob3B0aW9uTmFtZSkge1xuICAgIHZhciBvcHRpb25WYWx1ZSA9IGNvbmZpZ1tvcHRpb25OYW1lXTtcbiAgICB2YXIgbm9kZSA9IG9wdGlvblZhbHVlO1xuICAgIGlmICghb3B0aW9uVmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9uVmFsdWUpO1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBvcHRpb25OYW1lICsgJ2AgcmVmZXJzIHRvIG5vIGtub3duIG5vZGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZSA9IG9wdGlvblZhbHVlKCk7XG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG9wdGlvbk5hbWUgKyAnYCBkaWQgbm90IHJldHVybiBhIG5vZGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmdW5jdGlvbiBmaXJzdEZvY3VzTm9kZSgpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAoZ2V0Tm9kZUZvck9wdGlvbignaW5pdGlhbEZvY3VzJykgIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKCdpbml0aWFsRm9jdXMnKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgbm9kZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUgPSB0YWJiYWJsZU5vZGVzWzBdIHx8IGdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKTtcbiAgICB9XG5cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhblxcJ3QgaGF2ZSBhIGZvY3VzLXRyYXAgd2l0aG91dCBhdCBsZWFzdCBvbmUgZm9jdXNhYmxlIGVsZW1lbnQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIC8vIFRoaXMgbmVlZHMgdG8gYmUgZG9uZSBvbiBtb3VzZWRvd24gYW5kIHRvdWNoc3RhcnQgaW5zdGVhZCBvZiBjbGlja1xuICAvLyBzbyB0aGF0IGl0IHByZWNlZGVzIHRoZSBmb2N1cyBldmVudFxuICBmdW5jdGlvbiBjaGVja1BvaW50ZXJEb3duKGUpIHtcbiAgICBpZiAoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzICYmICFjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBkZWFjdGl2YXRlKHsgcmV0dXJuRm9jdXM6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQ2xpY2soZSkge1xuICAgIGlmIChjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMpIHJldHVybjtcbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tGb2N1cyhlKSB7XG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAvLyBDaGVja2luZyBmb3IgYSBibHVyIG1ldGhvZCBoZXJlIHJlc29sdmVzIGEgRmlyZWZveCBpc3N1ZSAoIzE1KVxuICAgIGlmICh0eXBlb2YgZS50YXJnZXQuYmx1ciA9PT0gJ2Z1bmN0aW9uJykgZS50YXJnZXQuYmx1cigpO1xuXG4gICAgaWYgKHRhYkV2ZW50KSB7XG4gICAgICByZWFkanVzdEZvY3VzKHRhYkV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0tleShlKSB7XG4gICAgaWYgKGUua2V5ID09PSAnVGFiJyB8fCBlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgIGhhbmRsZVRhYihlKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmVzY2FwZURlYWN0aXZhdGVzICE9PSBmYWxzZSAmJiBpc0VzY2FwZUV2ZW50KGUpKSB7XG4gICAgICBkZWFjdGl2YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVGFiKGUpIHtcbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG5cbiAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpICYmIE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIDwgMCkge1xuICAgICAgcmV0dXJuIHRhYkV2ZW50ID0gZTtcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGN1cnJlbnRGb2N1c0luZGV4ID0gdGFiYmFibGVOb2Rlcy5pbmRleE9mKGUudGFyZ2V0KTtcblxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IGZpcnN0VGFiYmFibGVOb2RlIHx8IHRhYmJhYmxlTm9kZXMuaW5kZXhPZihlLnRhcmdldCkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiB0cnlGb2N1cyhsYXN0VGFiYmFibGVOb2RlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnlGb2N1cyh0YWJiYWJsZU5vZGVzW2N1cnJlbnRGb2N1c0luZGV4IC0gMV0pO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldCA9PT0gbGFzdFRhYmJhYmxlTm9kZSkgcmV0dXJuIHRyeUZvY3VzKGZpcnN0VGFiYmFibGVOb2RlKTtcblxuICAgIHRyeUZvY3VzKHRhYmJhYmxlTm9kZXNbY3VycmVudEZvY3VzSW5kZXggKyAxXSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVUYWJiYWJsZU5vZGVzKCkge1xuICAgIHRhYmJhYmxlTm9kZXMgPSB0YWJiYWJsZShjb250YWluZXIpO1xuICAgIGZpcnN0VGFiYmFibGVOb2RlID0gdGFiYmFibGVOb2Rlc1swXTtcbiAgICBsYXN0VGFiYmFibGVOb2RlID0gdGFiYmFibGVOb2Rlc1t0YWJiYWJsZU5vZGVzLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVhZGp1c3RGb2N1cyhlKSB7XG4gICAgaWYgKGUuc2hpZnRLZXkpIHJldHVybiB0cnlGb2N1cyhsYXN0VGFiYmFibGVOb2RlKTtcblxuICAgIHRyeUZvY3VzKGZpcnN0VGFiYmFibGVOb2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0VzY2FwZUV2ZW50KGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSAnRXNjYXBlJyB8fCBlLmtleSA9PT0gJ0VzYycgfHwgZS5rZXlDb2RlID09PSAyNztcbn1cblxuZnVuY3Rpb24gdHJ5Rm9jdXMobm9kZSkge1xuICBpZiAoIW5vZGUgfHwgIW5vZGUuZm9jdXMpIHJldHVybjtcbiAgaWYgKG5vZGUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpICByZXR1cm47XG5cbiAgbm9kZS5mb2N1cygpO1xuICBpZiAobm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICBub2RlLnNlbGVjdCgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZm9jdXNUcmFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZm9jdXMtdHJhcC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgZWxlbWVudERvY3VtZW50ID0gZWwub3duZXJEb2N1bWVudCB8fCBlbDtcbiAgdmFyIGJhc2ljVGFiYmFibGVzID0gW107XG4gIHZhciBvcmRlcmVkVGFiYmFibGVzID0gW107XG5cbiAgLy8gQSBub2RlIGlzIFwiYXZhaWxhYmxlXCIgaWZcbiAgLy8gLSBpdCdzIGNvbXB1dGVkIHN0eWxlXG4gIHZhciBpc1VuYXZhaWxhYmxlID0gY3JlYXRlSXNVbmF2YWlsYWJsZShlbGVtZW50RG9jdW1lbnQpO1xuXG4gIHZhciBjYW5kaWRhdGVTZWxlY3RvcnMgPSBbXG4gICAgJ2lucHV0JyxcbiAgICAnc2VsZWN0JyxcbiAgICAnYVtocmVmXScsXG4gICAgJ3RleHRhcmVhJyxcbiAgICAnYnV0dG9uJyxcbiAgICAnW3RhYmluZGV4XScsXG4gIF07XG5cbiAgdmFyIGNhbmRpZGF0ZXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKGNhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJykpO1xuXG4gIGlmIChvcHRpb25zLmluY2x1ZGVDb250YWluZXIpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgaWYgKFxuICAgICAgY2FuZGlkYXRlU2VsZWN0b3JzLnNvbWUoZnVuY3Rpb24oY2FuZGlkYXRlU2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXMuY2FsbChlbCwgY2FuZGlkYXRlU2VsZWN0b3IpO1xuICAgICAgfSlcbiAgICApIHtcbiAgICAgIGNhbmRpZGF0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoY2FuZGlkYXRlcyk7XG4gICAgICBjYW5kaWRhdGVzLnVuc2hpZnQoZWwpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjYW5kaWRhdGUsIGNhbmRpZGF0ZUluZGV4QXR0ciwgY2FuZGlkYXRlSW5kZXg7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gY2FuZGlkYXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjYW5kaWRhdGUgPSBjYW5kaWRhdGVzW2ldO1xuICAgIGNhbmRpZGF0ZUluZGV4QXR0ciA9IHBhcnNlSW50KGNhbmRpZGF0ZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKVxuICAgIGNhbmRpZGF0ZUluZGV4ID0gaXNOYU4oY2FuZGlkYXRlSW5kZXhBdHRyKSA/IGNhbmRpZGF0ZS50YWJJbmRleCA6IGNhbmRpZGF0ZUluZGV4QXR0cjtcblxuICAgIGlmIChcbiAgICAgIGNhbmRpZGF0ZUluZGV4IDwgMFxuICAgICAgfHwgKGNhbmRpZGF0ZS50YWdOYW1lID09PSAnSU5QVVQnICYmIGNhbmRpZGF0ZS50eXBlID09PSAnaGlkZGVuJylcbiAgICAgIHx8IGNhbmRpZGF0ZS5kaXNhYmxlZFxuICAgICAgfHwgaXNVbmF2YWlsYWJsZShjYW5kaWRhdGUsIGVsZW1lbnREb2N1bWVudClcbiAgICApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjYW5kaWRhdGVJbmRleCA9PT0gMCkge1xuICAgICAgYmFzaWNUYWJiYWJsZXMucHVzaChjYW5kaWRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcmRlcmVkVGFiYmFibGVzLnB1c2goe1xuICAgICAgICBpbmRleDogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZUluZGV4LFxuICAgICAgICBub2RlOiBjYW5kaWRhdGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YXIgdGFiYmFibGVOb2RlcyA9IG9yZGVyZWRUYWJiYWJsZXNcbiAgICAuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICByZXR1cm4gYS50YWJJbmRleCA9PT0gYi50YWJJbmRleCA/IGEuaW5kZXggLSBiLmluZGV4IDogYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG4gICAgfSlcbiAgICAubWFwKGZ1bmN0aW9uKGEpIHtcbiAgICAgIHJldHVybiBhLm5vZGVcbiAgICB9KTtcblxuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0YWJiYWJsZU5vZGVzLCBiYXNpY1RhYmJhYmxlcyk7XG5cbiAgcmV0dXJuIHRhYmJhYmxlTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlzVW5hdmFpbGFibGUoZWxlbWVudERvY3VtZW50KSB7XG4gIC8vIE5vZGUgY2FjaGUgbXVzdCBiZSByZWZyZXNoZWQgb24gZXZlcnkgY2hlY2ssIGluIGNhc2VcbiAgLy8gdGhlIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQgaGFzIGNoYW5nZWRcbiAgdmFyIGlzT2ZmQ2FjaGUgPSBbXTtcblxuICAvLyBcIm9mZlwiIG1lYW5zIGBkaXNwbGF5OiBub25lO2AsIGFzIG9wcG9zZWQgdG8gXCJoaWRkZW5cIixcbiAgLy8gd2hpY2ggbWVhbnMgYHZpc2liaWxpdHk6IGhpZGRlbjtgLiBnZXRDb21wdXRlZFN0eWxlXG4gIC8vIGFjY3VyYXRlbHkgcmVmbGVjdHMgdmlzaWJsaXR5IGluIGNvbnRleHQgYnV0IG5vdFxuICAvLyBcIm9mZlwiIHN0YXRlLCBzbyB3ZSBuZWVkIHRvIHJlY3Vyc2l2ZWx5IGNoZWNrIHBhcmVudHMuXG5cbiAgZnVuY3Rpb24gaXNPZmYobm9kZSwgbm9kZUNvbXB1dGVkU3R5bGUpIHtcbiAgICBpZiAobm9kZSA9PT0gZWxlbWVudERvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gRmluZCB0aGUgY2FjaGVkIG5vZGUgKEFycmF5LnByb3RvdHlwZS5maW5kIG5vdCBhdmFpbGFibGUgaW4gSUU5KVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBpc09mZkNhY2hlLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaXNPZmZDYWNoZVtpXVswXSA9PT0gbm9kZSkgcmV0dXJuIGlzT2ZmQ2FjaGVbaV1bMV07XG4gICAgfVxuXG4gICAgbm9kZUNvbXB1dGVkU3R5bGUgPSBub2RlQ29tcHV0ZWRTdHlsZSB8fCBlbGVtZW50RG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAgIGlmIChub2RlQ29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJlc3VsdCA9IGlzT2ZmKG5vZGUucGFyZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgaXNPZmZDYWNoZS5wdXNoKFtub2RlLCByZXN1bHRdKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gaXNVbmF2YWlsYWJsZShub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGVsZW1lbnREb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBjb21wdXRlZFN0eWxlID0gZWxlbWVudERvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cbiAgICBpZiAoaXNPZmYobm9kZSwgY29tcHV0ZWRTdHlsZSkpIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIGNvbXB1dGVkU3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbic7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RhYmJhYmxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9