// JavaScript used on blocking.html page


//Dragging code comes from the Jquery Api exapmle page. http://jqueryui.com/draggable/#constrain-movement 
//Containment is where a draggable is restrained. helper: "clone" indicates that draggin it 
//creates a copy rather than moving it. 


// create variables necessary throughout file

// keep track of number, class, and position of the current piece
var set_count = 0;
var prop_count = 0;
var actor_count = 0;
var current_class;
var current_location;

// objects for storing all props, actors, and sets in local storage
var all_props = {};
var all_actors = {};
var all_sets = {};

// to keep track of whether current icon is prop, set, or actor
var icon_type;

// current line; initially set to the first line when page loads
var selected_line = "line1";

// objects for storing all notes, lights, and sounds in local storage
var all_notes = {};
var all_lights = {};
var all_sounds = {};

// array of ids for all line numbers
var line_nums = ["line1", "line2", "line3", "line4", "line5", "line6", "line7", "line8", "line9"];

// create objects for all props, actors, and sets for each line
for (var i = 0; i < 9; i++) {
  all_props[line_nums[i]] = {};
  all_actors[line_nums[i]] = {};
  all_sets[line_nums[i]] = {};
}

// the new HTML for adding things from local storage to the canvas
var newHTML;


// function for CLEAR button to remove all icons from canvas
function clear_all () {
    delete all_props[selected_line];
    delete all_actors[selected_line];
    delete all_sets[selected_line];
    $(".canvas-element").remove();
    all_props[selected_line] = {};
    all_actors[selected_line] = {};
    all_sets[selected_line] = {};
    localStorage.setItem("props", JSON.stringify(all_props));
    localStorage.setItem("actors", JSON.stringify(all_actors));
    localStorage.setItem("sets", JSON.stringify(all_sets));
  }

// majority of code, that only runs after page is loaded
$(document).ready(function() {

  // load any notes, lights, sound, props, actors, and sets from local storage
  if (localStorage && localStorage.getItem("gennotes")) {
    all_notes = JSON.parse(localStorage.getItem("gennotes"));
  }
  if (localStorage && localStorage.getItem("lights")) {
    all_lights = JSON.parse(localStorage.getItem("lights"));
  }
  if (localStorage && localStorage.getItem("sound")) {
    all_sounds = JSON.parse(localStorage.getItem("sound"));
  }
  if (localStorage && localStorage.getItem("props")) {
    all_props = JSON.parse(localStorage.getItem("props"));
  }
  if (localStorage && localStorage.getItem("actors")) {
    all_actors = JSON.parse(localStorage.getItem("actors"));
  }
  if (localStorage && localStorage.getItem("sets")) {
    all_sets = JSON.parse(localStorage.getItem("sets"));
  }

  // fill notes, lights, and sound boxes with text if they exist for line 1, else leave blank
  if (all_notes[selected_line]) {
      $("textarea#gen_notes").val(all_notes[selected_line]);
  }
    else {
      $("textarea#gen_notes").val("");
  }
  if (all_lights[selected_line]) {
    $("textarea#light_notes").val(all_lights[selected_line]);
  }
  else {
    $("textarea#light_notes").val("");
  }
  if (all_sounds[selected_line]) {
    $("textarea#sound_notes").val(all_sounds[selected_line]);
  }
  else {
    $("textarea#sound_notes").val("");
  }

  // if any props, sets, actors stored for line 1, add them to the canvas by creating divs for each
  if (all_props[selected_line] && all_sets[selected_line] && all_actors[selected_line])
  {
    $(".canvas-element").remove();
    for (var i in all_props[selected_line]) {
      newHTML = "<div class='draggable ui-widget-content prop ui-draggable ui-draggable-handle canvas-element " + all_props[selected_line][i][0] + "' style='" + all_props[selected_line][i][2] + "'> <img src='images/red_circle.png' alt='prop' class='icons'> <input type='text' name='PropName' value='" + all_props[selected_line][i][1] + "'></div>";
      $("#containment-wrapper").append(newHTML);
    }

    for (var i in all_sets[selected_line]) {
      newHTML = "<div class='draggable ui-widget-content set ui-draggable ui-draggable-handle canvas-element " + all_sets[selected_line][i][0] + "' style='" + all_sets[selected_line][i][2] + "'> <img src='images/house2.png' alt='set' class='icons'> <input type='text' name='SetName' value='" + all_sets[selected_line][i][1] + "'></div>";
      $("#containment-wrapper").append(newHTML);
    }

    for (var i in all_actors[selected_line]) {
      newHTML = "<div class='draggable ui-widget-content actor ui-draggable ui-draggable-handle canvas-element " + all_actors[selected_line][i][0] + "' style='" + all_actors[selected_line][i][2] + "'> <img src='images/person.png' alt='actor' class='icons'> <input type='text' name='ActorName' value='" + all_actors[selected_line][i][1] + "'></div>";
      $("#containment-wrapper").append(newHTML);
    }
  }

  // handle highlighting/selection of different lines when clicking on a line
  var addclass = 'selected';
  var $cols = $('.line').click(function(e) {
    // change which line is selected
    $cols.removeClass(addclass);
    $(this).addClass(addclass);
    selected_line = $(this).attr("id");
    
    // fill notes, lights, and sound boxes with text if they exist for selected line, else leave blank
    if (all_notes[selected_line]) {
      $("textarea#gen_notes").val(all_notes[selected_line]);
    }
    else {
      $("textarea#gen_notes").val("");
    }
    if (all_lights[selected_line]) {
      $("textarea#light_notes").val(all_lights[selected_line]);
    }
    else {
      $("textarea#light_notes").val("");
    }
    if (all_sounds[selected_line]) {
      $("textarea#sound_notes").val(all_sounds[selected_line]);
    }
    else {
      $("textarea#sound_notes").val("");
    }

    // if any props, sets, actors stored for selected line, add them to the canvas by creating divs for each
    if (all_props[selected_line] && all_sets[selected_line] && all_actors[selected_line])
    {
      $(".canvas-element").remove();
      for (var i in all_props[selected_line]) {
        newHTML = "<div class='draggable ui-widget-content prop ui-draggable ui-draggable-handle canvas-element " + all_props[selected_line][i][0] + "' style='" + all_props[selected_line][i][2] + "'> <img src='images/red_circle.png' alt='prop' class='icons'> <input type='text' name='PropName' value='" + all_props[selected_line][i][1] + "'></div>";
        $("#containment-wrapper").append(newHTML);
      }

      for (var i in all_sets[selected_line]) {
        newHTML = "<div class='draggable ui-widget-content set ui-draggable ui-draggable-handle canvas-element " + all_sets[selected_line][i][0] + "' style='" + all_sets[selected_line][i][2] + "'> <img src='images/house2.png' alt='set' class='icons'> <input type='text' name='SetName' value='" + all_sets[selected_line][i][1] + "'></div>";
        $("#containment-wrapper").append(newHTML);
      }

      for (var i in all_actors[selected_line]) {
        newHTML = "<div class='draggable ui-widget-content actor ui-draggable ui-draggable-handle canvas-element " + all_actors[selected_line][i][0] + "' style='" + all_actors[selected_line][i][2] + "'> <img src='images/person.png' alt='actor' class='icons'> <input type='text' name='ActorName' value='" + all_actors[selected_line][i][1] + "'></div>";
        $("#containment-wrapper").append(newHTML);
      }
    }
  });

  // all of the draggable blocking functionality
  $( function() {
    // make existing prop, set, and actor icons draggable by making clones to add new pieces to blocking
    $( ".prop" ).draggable({ containment: "#containment-wrapper", scroll: false, helper: "clone" })
    $( ".set" ).draggable({ containment: "#containment-wrapper", scroll: false, helper: "clone"  })
    $( ".actor" ).draggable({ containment: "#containment-wrapper", scroll: false, helper: "clone"  });
    
    // This function lets us drop the icons in the containment area
    $("#containment-wrapper").droppable({
    drop: function (event, ui) {
      var $canvas = $(this);
      
      // This lets only the clone be dropped in
      if (!ui.draggable.hasClass('canvas-element')) {
        var $canvasElement = ui.draggable.clone();
        $canvasElement.addClass('canvas-element');

        // identify prop has been added
        if (ui.draggable.hasClass('prop'))
        {
          current_class = 'prp' + prop_count;
          $canvasElement.addClass(current_class);
          prop_count++
          icon_type="prop"
        }

        // identify set has been added
        if (ui.draggable.hasClass('set'))
        {
          current_class = 'set' + set_count;
          $canvasElement.addClass(current_class);
          set_count++
          icon_type="set"
        }

        // identify actor has been added
        if (ui.draggable.hasClass('actor'))
        {
          current_class ='act' + actor_count;
          $canvasElement.addClass(current_class);
          actor_count++
          icon_type="actor"
        }
        
        $canvasElement.draggable({
            containment: '#containment-wrapper'
        });

        $canvas.append($canvasElement);
        
        // Sets the new postion in the DOM
        $canvasElement.css({
            left: (ui.position.left),
            top: (ui.position.top),
            position: 'absolute'
        });

        // handles saving of current configuration for current line when an icon is clicked
        $('.icons').click(function() {
          // get class and position of icon that has been clicked
          var all_classes = $(this).closest('div').prop('class');
          current_class = all_classes.substr(all_classes.length - 4);
          current_location = $(this).closest('div').prop('style');

          var input_class = "." + current_class + " input";

          // store all necessary info about current item in array
          var item_info = [current_class, $(input_class).val(), current_location['cssText'], done="no"];
          
          // add array to the prop, actor, or set object for the current line and save in local storage
          if (icon_type == "prop") {
            all_props[selected_line][current_class] = item_info;
            localStorage.setItem("props", JSON.stringify(all_props));
          }
          if (icon_type == "actor") {
            all_actors[selected_line][current_class] = item_info;
            localStorage.setItem("actors", JSON.stringify(all_actors));
          }
          if (icon_type == "set") {
            all_sets[selected_line][current_class] = item_info;
            localStorage.setItem("sets", JSON.stringify(all_sets));
          }
        });
      }
    }
    });
  });

  // This function lets us clear icons moved to the trash
  $( function() {
     $('#trash').droppable({
        drop: function(event, ui) {
          // This line makes it so we can only delete the clones
          if (ui.draggable.hasClass('canvas-element'))
          ui.draggable.remove();

          // delete icons that were moved to trash from local storage
          if (icon_type == "prop") {
            delete all_props[selected_line][current_class];
            localStorage.setItem("props", JSON.stringify(all_props));
          }
          if (icon_type == "actor") {
            delete all_actors[selected_line][current_class];
            localStorage.setItem("actors", JSON.stringify(all_actors));
          }
          if (icon_type == "set") {
            delete all_sets[selected_line][current_class];
            localStorage.setItem("sets", JSON.stringify(all_sets));
          }
        }
      })
   });

  // update local storage whenever notes, lights, or sound text is edited for selected line
  $("textarea#gen_notes").change(function () {
    all_notes[selected_line] = $("textarea#gen_notes").val();
    localStorage.setItem("gennotes", JSON.stringify(all_notes));
  })

  $("textarea#light_notes").change(function () {
    all_lights[selected_line] = $("textarea#light_notes").val();
    localStorage.setItem("lights", JSON.stringify(all_lights));
  })

  $("textarea#sound_notes").change(function () {
    all_sounds[selected_line] = $("textarea#sound_notes").val();
    localStorage.setItem("sound", JSON.stringify(all_sounds));
  })
})