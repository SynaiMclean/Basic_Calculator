const display = document.querySelector(".bar");
let displayValue = "";

const buttons = document.querySelectorAll(".button");
for(let i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(event) {
   const buttonText = event.target.textContent;
   displayValue += buttonText
   display.textContent = displayValue;
    });
}

const operationButtons = document.querySelectorAll(".button-s");

for(let i = 0; i < operationButtons.length; i ++){
    operationButtons[i].addEventListener('click', function(event){
        const buttonText = event.target.textContent;
        displayValue += buttonText;
        display.textContent = displayValue;

    });
    };


