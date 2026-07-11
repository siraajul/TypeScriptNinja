/**
 * 6. Return Repetitive Elements
 * Return only the elements that appear more than once.
 */

const numbers: number[] = [1, 2, 3, 4, 4, 5, 6, 6, 7];

function repetitiveElements(arr: number[]): number[] {
  const counts = new Map<number, number>();
  for (const num of arr) {
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  const repeated: number[] = [];
  for (const [num, count] of counts) {
    if (count > 1) repeated.push(num);
  }
  return repeated;
}

console.log(repetitiveElements(numbers)); // [ 4, 6 ]

export {};
