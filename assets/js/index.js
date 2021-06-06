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




