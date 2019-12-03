'use strict'

document.addEventListener("DOMContentLoaded", function() {















  let bDays = document.getElementById('days');
  let bHours = document.getElementById('hours');
  let bMinutes = document.getElementById('min');
  let bSeconds = document.getElementById('sec');


  console.log(bDays);
  console.log(bHours);



  var target_date = new Date().getTime() + (10000*3600*48); // установить дату обратного отсчета
  var days, hours, minutes, seconds;



  getCountdown();

  setInterval(function () { getCountdown(); }, 1000);

  function getCountdown(){

      var current_date = new Date().getTime();
      var seconds_left = (target_date - current_date) / 1000;

      days = pad( parseInt(seconds_left / 86400) );
      seconds_left = seconds_left % 86400;

      hours = pad( parseInt(seconds_left / 3600) );
      seconds_left = seconds_left % 3600;

      minutes = pad( parseInt(seconds_left / 60) );
      seconds = pad( parseInt( seconds_left % 60 ) );

      // строка обратного отсчета  + значение тега

      bDays.textContent = days;
      bHours.textContent = hours;
      bMinutes.textContent = minutes;
      bSeconds.textContent = seconds;
  }

  function pad(n) {
      return (n < 10 ? '0' : '') + n;
  }
});


