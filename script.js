const buttons = document.querySelectorAll("button");
const off = document.getElementById("off");
let calcul = [];
let input1 = [];
let input2 = [];
let operatorChoice = "";
let check = true;
let checkEgal = true;

//functions

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//operation

function operate(operator, a, b) {
  a = Number(a.join(""));
  b = Number(b.join(""));
  if (operator === "+") {
    return add(a, b);
  }
  if (operator === "-") {
    return substract(a, b);
  }
  if (operator === "*") {
    return multiply(a, b);
  }
  if (operator === "/" && b !== 0) {
    return divide(a, b);
  }
  if (operator === "/" && b === 0) return "!OOPS!";
}

//clear

function clear() {
  input1 = [];
  input2 = [];
  calcul = [];
  operatorChoice = "";
  check = true;
  displayResult("0");
  displayCalcul(calcul);
}

//turn off
off.addEventListener(
  "click",
  (turnOff = () => {
    display.innerHTML = "";
    status = "off";
  })
);

function displayResult(total) {
  const result = document.getElementById("resultDisplay");
  result.textContent = total;
}

function displayCalcul(str) {
  theCalcul = str.join("");
  const currentCalcul = document.getElementById("calculDisplay");
  currentCalcul.textContent = theCalcul;
}

function checkIfDot(number) {
  return !number.some(noDot);
}

let noDot = function(element) {
  return element === ".";
};

//Clikable buttons

buttons.forEach(button => {
  button.addEventListener("click", event => {
    //inputs allocation
    if (check && (button.classList.contains("num") && operatorChoice === "")) {
      input1.push(button.id);
      displayResult(input1.join(""));
    } else if (button.classList.contains("num") && operatorChoice !== "") {
      input2.push(button.id);
      displayResult(input2.join(""));
      //dot
    } else if (button.id === "dot") {
      if (checkIfDot(input1) && check) {
        input1.push(".");
        displayResult(input1.join(""));
      } else if (checkIfDot(input2) && operatorChoice !== "") {
        input2.push(".");
        displayResult(input2.join(""));
      }
      //deletion
    } else if (button.id === "del") {
      if (input1.length > 0 && check) {
        input1.pop();
        displayResult(input1.join(""));
      } else if (input2.length > 0 && operatorChoice !== "") {
        input2.pop();
        displayResult(input2.join(""));
      }
      //back
    } else if (button.id === "back") {
      if (input1[0] !== "-") {
        input1.unshift("-");
      }
      displayResult(input1.join(""));
    } else if (button.classList.contains("operator") && input2.length === 0) {
      operatorChoice = button.id;
      if (checkEgal) {
        calcul.push(input1.join(""));
      }

      if (calcul.length < 2) {
        calcul.push(operatorChoice);
      } else if (calcul.length > 1 && checkEgal) {
        calcul.pop();
        calcul.push(operatorChoice);
      } else {
        calcul.push(operatorChoice);
        checkEgal = true;
      }
      displayCalcul(calcul);
    } else if (button.classList.contains("operator") && input2.length > 0) {
      //total calculation
      let total = operate(operatorChoice, input1, input2);
      displayResult(total);
      operatorChoice = button.id;

      calcul.push(input2.join(""));
      calcul.unshift("(");
      calcul.push(")");
      calcul.push(operatorChoice);
      displayCalcul(calcul);

      input1 = total.toString().split("");
      input2 = [];
      check = false;
    } else if (button.id === "equals") {
      calcul.push(input2.join(""));
      calcul.unshift("(");
      calcul.push(")");
      displayCalcul(calcul);
      let total = operate(operatorChoice, input1, input2);
      operatorChoice = "";
      displayResult(total);
      input1 = total.toString().split("");
      input2 = [];
      check = false;
      checkEgal = false;
    } else if (button.id === "clear") {
      clear();
    }
  });
});
