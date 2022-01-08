// add date and time to top of screen
$(document).ready(function() {
    $("#currentDay").text(moment().format('LLL'));
})
// button click
$(".saveBtn").on("click", function() {
    var task = $(this).child(".description").val();
    var hour = $(this).parent().attr("id");
})
// Set Military Time Array
var militaryTime = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// click button
var saveBtn = document.querySelector(".saveBtn");
    console.log(currentTime);

// Create loops to manage tasks with times, past, present, future
    function manageTasks(){
        $(".time-block").each(function(){
    // loop through time blocks
        if(currentTime > militaryTime) {
            $(this).classList.add(".past");
            $(this).classList.remove(".present");
            $(this).classList.remove(".future");
        }
        else if(currentTime < militaryTime) {
            $(this).classList.remove(".past");
            $(this).classList.remove(".present");
            $(this).classList.add(".future");
        }
        else {
            $(this).classList.remove(".past");
            $(this).classList.add(".present");
            $(this).classList.remove(".future");
        }
    });
    }
