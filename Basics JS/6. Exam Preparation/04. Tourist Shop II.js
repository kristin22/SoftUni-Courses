function shop(input) {
    let budget = Number(input[0]);
    let index = 1;

    let productsBoughtCount = 0;
    let totalSpend = 0;
    while (input[index] != "Stop") {
        let productName = input[index];
        index++;
        let productPrice = Number(input[index]);
        index++;

        if((productsBoughtCount + 1) % 3 === 0) {
            productPrice = productPrice / 2;
        }

        if(productPrice <= budget) {
            productsBoughtCount++;
            budget = budget - productPrice;
            totalSpend = totalSpend + productPrice;
        } else {
            budget = budget - productPrice;
            break;
        }

    }

 
    if(budget >= 0) {
        console.log(`You bought ${productsBoughtCount} products for ${totalSpend.toFixed(2)} leva.`);
    } else {
        console.log(`You don't have enough money!\nYou need ${(budget * -1).toFixed(2)} leva!`);
    }
}

shop(["153.20",
    "Backpack",
    "25.20",
    "Shoes",
    "54",
    "Sunglasses",
    "30",
    "Stop"]);

shop(["54",
    "Thermal underwear",
    "24",
    "Sunscreen",
    "45"]);