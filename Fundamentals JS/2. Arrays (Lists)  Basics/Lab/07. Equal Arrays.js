function arrEquality(arrOne, arrTwo) {
    let n = arrOne.length;
    let sum = 0;

    // parcing string array to be number array:
    arrOne = arrOne.map(a => Number(a));
    arrTwo = arrTwo.map(a => Number(a));
    
    for (let i = 0; i < n; i++) {
        if (arrOne[i] === arrTwo[i]) {
            sum += arrOne[i];
        } else  {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}

arrEquality(['10','20','30'], ['10','20','30']);
arrEquality(['1','2','3','4','5'], ['1','2','4','4','5']);
arrEquality(['1'], ['10']);