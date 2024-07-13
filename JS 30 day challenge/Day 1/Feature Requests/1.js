/* Variable Types CONSOLE Log: Write a script that declares variables of
different data types and logs both the value and type of each variable to the console */

// Declare variables of different data types
const myNumber = 42; // number
const myString = "Hello, world!"; // string
const myBoolean = true; // boolean
const myObject = { name: "Alice", age: 30 }; // object
const myArray = [1, 2, 3, 4, 5]; // array
const myNull = null; // null
const myUndefined = undefined; // undefined
const mySymbol = Symbol('symbol'); // symbol
const myBigInt = BigInt(12345678901234567890); // bigint

// Log the value and type of each variable to the console
console.log("myNumber:", myNumber, "- Type:", typeof myNumber); // Output: 42 - Type: number
console.log("myString:", myString, "- Type:", typeof myString); // Output: Hello, world! - Type: string
console.log("myBoolean:", myBoolean, "- Type:", typeof myBoolean); // Output: true - Type: boolean
console.log("myObject:", myObject, "- Type:", typeof myObject); // Output: { name: 'Alice', age: 30 } - Type: object
console.log("myArray:", myArray, "- Type:", typeof myArray); // Output: [ 1, 2, 3, 4, 5 ] - Type: object
console.log("myNull:", myNull, "- Type:", typeof myNull); // Output: null - Type: object
console.log("myUndefined:", myUndefined, "- Type:", typeof myUndefined); // Output: undefined - Type: undefined
console.log("mySymbol:", mySymbol, "- Type:", typeof mySymbol); // Output: Symbol(symbol) - Type: symbol
console.log("myBigInt:", myBigInt, "- Type:", typeof myBigInt); // Output: 12345678901234567890n - Type: bigint
