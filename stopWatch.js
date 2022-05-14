// stopWatch v1.0

// include "are you sure" before reset

var timeNow = {
    h: 0,
    m: 0,
    s: 0
  };
  
  var countInterval;
  
  function startTimer() {
    // start the timer
    counting = true;
    $('#stopBtn').prop("disabled", "");
    $('#startBtn').prop("disabled", "true");
    $('#resetBtn').prop("disabled", "true");
    countInterval = setInterval(count, 1000);
  }
  
  function stopTimer() {
    // stop the timer, but ask to confirm first
    if (!(areYouSure())) { return; }
    clearInterval(countInterval);
    $('#startBtn').prop("disabled", "");
    $('#stopBtn').prop("disabled", "true");
    $('#resetBtn').prop("disabled", "");
  }
  
  function areYouSure() {
    // let user confirm before stopping timer
    var sure = confirm("Are you sure?");
    return sure;
  }
  
  function showTime() {
    // put h/m/s together for display
    var hr, min, sec;
    if (timeNow.h < 1) {
      hr = "";
    }
    else {
      hr = "" + timeNow.h + ":";
    }
    if (timeNow.m < 1) {
      min = "00:";
    }
    else {
      if (timeNow.m < 10) {
        min = "" + "0" + timeNow.m + ":";
      }
      else {
        min = timeNow.m + ":";
      }
    }
    if (timeNow.s < 10) {
      sec = "" + "0" + timeNow.s;
    }
    else {
      sec = timeNow.s;
    }
    $('#timeDiv').html(hr + min + sec);
  }
  
  function count(){
    // increment the timer by 1s
    timeNow.s++;
    if (timeNow.s > 59) {
      timeNow.m++;
      timeNow.s = 0;
    }
    if (timeNow.m > 59) {
      timeNow.h++;
      timeNow.m = 0;
    }
    showTime();
  }
  
  function resetTimer() {
    // reset timer back to 0 after confirming
    if (!(areYouSure())) { return; }
    timeNow.h = 0;
    timeNow.m = 0;
    timeNow.s = 0;
    $('#resetBtn').prop("disabled", "true");
    showTime();
  }
  
  $(document).ready(function() {
    showTime();
    $('#startBtn').click(function() { startTimer(); });
    $('#stopBtn').click(function() { stopTimer(); });
    $('#resetBtn').click(function() { resetTimer(); });
    $('#stopBtn').prop("disabled", "true");
    $('#resetBtn').prop("disabled", "true");
  });
  
  // add days?
  