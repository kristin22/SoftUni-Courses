function beerAndChips(input) {
    let name = input[0];
    let budget = Number(input[1]);
    let bottlesCount = Number(input[2]);
    let chipsPacks = Number(input[3]);

    let beerTotal = 1.20 * bottlesCount;
    let chipsTotal = Math.ceil(beerTotal * 0.45 * chipsPacks); 
    let total = beerTotal + chipsTotal;


    if(budget >= total) {
        console.log(`${name} bought a snack and has ${(budget - total).toFixed(2)} leva left.`);
    } else if(budget < total) {
        console.log(`${name} needs ${(total - budget).toFixed(2)} more leva!`);
    }
}

beerAndChips(["George",
"10",
"2",
"3"]);

beerAndChips(["Valentin",
"5",
"2",
"4"]);