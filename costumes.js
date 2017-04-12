// JavaScript used on costumes.html page

// create variables used throughout file

// array and object to store costumes, in good format for local storage
var all_costumes_array = [];
var all_costumes = {"all_costumes": all_costumes_array};

// counter to add correct class when adding costumes to the page
var counter = 0;

// array with all possible classes for costumes
var checkids = ["check0", "check1", "check2", "check3", "check4", "check5", "check6", "check7", "check8", "check9"];

// array with booleans for each costume class, and object to easily store in local storage
var bools = [false, false, false, false, false, false, false, false, false, false];
var bools_obj = {"all_bools": bools};


// function to handle done checkbox
function loadcostumes() {
    // load any saved checkboxes that exist in local storage
    if (localStorage && localStorage.getItem("costume_bools")) {
        bools_obj = JSON.parse(localStorage.getItem("costume_bools"));
        bools = bools_obj["all_bools"];
    }

    // set the done checkbox as checked or unchecked based on boolean for corresponding costume
    for (var k = 0; k < checkids.length; k++) {
        var checkedid = "." + checkids[k];
        $(checkedid).prop('checked', bools[k])
    }

    // function for each possible costume class that switches done checkbox upon click, and saves change in local storage
    $(".check0").click(function() {
        bools[0] = !bools[0];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $(".check1").click(function() {
        bools[1] = !bools[1];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $(".check2").click(function() {
        bools[2] = !bools[2];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $(".check3").click(function() {
        bools[3] = !bools[3];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $(".check4").click(function() {
        bools[4] = !bools[4];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $(".check5").click(function() {
        bools[5] = !bools[5];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $(".check6").click(function() {
        bools[6] = !bools[6];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $(".check7").click(function() {
        bools[7] = !bools[7];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $(".check8").click(function() {
        bools[8] = !bools[8];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $(".check9").click(function() {
        bools[9] = !bools[9];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });

}

// function that runs the page after it has loaded
$(document).ready(function() {
    // load in costumes from local storage
    if (localStorage && localStorage.getItem("costumes")) {
        all_costumes = JSON.parse(localStorage.getItem("costumes"));
        all_costumes_array = all_costumes["all_costumes"];
    }

    // add costume when "add" button clicked
    $("#addcostume1").click(function() {
        // add costume to array and object, to then save in local storage
        all_costumes_array.push($("#addcostumetext1").val());
        all_costumes = {"all_costumes": all_costumes_array};
        localStorage.setItem("costumes", JSON.stringify(all_costumes));
        
        // incredment counter
        counter++;

        // add the new costume to the table with all costumes
        $(".act1scene1costumes").append("<tr><td>" + $("#addcostumetext1").val() + "</td>" + 
            "<td align='center'>Act 1, Scene 1</td><td align='right'>" + 
            "<label><input class='" + checkids[counter] + "' class='checked' type='checkbox' value=''> Done</label></td>" + 
            "<td align='right'><button>Delete</button></td></tr>");
        
        // load costumes to properly handle done checkbox
        loadcostumes();
    });

    // add all the costumes from local storage to the page
    for (var i in all_costumes) {
        for (var j in all_costumes[i]) {
            counter++;
            $(".act1scene1costumes").append("<tr><td>" + all_costumes[i][j] + "</td>" + 
                "<td align='center'>Act 1, Scene 1</td><td align='right'>" + 
                "<label><input class='" + checkids[counter] + "' class='checked' type='checkbox' value=''> Done</label></td>" + 
                "<td align='right'><button>Delete</button></td></tr>");
        }
        
    }

    // load costumes to properly handle done checkbox
    loadcostumes();
});