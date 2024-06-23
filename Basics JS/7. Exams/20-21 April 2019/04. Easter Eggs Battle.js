function battle(input) {
    let p1EggsCount = Number(input[0]);
    let p2EggCount = Number(input[1]);

    let index = 2;
    let command = input[index];
    while(true) {
        switch (command) {
            case "End":
                console.log(`Player one has ${p1EggsCount} eggs left.`);
                console.log(`Player two has ${p2EggCount} eggs left.`);
                return;
            case "one":
                p2EggCount--;
                break;
            case "two":
                p1EggsCount--;
                break;
        }

        if(p1EggsCount === 0) {
            console.log(`Player one is out of eggs. Player two has ${p2EggCount} eggs left.`);
            return;
        } else if(p2EggCount === 0) {
            console.log(`Player two is out of eggs. Player one has ${p1EggsCount} eggs left.`);
            return;
        }

        command = input[++index]
    }
    
}

battle(["5",
    "4",
    "one",
    "two",
    "one",
    "two",
    "two",
    "End"]);