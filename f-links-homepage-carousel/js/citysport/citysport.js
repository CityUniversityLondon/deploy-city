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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
    // test code for homepage carousel
$(document).ready(function(){
    
    console.log($('.banner-content a').length);

    $('.banner-content a').on('click', function(e){
        console.log('clicked');
        e.preventDefault();    
    });
});
    var Cookies = __webpack_require__(5);

    return function ($) {
        if (!Cookies.get('cookienoticeshown')) {
            Cookies.set('cookienoticeshown', '1', {expires: 365});

            $('.cookie-notice').show();

            $('.cookie-notice__dismiss button').click(function (event) {
                event.preventDefault();
                $('.cookie-notice').fadeOut('fast');
            });
        }
    };
}();


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

!function () {
    'use strict';
    var initCookieNotice = __webpack_require__(4),

        mobileNav = function () {
            var container = $('.mobile-nav');

            container.find('.mobile-nav-toggle').click(function (e) {
                e.preventDefault();
                container.toggleClass('open');
            });
        },

        accordion = function () {
            var accordions = $('.accordion'),
                closeItem = function (item) {
                    item.removeClass('open');
                    item.attr('aria-expanded', 'false');
                    item.find('.accordion-content').slideUp("fast");
                    item.find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
                },
                openItem = function (item) {
                    item.addClass('open');
                    item.attr('aria-expanded', 'true');
                    item.find('.accordion-content').slideDown("fast");
                    item.find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
                };

            accordions.each(function () {
                var accordion = $(this);

                accordion.find('.accordion-title').click(function () {
                    var title = $(this),
                        item = title.closest('.accordion-item'),
                        isOpen = item.hasClass('open');

                    if (isOpen) {
                        closeItem(item);
                    } else {
                        closeItem(accordion.find('.accordion-item.open'));
                        openItem(item);
                    }
                });
            });
        },

        logFallBack = function () {
            if (!Modernizr.svg) {
                $(".footer-logo img").attr("src", function () {
                    return $(this).attr("src").replace(".svg", ".png");
                });
            }
        },

        imageCredits = function () {
            var $credits = $(".image-credit"),
                $creditItems = $(".credits-items"),
                $scpCreditsTitle = $(".credits-title"),
                creditButtonClass = ".image-credit__button",

                toggleImageCredit = function(node) {
                    var state = node.attr("aria-pressed") === "true" ? "false" : "true";
                    node.attr("aria-pressed", state);
                    node.parent().attr("aria-expanded", state);
                };

            $credits.each(function () {
                $(this).find(creditButtonClass).click(function(event) {
                    event.preventDefault();
                    toggleImageCredit($(this));
                });
            });

            $scpCreditsTitle.on("click", function () {
                $(this).toggleClass("credits-title--active")
                    .next(".credits-items").toggleClass("sr-only");
            });
        },

        init = function () {
            mobileNav();
            accordion();
            initCookieNotice($);
            logFallBack();
            imageCredits();
        };

    $(init);
}();




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjhiNDI4OTE0NjVkODRlY2IzZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2luaXQtY29va2llLW5vdGljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NpdHlzcG9ydC9jaXR5c3BvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJCO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRCxrQkFBa0IsbUJBQU8sQ0FBQyxDQUFXOztBQUVyQztBQUNBO0FBQ0EsbURBQW1ELGFBQWE7O0FBRWhFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUN6QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxLQUFLLElBQTBDO0FBQy9DLEVBQUUsb0NBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLG9HQUFDO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLLElBQTJCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQkFBc0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0QsNkJBQTZCLEVBQUU7QUFDL0I7O0FBRUEsU0FBUyxvQkFBb0I7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0IsQ0FBQzs7Ozs7Ozs7QUNwS0Q7QUFDQTtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLENBQTZCOztBQUVoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJmaWxlIjoiY2l0eXNwb3J0L2NpdHlzcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyOGI0Mjg5MTQ2NWQ4NGVjYjNlMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIHRlc3QgY29kZSBmb3IgaG9tZXBhZ2UgY2Fyb3VzZWxcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgY29uc29sZS5sb2coJCgnLmJhbm5lci1jb250ZW50IGEnKS5sZW5ndGgpO1xuXG4gICAgJCgnLmJhbm5lci1jb250ZW50IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICBcbiAgICB9KTtcbn0pO1xuICAgIHZhciBDb29raWVzID0gcmVxdWlyZSgnanMtY29va2llJyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCQpIHtcbiAgICAgICAgaWYgKCFDb29raWVzLmdldCgnY29va2llbm90aWNlc2hvd24nKSkge1xuICAgICAgICAgICAgQ29va2llcy5zZXQoJ2Nvb2tpZW5vdGljZXNob3duJywgJzEnLCB7ZXhwaXJlczogMzY1fSk7XG5cbiAgICAgICAgICAgICQoJy5jb29raWUtbm90aWNlJykuc2hvdygpO1xuXG4gICAgICAgICAgICAkKCcuY29va2llLW5vdGljZV9fZGlzbWlzcyBidXR0b24nKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICQoJy5jb29raWUtbm90aWNlJykuZmFkZU91dCgnZmFzdCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdXRpbHMvaW5pdC1jb29raWUtbm90aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IDkiLCIvKiFcbiAqIEphdmFTY3JpcHQgQ29va2llIHYyLjIuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAqXG4gKiBDb3B5cmlnaHQgMjAwNiwgMjAxNSBLbGF1cyBIYXJ0bCAmIEZhZ25lciBCcmFja1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0dmFyIHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IGZhbHNlO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdCAoY29udmVydGVyKSB7XG5cdFx0ZnVuY3Rpb24gYXBpIChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXcml0ZVxuXG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0YXR0cmlidXRlcyA9IGV4dGVuZCh7XG5cdFx0XHRcdFx0cGF0aDogJy8nXG5cdFx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBhdHRyaWJ1dGVzLmV4cGlyZXMgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0dmFyIGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRcdGV4cGlyZXMuc2V0TWlsbGlzZWNvbmRzKGV4cGlyZXMuZ2V0TWlsbGlzZWNvbmRzKCkgKyBhdHRyaWJ1dGVzLmV4cGlyZXMgKiA4NjRlKzUpO1xuXHRcdFx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGV4cGlyZXM7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSdyZSB1c2luZyBcImV4cGlyZXNcIiBiZWNhdXNlIFwibWF4LWFnZVwiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcblx0XHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0XHRpZiAoL15bXFx7XFxbXS8udGVzdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRcdFx0aWYgKCFjb252ZXJ0ZXIud3JpdGUpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8M0F8M0N8M0V8M0R8MkZ8M0Z8NDB8NUJ8NUR8NUV8NjB8N0J8N0R8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBjb252ZXJ0ZXIud3JpdGUodmFsdWUsIGtleSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnw1RXw2MHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1tcXChcXCldL2csIGVzY2FwZSk7XG5cblx0XHRcdFx0dmFyIHN0cmluZ2lmaWVkQXR0cmlidXRlcyA9ICcnO1xuXG5cdFx0XHRcdGZvciAodmFyIGF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRcdGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnOyAnICsgYXR0cmlidXRlTmFtZTtcblx0XHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZWFkXG5cblx0XHRcdGlmICgha2V5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUbyBwcmV2ZW50IHRoZSBmb3IgbG9vcCBpbiB0aGUgZmlyc3QgcGxhY2UgYXNzaWduIGFuIGVtcHR5IGFycmF5XG5cdFx0XHQvLyBpbiBjYXNlIHRoZXJlIGFyZSBubyBjb29raWVzIGF0IGFsbC4gQWxzbyBwcmV2ZW50cyBvZGQgcmVzdWx0IHdoZW5cblx0XHRcdC8vIGNhbGxpbmcgXCJnZXQoKVwiXG5cdFx0XHR2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSA6IFtdO1xuXHRcdFx0dmFyIHJkZWNvZGUgPSAvKCVbMC05QS1aXXsyfSkrL2c7XG5cdFx0XHR2YXIgaSA9IDA7XG5cblx0XHRcdGZvciAoOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdHZhciBjb29raWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc9Jyk7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gcGFydHNbMF0ucmVwbGFjZShyZGVjb2RlLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvbnZlcnRlci5yZWFkID9cblx0XHRcdFx0XHRcdGNvbnZlcnRlci5yZWFkKGNvb2tpZSwgbmFtZSkgOiBjb252ZXJ0ZXIoY29va2llLCBuYW1lKSB8fFxuXHRcdFx0XHRcdFx0Y29va2llLnJlcGxhY2UocmRlY29kZSwgZGVjb2RlVVJJQ29tcG9uZW50KTtcblxuXHRcdFx0XHRcdGlmICh0aGlzLmpzb24pIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGNvb2tpZSA9IEpTT04ucGFyc2UoY29va2llKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gbmFtZSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gY29va2llO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFrZXkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtuYW1lXSA9IGNvb2tpZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0YXBpLnNldCA9IGFwaTtcblx0XHRhcGkuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cmV0dXJuIGFwaS5jYWxsKGFwaSwga2V5KTtcblx0XHR9O1xuXHRcdGFwaS5nZXRKU09OID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGFwaS5hcHBseSh7XG5cdFx0XHRcdGpzb246IHRydWVcblx0XHRcdH0sIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG5cdFx0fTtcblx0XHRhcGkuZGVmYXVsdHMgPSB7fTtcblxuXHRcdGFwaS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRhcGkoa2V5LCAnJywgZXh0ZW5kKGF0dHJpYnV0ZXMsIHtcblx0XHRcdFx0ZXhwaXJlczogLTFcblx0XHRcdH0pKTtcblx0XHR9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9zcmMvanMuY29va2llLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IDkiLCIhZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgaW5pdENvb2tpZU5vdGljZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2luaXQtY29va2llLW5vdGljZScpLFxuXG4gICAgICAgIG1vYmlsZU5hdiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSAkKCcubW9iaWxlLW5hdicpO1xuXG4gICAgICAgICAgICBjb250YWluZXIuZmluZCgnLm1vYmlsZS1uYXYtdG9nZ2xlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBhY2NvcmRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWNjb3JkaW9ucyA9ICQoJy5hY2NvcmRpb24nKSxcbiAgICAgICAgICAgICAgICBjbG9zZUl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmZpbmQoJy5hY2NvcmRpb24tY29udGVudCcpLnNsaWRlVXAoXCJmYXN0XCIpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmZpbmQoJy5mYS1taW51cycpLnJlbW92ZUNsYXNzKCdmYS1taW51cycpLmFkZENsYXNzKCdmYS1wbHVzJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvcGVuSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5maW5kKCcuYWNjb3JkaW9uLWNvbnRlbnQnKS5zbGlkZURvd24oXCJmYXN0XCIpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmZpbmQoJy5mYS1wbHVzJykucmVtb3ZlQ2xhc3MoJ2ZhLXBsdXMnKS5hZGRDbGFzcygnZmEtbWludXMnKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBhY2NvcmRpb25zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhY2NvcmRpb24gPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgYWNjb3JkaW9uLmZpbmQoJy5hY2NvcmRpb24tdGl0bGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0aXRsZSA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gdGl0bGUuY2xvc2VzdCgnLmFjY29yZGlvbi1pdGVtJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpc09wZW4gPSBpdGVtLmhhc0NsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VJdGVtKGFjY29yZGlvbi5maW5kKCcuYWNjb3JkaW9uLWl0ZW0ub3BlbicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5JdGVtKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2dGYWxsQmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghTW9kZXJuaXpyLnN2Zykge1xuICAgICAgICAgICAgICAgICQoXCIuZm9vdGVyLWxvZ28gaW1nXCIpLmF0dHIoXCJzcmNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5hdHRyKFwic3JjXCIpLnJlcGxhY2UoXCIuc3ZnXCIsIFwiLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBpbWFnZUNyZWRpdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgJGNyZWRpdHMgPSAkKFwiLmltYWdlLWNyZWRpdFwiKSxcbiAgICAgICAgICAgICAgICAkY3JlZGl0SXRlbXMgPSAkKFwiLmNyZWRpdHMtaXRlbXNcIiksXG4gICAgICAgICAgICAgICAgJHNjcENyZWRpdHNUaXRsZSA9ICQoXCIuY3JlZGl0cy10aXRsZVwiKSxcbiAgICAgICAgICAgICAgICBjcmVkaXRCdXR0b25DbGFzcyA9IFwiLmltYWdlLWNyZWRpdF9fYnV0dG9uXCIsXG5cbiAgICAgICAgICAgICAgICB0b2dnbGVJbWFnZUNyZWRpdCA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gbm9kZS5hdHRyKFwiYXJpYS1wcmVzc2VkXCIpID09PSBcInRydWVcIiA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmF0dHIoXCJhcmlhLXByZXNzZWRcIiwgc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCgpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIHN0YXRlKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkY3JlZGl0cy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoY3JlZGl0QnV0dG9uQ2xhc3MpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltYWdlQ3JlZGl0KCQodGhpcykpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRzY3BDcmVkaXRzVGl0bGUub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImNyZWRpdHMtdGl0bGUtLWFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICAubmV4dChcIi5jcmVkaXRzLWl0ZW1zXCIpLnRvZ2dsZUNsYXNzKFwic3Itb25seVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtb2JpbGVOYXYoKTtcbiAgICAgICAgICAgIGFjY29yZGlvbigpO1xuICAgICAgICAgICAgaW5pdENvb2tpZU5vdGljZSgkKTtcbiAgICAgICAgICAgIGxvZ0ZhbGxCYWNrKCk7XG4gICAgICAgICAgICBpbWFnZUNyZWRpdHMoKTtcbiAgICAgICAgfTtcblxuICAgICQoaW5pdCk7XG59KCk7XG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY2l0eXNwb3J0L2NpdHlzcG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSA5Il0sInNvdXJjZVJvb3QiOiIifQ==