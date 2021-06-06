// Scrollspy
// var spy = new Gumshoe('nav a');
// Burger
    $('.burger').on('click', function (event) {
        $('.navigation-bar').slideToggle('200');
    })

// Sticky navbar
$(document).ready(function(){
	$(window).bind('scroll', function() {
		var navHeight = $('header').height();
		if ($(window).scrollTop() > navHeight) {
			$('header').addClass('fixed');
		 }
		else {
			$('header').removeClass('fixed');
		 }
	});
});

    // Reveal animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '20px',
        duration: 1500,
        reset: true
    });
    ScrollReveal().reveal('.col-left, .content-col', { origin: 'left' });
    ScrollReveal().reveal('.col-right, .content-col-image', { origin: 'right' });
    ScrollReveal().reveal('.item', { interval: 500 });

   



