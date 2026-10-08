console.log("--- Initializing Inventory System ---");

// Pre-existing items
const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

// ---------- 1. Input + 3. Loops (while, break, continue) ----------
function getValidProduct() {
  let attempts = 0;
  while (attempts < 3) {
    attempts++;
    const name = prompt("Enter product name:", "Monitor");
    const price = Number(prompt("Enter product price:", "150")); // explicit conversion

    if (name === null || name.trim() === "") {
      console.log("Invalid name. Try again.");
      continue; // skip bad input
    }
    if (isNaN(price) || price <= 0) {
      console.log("Invalid price. Try again.");
      continue;
    }
    return { name: name.trim(), price: price };
  }
  return null; // too many bad attempts
}

// Search inventory for duplicates (for loop + break)
function productExists(name) {
  let found = false;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
      found = true;
      break;
    }
  }
  return found;
}

const newProduct = getValidProduct();

if (newProduct === null) {
  console.log("No valid product entered. Skipping add.");
} else if (productExists(newProduct.name)) {
  console.log(`"${newProduct.name}" already exists in inventory.`);
} else {
  inventory.push(newProduct);
  console.log(`[Prompt executed: User adds "${newProduct.name}" at "$${newProduct.price}"]`);
}

// ---------- 2. Control flow: if...else + switch ----------
function getCategory(price) {
  let tier;
  if (price >= 500) {
    tier = "high";
  } else if (price < 50) {
    tier = "low";
  } else {
    tier = "mid";
  }

  switch (tier) {
    case "high":
      return "Premium";
    case "low":
      return "Budget";
    default:
      return "Standard";
  }
}

// ---------- 4. Functions & scope ----------
// Regular function
function calculateTotal(items) {
  let total = 0; // local variable
  for (const item of items) {
    total += item.price;
  }
  return total;
}

// Arrow function with default parameters (tax/discount)
const applyAdjustments = (price, discount = 0, tax = 0) => {
  const afterDiscount = price - price * discount / 100;
  return afterDiscount + afterDiscount * tax / 100;
};

// helper to print arrays like ["a", "b"]
const formatList = (list) => "[" + list.map(x => `"${x}"`).join(", ") + "]";

// ---------- 5. Array methods ----------
console.log("");
console.log("--- Processing Inventory Roster (forEach) ---");
inventory.forEach(item => {
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`);
});

console.log("");
console.log("--- Financial Analytics ---");
console.log(`Total Inventory Value: $${calculateTotal(inventory)}`);

const affordable = inventory
  .filter(item => item.price < 200)
  .map(item => item.name);
console.log(`Filtered Affordable Items (Under $200): ${formatList(affordable)}`);

const report = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log(`Formatted Report List: ${formatList(report)}`);

// Example of using the arrow function (10% discount, 5% tax on the laptop)
console.log(`Laptop after 10% discount + 5% tax: $${applyAdjustments(800, 10, 5).toFixed(2)}`);