import { assertEquals } from "jsr:@std/assert";
import { part1, part2 } from "./solution.ts";

const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;


Deno.test("part 1", () => {
  assertEquals(part1(input), 18);
});



Deno.test("part 2", () => {
  assertEquals(part2(input), 9);
});