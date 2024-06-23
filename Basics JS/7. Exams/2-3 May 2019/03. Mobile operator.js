function mobile(input) {
    let period  = input[0];
    let type = input[1];
    let internet = input[2];
    let months = Number(input[3]);

    let total = 0;
    let tax = 0;
    if(period === "one") {
        if(type === "Small") {
            tax = 9.98;
        } else if(type === "Middle") {
            tax = 18.99;
        } else if(type === "Large") {
            tax = 25.98;
        } else if(type === "ExtraLarge") {
            tax = 35.99;
        }
    } else if(period === "two") {
        if(type === "Small") {
            tax = 8.58;
        } else if(type === "Middle") {
            tax = 17.09;
        } else if(type === "Large") {
            tax = 23.59;
        } else if(type === "ExtraLarge") {
            tax = 31.79;
        }
    }

    if(internet === "yes") {
        if(tax <= 10) {
            tax += 5.50;
        } else if(tax <= 30) {
            tax += 4.35;
        } else {
            tax += 3.85;
        }
    }

    total = tax * months;
    if(period === "two") {
        total *= (1 - 0.0375);
    }

    console.log(`${total.toFixed(2)} lv.`);
}

mobile(["one",
        "Small",
        "yes",
        "10"]);

mobile(["two",
        "Large",
        "no",
        "10"]);

mobile(["two",
        "ExtraLarge",
        "yes",
        "20"]);

mobile(["two",
        "Small",
        "yes",
        "20"]);