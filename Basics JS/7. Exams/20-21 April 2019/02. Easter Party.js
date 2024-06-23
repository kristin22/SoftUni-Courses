function party(input) {
    let n = Number(input[0]);
    let ticketPrice = Number(input[1]);
    let budget = Number(input[2]);

    if(n >= 10 && n <= 15) {
        ticketPrice *= 0.85;
    } else if(n > 15 && n <= 20) {
        ticketPrice *= 0.80;
    } else if(n > 20) {
        ticketPrice *= 0.75;
    }

    let sum = n * ticketPrice + 0.1 * budget;
    if(budget >= sum) {
        console.log(`It is party time! ${(budget - sum).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(sum - budget).toFixed(2)} leva needed.`);
    }
}

party(["18",
"30",
"450"]);

party(["8",
"25",
"340"]);

party(["24",
"35",
"550"]);