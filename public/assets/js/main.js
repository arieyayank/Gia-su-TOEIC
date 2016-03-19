window.onload = function() {
  var video = document.getElementById("video");
  var playButton = document.getElementById("play-pause"); 
	playButton.addEventListener("click", function() {
	  if (video.paused == true) { 
		video.play(); 
		$('#play-pause').removeClass('play-now').addClass('to-jeda');
	  } else { 
		video.pause(); 
		$('#play-pause').removeClass('to-jeda').addClass('play-now');
	  }
	});
	// var headerH = $('nav.top-navbar').height();
	// $('.back-header').css('height', headerH );
}

function equalHeight(group) {
   if($(window).width() > 767){
		tallest = 0;
		group.each(function() {
			thisHeight = $(this).height();
			if(thisHeight > tallest) {
				tallest = thisHeight;
			}
		});
		group.height(tallest);
   }
} 
$(document).ready(function() {
		var controller = $.superscrollorama(); 
	// individual element tween examples
	controller.addTween('.box-princing', TweenMax.from( $('.box-princing'), .2, {css:{opacity: 0.1}}));
	controller.addTween('.wrapper-princing', TweenMax.from( $('.wrapper-princing'), 0.1, {css:{opacity: 0.1}}));
	controller.addTween('#fade-it', TweenMax.from( $('#fade-it'), .5, {css:{opacity: 0.1}}), 50, true);
	controller.addTween('#fade-it1', TweenMax.from( $('#fade-it1'), .5, {css:{opacity: 0.1}}));
	controller.addTween('#fade-it2', TweenMax.from( $('#fade-it2'), .5, {css:{opacity: 0.1}}));
	controller.addTween('.list-first', TweenMax.from( $('.list-first'), .0, {css:{opacity: 0.1}}), 50, false);
	controller.addTween('.second-list', TweenMax.from( $('.second-list'), .2, {css:{opacity: 0.4}}), 50, false);
	controller.addTween('.list-lates', TweenMax.from( $('.list-lates'), .2, {css:{opacity: 0.4}}), 50, false);
	controller.addTween('.line-one', TweenMax.from( $('.line-one'), .8, {css:{opacity: 0.1}}));
	controller.addTween('.line-two', TweenMax.from( $('.line-two'), .8, {css:{opacity: 0.1}}));
	controller.addTween('.zoomion-one', TweenMax.from( $('.zoomion-one'), .5, {css:{opacity: 0.1}}));
	controller.addTween('.zoomion-two', TweenMax.from( $('.zoomion-two'), .5, {css:{opacity: 0.1}}));
	controller.addTween('.zoomion-three', TweenMax.from( $('.zoomion-three'), .5, {css:{opacity: 0.1}})); 
$(window).bind('scroll', function() {
	var navHeight = $( '.top-navbar' ).height();
	if ( $(window).scrollTop() > 0 ) {
		$(".top-navbar").addClass("fixed");
		$(".back-header").css('display', 'block');
	} else {
		$(".top-navbar").removeClass("fixed");
		$(".back-header").css('display', 'none');
	}
	$(".back-header").css('height', navHeight);
});
});
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
 // $(window).bind('scroll', function() {
	   // var navHeight = $( window ).height() - 70;
			 // if ($(window).scrollTop() > navHeight) {
				 // $('nav').addClass('fixed');
			 // }
			 // else {
				 // $('nav').removeClass('fixed');
			 // }
		// });
