module.exports = function () {
    // test code for homepage carousel
$(document).ready(function(){
    
    console.log($('.banner-content a').length);

    $('.banner-content a').on('click', function(e){
        console.log('clicked');
        e.preventDefault();    
    });
});
    var Cookies = require('js-cookie');

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
