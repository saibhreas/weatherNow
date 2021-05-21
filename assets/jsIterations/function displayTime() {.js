function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDispEl.text(rightNow);
  var present = rightNow.substring(0,6);
  console.log(present)
  
  //console.log ("my check of check " + check);
  return check;


  
}
setInterval(displayTime, 1000);









