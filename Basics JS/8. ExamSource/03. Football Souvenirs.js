function football(input) {
    let country = input[0];
    let souvenirType = input[1];
    let souvenirCount = Number(input[2]);

    let pricePer1 = 0;

    switch (country) {
        case "Argentina": 
            switch (souvenirType) {
                case "flags":       pricePer1 = 3.25;   break;
                case "caps":        pricePer1 = 7.20;   break;
                case "posters":     pricePer1 = 5.10;   break;
                case "stickers":    pricePer1 = 1.25;   break;
            }
            break;
        case "Brazil":
            switch (souvenirType) {
                case "flags":       pricePer1 = 4.20;   break;
                case "caps":        pricePer1 = 8.50;   break;
                case "posters":     pricePer1 = 5.35;   break;
                case "stickers":    pricePer1 = 1.20;   break;
            }
            break;

        case "Croatia":
            switch (souvenirType) {
                case "flags":       pricePer1 = 2.75;   break;
                case "caps":        pricePer1 = 6.90;   break;
                case "posters":     pricePer1 = 4.95;   break;
                case "stickers":    pricePer1 = 1.10;   break;
            }
            break;

        case "Denmark":
            switch (souvenirType) {
                case "flags":       pricePer1 = 3.10;   break;
                case "caps":        pricePer1 = 6.50;   break;
                case "posters":     pricePer1 = 4.80;   break;
                case "stickers":    pricePer1 = 0.90;   break;
            }
            break;b  
    }


    let isCountry = country === "Argentina" || country === "Brazil" || country === "Croatia" || country === "Denmark";
    let isSouvenir = souvenirType === "flags" || souvenirType === "caps" || souvenirType === "posters" || souvenirType === "stickers";

    if (isCountry && isSouvenir) {
        console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${(souvenirCount * pricePer1).toFixed(2)} lv.`);
    } else if (!isCountry) {
        console.log("Invalid country!");
    } else if ("Invalid stock!");
}

football(["Brazil", 
"stickers",
"5"]);

football(["Denmark",
"caps",
"8"]);

football(["USA",
"caps",
"18"]);

football(["Croatia",
"flags",
"13"]);

football(["Argentina",
"shirts",
"35"]);