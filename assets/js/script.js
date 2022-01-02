// add date to top of page
var displayTime = document.querySelector("#currentDay");

var currentTime = moment();
    displayTime.textContent = currentTime.format("MMMM DO, YYYY ");

// button functions
$(".saveBtn").on("click", function() {
    var taskInfo = $(this).child(".description").val();
    var time = $(this).parent().attr("#id");

// local storage
    localStorage.setItem(taskInfo, time);
});