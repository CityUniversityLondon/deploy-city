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

	var defer = __webpack_require__(52),
	    init = function(){
	      var collection = $('.timeline__collection');
	      var header = $('.timeline__collection__header');
	      $('.timeline__collection__header a').click(function( event ) {
	        event.preventDefault();
	      });
	      
	      var openGroup = collection.filter('.open');
	      if (openGroup) {
	        openGroup.find('.timeline__content').removeClass('collapsed').addClass('expanded').end().find('.timeline__collection__header__icon').removeClass('fa-angle-down').addClass('fa-angle-up');
	        header.find('a').attr('aria-selected','true').attr('aria-expanded','true');
	      };
	  
	      accordion = function () {
	
	        var closeItems = function (item,title) {
	              item.find('.timeline__content').fadeOut('slow').removeClass('expanded').addClass('collapsed').find('.timeline__content__block').slideUp('slow');;
	              item.removeClass('open').addClass('closed').find('.timeline__content').slideUp("slow");
	              title.find('a').attr('aria-selected','false').attr('aria-expanded','false');
	              title.find('.timeline__collection__header__icon').removeClass('fa-angle-up').addClass('fa-angle-down');
	              item.find('.timeline__verical-line-stop').fadeIn('slow');  
	            },
	            openItems = function (item,title) {
	              item.find('.timeline__content').fadeIn('slow').removeClass('collapsed').addClass('expanded').find('.timeline__content__block').slideDown('slow');
	              item.removeClass('closed').addClass('open').find('.timeline__content').slideDown("slow");
	              title.find('a').attr('aria-selected','true').attr('aria-expanded','true');
	              title.find('.timeline__collection__header__icon').removeClass('fa-angle-down').addClass('fa-angle-up');
	              item.find('.timeline__verical-line-stop').fadeIn('slow');
	            };
	
	        $('.timeline__collection__header').click(function () {
	          var title = $(this),
	              item = title.parent(),
	              isOpen = item.hasClass('open');
	
	          if (isOpen) {
	              closeItems(item,title);
	          } else {
	              openItems(item,title);
	          }
	        });
	                
	    };
	
	    accordion();
	
	  };
	
	defer(init);

/***/ },

/***/ 49:
/***/ function(module, exports) {

	/**
	 * expects jQuery to be provided by CITY_R.js
	 */
	module.exports = window.$;

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function () {
	    'use strict';
	
	    var $ = __webpack_require__(49);
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTE4YWEyYWUzOGY5NDY0NjQwNzQ/YjAyZCoqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kcy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kcy9saWJzL2pxdWVyeS5qcz83ZTVmKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kcy91dGlscy9kZWZlci5qcz9jYzZlKioqIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUEsYTs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQSwyQjs7Ozs7OztBQ0hBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0Esd0NBQXVDO0FBQ3ZDLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxHIiwiZmlsZSI6Im1vZHVsZXMvdGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDExOGFhMmFlMzhmOTQ2NDY0MDc0XG4gKiovIiwidmFyIGRlZmVyID0gcmVxdWlyZSgnLi91dGlscy9kZWZlcicpLFxuICAgIGluaXQgPSBmdW5jdGlvbigpe1xuICAgICAgdmFyIGNvbGxlY3Rpb24gPSAkKCcudGltZWxpbmVfX2NvbGxlY3Rpb24nKTtcbiAgICAgIHZhciBoZWFkZXIgPSAkKCcudGltZWxpbmVfX2NvbGxlY3Rpb25fX2hlYWRlcicpO1xuICAgICAgJCgnLnRpbWVsaW5lX19jb2xsZWN0aW9uX19oZWFkZXIgYScpLmNsaWNrKGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB2YXIgb3Blbkdyb3VwID0gY29sbGVjdGlvbi5maWx0ZXIoJy5vcGVuJyk7XG4gICAgICBpZiAob3Blbkdyb3VwKSB7XG4gICAgICAgIG9wZW5Hcm91cC5maW5kKCcudGltZWxpbmVfX2NvbnRlbnQnKS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJykuYWRkQ2xhc3MoJ2V4cGFuZGVkJykuZW5kKCkuZmluZCgnLnRpbWVsaW5lX19jb2xsZWN0aW9uX19oZWFkZXJfX2ljb24nKS5yZW1vdmVDbGFzcygnZmEtYW5nbGUtZG93bicpLmFkZENsYXNzKCdmYS1hbmdsZS11cCcpO1xuICAgICAgICBoZWFkZXIuZmluZCgnYScpLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCd0cnVlJykuYXR0cignYXJpYS1leHBhbmRlZCcsJ3RydWUnKTtcbiAgICAgIH07XG4gIFxuICAgICAgYWNjb3JkaW9uID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBjbG9zZUl0ZW1zID0gZnVuY3Rpb24gKGl0ZW0sdGl0bGUpIHtcbiAgICAgICAgICAgICAgaXRlbS5maW5kKCcudGltZWxpbmVfX2NvbnRlbnQnKS5mYWRlT3V0KCdzbG93JykucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJykuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpLmZpbmQoJy50aW1lbGluZV9fY29udGVudF9fYmxvY2snKS5zbGlkZVVwKCdzbG93Jyk7O1xuICAgICAgICAgICAgICBpdGVtLnJlbW92ZUNsYXNzKCdvcGVuJykuYWRkQ2xhc3MoJ2Nsb3NlZCcpLmZpbmQoJy50aW1lbGluZV9fY29udGVudCcpLnNsaWRlVXAoXCJzbG93XCIpO1xuICAgICAgICAgICAgICB0aXRsZS5maW5kKCdhJykuYXR0cignYXJpYS1zZWxlY3RlZCcsJ2ZhbHNlJykuYXR0cignYXJpYS1leHBhbmRlZCcsJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgIHRpdGxlLmZpbmQoJy50aW1lbGluZV9fY29sbGVjdGlvbl9faGVhZGVyX19pY29uJykucmVtb3ZlQ2xhc3MoJ2ZhLWFuZ2xlLXVwJykuYWRkQ2xhc3MoJ2ZhLWFuZ2xlLWRvd24nKTtcbiAgICAgICAgICAgICAgaXRlbS5maW5kKCcudGltZWxpbmVfX3ZlcmljYWwtbGluZS1zdG9wJykuZmFkZUluKCdzbG93Jyk7ICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcGVuSXRlbXMgPSBmdW5jdGlvbiAoaXRlbSx0aXRsZSkge1xuICAgICAgICAgICAgICBpdGVtLmZpbmQoJy50aW1lbGluZV9fY29udGVudCcpLmZhZGVJbignc2xvdycpLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKS5hZGRDbGFzcygnZXhwYW5kZWQnKS5maW5kKCcudGltZWxpbmVfX2NvbnRlbnRfX2Jsb2NrJykuc2xpZGVEb3duKCdzbG93Jyk7XG4gICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlQ2xhc3MoJ2Nsb3NlZCcpLmFkZENsYXNzKCdvcGVuJykuZmluZCgnLnRpbWVsaW5lX19jb250ZW50Jykuc2xpZGVEb3duKFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgdGl0bGUuZmluZCgnYScpLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCd0cnVlJykuYXR0cignYXJpYS1leHBhbmRlZCcsJ3RydWUnKTtcbiAgICAgICAgICAgICAgdGl0bGUuZmluZCgnLnRpbWVsaW5lX19jb2xsZWN0aW9uX19oZWFkZXJfX2ljb24nKS5yZW1vdmVDbGFzcygnZmEtYW5nbGUtZG93bicpLmFkZENsYXNzKCdmYS1hbmdsZS11cCcpO1xuICAgICAgICAgICAgICBpdGVtLmZpbmQoJy50aW1lbGluZV9fdmVyaWNhbC1saW5lLXN0b3AnKS5mYWRlSW4oJ3Nsb3cnKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgJCgnLnRpbWVsaW5lX19jb2xsZWN0aW9uX19oZWFkZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHRpdGxlID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgaXRlbSA9IHRpdGxlLnBhcmVudCgpLFxuICAgICAgICAgICAgICBpc09wZW4gPSBpdGVtLmhhc0NsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgICAgICAgIGNsb3NlSXRlbXMoaXRlbSx0aXRsZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb3Blbkl0ZW1zKGl0ZW0sdGl0bGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgfTtcblxuICAgIGFjY29yZGlvbigpO1xuXG4gIH07XG5cbmRlZmVyKGluaXQpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvanMvbW9kcy90aW1lbGluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gN1xuICoqLyIsIi8qKlxuICogZXhwZWN0cyBqUXVlcnkgdG8gYmUgcHJvdmlkZWQgYnkgQ0lUWV9SLmpzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LiQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9qcy9tb2RzL2xpYnMvanF1ZXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNSA2IDcgOFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciAkID0gcmVxdWlyZSgnLi4vbGlicy9qcXVlcnknKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoZGVmZXJyZWRGdW5jdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIENJVFkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAkKGRlZmVycmVkRnVuY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUyA9IHtkZWZlcjogW119O1xuICAgICAgICAgICAgfSBlbHNlIGlmICghd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlcikge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIENJVFlfT1BUSU9OUy5kZWZlci5wdXNoKGRlZmVycmVkRnVuY3Rpb24pO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA1IDcgOFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=