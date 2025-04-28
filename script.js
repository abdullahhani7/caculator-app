let currentInput = "0";
let firstOperand = null;
let operator = null;

const calculationDisplay = document.getElementById("calculation");
const resultDisplay = document.getElementById("result");
const time = document.querySelector(".time");

setInterval(() => {
  time.textContent = new Date().toLocaleTimeString();
}, 1000);

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    handleButton(button.textContent);
  });
});

const handleButton = (value) => {
  switch (value) {
    case "AC":
      clear();
      break;
    case "÷":
    case "×":
    case "-":
    case "+":
      handleOperator(value);
      break;
    case "=":
      calculate();
      break;

    default:
      handleNumber(value);
  }
};

const handleNumber = (value) => {
  currentInput = currentInput === "0" ? value : currentInput + value;
  calculationDisplay.textContent = firstOperand
    ? `${firstOperand} ${operator} ${currentInput}`
    : currentInput;
};

const calculate = () => {
  switch (operator) {
    case "÷":
      resultDisplay.textContent = firstOperand / currentInput;
      break;
    case "×":
      resultDisplay.textContent = firstOperand * currentInput;
      break;
    case "-":
      resultDisplay.textContent = firstOperand - currentInput;
      break;
    case "+":
      resultDisplay.textContent = Number(firstOperand) + Number(currentInput);
      break;
  }
};

const handleOperator = (value) => {
  // +
  if (operator) {
    calculate();
  }
  firstOperand = Number(currentInput);
  operator = value;
  calculationDisplay.textContent = ` ${firstOperand} ${operator}`;
  currentInput = "0";
};

const clear = () => {
  currentInput = "0";
  firstOperand = null;
  operator = null;
  calculationDisplay.textContent = "0";
  resultDisplay.textContent = "";
};
