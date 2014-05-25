 var jway = {
 	"colors" : {
 		"blue" : "#2BB6FF",
 		"orange" : "#F99A0B",
 		"white" : "#FFFFFF",
 	}
 };


 $(document).ready(function() {

 	//Initialize fullpage plugin
	$('#fullpage').fullpage({
		anchors: ['jway', 'how','benefits','product','contact'],
		slidesColor: [
						jway.colors.blue, 
						jway.colors.white, 
						jway.colors.orange,
						jway.colors.white,
						jway.colors.blue
					],
		css3: true,
		autoScrolling:true,
		touchSensitivity:10
	});


	//Setup our links
	$(window).hashchange(function(){

	});

});