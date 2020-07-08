import { assertEquals } from "./test_deps.ts";
import { castUint32, mtrand } from "./mod.ts";

const { test } = Deno;

export const runTests = () => {
  const rand = mtrand(0);
  const rands = [];

  console.log("Here are some random numbers:\n");
  for (let i = 0; i < 10; i++) {
    // console.log(`${i}:  ${rng.next().value}`);
    rands.push(rand.next().value);
  }
  const uniqueRands = new Set(rngs);
  test("all elms are unique", () => {
    assertEquals(rands.length === uniqueRands.size, true);
  });
};
