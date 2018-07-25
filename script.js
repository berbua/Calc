const num = document.querySelectorAll(".num");
const display = document.getElementById("displayer");
const on = document.getElementById("on");
const off = document.getElementById("off");
const equals = document.getElementById("equals");
let currentValue = "";
let status = "";
let retultConverted = "";
let displayValueArray = [];

let displayValue = "";

function displayUpdate(displayValue, currentValue) {
  displayValue = currentValue;
  display.innerHTML = displayValue;
}

/*Clear*/
on.addEventListener(
  "click",
  (clear = () => {
    currentValue = 0;
    displayUpdate(displayValue, currentValue);
  })
);

/*Turn off*/

off.addEventListener(
  "click",
  (turnOff = () => {
    currentValue = "";
    displayUpdate(displayValue, currentValue);
    status = "off";
  })
);

/*Clikable buttons*/
// console.log(num);

num.forEach(numb =>
  numb.addEventListener("click", function() {
    if (currentValue === "" || currentValue === 0) {
      currentValue = this.innerHTML;
      displayUpdate(displayValue, currentValue);
    } else {
      currentValue += this.innerHTML;
      displayUpdate(displayValue, currentValue);
      // console.log(currentValue);
      // console.log(typeof currentValue);
    }
  })
);

function convertToNumber(currentValue) {
  return Number(currentValue.replace(/"/g, ""));
  // return Number(currentValue);
}

/* Operate */
// console.log(equals);
// console.log(Number(currentValue));
equals.addEventListener("click", function() {
  displayValue = convertToNumber(currentValue);
  console.log(displayValue);
  display.innerHTML = displayValue;

  //displayValue = currentValue;
});

// displayValue = parseFloat(currentValue.replace(/"/g, ""));
// console.log(displayValue);
// display.innerHTML = displayValue;
// displayValue = parseFloat(currentValue);
// console.log(displayValue);
// display.innerHTML = parseFloat(currentValue);

console.log(convertToNumber(3 + 3));
console.log(currentValue);
