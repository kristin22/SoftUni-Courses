function balance(arr) {
    index = 0;
    let command = 0;

    let total = 0;
    while(true) {
        command = arr[index];
        if (command === "NoMoreMoney") {
            break;
        }

        let number = Number(command);
        if (number < 0) {
            console.log("Invalid operation!");
            break;
        }
        total += Number(command);
        console.log(`Increase: ${number.toFixed(2)}`);
        index++;
    }
    
    console.log(`Total: ${total.toFixed(2)}`);
}

balance(["5.51", 
        "69.42",
        "100",
        "NoMoreMoney"]);

balance(["120",
"45.55",
"-150"]);