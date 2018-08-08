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
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
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

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var defer = __webpack_require__(2),
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDMzZmNiZWZiMDI2NjU3OTUyZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQSwwQjs7Ozs7OztBQ0hBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUNBQXVDO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7O0FDakJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQSxZIiwiZmlsZSI6Im1vZHVsZXMvdGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2MSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDMzZmNiZWZiMDI2NjU3OTUyZDUiLCIvKipcbiAqIGV4cGVjdHMgalF1ZXJ5IHRvIGJlIHByb3ZpZGVkIGJ5IENJVFlfUi5qc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy4kO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICQgPSByZXF1aXJlKCcuLi9saWJzL2pxdWVyeScpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkZWZlcnJlZEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgQ0lUWSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICQoZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TID0ge2RlZmVyOiBbXX07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkNJVFlfT1BUSU9OUy5kZWZlciA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ0lUWV9PUFRJT05TLmRlZmVyLnB1c2goZGVmZXJyZWRGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDYgNyIsInZhciBkZWZlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmZXInKSxcbiAgICBpbml0ID0gZnVuY3Rpb24oKXtcbiAgICAgIHZhciBjb2xsZWN0aW9uID0gJCgnLnRpbWVsaW5lX19jb2xsZWN0aW9uJyk7XG4gICAgICB2YXIgaGVhZGVyID0gJCgnLnRpbWVsaW5lX19jb2xsZWN0aW9uX19oZWFkZXInKTtcbiAgICAgICQoJy50aW1lbGluZV9fY29sbGVjdGlvbl9faGVhZGVyIGEnKS5jbGljayhmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdmFyIG9wZW5Hcm91cCA9IGNvbGxlY3Rpb24uZmlsdGVyKCcub3BlbicpO1xuICAgICAgaWYgKG9wZW5Hcm91cCkge1xuICAgICAgICBvcGVuR3JvdXAuZmluZCgnLnRpbWVsaW5lX19jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpLmFkZENsYXNzKCdleHBhbmRlZCcpLmVuZCgpLmZpbmQoJy50aW1lbGluZV9fY29sbGVjdGlvbl9faGVhZGVyX19pY29uJykucmVtb3ZlQ2xhc3MoJ2ZhLWFuZ2xlLWRvd24nKS5hZGRDbGFzcygnZmEtYW5nbGUtdXAnKTtcbiAgICAgICAgaGVhZGVyLmZpbmQoJ2EnKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywndHJ1ZScpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCd0cnVlJyk7XG4gICAgICB9XG4gIFxuICAgICB2YXIgYWNjb3JkaW9uID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBjbG9zZUl0ZW1zID0gZnVuY3Rpb24gKGl0ZW0sdGl0bGUpIHtcbiAgICAgICAgICAgICAgaXRlbS5maW5kKCcudGltZWxpbmVfX2NvbnRlbnQnKS5mYWRlT3V0KCdzbG93JykucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJykuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpLmZpbmQoJy50aW1lbGluZV9fY29udGVudF9fYmxvY2snKS5zbGlkZVVwKCdzbG93Jyk7XG4gICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlQ2xhc3MoJ29wZW4nKS5hZGRDbGFzcygnY2xvc2VkJykuZmluZCgnLnRpbWVsaW5lX19jb250ZW50Jykuc2xpZGVVcChcInNsb3dcIik7XG4gICAgICAgICAgICAgIHRpdGxlLmZpbmQoJ2EnKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywnZmFsc2UnKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywnZmFsc2UnKTtcbiAgICAgICAgICAgICAgdGl0bGUuZmluZCgnLnRpbWVsaW5lX19jb2xsZWN0aW9uX19oZWFkZXJfX2ljb24nKS5yZW1vdmVDbGFzcygnZmEtYW5nbGUtdXAnKS5hZGRDbGFzcygnZmEtYW5nbGUtZG93bicpO1xuICAgICAgICAgICAgICBpdGVtLmZpbmQoJy50aW1lbGluZV9fdmVyaWNhbC1saW5lLXN0b3AnKS5mYWRlSW4oJ3Nsb3cnKTsgIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wZW5JdGVtcyA9IGZ1bmN0aW9uIChpdGVtLHRpdGxlKSB7XG4gICAgICAgICAgICAgIGl0ZW0uZmluZCgnLnRpbWVsaW5lX19jb250ZW50JykuZmFkZUluKCdzbG93JykucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpLmFkZENsYXNzKCdleHBhbmRlZCcpLmZpbmQoJy50aW1lbGluZV9fY29udGVudF9fYmxvY2snKS5zbGlkZURvd24oJ3Nsb3cnKTtcbiAgICAgICAgICAgICAgaXRlbS5yZW1vdmVDbGFzcygnY2xvc2VkJykuYWRkQ2xhc3MoJ29wZW4nKS5maW5kKCcudGltZWxpbmVfX2NvbnRlbnQnKS5zbGlkZURvd24oXCJzbG93XCIpO1xuICAgICAgICAgICAgICB0aXRsZS5maW5kKCdhJykuYXR0cignYXJpYS1zZWxlY3RlZCcsJ3RydWUnKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywndHJ1ZScpO1xuICAgICAgICAgICAgICB0aXRsZS5maW5kKCcudGltZWxpbmVfX2NvbGxlY3Rpb25fX2hlYWRlcl9faWNvbicpLnJlbW92ZUNsYXNzKCdmYS1hbmdsZS1kb3duJykuYWRkQ2xhc3MoJ2ZhLWFuZ2xlLXVwJyk7XG4gICAgICAgICAgICAgIGl0ZW0uZmluZCgnLnRpbWVsaW5lX192ZXJpY2FsLWxpbmUtc3RvcCcpLmZhZGVJbignc2xvdycpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAkKCcudGltZWxpbmVfX2NvbGxlY3Rpb25fX2hlYWRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgdGl0bGUgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICBpdGVtID0gdGl0bGUucGFyZW50KCksXG4gICAgICAgICAgICAgIGlzT3BlbiA9IGl0ZW0uaGFzQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgICAgICAgY2xvc2VJdGVtcyhpdGVtLHRpdGxlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvcGVuSXRlbXMoaXRlbSx0aXRsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICB9O1xuXG4gICAgYWNjb3JkaW9uKCk7XG5cbiAgfTtcblxuZGVmZXIoaW5pdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbW9kcy90aW1lbGluZS5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==