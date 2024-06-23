function player(input) {
    let playerName = input[0];
    let playerGoals = Number(input[1]);
    let index = 1;

    let maxGoals = 0;
    let maxPlayer = "";


    while(true) {
        if(playerGoals >= 10) {
            maxGoals = playerGoals;
            maxPlayer = playerName;
            break;
        } else if(playerGoals > maxGoals) {
            maxGoals = playerGoals;
            maxPlayer = playerName;
        }

        playerName = input[++index];
        if(playerName === "END") {

            break;
        }
        playerGoals = input[++index];

    }

    console.log(`${maxPlayer} is the best player!`);
    if(maxGoals >= 3) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }

}

player(["Neymar", "2",
"Ronaldo",
"1",
"Messi",
"3",
"END"]);

player(["Silva",
"5",
"Harry Kane",
"10"]);

player(["Petrov",
"2",
"Drogba",
"11"]);

player(["Rooney",
"1",
"Junior",
"2",
"Paolinio",
"2",
"END"]);

player(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"]);