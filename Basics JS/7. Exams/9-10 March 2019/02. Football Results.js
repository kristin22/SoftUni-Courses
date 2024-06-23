function football(input) {  
    let wins = 0, drawn = 0, lost = 0;
   
    for(let index = 0; index <= 2; index++) {
        let game = input[index];
        let team1Scored = game[0];
        let team2Scored = game[2];

        if(team1Scored > team2Scored) wins++;
        else if(team1Scored === team2Scored) drawn++;  // drawn
        else lost++;   // lost
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${drawn}`)
}

football(["3:1",
"0:2",
"0:0"]);

football(["4:2",
"0:3",
"1:0"]);

football(["0:2",
"0:1",
"3:3"]);
