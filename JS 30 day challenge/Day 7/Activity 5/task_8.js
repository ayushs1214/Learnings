/* Use a 'for...in' loop to iterate over the properties of the book object & log each property & its value */

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  published: 1925
};

for (let property in book) {
  if (book.hasOwnProperty(property)) {
      console.log(`${property}: ${book[property]}`);
  }
}