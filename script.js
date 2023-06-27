function decimalToBinary(decimal) {
  // Check if the input is a valid positive integer
  if (!Number.isInteger(decimal) || decimal < 0) {
    console.log('Input must be a positive integer.');
    return;
  }

  // Base case: decimal number is 0
  if (decimal === 0) {
    return '0';
  }

  let binary = '';

  // Convert decimal to binary using repeated division by 2
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}

// Test case
const decimal = 7;
const binary = decimalToBinary(decimal);
console.log(binary); // Output: 111


