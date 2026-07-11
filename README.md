<div align="center">

# ⚡ TypeScript Ninja

### 15 TypeScript Problem-Solving Challenges — *Batch 18*

Clean, typed, and battle-tested solutions to array, string, number & algorithm problems.

<br/>

![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=node.js&logoColor=white)
![ts-node](https://img.shields.io/badge/ts--node-10.9-000000?style=for-the-badge&logo=tsnode&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

![Problems](https://img.shields.io/badge/Problems-15%2F15%20✓-2ea44f?style=for-the-badge)
![Type Safe](https://img.shields.io/badge/tsc%20--noEmit-passing-2ea44f?style=for-the-badge)
![Score](https://img.shields.io/badge/Score-150-blueviolet?style=for-the-badge)

</div>

---

## 📖 Overview

> **Topic:** TypeScript Programming &nbsp;•&nbsp; **Batch:** 18 &nbsp;•&nbsp; **Total Score:** 150 &nbsp;•&nbsp; **Due:** Jul 26, 2026

Fifteen self-contained TypeScript programs, one per file in [`src/`](src/). Every solution is
**strictly typed** (`"strict": true`), passes `tsc --noEmit`, and prints output that matches the
assignment's expected result exactly. Run them one-by-one or all at once.

<table>
<tr>
<td align="center"><b>15</b><br/>Programs</td>
<td align="center"><b>100%</b><br/>Type-safe</td>
<td align="center"><b>0</b><br/>Runtime deps</td>
<td align="center"><b>1</b><br/>Command to run all</td>
</tr>
</table>

---

## 🧭 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [📌 Solutions Index](#-solutions-index)
- [🧩 Problems & Solutions](#-problems--solutions)
- [🖥️ Live Output](#-live-output)
- [🗂️ Project Structure](#-project-structure)
- [🧰 Tech Stack](#-tech-stack)
- [📄 Google Docs / Sheet](#-google-docs--sheet)

---

## 🚀 Quick Start

**Prerequisites:** [Node.js](https://nodejs.org/) v18+ and npm.

```bash
# 1. Install dependencies (TypeScript + ts-node + @types/node)
npm install

# 2. Run a single program
npm run 01            # or 02, 03 … 15

# 3. Run every program in sequence
npm run all

# 4. (Optional) Type-check the whole project
npx tsc --noEmit
```

> 💡 You can also run any file directly:
> ```bash
> npx ts-node src/08-string-permutations.ts
> ```

> 🧹 `node_modules/` and `dist/` are excluded via [`.gitignore`](.gitignore).

---

## 📌 Solutions Index

| # | Problem | Key Technique | Run | Solution |
|:-:|---------|---------------|-----|----------|
| 01 | Difference of Max & 2nd Max | `Set` dedup + descending sort | `npm run 01` | [📄](src/01-max-second-max-difference.ts) |
| 02 | Sum of Prime Numbers | `isPrime` + `filter` + `reduce` | `npm run 02` | [📄](src/02-sum-of-primes.ts) |
| 03 | Sum of Unique Elements | `Set` dedup + `reduce` | `npm run 03` | [📄](src/03-sum-of-unique-elements.ts) |
| 04 | Find the Missing Number | Gauss sum formula | `npm run 04` | [📄](src/04-find-missing-number.ts) |
| 05 | Count Occurrences | `Map` frequency counter | `npm run 05` | [📄](src/05-count-occurrences.ts) |
| 06 | Repetitive Elements | `Map` counter + `filter > 1` | `npm run 06` | [📄](src/06-repetitive-elements.ts) |
| 07 | Unique Characters | `Set` (insertion order) | `npm run 07` | [📄](src/07-unique-characters.ts) |
| 08 | String Permutations | Backtracking (swap) recursion | `npm run 08` | [📄](src/08-string-permutations.ts) |
| 09 | Random Password | Guaranteed classes + Fisher–Yates | `npm run 09` | [📄](src/09-random-password.ts) |
| 10 | Remove Special Characters | Regex `[^a-zA-Z0-9]` | `npm run 10` | [📄](src/10-remove-special-characters.ts) |
| 11 | Remove Vowels | Regex strip + whitespace normalize | `npm run 11` | [📄](src/11-remove-vowels.ts) |
| 12 | Valid Binary Number | Regex `^[01]+$` | `npm run 12` | [📄](src/12-valid-binary.ts) |
| 13 | Discounted Total | Context-aware regex extraction | `npm run 13` | [📄](src/13-discounted-total.ts) |
| 14 | Currency Note Breakdown | Greedy algorithm | `npm run 14` | [📄](src/14-currency-note-breakdown.ts) |
| 15 | 5-Mark & 10-Mark Questions | Linear system (2 equations) | `npm run 15` | [📄](src/15-five-and-ten-mark-questions.ts) |

---

## 🧩 Problems & Solutions

<details>
<summary><b>01 · Difference Between Maximum and Second Maximum</b></summary>

**Input:** `[11, 7, 2, 15, 6]`
**Task:** Find `max − secondMax`.
**Approach:** Remove duplicates with a `Set`, sort descending, subtract `sorted[1]` from `sorted[0]`.

```text
Output: 4
```
📄 [src/01-max-second-max-difference.ts](src/01-max-second-max-difference.ts)
</details>

<details>
<summary><b>02 · Sum of Prime Numbers</b></summary>

**Input:** `[11, 15, 2, 7, 6]`
**Task:** Sum all prime numbers.
**Approach:** `isPrime()` trial division up to `√n`, then `filter` + `reduce`.

```text
Output: 20   (11 + 2 + 7)
```
📄 [src/02-sum-of-primes.ts](src/02-sum-of-primes.ts)
</details>

<details>
<summary><b>03 · Sum of Unique Elements After Removing Duplicates</b></summary>

**Input:** `[11, 7, 7, 11, 2, 15, 6, 6]`
**Task:** Remove duplicates, sum what remains.
**Approach:** `[...new Set(arr)]` then `reduce`.

```text
Output: 41   (11 + 7 + 2 + 15 + 6)
```
📄 [src/03-sum-of-unique-elements.ts](src/03-sum-of-unique-elements.ts)
</details>

<details>
<summary><b>04 · Find the Missing Number</b></summary>

**Input:** `[0, 1, 2, 4, 5]`
**Task:** Find the missing value via `n * (n + 1) / 2 − sumOfArray`.
**Approach:** With one number missing, `n === arr.length`; subtract the actual sum from the expected sum.

```text
Output: 3
```
📄 [src/04-find-missing-number.ts](src/04-find-missing-number.ts)
</details>

<details>
<summary><b>05 · Count Occurrence of Each Number</b></summary>

**Input:** `[1, 2, 2, 3, 3, 3, 4, 4, 4, 4]`
**Task:** Count how many times each number appears.
**Approach:** `Map<number, number>` frequency counter.

```text
1: 1
2: 2
3: 3
4: 4
```
📄 [src/05-count-occurrences.ts](src/05-count-occurrences.ts)
</details>

<details>
<summary><b>06 · Return Repetitive Elements</b></summary>

**Input:** `[1, 2, 3, 4, 4, 5, 6, 6, 7]`
**Task:** Return only the elements appearing more than once.
**Approach:** Build a frequency `Map`, keep entries with `count > 1`.

```text
Output: [ 4, 6 ]
```
📄 [src/06-repetitive-elements.ts](src/06-repetitive-elements.ts)
</details>

<details>
<summary><b>07 · Print Unique Characters from a String</b></summary>

**Input:** `"abcaabbcc"`
**Task:** Print unique characters and their count.
**Approach:** A `Set` preserves first-seen order.

```text
Unique characters: a, b, c
Total unique characters: 3
```
📄 [src/07-unique-characters.ts](src/07-unique-characters.ts)
</details>

<details>
<summary><b>08 · Print All Permutations of a String</b></summary>

**Input:** `"cat"`
**Task:** Print all permutations and their count.
**Approach:** Backtracking with in-place **swap** recursion — chosen because it reproduces the exact expected ordering.

```text
Permutations: cat, cta, act, atc, tac, tca
Total permutations: 6
```
📄 [src/08-string-permutations.ts](src/08-string-permutations.ts)
</details>

<details>
<summary><b>09 · Generate a Random Password</b></summary>

**Input:** `passwordLength = 8`
**Task:** Random password with ≥1 uppercase, lowercase, digit, and special character.
**Approach:** Force one char from each required class, fill the rest, then **Fisher–Yates shuffle** so positions aren't predictable.

```text
Example: A9@hjs7K   (random each run)
```
📄 [src/09-random-password.ts](src/09-random-password.ts)
</details>

<details>
<summary><b>10 · Remove All Special Characters</b></summary>

**Input:** `"s@atur!day"`
**Task:** Strip everything that isn't a letter or digit.
**Approach:** `str.replace(/[^a-zA-Z0-9]/g, "")`.

```text
Output: saturday
```
📄 [src/10-remove-special-characters.ts](src/10-remove-special-characters.ts)
</details>

<details>
<summary><b>11 · Remove All Vowels from a String</b></summary>

**Input:** `"I am a SQA Engineer"`
**Task:** Remove all vowels.
**Approach:** Strip vowels with `/[aeiou]/gi`, then collapse & trim the extra spaces (and lower-case) to match the expected output exactly.

```text
Output: m sq ngnr
```
📄 [src/11-remove-vowels.ts](src/11-remove-vowels.ts)
</details>

<details>
<summary><b>12 · Check Valid Binary Number</b></summary>

**Input:** `"1001"` / `"2001"`
**Task:** True only if the string contains only `0` and `1`.
**Approach:** `^[01]+$` regex test.

```text
"1001" -> true
"2001" -> false
```
📄 [src/12-valid-binary.ts](src/12-valid-binary.ts)
</details>

<details>
<summary><b>13 · Extract Digits and Calculate Discounted Total</b></summary>

**Input:** a paragraph mentioning an 85000 tk laptop, a 2500 tk mouse, 1 piece, 15% discount.
**Task:** Extract the numbers and compute the discounted total.
**Approach:** Context-aware extraction — numbers before `tk` (prices), before `piece` (qty), before `%` (discount) — so the stray `7` in *"Core i7"* is ignored.

```text
Output: 74375 tk   ((85000 + 2500) × 0.85)
```
📄 [src/13-discounted-total.ts](src/13-discounted-total.ts)
</details>

<details>
<summary><b>14 · Currency Note Breakdown</b></summary>

**Input:** `amount = 546`, notes `[1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]`
**Task:** Break the amount into the fewest notes.
**Approach:** Greedy — take as many of each largest note as possible.

```text
500 x 1
20 x 2
5 x 1
1 x 1
```
📄 [src/14-currency-note-breakdown.ts](src/14-currency-note-breakdown.ts)
</details>

<details>
<summary><b>15 · Find 5-Mark and 10-Mark Questions</b></summary>

**Input:** `totalQuestions = 15`, `totalMarks = 100`
**Task:** How many 5-mark and 10-mark questions make exactly 100?
**Approach:** Solve the linear system `x + y = 15`, `5x + 10y = 100`.

```text
5-mark questions: 10
10-mark questions: 5
```
📄 [src/15-five-and-ten-mark-questions.ts](src/15-five-and-ten-mark-questions.ts)
</details>

---

## 🖥️ Live Output

<details>
<summary><b>▶ Show full output of <code>npm run all</code></b></summary>

```text
===== 01-max-second-max-difference =====
4
===== 02-sum-of-primes =====
20
===== 03-sum-of-unique-elements =====
41
===== 04-find-missing-number =====
3
===== 05-count-occurrences =====
1: 1
2: 2
3: 3
4: 4
===== 06-repetitive-elements =====
[ 4, 6 ]
===== 07-unique-characters =====
Unique characters: a, b, c
Total unique characters: 3
===== 08-string-permutations =====
Permutations: cat, cta, act, atc, tac, tca
Total permutations: 6
===== 09-random-password =====
aFzxV^4q
===== 10-remove-special-characters =====
saturday
===== 11-remove-vowels =====
m sq ngnr
===== 12-valid-binary =====
true
false
===== 13-discounted-total =====
74375 tk
===== 14-currency-note-breakdown =====
500 x 1
20 x 2
5 x 1
1 x 1
===== 15-five-and-ten-mark-questions =====
5-mark questions: 10
10-mark questions: 5
```
</details>

---

## 🗂️ Project Structure

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
│   └── run-all.ts          # runs every program with labeled headers
├── package.json            # npm scripts: 01…15 + all
├── tsconfig.json           # strict TypeScript config
├── .gitignore              # node_modules/, dist/
└── README.md
```

---

## 🧰 Tech Stack

| Tool | Purpose |
|------|---------|
| **TypeScript 5** | Strictly-typed source (`"strict": true`) |
| **ts-node** | Run `.ts` files directly — no build step |
| **@types/node** | Node.js type definitions |
| **npm scripts** | One command per program (`npm run 01` … `15`, `npm run all`) |

---

## 📄 Google Docs / Sheet

All programs are also written sequentially in the Google Sheet / Doc below:

**🔗 Link:** `<PASTE-YOUR-GOOGLE-DOCS-OR-SHEET-LINK-HERE>`

> ⚠️ Replace the placeholder with your shareable link (**Anyone with the link – Viewer**) before submitting.

---

<div align="center">

Made with ⚡ and **TypeScript** &nbsp;•&nbsp; Batch 18

</div>
