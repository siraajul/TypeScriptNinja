/**
 * 1. Difference Between Maximum and Second Maximum
 * Find the difference between the maximum value and the second maximum value.
 */

const numbers: number[] = [11, 7, 2, 15, 6];

function maxSecondMaxDifference(arr: number[]): number {
  // Remove duplicates so the "second maximum" is a genuinely different value,
  // then sort in descending order.
  const sorted: number[] = [...new Set(arr)].sort((a, b) => b - a);

  const maximum: number = sorted[0];
  const secondMaximum: number = sorted[1];

  return maximum - secondMaximum;
}

console.log(maxSecondMaxDifference(numbers)); // 4

export {};
