$(document).ready(function() {
	$('.fader').fadeIn('fast');
	$('.fader').css('display', 'inline-block');

	$('#one_geo').click(function() {
		$('.fader').fadeOut('fast');
	});

	$('#one_remember').click(function() {
		$('.fader').fadeOut('fast');
	});
});