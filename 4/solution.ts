function diagonal(data: string[], fromBottom: boolean) {
    const length = { 
        x : data[0].length, 
        y : data.length, 
        max: Math.max(data[0].length, data.length)
    };

    let temp, k, x, y;

    const result = [];

    for (k = 0; k <= 2 * (length.max - 1); ++k) {
        for (temp = [], y = length.y - 1; y >= 0; --y) {
            x = k - (fromBottom ? length.y - y : y);
            x >= 0 && x < length.x && temp.push(data[y][x]);
        }
        temp.length > 0 && result.push(temp.join(''));
    }
    return result;
}


export function part1(input: string) {

    const rows = input.split('\n');
    const colums = rows[0].split('').map((_val, i) => {
        return rows.reduce((val, current) => val + current.charAt(i),'');
    });
    const diagonals = [...diagonal(rows, true), ...diagonal(rows, false)];


    const searchRegx =/(?=XMAS)|(?=SAMX)/g;

    const foundInRows = rows.reduce((sum, line) => sum += [...line.matchAll(searchRegx)].length, 0);
    const foundInColums = colums.reduce((sum, line) => sum += [...line.matchAll(searchRegx)].length, 0);
    const foundInDiagonals = diagonals.reduce((sum, line) => sum += [...line.matchAll(searchRegx)].length, 0);

    return foundInRows + foundInColums + foundInDiagonals;
}

export function part2(input: string) {

   return 0;
}

