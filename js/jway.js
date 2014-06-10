 var jway = {
 	"colors" : {
 		"blue" : "#2BB6FF",
 		"orange" : "#F99A0B",
 		"white" : "#FFFFFF",
 	}
 };


 $(document).ready(function() {

 	 function setActiveNavBarLink() {
	 	var hash = window.location.hash;
	 	if (hash == "") { hash = "#jway";}
		$(".navbar-link a").removeClass("blue-text");
		$("[href='"+hash+"']").addClass("blue-text");
	 }

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

	$(window).on("hashchange", function(){
			
		setActiveNavBarLink();

	});

	setActiveNavBarLink();

});