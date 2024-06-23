function report(input) {
    let expected = Number(input[0]);
    let earned = 0;
    let cash = 0, card = 0;
    let price = 0;
    let cashCnt = 0, cardCnt = 0;


    let index = 1;
    let command = input[index];
    while (command !== "End") {
        if (earned >= expected) {
            break;
        }
        price = Number(command);


        if (index % 2 !== 0) {  // cash
            if (price > 100) { // can't pay cash
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                earned += price;
                cash += price;
                cashCnt++;
            }
        } else {    // card
           if (price < 10) {    // can't pay with card
            console.log("Error in transaction!");
           } else {
            console.log("Product sold!");
            earned += price;
            card += price;
            cardCnt++;
           }
        }

        index++;
        command = input[index];
    }

    if (earned >= expected) {
        console.log(`Average CS: ${(cash / cashCnt).toFixed(2)}`);
        console.log(`Average CC: ${(card / cardCnt).toFixed(2)}`);
    } else if (command === "End") {
        console.log("Failed to collect required money for charity.");
    }

}

report([500,
        120,
        8,
        63,
        256,
        78,
        317]);

report([600,
    86,
    150,
    98,
    227,
    "End"]);