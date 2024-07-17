/* Write a program to print a pattern using nested for loops
*
**
***
****
***** */

const rows = 5;

for (let i = 1; i <= rows; i++) {
  let pattern = '';
  for (let j = 1; j <= i; j++) {
    pattern += '*';
  }
  console.log(pattern);
}

const rows1 = 10;
for(let k = 1; k <= rows1; k++)
{
  let pattern1 = '';
  for (let l = 1; l <= k; l++)
  {
    pattern1 += '.';
  }
  console.log(pattern1);
}
