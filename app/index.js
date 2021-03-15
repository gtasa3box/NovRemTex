import './index.scss';



$('.js-slick').slick({

	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 6,
	slidesToScroll: 3,
	infinite:true,
	arrows: false,
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

	$(document).ready(function() {
		$(".popup").fancybox();
	});












console.log('Boilerplate is working!');