/* Write a higher order function that takes two function & a value, applies the
first function to the value, & then appliies the second function to the result */

// Higher-order function definition
function higherOrder(fn1, fn2, a, b) {
  const result1 = fn1(a, b);
  const result2 = fn2(result1);
  return result2;
}

// Example usage
const add = (a, b) => a + b;
const multiplyBy2 = (a) => a * 2;

const result = higherOrder(add, multiplyBy2, 10, 20);
console.log(result); // Output: 60
