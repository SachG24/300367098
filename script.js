// get the date from the input field
function getDate() {
    var x = document.getElementById("birthday").value;
    return x;
}

// start the countdown
function start() {
var x = setInterval(function(){

  var now = new Date().getTime();
  var goal = new Date (getDate()).getTime();
  var timeBetween = goal - now;
  if(timeBetween < 0){
    alert("Date Expired");
  }
  else{

  var days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeBetween % (1000 * 60)) / 1000);
  var dicsecs =  ((timeBetween%1000) /1000).toPrecision(1);

  

  document.getElementById("demo").innerHTML = days + "days " + hours + "hours "
  + minutes + "minutes " + seconds + "seconds " + dicsecs + "dicsecs";
  }

  
}, 100);
}

