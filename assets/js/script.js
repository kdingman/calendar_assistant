// add date to top of page
var displayTime = document.querySelector("#currentDay");

var currentTime = moment();
    displayTime.textContent = currentTime.format("dddd, MMMM Do");

// button functions
$(".saveBtn").on("click", function() {
    var taskInfo = $(this).child(".description").val();
    var time = $(this).parent().attr("#id");

// local storage
    localStorage.setItem(taskInfo, time);
});

// add saved data from local storage
$("#7 .description").val(localStorage.getItem("7"));
$("#8 .description").val(localStorage.getItem("8"));
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
var time7 = 7;
var time8 = 8;
var time9 = 9;
var time10 = 10;
var time11 = 11;
var time12 = 12;
var time13 = 1;
var time14 = 2;
var time15 = 3;
var time16 = 4;
var time17 = 5;
var time18 = 6;
var time19 = 7;

var currentHour = moment().format('H');

// adding tasks past, present and future events
    // 7AM
    if(currentHour <time7) {
        $("#7-text").addClass("future");
    }
    else if(currentHour <time7){
        $("7-text").addClass("past");
    }
    else if(currentHour = time7){
        $("7-text").addClass("present");
    }

    // 8AM
    if(currentHour <time8) {
        $("#8-text").addClass("future");
    }
    else if(currentHour <time8){
        $("8-text").addClass("past");
    }
    else if(currentHour = time8){
        $("8-text").addClass("present");
    }

    // 9AM
    if(currentHour <time9) {
        $("#9-text").addClass("future");
    }
    else if(currentHour <time9){
        $("9-text").addClass("past");
    }
    else if(currentHour = time9){
        $("9-text").addClass("present");
    }

    // 10AM
    if(currentHour <time10) {
        $("#10-text").addClass("future");
    }
    else if(currentHour <time10){
        $("10-text").addClass("past");
    }
    else if(currentHour = time10){
        $("10-text").addClass("present");
    }

    // 11AM
    if(currentHour <time11) {
        $("#11-text").addClass("future");
    }
    else if(currentHour <time11){
        $("11-text").addClass("past");
    }
    else if(currentHour = time11){
        $("11-text").addClass("present");
    }

    // Noon
    if(currentHour <time12) {
        $("#12-text").addClass("future");
    }
    else if(currentHour <time12){
        $("12-text").addClass("past");
    }
    else if(currentHour = time12){
        $("12-text").addClass("present");
    }

    // 1PM
    if(currentHour <time13) {
        $("#13-text").addClass("future");
    }
    else if(currentHour <time13){
        $("13-text").addClass("past");
    }
    else if(currentHour = time13){
        $("13-text").addClass("present");
    }

    // 2PM
    if(currentHour <time14) {
        $("#14-text").addClass("future");
    }
    else if(currentHour <time14){
        $("14-text").addClass("past");
    }
    else if(currentHour = time14){
        $("14-text").addClass("present");
    }

    // 3PM
    if(currentHour <time15) {
        $("#15-text").addClass("future");
    }
    else if(currentHour <time15){
        $("15-text").addClass("past");
    }
    else if(currentHour = time15){
        $("15-text").addClass("present");
    }
    // 4PM
    if(currentHour <time16) {
        $("#16-text").addClass("future");
    }
    else if(currentHour <time16){
        $("16-text").addClass("past");
    }
    else if(currentHour = time16){
        $("16-text").addClass("present");
    }
    // 5PM
    if(currentHour <time17) {
        $("#17-text").addClass("future");
    }
    else if(currentHour <time17){
        $("17-text").addClass("past");
    }
    else if(currentHour = time17){
        $("17-text").addClass("present");
    }
    // 6PM
    if(currentHour <time18) {
        $("#18-text").addClass("future");
    }
    else if(currentHour <time18){
        $("18-text").addClass("past");
    }
    else if(currentHour = time18){
        $("18-text").addClass("present");
    }
    // 7PM
    if(currentHour <time19) {
        $("#19-text").addClass("future");
    }
    else if(currentHour <time19){
        $("19-text").addClass("past");
    }
    else if(currentHour = time19){
        $("19-text").addClass("present");
    }