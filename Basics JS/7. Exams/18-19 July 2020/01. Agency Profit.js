function agency(input) {
    let name = input[0];
    let ticketsCount = Number(input[1]);
    let ticketsKidsCount = Number(input[2]);
    let pricePerTicket = Number(input[3]);
    let priceKidsTitcket = 0.3 * pricePerTicket;
    let tax = Number(input[4]);

    pricePerTicket += tax;
    priceKidsTitcket += tax;

    let totalSum = ticketsCount * pricePerTicket + ticketsKidsCount * priceKidsTitcket;
    let profit = 0.2 * totalSum;

    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);
}

agency(["WizzAir",
"15",
"5",
"120",
"40"]);

agency(["Ryanair",
"60",
"23",
"158.96",
"39.12"]);