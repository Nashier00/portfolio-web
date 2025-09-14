const tempText = document.getElementById("tempText");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
let temperature;

function convert() {
  temperature = tempText.value;
  temperature = Number(temperature);
  if (toFahrenheit.checked) {
    temperature = (temperature * 9) / 5 + 32;
    result.textContent = temperature.toFixed(2) + "°F";
  } else if (toCelsius.checked) {
    temperature = ((temperature - 32) * 5) / 9;
    result.textContent = temperature.toFixed(2) + "°C";
  } else {
    result.textContent = "Select a unit.";
  }
}

toCelsius.addEventListener("click", function () {
  tempText.value = 32;
  result.textContent = 0 + "°C";
});

toFahrenheit.addEventListener("click", function () {
  tempText.value = 0;
  result.textContent = 32 + "°F";
});
