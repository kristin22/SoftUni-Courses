function pcStore(input) {
    let processorPriceUSD = Number(input[0]);
    let videocardsPriceUSD = Number(input[1]);
    let ramPriceUSD = Number(input[2]);
    let ramCount = Number(input[3]);
    let discountPr = Number(input[4]);

    let processorPriceBGN = processorPriceUSD * 1.57;
        processorPriceBGN *= (1 - discountPr);

    let videocardsPriceBGN = videocardsPriceUSD * 1.57;
        videocardsPriceBGN *= (1 - discountPr);

    let ramPriceBGNtotal = ramPriceUSD * 1.57 * ramCount;
    
    let total = processorPriceBGN + videocardsPriceBGN + ramPriceBGNtotal;

    console.log(`Money needed - ${total.toFixed(2)} leva.`);
}

pcStore(["500",
"200",
"80",
"2",
"0.05"]);

pcStore(["1200",
"850",
"120",
"4",
"0.1"]);

pcStore(["200",
"100",
"80",
"1",
"0.01"]);