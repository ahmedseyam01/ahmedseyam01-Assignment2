const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printHeader() {
  console.log('\x1b[36m================================================\x1b[0m');
  console.log('\x1b[36m          JAVASCRIPT CALCULATOR APP             \x1b[0m');
  console.log('\x1b[36m      Backend .NET Track - Assignment 02        \x1b[0m');
  console.log('\x1b[36m================================================\x1b[0m');
}

function promptQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function getNumber(promptMsg) {
  while (true) {
    const input = await promptQuestion(promptMsg);
    const num = parseFloat(input);
    if (!isNaN(num)) {
      return num;
    }
    console.log('\x1b[33mInvalid input! Please enter a valid numerical value.\x1b[0m');
  }
}

async function main() {
  printHeader();
  let keepRunning = true;

  while (keepRunning) {
    console.log('\n------------------------------------------------');
    const num1 = await getNumber('Enter the first number: ');
    const num2 = await getNumber('Enter the second number: ');

    console.log('\nSelect an operation:');
    console.log('  [+] Addition');
    console.log('  [-] Subtraction');
    console.log('  [*] Multiplication');
    console.log('  [/] Division');

    const op = (await promptQuestion('Choice (+, -, *, /): ')).trim();

    console.log('\n------------------ RESULT ------------------');
    switch (op) {
      case '+':
        console.log(`Result: ${num1} + ${num2} = ${num1 + num2}`);
        break;
      case '-':
        console.log(`Result: ${num1} - ${num2} = ${num1 - num2}`);
        break;
      case '*':
        console.log(`Result: ${num1} * ${num2} = ${num1 * num2}`);
        break;
      case '/':
        if (num2 === 0) {
          console.log('\x1b[31mError: Division by zero is not allowed!\x1b[0m');
        } else {
          console.log(`Result: ${num1} / ${num2} = ${num1 / num2}`);
        }
        break;
      default:
        console.log('\x1b[31mError: Invalid operation selected.\x1b[0m');
        break;
    }
    console.log('--------------------------------------------');

    while (true) {
      const choice = (await promptQuestion('\nWould you like to perform another calculation? (y/n): ')).trim().toLowerCase();
      if (choice === 'y' || choice === 'yes') {
        keepRunning = true;
        break;
      } else if (choice === 'n' || choice === 'no') {
        keepRunning = false;
        break;
      } else {
        console.log("Please answer with 'y' or 'n'.");
      }
    }
  }

  console.log('\nThank you for using JavaScript CalculatorApp! Goodbye.\n');
  rl.close();
}

main();
