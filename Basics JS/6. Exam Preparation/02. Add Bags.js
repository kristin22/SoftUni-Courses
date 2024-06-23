function addBags(input) {
    let bagPriceOver20kg = Number(input[0]);
    let bagWeight = Number(input[1]);
    let daysTillTrip = Number(input[2]);
    let bagsCount = Number(input[3]);

    let bagPrice = 0;
    let totalPrice = 0;

    if (bagWeight < 10) {
        bagPrice = 0.2 * bagPriceOver20kg;
    } else if (bagWeight >= 10 && bagWeight <= 20) {
        bagPrice = 0.5 * bagPriceOver20kg;
    } else if (bagWeight > 20) {
        bagPrice = bagPriceOver20kg;
    }

    if (daysTillTrip > 30) {
        bagPrice *= 1.1;
    } else if (daysTillTrip >= 7 && daysTillTrip <= 30) {
        bagPrice *= 1.15;
    } else if (daysTillTrip < 7 ) {
        bagPrice *= 1.4;
    }

    totalPrice = bagPrice * bagsCount;

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}

addBags(["30",
"18",
"15",
"2"]);

addBags(["25.50",
"5",
"36",
"6"]);

addBags(["63.80",
"23",
"3",
"1"]);