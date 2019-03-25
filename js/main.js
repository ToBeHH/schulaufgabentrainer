/*-----------------------------------------------------------------------------------
/*
/* Main JS
/*
----------------------------------------------------------------------------------- */  

(function($) { 	


  	/* Mobile Menu
   ------------------------------------------------------ */  
  	var toggle_button = $("<a>", {                         
                        id: "toggle-btn", 
                        html : "Menu",
                        title: "Menu",
                        href : "#" } 
                        );
  	var nav_wrap = $('nav#nav-wrap')
  	var nav = $("ul#nav");  

  	/* if JS is enabled, remove the two a.mobile-btns 
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  	nav_wrap.find('a.mobile-btn').remove(); 
  	nav_wrap.prepend(toggle_button); 

  	toggle_button.on("click", function(e) {
   	e.preventDefault();
    	nav.show();     
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function(){
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('ul#nav li a').on("click", function(){      
   	  if (nav.hasClass('mobile')) nav.hide();      
  	});	

  	
  	/*	Back To Top Button
	------------------------------------------------------- */
	var pxShow = 300; //height on which the button will show

   // Show or hide the sticky footer button
	$(window).scroll(function() {

		if ($(window).scrollTop() >= pxShow) {
			$("#go-top").css("opacity", "1");
		} else {
			$("#go-top").css("opacity", "0");
		}

	});  


})(jQuery);

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}