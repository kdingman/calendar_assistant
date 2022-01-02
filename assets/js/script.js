// add date to top of screen
var today = moment();
$("#currentDay").text(today.format('dddd MMMM Do, YYYY'));

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

// Push and Pull Local Storage
var pushTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

var pullTasks = function() {
    var enteredTasks = JSON.parse(localStorage.getItem("tasks"));
        if(enteredTasks) {
            tasks = enteredTasks

            $.each(tasks, function(hour, task) {
                var hourTask = $("#" + hour);
                createTask(task, hourTask);
            })
        }
    // Double check all tasks are pulled and pushed
        checkTasks()
}

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