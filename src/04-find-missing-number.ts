/**
 * 4. Find the Missing Number
 * The array holds numbers from 0..n with exactly one missing.
 * Missing = n * (n + 1) / 2 - sumOfArray
 */

const numbers: number[] = [0, 1, 2, 4, 5];

function findMissingNumber(arr: number[]): number {
  // One number is missing, so the complete range 0..n has arr.length + 1 items,
  // which means n === arr.length.
  const n: number = arr.length;
  const expectedSum: number = (n * (n + 1)) / 2;
  const sumOfArray: number = arr.reduce((sum, current) => sum + current, 0);

  return expectedSum - sumOfArray;
}

console.log(findMissingNumber(numbers)); // 3

export {};
