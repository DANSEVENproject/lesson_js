window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    function countTimer(_deadline) {
        const timePartDay = document.querySelector('#time-day'),
            timeDay = document.querySelector('#day'),
            timeClock = document.querySelector('#time-clock'),
            deadline = document.querySelector('#time-deadline');

        let _DateNow = new Date();

        function TimeDay() {
            let DateStop = new Date(_deadline).getTime(),
                DateNowForRemaining = new Date().getTime(),
                DateNow = new Date(),
                Remaining = Math.floor((DateStop - DateNowForRemaining) / 1000 / 60 / 60 / 24);
            DateNow = DateNow.toLocaleTimeString();
            return { Remaining, DateNow };
        }

        function getDayNow(i) {
            let arr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
            return arr[i];
        }

        function getTimeDayNow() {
            if (_DateNow.getHours() > 3 && _DateNow.getHours() < 12) return 'Доброе утро';
            if (_DateNow.getHours() >= 12 && _DateNow.getHours() <= 18) return 'Добрый вечер';
            if (_DateNow.getHours() > 18 && _DateNow.getHours() < 24) return 'Доброй ночи';
        }

        function declOfNum(number, words) {
            return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
        }

        function updateTime() {
            let timer = TimeDay();
            (_DateNow.getHours() >= 12) ? (
                timeClock.textContent = `Текущее время: ${timer.DateNow} PM`
            ) : (
                timeClock.textContent = `Текущее время: ${timer.DateNow} AM`
            )
            deadline.textContent = `До нового года осталось ${timer.Remaining} ${declOfNum(timer.Remaining, ['день', 'дня', 'дней'])}`;
            timeDay.textContent = `Сегодня: ${getDayNow(_DateNow.getUTCDay())}`;
            timePartDay.textContent = getTimeDayNow();
        }

        setInterval(updateTime, 1000);
    }
    countTimer('1 jan 2022');
});