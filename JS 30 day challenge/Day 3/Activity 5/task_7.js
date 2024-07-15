/* Write a program to check if a year is leap year using multiple conditions
(divisible by 4, but not hundred unless also divisible by 400) & log the result */

function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(`${year} is a leap year.`);
  } else {
      console.log(`${year} is not a leap year.`);
  }
}

// Example usage:
checkLeapYear(2020); // Outputs: 2020 is a leap year.
checkLeapYear(1900); // Outputs: 1900 is not a leap year.
checkLeapYear(2000); // Outputs: 2000 is a leap year.
checkLeapYear(2021); // Outputs: 2021 is not a leap year.
