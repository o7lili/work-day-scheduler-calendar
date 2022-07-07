// current date
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// start-up functions
$(document).ready(function () {
    // saveBtn click listener
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val().trim();
        var time = $(this).parent().attr("id").trim();

        // saves to localStorage
        localStorage.setItem(time, text);
    })

    
    function timeTracker() {
        // get current time
        var currentTime = moment().hour();
        
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            
            // time check to add css styles to time blocks for past, present, future
            if (blockHour < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (blockHour === currentTime) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }
            else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        })
    }

    // loads any saved tasks/description data
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})
