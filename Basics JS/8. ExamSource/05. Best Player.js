function bestPlayer(input) {
    let name = input[0];
    let goals = 0;

    let bestName = name;
    let bestGoals = Number(input[1]);

    let index = 0;
    while(name !== "END") {
        goals = input[++index];

        if(goals > bestGoals) {
            bestGoals = goals;
            bestName = name;
        }

        if(goals >= 10) {
            break;
        }

        name = input[++index];

    }

    if(name === "END" || goals >= 10) {
        console.log(`${bestName} is the best player!`);
        if(bestGoals >= 3) {
            console.log(`He has scored 3 goals and made a hat-trick !!!`);
        } else {
            console.log(`He has scored ${bestGoals} goals.`);
        }
        return;
    }
}

bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
bestPlayer(["Silva", "5", "HarryKane", "10"]);
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);