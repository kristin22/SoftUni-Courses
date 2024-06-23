function gameInfo(input) {
    let teamName = input[0];
    let playedGames = Number(input[1]);

    let totalMins = 0;
    let currMins = 0;
    let penalties = 0;
    let additional = 0;

    for (let currGame = 2; currGame <= playedGames + 1; currGame++) {
        currMins = Number(input[currGame]);
        totalMins += currMins;

        if (currMins > 90 && currMins <= 120) {
            additional++;
        } else if (currMins > 120) {
            penalties++;
        }

    }

    console.log(`${teamName} has played ${totalMins} minutes. Average minutes per game: ${(totalMins / playedGames).toFixed(2)}`);
    console.log(`Games with penalties: ${penalties}`);
    console.log(`Games with additional time: ${additional}`);
}

gameInfo(["England",
"3",
"95",
"115",
"123"]);

gameInfo(["Croatia",
"4",
"93",
"90",
"120",
"125"]);

gameInfo(["Brazil",
"2",
"96",
"115"]);