function magicMatrix(arr) {
    let rows = arr.map(line => line.reduce((acc, curr) => acc + curr));
    
    let cols = arr.reduce((acc, curr) => {
        curr.map((num, i) => acc[i] = (acc[i] || 0) + num );
        return acc;
    }, [])

    let equality = array => array.every(el => el === array[0]);

    return equality(rows) && equality(cols) && rows[0] === cols[0];
}

console.log(magicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1],]));
console.log(magicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0],]));