function party(input) {
    let rent = Number(input[0]);

    let cakePrice = 0.2 * rent;
    let drinksPrice = 0.55 * cakePrice;
    let animatorPrice = rent / 3;
    
    let budget = rent + cakePrice + drinksPrice + animatorPrice;
    console.log(budget);
}

party(["2250"]);
party(["3720"]);