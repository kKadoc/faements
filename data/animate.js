$(document).ready(function() {
	$("body").css("display", "none");
 
	$("body").fadeIn(500);
 
	$("#fastmenu a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(200, redirectPage);      
	});
		 
	function redirectPage() {
		window.location = linkLocation;
	}
});