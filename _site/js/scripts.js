
 $(document).ready(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	    elements = document.getElementsByClassName("blogVideo");
	    for (var i = 0; i < elements.length; i++) {
	        elements[i].setAttribute("controls","controls");
	    }
    }

    if ( $(window).width() > 700 ){
    	$(".lightbox").fluidbox({
        
	        closeTrigger: [
	            { selector: '#fluidbox-overlay', event: 'click'  },
	            { selector: 'window',            event: 'resize scroll' }
	        ]
    	
    	});

    	$(".blogVideo").on('click', function() {
    	$(this).toggleClass('small');

		});
  	}
	

});

