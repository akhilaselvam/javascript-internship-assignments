console.log("===== Assignment 3 =====");

const score = Number(prompt("Enter your test score (0-100):", "85"));

// if...else: validate the score
if (isNaN(score) || score < 0 || score > 100) {
  console.log("Invalid score. Enter a number between 0 and 100.");
} else {
  // switch: determine grade
  let grade;
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:
      grade = "A";
      break;
    case 8:
      grade = "B";
      break;
    case 7:
      grade = "C";
      break;
    case 6:
      grade = "D";
      break;
    default:
      grade = "F";
  }

  // ternary: pass or fail
  const status = score >= 60 ? "Passed" : "Failed";

  console.log(`Score: ${score}`);
  console.log(`Grade: ${grade}`);
  console.log(`Status: ${status}`);
}