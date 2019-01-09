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

    $(document).on('click', function(e){
        e.preventDefault(); 
        var x = e.targetTouches[0].target.tagName;
        console.log('You clicked on a: '+ e.target.tagName + ' element ,with class name: '+ e.target.className +' ,or ID name:' +e.target.id );
        console.log('the href atrribute is: '+ e.target.getAttribute('href'));
        console.log('You touched on a: '+ x);

          
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzc4YTE3OTg0MWE5NGYxZDNjMzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2luaXQtY29va2llLW5vdGljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NpdHlzcG9ydC9jaXR5c3BvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxLQUFLO0FBQ0wsQ0FBQztBQUNELGtCQUFrQixtQkFBTyxDQUFDLENBQVc7O0FBRXJDO0FBQ0E7QUFDQSxtREFBbUQsYUFBYTs7QUFFaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQzlCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLEtBQUssSUFBMEM7QUFDL0MsRUFBRSxvQ0FBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDakI7QUFDQTtBQUNBLEtBQUssSUFBMkI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNCQUFzQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRCw2QkFBNkIsRUFBRTtBQUMvQjs7QUFFQSxTQUFTLG9CQUFvQjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQixDQUFDOzs7Ozs7OztBQ3BLRDtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFPLENBQUMsQ0FBNkI7O0FBRWhFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsImZpbGUiOiJjaXR5c3BvcnQvY2l0eXNwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM3OGExNzk4NDFhOTRmMWQzYzMxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gdGVzdCBjb2RlIGZvciBob21lcGFnZSBjYXJvdXNlbFxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICBcbiAgICBjb25zb2xlLmxvZygkKCcuYmFubmVyLWNvbnRlbnQgYScpLmxlbmd0aCk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgdmFyIHggPSBlLnRhcmdldFRvdWNoZXNbMF0udGFyZ2V0LnRhZ05hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdZb3UgY2xpY2tlZCBvbiBhOiAnKyBlLnRhcmdldC50YWdOYW1lICsgJyBlbGVtZW50ICx3aXRoIGNsYXNzIG5hbWU6ICcrIGUudGFyZ2V0LmNsYXNzTmFtZSArJyAsb3IgSUQgbmFtZTonICtlLnRhcmdldC5pZCApO1xuICAgICAgICBjb25zb2xlLmxvZygndGhlIGhyZWYgYXRycmlidXRlIGlzOiAnKyBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdZb3UgdG91Y2hlZCBvbiBhOiAnKyB4KTtcblxuICAgICAgICAgIFxuICAgIH0pO1xufSk7XG4gICAgdmFyIENvb2tpZXMgPSByZXF1aXJlKCdqcy1jb29raWUnKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoJCkge1xuICAgICAgICBpZiAoIUNvb2tpZXMuZ2V0KCdjb29raWVub3RpY2VzaG93bicpKSB7XG4gICAgICAgICAgICBDb29raWVzLnNldCgnY29va2llbm90aWNlc2hvd24nLCAnMScsIHtleHBpcmVzOiAzNjV9KTtcblxuICAgICAgICAgICAgJCgnLmNvb2tpZS1ub3RpY2UnKS5zaG93KCk7XG5cbiAgICAgICAgICAgICQoJy5jb29raWUtbm90aWNlX19kaXNtaXNzIGJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJCgnLmNvb2tpZS1ub3RpY2UnKS5mYWRlT3V0KCdmYXN0Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy91dGlscy9pbml0LWNvb2tpZS1ub3RpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUgOSIsIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gZmFsc2U7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZmFjdG9yeSk7XG5cdFx0cmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gdHJ1ZTtcblx0fVxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdFx0cmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gdHJ1ZTtcblx0fVxuXHRpZiAoIXJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlcikge1xuXHRcdHZhciBPbGRDb29raWVzID0gd2luZG93LkNvb2tpZXM7XG5cdFx0dmFyIGFwaSA9IHdpbmRvdy5Db29raWVzID0gZmFjdG9yeSgpO1xuXHRcdGFwaS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0d2luZG93LkNvb2tpZXMgPSBPbGRDb29raWVzO1xuXHRcdFx0cmV0dXJuIGFwaTtcblx0XHR9O1xuXHR9XG59KGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gZXh0ZW5kICgpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdGZvciAoOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXR0cmlidXRlcyA9IGFyZ3VtZW50c1sgaSBdO1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0cmVzdWx0W2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkgKGtleSwgdmFsdWUsIGF0dHJpYnV0ZXMpIHtcblx0XHRcdHZhciByZXN1bHQ7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdyaXRlXG5cblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRhdHRyaWJ1dGVzID0gZXh0ZW5kKHtcblx0XHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdFx0fSwgYXBpLmRlZmF1bHRzLCBhdHRyaWJ1dGVzKTtcblxuXHRcdFx0XHRpZiAodHlwZW9mIGF0dHJpYnV0ZXMuZXhwaXJlcyA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0XHR2YXIgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdFx0ZXhwaXJlcy5zZXRNaWxsaXNlY29uZHMoZXhwaXJlcy5nZXRNaWxsaXNlY29uZHMoKSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gZXhwaXJlcztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBhdHRyaWJ1dGVzLmV4cGlyZXMgPyBhdHRyaWJ1dGVzLmV4cGlyZXMudG9VVENTdHJpbmcoKSA6ICcnO1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXHRcdFx0XHRcdGlmICgvXltcXHtcXFtdLy50ZXN0KHJlc3VsdCkpIHtcblx0XHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblxuXHRcdFx0XHRpZiAoIWNvbnZlcnRlci53cml0ZSkge1xuXHRcdFx0XHRcdHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWx1ZSkpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnwzQXwzQ3wzRXwzRHwyRnwzRnw0MHw1Qnw1RHw1RXw2MHw3Qnw3RHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGtleSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoa2V5KSk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvW1xcKFxcKV0vZywgZXNjYXBlKTtcblxuXHRcdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cblx0XHRcdFx0Zm9yICh2YXIgYXR0cmlidXRlTmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRcdGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc9JyArIGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIChkb2N1bWVudC5jb29raWUgPSBrZXkgKyAnPScgKyB2YWx1ZSArIHN0cmluZ2lmaWVkQXR0cmlidXRlcyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlYWRcblxuXHRcdFx0aWYgKCFrZXkpIHtcblx0XHRcdFx0cmVzdWx0ID0ge307XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLiBBbHNvIHByZXZlbnRzIG9kZCByZXN1bHQgd2hlblxuXHRcdFx0Ly8gY2FsbGluZyBcImdldCgpXCJcblx0XHRcdHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llID8gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpIDogW107XG5cdFx0XHR2YXIgcmRlY29kZSA9IC8oJVswLTlBLVpdezJ9KSsvZztcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIXRoaXMuanNvbiAmJiBjb29raWUuY2hhckF0KDApID09PSAnXCInKSB7XG5cdFx0XHRcdFx0Y29va2llID0gY29va2llLnNsaWNlKDEsIC0xKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dmFyIG5hbWUgPSBwYXJ0c1swXS5yZXBsYWNlKHJkZWNvZGUsIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdFx0XHRcdFx0Y29va2llID0gY29udmVydGVyLnJlYWQgP1xuXHRcdFx0XHRcdFx0Y29udmVydGVyLnJlYWQoY29va2llLCBuYW1lKSA6IGNvbnZlcnRlcihjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRjb29raWUucmVwbGFjZShyZGVjb2RlLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRcdFx0aWYgKHRoaXMuanNvbikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0Y29va2llID0gSlNPTi5wYXJzZShjb29raWUpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoa2V5ID09PSBuYW1lKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBjb29raWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIWtleSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W25hbWVdID0gY29va2llO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRhcGkuc2V0ID0gYXBpO1xuXHRcdGFwaS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRyZXR1cm4gYXBpLmNhbGwoYXBpLCBrZXkpO1xuXHRcdH07XG5cdFx0YXBpLmdldEpTT04gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gYXBpLmFwcGx5KHtcblx0XHRcdFx0anNvbjogdHJ1ZVxuXHRcdFx0fSwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcblx0XHR9O1xuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLnJlbW92ZSA9IGZ1bmN0aW9uIChrZXksIGF0dHJpYnV0ZXMpIHtcblx0XHRcdGFwaShrZXksICcnLCBleHRlbmQoYXR0cmlidXRlcywge1xuXHRcdFx0XHRleHBpcmVzOiAtMVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cblx0XHRhcGkud2l0aENvbnZlcnRlciA9IGluaXQ7XG5cblx0XHRyZXR1cm4gYXBpO1xuXHR9XG5cblx0cmV0dXJuIGluaXQoZnVuY3Rpb24gKCkge30pO1xufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUgOSIsIiFmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBpbml0Q29va2llTm90aWNlID0gcmVxdWlyZSgnLi4vdXRpbHMvaW5pdC1jb29raWUtbm90aWNlJyksXG5cbiAgICAgICAgbW9iaWxlTmF2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQoJy5tb2JpbGUtbmF2Jyk7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCcubW9iaWxlLW5hdi10b2dnbGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFjY29yZGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhY2NvcmRpb25zID0gJCgnLmFjY29yZGlvbicpLFxuICAgICAgICAgICAgICAgIGNsb3NlSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZmluZCgnLmFjY29yZGlvbi1jb250ZW50Jykuc2xpZGVVcChcImZhc3RcIik7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZmluZCgnLmZhLW1pbnVzJykucmVtb3ZlQ2xhc3MoJ2ZhLW1pbnVzJykuYWRkQ2xhc3MoJ2ZhLXBsdXMnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9wZW5JdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmZpbmQoJy5hY2NvcmRpb24tY29udGVudCcpLnNsaWRlRG93bihcImZhc3RcIik7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZmluZCgnLmZhLXBsdXMnKS5yZW1vdmVDbGFzcygnZmEtcGx1cycpLmFkZENsYXNzKCdmYS1taW51cycpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGFjY29yZGlvbnMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjY29yZGlvbiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICBhY2NvcmRpb24uZmluZCgnLmFjY29yZGlvbi10aXRsZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB0aXRsZS5jbG9zZXN0KCcuYWNjb3JkaW9uLWl0ZW0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9IGl0ZW0uaGFzQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUl0ZW0oaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUl0ZW0oYWNjb3JkaW9uLmZpbmQoJy5hY2NvcmRpb24taXRlbS5vcGVuJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbkl0ZW0oaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvZ0ZhbGxCYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFNb2Rlcm5penIuc3ZnKSB7XG4gICAgICAgICAgICAgICAgJChcIi5mb290ZXItbG9nbyBpbWdcIikuYXR0cihcInNyY1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmF0dHIoXCJzcmNcIikucmVwbGFjZShcIi5zdmdcIiwgXCIucG5nXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGltYWdlQ3JlZGl0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkY3JlZGl0cyA9ICQoXCIuaW1hZ2UtY3JlZGl0XCIpLFxuICAgICAgICAgICAgICAgICRjcmVkaXRJdGVtcyA9ICQoXCIuY3JlZGl0cy1pdGVtc1wiKSxcbiAgICAgICAgICAgICAgICAkc2NwQ3JlZGl0c1RpdGxlID0gJChcIi5jcmVkaXRzLXRpdGxlXCIpLFxuICAgICAgICAgICAgICAgIGNyZWRpdEJ1dHRvbkNsYXNzID0gXCIuaW1hZ2UtY3JlZGl0X19idXR0b25cIixcblxuICAgICAgICAgICAgICAgIHRvZ2dsZUltYWdlQ3JlZGl0ID0gZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBub2RlLmF0dHIoXCJhcmlhLXByZXNzZWRcIikgPT09IFwidHJ1ZVwiID8gXCJmYWxzZVwiIDogXCJ0cnVlXCI7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYXR0cihcImFyaWEtcHJlc3NlZFwiLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50KCkuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICRjcmVkaXRzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZChjcmVkaXRCdXR0b25DbGFzcykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSW1hZ2VDcmVkaXQoJCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJHNjcENyZWRpdHNUaXRsZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiY3JlZGl0cy10aXRsZS0tYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIC5uZXh0KFwiLmNyZWRpdHMtaXRlbXNcIikudG9nZ2xlQ2xhc3MoXCJzci1vbmx5XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG1vYmlsZU5hdigpO1xuICAgICAgICAgICAgYWNjb3JkaW9uKCk7XG4gICAgICAgICAgICBpbml0Q29va2llTm90aWNlKCQpO1xuICAgICAgICAgICAgbG9nRmFsbEJhY2soKTtcbiAgICAgICAgICAgIGltYWdlQ3JlZGl0cygpO1xuICAgICAgICB9O1xuXG4gICAgJChpbml0KTtcbn0oKTtcblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jaXR5c3BvcnQvY2l0eXNwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDkiXSwic291cmNlUm9vdCI6IiJ9