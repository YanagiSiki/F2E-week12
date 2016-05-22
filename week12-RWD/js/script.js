$(document).ready(function(){

	$(window).bind('scroll', function() {
			var navHeight = $(window).height() - 300;
			if ($(window).scrollTop() > navHeight) {
					$('.navbar-default').addClass('on');
			} else {
					$('.navbar-default').removeClass('on');
			}
	});

});
