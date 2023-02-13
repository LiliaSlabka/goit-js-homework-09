
const startBtn = document.querySelector('button[data-start]')
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', startColorSwitcher);
stopBtn.addEventListener('click', stopColorSwitcher);

let intervalId = null;

function startColorSwitcher() {
    console.log('START')
    intervalId = setInterval(() => document.body.style.backgroundColor = getRandomHexColor(), 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopColorSwitcher() {
    console.log('STOP')
    clearInterval(intervalId);
    stopBtn.disabled = true;
    startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}