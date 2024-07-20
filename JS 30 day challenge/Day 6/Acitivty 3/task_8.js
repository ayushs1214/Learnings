/* Use filter method to create a new array with only even numbers & log the result in a new array */

const array = [1,2,3,4,5,6,7,8];
const evenNumbers = array.filter((num) => num % 2 === 0);
console.log(evenNumbers);