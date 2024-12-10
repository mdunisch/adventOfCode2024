function diagonal(data: string[], fromBottom: boolean) {
    const length = {
        x: data[0].length,
        y: data.length,
        max: Math.max(data[0].length, data.length)
    };

    let temp, x, y;

    const result = [];

    for (let k = 0; k <= 2 * (length.max - 1); ++k) {
        for (temp = [], y = length.y - 1; y >= 0; --y) {
            x = k - (fromBottom ? length.y - y : y);
            x >= 0 && x < length.x && temp.push(data[y][x]);
        }
        temp.length > 0 && result.push(temp.join(''));
    }
    return result;
}

function getDiagonals(rows: string[], x: number, y: number) {
    return [
        rows[y - 1]?.at(x - 1) + 'A' + rows[y + 1]?.at(x + 1),
        rows[y + 1]?.at(x - 1) + 'A' + rows[y - 1]?.at(x + 1),
    ]
}


export function part1(input: string) {

    const rows = input.split('\n');
    const colums = rows[0].split('').map((_val, i) => {
        return rows.reduce((val, current) => val + current.charAt(i), '');
    });
    const diagonals = [...diagonal(rows, true), ...diagonal(rows, false)];


    const searchRegx = /(?=XMAS)|(?=SAMX)/g;

    const foundInRows = rows.reduce((sum, line) => sum += [...line.matchAll(searchRegx)].length, 0);
    const foundInColums = colums.reduce((sum, line) => sum += [...line.matchAll(searchRegx)].length, 0);
    const foundInDiagonals = diagonals.reduce((sum, line) => sum += [...line.matchAll(searchRegx)].length, 0);

    return foundInRows + foundInColums + foundInDiagonals;
}

export function part2(input: string) {

    const rows = input.split('\n');
    let result = 0;

    rows.forEach((val, lineNum) => {
        val.split('').forEach((element, index) => {

            if (element != 'A') {
                return;
            }
            const diagonals = getDiagonals(rows, index, lineNum);
            if (diagonals.every(i => i === 'SAM' || i === 'MAS')) {
                result++;
            }
        });
    });

    return result;
}

