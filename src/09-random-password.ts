/**
 * 9. Generate a Random Password
 * Generate a random password that contains at least one uppercase letter,
 * one lowercase letter, one numeric digit and one special character.
 */

const passwordLength: number = 8;

function generatePassword(length: number): string {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const special = "!@#$%^&*";
  const all = uppercase + lowercase + digits + special;

  const pick = (set: string): string =>
    set[Math.floor(Math.random() * set.length)];

  // Guarantee at least one character from each required group.
  const required: string[] = [
    pick(uppercase),
    pick(lowercase),
    pick(digits),
    pick(special),
  ];

  // Fill the remaining slots with any allowed character.
  const chars: string[] = [...required];
  for (let i = required.length; i < length; i++) {
    chars.push(pick(all));
  }

  // Shuffle so the required characters are not always at the front.
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  return chars.join("");
}

console.log(generatePassword(passwordLength)); // e.g. A9@hjs7K (random each run)

export {};
