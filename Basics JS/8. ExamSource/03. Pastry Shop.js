function pastryShop(input) {
    let pastryType = input[0];
    let pastryCount = Number(input[1]);;
    let dayNumber = Number(input[2]);

    let pricePer1 =  0;
    let total = 0;

    switch (pastryType) {
        case "Cake":           
            if (dayNumber >= 1 && dayNumber <= 15) {
                pricePer1 = 24;
            } else if (dayNumber > 15 && dayNumber <= 31) {
                pricePer1 = 28.70;
            }
            break;
        case "Souffle":             
            if (dayNumber >= 1 && dayNumber <= 15) {
                pricePer1 = 6.66;
            } else if (dayNumber > 15 && dayNumber <= 31) {
                pricePer1 = 9.80;
            }
            break;
        case "Baklava":     
            if (dayNumber >= 1 && dayNumber <= 15) {
                pricePer1 = 12.60;
            } else if (dayNumber > 15 && dayNumber <= 31) {
                pricePer1 = 16.98;
            }
            break;
    }

    total = pastryCount * pricePer1;

    if (dayNumber >= 1 && dayNumber <= 22) {
        if (total >= 100 && total <= 200) {
            total *= 0.85;
        } else if (total > 200) {
            total *= 0.75;
        }
    
        if (dayNumber >= 1 && dayNumber <= 15) {
            total *= 0.9;
        }
    }


    console.log(total.toFixed(2));
}

pastryShop(["Cake",
"10",
"15"]);

pastryShop(["Souffle",
"20",
"24"]);

pastryShop(["Baklava",
"50",
"1"]);

pastryShop(["Cake",
"5",
"12"]);
