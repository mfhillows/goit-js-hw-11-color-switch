const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let idInterval = null;
const startButton = document.querySelector(".start");
console.log("startButton", startButton);
const stopButton = document.querySelector(".stop");

startButton.addEventListener("click", startSwitchColor);
stopButton.addEventListener("click", stopSwitchColor);

function startSwitchColor() {
  idInterval = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
}

function stopSwitchColor() {
  clearInterval(idInterval);
  document.body.style.backgroundColor = colors[0];
}
