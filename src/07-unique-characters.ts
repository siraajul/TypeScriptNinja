/**
 * 7. Print Unique Characters from a String
 * Print all unique characters and count the total number of unique characters.
 */

const text: string = "abcaabbcc";

function uniqueCharacters(str: string): string[] {
  // Set preserves first-seen order, so "abcaabbcc" -> ['a', 'b', 'c'].
  return [...new Set(str.split(""))];
}

const unique = uniqueCharacters(text);
console.log(`Unique characters: ${unique.join(", ")}`);
console.log(`Total unique characters: ${unique.length}`);
/*
Unique characters: a, b, c
Total unique characters: 3
*/

export {};
