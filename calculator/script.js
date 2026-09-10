document.addEventListener('DOMContentLoaded', () => {
  const screen = document.getElementById('screen');
  const history = document.getElementById('history');
  const clearBtn = document.getElementById('clear');
  const backspaceBtn = document.getElementById('backspace');
  const equalsBtn = document.getElementById('equals');
  const numbers = document.querySelectorAll('.number');
  const operators = document.querySelectorAll('.operator');

  let currentInput = '0';
  let previousInput = '';
  let operator = null;
  let resetScreen = false;

  function updateDisplay() {
    screen.textContent = currentInput;
    if (operator && previousInput) {
      history.textContent = `${previousInput} ${operator}`;
    } else {
      history.textContent = '';
    }
  }

  numbers.forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = btn.textContent;
      if (currentInput === '0' || resetScreen) {
        currentInput = val === '.' ? '0.' : val;
        resetScreen = false;
      } else {
        if (val === '.' && currentInput.includes('.')) return;
        currentInput += val;
      }
      updateDisplay();
    });
  });

  operators.forEach((btn) => {
    btn.addEventListener('click', () => {
      const op = btn.getAttribute('data-op');
      if (operator && !resetScreen) {
        calculate();
      }
      previousInput = currentInput;
      operator = op;
      resetScreen = true;
      updateDisplay();
    });
  });

  function calculate() {
    if (!operator || !previousInput) return;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return;

    let res = 0;
    switch (operator) {
      case '+':
        res = prev + curr;
        break;
      case '-':
        res = prev - curr;
        break;
      case '*':
        res = prev * curr;
        break;
      case '/':
        if (curr === 0) {
          currentInput = 'Error: Division by zero';
          operator = null;
          previousInput = '';
          resetScreen = true;
          updateDisplay();
          return;
        }
        res = prev / curr;
        break;
      case '%':
        res = prev % curr;
        break;
    }
    history.textContent = `${previousInput} ${operator} ${currentInput} =`;
    currentInput = String(Number(res.toFixed(8)));
    operator = null;
    previousInput = '';
    resetScreen = true;
    updateDisplay();
  }

  equalsBtn.addEventListener('click', calculate);

  clearBtn.addEventListener('click', () => {
    currentInput = '0';
    previousInput = '';
    operator = null;
    resetScreen = false;
    updateDisplay();
  });

  backspaceBtn.addEventListener('click', () => {
    if (currentInput.length > 1 && !currentInput.includes('Error')) {
      currentInput = currentInput.slice(0, -1);
    } else {
      currentInput = '0';
    }
    updateDisplay();
  });

  // Keyboard Support
  document.addEventListener('keydown', (e) => {
    if ((e.key >= '0' && e.key <= '9') || e.key === '.') {
      if (currentInput === '0' || resetScreen) {
        currentInput = e.key === '.' ? '0.' : e.key;
        resetScreen = false;
      } else {
        if (e.key === '.' && currentInput.includes('.')) return;
        currentInput += e.key;
      }
      updateDisplay();
    } else if (['+', '-', '*', '/'].includes(e.key)) {
      if (operator && !resetScreen) calculate();
      previousInput = currentInput;
      operator = e.key;
      resetScreen = true;
      updateDisplay();
    } else if (e.key === 'Enter' || e.key === '=') {
      e.preventDefault();
      calculate();
    } else if (e.key === 'Backspace') {
      if (currentInput.length > 1 && !currentInput.includes('Error')) {
        currentInput = currentInput.slice(0, -1);
      } else {
        currentInput = '0';
      }
      updateDisplay();
    } else if (e.key === 'Escape') {
      currentInput = '0';
      previousInput = '';
      operator = null;
      resetScreen = false;
      updateDisplay();
    }
  });
});
