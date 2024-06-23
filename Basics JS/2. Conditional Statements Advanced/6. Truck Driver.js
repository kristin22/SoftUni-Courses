function driver(input){
    let season = input[0];
    let distance = Number(input[1]);

    let earned = 0;
    let pricePerKm = 0.0;

    if (distance <= 5000) {
        if (season == "Spring" || season == "Autumn") {
            pricePerKm = 0.75;
        } else if (season == "Summer") {
            pricePerKm = 0.90;
        } else if (season == "Winter") {
            pricePerKm = 1.05;
        }
    } else if (distance <= 10000) {
        if (season == "Spring" || season == "Autumn") {
            pricePerKm = 0.95;
        }
        else if (season == "Summer") {
            pricePerKm = 1.10;
        } else if (season == "Winter") {
            pricePerKm = 1.25;
        }
    } else if (distance <= 20000) {
        pricePerKm = 1.45;
    }

    earned = 0.90 * (4 * distance * pricePerKm);
    console.log(earned.toFixed(2));
}

driver(["Summer",
        "3455"]);

driver(["Winter",
    "4350"]);

driver(["Spring",
    "1600"]);

driver(["Autumn",
    "8600"]);