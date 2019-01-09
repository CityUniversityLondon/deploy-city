module.exports = function () {
    // test code for homepage carousel
$(document).ready(function(){
    
    console.log($('.banner-content a').length);

    $(document).on('click', function(e){
        e.preventDefault();  
        console.log('You clicked on a: '+ e.target.tagName);
        console.log('You touched on a: '+ e.targetTouches[0].target.tagName);

          
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
