const num = document.querySelectorAll(".num");
const display = document.getElementById("displayer");
const on = document.getElementById("on");
const off = document.getElementById("off");
let currentValue = "";
let status = "";
let displayValueArray = [];

let displayValue = "";

/*Clear*/
on.addEventListener(
  "click",
  (clear = () => {
    displayValue = 0;
    currentValue = 0;
    display.innerHTML = displayValue;
    console.log("clear");
  })
);

/*Turn off*/

off.addEventListener(
  "click",
  (turnOff = () => {
    display.innerHTML = "";
    status = "off";
  })
);

/*Clikable buttons*/
console.log(num);

num.forEach(numb =>
  numb.addEventListener("click", function() {
    if (currentValue === "" || currentValue === 0) {
      currentValue = this.innerHTML;
      displayValue = currentValue;
      display.innerHTML = displayValue;
    } else {
      currentValue += this.innerHTML;
      displayValue = currentValue;
      display.innerHTML = displayValue;
    }
  })
);
