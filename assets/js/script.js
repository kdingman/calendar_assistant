// add date and time to top of screen
var currentDayTime = moment().format('LLLL');

// Hour Variable
var hour7 = "7:00AM";
var hour8 = "8:00AM";
var hour9 = "9:00AM";
var hour10 = "10:00AM";
var hour11 = "11:00AM";
var hour12 = "12:00PM";
var hour13 = "1:00PM";
var hour14 = "2:00PM";
var hour15 = "3:00PM";
var hour16 = "4:00PM";
var hour17 = "5:00PM";
var hour18 = "6:00PM";
var hour19 = "7:00PM";


var currentHour = moment().hour();
var currentTask;
var currentTime;

// local storage
function initPage () {
    var init7 = JSON.parse(localStorage.getItem("7:00AM"));
        hour7.val(init7);
    
    var init8 = JSON.parse(localStorage.getItem("8:00AM"));
        hour8.val(init8);

    var init9 = JSON.parse(localStorage.getItem("9:00AM"));
        hour9.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00AM"));
        hour10.val(init10);
    
    var init11 = JSON.parse(localStorage.getItem("11:00AM"));
        hour11.val(init11);

    var init12 = JSON.parse(localStorage.getItem("12:00PM"));
        hour12.val(init12);

    var init13 = JSON.parse(localStorage.getItem("1:00PM"));
        hour13.val(init13);

    var init14 = JSON.parse(localStorage.getItem("2:00PM"));
        hour14.val(init14);

    var init15 = JSON.parse(localStorage.getItem("3:00PM"));
        hour15.val(init15);

    var init16 = JSON.parse(localStorage.getItem("4:00PM"));
        hour16.val(init16);

    var init17 = JSON.parse(localStorage.getItem("5:00PM"));
        hour17.val(init17);

    var init18 = JSON.parse(localStorage.getItem("6:00PM"));
        hour18.val(init18);

    var init19 = JSON.parse(localStorage.getItem(7:00PM));
        hour19.val(init19);
}

// Create loops to manage tasks with times, past, present, future
    function manageTasks(){
        

        $(".time-block").each(function(){
            var currentTime = parseInt($(this).attr("id").split("hour")[1]);
            // loop through time blocks
            if(currentTime < militaryTime) {
                $(this).addClass(".past");
                $(this).removeClass(".present");
                $(this).removeClass(".future");
            }
            else if(currentTime === militaryTime) {
                $(this).removeClass(".past");
                $(this).addClass(".present");
                $(this).removeClass(".future");
            }
            else {
                $(this).removeClass(".past");
                $(this).removeClass(".present");
                $(this).addClass(".future");
            }
        })
    }
        manageTasks();