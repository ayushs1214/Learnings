/* Higher Order Function: Write a script that includes a higher-order-function to apply a given function multiple times. */

function higherOrderFunction(fn, times)
{
  return function()
  {
    for (var i = 0; i < times; i++)
    {
      fn();
    }
  };
}

//Example
var hello = function()
{
  console.log("Hello World!");
};

higherOrderFunction(sum, 10);