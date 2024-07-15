/* Write a program to check if a person is eligible to
vote (age >= 18), & log the result to console */

function voteAge (age)
{
if (age>=18)
{
  console.log ("This age", (age), "is Eligible to vote");
}
else
{
  console.log("This age",  (age), "is Not Eligible to vote");
}
}
//Example check
voteAge (20);
voteAge (15);