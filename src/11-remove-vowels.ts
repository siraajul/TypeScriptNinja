/**
 * 11. Remove All Vowels from a String
 * Remove all vowels (a, e, i, o, u) from the string.
 *
 * To match the expected output "m sq ngnr", the leftover text is also
 * lower-cased and any extra spaces created by the removal are collapsed/trimmed.
 */

const text: string = "I am a SQA Engineer";

function removeVowels(str: string): string {
  return str
    .replace(/[aeiou]/gi, "") // remove vowels (both cases)
    .replace(/\s+/g, " ")     // collapse multiple spaces into one
    .trim()                   // drop leading/trailing space
    .toLowerCase();
}

console.log(removeVowels(text)); // m sq ngnr

export {};
