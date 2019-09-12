$(document).ready(function($) {
	console.log("hello jquery");

	$(".ancla").click(function(evento){
 		evento.preventDefault();
     
		var codigo = "#" + $(this).data("ancla");
		console.log(codigo);
		$("html,body").animate({scrollTop: $(codigo).offset().top}, 1000);
    });
});



