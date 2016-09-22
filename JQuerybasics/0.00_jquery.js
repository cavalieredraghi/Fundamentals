$(document).ready(function(){
	// alert("Hello World!");

	$("#hide").click(function(){
		$("#image").hide();
	});
	$("#show").click(function(){
		$("#image").show();
	});
	$("#fadeIn").click(function(){
		$("#image").fadeIn(2000);
	});
	$("#explode").click(function(){
		$("#image").hide("explode",{pieces: 400}, 1000);
	});
	$("#bounce").click(function(){
		$("#image").hide("bounce",{ times: 3} , "slow");
	});
	$("#slide").click(function(){
		$("#image").show("slide");
	});
	$("#foldIn").click(function(){
		$("#image").hide("fold", 500).show("drop", {direction: "up"}, 500).hide("blind",500).show("slide");
	});
});

