
const flatpickr = require("flatpickr");
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"
import Notiflix from 'notiflix';

const timer = document.querySelector(".timer");
const dataTimePicker = document.querySelector("#datetime-picker");
const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector(`.timer [data-days]`);
const dataHours = document.querySelector(`.timer [data-hours]`);
const dataMinutes = document.querySelector(`.timer [data-minutes]`);
const dataSeconds = document.querySelector(`.timer [data-seconds]`);
startBtn.classList.add("startBtn");
const currentDate = Date.now();
let timeToEnd = {};
let msTimeToEnd = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        onInputDate(selectedDates[0]);
    },
    };
    
    const fp = flatpickr('#datetime-picker', options);
    startBtn.setAttribute('disabled', 'disabled');
    let timeId = null;
    const INTERVAL = 1000;
    
    function onInputDate(selectedDates) {
    if (selectedDates <= Date.now()) {
        Notiflix.Notify.failure('Please choose a date in the future');
    } else {
        startBtn.removeAttribute('disabled', 'disabled');
    onStartedTimer(selectedDates);
    }
    }
    function onStartedTimer(selectedDates) {
        let msTimeToEnd = Date.parse(selectedDates) - Date.now();
        let timeToEnd = convertMs(mstimeToEnd);
        startBtn.addEventListener('click', () => {
        startBtn.setAttribute('disabled', 'disabled');
        dataTimePicker.setAttribute('disabled', 'disabled');
        timeId = setInterval(() => {
    if (msTimeToEnd <= 0) {
        clearInterval(timeId);
    return;
    }
    timeToEnd = convertMs(msTimeToEnd);
    dataDays.textContent = timeToEnd.days.toString().padStart(2, '0')
    dataHours.textContent = timeToEnd.hours.toString().padStart(2, '0')
    dataMinutes.textContent = timeToEnd.minutes.toString().padStart(2, '0')
    dataSeconds.textContent = timeToEnd.seconds.toString().padStart(2, '0')
    msTimeToEnd -= INTERVAL;
    },INTERVAL);
});

}function convertMs(ms) {
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
