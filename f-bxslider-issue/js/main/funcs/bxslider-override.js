var $ = require('../jquery');

module.exports = function () {
    
    init = function () {
        $(document).ready(function(){
            var strTouchX;
            var strTouchY;
            var endTouchX;
            var endTouchY;
            
            function myTouchSt(e){
                strTouchX = e.touches[0].clientX;
                strTouchY = e.touches[0].clientY;
                console.log('Start X cor is: '+ strTouchX);
                console.log('STart Y cor is: '+ strTouchY);
            };

            function myTouchEn(linkLoc){
                endTouchX = event.changedTouches[0].pageX;
                endTouchY = event.changedTouches[0].pageY;
                console.log('End X cor is: '+ endTouchX);
                console.log('End Y cor is: '+ endTouchY);
                console.log('----------------------------------');

                if(endTouchX == strTouchX){
                    console.log('*** X cors are same! ***');
                    console.log('Redirecting to : '+ $(this).attr('href'));
                
                location.href = linkLoc;
                };
            };

            document.ontouchstart = myTouchSt;

            console.log($('.banner-content a').length);
            console.log($('.bx-viewport').length);
                    
            $('.banner-content p a').on('touchend', function(event){
                $('.bx-controls').removeClass('disabled');
                console.log('Banner A: touch-end');
                event.preventDefault();
                var linkLoc = $(this).attr('href');
                myTouchEn(linkLoc);

            });
          /// doesnt pick up the news elements using this class
            $('.bx-wrapper .bx-viewport').on('touchstart', function(e){
                $('.bx-controls').removeClass('disabled');
                console.log('bx-viewport - touch-start');
                
            });

        });



    };

    return init();

}();
