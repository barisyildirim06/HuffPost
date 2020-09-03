import React, { useState, useEffect, useRef } from 'react'
import Title from '../Title'
import $ from 'jquery';
import { useMediaQuery } from 'react-responsive'


function RenderVideoPage() {

    const isBigEnough = useMediaQuery({
        query: '(min-width: 780px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })
    const isComputer = useMediaQuery({
        query: '(min-width: 1000px)'
    })
   const [VideoSeen, setVideoSeen] = useState(0)
    var $window = $(window);
    var $videoWrap = $('.video-wrap');
    var $video = $('.video');
    var videoHeight = $video.outerHeight();


    $window.on('scroll', function () {
        var windowScrollTop = $window.scrollTop();
        // var videoBottom = videoHeight + $video.offset().left;
        // 1400 2600
        if(isComputer ){
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
        } else if(isBigEnough && isTabletOrMobile) {
            if (windowScrollTop >2000){
                setVideoSeen(1)
            }
            if (windowScrollTop > 3200) {
                $videoWrap.height(videoHeight);
                $video.addClass('stuck');
                
            } else if (windowScrollTop >2000 && windowScrollTop <3200){
                $videoWrap.height('auto');
                $video.removeClass('stuck');
            }  else if (VideoSeen === 1 && windowScrollTop < 2000) {
                $videoWrap.height(videoHeight);
                $video.addClass('stuck');
            } 
        }
    });


    return (
        <div className="videos">
            <div className="videos-container" >
                <h4><Title title="TOP VIDEOS" color="#0dbe98" /></h4>
                {isBigEnough ? <div class="video-wrap">
                    <div class="video">
                        <iframe width='765px' height='433px' src="https://www.youtube.com/embed/_YgqROO4BYw?autoplay=1&mute=1&enablejsapi=1" frameborder="0" gesture="media" allowfullscreen></iframe>
                    </div>
                </div> : <div className="video-phone">
                <iframe className="video-phone" width="100%" height="300px" src="https://www.youtube.com/embed/_YgqROO4BYw?autoplay=1&mute=1&enablejsapi=1" frameborder="0" gesture="media" allowfullscreen></iframe>
                </div>
                }
                
            </div>
        </div>
    )
}

export default RenderVideoPage

