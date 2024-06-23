function fuel(input) {
    let fuelType = input[0];
    let liters = Number(input[1]);

    let isFuel = fuelType === "Diesel" || fuelType === "Gasoline" || fuelType === "Gas";
    if (!isFuel) {
        console.log("Invalid fuel!");
        return;
    }

    fuelType = fuelType.toLowerCase();

    if (liters >= 25) {
        console.log(`You have enough ${fuelType.toLowerCase()}.`);
    } else if (liters < 25){
        console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
    }

}

fuel(["Diesel", "10"]);
fuel(["Gasoline", "40"]);
fuel(["Gas", "25"]);
fuel(["Kerosene", "200"]);