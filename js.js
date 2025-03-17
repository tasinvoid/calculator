let num1, num2, result, operator;
let gotOperator = false;
let decimalBtn = document.getElementById("decimalBtn");
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
  if (result === Infinity) {
    result = "Opps";
  }
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
    decimalBtn.disabled = false;
    handleOperator(input);
  } else if (input == "=") {
    decimalBtn.disabled = false;
    operate(operator, num1, num2);
    result = result.toString();
    handleLongDecimal();
  } else if (input == "C") {
    display.innerText = "";
    handleClearBtn();
  } else if (input.length > 1) {
    input = "";
  } else if (input == ".") {
    decimalBtn.disabled = true;
    storeInput(input);
  } else if (input == "D") {
    handleDeleteBtn();
  } else {
    storeInput(input);
  }
}
function handleDeleteBtn() {
  if (num2 === undefined) {
    let num1Str = num1.toString();
    num1Str = num1Str.slice(0, -1);
    num1 = parseFloat(num1Str);
    display.innerText = num1;
  } else if (gotOperator === true) {
    let num2Str = num2.toString();
    num2Str = num2Str.slice(0, -1);
    num2 = parseFloat(num2Str);
    display.innerText = num2;
  }
}
function handleClearBtn() {
  num1 = num2 = result = operator = undefined;
  gotOperator = false;
  decimalBtn.disabled = false;
}
function handleLongDecimal() {
  if (result.length > 6 && result.match(".")) {
    result = result.slice(0, 5);
    display.innerText = result;
  } else {
    display.innerText = result;
  }
}
function handleOperator(input) {
  if (result != undefined) {
    num1 = parseFloat(result);
    num2 = undefined;
    result = undefined;
    operator = input;
    gotOperator = true;
  } else {
    gotOperator = true;
    operator = input;
  }
}
function storeInput(input) {
  if (gotOperator === false) {
    let currentNum = (display.innerText += input);
    num1 = parseFloat(currentNum);
  } else if (gotOperator === true) {
    let currentNum = (display.innerText += input);
    num2 = parseFloat(currentNum);
  }
}

getInput();
