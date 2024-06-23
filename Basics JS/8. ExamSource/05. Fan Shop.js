function fanShop(input) {
    let budget = Number(input[0]);
    let n = Number(input[1]);

    let productType = "";
    let productPrice = 0;
    let total = 0;

    for (let i = 2; i <= n + 1; i++) {
        productType = input[i];

        switch (productType) {
            case "hoodie":  productPrice = 30;  break;
            case "keychain":  productPrice = 4;  break;
            case "T-shirt":  productPrice = 20;  break;
            case "flag":  productPrice = 15;  break;
            case "sticker":  productPrice = 1;  break;
        }

        total += productPrice;
    }

    if (budget >= total) {
        console.log(`You bought ${n} items and left with ${budget - total} lv.`);
    } else if (budget < total) {
        console.log(`Not enough money, you need ${total - budget} more lv.`);
    }

}

fanShop(["25",
"3",
"flag",
"keychain",
"sticker"]);

fanShop(["5",
"2",
"hoodie",
"hoodie"]);
