function intervalGame(input) {
    let moves = Number(input[0]);
    let result  = 0;
    let sumCnt = 0, cnt1 = 0, cnt2 = 0, cnt3 = 0, cnt4 = 0, cnt5 = 0, cnt6 = 0;

    for(let index = 1; index <= moves; index++) {
        let currNum = Number(input[index]);

        if (currNum >= 0 && currNum <= 9) {
            result += 0.20 * currNum;
            cnt1++;
        } else if (currNum >= 10 && currNum <= 19) {
            result += 0.30 * currNum;
            cnt2++;
        } else if (currNum >= 20 && currNum <= 29) {
            result += 0.40 * currNum;
            cnt3++;
        } else if (currNum >= 30 && currNum <= 39) {
            result += 50;
            cnt4++;
        } else if (currNum >= 40 && currNum <= 50) {
            result += 100;
            cnt5++;
        } else {
            result /= 2;
            cnt6++;
        }
    }
    sumCnt = cnt1 + cnt2 + cnt3 + cnt4 + cnt5 + cnt6;

    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${(cnt1 / sumCnt * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(cnt2 / sumCnt * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(cnt3 / sumCnt * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(cnt4 / sumCnt * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(cnt5 / sumCnt * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(cnt6 / sumCnt * 100).toFixed(2)}%`);

}

intervalGame([10,
    43,
    57,
    -12,
    23,
    12,
    0,
    50,
    40,
    30,
    20]);