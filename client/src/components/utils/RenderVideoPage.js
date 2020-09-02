import React, { useState, useEffect, useRef } from 'react'
import Title from '../Title'
import $ from 'jquery';

function RenderVideoPage() {

   const [VideoSeen, setVideoSeen] = useState(0)
    var $window = $(window);
    var $videoWrap = $('.video-wrap');
    var $video = $('.video');
    var videoHeight = $video.outerHeight();


    $window.on('scroll', function () {
        var windowScrollTop = $window.scrollTop();
        // var videoBottom = videoHeight + $video.offset().left;
        // 1400 2600
        if (windowScrollTop >1400){
            setVideoSeen(1)
        }
        if (windowScrollTop > 2600) {
            $videoWrap.height(videoHeight);
            $video.addClass('stuck');
            
        } else if (windowScrollTop >1400 && windowScrollTop <2600){
            $videoWrap.height('auto');
            $video.removeClass('stuck');
        }  else if (VideoSeen === 1 && windowScrollTop < 1400) {
            $videoWrap.height(videoHeight);
            $video.addClass('stuck');
        } 
    });


    return (
        <div className="videos">
            <div className="videos-container" >
                <h4><Title title="TOP VIDEOS" color="#0dbe98" /></h4>
                <div class="video-wrap">
                    <div class="video">
                        <iframe width='765px' height='433px' id="video1" src="https://www.youtube.com/embed/_YgqROO4BYw?autoplay=1&mute=1&enablejsapi=1" frameborder="0" gesture="media" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderVideoPage

