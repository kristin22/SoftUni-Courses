function braceletStand(input) {
    let pocketMoney = Number(input[0]);
    let earnedPerDay = Number(input[1]);
    let expences = Number(input[2]);
    let presentPrice = Number(input[3]);

    let earned = 5 * (pocketMoney + earnedPerDay);
        earned -= expences;

    if(earned >= presentPrice) {
        console.log(`Profit: ${earned.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(presentPrice - earned).toFixed(2)} BGN.`);
    }
}

braceletStand(["5.12",
"32.05",
"15",
"150"]);

braceletStand(["2.10",
"17.50",
"20.20",
"148.50"]);

braceletStand(["15.20",
"200.00",
"7.30",
"1500.12"]);