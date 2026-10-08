console.log("===== Assignment 5 =====");

// Standard function with default parameters
function calculateArea(length = 5, width = 4) {
  return length * width;
}

// Arrow function with default parameters
const calculateAreaArrow = (length = 5, width = 4) => length * width;

console.log("Standard Function Area (Default 5x4): " + calculateArea());
console.log("Arrow Function Area (Custom 10x3): " + calculateAreaArrow(10, 3));

// Block scope demonstration
{
  let blockVar = "I only exist inside this block";
  console.log(blockVar);
}

try {
  console.log(blockVar); // outside the block, so this throws an error
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: ${error.message} (when accessed outside block)`);
}

// Function scope demonstration
function scopeDemo() {
  var functionVar = "I only exist inside this function";
  return functionVar;
}
scopeDemo();

try {
  console.log(functionVar);
} catch (error) {
  console.log(`Function Scope Error: ${error.name}: ${error.message}`);
}