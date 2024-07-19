/* Write an arrow function to check if a string contains a specific character & return a boolean value */

const containsCharacter = (str, char) => str.includes(char);

// Example usage
let result1 = containsCharacter("Hello, World!", "W");
console.log(result1); // Output: true

let result2 = containsCharacter("Hello, World!", "z");
console.log(result2); // Output: false