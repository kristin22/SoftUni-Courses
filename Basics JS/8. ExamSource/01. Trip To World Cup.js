function tripToWorld(input) {
    let goPrice = Number(input[0]);
    let comePrice = Number(input[1]);
    let ticketPrice1 = Number(input[2]);
    let gamesCount = Number(input[3]);
    let discount = Number(input[4]);

    let transportPrice = (6 * (goPrice + comePrice)) * (1 - (discount / 100));
    let gameTotal = 6 * gamesCount * ticketPrice1;

    let total = transportPrice + gameTotal;
    let each = total / 6;

    console.log(`Total sum: ${total.toFixed(2)} lv.`);
    console.log(`Each friend has to pay ${each.toFixed(2)} lv.`);
}

tripToWorld(["175", "280", "125", "5", "15"]);
tripToWorld(["210", "235", "150", "6", "12"]);
tripToWorld(["218.55", "185.90", "170.50", "4", "17"]);

