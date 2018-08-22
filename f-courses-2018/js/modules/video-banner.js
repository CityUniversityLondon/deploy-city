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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var defer = __webpack_require__(2),
	loadYoutubeVideo = __webpack_require__(63),

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
    };
defer(init);

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(64),
    createYoutubePlayer = __webpack_require__(65);

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

/***/ 64:
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

/***/ 65:
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDY2M2ZmZmYyMDdjMTc0NTU5ODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdmlkZW8tYmFubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL3ZpZGVvLXByZXZpZXcteW91dHViZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXh0ZW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RzL3lvdXR1YmUtcGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0EsMEI7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHVDQUF1QztBQUN2QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRzs7Ozs7OztBQ2pCRDtBQUNBOztBQUVBOztBQUVBLG9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQSxZOzs7Ozs7O0FDN0RBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQzs7Ozs7Ozs7QUN6R0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sWUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw2QkFBNkIscUJBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25COzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QscURBQXFEO0FBQzdHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEIiLCJmaWxlIjoibW9kdWxlcy92aWRlby1iYW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2Mik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDY2M2ZmZmYyMDdjMTc0NTU5ODgiLCIvKipcbiAqIGV4cGVjdHMgalF1ZXJ5IHRvIGJlIHByb3ZpZGVkIGJ5IENJVFlfUi5qc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy4kO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDgiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJCA9IHJlcXVpcmUoJy4uL2xpYnMvanF1ZXJ5Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRlZmVycmVkRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBDSVRZICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgJChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LkNJVFlfT1BUSU9OUykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMgPSB7ZGVmZXI6IFtdfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDSVRZX09QVElPTlMuZGVmZXIucHVzaChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy91dGlscy9kZWZlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNiA3IDgiLCJ2YXIgZGVmZXIgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmVyJyksXG5cdGxvYWRZb3V0dWJlVmlkZW8gPSByZXF1aXJlKCcuL3ZpZGVvLXByZXZpZXcteW91dHViZScpLFxuXG5cdGdldERhdGFBdHRyaWJ1dGVzID0gZnVuY3Rpb24obm9kZSkge1xuXG5cdFx0dmFyIGRhdGFBdHRyUmVnZXggPSAvXmRhdGEtKC4rKSQvOyAgICAgICAgICAgIFxuICAgICAgICB2YXIgYXR0cnMgPSB7fTtcbiAgICAgICAgJC5lYWNoKG5vZGVbMF0uYXR0cmlidXRlcywgZnVuY3Rpb24gKGluZGV4LCBhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGF0dHJpYnV0ZS5uYW1lLm1hdGNoKGRhdGFBdHRyUmVnZXgpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgYXR0cnNbbWF0Y2hbMV1dID0gYXR0cmlidXRlLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYXR0cnM7XG5cdH0sXG5cblx0Z2V0U2VydmljZSA9IGZ1bmN0aW9uKGxpbmspe1xuXHRcdHZhciBocmVmID0gbGluay5hdHRyKCdocmVmJykgfHwgJyc7XG4gICAgICAgIHZhciBwYXJhbXMgPSBnZXREYXRhQXR0cmlidXRlcyhsaW5rKTtcblxuICAgICAgICB2YXIgeXRNYXRjaCA9IGhyZWYubWF0Y2goLyg/Omh0dHBzPzpcXC9cXC8pPyg/Ond3d1xcLik/eW91dHVcXC4/YmUoPzpcXC5jb20pP1xcLz8uKig/OndhdGNofGVtYmVkKT8oPzouKnY9fHZcXC98XFwvKShbXFx3XFwtX10rKVxcJj8vKTtcbiAgICAgICAgaWYgKHl0TWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB7dHlwZTogJ3lvdXR1YmUnLCBpZDogeXRNYXRjaFsxXSwgcGFyYW1zOiBwYXJhbXN9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG5cdH0sXG5cblx0bG9hZFZpZGVvID0gZnVuY3Rpb24od3JhcHBlciwgc2VydmljZSkge1xuXHRcdHN3aXRjaCAoc2VydmljZS50eXBlKSB7XG5cdCAgICAgICAgY2FzZSAneW91dHViZSc6XG5cdCAgICAgICAgICAgIHJldHVybiBsb2FkWW91dHViZVZpZGVvKHdyYXBwZXIsIHNlcnZpY2UpO1xuXHQgICAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0fSxcblxuICAgIGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBcdHZhciBsaW5rID0gJCgnLnZpZGVvLXByZXZpZXdfX2J1dHRvbicpO1xuICAgIFx0dmFyIHNlcnZpY2UgPSBnZXRTZXJ2aWNlKGxpbmspO1xuICAgIFx0XG4gICAgXHRpZiAoc2VydmljZSkge1xuXHQgICAgICAgIHZhciBwYXJlbnQgPSBsaW5rLnBhcmVudCgpO1xuXHQgICAgICAgIHZhciB3cmFwcGVyID0gbnVsbDtcblxuXHQgICAgICAgIGlmIChwYXJlbnQuaGFzQ2xhc3MoJ3ZpZGVvLXByZXZpZXcnKSkge1xuXHQgICAgICAgICAgICB3cmFwcGVyID0gcGFyZW50O1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHdyYXBwZXIgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygndmlkZW8tcHJldmlldycpLmluc2VydEJlZm9yZShsaW5rKTtcblx0ICAgICAgICAgICAgd3JhcHBlci5hcHBlbmQobGluayk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgbGluay5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0XG5cdCAgICAgICAgXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICAgICAgICAgICBsb2FkVmlkZW8od3JhcHBlciwgc2VydmljZSk7XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgIH0pO1xuXHQgICAgfVxuICAgIH07XG5kZWZlcihpbml0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tb2RzL3ZpZGVvLWJhbm5lci5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZCcpLFxuICAgIGNyZWF0ZVlvdXR1YmVQbGF5ZXIgPSByZXF1aXJlKCcuL3lvdXR1YmUtcGxheWVyJyk7XG5cbnZhciBERUZBVUxUX1BBUkFNUyA9IHtcbiAgICBmcmFtZUJvcmRlcjogXCIwXCIsXG4gICAgcGxheWVyVmFyczoge1xuICAgICAgICByZWw6IDAsXG4gICAgfVxufTtcblxuZnVuY3Rpb24gY2xvc2VEaWFsb2coKSB7XG5cbn1cblxuXG5mdW5jdGlvbiBsb2FkWW91dHViZVZpZGVvKHdyYXBwZXIsIHNlcnZpY2VzKSB7XG4gICAgdmFyIGlkID0gc2VydmljZXMuaWQ7XG4gICAgdmFyIHBhcmFtcyA9IHNlcnZpY2VzLnBhcmFtcztcbiAgICB2YXIgaWZyYW1lSWQgPSAneXRldi0nK2lkO1xuICAgIHZhciBsaW5rID0gbnVsbDtcbiAgICB2YXIgaCx3O1xuICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgaWYod2luZG93V2lkdGggPj0gMTUwMCl7XG4gICAgICAgIGg9NzIwO1xuICAgICAgICB3PTEyODA7XG4gICAgfVxuICAgIGVsc2UgaWYod2luZG93V2lkdGggPD0gMTQ5OSAmJiB3aW5kb3dXaWR0aCA+PSAxMDUwKXtcbiAgICAgICAgaD00ODA7XG4gICAgICAgIHc9ODU0O1xuICAgIH1cbiAgICBlbHNlIGlmKHdpbmRvd1dpZHRoIDw9IDEwNDkgJiYgd2luZG93V2lkdGggPj0gODAwKXtcbiAgICAgICAgaD0zNjA7XG4gICAgICAgIHc9NjQwO1xuICAgIH1cbiAgICBlbHNlIGlmKHdpbmRvd1dpZHRoIDw9IDc5OSAmJiB3aW5kb3dXaWR0aCA+PSA1ODApe1xuICAgICAgICBoPTI0MDtcbiAgICAgICAgdz00MjY7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGg9MTYwO1xuICAgICAgICB3PTMwMDtcbiAgICB9XG5cbiAgICBsaW5rID0gd3JhcHBlci5jaGlsZHJlbignYScpO1xuICAgIHZhciBmYWxsYmFja1BhcmFtcyA9IHtcbiAgICAgICAgd2lkdGg6IHcgLFxuICAgICAgICBoZWlnaHQ6IGhcbiAgICB9O1xuXG4gICAgdmFyIHBsYXllclBhcmFtcyA9ICQuZXh0ZW5kKHt9LFxuICAgICAgICBERUZBVUxUX1BBUkFNUyxcbiAgICAgICAgZmFsbGJhY2tQYXJhbXMsXG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAge1xuICAgICAgICAgICAgdmlkZW9JZDogaWQsXG4gICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRsZyA9ICQoJzxkaXY+PC9kaXY+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZGlhbG9nJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0YWJpbmRleCcsICcwJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkKCdib2R5JykpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBwbGF5SWNvbiA9ICQoJzxzcGFuPjwvc3Bhbj4nKS5hZGRDbGFzcygndWktaWNvbicpLmFwcGVuZFRvKGRsZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGJveCA9ICQoJzxkaXY+PC9kaXY+JykuYWRkQ2xhc3MoJ2RpYWxvZ19fYm94JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhkbGcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciB5b3V0dWJlID0gJCgnPGRpdi8+JykuYXR0cignaWQnLCBpZnJhbWVJZCkuYXR0cihmYWxsYmFja1BhcmFtcykuYXBwZW5kVG8oYm94KTtcblxuICAgICAgICAgICAgICAgICAgICBkbGcub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRsZy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBkbGcub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LndoaWNoID09PSAyNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRsZy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKGRsZyk7XG4gICAgICAgICAgICAgICAgICAgIGRsZy5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmFkZENsYXNzKCd2aWRlby1wcmV2aWV3LS1sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblJlYWR5OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsYXllciA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlmcmFtZSA9IGxpbmsuc2libGluZ3MoJ2lmcmFtZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ3ZpZGVvLXByZXZpZXctLWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5hZGRDbGFzcygnbWVkaWEtLXlvdXR1YmUnKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBsYXlWaWRlbygpO1xuXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnbm8tc2Nyb2xsJyk7XG4gICAgY3JlYXRlWW91dHViZVBsYXllcihpZnJhbWVJZCwgcGxheWVyUGFyYW1zKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsb2FkWW91dHViZVZpZGVvO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvdmlkZW8tcHJldmlldy15b3V0dWJlLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuXHRpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpO1xuXHR9XG5cblx0cmV0dXJuIHRvU3RyLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcblx0aWYgKCFvYmogfHwgdG9TdHIuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBoYXNPd25Db25zdHJ1Y3RvciA9IGhhc093bi5jYWxsKG9iaiwgJ2NvbnN0cnVjdG9yJyk7XG5cdHZhciBoYXNJc1Byb3RvdHlwZU9mID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgJiYgaGFzT3duLmNhbGwob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcblx0Ly8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuXHRpZiAob2JqLmNvbnN0cnVjdG9yICYmICFoYXNPd25Db25zdHJ1Y3RvciAmJiAhaGFzSXNQcm90b3R5cGVPZikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE93biBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhdGVkIGZpcnN0bHksIHNvIHRvIHNwZWVkIHVwLFxuXHQvLyBpZiBsYXN0IG9uZSBpcyBvd24sIHRoZW4gYWxsIHByb3BlcnRpZXMgYXJlIG93bi5cblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gb2JqKSB7IC8qKi8gfVxuXG5cdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lO1xuXHR2YXIgdGFyZ2V0ID0gYXJndW1lbnRzWzBdO1xuXHR2YXIgaSA9IDE7XG5cdHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHR2YXIgZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKHR5cGVvZiB0YXJnZXQgPT09ICdib29sZWFuJykge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuXHRcdC8vIHNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHRpID0gMjtcblx0fVxuXHRpZiAodGFyZ2V0ID09IG51bGwgfHwgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHRmb3IgKDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0c3JjID0gdGFyZ2V0W25hbWVdO1xuXHRcdFx0XHRjb3B5ID0gb3B0aW9uc1tuYW1lXTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICh0YXJnZXQgIT09IGNvcHkpIHtcblx0XHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0XHRpZiAoZGVlcCAmJiBjb3B5ICYmIChpc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IGlzQXJyYXkoY29weSkpKSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvcHlJc0FycmF5KSB7XG5cdFx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gZXh0ZW5kKGRlZXAsIGNsb25lLCBjb3B5KTtcblxuXHRcdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjb3B5ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gY29weTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2V4dGVuZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIFVOTE9BREVEID0gJ1VOTE9BREVEJztcbnZhciBMT0FESU5HID0gJ0xPQURJTkcnO1xudmFyIExPQURFRCA9ICdMT0FERUQnO1xuXG52YXIgYXBpU3RhdHVzID0gVU5MT0FERUQ7XG5cbnZhciBwZW5kaW5nUGxheWVycyA9IFtdO1xuXG52YXIgcGxheWVycyA9IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXIoaWQsIGRhdGEpIHtcbiAgICBpZiAoYXBpU3RhdHVzID09PSBMT0FERUQgfHwgYXBpU3RhdHVzID09PSBMT0FESU5HKSB7XG4gICAgICAgIGluaXRQbGF5ZXIoaWQsIGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBlbmRpbmdQbGF5ZXJzLnB1c2goeyBpZDogaWQsIGRhdGE6IGRhdGEgfSk7XG4gICAgICAgIGlmIChhcGlTdGF0dXMgPT09IFVOTE9BREVEKSB7XG4gICAgICAgICAgICBsb2FkQXBpKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gaW5pdFBsYXllcihpZCwgZGF0YSkge1xuICAgIGlmIChkYXRhICYmIGRhdGEuZXZlbnRzICYmIGRhdGEuZXZlbnRzLm9uSW5pdCkge1xuICAgICAgICBkYXRhLmV2ZW50cy5vbkluaXQoKTtcbiAgICB9XG5cbiAgICB2YXIgcGxheWVyID0gbmV3IFlULlBsYXllcihpZCwgZGF0YSk7XG4gICAgcGxheWVyc1tpZF0gPSB7cGxheWVyIDogcGxheWVyLCBkYXRhIDogZGF0YX07XG59XG5cblxuZnVuY3Rpb24gbG9hZEFwaSgpIHtcbiAgICBhcGlTdGF0dXMgPSBMT0FESU5HO1xuICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGVuZGluZ1BsYXllcnMuZm9yRWFjaChmdW5jdGlvbihwZW5kaW5nUGxheWVycyl7IGluaXRQbGF5ZXIocGVuZGluZ1BsYXllcnMuaWQsIHBlbmRpbmdQbGF5ZXJzLmRhdGEpO30pO1xuICAgIH07XG5cbiAgICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgdGFnLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xuICAgIHZhciBmaXJzdFNjcmlwdFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVQbGF5ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy95b3V0dWJlLXBsYXllci5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sInNvdXJjZVJvb3QiOiIifQ==