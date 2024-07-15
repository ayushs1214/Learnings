/* Write a program that uses a switch case to determine the day of
the week based on a number (1-7) and log the day name to the console. */

function getDayName(dayNumber) {
  switch (dayNumber) {
      case 1:
          console.log("Monday");
          break;
      case 2:
          console.log("Tuesday");
          break;
      case 3:
          console.log("Wednesday");
          break;
      case 4:
          console.log("Thursday");
          break;
      case 5:
          console.log("Friday");
          break;
      case 6:
          console.log("Saturday");
          break;
      case 7:
          console.log("Sunday");
          break;
      default:
          console.log("Invalid number! Please enter a number between 1 and 7.");
  }
}

// Example usage:
getDayName(1); // Monday
getDayName(4); // Thursday
getDayName(7); // Sunday
getDayName(8); // Invalid number! Please enter a number between 1 and 7.
