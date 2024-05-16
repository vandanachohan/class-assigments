 //Declare two variables with different values
 const num1: number = 10;
 const num2: number = 20;

 // Set up a variable to hold an operator
 const operator: string = "+"; // You can change this to "-" or any other valid operator

// // Create a function that takes two numbers and an operator as parameters
 function performOperation(a: number, b: number, op: string): number {
    switch (op) {
         case "+":
             return a + b;
         case "-":
             return a - b;
         case "*":
             return a * b;
         case "/":
             return a / b;
         default:
             throw new Error("Invalid operator");
     }
 }

// // Call the function with the initial variables and operator, and log the result
 const result1 = performOperation(num1, num2, operator);
 console.log(`Result of ${num1} ${operator} ${num2}:`, result1);

// // Update the operator value and call the function again
 const updatedOperator: string = "-"; // Change this to another operator
 const result2 = performOperation(num1, num2, updatedOperator);
 console.log(`Result of ${num1} ${updatedOperator} ${num2}:`, result2);



