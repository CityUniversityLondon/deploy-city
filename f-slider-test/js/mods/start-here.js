'use strict';

var $ = require('./libs/jquery'),
    initCookieNotice = require('../utils/init-cookie-notice');


$(function () {
    $('.banner-toggle').click(function () {
        $('.banner-start-here').toggleClass('open');
    });

    initCookieNotice($);
});
