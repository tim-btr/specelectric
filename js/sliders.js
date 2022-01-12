//SLIDERS
$('.slider').slick({
	dots: false,
	infinite: true,
	autoplay:true,
	speed: 300,
	prevArrow: '<button type="button" class="slick-prev _angle-left"></button>',
	nextArrow: '<button type="button" class="slick-next _angle-right"></button>',
	slidesToShow: 7,
	slidesToScroll: 1,
	responsive: [
		{
		breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		},
		{
		breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		}
	]
});

