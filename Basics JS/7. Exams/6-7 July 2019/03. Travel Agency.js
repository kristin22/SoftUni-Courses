function travelAgency(input) {
    let city = input[0]; 
    let packType = input[1];
    let discount = input[2];
    let days = Number(input[3]);
 
    let pricePerDay = 0;

    let isValidCity = city == "Bansko" || city == "Borovets" || city == "Varna" || city == "Burgas";
    let isValidPack = packType == "withEquipment" || packType == "noEquipment" || packType == "withBreakfast" || packType == "noBreakfast";
    let isValidVIP = discount == "yes" || discount == "no";
    let isValidDays = days >= 1 && days <= 10000;

    let isValidData = isValidCity && isValidPack && isValidVIP && isValidDays;

    if ((!isValidCity || !isValidPack) && isValidVIP && isValidDays) {
        console.log("Invalid input!");
    } else if (isValidData) {
        if (days > 7){
            days--;
        }

        if (city == "Bansko" || city == "Borovets") {
            if (packType == "withEquipment") {
                if (discount == "yes") {
                    pricePerDay = 0.90 * 100.00;
                } else if (discount == "no") {
                    pricePerDay = 100.00;
                }
            } else if (packType == "noEquipment") {
                if (discount == "yes") {
                    pricePerDay = 0.95 * 80.00;
                }
                else if (discount == "no") {
                    pricePerDay = 80.00;
                }
            }
        } else if (city == "Varna" || city == "Burgas") {
            if (packType == "withBreakfast") {
                if (discount == "yes") {
                    pricePerDay = 0.88 * 130.00;
                }
                else if (discount == "no") {
                    pricePerDay = 130.00;
                }
            } else if (packType == "noBreakfast") {
                if (discount == "yes") {
                    pricePerDay = 0.93 * 100.00;
                }
                else if (discount == "no") {
                    pricePerDay = 100.00;
                }
            }
        }
    }

    if (isValidData) {
        console.log(`The price is ${(days * pricePerDay).toFixed(2)}lv! Have a nice time!`);
    } else if (isValidCity && isValidPack && isValidVIP && days < 1) {
        console.log(`Days must be positive number!`);
    } 
 

}

travelAgency(["Borovets",
            "noEquipment",
            "yes",
            6]);
        
travelAgency(["Gabrovo",
    "noBreakfast",
    "no",
    3]);