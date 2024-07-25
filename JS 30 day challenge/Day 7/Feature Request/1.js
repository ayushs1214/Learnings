/* Book object Script: Write a script that creates a book object,
adds methods to it, & logs its properties and method results. */

// Define the Book constructor function
function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

// Add a method to get the book's summary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}.`;
};

// Add a method to get the book's age
Book.prototype.getAge = function() {
  const currentYear = new Date().getFullYear();
  return currentYear - this.year;
};

// Add a method to get a description of the book
Book.prototype.getDescription = function() {
  return `${this.title} is a ${this.genre} book written by ${this.author}. It is ${this.getAge()} years old.`;
};

// Create a new Book object
const book1 = new Book('1984', 'George Orwell', 1949, 'Dystopian');

// Log the book's properties
console.log('Title:', book1.title);
console.log('Author:', book1.author);
console.log('Year:', book1.year);
console.log('Genre:', book1.genre);

// Log the results of the book's methods
console.log('Summary:', book1.getSummary());
console.log('Age:', book1.getAge(), 'years old');
console.log('Description:', book1.getDescription());