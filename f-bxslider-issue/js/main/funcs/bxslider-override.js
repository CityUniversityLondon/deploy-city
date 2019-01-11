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

            console.log('touched');
            
            e.preventDefault();
            console.log($(this).attr('href'));
            var x = $(this).attr('href');
            location.href = x;
        });

        $('.banner-content p a').on('touchstart', function(e){

            console.log('touched');
            
            e.preventDefault();
            console.log($(this).attr('href'));
            var x = $(this).attr('href');
            location.href = x;
        });



    };

    return init();

}();
