/* Create a script that compares two numbers using different comparison operators
& combines conditions using logical operator & logging the results. */ 

function compareNumbers(a, b) {
  console.log(`${a} == ${b}: ${a == b}`);
  console.log(`${a} === ${b}: ${a === b}`);
  console.log(`${a} != ${b}: ${a != b}`);
  console.log(`${a} !== ${b}: ${a !== b}`);
  console.log(`${a} > ${b}: ${a > b}`);
  console.log(`${a} >= ${b}: ${a >= b}`);
  console.log(`${a} < ${b}: ${a < b}`);
  console.log(`${a} <= ${b}: ${a <= b}`);

  // Combining conditions using logical operators
  console.log(`${a} > 0 && ${b} > 0: ${a > 0 && b > 0}`);
  console.log(`${a} > 0 || ${b} > 0: ${a > 0 || b > 0}`);
  console.log(`!(${a} > 0): ${!(a > 0)}`);
}

// Example usage:
let number1 = 10;
let number2 = 20;

compareNumbers(number1, number2);

number1 = 10;
number2 = 10;

compareNumbers(number1, number2);
