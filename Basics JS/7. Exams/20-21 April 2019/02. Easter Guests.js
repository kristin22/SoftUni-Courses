function guests(input) {
    let n = Number(input[0]);
    let budget = Number(input[1]);

    let breadCount = Math.ceil(n / 3);
    let eggsCount = n * 2;
    let sum = breadCount * 4 + eggsCount * 0.45;

    if(budget >= sum) {
        console.log(`Lyubo bought ${breadCount} Easter bread and ${eggsCount} eggs.`);
        console.log(`He has ${(budget - sum).toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(sum - budget).toFixed(2)} lv. more.`);
    }
}

guests(["10",
"35"]);

guests(["9",
"12"]);