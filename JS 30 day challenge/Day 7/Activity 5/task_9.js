/* Use 'object.keys' and 'object.values' methods to log all the keys & values of the book object. */

const book = {
  1: {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
  },
  
  2: {
    id: 2,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
  }
}

const key = Object.keys(book);
const value = Object.values(book);

console.log("key:",key);
console.log("value:",value);