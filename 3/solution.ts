export function part1(input: string) {

    const searchExp = /mul\((\d{1,3}),(\d{1,3})\)/g;
    const vaildOperations = [...input.matchAll(searchExp)];

    return vaildOperations.reduce((sum, i) => sum + parseInt(i[1]) * parseInt(i[2]), 0);

}

export function part2(input: string) {

    const searchExp = /mul\(([0-9]{1,3}),([0-9]{1,3})\)|don't\(\)|do\(\)/g;

    let result = 0;
    let multiply = true;

    [...input.matchAll(searchExp)].forEach(([ operator, factor1, factor2]) => {
        if (operator === "don't()") {
            multiply = false;
        }

        if (operator === "do()") {
            multiply = true;
        }

        if (multiply && operator.startsWith('mul')) {
            result += parseInt(factor1) * parseInt(factor2);
        }
    });

    return result;
}

