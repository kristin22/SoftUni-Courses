function ticketCombination(input) { // ERROR at second and thitd test
    let number = Number(input[0]);
    let counter = 0;
    let ticketNum = "";

    let prize = 0;

    for (let first = 66; first <= 76; first++) {                    // B - L   66 - 76
        for (let second = 102; second >= 97; second--) {            // f - a    102 - 97
            for (let third = 65; third <= 67; third++) {            // A - C    65 - 67
                for (let fourth = 1; fourth <= 10; fourth++) {      // 1 - 10
                    for (let fifth = 10; fifth >= 1; fifth--) {     // 10 - 1
                        counter++;
                        if(counter === number) {
                            ticketNum += `${String.fromCharCode(first)}${String.fromCharCode(second)}${String.fromCharCode(third)}${fourth}${fifth}`;

                            prize  = first + second + third + fourth + fifth;

                            console.log(`Ticket combination: ${ticketNum}`);
                            console.log(`Prize: ${prize} lv.`)
                            
                            return;
                        }
                    }
                }
            }
        }
    }

}

ticketCombination(["17"]);
ticketCombination(["2568"]);
ticketCombination(["7589"]);