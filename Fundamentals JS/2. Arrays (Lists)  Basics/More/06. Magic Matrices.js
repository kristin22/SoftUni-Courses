function magicMatrices(matrix2D) {
    // console.log(matrix2D[0][0]);

    let sum = 0;
    let currSum = 0;

    for (let i = 0; i < matrix2D.length; i++) {    // rowSum
        let currArr = matrix2D[i];
        currSum = 0;
        for (let j = 0; j < currArr.length; j++) {
            currSum += currArr[j];
        }
        if (i === 0) {
            sum = currSum;
        }

        if (sum !== currSum) {
            console.log(false);
            return;
        }

    }

    for (let c = 0; c < matrix2D.length; c++) {    // collSum
        currSum = 0;
        for (let r = 0; r < matrix2D.length; r++) {
            currSum += matrix2D[r][c];
        }
        if (sum !== currSum) {
            console.log(false);
            return;
        }
    }

    console.log(true);
}

magicMatrices([[4, 5, 6],
          [6, 5, 4],
          [5, 5, 5]]);

magicMatrices([[11, 32, 45],
          [21, 0, 1],
          [21, 1, 1]]);

magicMatrices([[1, 0, 0],
          [0, 0, 1],
          [0, 1, 0]]);