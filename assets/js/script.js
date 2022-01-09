// add date and time to top of screen
    $("#currentDay").text(moment().format('LLLL'));

    var saveBtn = $(".saveBtn");

        // Button Click
        saveBtn.on("click", function() {

            var hour = $(this).siblings(".hour").text();
            var userText = $(this).siblings(".description").val();
    
    // save to local storage
        JSON.parse(window.localStorage.setItem(hour, userText));
        JSON.parse(window.localStorage.getItem(hour, userText));
    });

        // upload any saved data from local storage
        $("#7 .description").val(localStorage.getItem("7:00AM"));
        $("#8 .description").val(localStorage.getItem("8:00AM"));
        $("#9 .description").val(localStorage.getItem("900AM"));
        $("#10 .description").val(localStorage.getItem("10:0AM"));
        $("#11 .description").val(localStorage.getItem("11:0AM"));
        $("#12 .description").val(localStorage.getItem("12:00PM"));
        $("#13 .description").val(localStorage.getItem("1:00PM"));
        $("#14 .description").val(localStorage.getItem("2:00PM"));
        $("#15 .description").val(localStorage.getItem("3:00PM"));
        $("#16 .description").val(localStorage.getItem("4:00PM"));
        $("#17 .description").val(localStorage.getItem("5:00PM"));
        $("#18 .description").val(localStorage.getItem("6:00PM"));
        $("#19 .description").val(localStorage.getItem("7:00PM"));
        
    // Manage Tasks, past, present, future
    function manageTasks() {
        var currentHour = moment().hour();

        $(".time-block").each(function() {
            var currentTime = parseInt($(this).attr("id"));
            
            if(currentTime > currentHour){
                $(this).addClass("future");
            }
            else if(currentTime === currentHour) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("past");
            }
        })
    };  
    manageTasks();

    var interval = setInterval(manageTasks, 19000);