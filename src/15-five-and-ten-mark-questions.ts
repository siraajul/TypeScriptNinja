/**
 * 15. Find 5-Mark and 10-Mark Questions
 * Each question is worth either 5 or 10 marks.
 * Find how many of each are needed to make exactly the total marks.
 *
 * Let x = number of 5-mark questions, y = number of 10-mark questions.
 *   x + y = totalQuestions
 *   5x + 10y = totalMarks
 * Solving: x = (10 * totalQuestions - totalMarks) / 5, y = totalQuestions - x
 */

const totalQuestions: number = 15;
const totalMarks: number = 100;

function findQuestions(
  questionCount: number,
  marks: number
): { fiveMark: number; tenMark: number } {
  const fiveMark = (10 * questionCount - marks) / 5;
  const tenMark = questionCount - fiveMark;
  return { fiveMark, tenMark };
}

const { fiveMark, tenMark } = findQuestions(totalQuestions, totalMarks);
console.log(`5-mark questions: ${fiveMark}`);
console.log(`10-mark questions: ${tenMark}`);
/*
5-mark questions: 10
10-mark questions: 5
*/

export {};
