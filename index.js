// Addition function
function add(a, b) {
    return a + b;
}

// Subtraction function
function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}

// Division function
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// Modulus function
function modulus(a, b) {
    return a % b;
}

// Example usage
console.log("Addition: 5 + 3 =", add(5, 3));          // Output: 8
console.log("Subtraction: 5 - 3 =", subtract(5, 3));  // Output: 2
console.log("Multiplication: 5 * 3 =", multiply(5, 3)); // Output: 15
console.log("Division: 5 / 3 =", divide(5, 3));       // Output: 1.6666666666666667
console.log("Modulus: 5 % 3 =", modulus(5, 3));       // Output: 2
