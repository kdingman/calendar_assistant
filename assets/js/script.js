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

// add saved data from local storage
$("#7 .description").val(localStorage.getItem("7"));
$("#8" .description).val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
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
$("#20 .description").val(localStorage.getItem("20"));

// Changing Time to correct format
var hour7 = 7;
var hour8 = 8;
var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour13 = 1;
var hour14 = 2;
var hour15 = 3;
var hour16 = 4;
var hour17 = 5;
var hour18 = 6;
var hour19 = 7;

var currentHour = moment().format('H');

