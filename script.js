// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var lead = $(".lead");
var currentDay = $("#currentDay");
var hour8 = $("#hour8");
var hour9 = $("#hour9");
var hour10 = $("#hour10");
var hour11 = $("#hour11");
var hour12 = $("#hour12");
var hour13 = $("#hour13");
var hour14 = $("#hour14");
var hour15 = $("#hour15");
var hour16 = $("#hour16");
var hour17 = $("#hour17");
var saveBtn = $(".saveBtn");
var textArea = $(".testArea");

//display day function with added time display
function displayTime(){
  currentDay.text(dayjs().format("dddd, MMMM D, YYYY h:mm A"))
  }
  displayTime()
  setInterval(() =>{
      displayTime()
  }, 1000);  

//get data from local storage on load
$(document).ready(function(){
  for (var i = 8; i < 18; i++){
    $("#hour"+i).children("textarea").text(localStorage.getItem("hour"+i));
  }
});

//change the diplay by time
$(document).ready(function(){
  var hourNow = dayjs().format("HH");
  setInterval(() =>{
  console.log(hourNow);
  console.log("hour"+hourNow);
  for (var i = 0; i < 25; i++){
  if ("#hour"+i == hourNow){
    $("#hour"+i).removeClass("past");
    $("#hour"+i).removeClass("future");
    $("#hour"+i).addClass("present");
  }
  if ("#hour"+i >= hourNow){
    $("#hour"+i).removeClass("past");
    $("#hour"+i).removeClass("present");
    $("#hour"+i).addClass("future");
  }
  if ("#hour"+i <= hourNow){
    $("#hour"+i).removeClass("present");
    $("#hour"+i).removeClass("future");
    $("#hour"+i).addClass("past");
  }
}
}, 1000);
})

//Button click to save function
saveBtn.on("click", function(event){
  event.preventDefault()
 console.log($(this).prev(".description").val());
 console.log($(this).closest('div').attr('id'));
 var textValue = $(this).prev(".description").val();
 var textKey = $(this).closest('div').attr('id');

 if (textValue == ""){
  return;
 }
 else {
 localStorage.setItem(textKey,textValue);
 }
});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.