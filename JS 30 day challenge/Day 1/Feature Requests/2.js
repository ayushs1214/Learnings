/* Reassignment Demo: Create a script that demonstrates the difference
in behaviour betweenLET & CONST when it comes to reassignment */

// Demonstration with let
let myLetVariable = "Initial Value (let)";
console.log("Initial value (let):", myLetVariable);

// Reassigning the variable declared with let
myLetVariable = "New Value (let)";
console.log("Reassigned value (let):", myLetVariable);

// Demonstration with const
const myConstVariable = "Initial Value (const)";
console.log("Initial value (const):", myConstVariable);

// Attempting to reassign the variable declared with const
try {
  myConstVariable = "New Value (const)"; // This will cause an error
} catch (error) {
  console.error("Error when reassigning const:", error.message);
}

// The code after the reassignment attempt
console.log("Attempted to change const value.");
