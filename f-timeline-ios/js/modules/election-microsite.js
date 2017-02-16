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

	'use strict';
	
	var $ = __webpack_require__(49),
	    defer = __webpack_require__(52),
	
	    initExpertsIE7 = function () {
	        var section = $('.election-microsite__experts--wrapper'),
	            experts = $(':not([class*="iwd-listing"]) > .election-microsite__academics__item'),
	            info = $('<div class="election-microsite__academics__item__info--ie7"></div>').appendTo(section),
	
	            openInfo = function (expert) {
	                var content = expert.find('.info-content').clone();
	
	                info.html('').append(content).addClass('open');
	            },
	
	            close = function () {
	                info.removeClass('open');
	            },
	
	
	            select = function (expert) {
	                var makeSelected = expert && !expert.hasClass('selected');
	                close();
	                if (makeSelected) {
	                    openInfo(expert);
	                }
	            };
	
	        experts.click(function (evt) {
	            evt.preventDefault();
	            select($(this));
	        });
	    },
	
	    initExperts = function () {
	
	        var experts = $(':not([class*="iwd-listing"]) > .election-microsite__academics__item'),
	            infoWrapper = $('.election-microsite__experts--info-wrapper'),
	            infoImgContainer = $('.election-microsite__experts--info__img'),
	            infoTxtContainer = $('.election-microsite__experts--info__txt'),
	
	
	            close = function () {
	                experts.removeClass('selected');
	                infoWrapper.removeClass('election-microsite__experts--info-wrapper--open');
	            },
	            select = function (expert) {
	                if (expert.hasClass('selected')) {
	                    close();
	                } else {
	                    experts.removeClass('selected');
	                    expert.addClass('selected');
	                    infoImgContainer.empty();
	                    infoTxtContainer.empty();
	                    infoImgContainer.append(expert.find('.image img').clone());
	                    var info = expert.find('.info').clone();
	                    infoTxtContainer.append(info);
	                    infoWrapper.addClass('election-microsite__experts--info-wrapper--open');
	                    $('html, body').animate({
	                        scrollTop: infoWrapper.offset().top
	                    }, 200);
	                }
	            };
	
	        $('.election-microsite__experts--info__close').click(function (e) {
	            e.preventDefault();
	            close();
	        });
	
	        experts.click(function (evt) {
	            evt.preventDefault();
	            select($(this));
	        });
	
	        //$(window).resize(close);
	    },
	
	    init = function () {
	        if (!$('html').hasClass('lt-ie8')) {
	            initExperts();
	        } else {
	            initExpertsIE7();
	        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGM2MDI4N2I4ZWVmNWM3NWY2MWY/MTFjOSoqKiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kcy9lbGVjdGlvbi1taWNyb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvbGlicy9qcXVlcnkuanM/N2U1ZioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHMvdXRpbHMvZGVmZXIuanM/Y2M2ZSoiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBLGNBQWE7OztBQUdiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3RGQTtBQUNBO0FBQ0E7QUFDQSwyQjs7Ozs7OztBQ0hBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0Esd0NBQXVDO0FBQ3ZDLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxHIiwiZmlsZSI6Im1vZHVsZXMvZWxlY3Rpb24tbWljcm9zaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkYzYwMjg3YjhlZWY1Yzc1ZjYxZlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCcuL2xpYnMvanF1ZXJ5JyksXG4gICAgZGVmZXIgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmVyJyksXG5cbiAgICBpbml0RXhwZXJ0c0lFNyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlY3Rpb24gPSAkKCcuZWxlY3Rpb24tbWljcm9zaXRlX19leHBlcnRzLS13cmFwcGVyJyksXG4gICAgICAgICAgICBleHBlcnRzID0gJCgnOm5vdChbY2xhc3MqPVwiaXdkLWxpc3RpbmdcIl0pID4gLmVsZWN0aW9uLW1pY3Jvc2l0ZV9fYWNhZGVtaWNzX19pdGVtJyksXG4gICAgICAgICAgICBpbmZvID0gJCgnPGRpdiBjbGFzcz1cImVsZWN0aW9uLW1pY3Jvc2l0ZV9fYWNhZGVtaWNzX19pdGVtX19pbmZvLS1pZTdcIj48L2Rpdj4nKS5hcHBlbmRUbyhzZWN0aW9uKSxcblxuICAgICAgICAgICAgb3BlbkluZm8gPSBmdW5jdGlvbiAoZXhwZXJ0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBleHBlcnQuZmluZCgnLmluZm8tY29udGVudCcpLmNsb25lKCk7XG5cbiAgICAgICAgICAgICAgICBpbmZvLmh0bWwoJycpLmFwcGVuZChjb250ZW50KS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5mby5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfSxcblxuXG4gICAgICAgICAgICBzZWxlY3QgPSBmdW5jdGlvbiAoZXhwZXJ0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG1ha2VTZWxlY3RlZCA9IGV4cGVydCAmJiAhZXhwZXJ0Lmhhc0NsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgICAgICAgaWYgKG1ha2VTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBvcGVuSW5mbyhleHBlcnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgZXhwZXJ0cy5jbGljayhmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNlbGVjdCgkKHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGluaXRFeHBlcnRzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBleHBlcnRzID0gJCgnOm5vdChbY2xhc3MqPVwiaXdkLWxpc3RpbmdcIl0pID4gLmVsZWN0aW9uLW1pY3Jvc2l0ZV9fYWNhZGVtaWNzX19pdGVtJyksXG4gICAgICAgICAgICBpbmZvV3JhcHBlciA9ICQoJy5lbGVjdGlvbi1taWNyb3NpdGVfX2V4cGVydHMtLWluZm8td3JhcHBlcicpLFxuICAgICAgICAgICAgaW5mb0ltZ0NvbnRhaW5lciA9ICQoJy5lbGVjdGlvbi1taWNyb3NpdGVfX2V4cGVydHMtLWluZm9fX2ltZycpLFxuICAgICAgICAgICAgaW5mb1R4dENvbnRhaW5lciA9ICQoJy5lbGVjdGlvbi1taWNyb3NpdGVfX2V4cGVydHMtLWluZm9fX3R4dCcpLFxuXG5cbiAgICAgICAgICAgIGNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGV4cGVydHMucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgaW5mb1dyYXBwZXIucmVtb3ZlQ2xhc3MoJ2VsZWN0aW9uLW1pY3Jvc2l0ZV9fZXhwZXJ0cy0taW5mby13cmFwcGVyLS1vcGVuJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ID0gZnVuY3Rpb24gKGV4cGVydCkge1xuICAgICAgICAgICAgICAgIGlmIChleHBlcnQuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleHBlcnRzLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICBleHBlcnQuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGluZm9JbWdDb250YWluZXIuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgaW5mb1R4dENvbnRhaW5lci5lbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICBpbmZvSW1nQ29udGFpbmVyLmFwcGVuZChleHBlcnQuZmluZCgnLmltYWdlIGltZycpLmNsb25lKCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IGV4cGVydC5maW5kKCcuaW5mbycpLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgIGluZm9UeHRDb250YWluZXIuYXBwZW5kKGluZm8pO1xuICAgICAgICAgICAgICAgICAgICBpbmZvV3JhcHBlci5hZGRDbGFzcygnZWxlY3Rpb24tbWljcm9zaXRlX19leHBlcnRzLS1pbmZvLXdyYXBwZXItLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBpbmZvV3JhcHBlci5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICQoJy5lbGVjdGlvbi1taWNyb3NpdGVfX2V4cGVydHMtLWluZm9fX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV4cGVydHMuY2xpY2soZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZWxlY3QoJCh0aGlzKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vJCh3aW5kb3cpLnJlc2l6ZShjbG9zZSk7XG4gICAgfSxcblxuICAgIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghJCgnaHRtbCcpLmhhc0NsYXNzKCdsdC1pZTgnKSkge1xuICAgICAgICAgICAgaW5pdEV4cGVydHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluaXRFeHBlcnRzSUU3KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5kZWZlcihpbml0KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvanMvbW9kcy9lbGVjdGlvbi1taWNyb3NpdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDRcbiAqKi8iLCIvKipcbiAqIGV4cGVjdHMgalF1ZXJ5IHRvIGJlIHByb3ZpZGVkIGJ5IENJVFlfUi5qc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy4kO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvanMvbW9kcy9saWJzL2pxdWVyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDUgNiA3IDhcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJCA9IHJlcXVpcmUoJy4uL2xpYnMvanF1ZXJ5Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRlZmVycmVkRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBDSVRZICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgJChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LkNJVFlfT1BUSU9OUykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5DSVRZX09QVElPTlMgPSB7ZGVmZXI6IFtdfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5DSVRZX09QVElPTlMuZGVmZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuQ0lUWV9PUFRJT05TLmRlZmVyID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDSVRZX09QVElPTlMuZGVmZXIucHVzaChkZWZlcnJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9qcy9tb2RzL3V0aWxzL2RlZmVyLmpzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNSA3IDhcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9