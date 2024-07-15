/* Leap year check script: Write a script to check if a year is a
leap year using multiple conditions & logs the result to console */

function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("The year " + year + " is a leap year");
  } else {
    console.log("The year " + year + " is not a leap year");
  }
}

// Examples
checkLeapYear(2020); // Outputs: The year 2020 is a leap year
checkLeapYear(2023); // Outputs: The year 2023 is not a leap year
