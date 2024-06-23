function war(input) {
    let pirateShip = input.shift().split(">").map(Number);
    let warship = input.shift().split(">").map(Number);
    let maxHealth = input.shift();

    let pirateShipSum = 0, warshipSum = 0;
    let command = input.shift();

    while(command !== "Retire") {
        command = command.split(" ");

        let index = Number(command[1]);
        let index2 = Number(command[2]);

        if(command[0] === "Fire") {
            let damage = index2;

            if (index >=0 && index < warship.length) { // index is valid
                warship[index] -= damage;
                if(warship[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    break;
                } 
            }

        } else if(command[0] === "Defend") {
            let damage = Number(command[3]);

            let isValidIndex = (index >= 0 && index < pirateShip.length) && (index2 >= 0 && index2 < pirateShip.length );

            if (isValidIndex) {
                for(let i = index; i <= index2; i++) {
                    pirateShip[i] -= damage;
                }
            }
            if(pirateShip[index] <= 0 || pirateShip[index2] <= 0) {
                console.log("You lost! The pirate ship has sunken.");
                return;
            }

        } else if(command[0] === "Repair") {
            if (index >= 0 && index < pirateShip.length) {
                pirateShip[index] += index2;
            }
        } else if(command[0] === "Status") { 
            let cnt = 0;
            for(let el of pirateShip) {
                if (el < 0.2 * maxHealth) {
                    cnt++;
                }
            }
            console.log(`${cnt} sections need repair.`);
        }

        command = input.shift();
    }

    for (let el of pirateShip) {
        pirateShipSum += el;
    }

    for (let el of warship) {
        warshipSum += el;
    }

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);
}

war(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);

war(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);