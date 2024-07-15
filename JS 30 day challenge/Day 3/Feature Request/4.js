/* Grade assignment script: Create a script that uses a switch case to
assign a grade based on a score & logs the result in the console */

function grade(score) {
  switch (true) {
    case (score >= 90):
      console.log("A grade");
      break;
    
    case (score >= 80):
      console.log("B grade");
      break;

    case (score >= 70):
      console.log("C grade");
      break;

    case (score >= 60):
      console.log("D grade");
      break;

    case (score >= 35):
      console.log("E grade");
      break;

    case (score < 35):
      console.log("F grade");
      break;

    default:
      console.log("Invalid score");
      break;
  }
}

// Example usage:
grade(95); // Outputs: A grade
grade(85); // Outputs: B grade
grade(75); // Outputs: C grade
grade(65); // Outputs: D grade
grade(40); // Outputs: E grade
grade(20); // Outputs: F grade
