/* Write a program to find the largest of three
numbers using nested if-else statments */

function largestNumber (a,b)
{
  if(a>b)
  {
    console.log (a, "is bigger than", b);
  }
  else if (a<b)
  {
    console.log (b, "is bigger than", a);
  }
  else
  {
    console.log ("Both ", a, "&", b, "are equal");
  }
}

//Exmaple number
largestNumber(10,20);
largestNumber(30,15);
largestNumber(20,20);