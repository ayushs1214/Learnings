/* Write a function to calculate the square of a number and return the result */

function square(number) {
  let squareNumber = number * number;
  console.log("The square of", number, "is", squareNumber);
  return squareNumber;
}

// Example usage
square(5);   // Output: The square of 5 is 25
square(-20); // Output: The square of -20 is 400
