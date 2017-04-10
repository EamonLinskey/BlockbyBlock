var all_sounds;

$(document).ready(function() {
	if (localStorage && localStorage.getItem("sound")) {
    	all_sounds = JSON.parse(localStorage.getItem("sound"));
    	for (var i in all_sounds) {
    		$(".act1scene1sound").append("<tr><td class='pageRow'>I.1</td>" + 
    			"<td class='pageRow'>" + i + "</td><td class='pageRow'>" + all_sounds[i] +  "</td></tr>");
    	}
  	}
});