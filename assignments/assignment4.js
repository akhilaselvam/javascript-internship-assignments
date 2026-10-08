console.log("===== Assignment 4 =====");

// 1. for loop: multiplication table
console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 2. while loop with break
console.log("-- First number > 10 divisible by 6 --");
let num = 11;
while (true) {
  if (num % 6 === 0) {
    console.log(`Found: ${num}`);
    break;
  }
  num++;
}

// 3. do...while loop with continue (skips even numbers)
console.log("-- Odd numbers 1 to 10 (do...while with continue) --");
let n = 0;
do {
  n++;
  if (n % 2 === 0) {
    continue; // skip even numbers
  }
  console.log(n);
} while (n < 10);