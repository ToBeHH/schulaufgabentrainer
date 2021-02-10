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

function reveal() {
	if (document.getElementById("reveal-button").style.opacity === "" || 
		document.getElementById("reveal-button").style.opacity == 1) {
		for(let elem of document.getElementsByClassName("reveal")) {
			elem.style.display = "unset";
		}
		for(let elem of document.getElementsByClassName("revealHide")) {
			elem.style.display = "none";
		}
		document.getElementById("reveal-button").style.opacity = 0.3;
	} else {
		for(let elem of document.getElementsByClassName("reveal")) {
			elem.style.display = "none";
		}
		for(let elem of document.getElementsByClassName("revealHide")) {
			elem.style.display = "unset";
		}
		document.getElementById("reveal-button").style.opacity = 1;
	}
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function add(max, section) {
	const already = new Array();
	const howmuch = Math.min(max, 100);
	let a,b,key;

	for (let i = 0; i < howmuch; i++) {
		do {
			a = Math.floor(Math.random() * max) + 1;
			b = Math.floor(Math.random() * (max - a)) + 1;
			key = a + "-" + b;
		} while (already.indexOf(key) !== -1 || a === max);

		$(section).append("<div class=\"t\">" + iFormat.format(a) + " + " + iFormat.format(b) + " = <span class=\"revealHide\">_______</span><span class=\"reveal\">" + iFormat.format(a+b) + "</span> </div>");
		already.push(key);
	}
}

function multi(max, section) {
	const already = new Array();
	let a,b,key;

	for (let i = 0; i < 100; i++) {
		do {
			a = Math.floor(Math.random() * max / 10) + 1;
			b = Math.floor(Math.random() * max / 10) + 1;
			key = a + "*" + b;
		} while (a * b > max || already.indexOf(key) !== -1);

		$(section).append("<div class=\"t\">" + a + " · " + b + " = <span class=\"revealHide\">_______</span><span class=\"reveal\">" + iFormat.format(a*b) + "</span> </div>");
		already.push(key);
	}
}

function sub(max, section) {
	const already = new Array();
	const howmuch = Math.min(max, 100);
	const iFormat = new Intl.NumberFormat('de-DE');
	let a,b,key;

	for (let i = 0; i < howmuch; i++) {
		do {
			a = Math.floor(Math.random() * max * 0.9) + (max * 0.1);
			b = Math.floor(Math.random() * (a - (max * 0.01))) + 1;
			key = a + "-" + b;
			if (a === b) {
				already.push(key);
			}
		} while (already.indexOf(key) !== -1);

		$(section).append("<div class=\"t\">" + iFormat.format(a) + " - " + iFormat.format(b) + " = <span class=\"revealHide\">_______</span><span class=\"reveal\">" + iFormat.format(a-b) + "</span> </div>");
		already.push(key);
	}
}

var icons = [["crow", "dove"],
	["fish", "fish fa-flip-horizontal"],
	["frog", "frog fa-flip-horizontal"],
	["horse", "horse fa-flip-horizontal"],
	["hippo", "hippo fa-flip-horizontal"],
	["motorcycle", "motorcycle fa-flip-horizontal"],
	["plane", "plane fa-flip-horizontal"],
	["running", "running fa-flip-horizontal"],
	["shuttle-van", "shuttle-van fa-flip-horizontal"],
	["skating", "skating fa-flip-horizontal"],
	["swimmer", "swimmer fa-flip-horizontal"],
	["tractor", "tractor fa-flip-horizontal"],
	["truck", "truck fa-flip-horizontal"],
	["walking", "walking fa-flip-horizontal"]];
var colors = ["colorNavy", "colorBlue", "colorOlive", "colorGreen", "colorRed", "colorOrange", 
	"colorPurple", "colorMaroon", "colorFuchsia", "colorBlack"];
const iFormat = new Intl.NumberFormat('de-DE');

function subWithIcons(max, section, count) {
	for (var i = 0; i < count; i++) {
		var iconIndex = Math.floor(Math.random() * icons.length);
		var colorIndex = Math.floor(Math.random() * colors.length);
		var a = Math.floor(Math.random() * max * 0.9) + (max * 0.1);
		do {
			b = Math.floor(Math.random() * (a - (max * 0.01))) + 1;
		} while (b < 1 || b >= a);

		var classesA = "";
		for (var j = 0; j < a; j++) {
			classesA += "<i class=\"fas fa-" + icons[iconIndex][0] + "\"></i>"
		}
		var classesB = "";
		for (var j = 0; j < b; j++) {
			classesB += "<i class=\"fas fa-" + icons[iconIndex][1] + "\"></i>"
		}
		classesB += "<i class=\"fas fa-align-left fa-separator\"></i>";
		for (var j = b; j < a; j++) {
			classesB += "<i class=\"fas fa-" + icons[iconIndex][0] + "\"></i>"
		}

		$(section).append("<div class=\"tFull group\"><div class=\"tImages tImages1 "
			+ colors[colorIndex] + "\">" + classesA + "</div>"
			+ "<div class=\"tImages tImages2 " + colors[colorIndex] + "\">" + classesB + "</div></div>"
			+ "<div class=\"tFull group\"><p><span class=\"revealHide\">_______</span><span class=\"reveal\">" + a 
			+ "</span> - <span class=\"revealHide\">_______</span><span class=\"reveal\">" + b 
			+ "</span> = <span class=\"revealHide\">_______</span><span class=\"reveal\">" + (a-b) + "</span></p></div>");
	}
}

if (typeof init === "function") {
	init();
}
