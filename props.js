var all_props;
var counter = 0;

$(document).ready(function() {
	if (localStorage && localStorage.getItem("props")) {
    	all_props = JSON.parse(localStorage.getItem("props"));
    	for (var i in all_props) {
    		counter++;
    		var checkid = "check" + counter;
    		for (var j in all_props[i]) {
	    		$(".act1scene1props").append("<tr><td>" + all_props[i][j][1] + "</td>" + 
	    			"<td align='center'>Act 1, Scene 1</td><td align='right'>" + 
	    			"<label><input class='checked' type='checkbox' value=''> Done</label></td></tr>");
    		}
    		
    	}
  	}
});
