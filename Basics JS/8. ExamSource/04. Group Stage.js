function groupStage(input) {
    let teamName = input[0];
    let playedGames = Number(input[1]);

    let scored = 0, received = 0;
    let index = 1;

    let winPoints = 0, winsTotal = 0, lostTotal = 0;;
    let goalDiffSum = 0;

    for  (let currGame = 1; currGame <= playedGames; currGame++) {
        scored = Number(input[++index]);
        received = Number(input[++index]);

        winsTotal += scored;
        lostTotal += received;

        if(scored > received) {
            winPoints += 3;
        } else if (scored === received) {
            winPoints += 1;
        }

        goalDiffSum += (scored - received);
    }

    if (winsTotal >= lostTotal) {
        console.log(`${teamName} has finished the group phase with ${winPoints} points.`);
	    console.log(`Goal difference: ${goalDiffSum}.`);
    } else {
        console.log(`${teamName} has been eliminated from the group phase.`);
        console.log(`Goal difference: ${goalDiffSum}.`);
  
    }
}

groupStage(["Brazil", "3", "4", "2", "0", "0", "1", "1"]);
groupStage(["Germany", "2", "0", "2", "1", "3"]);
groupStage(["Croatia", "4", "3", "2", "1", "1", "2", "0", "2", "1"]);