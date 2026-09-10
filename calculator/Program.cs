using System;

namespace CalculatorApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Title = "Console Calculator - Backend .NET Track";
            bool keepRunning = true;

            PrintHeader();

            while (keepRunning)
            {
                Console.WriteLine("\n------------------------------------------------");
                double num1 = ReadDouble("Enter the first number: ");
                double num2 = ReadDouble("Enter the second number: ");

                Console.WriteLine("\nSelect an operation:");
                Console.WriteLine("  [+] Addition");
                Console.WriteLine("  [-] Subtraction");
                Console.WriteLine("  [*] Multiplication");
                Console.WriteLine("  [/] Division");
                Console.Write("Choice (+, -, *, /): ");
                
                string? op = Console.ReadLine()?.Trim();

                Console.WriteLine("\n------------------ RESULT ------------------");
                switch (op)
                {
                    case "+":
                        Console.WriteLine($"Result: {num1} + {num2} = {num1 + num2}");
                        break;
                    case "-":
                        Console.WriteLine($"Result: {num1} - {num2} = {num1 - num2}");
                        break;
                    case "*":
                        Console.WriteLine($"Result: {num1} * {num2} = {num1 * num2}");
                        break;
                    case "/":
                        if (num2 == 0)
                        {
                            Console.ForegroundColor = ConsoleColor.Red;
                            Console.WriteLine("Error: Division by zero is not allowed!");
                            Console.ResetColor();
                        }
                        else
                        {
                            Console.WriteLine($"Result: {num1} / {num2} = {num1 / num2}");
                        }
                        break;
                    default:
                        Console.ForegroundColor = ConsoleColor.Red;
                        Console.WriteLine("Error: Invalid operation selected.");
                        Console.ResetColor();
                        break;
                }
                Console.WriteLine("--------------------------------------------");

                keepRunning = AskToContinue();
            }

            Console.WriteLine("\nThank you for using CalculatorApp! Goodbye.\n");
        }

        static void PrintHeader()
        {
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("================================================");
            Console.WriteLine("           C# CONSOLE CALCULATOR APP            ");
            Console.WriteLine("      Backend .NET Track - Assignment 02        ");
            Console.WriteLine("================================================");
            Console.ResetColor();
        }

        static double ReadDouble(string prompt)
        {
            double value;
            while (true)
            {
                Console.Write(prompt);
                string? input = Console.ReadLine();
                if (double.TryParse(input, out value))
                {
                    return value;
                }
                Console.ForegroundColor = ConsoleColor.Yellow;
                Console.WriteLine("Invalid input! Please enter a valid numerical value.");
                Console.ResetColor();
            }
        }

        static bool AskToContinue()
        {
            while (true)
            {
                Console.Write("\nWould you like to perform another calculation? (y/n): ");
                string? response = Console.ReadLine()?.Trim().ToLower();
                if (response == "y" || response == "yes") return true;
                if (response == "n" || response == "no") return false;
                Console.WriteLine("Please answer with 'y' or 'n'.");
            }
        }
    }
}
