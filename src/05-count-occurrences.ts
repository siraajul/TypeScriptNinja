/**
 * 5. Count Occurrence of Each Number
 * Count how many times each number appears.
 */

const numbers: number[] = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

function countOccurrences(arr: number[]): Map<number, number> {
  const counts = new Map<number, number>();
  for (const num of arr) {
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }
  return counts;
}

const result = countOccurrences(numbers);
for (const [num, count] of result) {
  console.log(`${num}: ${count}`);
}
/*
1: 1
2: 2
3: 3
4: 4
*/

export {};
