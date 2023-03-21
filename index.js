//Challenge 1
//Solution for generating students grades
//write a function generateStudent
function generateStudentGrade() {
    const marks = parseInt(prompt("Enter student marks (between 0 and 100):"));
//using condition and return statement 
    if (isNaN(marks) || marks < 0 || marks > 100) {
      return "Invalid input";
    } else if (marks > 79) {
      return "A";
    } else if (marks >= 60) {
      return "B";
    } else if (marks >= 50) {
      return "C";
    } else if (marks >= 40) {
      return "D";
    } else {
      return "E";
    }
  }
//Challenge 2
//Code solution for checking speed
//using function declaration and expression
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  let demeritPoints = 0;
//conditional statement(using if)
  if (speed <= speedLimit) {
    console.log("Ok");
    return;
  }
  demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log(`Points: ${demeritPoints}`);
  }
}

