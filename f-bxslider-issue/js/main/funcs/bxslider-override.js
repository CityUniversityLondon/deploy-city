var $ = require('../jquery');

module.exports = function () {
    
    init = function () {
        $(document).ready(function(){
            var prevTouchX;
            var prevTouchY;
            console.log('X cor is: '+ prevTouchX);
            console.log('Y cor is: '+ prevTouchY);

            $(document).on('touchstart', function(e){
                prevTouchX = e.touches[0].clientX;
                prevTouchY = e.touches[0].clientY;
                console.log('X cor is: '+ prevTouchX);
                console.log('Y cor is: '+ prevTouchY);

            });

            console.log($('.banner-content a').length);
            console.log($('.bx-wrapper .bx-viewport').length);
                    
            $('.banner-content p a').on('touchend', function(e){
                // $('.bx-controls').removeClass('disabled');
                console.log('Banner A: touch-end');
                e.preventDefault();

                console.log('prev X cor is: '+ prevTouchX);
                console.log('prev Y cor is: '+ prevTouchY);
                touchX = e.touches[0].clientX;
                TouchY = e.touches[0].clientY;
                console.log('X cor is: '+ prevTouchX);
                console.log('Y cor is: '+ prevTouchY);

                console.log('Redirecting to : '+ $(this).attr('href'));
                var x = $(this).attr('href');
                location.href = x;
            });

            $('.banner-content p a').on('touchmove', function(e){
                console.log('touch move detected');
                e.preventDefault();
            });

            
            $('.bx-wrapper .bx-viewport').on('touchstart', function(e){
                $('.bx-controls').removeClass('disabled');

                console.log('bx-viewport - touch-start');
                
            });

        });



    };

    return init();

}();
