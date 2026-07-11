/**
 * 8. Print All Permutations of a String
 * Print all possible permutations and count the total number.
 */

const text: string = "cat";

function permutations(str: string): string[] {
  const chars: string[] = str.split("");
  const result: string[] = [];

  function permute(start: number): void {
    if (start === chars.length - 1) {
      result.push(chars.join(""));
      return;
    }
    for (let i = start; i < chars.length; i++) {
      [chars[start], chars[i]] = [chars[i], chars[start]]; // swap
      permute(start + 1);
      [chars[start], chars[i]] = [chars[i], chars[start]]; // backtrack
    }
  }

  permute(0);
  return result;
}

const perms = permutations(text);
console.log(`Permutations: ${perms.join(", ")}`);
console.log(`Total permutations: ${perms.length}`);
/*
Permutations: cat, cta, act, atc, tac, tca
Total permutations: 6
*/

export {};
