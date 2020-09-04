import React, { useState, useEffect } from 'react'
import { MdCancel } from 'react-icons/md';
import Title from '../Title'
import $ from 'jquery';
import { useMediaQuery } from 'react-responsive'


function RenderVideoPage() {

    const isBigEnough = useMediaQuery({
        query: '(min-width: 780px)'
    })

    const hideVideo = () => {
        setVideoAvailable(1)
        $video.removeClass('stuck');
        $cancelButton.removeClass('stuck')
    }
    

    const [VideoAvailable, setVideoAvailable] = useState(0)
    const [VideoSeen, setVideoSeen] = useState(0)
    var $window = $(window);
    var $videoWrap = $('.video-wrap');
    var $video = $('.video');
    var $cancelButton = $('.video-cancel-button')
    var videoHeight = $video.outerHeight();

    $(document).ready(function(){
        if($('.video-wrap').length){
            switch(VideoAvailable){
                case(1): $window.on('scroll', function () {
                    setVideoAvailable(1)
                    $videoWrap.height('auto');
                    $video.removeClass('stuck');
                    $cancelButton.removeClass('stuck')
                    $cancelButton.addClass('none')
                    console.log(VideoAvailable)
                });
                break;
                case(0): $window.on('scroll', function () {
                    console.log(VideoAvailable)
                    var innerHeight = $window.innerHeight()
                    var windowScrollTop = $window.scrollTop();
                    var videoBottom = videoHeight + $('.video-wrap').offset().top;
                    if(windowScrollTop > $('.video-wrap').offset().top) {
                        setVideoSeen(1)
                    } 
                     if (windowScrollTop > videoHeight + $('.video-wrap').offset().top && VideoAvailable === 0) {
                        console.log(`videoBottom= ${videoBottom}`)
                        console.log(`videotop =  ${$('.video-wrap').offset().top - innerHeight}`)
                        $videoWrap.height(videoHeight);
                        $video.addClass('stuck');
                        $cancelButton.addClass('stuck')
                        $cancelButton.removeClass('none')
                    } else if(windowScrollTop < videoBottom && windowScrollTop > ($('.video-wrap').offset().top-innerHeight) && VideoAvailable === 0){
                        $videoWrap.height('auto');
                        $video.removeClass('stuck');
                        $cancelButton.removeClass('stuck')
                        $cancelButton.addClass('none')
                    } else if (VideoSeen ===1 && windowScrollTop < $('.video-wrap').offset().top && VideoAvailable === 0){
                        $videoWrap.height(videoHeight);
                        $video.addClass('stuck');
                        $cancelButton.addClass('stuck')
                         $cancelButton.removeClass('none')
                    }
                });
                break;
            }
        }
        
    })

    


    


    //     const [VideoAvailable, setVideoAvailable] = useState(0)
    //    const [VideoSeen, setVideoSeen] = useState(0)
    //     var $window = $(window);
    //     var $videoWrap = $('.video-wrap');
    //     var $video = $('.video');
    //     var $cancelButton = $('.video-cancel-button')
    //     var videoHeight = $video.outerHeight();


    //     $window.on('scroll', function () {
    //         var windowScrollTop = $window.scrollTop();
    //         if(isComputer ){
    //             if (windowScrollTop >1400){
    //                 setVideoSeen(1)
    //             }
    //             if (windowScrollTop > 2600 ) {
    //                 $videoWrap.height(videoHeight);
    //                 $video.addClass('stuck');
    //                 $cancelButton.addClass('stuck')
    //                 $cancelButton.removeClass('none')
    //             } else if (windowScrollTop >1400 && windowScrollTop <2600 ){
    //                 $videoWrap.height('auto');
    //                 $video.removeClass('stuck');
    //                 $cancelButton.removeClass('stuck')
    //                 $cancelButton.addClass('none')
    //             }  else if (VideoSeen === 1 && windowScrollTop < 1400 ) {
    //                 $videoWrap.height(videoHeight);
    //                 $video.addClass('stuck');
    //                 $cancelButton.addClass('stuck')
    //                 $cancelButton.removeClass('none')
    //             } 
    //         } 
    //     });


    return (
        <div className="videos">
            <div className="videos-container" >
                <h4><Title title="TOP VIDEOS" color="#0dbe98" /></h4>
                {isBigEnough ? <div class="video-wrap">
                    <div class="video">
                        <button
                            type="button"
                            className="video-cancel-button"
                            onClick={hideVideo}
                        >
                            <MdCancel className="video-cancel-icon" />
                        </button>
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

