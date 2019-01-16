var $ = require('../jquery');

module.exports = function () {
    
    init = function () {
        $(document).ready(function(){
            console.log($('.banner-content a').length);
            console.log(document.getElementsByClassName('bx-wrapper').length);
            console.log($('.home-news-events .bx-wrapper').length);
            
            var strTouchX;
            var strTouchY;
            var endTouchX;
            var endTouchY;
            
            function myTouchStr(e){
                strTouchX = e.touches[0].clientX;
                strTouchY = e.touches[0].clientY;
                console.log('start touch is: '+strTouchX);      
            };

            document.ontouchstart = myTouchStr;
            
            var i;
            for (i=0; i < $('.banner-content a').length; i++){

                document.getElementsByClassName('banner-content')[i].getElementsByTagName('a')[0].addEventListener("touchend", function(event){
                    $('.bx-controls').removeClass('disabled');
                    console.log('*** Banner A: touch-end');
                    console.log(this.href);
                    event.preventDefault();

                    endTouchX = event.changedTouches[0].pageX;
                    console.log(endTouchX);

                    if ( endTouchX == strTouchX){
                        console.log('**touch values same');
                        location.href = this.href;
                        console.log('----------------------------');
                    }
                    else{
                        console.log('touch values different');
                        console.log('----------------------------');
                    };
                });
            };         
          /// doesnt pick up the news elements using this class
          $('.bx-viewport').on('touchstart', function(e){
                $('.bx-controls').removeClass('disabled');
                
                console.log('*** bx-viewport - touch-start ***');
            });  

        });
    };

    return init();

}();
