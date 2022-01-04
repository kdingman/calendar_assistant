// add date to top of screen
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

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