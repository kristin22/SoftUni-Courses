function moon(input) {
    let averageSpeed = Number(input[0]);
    let fuelPer100km = Number(input[1]);


    let totalH = Math.ceil(768800 / averageSpeed);
        totalH += 3;

    let totalFuel = (fuelPer100km * 768800) / 100;

    console.log(totalH);
    console.log(totalFuel);
}

moon(["10000", "5"]);

moon(["5000", "7"]);

moon(["15000", "4"]);
