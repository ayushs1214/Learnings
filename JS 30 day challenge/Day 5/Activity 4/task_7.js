/* Write a function that takes two parameters & returns their product. Provide a default value for the second parameter. */

function product(a, b=5)
{
  console.log("The product of", a, "&", b, "is:");
  return (a * b);
}

//Example Used

console.log (product(5,3));
console.log (product(-5));