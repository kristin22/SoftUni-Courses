function slotMahine(input) {
    let balance = Number(input[0]);
    
    let index = 0;
    let command = input[++index];
    let currPrice = 0;
    let total = 0;

    while(command !== "Game Time") {
        switch (command) {
            case "OutFall 4":                     currPrice = 39.99;   break;
            case "CS: OG":                        currPrice = 15.99;   break;
            case "Zplinter Zell":                 currPrice = 19.99;   break;
            case "Honored 2":                     currPrice = 59.99;   break;
            case "RoverWatch":                    currPrice = 29.99;   break;
            case "RoverWatch Origins Edition":    currPrice = 39.99;   break;
            default:
                console.log("Not Found");
                command = input[++index];
                continue;
        }

        if (currPrice <= balance) {
            if (balance > 0) {
                console.log(`Bought ${command}`);
            }
            balance -= currPrice;
            total += currPrice;

        } else if (currPrice >  balance) {
            console.log("Too Expensive");
        }

        if (balance === 0) {
            console.log("Out of money!");
            return;
        }
        command = input[++index];
    }

    console.log(`Total spent: $${total.toFixed(2)}. Remaining: $${balance.toFixed(2)}`);

}

slotMahine(["120",
"RoverWatch",
"Honored 2",
"Game Time"]);

slotMahine(["19.99",
   "Reimen origin",
    "RoverWatch",
    "Zplinter Zell",
    "Game Time"]);

slotMahine(["79.99",
    "OutFall 4",
    "RoverWatch Origins Edition",
    "Game Time"]);
