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

	var defer = __webpack_require__(53),
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
	      }
	  
	     var accordion = function () {
	
	        var closeItems = function (item,title) {
	              item.find('.timeline__content').fadeOut('slow').removeClass('expanded').addClass('collapsed').find('.timeline__content__block').slideUp('slow');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTMwZDJjYzBhYmJhZGEzMTllNGM/NDZlZSoqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kcy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kcy9saWJzL2pxdWVyeS5qcz83ZTVmKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kcy91dGlscy9kZWZlci5qcz9jYzZlKioqIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUEsYTs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQSwyQjs7Ozs7OztBQ0hBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0Esd0NBQXVDO0FBQ3ZDLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxHIiwiZmlsZSI6Im1vZHVsZXMvdGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGEzMGQyY2MwYWJiYWRhMzE5ZTRjXG4gKiovIiwidmFyIGRlZmVyID0gcmVxdWlyZSgnLi91dGlscy9kZWZlcicpLFxuICAgIGluaXQgPSBmdW5jdGlvbigpe1xuICAgICAgdmFyIGNvbGxlY3Rpb24gPSAkKCcudGltZWxpbmVfX2NvbGxlY3Rpb24nKTtcbiAgICAgIHZhciBoZWFkZXIgPSAkKCcudGltZWxpbmVfX2NvbGxlY3Rpb25fX2hlYWRlcicpO1xuICAgICAgJCgnLnRpbWVsaW5lX19jb2xsZWN0aW9uX19oZWFkZXIgYScpLmNsaWNrKGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB2YXIgb3Blbkdyb3VwID0gY29sbGVjdGlvbi5maWx0ZXIoJy5vcGVuJyk7XG4gICAgICBpZiAob3Blbkdyb3VwKSB7XG4gICAgICAgIG9wZW5Hcm91cC5maW5kKCcudGltZWxpbmVfX2NvbnRlbnQnKS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJykuYWRkQ2xhc3MoJ2V4cGFuZGVkJykuZW5kKCkuZmluZCgnLnRpbWVsaW5lX19jb2xsZWN0aW9uX19oZWFkZXJfX2ljb24nKS5yZW1vdmVDbGFzcygnZmEtYW5nbGUtZG93bicpLmFkZENsYXNzKCdmYS1hbmdsZS11cCcpO1xuICAgICAgICBoZWFkZXIuZmluZCgnYScpLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCd0cnVlJykuYXR0cignYXJpYS1leHBhbmRlZCcsJ3RydWUnKTtcbiAgICAgIH1cbiAgXG4gICAgIHZhciBhY2NvcmRpb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIGNsb3NlSXRlbXMgPSBmdW5jdGlvbiAoaXRlbSx0aXRsZSkge1xuICAgICAgICAgICAgICBpdGVtLmZpbmQoJy50aW1lbGluZV9fY29udGVudCcpLmZhZGVPdXQoJ3Nsb3cnKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKS5hZGRDbGFzcygnY29sbGFwc2VkJykuZmluZCgnLnRpbWVsaW5lX19jb250ZW50X19ibG9jaycpLnNsaWRlVXAoJ3Nsb3cnKTtcbiAgICAgICAgICAgICAgaXRlbS5yZW1vdmVDbGFzcygnb3BlbicpLmFkZENsYXNzKCdjbG9zZWQnKS5maW5kKCcudGltZWxpbmVfX2NvbnRlbnQnKS5zbGlkZVVwKFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgdGl0bGUuZmluZCgnYScpLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCdmYWxzZScpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCdmYWxzZScpO1xuICAgICAgICAgICAgICB0aXRsZS5maW5kKCcudGltZWxpbmVfX2NvbGxlY3Rpb25fX2hlYWRlcl9faWNvbicpLnJlbW92ZUNsYXNzKCdmYS1hbmdsZS11cCcpLmFkZENsYXNzKCdmYS1hbmdsZS1kb3duJyk7XG4gICAgICAgICAgICAgIGl0ZW0uZmluZCgnLnRpbWVsaW5lX192ZXJpY2FsLWxpbmUtc3RvcCcpLmZhZGVJbignc2xvdycpOyAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3Blbkl0ZW1zID0gZnVuY3Rpb24gKGl0ZW0sdGl0bGUpIHtcbiAgICAgICAgICAgICAgaXRlbS5maW5kKCcudGltZWxpbmVfX2NvbnRlbnQnKS5mYWRlSW4oJ3Nsb3cnKS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJykuYWRkQ2xhc3MoJ2V4cGFuZGVkJykuZmluZCgnLnRpbWVsaW5lX19jb250ZW50X19ibG9jaycpLnNsaWRlRG93bignc2xvdycpO1xuICAgICAgICAgICAgICBpdGVtLnJlbW92ZUNsYXNzKCdjbG9zZWQnKS5hZGRDbGFzcygnb3BlbicpLmZpbmQoJy50aW1lbGluZV9fY29udGVudCcpLnNsaWRlRG93bihcInNsb3dcIik7XG4gICAgICAgICAgICAgIHRpdGxlLmZpbmQoJ2EnKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywndHJ1ZScpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCd0cnVlJyk7XG4gICAgICAgICAgICAgIHRpdGxlLmZpbmQoJy50aW1lbGluZV9fY29sbGVjdGlvbl9faGVhZGVyX19pY29uJykucmVtb3ZlQ2xhc3MoJ2ZhLWFuZ2xlLWRvd24nKS5hZGRDbGFzcygnZmEtYW5nbGUtdXAnKTtcbiAgICAgICAgICAgICAgaXRlbS5maW5kKCcudGltZWxpbmVfX3ZlcmljYWwtbGluZS1zdG9wJykuZmFkZUluKCdzbG93Jyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICQoJy50aW1lbGluZV9fY29sbGVjdGlvbl9faGVhZGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciB0aXRsZSA9ICQodGhpcyksXG4gICAgICAgICAgICAgIGl0ZW0gPSB0aXRsZS5wYXJlbnQoKSxcbiAgICAgICAgICAgICAgaXNPcGVuID0gaXRlbS5oYXNDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgICAgICBjbG9zZUl0ZW1zKGl0ZW0sdGl0bGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9wZW5JdGVtcyhpdGVtLHRpdGxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgIH07XG5cbiAgICBhY2NvcmRpb24oKTtcblxuICB9O1xuXG5kZWZlcihpbml0KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2pzL21vZHMvdGltZWxpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDdcbiAqKi8iLCIvKipcbiAqIGV4cGVjdHMgalF1ZXJ5IHRvIGJlIHByb3ZpZGVkIGJ5IENJVFlfUi5qc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy4kO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvanMvbW9kcy9saWJzL2pxdWVyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDUgNiA3IDhcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJCA9IHJlcXVpcmUoJy4uL2xpYnMvanF1ZXJ5Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRlZmVycmVkRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBDSVRZICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgJChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LkNJVFlfT1BUSU9OUykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMgPSB7ZGVmZXI6IFtdfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDSVRZX09QVElPTlMuZGVmZXIucHVzaChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9qcy9tb2RzL3V0aWxzL2RlZmVyLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNSA3IDhcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9