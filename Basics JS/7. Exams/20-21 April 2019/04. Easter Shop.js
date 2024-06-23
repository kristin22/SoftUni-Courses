function shop(input) {
    let eggsCount = Number(input[0]);
    
    let index = 1;
    let command = input[index];
    let eggsSold = 0;

    while (true) {
        if(command === "Close") {
            console.log(`Store is closed!`);
            console.log(`${eggsSold} eggs sold.`);
            return;
        }

        let currOrder = Number(input[++index]);

        if(eggsCount < currOrder && command === "Buy") {
            console.log("Not enough eggs in store!");
            console.log(`You can buy only ${eggsCount}.`);
            return;
        }

        if(command === "Buy") {
            eggsCount -= currOrder;
            eggsSold += currOrder;
        } else if(command === "Fill") {
            eggsCount += currOrder;
            
        }

        command = input[++index];
    }
}

shop(["13",
"Buy",
"8",
"Fill",
"3",
"Buy",
"10"]);

shop(["20",
"Fill",
"30",
"Buy",
"15",
"Buy",
"20",
"Close"]);