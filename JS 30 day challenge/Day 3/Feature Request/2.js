/* Voting Eligibility Script: Create a script to check if a person is 
eligible to vote on the basis of their age & log the result to console */

function person(age)
{
  if (age >= 18)
  {
    console.log ("The person is eligible to vote");
  }
  else
  {
    console.log ("The person is not eligible to vote");
  }
}

//Example
person(20);
person(18);
person(15);