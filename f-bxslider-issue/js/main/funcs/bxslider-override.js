var $ = require('../jquery');

module.exports = function () {
    
    init = function () {
        $(document).ready(function(){
            console.log($('.banner-content a').length);
                    
            $('.banner-content p a').on('touchstart', function(e){
                // $('.bx-controls').removeClass('disabled');
                console.log('touch-start');
                
                e.preventDefault();
                console.log($(this).attr('href'));
                var x = $(this).attr('href');
                location.href = x;
            });

            
            $('.bx-wrapper .bx-viewport').on('touchend', function(e){
                $('.bx-controls').removeClass('disabled');

                console.log('bx-viewport - touch-End');
                
            });

        });



    };

    return init();

}();
