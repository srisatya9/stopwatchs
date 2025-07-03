let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;
let isRunning = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');

// Function to update the display
function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

// Function to start the stopwatch
function start() {
  if (isRunning) return; // Prevent multiple intervals

  isRunning = true;
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;

  // Start the timer and update every second
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
  resetButton.disabled = true;
}

// Event Listeners
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

