function coins(input) {     
    let change = Number(input[0]);
    let inCoins = Math.floor(change * 100);
    let coinsCnt = 0;

    while (inCoins > 0) {
        if (inCoins >= 200) {
            inCoins -= 200;
        } else if (inCoins >= 100) {
            inCoins -= 100;
        } else if (inCoins >= 50) {
            inCoins -= 50;
        } else if (inCoins >= 20) {
            inCoins -= 20;
        } else if (inCoins >= 10) {
            inCoins -= 10;
        } else if (inCoins >= 5) {
            inCoins -= 5;
        } else if (inCoins >= 2) {
            inCoins -= 2;
        } else if (inCoins >= 1) {
            inCoins--;
        }
        coinsCnt++;
    }
    console.log(coinsCnt);
}

coins([1.23]);