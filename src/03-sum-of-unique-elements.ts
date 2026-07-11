/**
 * 3. Sum of Unique Elements After Removing Duplicates
 * Remove duplicate values and calculate the sum of the unique elements.
 */

const numbers: number[] = [11, 7, 7, 11, 2, 15, 6, 6];

function sumOfUniqueElements(arr: number[]): number {
  const unique: number[] = [...new Set(arr)];
  return unique.reduce((sum, current) => sum + current, 0);
}

console.log(sumOfUniqueElements(numbers)); // 41  (11 + 7 + 2 + 15 + 6)

export {};
