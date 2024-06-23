function numberWars(input) {
    let player1 = input[0];
    let player2 = input[1];

    let player1Points = 0, player2Points = 0;

    let index = 2;
    let command = input[index];

    for(let i = 1; i <= 18; i++) {
        let card1 = Number(command);
        //index++;
        command = input[++index];
        let card2 = Number(command);

        if(card1 > card2) {
            player1Points += (card1 - card2);
        } else if(card1 === card2) {
            console.log(`Number wars!`);
            card1 = input[++index];
            card2 = input[++index];

            if(card1 > card2) {
                console.log(`${player1} is winner with ${player1Points} points`);
            } else {
                console.log(`${player2} is winner with ${player2Points} points`);
            }
            return;
        } else {
            player2Points += (card2 - card1);
        }

        command = input[++index];
        if(command === "End of game") {
            console.log(`${player1} has ${player1Points} points`);
            console.log(`${player2} has ${player2Points} points`);
            return;
        }
    }

}

numberWars(["Desi",
        "Niki",
        "7",
        "5",
        "3",
        "4",
        "3",
        "3",
        "5",
        "3"]);