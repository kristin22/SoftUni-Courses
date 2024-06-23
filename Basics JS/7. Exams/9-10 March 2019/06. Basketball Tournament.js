function basketball(input) {
 let index = 0;
 let tournamentName = input[0];
 let wins = 0, losts = 0;
 let total = 0;
 
 while(true) {
    if(tournamentName === "End of tournaments") {
        total = wins + losts;
        console.log(`${(wins / total * 100).toFixed(2)}% matches win`);
        console.log(`${(losts / total * 100).toFixed(2)}% matches lost`);
        return;
    }
    let n = Number(input[++index]);
    for(let i = 1; i <= n; i++) {
        let teamDesi = input[++index];
        let team2 = input[++index];
        if(teamDesi > team2) {
            wins++;
            console.log(`Game ${i} of tournament ${tournamentName}: win with ${teamDesi - team2} points.`);
        } else {
            losts++;
            console.log(`Game ${i} of tournament ${tournamentName}: lost with ${team2 - teamDesi} points.`);
        }
    }

    tournamentName = input[++index];
 }

}

basketball(["Dunkers",
            "2",
            "75",
            "65",
            "56",
            "73",
            "Fire Girls",
            "3",
            "67",
            "34",
            "83",
            "98",
            "66",
            "45",
            "End of tournaments"]);
