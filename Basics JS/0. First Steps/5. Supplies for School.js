function total(input) {
    let penPacks = Number(input[0]);
    let markerPacks = Number(input[1]);
    let cleanerL = Number(input[2]);
    let discountPrcnt = Number(input[3]);

    let total = penPacks * 5.80 + markerPacks * 7.20 + cleanerL * 1.20;
    total -= total * (discountPrcnt / 100);
    console.log(total);
}

total(["2", "3", "4", "25"]);
total(["4", "2", "5", "13"]);