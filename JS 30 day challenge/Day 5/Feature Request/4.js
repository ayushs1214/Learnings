/* Sum calculation arrow function script: Create a script that includes
an arrow function to calculate the sum of two numbers & returns the result. */

const sum = (a, b) => a + b;

function number(a, b) {
    const result = sum(a, b);
    console.log(`The sum of ${a} & ${b} is ${result}`);
}

// Example usage
number(10, 5); // Output: The sum of 10 & 5 is 15
number(3, 7);  // Output: The sum of 3 & 7 is 10
