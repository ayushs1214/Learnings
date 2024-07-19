/* Write a higher-order function that takes a function & a number, & calls the function that many times */

function higherOrder (fn, times)
{
 return function()
  {
  for (let i = 0; i < times; i++)
    {
      fn();
    }
  };
}

//Example usage
const sayHello = () => console.log("Hello!");

const repeatSayHello = higherOrder  (sayHello, 3);
repeatSayHello();