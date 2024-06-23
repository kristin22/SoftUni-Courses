function fuelTwo(input) {
    let fuelType = input[0];
    let liters = Number(input[1]);
    let clubCard = input[2];

    
    let prisePerL = 0;

    if (clubCard === "No") {
        if (fuelType === "Gasoline") {
            prisePerL = 2.22;
        } else if (fuelType === "Diesel") {
            prisePerL = 2.33;
        } else if (fuelType === "Gas") {
            prisePerL = 0.93;
        }    
    } else if (clubCard === "Yes") {
        if (fuelType === "Gasoline") {
            prisePerL = (2.22 - 0.18);
        } else if (fuelType === "Diesel") {
            prisePerL = (2.33 - 0.12);
        } else if (fuelType === "Gas") {
            prisePerL = (0.93  - 0.08);
        } 
    }

    let total = liters * prisePerL;

    if (liters >= 20 && liters <= 25) {
        total *= 0.92;
    } else if (liters >25) {
        total *= 0.90;
    }
    console.log(`${total.toFixed(2)} lv.`);
}

fuelTwo(["Gas", "30", "Yes"]);
fuelTwo(["Gasoline", "25", "No"]);
fuelTwo(["Diesel", "19", "No"]);