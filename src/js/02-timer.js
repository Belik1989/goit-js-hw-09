

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const timer = document.querySelector(".timer");
const dataTimePicker = document.querySelector("#datetime-picker");
const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector(`.timer [data-days]`);
const dataHours = document.querySelector(`.timer [data-hours]`);
const dataMinutes = document.querySelector(`.timer [data-minutes]`);
const dataSeconds = document.querySelector(`.timer [data-seconds]`);
startBtn.classList.add("startBtn");

const currentDate = new Date();
let timeToEnd = {};
let msTimeToEnd = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    console.log(selectedDates[0]);
    msTimeToEnd = selectedDates[0] - currentDate;

    if (selectedDates[0].getTime() < currentDate.getTime()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        startBtn.setAttribute('disabled', 'true');
    } else {
        startBtn.removeAttribute('disabled');
    }
    },
};

flatpickr(dataTimePicker, options);
startBtn.addEventListener('click', startHandler);
startBtn.setAttribute('disabled', 'true');

function startHandler() {
    setInterval(() => {
    if (msTimeToEnd <= 0) {
        return;
    }
    timeToEnd = convertMs(msTimeToEnd);
    dataDays.textContent = timeToEnd.days.toString().padStart(2, '0');
    dataHours.textContent = timeToEnd.hours.toString().padStart(2, '0');
    dataMinutes.textContent = timeToEnd.minutes.toString().padStart(2, '0');
    dataSeconds.textContent = timeToEnd.seconds.toString().padStart(2, '0');
    msTimeToEnd -= 1000;
    }, 1000);
}
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
}
