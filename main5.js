//Declare two variables with different values
var num1 = 10;
var num2 = 20;
// Set up a variable to hold an operator
var operator = "+"; // You can change this to "-" or any other valid operator
// // Create a function that takes two numbers and an operator as parameters
function performOperation(a, b, op) {
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
var result1 = performOperation(num1, num2, operator);
console.log("Result of ".concat(num1, " ").concat(operator, " ").concat(num2, ":"), result1);
// // Update the operator value and call the function again
var updatedOperator = "-"; // Change this to another operator
var result2 = performOperation(num1, num2, updatedOperator);
console.log("Result of ".concat(num1, " ").concat(updatedOperator, " ").concat(num2, ":"), result2);
