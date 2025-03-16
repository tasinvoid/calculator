let num1, num2, result, operator;
let gotOperator = false;
function add(num1, num2) {
  result = num1 + num2;
  return result;
}
function substract(num1, num2) {
  result = num1 - num2;
  return result;
}
function multiply(num1, num2) {
  result = num1 * num2;
  return result;
}
function divide(num1, num2) {
  result = num1 / num2;
  return result;
}
function operate(operator, num1, num2) {
  if (operator === "+") {
    add(num1, num2);
  } else if (operator === "-") {
    substract(num1, num2);
  } else if (operator === "*") {
    multiply(num1, num2);
  } else if (operator === "/") {
    divide(num1, num2);
  }
}
function getInput() {
  let buttonsContainer = document.getElementById("buttons");
  buttonsContainer.addEventListener("click", (e) => {
    displayInput(e.target.innerText);
  });
}
function displayInput(input) {
  let display = document.getElementById("display");
  if (["+", "-", "/", "*"].includes(input)) {
    display.innerText = "";
    handleOperator(input);
  } else if (input == "=") {
    operate(operator, num1, num2);
    display.innerText = result;
  } else {
    storeInput(input);
  }
}
function handleOperator(input) {
  if (result != undefined) {
    num1 = result;
    num2 = undefined;
    result = undefined;
    operator = undefined;
    gotOperator = false;
  } else {
    gotOperator = true;
    operator = input;
  }
}
function storeInput(input) {
  if (gotOperator === false) {
    let currentNum = (display.innerText += input);
    num1 = parseInt(currentNum);
  } else if (gotOperator === true) {
    let currentNum = (display.innerText += input);
    num2 = parseInt(currentNum);
  }
}

getInput();
