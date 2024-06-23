function bitcoinMining(arr) {
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let n  = arr.length;

    let totalLv = 0;
    let boughtAtDay = 0;
    let bitcoinCnt = 0;

    for (let currDay = 1; currDay <= n; currDay++) {
        let currGold = arr[currDay-1];

        if (currDay % 3 === 0) {
            totalLv += currGold * goldPrice * 0.7;
        } else {
            totalLv += currGold * goldPrice;
        }

        if (totalLv >= bitcoinPrice) {
            if (boughtAtDay === 0) {
                boughtAtDay = currDay;
            }
            bitcoinCnt++;
            totalLv -= bitcoinPrice;
        }
    }

    while (totalLv >= bitcoinPrice) {
        bitcoinCnt++;
        totalLv -= bitcoinPrice;
    }

    console.log(`Bought bitcoins: ${bitcoinCnt}`);
    if (boughtAtDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${boughtAtDay}`);
    }
    console.log(`Left money: ${totalLv.toFixed(2)} lv.`);


}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
