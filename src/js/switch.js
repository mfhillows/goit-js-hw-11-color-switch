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

const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");

const interval = {
  idInterval: null,
  isActive: false,
  startSwitchColor() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    startButton.disabled = true;
    stopButton.disabled = false;

    this.idInterval = setInterval(() => {
      document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000);
  },
  stopSwitchColor() {
    clearInterval(this.idInterval);
    this.isActive = false;
    startButton.disabled = false;
    stopButton.disabled = true;

    document.body.style.backgroundColor = colors[0];
  },
};

startButton.addEventListener("click", () => {
  interval.startSwitchColor();
});
stopButton.addEventListener("click", () => {
  interval.stopSwitchColor();
});
