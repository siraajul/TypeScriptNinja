/**
 * Runs every program in order and prints a labeled header before each one.
 * Usage: npm run all
 */

const programs: string[] = [
  "01-max-second-max-difference",
  "02-sum-of-primes",
  "03-sum-of-unique-elements",
  "04-find-missing-number",
  "05-count-occurrences",
  "06-repetitive-elements",
  "07-unique-characters",
  "08-string-permutations",
  "09-random-password",
  "10-remove-special-characters",
  "11-remove-vowels",
  "12-valid-binary",
  "13-discounted-total",
  "14-currency-note-breakdown",
  "15-five-and-ten-mark-questions",
];

for (const program of programs) {
  console.log(`\n===== ${program} =====`);
  require(`./${program}`);
}

export {};
