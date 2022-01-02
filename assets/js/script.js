// add date to top of screen
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

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
