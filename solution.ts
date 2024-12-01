const day = Deno.args[0];

const { part1, part2 } = await import(`./${day}/solution.ts`);
const text = (await Deno.readTextFile(`${day}/input.txt`)).trim();


console.log(`For Day ${day} part 1: ${part1(text)}`);
console.log(`For Day ${day} part 2: ${part2(text)}`);

