$(document).ready(function () {
    'use strict';

    /*-----------------------------------------
    Mobile dropdown toggle
    -----------------------------------------*/
    function dropdownToggle() {
        if ($(window).width() < 992) {
            $('.navbar-toggle').css('display', 'block');
            $('.navbar-collapse').css('display', 'none');

            $('.dropdown').unbind('click');

            $('.dropdown').on('click', function (dd) {
                dd.stopPropagation();
                $(this).children('.dropdown-menu').slideToggle();
            });
        } else {
            $('.navbar-toggle').css('display', 'none');
            $('.navbar-collapse').css('display', 'block');
        }
    }

    dropdownToggle();

    /*-----------------------------------------
    Header Slider 
    -----------------------------------------*/
    $('#banner-slider').owlCarousel({
        singleItem: true,
        slideSpeed: 200,
        autoPlay: 3000,
        stopOnHover: true,
        navigation: false,
        pagination: true,
        paginationNumbers: true,
    });

    /*-----------------------------------------
    Video Carousel 
    -----------------------------------------*/
    $('.video-carousel').owlCarousel({
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [991, 3],
        itemsTablet: [767, 3],
        itemsMobile: [479, 1],
        slideSpeed: 200,
		 autoPlay: 3000,
        navigation: true,
        navigationText: ['<i class=\"fa fa-angle-left\"></i>', '<i class=\"fa fa-angle-right\"></i>'],
        pagination: false,
    });
	    $('.video-carousel2').owlCarousel({
        items: 6,
        itemsDesktop: [1199, 6],
        itemsDesktopSmall: [991, 3],
        itemsTablet: [767, 3],
        itemsMobile: [479, 1],
       
        navigation: true,
        navigationText: ['<i class=\"fa fa-angle-left\"></i>', '<i class=\"fa fa-angle-right\"></i>'],
        pagination: false,
    });

    /*-----------------------------------------
    Single Gallery Slider
    -----------------------------------------*/
    $('.single-gallery-slider').owlCarousel({
        singleItem: true,
        slideSpeed: 200,
        autoPlay: 3000,
        stopOnHover: true,
        navigation: true,
        navigationText: ['<i class=\"fa fa-angle-left\"></i>', '<i class=\"fa fa-angle-right\"></i>'],
        pagination: false,
    });

    /*-----------------------------------------
    Magnific Popup
    -----------------------------------------*/
    $('.image-large').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.play-video1').magnificPopup({
        type: 'iframe'
    });
    $.extend(true, $.magnificPopup.defaults, {
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });
    
    /*==========================================================
		Newletter Subscribe	
	==========================================================*/
	$(".subscription").ajaxChimp({
		callback: mailchimpResponse,
		url: "http://codepassenger.us10.list-manage.com/subscribe/post?u=6b2e008d85f125cf2eb2b40e9&id=6083876991" // Replace your mailchimp post url inside double quote "".  
	});

	function mailchimpResponse(resp) {
        if (resp.result === 'success') {
		 
			$('.newsletter-success').html(resp.msg).fadeIn().delay(3000).fadeOut();
			
		} else if (resp.result === 'error') {
			$('.newsletter-error').html(resp.msg).fadeIn().delay(3000).fadeOut();
		}
	}

    /*-----------------------------------------
    All window event
    -----------------------------------------*/
    $(window).on('resize orientationchange', function () {
        dropdownToggle();
    });
});

/*-----------------------------------------
Preloader
-----------------------------------------*/
$(window).on('load', function () {
    $('#preloader').fadeOut('slow');
});
