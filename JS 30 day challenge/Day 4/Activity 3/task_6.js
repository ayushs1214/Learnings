/* Write a program to calculate the factorial of a number using a do....while loop */

function factorial(n) {
  if (n < 0) {
    return "Error: Factorial is not defined for negative numbers.";
  }

  let result = 1;
  let i = n;

  do {
    result *= i;
    i--;
  } while (i > 0);

  return result;
}

// Example usage:
const number = 170; // Change this number to calculate the factorial of a different number
const fact = factorial(number);
console.log(`The factorial of ${number} is ${fact}`);


function factorial1 (m)
{
  if(m<0)
  {
    return "Error: Factorial is not defined for negative numbers.";
  }
  let result1=1;
  let j = m;
  do
  {
    result1 *= m;
    j--;
  }
  while (j>0);
  return result1;
}

const number1 = 5;
const fact1 = factorial(number1);
console.log(`The factorial of ${number1} is ${fact1}`);