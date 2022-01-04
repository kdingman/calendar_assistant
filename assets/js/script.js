// add date to top of screen
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// save button clicks
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        //values
        var task = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");

        localStorage.setItem(task, hour);
    });
})

// Create Hour Task Objects
var tasks = {
    "7": [],
    "8": [],
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": [],
    "18": [],
    "19": [],
};


