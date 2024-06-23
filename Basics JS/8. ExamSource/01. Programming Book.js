function prBook(input) {
    let price1Page = Number(input[0]);
    let price1Cover = Number(input[1]);
    let prDiscount = Number(input[2]);
    let designer = Number(input[3]);
    let teamPay = Number(input[4]);

    let money =price1Page * 899 + price1Cover * 2;
        money *= (1 - (prDiscount / 100));
        money += designer;
        money *= (1 - (teamPay / 100));

    console.log(`Avtonom should pay ${money.toFixed(2)} BGN.`);
}

prBook(["0.01",
"1",
"10",
"20",
"20"]);

prBook(["0.05",
"1.20",
"40",
"19.99",
"20"]);

prBook(["0.02",
"0.50",
"18",
"21",
"50"]);