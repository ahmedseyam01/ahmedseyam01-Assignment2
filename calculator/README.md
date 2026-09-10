# JavaScript Calculator Application

A sleek, interactive **JavaScript Calculator** built using **HTML5, CSS3, and JavaScript (ES6)** and runnable via Node.js CLI or browser interface.

Developed by **Ahmed Seyam** (`@ahmedseyam01`) as part of **Assignment 02 (Backend .NET Track)**.

## Features
- **Arithmetic Operations**: Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`), and Percentage (`%`).
- **Input Validation**: Gracefully handles non-numeric values and invalid key sequences.
- **Division by Zero Protection**: Prevents division by zero with a clean error notification.
- **Continuous Calculation Loop**: Supports multiple calculations consecutively.
- **Keyboard Shortcuts**: Supports physical keyboard inputs (`0-9`, `.`, `+`, `-`, `*`, `/`, `Enter`, `Backspace`, `Escape`).

## Technologies Used
- **JavaScript (ES6+)**: Logic & Node CLI execution
- **HTML5 & CSS3**: Glassmorphism web user interface
- **Node.js**: CLI runner support

## Project Structure
```text
calculator/
├── index.html       # Web calculator interface
├── style.css        # Modern glassmorphism design styles
├── script.js        # Web calculator DOM logic & event listeners
├── calculator.js    # Node.js interactive CLI calculator
└── README.md        # Project documentation
```

## How to Run

### Option 1: In the Browser
Open `index.html` directly in any web browser or use VS Code Live Server.

### Option 2: Via Node.js CLI
Run the interactive CLI calculator using Node.js:
```bash
node calculator.js
```

## Visual Interface Demonstration

```text
================================================
          JAVASCRIPT CALCULATOR APP             
      Backend .NET Track - Assignment 02        
================================================

Enter the first number: 50
Enter the second number: 0

Choice (+, -, *, /): /

------------------ RESULT ------------------
Error: Division by zero is not allowed!
--------------------------------------------

Would you like to perform another calculation? (y/n): y

------------------------------------------------
Enter the first number: 12.5
Enter the second number: 8

Choice (+, -, *, /): *

------------------ RESULT ------------------
Result: 12.5 * 8 = 100
--------------------------------------------

Would you like to perform another calculation? (y/n): n

Thank you for using JavaScript CalculatorApp! Goodbye.
```
