import { assertEquals } from "jsr:@std/assert";
import { part1, part2 } from "./solution.ts";

const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;


Deno.test("part 1", () => {
  assertEquals(part1(input), 2);
});


Deno.test("part 2", () => {
  assertEquals(part2(input), 4);
});