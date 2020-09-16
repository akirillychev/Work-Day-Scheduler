$(document).ready(function () {
    
// keeps track of the current date and time using moment.js
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#dateTime").text(currentDate);


// Saving notes that are put in the text area 
$(".save-button").click(function () {
     console.log(this);
     console.log(value);
     
     var key = $(this).parent().attr("id");
     var value = $(this).siblings("textarea").val();

     console.log(value);
     localStorage.setItem(key, value);

})
  
var times = ["time-9", "time-10", "time-11", "time-12", "time-13", "time-14", "time-15", "time-16", "time-17", "time-18", "time-19"];
var displayPlanner = function () {
for (var i = 0; i < times.length; i++) {
var value = (localStorage.getItem(times[i]));
$(`#${times[i]} textarea`).val(value);
}

}
// Color past present and future times
function dispHour(){
     var currentHour = moment().hours();
     console.log("Hour: "+currentHour);

     $(".hour").each(function(){
          var blockHour = parseInt($(this).attr("id").split("-")[1]);

          if(blockHour  < currentHour){
               $(this).addClass("past");
          }
          else if(blockHour === currentHour){
               $(this).removeClass("past");
                $(this).addClass("present");
          }
          else{
               $(this).removeClass("past");
               $(this).removeClass("present");
               $(this).addClass("future");
          }
     })
}

displayPlanner();
dispHour();


    
});

 