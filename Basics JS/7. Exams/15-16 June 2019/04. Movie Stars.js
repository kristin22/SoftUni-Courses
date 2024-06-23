function movieStars(input) {
    let budget = Number(input[0]);
    
    let index = 1;
    let command = input[index];

    while(command !== "ACTION") {

        if(command.length > 15) {
            budget -= 0.20 * budget;
        } else {
            index++;
            let curPrice = Number(input[index]);
            budget -= curPrice;
        }

        if(budget <= 0) {
            break;
        }

        index++;
        command = input[index];
    }

    
    if(command === "ACTION") {
        console.log(`We are left with ${Math.abs(budget).toFixed(2)} leva.`);
    } else  {
        console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
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