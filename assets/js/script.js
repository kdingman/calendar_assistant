// add date and time to top of screen
var currentTime = moment().hour();
// Set Military Time Array
var militaryTime = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// click button
var saveBtn = document.querySelector(".saveBtn");
    console.log(currentHour);

// Create loops to manage tasks with times, past, present, future
    document.querySelector("#currentDay").textContent = moment().format('LLL');

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
