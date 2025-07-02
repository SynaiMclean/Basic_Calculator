const display = document.querySelector(".bar");
let displayValue = "";
let firstNumber = "";
let operation = "";
let secondNumber = "";
let waitingForOperand = false;

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

        if (buttonText === "A/C"){
            displayValue = "";
            firstNumber = "";
             operation = "";
            secondNumber = "";
            display.textContent = "0";

        }
        else if (buttonText === "="){
            secondNumber = parseFloat(displayValue)

            let result;
            if(operation === "+"){
                result = firstNumber + secondNumber;
            }else if(operation === "-"){
                result= firstNumber - secondNumber;
            }else if(operationt === "X" ){
                result= firstNumber * secondNumber;
            }else if(operation === "/"){
                result = firstNumber / secondNumber;
         }
         displayValue = result.toString();
         display.textContent = displayValue;
        }
        else{
            firstNumber = parseFloat(displayValue)
            operation = buttonText;
            displayValue: "";
            waitingForOperand: true;
        }
    

        })
        }

    


        