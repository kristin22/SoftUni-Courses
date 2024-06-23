function coffie(input) {
    let drink = input[0];
    let sugar = input[1];
    let drinkCnt = Number(input[2]);
    let price = 0;
    let sum = 0;

    if (drink === "Espresso") {
        if (sugar === "Without") {
            price = 0.90;
        } else if (sugar === "Normal") {
            price = 1.00;
        } else if (sugar === "Extra") {
            price = 1.20;
        }
    } else if (drink === "Cappuccino") {
        if (sugar === "Without") {
            price = 1.00;
        } else if (sugar === "Normal") {
            price = 1.20;
        } else if (sugar === "Extra") {
            price = 1.60;
        }
    } else if (drink === "Tea") {
        if (sugar === "Without") {
            price = 0.50;
        } else if (sugar === "Normal") {
            price = 0.60;
        } else if (sugar === "Extra") {
            price = 0.70;
        }
    }

    sum = drinkCnt * price;

    if (sugar === "Without") {
        sum *= 0.65;
    }
    if(drink === "Espresso" && drinkCnt >= 5) {
        sum *= 0.75;
    }
    if (sum > 15) {
        sum *= 0.80;
    }

    console.log(`You bought ${drinkCnt} cups of ${drink} for ${sum.toFixed(2)} lv.`);
}

coffie(["Espresso",
        "Without",
        10]);