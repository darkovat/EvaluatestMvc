/**************** funcion para fullscreen de una imagen ***************************/
$(function() {   
		
	var theWindow        = $("#banner"),
	    $bg              = $("#bg"),
	    aspectRatio      = $bg.width() / $bg.height();
	    			    		
	function resizeBg() {
		
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}
					
	}
	                   			
	theWindow.resize(function() {
		resizeBg();
	}).trigger("resize");

});

$(function(){

	$('.seccion').hide();
	$('#descripcion').show();
	var anterior = 'descripcion';

	$('#menu-sidebar li a').click(function(e){
		e.preventDefault();
		var id = $(this).attr('section');
		$('#menu-sidebar li').removeClass('active');
		$(this).parent().addClass('active');
		$('#'+anterior).fadeOut('slow', function(){
			$('#'+id).fadeIn('slow');
		});
		
		anterior = id;
		e.stopPropagation();

	});
});