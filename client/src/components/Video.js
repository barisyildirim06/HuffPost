import React, { useState} from 'react'
import {MdCancel} from 'react-icons/md';
import $ from 'jquery';
import { useMediaQuery } from 'react-responsive'


function Video() {

    const isBigEnough = useMediaQuery({
        query: '(min-width: 780px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })
    const isComputer = useMediaQuery({
        query: '(min-width: 1000px)'
    })


    var $window = $(window);
var $videoWrap = $('.video-wrap');
var $video = $('.video');
var videoHeight = $video.outerHeight();

$window.on('scroll',  function() {
  var windowScrollTop = $window.scrollTop();
  var videoBottom = videoHeight + $('.video-wrap').offset().top;
  
  if (windowScrollTop > videoBottom) {
    $videoWrap.height(videoHeight);
    $video.addClass('stuck');
  } else {
    $videoWrap.height('auto');
    $video.removeClass('stuck');
  }
});


    return (
        <div class="page">
  <div class="video-wrap">
    <div class="video">
      <iframe width="600" height="340" src="https://www.youtube.com/embed/pfqkRYSs4Rg" frameborder="0" gesture="media" allowfullscreen></iframe>
    </div>
  </div>
  
  <div class="content">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis recusandae distinctio optio commodi tenetur quisquam qui porro, aliquid inventore perferendis quibusdam at! Quisquam illum distinctio eveniet corrupti cupiditate quis?</p>
    
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis recusandae distinctio optio commodi tenetur quisquam qui porro, aliquid inventore perferendis quibusdam at! Quisquam illum distinctio eveniet corrupti cupiditate quis?</p>
    
    <h2>Lorem ipsum dolor sit.</h2>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi delectus ducimus temporibus debitis natus, aliquam impedit saepe, doloribus a modi consectetur fugit unde? Maxime illo molestiae libero? Molestias labore ratione necessitatibus veniam. Doloremque nesciunt rerum incidunt nam ad quo sed porro, molestias mollitia aut, quaerat provident minima ab harum?</p>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut eligendi, ullam accusantium cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam deserunt et tenetur nihil quidem velit harum? Id quisquam voluptates eligendi est nobis harum impedit commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae omnis. Obcaecati ratione sapiente exercitationem quis dolore.</p>
    
    <h2>Lorem ipsum dolor sit.</h2>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi delectus ducimus temporibus debitis natus, aliquam impedit saepe, doloribus a modi consectetur fugit unde? Maxime illo molestiae libero? Molestias labore ratione necessitatibus veniam. Doloremque nesciunt rerum incidunt nam ad quo sed porro, molestias mollitia aut, quaerat provident minima ab harum?</p>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut eligendi, ullam accusantium cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam deserunt et tenetur nihil quidem velit harum? Id quisquam voluptates eligendi est nobis harum impedit commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae omnis. Obcaecati ratione sapiente exercitationem quis dolore.</p>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut eligendi, ullam accusantium cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam deserunt et tenetur nihil quidem velit harum? Id quisquam voluptates eligendi est nobis harum impedit commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae omnis. Obcaecati ratione sapiente exercitationem quis dolore.</p>
    
    <h2>Lorem ipsum dolor sit.</h2>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi delectus ducimus temporibus debitis natus, aliquam impedit saepe, doloribus a modi consectetur fugit unde? Maxime illo molestiae libero? Molestias labore ratione necessitatibus veniam. Doloremque nesciunt rerum incidunt nam ad quo sed porro, molestias mollitia aut, quaerat provident minima ab harum?</p>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut eligendi, ullam accusantium cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam deserunt et tenetur nihil quidem velit harum? Id quisquam voluptates eligendi est nobis harum impedit commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae omnis. Obcaecati ratione sapiente exercitationem quis dolore.</p>
  </div>
</div>
    )
}

export default Video

