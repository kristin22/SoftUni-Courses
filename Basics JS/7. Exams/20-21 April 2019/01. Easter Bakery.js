function bakery(input) {
    let flourPrice = Number(input[0]);
    let flourKgs = Number(input[1]);
    let sugarKgs = Number(input[2]);
    let eggBoxesCnt = Number(input[3]);
    let yeastPacks = Number(input[4]);

    let sugarPrice = 0.75 * flourPrice;
    let eggBoxPrice = 1.10 * flourPrice;
    let yeastPrice = 0.20 * sugarPrice;

    let total = flourKgs * flourPrice + sugarKgs * sugarPrice + eggBoxesCnt * eggBoxPrice + yeastPacks * yeastPrice;
    console.log(total.toFixed(2));    

}

bakery(["50",
        "10",
        "3.5",
        "6",
        "1"]);

bakery(["63.44",
        "3.57",
        "6.35",
        "8",
        "2"]);
