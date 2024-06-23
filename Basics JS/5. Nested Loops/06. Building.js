function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let currFloor = floors; currFloor >= 1; currFloor--) {
        let text = "";

        for (let currRoom = 0; currRoom < rooms; currRoom++) {
            if (currFloor === floors) { // L
                text += `L${currFloor}${currRoom} `;
            } else if (currFloor % 2 === 0) {   // O
                text += `O${currFloor}${currRoom} `;
            } else {    // A
                text += `A${currFloor}${currRoom} `;
            }
        }
        console.log(text);
    }

}

building(["6", "4"]);
// building(["9", "5"]);
// building(["4", "4"]);