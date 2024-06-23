function gymnastics(input) {
    let team = input[0];
    let item = input[1];

    let difficulty = 0;
    let execution = 0;
    if(team ==="Russia") {
        if (item === "ribbon") {
            difficulty = 9.100;
            execution = 9.400;
        } else if(item === "hoop") {
            difficulty = 9.300;
            execution = 9.800;
        } else if(item === "rope") {
            difficulty = 9.600;
            execution = 9.000;
        }
    } else if(team === "Bulgaria") {
        if (item === "ribbon") {
            difficulty = 9.600;
            execution = 9.400;
        } else if(item === "hoop") {
            difficulty = 9.550;
            execution = 9.750;
        } else if(item === "rope") {
            difficulty = 9.500;
            execution = 9.400;
        }
    } else if(team === "Italy") {
        if (item === "ribbon") {
            difficulty = 9.200;
            execution = 9.500;
        } else if(item === "hoop") {
            difficulty = 9.450;
            execution = 9.350;
        } else if(item === "rope") {
            difficulty = 9.700;
            execution = 9.150;
        }
    }

    let score = difficulty + execution;
    let percentageTotal = ((20 - score) / 20) * 100;

    console.log(`The team of ${team} get ${score.toFixed(3)} on ${item}.`);
    console.log(`${percentageTotal.toFixed(2)}%`);
}

gymnastics(["Bulgaria",
            "ribbon"]);

            