/**
 * 13. Extract Digits and Calculate Discounted Total
 * Extract the necessary numeric values from the paragraph and calculate the
 * final cost after applying the discount.
 *
 * Note: a naive /\d+/g would also grab the "7" from "Core i7", so we extract
 * each value by its context instead:
 *   - prices     -> numbers followed by "tk"   -> 85000, 2500
 *   - quantity   -> number followed by "piece" -> 1
 *   - discount   -> number followed by "%"     -> 15
 */

const paragraph: string =
  "A Core i7 laptop price is 85000 tk and a gaming mouse price is 2500 tk. If I buy the laptop and 1 piece of mouse, what will be my total cost after giving 15% discount?";

function discountedTotal(text: string): number {
  const prices: number[] = [...text.matchAll(/(\d+)\s*tk/g)].map((m) =>
    Number(m[1])
  );
  const quantity: number = Number(text.match(/(\d+)\s*piece/)?.[1] ?? 1);
  const discountPercent: number = Number(text.match(/(\d+)\s*%/)?.[1] ?? 0);

  const [laptopPrice, mousePrice] = prices;
  const subtotal = laptopPrice + mousePrice * quantity;
  const total = subtotal * (1 - discountPercent / 100);

  return total;
}

console.log(`${discountedTotal(paragraph)} tk`); // 74375 tk

export {};
