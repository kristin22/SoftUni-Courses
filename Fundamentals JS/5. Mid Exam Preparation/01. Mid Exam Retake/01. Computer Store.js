function pcStore(arr) {
    let index = 0;
    let command = arr[index];

    let noTaxTotal = 0;
    let total = 0;

    if (command === "special" || command === "regular") {
        console.log("Invalid order!");
        return;
    }

    while (command !== "special" && command !== "regular") {
        let price = Number(command);

        if (price <= 0) {
            console.log("Invalid price!");
            command = arr[++index];
            continue;
        }

        noTaxTotal += price;

        command = arr[++index];
    }

    total = 1.2 * noTaxTotal;
    let taxes = 0.2 * noTaxTotal;

    if(command === "special") {
        total *= 0.9;
    } 

    if (total === 0) {
        console.log("Invalid order!");
    } else {
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${noTaxTotal.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${total.toFixed(2)}$`);
    }

}

pcStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);  
pcStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
pcStore (['regular']);
      