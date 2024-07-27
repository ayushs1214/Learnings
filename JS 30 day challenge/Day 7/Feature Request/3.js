/* Object Iteration Script: Write a script that demonstrates iterating over 
an object's properties using 'for..in' loop & 'object.keys/object.values' */

const person = {
  name: 'Alice',
  age: 30,
  profession: 'Engineer'
};

// Using for..in loop
console.log('Using for..in loop:');
for (let key in person) {
  if (person.hasOwnProperty(key)) {
      console.log(`${key}: ${person[key]}`);
  }
}

// Using Object.keys
console.log('Using Object.keys:');
Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});

// Using Object.values
console.log('Using Object.values:');
Object.values(person).forEach(value => {
  console.log(value);
});

//Day 7 done//