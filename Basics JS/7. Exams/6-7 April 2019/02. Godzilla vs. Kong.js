function movie(input) {
    let budget = Number(input[0]);
    let workers = Number(input[1]);
    let clothes = Number(input[2]);

    let total = 0.10 * budget + workers * clothes;
    if(workers > 150) {
        total -= 0.10 * (workers * clothes);
    } 
    
    if(total > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(total - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} leva left.`);
        
    }
}

movie(["20000", 
    "120",
    "55.5"]);

movie(["15437.62",
    "186",
    "57.99"]);

movie(["9587.88",
    "222",
    "55.68"]);