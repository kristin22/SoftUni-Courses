function shop(input) {
    let product = input[0];
    let town = input[1];
    let count = Number(input[2]);

    let bill = 0;
    if (town == "Sofia") {
        if (product == "coffee") {
            bill = count * 0.50;
        } else if (product == "water") {
            bill = count * 0.80;
        } else if (product == "beer") {
            bill = count * 1.20;
        } else if (product == "sweets") {
            bill = count * 1.45;
        } else if (product == "peanuts") {
            bill = count * 1.60;
        }
    } else if (town == "Plovdiv") {
        if (product == "coffee") {
            bill = count * 0.40;
        } else if (product == "water") {
            bill = count * 0.70;
        } else if (product == "beer") {
            bill = count * 1.15;
        } else if (product == "sweets") {
            bill = count * 1.30;
        } else if (product == "peanuts") {
            bill = count * 1.50;
        }
    } else if (town == "Varna") {
        if (product == "coffee") {
            bill = count * 0.45;
        } else if (product == "water") {
            bill = count * 0.70;
        } else if (product == "beer") {
            bill = count * 1.10;
        } else if (product == "sweets") {
            bill = count * 1.35;
        } else if (product == "peanuts") {
            bill = count * 1.55;
        }
    }

    console.log(bill);
}

shop(["coffee" , "Varna", "2"]);
shop(["peanuts" , "Plovdiv", "1"]);
shop(["beer" , "Sofia", "2"]);
shop(["water" , "Plovdiv", "2"]);
shop(["sweets" , "Sofia", "2.23"]);
 