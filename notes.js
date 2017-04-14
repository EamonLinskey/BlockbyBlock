// JavaScript for notes.html page

// variable for storing all notes
var all_notes;

// code to be executed when page loads
$(document).ready(function() {
	// check for notes saved in local storage
	if (localStorage && localStorage.getItem("gennotes")) {
		// load notes form local storage
    	all_notes = JSON.parse(localStorage.getItem("gennotes"));

    	// add existing notes to the page
    	for (var i in all_notes) {
    		$(".act1scene1text").append("<tr><td class='tablespace'>" + 
                "<a href='blocking.html'>Act 1, Scene 1</a></td>" +
                "<td class='tablespace' align='left'>" + all_notes[i] + 
                "</td><td align='center' class='tablespace'> </td></tr>");
    	}
  	}
});