let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function calculateSquareRoot() {
  try {
    const value = parseFloat(displayValue);
    if (value >= 0) {
      const result = Math.sqrt(value);
      document.getElementById('display').value = result;
      displayValue = result.toString();
    } else {
      document.getElementById('display').value = 'Error';
    }
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
