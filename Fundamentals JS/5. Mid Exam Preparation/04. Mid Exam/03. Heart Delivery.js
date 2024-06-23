function cupid(commands) {  // Not finished yet
    let houses = String(commands.splice(0, 1));
    houses = houses.split("@").map(Number);

    let position = 0;
    let lastPosition = 0;
    
    let index = 0;

    while(commands[index] !== "Love!") {
        let jumpLength = commands[index].split(" ");
        jumpLength = Number(jumpLength[1]);

        position += jumpLength;
        if(position >= houses.length) {
            position = 0;
        } 
        if (houses[position] > 0) {
            houses[position] -= 2;
            if (houses[position] === 0 ) {
                console.log(`Place ${position} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${position} already had Valentine's day.`);
        }

            lastPosition = position;
        index++;
    }


    // const allEqual = houses => houses.every( house => house === 0);

    let faileHouses = 0;

    for(let house of houses) {
        if (house !== 0) {
            faileHouses++;
        }
    }

    console.log(`Cupid's last position was ${position}.`);

    if (faileHouses === 0) { // all houses are 0
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${faileHouses} places.`);
    }
}

cupid(["10@10@10@2",
        "Jump 1",
        "Jump 2",
        "Love!"]);

cupid(["2@4@2",
        "Jump 2",
        "Jump 2",
        "Jump 8",
        "Jump 3",
        "Jump 1",
        "Love!"]);