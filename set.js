// JavaScript for set.html page

// create variables used throughout file

// object to store sets
var all_sets;

// counter to add correct class when adding sets to the page
var counter = 0;

// array with all possible classes for sets
var checkids = ["check0", "check1", "check2", "check3", "check4", "check5", "check6", "check7", "check8", "check9"];

// array with booleans for each set class, and object to easily store in local storage
var bools = [false, false, false, false, false, false, false, false, false, false];
var bools_obj = {"all_bools": bools};


// function that runs the page after it has loaded
$(document).ready(function() {
    // this page only presents sets that have already been created on blocking page, so only run code if sets are stored in local storage
    if (localStorage && localStorage.getItem("sets")) {
        all_sets = JSON.parse(localStorage.getItem("sets"));

        // add sets to HTML table
        for (var i in all_sets) {
            for (var j in all_sets[i]) {
                counter++;
                $(".act1scene1sets").append("<tr><td>" + all_sets[i][j][1] + "</td>" +
                    "<td align='center' class='tablespace'><a href='blocking.html'>Act 1, Scene 1</a></td><td align='right'>" +
                    "<input class='" + checkids[counter] + "' class='checked' type='checkbox' value=''></td></tr>");
            }
            
        }

        // get booleans for done checkboxes from local storage, if exists
        if (localStorage && localStorage.getItem("set_bools")) {
            bools_obj = JSON.parse(localStorage.getItem("set_bools"));
            bools = bools_obj["all_bools"];
        }

        // set the done checkbox as checked or unchecked based on boolean for corresponding set
        for (var k = 0; k < checkids.length; k++) {
            var checkedid = "." + checkids[k];
            $(checkedid).prop('checked', bools[k])
        }

        // function for each possible set class that switches done checkbox upon click, and saves change in local storage
        $(".check0").click(function() {
            bools[0] = !bools[0];
            bools_obj = {"all_bools": bools};
            localStorage.setItem("set_bools", JSON.stringify(bools_obj));
        });
        $(".check1").click(function() {
            bools[1] = !bools[1];
            bools_obj = {"all_bools": bools};
            localStorage.setItem("set_bools", JSON.stringify(bools_obj));
        });
        $(".check2").click(function() {
            bools[2] = !bools[2];
            bools_obj = {"all_bools": bools};
            localStorage.setItem("set_bools", JSON.stringify(bools_obj));
        });
        $(".check3").click(function() {
            bools[3] = !bools[3];
            bools_obj = {"all_bools": bools};
            localStorage.setItem("set_bools", JSON.stringify(bools_obj));
        });
        $(".check4").click(function() {
            bools[4] = !bools[4];
            bools_obj = {"all_bools": bools};
            localStorage.setItem("set_bools", JSON.stringify(bools_obj));
        });
        $(".check5").click(function() {
            bools[5] = !bools[5];
            bools_obj = {"all_bools": bools};
            localStorage.setItem("set_bools", JSON.stringify(bools_obj));
        });
        $(".check6").click(function() {
            bools[6] = !bools[6];
            bools_obj = {"all_bools": bools};
            localStorage.setItem("set_bools", JSON.stringify(bools_obj));
        });
        $(".check7").click(function() {
            bools[7] = !bools[7];
            bools_obj = {"all_bools": bools};
            localStorage.setItem("set_bools", JSON.stringify(bools_obj));
        });
        $(".check8").click(function() {
            bools[8] = !bools[8];
            bools_obj = {"all_bools": bools};
            localStorage.setItem("set_bools", JSON.stringify(bools_obj));
        });
        $(".check9").click(function() {
            bools[9] = !bools[9];
            bools_obj = {"all_bools": bools};
            localStorage.setItem("set_bools", JSON.stringify(bools_obj));
        });

    }
});

