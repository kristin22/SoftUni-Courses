function numberGenerator(input) {
    let m = Number(input[0]);
    let n = Number(input[1]);
    let l = Number(input[2]);
    let specialNumber = Number(input[3]);
    let controlNumber = Number(input[4]);

    let currNum = 0;
    // 1. devided by 3
    // 2. ends in 5
    // 3. is the number even

    for (let currM = m; currM >= 1; currM--) {
        for (let currN = n; currN >= 1; currN--) {
            for (let currL = l; currL >= 1; currL--) {
                currNum = currM * 100 + currN * 10 + currL;
                if(currNum % 3 === 0) {
                    specialNumber += 5;
                } else if (currNum % 10 === 5) {
                    specialNumber -= 2;
                } else if (currNum % 2 === 0) {
                    specialNumber *= 2;
                }
                if(specialNumber >= controlNumber) {
                    console.log(`Yes! Control number was reached! Current special number is ${specialNumber}.`);
                    return;
                }
            }
        }
    }

    console.log(`No! ${specialNumber} is the last reached special number.`);

}

numberGenerator(["9", "7", "3", "2", "44"]);
numberGenerator(["1", "1", "7", "1", "308"]);
