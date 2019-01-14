var $ = require('../jquery');

module.exports = function () {
    
    init = function () {
        $('.banner-content a').length;
                
        $('.banner-content a').on('click', 'touchend', function(e){
            console.log('clicked');
            
            e.preventDefault();
            console.log($(this).attr('href'));
            var x = $(this).attr('href');
            location.href = x;
        });

        

        $('.banner-content p a').on('touchend', function(e){

            console.log('touch-End');
            
            e.preventDefault();
            console.log($(this).attr('href'));
            var x = $(this).attr('href');
            location.href = x;
        });

        $('.banner-content p a').on('touchstart', function(e){

            console.log('touch-start');
            
            e.preventDefault();
            console.log($(this).attr('href'));
            var x = $(this).attr('href');
            location.href = x;
        });

        $('.bx-viewport').on('touchend', function(e){

            console.log('bx-viewport - touch-End');
            
            e.preventDefault();
            console.log($(this).find('.banner-content p a').attr('href'));
            var x = $(this).find('.banner-content p a').attr('href');
            location.href = x;
        });

        $('.bx-viewport').on('touch-start', function(e){

            console.log('bx-viewport - touch-start');
            
            e.preventDefault();
            console.log($(this).find('.banner-content p a').attr('href'));
            var x = $(this).find('.banner-content p a').attr('href');
            location.href = x;
        });



    };

    return init();

}();
