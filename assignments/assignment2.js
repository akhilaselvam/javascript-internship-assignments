console.log("===== Assignment 2 =====");

// prompt() always returns a string, so convert with Number()
const bill = Number(prompt("Enter bill amount:", "100"));
const tipPercent = Number(prompt("Enter tip percentage:", "15"));

if (isNaN(bill) || isNaN(tipPercent)) {
  console.log("Invalid input. Please enter numbers only.");
} else {
  const tip = (bill * tipPercent) / 100;
  let total = bill;
  total += tip; // assignment operator

  console.log(`Subtotal: $${bill}`);
  console.log(`Tip Percentage: ${tipPercent}%`);
  console.log(`Calculated Tip: $${tip}`);
  console.log(`Total Amount to Pay: $${total}`);
}