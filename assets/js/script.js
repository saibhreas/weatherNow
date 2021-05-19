var timeDispEl= $("#time-display");


// A $( document ).ready() block.
$(document ).ready(function() {
    console.log( "ready!" );
  displayTime()

  function displayTime() {
   var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
   console.log(typeof rightNow);
    timeDispEl.text(rightNow);
    var present = rightNow.substring(0,0);
    var check = parseInt(present);
   console.log("this is check's value ",check);
  
    return check;
  }


});


displayTime();
setInterval(displayTime, 1000);

