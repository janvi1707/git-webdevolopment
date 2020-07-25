$(function(){
	$("#navbar-toggle collapsed").blur(function (event){
		var screennWidth = window.innerWidth;
		if(screenWidth < 768){
			$("#collapsable-nav").collapse('hide');
		}
	});
});