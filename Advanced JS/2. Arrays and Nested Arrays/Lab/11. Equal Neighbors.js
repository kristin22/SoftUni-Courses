function equalNeighbours(arr) {
    let rowLength = arr.length;
    let colLength = arr[0].length;
    let matches = 0;

    arr.forEach(line => {
        for (let i = 1; i < rowLength; i++) {
            if(line[i] === line[i-1]) { matches++; }
        }
    })

    for (let r = 1; r < rowLength; r++) {
        for (let c = 0; c < colLength; c++) {
            // if(arr[r][c] === arr[r][c-1]) { matches++; }
            if(arr[r][c] === arr[r-1][c]) { matches++; }
        }
    }

    return matches;
}

console.log(equalNeighbours([['2', '3', '4', '7', '0'],
                            ['4', '0', '5', '3', '4'],
                            ['2', '3', '5', '4', '2'],
                            ['9', '8', '7', '5', '4']]));

console.log(equalNeighbours([['test', 'yes', 'yo', 'ho'],
                            ['well', 'done', 'yo', '6'],
                            ['not', 'done', 'yet', '5']]));