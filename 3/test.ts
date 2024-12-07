import { assertEquals } from "jsr:@std/assert";
import { part1, part2 } from "./solution.ts";

const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;


Deno.test("part 1", () => {
  assertEquals(part1(input), 161);
});



Deno.test("part 2", () => {
  assertEquals(part2(input), 48);
});