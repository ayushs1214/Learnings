/* Number check script: Write a script that checks if a number is positive,
negative or zero using if-else statements and log the result in console */

function checkNumber(a) {
  if (a > 0) {
      console.log("The number is positive");
  } else if (a < 0) {
      console.log("The number is negative");
  } else {
      console.log("The number is zero");
  }
}

// Examples
checkNumber(2);  // Outputs: The number is positive
checkNumber(-3); // Outputs: The number is negative
checkNumber(0);  // Outputs: The number is zero
