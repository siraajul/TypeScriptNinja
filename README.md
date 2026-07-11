# TypeScript Ninja — Problem Solving (Batch 18)

**Topic:** TypeScript Programming
**Total Score:** 150
**Submission Date:** Jul 26, 2026

A collection of 15 TypeScript programs solving basic problem-solving tasks
(arrays, strings, numbers, and simple algorithms). Each program is a standalone
file inside [`src/`](src/) and can be run individually or all together.

---

## 📄 Google Docs / Sheet Link

> All programs are also written sequentially in the Google Sheet / Doc below:

**Link:** `<PASTE-YOUR-GOOGLE-DOCS-OR-SHEET-LINK-HERE>`

> ⚠️ Replace the placeholder above with your actual shareable Google Docs/Sheet
> link (set sharing to **"Anyone with the link – Viewer"**) before submitting.

---

## 🛠️ How to Run

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer) and npm

### 1. Install dependencies
The project uses **TypeScript** and **ts-node** (to run `.ts` files directly
without a separate compile step). They are listed in `package.json`, so simply run:

```bash
npm install
```

This installs:
- `typescript` — the TypeScript compiler
- `ts-node` — runs TypeScript files directly
- `@types/node` — Node.js type definitions

> First-time manual install (if you started from scratch):
> ```bash
> npm install --save-dev typescript ts-node @types/node
> ```

### 2. Run a single program
Each program has a numbered npm script:

```bash
npm run 01   # Difference Between Maximum and Second Maximum
npm run 02   # Sum of Prime Numbers
...
npm run 15   # Find 5-Mark and 10-Mark Questions
```

Or run any file directly with ts-node:

```bash
npx ts-node src/01-max-second-max-difference.ts
```

### 3. Run all programs at once
```bash
npm run all
```

### (Optional) Type-check everything
```bash
npx tsc --noEmit
```

---

## 📁 Project Structure

```
TypeScriptNinja/
├── src/
│   ├── 01-max-second-max-difference.ts
│   ├── 02-sum-of-primes.ts
│   ├── 03-sum-of-unique-elements.ts
│   ├── 04-find-missing-number.ts
│   ├── 05-count-occurrences.ts
│   ├── 06-repetitive-elements.ts
│   ├── 07-unique-characters.ts
│   ├── 08-string-permutations.ts
│   ├── 09-random-password.ts
│   ├── 10-remove-special-characters.ts
│   ├── 11-remove-vowels.ts
│   ├── 12-valid-binary.ts
│   ├── 13-discounted-total.ts
│   ├── 14-currency-note-breakdown.ts
│   ├── 15-five-and-ten-mark-questions.ts
│   └── run-all.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## 📝 Questions & Expected Output

### 1. Difference Between Maximum and Second Maximum
Given `const numbers: number[] = [11, 7, 2, 15, 6];`, find the difference between
the maximum value and the second maximum value.
**Expected Output:** `4`

### 2. Sum of Prime Numbers
Given `const numbers: number[] = [11, 15, 2, 7, 6];`, calculate the sum of all
prime numbers in the array.
**Expected Output:** `20`

### 3. Sum of Unique Elements After Removing Duplicates
Given `const numbers: number[] = [11, 7, 7, 11, 2, 15, 6, 6];`, remove duplicate
values and calculate the sum of the unique elements.
**Expected Output:** `41`

### 4. Find the Missing Number
Given `const numbers: number[] = [0, 1, 2, 4, 5];`, find the missing number using
the formula `n * (n + 1) / 2 - sumOfArray`.
**Expected Output:** `3`

### 5. Count Occurrence of Each Number
Given `const numbers: number[] = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];`, count the
occurrence of each number.
**Expected Output:**
```
1: 1
2: 2
3: 3
4: 4
```

### 6. Return Repetitive Elements
Given `const numbers: number[] = [1, 2, 3, 4, 4, 5, 6, 6, 7];`, return only the
elements that appear more than once.
**Expected Output:** `[4, 6]`

### 7. Print Unique Characters from a String
Given `const text: string = "abcaabbcc";`, print all unique characters and count
the total number of unique characters.
**Expected Output:**
```
Unique characters: a, b, c
Total unique characters: 3
```

### 8. Print All Permutations of a String
Given `const text: string = "cat";`, print all possible permutations of the
string and count the total number of permutations.
**Expected Output:**
```
Permutations: cat, cta, act, atc, tac, tca
Total permutations: 6
```

### 9. Generate a Random Password
Generate a random password of `const passwordLength: number = 8;` containing at
least one uppercase letter, one lowercase letter, one numeric digit and one
special character.
**Example Output:** `A9@hjs7K` (random each run)

### 10. Remove All Special Characters
Given `const text: string = "s@atur!day";`, remove all special characters.
**Expected Output:** `saturday`

### 11. Remove All Vowels from a String
Given `const text: string = "I am a SQA Engineer";`, remove all vowels.
**Expected Output:** `m sq ngnr`

### 12. Check Valid Binary Number
Check whether a given string is a valid binary number (only `0` and `1`).
- `"1001"` → `true`
- `"2001"` → `false`

### 13. Extract Digits and Calculate Discounted Total
From the paragraph about an 85000 tk laptop and a 2500 tk mouse (buy 1 mouse,
15% discount), extract the numeric values and calculate the final cost.
**Expected Output:** `74375 tk`

### 14. Currency Note Breakdown
Given `const amount: number = 546;` and
`const notes: number[] = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];`, break the
amount down into the minimum number of currency notes.
**Expected Output:**
```
500 x 1
20 x 2
5 x 1
1 x 1
```

### 15. Find 5-Mark and 10-Mark Questions
Given `const totalQuestions: number = 15;` and `const totalMarks: number = 100;`
(each question is 5 or 10 marks), find how many 5-mark and 10-mark questions make
exactly 100 marks.
**Expected Output:**
```
5-mark questions: 10
10-mark questions: 5
```
