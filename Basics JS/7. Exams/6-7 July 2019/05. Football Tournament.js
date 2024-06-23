function football(input) {
    let teamName = input[0];
    let n = Number(input[1]);
    let w = 0, d = 0, l = 0, all = 0;;
    let sum = 0;

    for(let index = 2; index <= 2+n; index++) {
        let result = input[index];
        if(result === "W") {
            w++;
            sum += 3;
        } else if(result === "D") {
            d++;
            sum++;
        } else if(result === "L") {
            l++;
        }
    }

    all = w + d + l;

    if(n === 0) {
        console.log(`${teamName} hasn't played any games during this season.`);
    } else if(n >= 1) {
        console.log(`${teamName} has won ${sum} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${w}`);
        console.log(`## D: ${d}`);
        console.log(`## L: ${l}`);
        console.log(`Win rate: ${(w / all * 100).toFixed(2)}%`);
    }
}

football(["Liverpool",
        "10",
        "W",
        "D",
        "D",
        "W",
        "L",
        "W",
        "D",
        "D",
        "W",
        "W"]);