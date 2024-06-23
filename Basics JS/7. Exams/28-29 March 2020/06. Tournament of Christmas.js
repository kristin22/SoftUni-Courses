function christmass(input) {
    let daysCount = Number(input[0]);

    let index = 0;
    let sport = "";
    let result = "";

    let total = 0, wins = 0, loses = 0;

    for(let days = 1; days <= daysCount; days++) {
        let currWins = 0, currLoses = 0, currSum = 0;

        while(true) {
        sport = input[++index];

            if(sport === "Finish") {
                break;
            }
            result = input[++index];
            if(result === "win") {
                currWins++;
                currSum += 20;
            } else {
                currLoses++;
            }
        }
        // wins += currWins;
        // loses += currLoses;
        if(currWins > currLoses) {
            currSum *= 1.1;
            wins++;
        } else {
            loses++;
        }
        total += currSum;
    }

    if(wins > loses){
        total *= 1.2;
        console.log(`You won the tournament! Total raised money: ${total.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${total.toFixed(2)}`);
    }
}

christmass(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"]);

christmass(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"]);