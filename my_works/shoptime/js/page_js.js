


// ON SCROLL FIXED NAV 
//=======================
var num =110; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.custom_nav').addClass('fixed_nav');
		  $('.bar_logo').removeClass('scroll_logo');
    } else {
        $('.custom_nav').removeClass('fixed_nav');
		  $('.bar_logo').addClass('scroll_logo');
    }
});


//------------------------------------------------


// MOBILE MENU TOGGLE
//=======================

$(".menu_toggle").click(function(){

	$(".custom_nav").css("left","0");
	

});

$(".menu_close").click(function(){
		$(".custom_nav").css("left","");
		
	

});


//------------------------------------------------

/* OWL CAROSEL
================*/ 

$('#owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	 dots:true,
	 loop:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$('#owl-carousel2').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
	 nav:true,
	 loop:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



$('#owl-carousel3').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	 dot:true,
	 loop:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})












//------------------------------------------------
//------------------------------------------------

// TIME COUNT 
//===============================================


$(function () {
	var austDay = new Date();
	austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
	$('#defaultCountdown').countdown({until: austDay});
	$('#year').text(austDay.getFullYear());
});