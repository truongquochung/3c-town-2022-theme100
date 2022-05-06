'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );


window.onload = function(){
    function smoke_animation(){
        var width_smoke_0=$(".blk-gr3c-animation .inner-gr3c-animation").outerWidth();
        var height_smoke_0=$(".blk-gr3c-animation .inner-gr3c-animation").outerHeight();
        $(".smoke-0").find("svg").css({"width":width_smoke_0*0.20,"height":height_smoke_0*0.25});
        $(".smoke-0").find(".smoke-svg").css({"width":width_smoke_0*0.20,"height":height_smoke_0*0.22})
        $(".smoke-character-c").find(".smoke-svg").css({"width":width_smoke_0*0.20,"height":height_smoke_0*0.22})
        $(".smoke-character-o").find(".smoke-svg").css({"width":width_smoke_0*0.20,"height":height_smoke_0*0.22})
        $(".smoke-character-l").find(".smoke-svg").css({"width":width_smoke_0*0.18,"height":height_smoke_0*0.19})
        $(".smoke-character-l-1").find(".smoke-svg").css({"width":width_smoke_0*0.20,"height":height_smoke_0*0.19})
        $(".smoke-character-d").find(".smoke-svg").css({"width":width_smoke_0*0.20,"height":height_smoke_0*0.19})
        $(".smoke-character-d-1").find(".smoke-svg").css({"width":width_smoke_0*0.20,"height":height_smoke_0*0.19})
    };
    smoke_animation();
    jQuery(window).resize(function () {
      smoke_animation();

    });
    window.addEventListener("resize", function(event) {
        smoke_animation();
    })
}
$( ".blk-gr3c-animation" ).mousedown(function() {
  clearTimeout(myVar1);
  clearTimeout(myVar2);
});


$('.slider-3c-animation').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items:1,
    margin:0,
    dots:false,
     autoplay:true,
    autoplayTimeout:3000,
    slideSpeed: 200,
    URLhashListener:true
})
function animate_hl(){
    var myDiv = $(".blk-gr3c-animation");
    var scrollto = myDiv.offset().left + (myDiv.width() / 1.7);
    myDiv.animate({ scrollLeft:  scrollto});
}
animate_hl();
function animate_hl_right(){
    var myDiv = $(".blk-gr3c-animation");
    var scrollto = myDiv.offset().left + (myDiv.width() / 2.9);
    myDiv.animate({ scrollLeft:  scrollto}, 2000);
}
function animate_hl_left(){
    var myDiv = $(".blk-gr3c-animation");
    var scrollto = myDiv.offset().left + (myDiv.width() / 1.5);
    myDiv.animate({ scrollLeft:  scrollto}, 2000);
}
var myVar1 =setTimeout(function() {
  animate_hl_right();
}, 3000);
var myVar2 =setTimeout(function() {
  animate_hl_left();
}, 5000);



function scrool_center_div(){
  const slider = document.querySelector('.blk-gr3c-animation');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    let rect = slider.getBoundingClientRect();
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - rect.left;
    scrollLeft = slider.scrollLeft;
    console.log(startX, scrollLeft);
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.dataset.dragging = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.dataset.dragging = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    let rect = slider.getBoundingClientRect();
    e.preventDefault();
    slider.dataset.dragging = true;
    const x = e.pageX - rect.left;
    const walk = (x - startX);
    slider.scrollLeft = scrollLeft - walk;
    console.log(x, walk, slider.scrollLeft);
  });

}

scrool_center_div();
jQuery(window).resize(function () {
  scrool_center_div();
  animate_hl();
});
window.addEventListener("resize", function(event) {
    scrool_center_div();
    animate_hl();
})
$(".img-share img").click(function(){
  $(".popup-3c-share").addClass("active-popup");
  $(".bg-popup-share").addClass("active-bg-popup-share")
})
$(".popup-share-close").click(function(){
  $(".popup-3c-share").removeClass("active-popup");
  $(".bg-popup-share").removeClass("active-bg-popup-share")
})
$(document).mouseup(function(e) 
{
    var container = $(".popup-3c-share");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $(".popup-3c-share").removeClass("active-popup");
        $(".bg-popup-share").removeClass("active-bg-popup-share")
    }
});
  

$(".blk-scroll").mCustomScrollbar();

// $('.blk-scroll').overlayScrollbars({
//     scroll:"y",
//     resize: "y"
// }); 







