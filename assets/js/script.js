// add date and time to top of screen
$(document).ready(function() {
    $("#currentDay").text(moment().format('LLL'));
})
// button click
$(".saveBtn").on("click", function() {
    var task = $(this).child(".description").val();
    var hour = $(this).parent().attr("id");

    localStorage.setItem(hour, task);
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

// Set Military Time Array
var militaryTime = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

// Create loops to manage tasks with times, past, present, future
    function manageTasks(){
        var currentHour = moment().hour();

        $(".time-block").each(function(){
            var currentTime = parseInt($(this).attr("id").split("hour")[1]);
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
        })
    }