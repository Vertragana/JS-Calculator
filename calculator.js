const inputFieldEl = document.querySelector(".input-field");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const calcButton = document.querySelector(".calc");
const backButton = document.querySelector(".backspace");
const clearButton = document.querySelector(".clear");

let a;
let b;
let operation;

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.innerText;
    if (inputFieldEl.innerHTML === "0") {
      inputFieldEl.innerHTML = buttonValue;
    } else {
      inputFieldEl.innerHTML += buttonValue;
    }
  });
});

function saveOperation(e) {
  operation = e.target.dataset.operation;
  a = parseInt(inputFieldEl.innerHTML);
  inputFieldEl.innerHTML = 0;
}

operationButtons.forEach((button) => {
  button.addEventListener("click", saveOperation);
});

function calc() {
  b = parseInt(inputFieldEl.innerHTML);
  if (operation === 'sum') {
    inputFieldEl.innerHTML = a+b
  } else if (operation ==='sub') {

  }
}

calcButton.addEventListener("click",calc);
