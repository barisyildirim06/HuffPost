import React, { useState } from 'react'
import { MdCancel } from 'react-icons/md';
import Title from '../Title'
import $ from 'jquery';
import { useMediaQuery } from 'react-responsive'


function RenderVideoPage() {

    const isBigEnough = useMediaQuery({
        query: '(min-width: 780px)'
    })

    const hideVideo = () => {
        setVideoAvailable(0)
        $video.removeClass('stuck');
        $cancelButton.removeClass('stuck')
    }

    const [VideoAvailable, setVideoAvailable] = useState(1)
    const [VideoSeen, setVideoSeen] = useState(1)
    var $window = $(window);
    var $videoWrap = $('.video-wrap');
    var $video = $('.video');
    var $cancelButton = $('.video-cancel-button')
    var videoHeight = $video.outerHeight();
     if ($( document ).ready) {
        $window.on('scroll', function () {
            var innerHeight = $window.innerHeight()
            var windowScrollTop = $window.scrollTop();
            if ($videoWrap.length) {
                var videoBottom = videoHeight + $('.video-wrap').offset().top;
                var videoTop = $('.video-wrap').offset().top - innerHeight;
                if (windowScrollTop > $('.video-wrap').offset().top) {
                    setVideoSeen(1)
                }
                if (VideoAvailable === 0){
                    console.log(VideoAvailable)
                    $video.removeClass('stuck');
                    $cancelButton.removeClass('stuck')
                } else if (windowScrollTop > videoBottom) {
                    console.log(`videoBottom= ${videoBottom}`)
                    console.log(`videotop =  ${videoTop}`)
                    $videoWrap.height(videoHeight);
                    $video.addClass('stuck');
                    $cancelButton.addClass('stuck')
                    $cancelButton.removeClass('none')
                } else if (windowScrollTop < videoBottom && windowScrollTop > videoTop ) {
                    $videoWrap.height('auto');
                    $video.removeClass('stuck');
                    $cancelButton.removeClass('stuck')
                    $cancelButton.addClass('none')
                } else if (VideoSeen === 1 && windowScrollTop < $('.video-wrap').offset().top) {
                    $videoWrap.height(videoHeight);
                    $video.addClass('stuck');
                    $cancelButton.addClass('stuck')
                    $cancelButton.removeClass('none')
                }
            }
    
        });
    };

    


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

