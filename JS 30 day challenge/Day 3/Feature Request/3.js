/* Day of the week script: Write a script that uses switch case to determine
the day of the week based on a number (1-7) & logs the day name */

function day (number)
{
  switch (number) {
    case 1:
      console.log ("Monday");
      break;

    case 2:
      console.log ("Tuesday");
      break;

    case 3:
      console.log ("Wednesday");
      break;

    case 4:
      console.log ("Thursday");
      break;

    case 5:
      console.log ("Friday");
      break;
  
    case 6:
      console.log ("Saturday");
      break;

    case 7:
      console.log ("Sunday");
      break;

    default:
      console.log ("Invalid number");
      break;
  }
}

//Example
day(1);
day(3);
day(7);
day(9);