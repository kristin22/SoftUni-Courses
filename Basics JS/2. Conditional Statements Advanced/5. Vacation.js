function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let location = "";
    let place = "";
    let price = 0;

    if (budget <= 1000) {
        place = "Camp";

        switch (season) {
            case "Summer":
                price = 0.65 * budget;;
                break;
            case "Winter":
                price = 0.45 * budget;
                break;
        }
    } else if (budget > 1000 && budget <= 3000) {
        place = "Hut";

        switch (season) {
            case "Summer":
                price = 0.80 * budget;
                break;
            case "Winter":
                price = 0.60 * budget;
                break;
        }
    } else if (budget > 3000) {
        place = "Hotel";
        price = 0.90 * budget;
    }
    
    switch (season) {
        case "Summer":
            location = "Alaska";
            break;
        case "Winter":
            location = "Morocco";
            break;
    }

    console.log(`${location} - ${place} - ${price.toFixed(2)}`);
}

vacation([800,
    "Summer"]);