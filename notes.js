var all_notes;

$(document).ready(function() {
	if (localStorage && localStorage.getItem("gennotes")) {
    	all_notes = JSON.parse(localStorage.getItem("gennotes"));
    	for (var i in all_notes) {
    		$(".act1scene1text").append("<li>" + all_notes[i] +  "</li>");
    	}
  	}
});