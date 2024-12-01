import { assertEquals } from "jsr:@std/assert";
import { part1, part2 } from "./solution.ts";

const input = `3   4
4   3
2   5
1   3
3   9
3   3`;


Deno.test("part 1", () => {
  assertEquals(part1(input), 11);
});


Deno.test("part 2", () => {
  assertEquals(part2(input), 31);
});