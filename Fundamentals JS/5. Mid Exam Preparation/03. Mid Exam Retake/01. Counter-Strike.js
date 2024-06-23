function counterStrike(arr) {
    let energy = Number(arr[0]);

    let wins = 0;

    for(let i = 1; i < arr.length; i++) {
        let enemyDistance = arr[i];
        if (i === arr.length-1 && enemyDistance === "End of battle") {
            break;
        }
        enemyDistance = Number(enemyDistance);

        if (energy <= 0) {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            return;
        }
        
        if (enemyDistance <= energy) {

            energy -= enemyDistance;
            wins++;
            if(wins % 3 === 0) {
                energy += wins;
            }
        }



    }

    console.log(`Won battles: ${wins}. Energy left: ${energy}`);
}

counterStrike(["100",
                "10",
                "10",
                "10",
                "1",
                "2",
                "3",
                "73",
                "10"]);

counterStrike(["200",
                "54",
                "14",
                "28",
                "13",
                "End of battle"]);