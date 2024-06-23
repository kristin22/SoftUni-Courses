function club(input) {
    let goal = Number(input[0]);
    let index = 1;
    let command = input[index];
    let sum = 0;
    // цената е дължината неговото име. Ако цената на една поръчка е нечетно число, има 25% отстъпка от цената на поръчката. 

    while(command !== "Party!") {
        let name = command;
        let price = name.length;

        index++;
        let cnt = Number(input[index]);
        let curSum = cnt * price;
        if ((curSum % 10) % 2 !== 0) {
            sum += 0.75 * curSum;
        } else {
            sum += curSum;
        }

        if (sum >= goal) {
            console.log("Target acquired.");
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "Party!") {
        if (sum >= goal) {
            console.log("Target acquired.");
        } else {
            console.log(`We need ${(goal - sum).toFixed(2)} leva more.`);
        }
    }
    
    console.log(`Club income - ${sum.toFixed(2)} leva.`);
}

club([500,
    "Bellini",
    6,
    "Bamboo",
    7,
    "Party!"]);