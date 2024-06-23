function csgo(input) {
    let itemsCount = Number(input[0]);
    let budget = Number(input[1]);
    
    if (itemsCount > 7) {
        console.log("Sorry, you can't carry so many things!");
        return;
    }

    let total = 0;

    let currObject = ""; 
    let currPrice = 0;

    for (let index = 2; index <= itemsCount + 1; index++) {
        currObject = input[index];
        switch (currObject) {
            case "ak47":        currPrice = 2700;   break;
            case "awp":         currPrice = 4750;   break;
            case "sg553":       currPrice = 3500;   break;
            case "grenade":     currPrice = 300;   break;
            case "flash":       currPrice = 250;   break;
            case "glock":       currPrice = 500;   break;
            case "bazooka":     currPrice = 5600;   break;
        }
        total += currPrice;
    }

    if (total <= budget) {
        console.log(`You bought all ${itemsCount} items! Get to work and defeat the bomb!`);
    } else if (total > budget) {
        console.log(`Not enough money! You need ${total - budget} more money.`);
    }
}

csgo(["5",
"10000",
"awp",
"glock",
"grenade",
"flash",
"flash"]);

csgo(["3",
"4150",
"sg553", 
"glock",
"grenade"]);

csgo(["8", "6300"]);