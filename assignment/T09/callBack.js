// Code here for the callbacks task
// Setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 1;
function printNumber() {
  console.log(counter);
  counter++;
}
let startCounter = function () {
  if (!intervalID) {
    intervalID = setInterval(printNumber, 1000); //It prints the number in 1000 ms.
  }
};
function stopCounter() {
  clearInterval(intervalID);
}
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
startButton.addEventListener("click", startCounter);
stopButton.addEventListener("click", stopCounter);
