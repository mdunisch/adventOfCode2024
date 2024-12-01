export function part1(input: string) {

    const inputAsNumbers = input.split('\n').map(i => i.split('   ')).flat().map(i => parseInt(i));

    const left = inputAsNumbers.filter((_i, index) => index % 2 === 0).sort((a, b) => a - b);
    const right = inputAsNumbers.filter((_i, index) => index % 2 != 0).sort((a, b) => a - b);

    return left.reduce((sum, _i, index) => {
        return sum + Math.abs(right[index] - left[index]);
    }, 0);

}

export function part2(input: string) {

    const inputAsNumbers = input.split('\n').map(i => i.split('   ')).flat().map(i => parseInt(i));

    const {left, right} = Object.groupBy(inputAsNumbers, (_i, index) =>  index % 2 === 0 ? 'left' : 'right');

    return left.reduce((sum, i) => {
        return sum + (i * right.filter(rightElement => rightElement === i).length);
    }, 0);
}