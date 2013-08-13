$(function(){
	var x = $('.navbar .nav li a');

	x.click(function(){
		$('.navbar .nav li').addClass('active');
	});
});