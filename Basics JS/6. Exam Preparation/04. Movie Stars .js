function movieStars(input) {
    let budget = Number(input[0]);
    
    let index = 0;
    let command = input[++index];

    while (command !== "ACTION") {
        let actorName = command;
        let n = actorName.length;
        let earned = 0;

        if(n <= 15) {
            earned = Number(input[++index]);
        } else if (n > 15) {
            earned = 0.2 * budget;
        }

        budget -= earned;
        if (budget <= 0) {
            break;
        }

        command = input[++index];
    }


    if (budget <= 0) {
        console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
    } else if (budget > 0) {
        console.log(`We are left with ${Math.abs(budget).toFixed(2)} leva.`);
    }
}

movieStars(["90000",
"Christian Bale",
"70000.50",
"Leonard DiCaprio",
"Kevin Spacey",
"24000.99"]);

movieStars(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"]);