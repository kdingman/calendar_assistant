// add date to top of screen
var today = moment();
$("#currentDay").text(today.format('dddd MMMM Do, YYYY'));

// save button clicks
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        //values
        var task = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");

        localStorage.setItem(task, hour);
    })
    // load saved information from local storage
    $("#7 .description").val(localStorage.getItem("7"));
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .descrption").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));
    $("#19 .description").val(localStorage.getItem("19"));
});

// save button clicks
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        //values
        var task = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");

        localStorage.setItem(task, hour);
    })
    // load saved information from local storage
    $("#7 .description").val(localStorage.getItem("7"));
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .descrption").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));
    $("#19 .description").val(localStorage.getItem("19"));
});

// Create Hour Task Objects
var taskTimes = {
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

function timeTracker() {

    // check on current time
    var currentTime = moment().hour();

    // loop through time blocks
    $(".time-block").each(function() {
        var taskTimes = parseInt($(this).attr("id").split("hour")[1]);
        console.log(taskTimes, currentTime)

        // past, present, future via HTML and CSS
        if(taskTimes < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if(taskTimes === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })

    }
        timeTracker();

    // check current time
    var duration = setInterval(timeTracker, 15000);