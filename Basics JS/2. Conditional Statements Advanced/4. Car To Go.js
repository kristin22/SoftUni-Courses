function car(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let classType = "";
    let carType = "";
    let carPrice = 0;


    if (budget <= 100) {
        classType = "Economy class";

        switch (season) {
            case "Summer":
                carType = "Cabrio";
                carPrice = 0.35 * budget;
                break;
            case "Winter":
                carType = "Jeep";
                carPrice = 0.65 * budget;
                break;
        }
    } else if (budget > 100 && budget <= 500) {
        classType = "Compact class";

        switch (season) {
            case "Summer":
                carType = "Cabrio";
                carPrice = 0.45 * budget;
                break;
            case "Winter":
                carType = "Jeep";
                carPrice = 0.80 * budget;
                break;
        }
    } else if (budget > 500) {
        classType = "Luxury class";
        carType = "Jeep";
        carPrice = 0.90 * budget;
    }

    console.log(classType);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);
}

car([450,
    "Summer"]);