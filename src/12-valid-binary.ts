/**
 * 12. Check Valid Binary Number
 * A valid binary number contains only 0 and 1.
 */

function isValidBinary(str: string): boolean {
  return /^[01]+$/.test(str);
}

const binary1: string = "1001";
const binary2: string = "2001";

console.log(isValidBinary(binary1)); // true
console.log(isValidBinary(binary2)); // false

export {};
