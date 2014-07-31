$(document).ready(function() {
	$('.choice').fadeIn('fast');
	$('.choice').css('display', 'inline-block');

	$('#one_geo').click(function() {
		$('.choice').fadeOut('fast');
	});

	$('#one_remember').click(function() {
		$('.choice').fadeOut('fast');
	});
});