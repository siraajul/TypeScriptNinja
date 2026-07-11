/**
 * 14. Currency Note Breakdown
 * Break the amount down into the minimum number of currency notes.
 */

const amount: number = 546;
const notes: number[] = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

function breakdown(total: number, availableNotes: number[]): void {
  let remaining = total;
  for (const note of availableNotes) {
    const count = Math.floor(remaining / note);
    if (count > 0) {
      console.log(`${note} x ${count}`);
      remaining -= note * count;
    }
  }
}

breakdown(amount, notes);
/*
500 x 1
20 x 2
5 x 1
1 x 1
*/

export {};
