import { assertEquals } from "jsr:@std/assert";
import { part1 } from "./solution.ts";


Deno.test("part 1", () => {

  const input = `3   4
4   3
2   5
1   3
3   9
3   3`;

  
  assertEquals(part1(input), 11);
});