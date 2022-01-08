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
