import './index.scss';

$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-overlay').addClass('active');
		$('body').addClass('popup-open-body');
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-overlay').removeClass('active');
		$('body').removeClass('popup-open-body');
		return false;
	});		

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-overlay').removeClass('active');
		}
	});
	
	$('.popup-overlay').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).removeClass('active');
			$('body').removeClass('popup-open-body');
		}
	});

});


$('.js-slick').slick({

	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	infinite:true,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true,
		}
	  },
	  {
		breakpoint: 820,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 3000,
		  arrows: false,
		}
	  }
	]
});












console.log('Boilerplate is working!');