function diagonalAttack(input) {
    let arr = [];
    input.forEach(subArr => {
        subArr = subArr.split(" ").map(Number);
        arr.push(subArr);
    });

    // diagonalA sum

    let diagonalASum = 0;
    for(let rc = 0; rc < arr.length; rc++) {    // rc - roll coll;
        diagonalASum += arr[rc][rc];
    }

    // diagonalB sum
    let diagonalBSum = 0;
    for(let r = 0; r < arr.length; r++) {
        let c = arr.length - 1 - r;
        diagonalBSum += arr[r][c];
    }

    if (diagonalASum === diagonalBSum) {
        for(let r = 0; r < arr.length; r++) {
            for (let c = 0; c < arr.length; c++) {
                if (r !== c && (c !== arr.length - 1 - r)) {
                    arr[r][c] = diagonalASum;
                }
            }
        }
    }


    for (el of arr) {
        el = el.join(" ");
        console.log(el);
    }

}

diagonalAttack(['5 3 12 3 1',
                '11 4 23 2 5',
                '101 12 3 21 10',
                '1 4 5 2 2',
                '5 22 33 11 1']);


diagonalAttack(['1 1 1',
                '1 1 1',
                '1 1 0']);
