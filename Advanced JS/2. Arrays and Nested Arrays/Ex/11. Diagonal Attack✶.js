function diagonalAttack(arr) {
    arr = arr.map(line => line = line.split(" ").map(el => +el));

    let firstDiag = 0;
    let secondDiag = 0;
    let firstIndex = 0;
    let secondIndex = arr.length - 1;
    
    arr.forEach(line => {
        firstDiag += line[firstIndex++];
        secondDiag += line[secondIndex--];
    });
    
    if (firstDiag ===  secondDiag) {
            firstIndex = 0, secondIndex = arr.length - 1;

    for(let line of arr) {
        for(let i = 0; i < line.length; i++) {
            if (i !== firstIndex && i !== secondIndex) {
                line[i] = firstDiag;
            }
        }
        firstIndex++;
        secondIndex--;
    }
    }

    arr = arr.map(line => line.join(" ")).join("\n");
    return arr;
}

console.log(diagonalAttack(['5 3 12 3 1',
                            '11 4 23 2 5',
                            '101 12 3 21 10',
                            '1 4 5 2 2',
                            '5 22 33 11 1']));

console.log(diagonalAttack(['1 1 1',
                            '1 1 1',
                            '1 1 0']));