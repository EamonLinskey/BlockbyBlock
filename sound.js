// JavaScript for sound.html page

// variable for storing all sound notes
var all_sounds;

// code to be executed when page loads
$(document).ready(function() {
	// check if sound notes exist in local storage
	if (localStorage && localStorage.getItem("sound")) {
		// load sound notes from local storage
    	all_sounds = JSON.parse(localStorage.getItem("sound"));

    	// add sound notes to the page
    	for (var i in all_sounds) {
    		$(".act1scene1sound").append("<tr><td class='tablespace' width='150px' align='left'>Act 1, Scene 1</td>" +
                "<td width='100px' align='center' class='tablespace'><a href='blocking.html'>" + i + "</a></td><td class='tablespace' align='left'>" + all_sounds[i] +  "</td></tr>");
    	}
  	}
});