let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
let isRunning = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');

// Function to update the stopwatch display
function updateDisplay() {
  const h = hours < 10 ? "0" + hours : hours;
  const m = minutes < 10 ? "0" + minutes : minutes;
  const s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

// Function to start the stopwatch
function start() {
  if (isRunning) return; // Don't start if it's already running

  isRunning = true;
  startButton.disabled = true;
  stopButton.disabled = false;

  timer = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }

    updateDisplay();
  }, 1000);
}

// Function to stop the stopwatch
function stop() {
  clearInterval(timer);
  isRunning = false;
  startButton.disabled = false;
  stopButton.disabled = true;
}

// Function to reset the stopwatch
function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  startButton.disabled = false;
  stopButton.disabled = true;
}

// Event Listeners
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
