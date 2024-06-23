function tenisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let starterPoints = Number(input[1]);
    let totalPoints = 0;
    let winsCounter = 0;
    
    for(let index = 2; index < 2 + tournamentsCount; index++) {
        let currentStage = input[index];
        if(currentStage === 'W') {
            totalPoints += 2000;
            winsCounter++;
        } else if(currentStage === 'F') {
            totalPoints += 1200;
        } else if(currentStage === 'SF') {
            totalPoints += 720;
        }
    }

    console.log(`Final points: ${totalPoints + starterPoints}`);
    console.log(`Average points: ${Math.floor(totalPoints / tournamentsCount)}`);
    console.log(`${(winsCounter / tournamentsCount * 100).toFixed(2)}%`)
}

tenisRanklist(["5",
            "1400",
            "F",
            "SF",
            "W",
            "W",
            "SF"]);

tenisRanklist(["4",
            "750",
            "SF",
            "W",
            "SF",
            "W"]);

tenisRanklist(["7",
            "1200",
            "SF",
            "F",
            "W",
            "F",
            "W",
            "SF",
            "W"]);