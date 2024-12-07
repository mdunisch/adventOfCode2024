
export function part1(input: string) {

    const searchExp = /mul\((\d{1,3}),(\d{1,3})\)/g;
    const vaildOperations = [...input.matchAll(searchExp)];

    return vaildOperations.reduce((sum, i) => sum + parseInt(i[1]) * parseInt(i[2]), 0);

}

export function part2(input: string) {

    return 0;

}