function bags(input) {
    let priceOver20kg = Number(input[0]);
    let bagWeight = Number(input[1]);
    let days = Number(input[2]);
    let bagsCount = Number(input[3]);

    let pricePerBag = 0;
    if(bagWeight < 10) {
        pricePerBag = 0.2 * priceOver20kg;
    } else if(bagWeight >= 10 && bagWeight <= 20) {
        pricePerBag = 0.5 * priceOver20kg;
    } else if(bagWeight > 20) {
        pricePerBag = priceOver20kg;
    }

    if(days > 30) {
        pricePerBag *= 1.1;
    } else if(days >= 7 && days <= 30) {
        pricePerBag *= 1.15;
    } else if(days < 7) {
        pricePerBag *= 1.4;
    }

    let total = bagsCount * pricePerBag;


    console.log(`The total price of bags is: ${total.toFixed(2)} lv.`);
}

bags(["30",
"18",
"15",
"2"]);

bags(["25.50",
"5",
"36",
"6"]);


bags(["63.80",
"23",
"3",
"1"]);