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
  button.addEventListener("click",(e)=>{
    if (operation){
     calc();
    }
    saveOperation(e);
  } );
});

function calc() {
  b = parseInt(inputFieldEl.innerHTML);
  if (operation === 'sum') {
    inputFieldEl.innerHTML = a+b
  } else if (operation ==='sub') {
    inputFieldEl.innerHTML = a-b
  } else if(operation === 'multi'){
    inputFieldEl.innerHTML = a*b
  } else if(operation === 'div'){
    inputFieldEl.innerHTML = a/b
  }
  operation = undefined
}

calcButton.addEventListener("click",calc);

clearButton.addEventListener("click",() =>{
  inputFieldEl.innerHTML = 0;
  a=b=operation=undefined;
})



backButton.addEventListener("click", () =>{
 if(inputFieldEl.innerHTML.length === 1) {
  inputFieldEl.innerHTML = 0;
 }
else {inputFieldEl.innerHTML = inputFieldEl.innerHTML.slice(0, inputFieldEl.innerHTML.length - 1 );}
  
})