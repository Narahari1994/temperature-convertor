const button = document.querySelector("button");
const inputEl = document.getElementById("textBox");
const fareignheit = document.getElementById("toFahrenheit");
const celcius = document.getElementById("toCelcius");
let result = document.getElementById("result");
let temp;

button.addEventListener("click", () => {
  if (fareignheit.checked) {
    temp = Number(inputEl.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (celcius.checked) {
    temp = Number(inputEl.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = "Select a unit";
  }
});
