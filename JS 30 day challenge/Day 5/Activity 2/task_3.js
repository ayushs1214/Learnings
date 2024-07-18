/* Write an expression to find the maximum of two numbers & log the result to the console */

function largestNumber (a,b)
{
  if (a > b)
  {
    console.log(a, "is the largest number amongst", a, "&", b);
  }
  else if (b > a)
  {
    console.log(b, "is the largest number amongst", a, "&", b);
  }
  else
  {
    console.log ("Both numbers are equal");
  }
}

//Example Numbers
largestNumber(10, 20);
largestNumber(20,9);
largestNumber(3,3);
