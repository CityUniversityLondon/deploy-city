/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(50),
	    defer = __webpack_require__(53),
	
	    screenWidth = -1,
	    inMd = true,
	    slider = null,
	    $w = $(window),
	
	    updateNewsSlider = function () {
	        var $homeNews = $('.home-news'),
	            width = Math.round($w.width());
	
	        if (width !== screenWidth) {
	            screenWidth = width;
	
	            var newInMd = screenWidth >= 850;
	            if (newInMd !== inMd) {
	                inMd = newInMd;
	
	                if (inMd) {
	                    slider.destroySlider();
	                    setTimeout(function () {
	                        $homeNews.addClass('row').attr('style', '').children().addClass('col-xs-24 col-md-8').css('width', '');
	                    }, 0);
	                    slider = null;
	                } else {
	                    slider = $homeNews.removeClass('row').children().removeClass('col-xs-24 col-md-8').end().bxSlider({
	                        autoHover: true,
	                        touchEnabled: true,
	                        preventDefaultSwipeX: true,
	                        preventDefaultSwipeY: false,
	                        adaptiveHeight: true,
	                        pager: false,
	                        autoControls: false,
	                        controls: true,
	                        prevText: '<span class="bg fa fa-circle" aria-hidden="true"></span><span class="ic fa fa-chevron-left" aria-label="previous slide"></span>',
	                        nextText: '<span class="bg fa fa-circle" aria-hidden="true"></span><span class="ic fa fa-chevron-right" aria-label="next slide"></span>'
	                    });
	                }
	            }
	        }
	    },
	    init = function () {
	        $('.home-course-finder .dropdown-select').cityDropdown();
	        $('.home-news-events .submenu .dropdown-select').cityDropdown({isMenu: true});
	        $('.home-media-ribbon .embed-container').videoPreview({controls: 1, showInfo: 0});
	
	        $w.resize(updateNewsSlider);
	        updateNewsSlider();
	    }; // end variables
	
	
	defer(init);


/***/ },

/***/ 50:
/***/ function(module, exports) {

	/**
	 * expects jQuery to be provided by CITY_R.js
	 */
	module.exports = window.$;

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function () {
	    'use strict';
	
	    var $ = __webpack_require__(50);
	
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

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjEwNTlhM2Q4MGIwYzk4ZjdiYjY/MGJlNCoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kcy9saWJzL2pxdWVyeS5qcz83ZTVmKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanM/Y2M2ZSoqIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0Esd0VBQXVFLGFBQWE7QUFDcEYsZ0VBQStELHlCQUF5Qjs7QUFFeEY7QUFDQTtBQUNBLE9BQU07OztBQUdOOzs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQSwyQjs7Ozs7OztBQ0hBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0Esd0NBQXVDO0FBQ3ZDLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxHIiwiZmlsZSI6Im1vZHVsZXMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMjEwNTlhM2Q4MGIwYzk4ZjdiYjZcbiAqKi8iLCJ2YXIgJCA9IHJlcXVpcmUoJy4vbGlicy9qcXVlcnknKSxcbiAgICBkZWZlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmZXInKSxcblxuICAgIHNjcmVlbldpZHRoID0gLTEsXG4gICAgaW5NZCA9IHRydWUsXG4gICAgc2xpZGVyID0gbnVsbCxcbiAgICAkdyA9ICQod2luZG93KSxcblxuICAgIHVwZGF0ZU5ld3NTbGlkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkaG9tZU5ld3MgPSAkKCcuaG9tZS1uZXdzJyksXG4gICAgICAgICAgICB3aWR0aCA9IE1hdGgucm91bmQoJHcud2lkdGgoKSk7XG5cbiAgICAgICAgaWYgKHdpZHRoICE9PSBzY3JlZW5XaWR0aCkge1xuICAgICAgICAgICAgc2NyZWVuV2lkdGggPSB3aWR0aDtcblxuICAgICAgICAgICAgdmFyIG5ld0luTWQgPSBzY3JlZW5XaWR0aCA+PSA4NTA7XG4gICAgICAgICAgICBpZiAobmV3SW5NZCAhPT0gaW5NZCkge1xuICAgICAgICAgICAgICAgIGluTWQgPSBuZXdJbk1kO1xuXG4gICAgICAgICAgICAgICAgaWYgKGluTWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLmRlc3Ryb3lTbGlkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaG9tZU5ld3MuYWRkQ2xhc3MoJ3JvdycpLmF0dHIoJ3N0eWxlJywgJycpLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ2NvbC14cy0yNCBjb2wtbWQtOCcpLmNzcygnd2lkdGgnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlciA9ICRob21lTmV3cy5yZW1vdmVDbGFzcygncm93JykuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnY29sLXhzLTI0IGNvbC1tZC04JykuZW5kKCkuYnhTbGlkZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0hvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHRTd2lwZVg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdFN3aXBlWTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db250cm9sczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZUZXh0OiAnPHNwYW4gY2xhc3M9XCJiZyBmYSBmYS1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJpYyBmYSBmYS1jaGV2cm9uLWxlZnRcIiBhcmlhLWxhYmVsPVwicHJldmlvdXMgc2xpZGVcIj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUZXh0OiAnPHNwYW4gY2xhc3M9XCJiZyBmYSBmYS1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJpYyBmYSBmYS1jaGV2cm9uLXJpZ2h0XCIgYXJpYS1sYWJlbD1cIm5leHQgc2xpZGVcIj48L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5ob21lLWNvdXJzZS1maW5kZXIgLmRyb3Bkb3duLXNlbGVjdCcpLmNpdHlEcm9wZG93bigpO1xuICAgICAgICAkKCcuaG9tZS1uZXdzLWV2ZW50cyAuc3VibWVudSAuZHJvcGRvd24tc2VsZWN0JykuY2l0eURyb3Bkb3duKHtpc01lbnU6IHRydWV9KTtcbiAgICAgICAgJCgnLmhvbWUtbWVkaWEtcmliYm9uIC5lbWJlZC1jb250YWluZXInKS52aWRlb1ByZXZpZXcoe2NvbnRyb2xzOiAxLCBzaG93SW5mbzogMH0pO1xuXG4gICAgICAgICR3LnJlc2l6ZSh1cGRhdGVOZXdzU2xpZGVyKTtcbiAgICAgICAgdXBkYXRlTmV3c1NsaWRlcigpO1xuICAgIH07IC8vIGVuZCB2YXJpYWJsZXNcblxuXG5kZWZlcihpbml0KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvanMvbW9kcy9ob21lLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSA1XG4gKiovIiwiLyoqXG4gKiBleHBlY3RzIGpRdWVyeSB0byBiZSBwcm92aWRlZCBieSBDSVRZX1IuanNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuJDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA1IDYgNyA4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICQgPSByZXF1aXJlKCcuLi9saWJzL2pxdWVyeScpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkZWZlcnJlZEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgQ0lUWSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICQoZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TID0ge2RlZmVyOiBbXX07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlciA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ0lUWV9PUFRJT05TLmRlZmVyLnB1c2goZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvanMvbW9kcy91dGlscy9kZWZlci5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDUgNyA4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==