/**
 * 10. Remove All Special Characters
 * Remove every character that is not a letter or a digit.
 */

const text: string = "s@atur!day";

function removeSpecialCharacters(str: string): string {
  return str.replace(/[^a-zA-Z0-9]/g, "");
}

console.log(removeSpecialCharacters(text)); // saturday

export {};
