$(document).ready(function(){

	$(document).on("click", "button", function(){
		$("#right").append(
			"<div class='contactCard'><h1>"
			+$("#firstName").val()+" "
			+$("#lastName").val()+
			"</h1><h3>Click for Descriptions</h3><p class='hide'>"
			+$("#description").val()+"</p></div>");

			$(".hide").hide();
			
			$("input").val("");
			$("#description").val("");
	});

	$(document).on("click", ".contactCard", function(){
		$(this).children("p").toggle();
	});


});	