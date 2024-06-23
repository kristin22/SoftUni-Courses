function transportPrice(input) {
    let km = Number(input[0]);
    let word = input[1];

    let price = 0;
    if (km < 20) {
        if (word == "day") {
            price = 0.70 + (0.79 * km);
        } else if (word == "night") {
            price = 0.70 + (0.90 * km);
        }
    } else if (km < 100) {
        price = 0.09 * km;
    } else {
        price = 0.06 * km;
    }

    console.log(price.toFixed(2));
}

transportPrice(["5", "day"]);
transportPrice(["7", "night"]);
transportPrice(["25", "day"]);
transportPrice(["180", "night"]);