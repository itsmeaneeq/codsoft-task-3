// script.js

function addToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  let display = document.getElementById('display');
  try {
    display.value = eval(display.value); // Using eval() for simplicity (not recommended for production due to security risks)
  } catch (e) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}
