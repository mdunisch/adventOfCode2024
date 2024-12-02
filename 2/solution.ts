function isMonotonic(input: number[]): boolean {
    return input.every((v, i) => i === 0 || v <= input[i - 1])
        ||
        input.every((v, i) => i === 0 || v >= input[i - 1])
}


export function part1(input: string) {

    const inputAsNumbers = input.split('\n').map(i => i.split(' ').map(i => parseInt(i)));

    const validLines = inputAsNumbers.filter(line => {

        const isGraduallySafe = line.every((value, i) => {
            if (i === 0) {
                return true
            }
            const diff = Math.abs(value - line[i - 1]);
            return (diff >= 1 && diff <= 3);
        });

        return isGraduallySafe && isMonotonic(line);
    });

    return validLines.length;

}

export function part2(input: string) {
    return 0;
}