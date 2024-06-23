function joinery(input) {   // 90/100
    let joineryCount = Number(input[0]);
    let joineryType = input[1];
    let receiveType = input[2];

    let joineryPrice = 0;
    let total = 0;
    let discount = 0;

    if(joineryCount <= 10) {
        console.log("Invalid order");
        return;
    }

    switch (joineryType) {
        case "90X130": 
            joineryPrice = 110;    
            if(joineryCount > 30 && joineryCount <= 60) {
                discount = 0.05 * joineryPrice;
            } else if(joineryCount > 60) {
                discount = 0.08 * joineryPrice;
            }  
            break;
        case "100X150":
            joineryPrice = 140;
            if(joineryCount > 400 && joineryCount <= 80) {
                discount = 0.06 * joineryPrice;
            } else if(joineryCount > 80) {
                discount = 0.10 * joineryPrice;
            } 
            break;
        case "130X180":
            joineryPrice = 190;
            if(joineryCount > 20 && joineryCount <= 50) {
                discount = 0.07 * joineryPrice;
            } else if(joineryCount > 50) {
                discount = 0.12 * joineryPrice;
            } 
            break;
        case "200X300":
            joineryPrice = 250;
            if(joineryCount > 25 && joineryCount <= 50) {
                discount = 0.09 * joineryPrice;
            } else if(joineryCount > 50) {
                discount = 0.14 * joineryPrice;
            } 
            break;
    }

    joineryPrice -= discount;
    total += (joineryCount * joineryPrice);

    if(receiveType === "With delivery") {
        total += 60;
    }

    if(joineryCount > 99) {
        total *= 0.96;
    }

    console.log(`${total.toFixed(2)} BGN`);
}

joinery(["40", 
"90X130",
"Without delivery"])

joinery(["105",
"100X150",
"With delivery"]);

joinery(["2",
"130X180",
"With delivery"]);