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
/******/ 	return __webpack_require__(__webpack_require__.s = 186);
/******/ })
/************************************************************************/
/******/ ({

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var defer = __webpack_require__(3),
	loadYoutubeVideo = __webpack_require__(187),

	getDataAttributes = function(node) {

		var dataAttrRegex = /^data-(.+)$/;            
        var attrs = {};
        $.each(node[0].attributes, function (index, attribute) {
            var match = attribute.name.match(dataAttrRegex);
            if (match) {
                attrs[match[1]] = attribute.value;
            }
        });

        return attrs;
	},

	getService = function(link){
		var href = link.attr('href') || '';
        var params = getDataAttributes(link);

        var ytMatch = href.match(/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/);
        if (ytMatch) {
            return {type: 'youtube', id: ytMatch[1], params: params};
        }

        return null;
	},

	loadVideo = function(wrapper, service) {
		switch (service.type) {
	        case 'youtube':
	            return loadYoutubeVideo(wrapper, service);
	        default:
	            return false;
	    }
	},

    init = function() {
    	var link = $('.video-preview__button');

    	if(link.length){
    		var service = getService(link);

	    	if (service) {
		        var parent = link.parent();
		        var wrapper = null;

		        if (parent.hasClass('video-preview')) {
		            wrapper = parent;
		        } else {
		            wrapper = $('<div/>').addClass('video-preview').insertBefore(link);
		            wrapper.append(link);
		        }

		        link.on('click', function (event) {
					
		        	event.preventDefault();
		            loadVideo(wrapper, service);
		            
		        });
	    	}
		}
    };
defer(init);

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(188),
    createYoutubePlayer = __webpack_require__(189);

var DEFAULT_PARAMS = {
    frameBorder: "0",
    playerVars: {
        rel: 0,
    }
};

function closeDialog() {

}


function loadYoutubeVideo(wrapper, services) {
    var id = services.id;
    var params = services.params;
    var iframeId = 'ytev-'+id;
    var link = null;
    var h,w;
    var windowWidth = window.innerWidth;

    if(windowWidth >= 1500){
        h=720;
        w=1280;
    }
    else if(windowWidth <= 1499 && windowWidth >= 1050){
        h=480;
        w=854;
    }
    else if(windowWidth <= 1049 && windowWidth >= 800){
        h=360;
        w=640;
    }
    else if(windowWidth <= 799 && windowWidth >= 580){
        h=240;
        w=426;
    }
    else{
        h=160;
        w=300;
    }

    link = wrapper.children('a');
    var fallbackParams = {
        width: w ,
        height: h
    };

    var playerParams = $.extend({},
        DEFAULT_PARAMS,
        fallbackParams,
        params,
        {
            videoId: id,
            events: {
                onInit: function () {
                    var dlg = $('<div></div>')
                        .addClass('dialog')
                        .attr('tabindex', '0')
                        .appendTo($('body'));

                    var playIcon = $('<span></span>').addClass('ui-icon').appendTo(dlg);

                    var box = $('<div></div>').addClass('dialog__box')
                        .appendTo(dlg);

                    var youtube = $('<div/>').attr('id', iframeId).attr(fallbackParams).appendTo(box);

                    dlg.on('click', function (evt) {
                            dlg.remove();
                            $('html').removeClass('no-scroll');
                    });

                    dlg.on('keydown', function (evt) {
                        if (evt.which === 27) {
                            dlg.remove();
                            $('html').removeClass('no-scroll');
                            evt.preventDefault();
                        }
                    });

                    $('body').append(dlg);
                    dlg.focus();
                    wrapper.addClass('video-preview--loading');
                },
                onReady: function (event) {
                    var player = event.target;
                    var iframe = link.siblings('iframe');

                    wrapper.removeClass('video-preview--loading');
                    wrapper.addClass('media--youtube');
                    player.playVideo();

                   
                }
            }
        }
    );

    $('html').addClass('no-scroll');
    createYoutubePlayer(iframeId, playerParams);
}

module.exports = loadYoutubeVideo;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

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
				src = target[name];
				copy = options[name];

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
						target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),

/***/ 189:
/***/ (function(module, exports) {

var UNLOADED = 'UNLOADED';
var LOADING = 'LOADING';
var LOADED = 'LOADED';

var apiStatus = UNLOADED;

var pendingPlayers = [];

var players = {};

function createPlayer(id, data) {
    if (apiStatus === LOADED || apiStatus === LOADING) {
        initPlayer(id, data);
    } else {
        pendingPlayers.push({ id: id, data: data });
        if (apiStatus === UNLOADED) {
            loadApi();
        }
    }

}

function initPlayer(id, data) {
    if (data && data.events && data.events.onInit) {
        data.events.onInit();
    }

    var player = new YT.Player(id, data);
    players[id] = {player : player, data : data};
}


function loadApi() {
    apiStatus = LOADING;
    window.onYouTubeIframeAPIReady = function () {
        pendingPlayers.forEach(function(pendingPlayers){ initPlayer(pendingPlayers.id, pendingPlayers.data);});
    };

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

module.exports = createPlayer;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/**
 * expects jQuery to be provided by CITY_R.js
 */
module.exports = window.$;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
    'use strict';

    var $ = __webpack_require__(2);

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGJmMzUxNGZlYmIyMzE0MzU4ZDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdmlkZW8tYmFubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL3ZpZGVvLXByZXZpZXcteW91dHViZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXh0ZW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL3lvdXR1YmUtcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL2xpYnMvanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL3V0aWxzL2RlZmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTs7QUFFQTs7QUFFQSxvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxZOzs7Ozs7O0FDaEVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQzs7Ozs7Ozs7QUN6R0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sWUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw2QkFBNkIscUJBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25COzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QscURBQXFEO0FBQzdHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEI7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0EsMEI7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHVDQUF1QztBQUN2QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRyIsImZpbGUiOiJtb2R1bGVzL3ZpZGVvLWJhbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE4Nik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGJmMzUxNGZlYmIyMzE0MzU4ZDMiLCJ2YXIgZGVmZXIgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmVyJyksXG5cdGxvYWRZb3V0dWJlVmlkZW8gPSByZXF1aXJlKCcuL3ZpZGVvLXByZXZpZXcteW91dHViZScpLFxuXG5cdGdldERhdGFBdHRyaWJ1dGVzID0gZnVuY3Rpb24obm9kZSkge1xuXG5cdFx0dmFyIGRhdGFBdHRyUmVnZXggPSAvXmRhdGEtKC4rKSQvOyAgICAgICAgICAgIFxuICAgICAgICB2YXIgYXR0cnMgPSB7fTtcbiAgICAgICAgJC5lYWNoKG5vZGVbMF0uYXR0cmlidXRlcywgZnVuY3Rpb24gKGluZGV4LCBhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGF0dHJpYnV0ZS5uYW1lLm1hdGNoKGRhdGFBdHRyUmVnZXgpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgYXR0cnNbbWF0Y2hbMV1dID0gYXR0cmlidXRlLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYXR0cnM7XG5cdH0sXG5cblx0Z2V0U2VydmljZSA9IGZ1bmN0aW9uKGxpbmspe1xuXHRcdHZhciBocmVmID0gbGluay5hdHRyKCdocmVmJykgfHwgJyc7XG4gICAgICAgIHZhciBwYXJhbXMgPSBnZXREYXRhQXR0cmlidXRlcyhsaW5rKTtcblxuICAgICAgICB2YXIgeXRNYXRjaCA9IGhyZWYubWF0Y2goLyg/Omh0dHBzPzpcXC9cXC8pPyg/Ond3d1xcLik/eW91dHVcXC4/YmUoPzpcXC5jb20pP1xcLz8uKig/OndhdGNofGVtYmVkKT8oPzouKnY9fHZcXC98XFwvKShbXFx3XFwtX10rKVxcJj8vKTtcbiAgICAgICAgaWYgKHl0TWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB7dHlwZTogJ3lvdXR1YmUnLCBpZDogeXRNYXRjaFsxXSwgcGFyYW1zOiBwYXJhbXN9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG5cdH0sXG5cblx0bG9hZFZpZGVvID0gZnVuY3Rpb24od3JhcHBlciwgc2VydmljZSkge1xuXHRcdHN3aXRjaCAoc2VydmljZS50eXBlKSB7XG5cdCAgICAgICAgY2FzZSAneW91dHViZSc6XG5cdCAgICAgICAgICAgIHJldHVybiBsb2FkWW91dHViZVZpZGVvKHdyYXBwZXIsIHNlcnZpY2UpO1xuXHQgICAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0fSxcblxuICAgIGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBcdHZhciBsaW5rID0gJCgnLnZpZGVvLXByZXZpZXdfX2J1dHRvbicpO1xuXG4gICAgXHRpZihsaW5rLmxlbmd0aCl7XG4gICAgXHRcdHZhciBzZXJ2aWNlID0gZ2V0U2VydmljZShsaW5rKTtcblxuXHQgICAgXHRpZiAoc2VydmljZSkge1xuXHRcdCAgICAgICAgdmFyIHBhcmVudCA9IGxpbmsucGFyZW50KCk7XG5cdFx0ICAgICAgICB2YXIgd3JhcHBlciA9IG51bGw7XG5cblx0XHQgICAgICAgIGlmIChwYXJlbnQuaGFzQ2xhc3MoJ3ZpZGVvLXByZXZpZXcnKSkge1xuXHRcdCAgICAgICAgICAgIHdyYXBwZXIgPSBwYXJlbnQ7XG5cdFx0ICAgICAgICB9IGVsc2Uge1xuXHRcdCAgICAgICAgICAgIHdyYXBwZXIgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygndmlkZW8tcHJldmlldycpLmluc2VydEJlZm9yZShsaW5rKTtcblx0XHQgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZChsaW5rKTtcblx0XHQgICAgICAgIH1cblxuXHRcdCAgICAgICAgbGluay5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0XHRcblx0XHQgICAgICAgIFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQgICAgICAgICAgICBsb2FkVmlkZW8od3JhcHBlciwgc2VydmljZSk7XG5cdFx0ICAgICAgICAgICAgXG5cdFx0ICAgICAgICB9KTtcblx0ICAgIFx0fVxuXHRcdH1cbiAgICB9O1xuZGVmZXIoaW5pdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy92aWRlby1iYW5uZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJyksXG4gICAgY3JlYXRlWW91dHViZVBsYXllciA9IHJlcXVpcmUoJy4veW91dHViZS1wbGF5ZXInKTtcblxudmFyIERFRkFVTFRfUEFSQU1TID0ge1xuICAgIGZyYW1lQm9yZGVyOiBcIjBcIixcbiAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgIHJlbDogMCxcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjbG9zZURpYWxvZygpIHtcblxufVxuXG5cbmZ1bmN0aW9uIGxvYWRZb3V0dWJlVmlkZW8od3JhcHBlciwgc2VydmljZXMpIHtcbiAgICB2YXIgaWQgPSBzZXJ2aWNlcy5pZDtcbiAgICB2YXIgcGFyYW1zID0gc2VydmljZXMucGFyYW1zO1xuICAgIHZhciBpZnJhbWVJZCA9ICd5dGV2LScraWQ7XG4gICAgdmFyIGxpbmsgPSBudWxsO1xuICAgIHZhciBoLHc7XG4gICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICBpZih3aW5kb3dXaWR0aCA+PSAxNTAwKXtcbiAgICAgICAgaD03MjA7XG4gICAgICAgIHc9MTI4MDtcbiAgICB9XG4gICAgZWxzZSBpZih3aW5kb3dXaWR0aCA8PSAxNDk5ICYmIHdpbmRvd1dpZHRoID49IDEwNTApe1xuICAgICAgICBoPTQ4MDtcbiAgICAgICAgdz04NTQ7XG4gICAgfVxuICAgIGVsc2UgaWYod2luZG93V2lkdGggPD0gMTA0OSAmJiB3aW5kb3dXaWR0aCA+PSA4MDApe1xuICAgICAgICBoPTM2MDtcbiAgICAgICAgdz02NDA7XG4gICAgfVxuICAgIGVsc2UgaWYod2luZG93V2lkdGggPD0gNzk5ICYmIHdpbmRvd1dpZHRoID49IDU4MCl7XG4gICAgICAgIGg9MjQwO1xuICAgICAgICB3PTQyNjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgaD0xNjA7XG4gICAgICAgIHc9MzAwO1xuICAgIH1cblxuICAgIGxpbmsgPSB3cmFwcGVyLmNoaWxkcmVuKCdhJyk7XG4gICAgdmFyIGZhbGxiYWNrUGFyYW1zID0ge1xuICAgICAgICB3aWR0aDogdyAsXG4gICAgICAgIGhlaWdodDogaFxuICAgIH07XG5cbiAgICB2YXIgcGxheWVyUGFyYW1zID0gJC5leHRlbmQoe30sXG4gICAgICAgIERFRkFVTFRfUEFSQU1TLFxuICAgICAgICBmYWxsYmFja1BhcmFtcyxcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICB7XG4gICAgICAgICAgICB2aWRlb0lkOiBpZCxcbiAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGxnID0gJCgnPGRpdj48L2Rpdj4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdkaWFsb2cnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3RhYmluZGV4JywgJzAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKCQoJ2JvZHknKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsYXlJY29uID0gJCgnPHNwYW4+PC9zcGFuPicpLmFkZENsYXNzKCd1aS1pY29uJykuYXBwZW5kVG8oZGxnKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgYm94ID0gJCgnPGRpdj48L2Rpdj4nKS5hZGRDbGFzcygnZGlhbG9nX19ib3gnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGRsZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHlvdXR1YmUgPSAkKCc8ZGl2Lz4nKS5hdHRyKCdpZCcsIGlmcmFtZUlkKS5hdHRyKGZhbGxiYWNrUGFyYW1zKS5hcHBlbmRUbyhib3gpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRsZy5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGxnLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRsZy5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQud2hpY2ggPT09IDI3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGxnLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoZGxnKTtcbiAgICAgICAgICAgICAgICAgICAgZGxnLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ3ZpZGVvLXByZXZpZXctLWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uUmVhZHk6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGxheWVyID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWZyYW1lID0gbGluay5zaWJsaW5ncygnaWZyYW1lJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygndmlkZW8tcHJldmlldy0tbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmFkZENsYXNzKCdtZWRpYS0teW91dHViZScpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheVZpZGVvKCk7XG5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgJCgnaHRtbCcpLmFkZENsYXNzKCduby1zY3JvbGwnKTtcbiAgICBjcmVhdGVZb3V0dWJlUGxheWVyKGlmcmFtZUlkLCBwbGF5ZXJQYXJhbXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWRZb3V0dWJlVmlkZW87XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy92aWRlby1wcmV2aWV3LXlvdXR1YmUuanNcbi8vIG1vZHVsZSBpZCA9IDE4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuXHRpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpO1xuXHR9XG5cblx0cmV0dXJuIHRvU3RyLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcblx0aWYgKCFvYmogfHwgdG9TdHIuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBoYXNPd25Db25zdHJ1Y3RvciA9IGhhc093bi5jYWxsKG9iaiwgJ2NvbnN0cnVjdG9yJyk7XG5cdHZhciBoYXNJc1Byb3RvdHlwZU9mID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgJiYgaGFzT3duLmNhbGwob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcblx0Ly8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuXHRpZiAob2JqLmNvbnN0cnVjdG9yICYmICFoYXNPd25Db25zdHJ1Y3RvciAmJiAhaGFzSXNQcm90b3R5cGVPZikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE93biBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhdGVkIGZpcnN0bHksIHNvIHRvIHNwZWVkIHVwLFxuXHQvLyBpZiBsYXN0IG9uZSBpcyBvd24sIHRoZW4gYWxsIHByb3BlcnRpZXMgYXJlIG93bi5cblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gb2JqKSB7IC8qKi8gfVxuXG5cdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lO1xuXHR2YXIgdGFyZ2V0ID0gYXJndW1lbnRzWzBdO1xuXHR2YXIgaSA9IDE7XG5cdHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHR2YXIgZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKHR5cGVvZiB0YXJnZXQgPT09ICdib29sZWFuJykge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuXHRcdC8vIHNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHRpID0gMjtcblx0fVxuXHRpZiAodGFyZ2V0ID09IG51bGwgfHwgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHRmb3IgKDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0c3JjID0gdGFyZ2V0W25hbWVdO1xuXHRcdFx0XHRjb3B5ID0gb3B0aW9uc1tuYW1lXTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICh0YXJnZXQgIT09IGNvcHkpIHtcblx0XHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0XHRpZiAoZGVlcCAmJiBjb3B5ICYmIChpc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IGlzQXJyYXkoY29weSkpKSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvcHlJc0FycmF5KSB7XG5cdFx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gZXh0ZW5kKGRlZXAsIGNsb25lLCBjb3B5KTtcblxuXHRcdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjb3B5ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gY29weTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2V4dGVuZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTg4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsInZhciBVTkxPQURFRCA9ICdVTkxPQURFRCc7XG52YXIgTE9BRElORyA9ICdMT0FESU5HJztcbnZhciBMT0FERUQgPSAnTE9BREVEJztcblxudmFyIGFwaVN0YXR1cyA9IFVOTE9BREVEO1xuXG52YXIgcGVuZGluZ1BsYXllcnMgPSBbXTtcblxudmFyIHBsYXllcnMgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyKGlkLCBkYXRhKSB7XG4gICAgaWYgKGFwaVN0YXR1cyA9PT0gTE9BREVEIHx8IGFwaVN0YXR1cyA9PT0gTE9BRElORykge1xuICAgICAgICBpbml0UGxheWVyKGlkLCBkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwZW5kaW5nUGxheWVycy5wdXNoKHsgaWQ6IGlkLCBkYXRhOiBkYXRhIH0pO1xuICAgICAgICBpZiAoYXBpU3RhdHVzID09PSBVTkxPQURFRCkge1xuICAgICAgICAgICAgbG9hZEFwaSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGluaXRQbGF5ZXIoaWQsIGRhdGEpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmV2ZW50cyAmJiBkYXRhLmV2ZW50cy5vbkluaXQpIHtcbiAgICAgICAgZGF0YS5ldmVudHMub25Jbml0KCk7XG4gICAgfVxuXG4gICAgdmFyIHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoaWQsIGRhdGEpO1xuICAgIHBsYXllcnNbaWRdID0ge3BsYXllciA6IHBsYXllciwgZGF0YSA6IGRhdGF9O1xufVxuXG5cbmZ1bmN0aW9uIGxvYWRBcGkoKSB7XG4gICAgYXBpU3RhdHVzID0gTE9BRElORztcbiAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBlbmRpbmdQbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24ocGVuZGluZ1BsYXllcnMpeyBpbml0UGxheWVyKHBlbmRpbmdQbGF5ZXJzLmlkLCBwZW5kaW5nUGxheWVycy5kYXRhKTt9KTtcbiAgICB9O1xuXG4gICAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHRhZy5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGlcIjtcbiAgICB2YXIgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgZmlyc3RTY3JpcHRUYWcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFnLCBmaXJzdFNjcmlwdFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUGxheWVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMveW91dHViZS1wbGF5ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIvKipcbiAqIGV4cGVjdHMgalF1ZXJ5IHRvIGJlIHByb3ZpZGVkIGJ5IENJVFlfUi5qc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy4kO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciAkID0gcmVxdWlyZSgnLi4vbGlicy9qcXVlcnknKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoZGVmZXJyZWRGdW5jdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIENJVFkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAkKGRlZmVycmVkRnVuY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUyA9IHtkZWZlcjogW119O1xuICAgICAgICAgICAgfSBlbHNlIGlmICghd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlcikge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIENJVFlfT1BUSU9OUy5kZWZlci5wdXNoKGRlZmVycmVkRnVuY3Rpb24pO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL3V0aWxzL2RlZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgNCA1IDcgOCA5Il0sInNvdXJjZVJvb3QiOiIifQ==