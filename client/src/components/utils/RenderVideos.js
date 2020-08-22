import React from 'react'
import ReactPlayer from 'react-player'
import Title from '../Title'

function RenderVideos() {

    // window.onscroll = function () { scrollFunction() };

    // function scrollFunction() {
    //     if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 1120) {
    //         document.getElementById("navbar").style.top = "-100px";
    //         document.getElementById("nav-logo2").style.display = "flex";
    //     } else {
    //         document.getElementById("navbar").style.top = "0px";
    //         document.getElementById("nav-logo2").style.display = "none";
    //     }
    // }

    return (
        <div>
            <div className="videos">
                <div className="videos-container" >
                <h4><Title title="CORONAVIRUS" color="#0dbe98"/></h4>
                        <ReactPlayer 
                            className='videobox'
                            url='https://www.youtube.com/watch?v=_YgqROO4BYw'
                            width='765px'
                            height='433px'
                        />
                </div>
            </div>
        </div>



    )
}

export default RenderVideos
