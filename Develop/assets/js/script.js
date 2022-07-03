// initial start-up, loads date and any previously saved data
$(document).ready(function () {
    // current date
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    // saveBtn click listener
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // saves to localStorage
        localStorage.setItem(time, text);
    })

    // loads any saved tasks/description data
    $("hour9" .description).val(localStorage.getItem("hour9"));
    $("hour10" .description).val(localStorage.getItem("hour10"));
    $("hour11" .description).val(localStorage.getItem("hour11"));
    $("hour12" .description).val(localStorage.getItem("hour12"));
    $("hour13" .description).val(localStorage.getItem("hour13"));
    $("hour14" .description).val(localStorage.getItem("hour14"));
    $("hour15" .description).val(localStorage.getItem("hour15"));
    $("hour16" .description).val(localStorage.getItem("hour16"));
    $("hour17" .description).val(localStorage.getItem("hour17"));
})