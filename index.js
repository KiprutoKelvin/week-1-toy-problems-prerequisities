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