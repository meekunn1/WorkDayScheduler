// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");

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
  for (var i = 0; i < 25; i++){
  if (i == hourNow){
    $("#hour"+i).removeClass("past");
    $("#hour"+i).removeClass("future");
    $("#hour"+i).addClass("present");
  }
  if (i >= hourNow){
    $("#hour"+i).removeClass("past");
    $("#hour"+i).removeClass("present");
    $("#hour"+i).addClass("future");
  }
  if (i <= hourNow){
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
 var textValue = $(this).prev(".description").val().trim();
 var textKey = $(this).closest('div').attr('id');
 localStorage.setItem(textKey,textValue);
});
