var all_lights;

$(document).ready(function() {
	if (localStorage && localStorage.getItem("lights")) {
    	all_lights = JSON.parse(localStorage.getItem("lights"));
    	for (var i in all_lights) {
    		$(".act1scene1lights").append("<tr><td class='pageRow'>I.1</td>" + 
    			"<td class='pageRow'>" + i + "</td><td class='pageRow'>" + all_lights[i] +  "</td></tr>");
    	}
  	}
});