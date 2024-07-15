/* Write a program that uses a switch case to assign a grade ('A','B','C','D','E','F')
based on a score and log the grade to the console. */

function getGrade(score) {
  let grade;
  switch (true) {
    case (score >= 90):
      grade = 'A';
      break;
    case (score >= 75 && score < 90):
      grade = 'B';
      break;
    case (score >= 60 && score < 75):
      grade = 'C';
      break;
    case (score >= 50 && score < 60):
      grade = 'D';
      break;
    case (score >= 36 && score < 50):
      grade = 'E';
      break;
    case (score < 36):
      grade = 'F';
      break;
    default:
      grade = 'Invalid Score';
  }
  console.log(`Score: ${score}, Grade: ${grade}`);
}

// Example usage
getGrade(80); // Score: 80, Grade: B
getGrade(40); // Score: 40, Grade: E
getGrade(50); // Score: 50, Grade: D
getGrade(27); // Score: 27, Grade: F
getGrade(95); // Score: 95, Grade: A
