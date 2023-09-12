const inputFieldEl = document.querySelector(".input-field");
const numberButtons = document.querySelectorAll(".number");
let a;
let b;
let operation;
numberButtons.addEventListener('click', function()){
    inputFieldEl = numberButtons.innerHTML;
})