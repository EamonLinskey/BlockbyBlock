// JavaScript for lights.html page

// variable for storing all lights
var all_lights;

// code to be executed when page loads
$(document).ready(function() {
	// check for light notes saved in local storage
	if (localStorage && localStorage.getItem("lights")) {
		// load light notes form local storage
    	all_lights = JSON.parse(localStorage.getItem("lights"));
    	console.log(all_lights)
    	// add existing light notes to the page
    	for (var i in all_lights) {
    		$(".act1scene1lights").append("<tr><td class='tablespace' width='150px' align='left'>Act 1, Scene 1</td>" +
    			"<td width='100px' align='center' class='tablespace'><a href='blocking.html'>" + i + "</a></td><td class='tablespace' align='left'>" + all_lights[i] +  "</td></tr>");
    	}
  	}
});