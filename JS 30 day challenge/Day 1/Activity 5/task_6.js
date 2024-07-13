/* Try Reassigning a variable declared with const and observe the error.*/

const myVariable = "First Variable";
console.log("Initial Value:", myVariable);

try {
  myVariable = "New Variable";
} catch (error) {
  console.log("Error:", error.message);
}
console.log("Attempted to reassign Variable Value");