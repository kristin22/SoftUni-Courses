function seaTrip(input) {
    let foodMoney = Number(input[0]);
    let souvenirsMoney = Number(input[1]);
    let hotelMoney = Number(input[2]);

    let hotelTotal = hotelMoney * 0.9 + hotelMoney * 0.85 + hotelMoney * 0.8;

    let total = 420 / 100 * 7 * 1.85;
        total += 3 * (foodMoney + souvenirsMoney);
        total += hotelTotal;

    console.log(`Money needed: ${total.toFixed(2)}`);

}

seaTrip(["100", "50", "500"]);
seaTrip(["200", "20", "1000"]);
seaTrip(["50", "50", "120"]);



