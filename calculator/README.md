# C# Console Calculator Application

A robust, interactive C# Console Calculator developed as part of **Assignment 02 (Backend .NET Track)**.

## Features
- **Arithmetic Operations**: Supports Addition (`+`), Subtraction (`-`), Multiplication (`*`), and Division (`/`).
- **Input Validation**: Gracefully handles non-numeric input without crashing and prompts the user to try again.
- **Division by Zero Protection**: Guards against division by zero and outputs a clear error message.
- **Interactive Calculation Loop**: Allows performing multiple calculations sequentially without needing to restart the application.

## Technologies Used
- **Language**: C# (.NET 9 SDK)
- **Framework**: Console Application

## Project Structure
```text
calculator/
├── Program.cs           # Main application logic & UI loop
├── CalculatorApp.csproj # .NET project file
├── .gitignore           # Git ignore settings for .NET build artifacts
└── README.md            # Project documentation
```

## How to Run

1. Ensure you have [.NET SDK](https://dotnet.microsoft.com/download) installed.
2. Navigate to the `calculator` folder:
   ```bash
   cd calculator
   ```
3. Run the application using `dotnet`:
   ```bash
   dotnet run
   ```

## Demonstration / Screenshot

```text
================================================
           C# CONSOLE CALCULATOR APP            
      Backend .NET Track - Assignment 02        
================================================

------------------------------------------------
Enter the first number: 45
Enter the second number: 0

Select an operation:
  [+] Addition
  [-] Subtraction
  [*] Multiplication
  [/] Division
Choice (+, -, *, /): /

------------------ RESULT ------------------
Error: Division by zero is not allowed!
--------------------------------------------

Would you like to perform another calculation? (y/n): y

------------------------------------------------
Enter the first number: 25.5
Enter the second number: 4

Select an operation:
  [+] Addition
  [-] Subtraction
  [*] Multiplication
  [/] Division
Choice (+, -, *, /): *

------------------ RESULT ------------------
Result: 25.5 * 4 = 102
--------------------------------------------

Would you like to perform another calculation? (y/n): n

Thank you for using CalculatorApp! Goodbye.
```
