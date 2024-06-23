function shop (input) {
    let budget = Number(input[0]);
    index = 1;
    let command = input[index];
    let total = 0;
    let price  = 0;
    let cnt = 0;

    while(command !== "Stop") {
        let product = command;
        index++;
        price = Number(input[index]);
        if(price > budget) {
            break;
        } 
        cnt++;
        if(cnt % 3 === 0) {
            price *= 0.50;
        }
        total += price;
        budget -= price;

        index++;
        command = input[index];
    }

    if(command === "Stop") {
        console.log(`You bought ${cnt} products for ${total.toFixed(2)} leva.`);
    } else if(price > budget) {
        console.log(`You don't have enough money!`);
        console.log(`You need ${(price - budget).toFixed(2)} leva!`);
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