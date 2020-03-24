$(document).ready(function(){
			
	if(window.matchMedia("(max-width: 1550px)").matches) {
		$("#fastmenu_trigger").hover(function(){
			$("#fastmenu").show("fast");
		},function(){
			
		});
		
		$("#fastmenu").hover(function(){
			console.log("in");
		},function(){
			console.log("out");
			$(this).hide("fast");
		});
		
		
		
		$("#fastnav_trigger").hover(function(){
			$("#fastnav").show("fast");
		},function(){
			
		});
		
		$("#fastnav").hover(function(){
			console.log("in");
		},function(){
			console.log("out");
			$(this).hide("fast");
		});
	}
	
	$('#nav').toc({
		'selectors': 'h3,h3,h4', //elements to use as headings
		'container': '#all', //element to find all selectors in
		'smoothScrolling': true, //enable or disable smooth scrolling on click
		'prefix': 'nav', //prefix for anchor tags and class names
		'onHighlight': function(el) {}, //called when a new section is highlighted 
		'highlightOnScroll': true, //add class to heading that is currently in focus
		'highlightOffset': 400, //offset to trigger the next headline
		'anchorName': function(i, heading, prefix) { //custom function for anchor name
			return prefix+i;
		},
		'headerText': function(i, heading, $heading) { //custom function building the header-item text
			return $heading.text();
		} 
	});
	
	$('#nav .nav-h3').click(function(){
		$(this).find('.nav-h5');
	});
});