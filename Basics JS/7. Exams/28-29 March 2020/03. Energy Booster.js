function energyBooster(input) {
    let fruitType = input[0];
    let setType = input[1];
    let setsCount = Number(input[2]);

    let pricePerPack = 0;
    let total = 0;

    switch (fruitType) {
        case "Watermelon":
            switch (setType) {
                case "small":
                    pricePerPack = 2 * 56;
                    break;
                case "big":
                    pricePerPack = 5 * 28.70;
                    break;   
            }
            break;
        case "Mango":
            switch (setType) {
                case "small":
                    pricePerPack = 2 * 36.66;
                    break;
                case "big":
                    pricePerPack = 5 * 19.60;
                    break;   
            }
            break;
        case "Pineapple":
            switch (setType) {
                case "small":
                    pricePerPack = 2 * 42.10;
                    break;
                case "big":
                    pricePerPack = 5 * 24.80;
                    break;   
            }
            break;
        case "Raspberry":
            switch (setType) {
                case "small":
                    pricePerPack = 2 * 20;
                    break;
                case "big":
                    pricePerPack = 5 * 15.20;
                    break;   
            }
            break;

    }

    total = setsCount * pricePerPack;

    if(total >= 400 && total <= 1000) {
        total *= 0.85;
    } else if(total > 1000) {
        total *= 0.5;
    }

    console.log(`${total.toFixed(2)} lv.`);
}

energyBooster(["Watermelon",
"big",
"4"]);

energyBooster(["Pineapple",
"small",
"1"]);

energyBooster(["Raspberry",
"small",
"50"]);

energyBooster(["Mango",
"big",
"8"]);