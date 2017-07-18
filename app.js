function on(){
  console.log("hi");
  var time = 60;

  var downloadTimer = setInterval(function() {
  time--;
  // Display the result in the element with id="demo"
  document.getElementById("test").innerHTML = time;

  // If the count down is finished, write some text 
  if (time < 0) {
    clearInterval(downloadTimer);
    document.getElementById("test").innerHTML = "EXPIRED";
  }
  }, 1000);
}

