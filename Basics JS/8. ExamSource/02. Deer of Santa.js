function deerOfSanta(input) {
    let daysOff = Number(input[0]);
    let foodLeft= Number(input[1]);
    let foodDeer1 = Number(input[2]);
    let foodDeer2 = Number(input[3]);
    let foodDeer3 = Number(input[4]);

    let foodNeed = daysOff * (foodDeer1 + foodDeer2 + foodDeer3);
    if(foodNeed <= foodLeft) {
        console.log(`${Math.floor(foodLeft - foodNeed)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(foodNeed - foodLeft)} more kilos of food are needed.`);
    }
}

deerOfSanta(["2",
"10",
"1",
"1",
"2"]);

deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"]);