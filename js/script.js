$(document).ready(function() {
	$('.slider__list').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
		dots: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn'
	});
	$('.slider .arrows__item.-prev').click(function(event) {
		event.preventDefault();
		$('.slider__list').trigger('prev.owl.carousel');
	});
	$('.slider .arrows__item.-next').click(function(event) {
		event.preventDefault();
		$('.slider__list').trigger('next.owl.carousel');
	});
	$('.hits__slider').owlCarousel({
		loop: true,
		nav: false,
		margin: 20,
		dots: true,
		autoplay: true,
		responsive: {
			0 : {
				items: 1
			},
			600 : {
				items: 2
			},
			900 : {
				items: 3
			},
			1140 : {
				items: 4
			},
			1400 : {
				items: 5
			}
		}
	});
	$('.hits__arrows .arrows__item.-prev').click(function(event) {
		event.preventDefault();
		$('.hits__slider').trigger('prev.owl.carousel');
	});
	$('.hits__arrows .arrows__item.-next').click(function(event) {
		event.preventDefault();
		$('.hits__slider').trigger('next.owl.carousel');
	});

	function postsCarousel() {
		var checkWidth = $(window).width();
		var owlPost = $(".about-why__list");
		if (checkWidth > 767) {
			if (typeof owlPost.data('owl.carousel') != 'undefined') {
				owlPost.data('owl.carousel').destroy();
			}
			owlPost.removeClass('owl-carousel');
		} else if (checkWidth < 768) {
			owlPost.addClass('owl-carousel');
			owlPost.owlCarousel({
				items: 1,
				autoplay: true,
				dots: false,
				loop: true
			});
		}
	}
	postsCarousel();
	$(window).on("load resize", postsCarousel);	

	$('.about-documents__slider').owlCarousel({
		loop: true,
		nav: false,
		margin: 10,
		dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		responsive: {
			0 : {
				items: 2
			},
			580 : {
				items: 4
			}
		}
	});
	$('.news__slider').owlCarousel({
		loop: true,
		nav: false,
		items: 4,
		margin: 30,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		responsive: {
			0 : {
				items: 1
			},
			660 : {
				items: 2
			},
			950 : {
				items: 3
			},
			1250 : {
				items: 4
			}
		}
	});
	$('.news__arrow .arrows__item.-prev').click(function(event) {
		event.preventDefault();
		$('.news__slider').trigger('prev.owl.carousel');
	});
	$('.news__arrow .arrows__item.-next').click(function(event) {
		event.preventDefault();
		$('.news__slider').trigger('next.owl.carousel');
	});
	$(".tabs__item").on("click", function() {
        let tab = $(this).attr("data-tab");
        $(".tabs__item, .tabs-info__item").removeClass("-active");
        $(this).addClass("-active");
        $(".tabs-info__item").each(function() {
            if ($(this).attr("data-tab") == tab) {
                $(this).addClass("-active");
            }
        });
    });
    $(".arrow-down").on("click", function() {
    	$(this).toggleClass("-active");
    	$(".sublist").slideToggle("fast");
    });
    $(".header-mobile__burger").on("click", function() {
    	$(this).toggleClass("-active");
    	$(".menu-mobile").toggleClass("-active");
    	$("html, body").toggleClass("-noscroll");	
    });
    $(".footer-mobile__title").on("click", function() {
    	$(this).toggleClass("-active");
    	console.log("click");
    	$(this).parent().find(".footer-mobile__desc").slideToggle("fast");
    });
});