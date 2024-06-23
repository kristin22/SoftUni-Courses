function sumSecs(input) {
    let player1 = Number(input[0]);
    let player2 = Number(input[1]);
    let player3 = Number(input[2]);

    let sumTime = player1 + player2 + player3;
    let mins = Math.floor(sumTime / 60);
    let secs = (sumTime % 60);

    if(secs < 10) {
        console.log(`${mins}:0${secs}`);
        //console.log(minutes + ":0" + seconds);

    } else {
        console.log(`${mins}:${secs}`);
        // console.log(minutes + ":" + seconds);
    }

}

sumSecs([ "35", "45", "44" ]);
sumSecs(["22", "7", "34"]);
sumSecs(["50", "50", "49"]);
sumSecs(["14", "12", "10"]);
