window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //timer
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            let DateStop = new Date(deadline).getTime(),
                DateNow = new Date().getTime(),
                timeRemaining = (DateStop - DateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);

            while (hours >= 24) {
                hours = Math.floor(hours % 24);
            }
            return { timeRemaining, hours, minutes, seconds };
        }

        function conversionDate(elem) {
            if (elem < 10) {
                return '0' + elem;
            } else {
                return elem;
            }
        }

        function updateClock() {
            let timer = getTimeRemaining();
            if (timer.seconds >= 0) {
                timerSeconds.textContent = conversionDate(timer.seconds);
                timerMinutes.textContent = conversionDate(timer.minutes);
                timerHours.textContent = conversionDate(timer.hours);
            }
        }

        setInterval(function() { if (timerSeconds.textContent = '00') { updateClock() } }, 1000);
    }
    countTimer('12 dec 2021');
});