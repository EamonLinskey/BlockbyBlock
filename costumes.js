var all_costumes_array = [];
var all_costumes = {"all_costumes": all_costumes_array};
var counter = 0;
var checkids = ["check0", "check1", "check2", "check3", "check4", "check5", "check6", "check7", "check8", "check9"];
var bools = [false, false, false, false, false, false, false, false, false, false];
var bools_obj = {"all_bools": bools};

function loadcostumes() {
    if (localStorage && localStorage.getItem("costume_bools")) {
        bools_obj = JSON.parse(localStorage.getItem("costume_bools"));
        bools = bools_obj["all_bools"];
    }

    for (var k = 0; k < checkids.length; k++) {
        var checkedid = "#" + checkids[k];
        $(checkedid).prop('checked', bools[k])
    }

    $("#check0").click(function() {
        bools[0] = !bools[0];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $("#check1").click(function() {
        bools[1] = !bools[1];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $("#check2").click(function() {
        bools[2] = !bools[2];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $("#check3").click(function() {
        bools[3] = !bools[3];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $("#check4").click(function() {
        bools[4] = !bools[4];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $("#check5").click(function() {
        bools[5] = !bools[5];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $("#check6").click(function() {
        bools[6] = !bools[6];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $("#check7").click(function() {
        bools[7] = !bools[7];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $("#check8").click(function() {
        bools[8] = !bools[8];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });
    $("#check9").click(function() {
        bools[9] = !bools[9];
        bools_obj = {"all_bools": bools};
        localStorage.setItem("costume_bools", JSON.stringify(bools_obj));
    });

}

$(document).ready(function() {
    if (localStorage && localStorage.getItem("costumes")) {
        all_costumes = JSON.parse(localStorage.getItem("costumes"));
        all_costumes_array = all_costumes["all_costumes"];
    }
    $("#addcostume1").click(function() {
        all_costumes_array.push($("#addcostumetext1").val());
        all_costumes = {"all_costumes": all_costumes_array};
        localStorage.setItem("costumes", JSON.stringify(all_costumes));
        counter++;
        $(".act1scene1costumes").append("<tr><td>" + $("#addcostumetext1").val() + "</td>" + 
            "<td align='center'>Act 1, Scene 1</td><td align='right'>" + 
            "<label><input id='" + checkids[counter] + "' class='checked' type='checkbox' value=''> Done</label></td>" + 
            "<td align='right'><button>Delete</button></td></tr>");
        loadcostumes();
    });
    for (var i in all_costumes) {
        for (var j in all_costumes[i]) {
            counter++;
            $(".act1scene1costumes").append("<tr><td>" + all_costumes[i][j] + "</td>" + 
                "<td align='center'>Act 1, Scene 1</td><td align='right'>" + 
                "<label><input id='" + checkids[counter] + "' class='checked' type='checkbox' value=''> Done</label></td>" + 
                "<td align='right'><button>Delete</button></td></tr>");
        }
        
    }
    loadcostumes();
});