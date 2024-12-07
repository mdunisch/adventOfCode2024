function isMonotonic(input: number[]): boolean {
    return input.every((v, i) => i === 0 || v <= input[i - 1])
        ||
        input.every((v, i) => i === 0 || v >= input[i - 1])
}

function isGraduallySafe(input: number[]): boolean {
    return input.every((value, i) => {
        if (i === 0) {
            return true
        }
        const diff = Math.abs(value - input[i - 1]);
        return (diff >= 1 && diff <= 3);
    })
}

function arrayWithout(input: number[], position: number) {
    return input.slice(0, position).concat(input.slice(position + 1));
}


export function part1(input: string) {

    const inputAsNumbers = input.split('\n').map(i => i.split(' ').map(i => parseInt(i)));

    const validLines = inputAsNumbers.filter(line => isGraduallySafe(line) && isMonotonic(line));

    return validLines.length;

}

export function part2(input: string) {

    const inputAsNumbers = input.split('\n').map(i => i.split(' ').map(i => parseInt(i)));

    const validLines = inputAsNumbers.filter(line => {

        if (isGraduallySafe(line) && isMonotonic(line)) {
            return true;
        }

        let vaild = false;

        for (let i = 0; i < line.length; i++) {
            const inputToCheck = arrayWithout(line, i);
            vaild = isGraduallySafe(inputToCheck) && isMonotonic(inputToCheck);

            if (vaild) {
                break;
            }
        }

        return vaild;

    });

    return validLines.length;

}