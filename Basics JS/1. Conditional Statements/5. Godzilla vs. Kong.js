function movie(input) {
    let budget = input[0];
    let statists = input[1];
    let clothesPricePer1 = input[2];

    let bill = 0.10 * budget + statists * clothesPricePer1;
    if (statists > 150) {
      bill -= (0.10 * statists * clothesPricePer1);
    } 
    
    if (bill > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(bill - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - bill).toFixed(2)} leva left.`);
    }
}

movie(["20000", "120","55.5"]);
movie(["15437.62", "186","57.99"]);
movie(["9587.88", "222","55.68"]);