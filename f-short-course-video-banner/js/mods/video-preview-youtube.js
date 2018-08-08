var extend = require('extend'),
    createYoutubePlayer = require('./youtube-player');

var DEFAULT_PARAMS = {
    frameBorder: "0",
    playerVars: {
        rel: 0,
    }
};

function closeDialog() {

}


function loadYoutubeVideo(wrapper, services) {
    var id = services.id;
    var params = services.params;
    var iframeId = 'ytev-'+id;
    var link = null;
    var h,w;

    if(window.innerWidth >= 1500){
        h=720;
        w=1280;
    }
    else if(window.innerWidth <= 1499 && window.innerWidth >= 1050){
        h=480;
        w=854;
    }
    else if(window.innerWidth <= 1049 && window.innerWidth >= 800){
        h=360;
        w=640;
    }
    else if(window.innerWidth <= 799 && window.innerWidth >= 580){
        h=240;
        w=426;
    }
    else{
        h=160;
        w=300;
    }

    link = wrapper.children('a');
    var fallbackParams = {
        width: w ,
        height: h
    };

    var playerParams = $.extend({},
        DEFAULT_PARAMS,
        fallbackParams,
        params,
        {
            videoId: id,
            events: {
                onInit: function () {
                    var dlg = $('<div></div>')
                        .addClass('dialog')
                        .attr('tabindex', '0')
                        .appendTo($('body'));

                    var playIcon = $('<span></span>').addClass('ui-icon').appendTo(dlg);

                    var box = $('<div></div>').addClass('dialog__box')
                        .appendTo(dlg);

                    var youtube = $('<div/>').attr('id', iframeId).attr(fallbackParams).appendTo(box);

                    dlg.on('click', function (evt) {
                            dlg.remove();
                            $('html').removeClass('no-scroll');
                    });

                    dlg.on('keydown', function (evt) {
                        if (evt.which === 27) {
                            dlg.remove();
                            $('html').removeClass('no-scroll');
                            evt.preventDefault();
                        }
                    });

                    $('body').append(dlg);
                    dlg.focus();
                    wrapper.addClass('video-preview--loading');
                },
                onReady: function (event) {
                    let player = event.target;
                    let iframe = link.siblings('iframe');

                    wrapper.removeClass('video-preview--loading');
                    wrapper.addClass('media--youtube');
                    player.playVideo();

                   
                }
            }
        }
    );

    $('html').addClass('no-scroll');
    createYoutubePlayer(iframeId, playerParams);
}

module.exports = loadYoutubeVideo;