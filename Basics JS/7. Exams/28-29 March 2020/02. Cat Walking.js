function catWalk(input) {
    let minPerDay = Number(input[0]);
    let walksPerDay = Number(input[1]);
    let ckalIntakeDaily = Number(input[2]);

    let burnedCkalDaily = minPerDay * walksPerDay * 5;

    if(burnedCkalDaily >= 0.5 * ckalIntakeDaily) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCkalDaily}.`);
    } else if (burnedCkalDaily < 0.5 * ckalIntakeDaily) {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCkalDaily }.`);
    }
}

catWalk(["30",
"3",
"600"]);