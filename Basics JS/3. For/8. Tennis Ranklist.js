function tenis(input) {
    let tournaments = Number(input[0]);
    let beginPoints = Number(input[1]);
    let points = 0;
    let w = 0;

    for (let index = 2; index < (2 + tournaments); index++) {
        let stage = input[index];

        if (stage === "W") {
            points += 2000;
            w++;
        } else if (stage === "F") {
            points += 1200;
        } else if (stage === "SF") {
            points += 720;
        }
    }

    console.log(`Final points: ${beginPoints + points}`);
    console.log(`Average points: ${parseInt(points / tournaments)}`);
    console.log(`${((w / tournaments) * 100).toFixed(2)}%`);
}

tenis(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);

tenis(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"]);

tenis(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"]);