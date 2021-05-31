$(document).ready(function(){ 

	/* Add/ Remove Sticky Navigation */ 

	$('.js--features').waypoint(function(direction){
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px;' 
	});

	

/* Section Hero-Text Scroll */

/* Scroll To Plans */

$('.js--scroll-to-plans').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 10);
    
});

/* Scroll To Features */

$('.js--scroll-to-features').click(function(){
       $('html, body').animate({scrollTop: $('.js--features').offset().top}, 1000);
    
});

/* Animations */

$('.js--wp-1').waypoint(function(direction) {
		$('.js--wp-1').addClass('animated lightSpeedIn');   
},{
    offset: '50%'
});
    
    $('.js--wp-2').waypoint(function(direction) {
		$('.js--wp-2').addClass('animated bounceInUp');   
},{
    offset: '50%'
});
    
        $('.js--wp-3').waypoint(function(direction) {
		$('.js--wp-3').addClass('animated fadeInUp');   
},{
    offset: '50%'
});
    
        $('.js--wp-4').waypoint(function(direction) {
		$('.js--wp-4').addClass('animated rubberBand');   
},{
    offset: '50%'
});
    
    
  /**Mobile Navi*/
    
    $('.js--nav-icon').click(function() {
      var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon i');
        
     nav.slideToggle(200); 
        
       if (icon.hasClass('ion-navicon-round')){
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}

        
   
        
    });

    
    });