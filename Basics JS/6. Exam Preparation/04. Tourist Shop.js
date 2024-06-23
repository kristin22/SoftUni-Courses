function shop(input) {
    let budget = Number(input[0]);

    let index = 1;
    let command = input[index];
    let count = 0;
    let sum = 0;

    while (command != "Stop") {
        index++;
        // let product = command;
        let price = Number(input[index]);
        count++;

        if (count % 3 === 0) {
            price *= 0.50;
        }
        sum += price;


        if (budget < sum) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${Math.abs(budget - sum).toFixed(2)} leva!`);
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "Stop") {
        console.log(`You bought ${count} products for ${sum.toFixed(2)} leva.`);
    }
}

shop([153.20,
    "Backpack",
    25.20,
    "Shoes",
    54,
    "Sunglasses",
    30,
    "Stop",
    ]);

shop([54,
    "Thermal underwear",
    24,
    "Sunscreen",
    45]);