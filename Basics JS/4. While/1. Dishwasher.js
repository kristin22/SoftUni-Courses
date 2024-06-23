function dishwasher(input) {
    let bottles = Number(input[0]);
    let ml = bottles * 750;
    let dishes = 0, pots = 0;

    index = 1;
    command = input[index];
    while(command !== "End") {
        let n = Number(command);
        if(index % 3 === 0) {
            pots += n;
            ml -= n * 15;
        } else {
            dishes += n;
            ml -= n * 5;
        }

        if(ml < 0) {
            break;
        }
        index++;
        command = input[index];
    }

    if(ml >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${ml} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(ml)} ml. more necessary!`);
    }

}

dishwasher([2,
            53,
            65,
            55,
            "End"]);

dishwasher([1,
            10,
            15,
            10,
            12,
            13,
            30]);