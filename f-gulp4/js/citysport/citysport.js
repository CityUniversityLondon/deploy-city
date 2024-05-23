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
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ({

/***/ 55:
/***/ (function(module, exports) {

!function () {
    'use strict';
    var mobileNav = function () {
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
            console.log('gulp 4');
            mobileNav();
            accordion();
            logFallBack();
            imageCredits();
        };

    $(init);
}();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGIzNmI2NmEzZTY1MjM3MzBiNmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NpdHlzcG9ydC9jaXR5c3BvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDIiwiZmlsZSI6ImNpdHlzcG9ydC9jaXR5c3BvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1NSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGIzNmI2NmEzZTY1MjM3MzBiNmEiLCIhZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgbW9iaWxlTmF2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQoJy5tb2JpbGUtbmF2Jyk7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCcubW9iaWxlLW5hdi10b2dnbGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFjY29yZGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhY2NvcmRpb25zID0gJCgnLmFjY29yZGlvbicpLFxuICAgICAgICAgICAgICAgIGNsb3NlSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZmluZCgnLmFjY29yZGlvbi1jb250ZW50Jykuc2xpZGVVcChcImZhc3RcIik7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZmluZCgnLmZhLW1pbnVzJykucmVtb3ZlQ2xhc3MoJ2ZhLW1pbnVzJykuYWRkQ2xhc3MoJ2ZhLXBsdXMnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9wZW5JdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmZpbmQoJy5hY2NvcmRpb24tY29udGVudCcpLnNsaWRlRG93bihcImZhc3RcIik7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZmluZCgnLmZhLXBsdXMnKS5yZW1vdmVDbGFzcygnZmEtcGx1cycpLmFkZENsYXNzKCdmYS1taW51cycpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGFjY29yZGlvbnMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjY29yZGlvbiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICBhY2NvcmRpb24uZmluZCgnLmFjY29yZGlvbi10aXRsZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB0aXRsZS5jbG9zZXN0KCcuYWNjb3JkaW9uLWl0ZW0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9IGl0ZW0uaGFzQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUl0ZW0oaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUl0ZW0oYWNjb3JkaW9uLmZpbmQoJy5hY2NvcmRpb24taXRlbS5vcGVuJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbkl0ZW0oaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxvZ0ZhbGxCYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFNb2Rlcm5penIuc3ZnKSB7XG4gICAgICAgICAgICAgICAgJChcIi5mb290ZXItbG9nbyBpbWdcIikuYXR0cihcInNyY1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmF0dHIoXCJzcmNcIikucmVwbGFjZShcIi5zdmdcIiwgXCIucG5nXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGltYWdlQ3JlZGl0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkY3JlZGl0cyA9ICQoXCIuaW1hZ2UtY3JlZGl0XCIpLFxuICAgICAgICAgICAgICAgICRjcmVkaXRJdGVtcyA9ICQoXCIuY3JlZGl0cy1pdGVtc1wiKSxcbiAgICAgICAgICAgICAgICAkc2NwQ3JlZGl0c1RpdGxlID0gJChcIi5jcmVkaXRzLXRpdGxlXCIpLFxuICAgICAgICAgICAgICAgIGNyZWRpdEJ1dHRvbkNsYXNzID0gXCIuaW1hZ2UtY3JlZGl0X19idXR0b25cIixcblxuICAgICAgICAgICAgICAgIHRvZ2dsZUltYWdlQ3JlZGl0ID0gZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBub2RlLmF0dHIoXCJhcmlhLXByZXNzZWRcIikgPT09IFwidHJ1ZVwiID8gXCJmYWxzZVwiIDogXCJ0cnVlXCI7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYXR0cihcImFyaWEtcHJlc3NlZFwiLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50KCkuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICRjcmVkaXRzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZChjcmVkaXRCdXR0b25DbGFzcykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSW1hZ2VDcmVkaXQoJCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJHNjcENyZWRpdHNUaXRsZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiY3JlZGl0cy10aXRsZS0tYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIC5uZXh0KFwiLmNyZWRpdHMtaXRlbXNcIikudG9nZ2xlQ2xhc3MoXCJzci1vbmx5XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdndWxwIDQnKTtcbiAgICAgICAgICAgIG1vYmlsZU5hdigpO1xuICAgICAgICAgICAgYWNjb3JkaW9uKCk7XG4gICAgICAgICAgICBsb2dGYWxsQmFjaygpO1xuICAgICAgICAgICAgaW1hZ2VDcmVkaXRzKCk7XG4gICAgICAgIH07XG5cbiAgICAkKGluaXQpO1xufSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY2l0eXNwb3J0L2NpdHlzcG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiJdLCJzb3VyY2VSb290IjoiIn0=