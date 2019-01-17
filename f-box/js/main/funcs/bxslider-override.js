var $ = require('../jquery');

module.exports = function () {
    
    init = function () {
        $(document).ready(function(){
            console.log($('.banner-content a').length);
            if(location.href == 'https://www.city.ac.uk/?dev=box'){            
                var strTouchX;
                var strTouchY;
                var endTouchX;
                var endTouchY;
                
                document.addEventListener("touchstart", function(e){
                    strTouchX = e.touches[0].clientX;
                    strTouchY = e.touches[0].clientY;
                    console.log('TouchStart X cor is: '+strTouchX);   
                    console.log(e.target.tagName +' element was touched');
                    // re-instates controls after being deactivated by bxslider node module 
                    $('.bx-controls, .bx-has-controls-direction').removeClass('disabled');
                }); 

                //document.ontouchstart = myTouchStr;

        
                /**** Home page top slider ****/
                var i;
                for (i=0; i < $('.banner-content a').length; i++){
                    document.getElementsByClassName('banner-content')[i].getElementsByTagName('a')[0].addEventListener("touchend", function(e){
                        e.preventDefault();
                        $('.bx-controls').removeClass('disabled');
                        console.log('*** Banner A: touch-end');
                        
                        endTouchX = e.changedTouches[0].pageX;
                        console.log(endTouchX);

                        if ( endTouchX == strTouchX){
                            console.log('**touch values same');
                            location.href = this.href;
                            console.log('----------------------------');
                        } else{
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
