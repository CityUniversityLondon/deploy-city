var $ = require('../jquery');

module.exports = function () {
    
    init = function () {
        $(document).ready(function(){
            console.log($('.banner-content a').length);
            console.log($('.news-card-content__title').length);
            if(location.href == 'https://www.city.ac.uk/?dev=box'){            
                var strTouchX;
                var endTouchX;
                
                // records touch coordinates for determining swipe or touch
                document.addEventListener("touchstart", function(e){
                    strTouchX = e.touches[0].clientX;
                    strTouchY = e.touches[0].clientY; //to be removed
                    console.log('TouchStart X cor is: '+strTouchX);   // to be removed
                    console.log(e.target.className);
                    
                    // re-instates controls after being deactivated by bxslider node module 
                    $('.bx-controls, .bx-has-controls-direction').removeClass('disabled');
                }); 

                isTouchClick = endTouchX => endTouchX == strTouchX ? true : false;
                
                /**** Home page top slider ****/

                // try add another event listener for the news links...

                var i;
                for (i=0; i < $('.banner-content a').length; i++){
                    document.getElementsByClassName('banner-content')[i].getElementsByTagName('a')[0].addEventListener("touchend", function(e){
                        e.preventDefault();
                        $('.bx-controls').removeClass('disabled');
                        console.log('*** Banner A: touch-end');
                        
                        endTouchX = e.changedTouches[0].pageX;
                        console.log(endTouchX);
                        if (isTouchClick(endTouchX)){ // calls is click function to determine if click or swipe to place
                            location.href = this.href;
                            console.log('reee-directing');
                        };
                       
                    });
                };// end for loop  

                for (i=0; i< $('.news-card-content__title').length; i++){
                    document.getElementsByClassName('news-card-content__title')[i].addEventListener("touchend", function(e){
                        // e.preventDefault();
                        $('.bx-controls').removeClass('disabled');
                        console.log('*** Banner A: touch-end');
                        
                        endTouchX = e.changedTouches[0].pageX;
                        console.log(endTouchX);
                        console.log(this.parentNode.href);
                        if (isTouchClick(endTouchX)){ // calls is click function to determine if click or swipe to place
                            location.href = this.parentNode.href;
                            console.log('reee-directing');
                        };
                       
                    });
                };// end for loop 

                
            };      

        }); // end page ready func
    }; // end init func

    return init();

}();
