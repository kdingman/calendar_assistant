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

// Work with Tasks
var createTask = function(taskText, hourTask) {
    var taskTasks = hourTask.find(".task");
    var taskPlace = $("<p>")
        .addClass("description")
        .text(taskText)
    hourTask.html(taskPlace);
}

var checkTasks = function() {

    var currentHour = moment().hour();
        $(".task-info").each(function () {
            var taskHour = parseInt($(this).attr("id"));

        // past, present, future tasks
        if(taskHour < currentHour) {
            $(this).removeClass(["present", "future"]).addClass("past");
        }
        else if(taskHour === currentHour) {
            $(this).removeClass(["past", "future"]).addClass("present");
        }
        else {
            $(this).removeClass(["past", "present"]).addClass("future");
        }
    })
};

var returnTextArea = function(textareaElement) {
    var taskInfo = textareaElement.closest(".task-info");
    var textArea = taskInfo.find("textarea");

    var hour = taskInfo.attr("id");
    var text = textArea.val().trim();

    tasks [hour] = [text];
    pushTasks();

    createTask(text, taskInfo);
}
