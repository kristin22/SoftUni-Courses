function toyShop(input) {
    let excursion = Number(input[0]);
    let puzzleCnt = Number(input[1]);
    let dollCnt = Number(input[2]);
    let bearCnt = Number(input[3]);
    let minionCnt = Number(input[4]);
    let truckCnt = Number(input[5]);

    let toyCnt = puzzleCnt + dollCnt + bearCnt + minionCnt + truckCnt;
    let total =  puzzleCnt * 2.60 + dollCnt * 3.00 + bearCnt * 4.10 + minionCnt * 8.20 + truckCnt * 2.00;

    if(toyCnt >= 50) {
        total *= 0.75;
    }
    
    let rent = 0.10 * total;
    let earnings = total -  rent;
    let difference = Math.abs(earnings - excursion);

    if(earnings >= excursion) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);