var roles = ["CS Student", "NYU 2019", "Software Engineer"];

$( document ).ready(function() {
	var animation = $('#animation');
	for(var i=0; i<roles.length; i++) {
		console.log(i)
		animation.text(i);
		animation.css('opacity', 0);
		animation.css('top', '-20px');
		animation.animate({top: '0', opacity: 1}, 500);
		animation.animate({top: '0', opacity: 1}, 1500);
		animation.animate({top: '20px', opacity: 0}, 500);
		i++;
	}
	
});