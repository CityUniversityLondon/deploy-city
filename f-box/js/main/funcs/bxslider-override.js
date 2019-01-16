var $ = require('../jquery');

module.exports = function () {
    
    init = function () {
        $(document).ready(function(){

            if(location.href == 'https://www.city.ac.uk/'){
                console.log($('.banner-content a').length);
                console.log(document.getElementsByClassName('bx-wrapper').length);
                
                /**** News slider (only on mobile) ****/
                // doesnt pick up the news elements using this class
                setTimeout(function(){ 
                    $('.bx-viewport').on('touchstart', function(e){
                        // re-instates controls after being deactivated by bxslider node module    
                        $('.bx-controls').removeClass('disabled');
                            
                            console.log('*** bx-viewport - touch-start ***');
                    });

                    $('.bx-controls-direction a').on('touchend', function(e){
                        // re-instates controls after being deactivated by bxslider node module    
                        $('.bx-controls').removeClass('disabled');
                            
                            console.log('*** box controls touched ***');
                    });


                }, 1000);
                // global variables capturing touch coordinates to differentiate between touch swipe and touch click 
                var strTouchX;
                var strTouchY;
                var endTouchX;
                var endTouchY;
                
                document.addEventListener("touchstart", function(e){
                
                    strTouchX = e.touches[0].clientX;
                    strTouchY = e.touches[0].clientY;
                    console.log('TouchStart X cor is: '+strTouchX);   
                    console.log(e.target.tagName +' element was touched');   
                });
        
                /**** Home page top slider ****/
                var i;
                for (i=0; i < $('.banner-content a').length; i++){

                    document.getElementsByClassName('banner-content')[i].getElementsByTagName('a')[0].addEventListener("touchend", function(event){
                        $('.bx-controls').removeClass('disabled');
                        console.log('*** Banner A: touch-end');
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
                };// end for loop   

                
            };      

        }); // end page ready func
    }; // end init func

    return init();

}();
