/* Add a method to the book object that uses the 'this' keyword to return a
string with the books title & year, & log the result of calling this method */

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  published: 1925,
  getInfo: function() {
      return `${this.title} (${this.published})`;
  }
};

// Call the getInfo method using 'this' and log the result
console.log(book.getInfo());