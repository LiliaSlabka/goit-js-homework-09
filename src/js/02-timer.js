import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('button[data-start]');
const form = document.querySelector('#datetime-picker');
const timeElAll = document.querySelectorAll('.value')

startBtn.addEventListener('click', onButton);
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose,
};

flatpickr(form, options);

let selectedTime = 0;

function onClose(selectedDates) {
    const currentDate = options.defaultDate;
    if (selectedDates[0] < currentDate) {
        alert("Please choose a date in the future")
        startBtn.disabled = true
    } else {
        startBtn.disabled = false;
        selectedTime = selectedDates[0];
    }
}

function timeInterval(selectedDate) {
    let intervalId = null;
    intervalId = setInterval(() => {
        const currentTime = Date.now();
        const countDownTime = selectedDate - currentTime;
        const time = convertMs(countDownTime);
        updateTime(time);
        if (countDownTime < 1000) {
            form.disabled = false;
            clearInterval(intervalId);
        }
    }, 1000)
}


function onButton() {
    startBtn.disabled = true;
    form.disabled = true;
    timeInterval (selectedTime)
};


function addLeadingZero(value) {
  return String(value).padStart(2, '0')};

  function convertMs(ms) {
    const days = addLeadingZero(Math.floor((ms / (1000 * 60 * 60 * 24))));
    const hours = addLeadingZero(Math.floor((ms / (1000 * 60 * 60)) % 24));
    const minutes = addLeadingZero(Math.floor((ms / (1000 * 60)) % 60));
    const seconds = addLeadingZero(Math.floor((ms / 1000) % 60));

    return { days, hours, minutes, seconds};
};

  function updateTime({ days, hours, minutes, seconds })
  { timeElAll[0].textContent = days;
    timeElAll[1].textContent = hours;
    timeElAll[2].textContent = minutes;
    timeElAll[3].textContent = seconds;
  }
