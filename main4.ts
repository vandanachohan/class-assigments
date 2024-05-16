// Task 4

// Declare two variables with different values
const num1: number = 5;
const num2: number = 10;

// Create a function that takes two arguments and returns their sum
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Call the function with the initial variables and log the result
const result1 = addNumbers(num1, num2);
console.log("Result of the first call:", result1);

// Create a second call to the function with two more numbers
const num3: number = 15;
const num4: number = 20;
const result2 = addNumbers(num3, num4);
console.log("Result of the second call:", result2);
